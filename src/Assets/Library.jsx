import React, { useEffect, useState } from 'react';
import '../Shared/globalStyles.css';
// import { APIKit } from '../spotify';


export default function Library() {
//  const [playlists, setPlaylists] = useState(null);

 useEffect(() => {
  // APIKit.length("me/playlists").then(function (response) {
  //   setPlaylists(response.data.items);
  //   console.log(response.data.items);
  // });
 }, []);

  return (
    <div className='screen-container'>
      <div className="library-body">
        {/* {playlists?.map((playlist) => (
          <div>Library</div>
        ))}; */}
        <div>
          Library
        </div>
      </div>
    </div>
  )
}
