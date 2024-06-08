import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  const {load} = React.useContext(GithubContext);
  if(load){
    return (
      <main>
      <Navbar/>
      <Search/>
   <img src={loadingImage} alt={load} className="loading-img" />
       </main>
    )
  }
  return (
    <main>
   <Navbar/>
   <Search/>
   <Info/>
   <User/>
   <Repos/>
    </main>
  );
};

export default Dashboard;
