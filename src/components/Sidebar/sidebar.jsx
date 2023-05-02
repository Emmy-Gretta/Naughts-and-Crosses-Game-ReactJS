import React, { useEffect, useState } from 'react';
import '../../styles/sidebar.css';
import logo from '../../images/profile.jpg';
import SidebarButton from './sidebarButton';
import { MdFavorite } from 'react-icons/md' ;
import { FaGripfire, FaPlay } from 'react-icons/fa' ;
import { FaSignOutAlt } from 'react-icons/fa' ;
import { IoLibrary } from 'react-icons/io5' ;
import { MdSpaceDashboard } from 'react-icons/md' ;
import apiClient from '../../spotify';


export default function Sidebar() {
  const [image, setImage] = useState(
    { logo }
  );
  useEffect(() => {
     apiClient.get("profile").then((response) => {
      console.log(response.data.images[0].url);
    });
  }, [])
  return (
    <div className='sidebar-container'>
      <img src={logo} 
      alt="profile-Pic"
      className='profile-img'
       />
       <div>
         <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />}/>
         <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
         <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
         <SidebarButton title="Favourites" to="/favourites" icon={<MdFavorite />} />
         <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
       </div>
       <SidebarButton title="Sign out" to="" icon={<FaSignOutAlt />} />
    </div>
  )
}
