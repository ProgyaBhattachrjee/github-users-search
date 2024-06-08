import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';
const GithubContext = React.createContext();
const GithubProvider = ({children}) =>{
    const [user,setuser] = useState(mockUser);
    const [repos,setrepos] = useState(mockRepos);
    const [v1,sv1] = useState(false);
    const [follow,setf] = useState(mockFollowers);
  const [n,sn] = useState("");
    const [req,setreq] = useState(0);
    const [load,setload] = useState(false);
    const [p,sp] = useState(null);
    const [error,seterror] = useState({show:false,msg:""})
    function tooglError (show = false,msg = "") {
        seterror({show,msg});
    }

const searchuser = async (user)=>{
    tooglError();
    setload(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch(err => console.log(err));
    const response1 = await axios(`${rootUrl}/users/${user}/repos?per_page=100`).catch(err => console.log(err));
    const response3 = await axios(`${rootUrl}/users/${user}/followers`).catch(err => console.log(err));
     if(response){
        setuser(response.data);
       setrepos(response1.data);
         setf(response3.data);
     }
     else{
        tooglError(true,"there is no user")
     }
     setload(false)
}

    const checkreq = ()=>{
        axios(`${rootUrl}/rate_limit`).then(({data})=> {
         let {rate: {remaining}} = data;    
         setreq(remaining);
         if(remaining == 0){
  tooglError(true,"Sorry limit Exceeded")
         } 
          }).catch((err)=>console.log(err));
    }
    useEffect(checkreq,[])
    return(
        <GithubContext.Provider value={{user,repos,follow,req,error,searchuser,load,n,sn,v1,sv1,p,sp}}>{children}</GithubContext.Provider>
    )
}
export {GithubContext,GithubProvider};