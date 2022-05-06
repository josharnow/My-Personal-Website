import { useEffect, useState } from 'react';
// import { accessToken } from '../spotify';
// import { useParams } from 'react-router-dom';
// import {
//   LoginButton,
//   LogoutButton,
//   ProfileButton,
//   HomeButton,
//   TopArtistsButton,
//   TopTracksButton,
//   PlaylistsButton,
//   CreatePlaylistButton
// } from './buttons';

const NavBar = () => {
  // const [token, setToken] = useState(null);
  // const [artists, setArtists] = useState(null);
  // const [tracks, setTracks] = useState(null);

  // useEffect(() => {
  //   setToken(accessToken); // Sets token to the accessToken variable imported from the spotify.js file
  // }, []);

  // const handleCallback = (childArtists, childTracks) => {
  //   setArtists(childArtists);
  //   setTracks(childTracks);
  // }

  return (
    <nav>
      <h1>NavBar Test</h1>
    </nav>
  );
};
export default NavBar;