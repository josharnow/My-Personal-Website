import { useEffect, useState } from 'react';
import { StyledBanner } from '../styles';

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

const Banner = () => {
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
    <StyledBanner>
      {/* <h1 style={ { "margin": "1vw", "width": "fit-content" } }>I am currently seeking employment!</h1> */}
        <h4 style={ { "color": "#1f00eb", "textAlign": "center", "fontWeight": "bold", "margin": "0", "alignSelf": "center" }}>Currently seeking full-time employment as a software engineer; please contact me to inquire!</h4>
    </StyledBanner>
  );
};
export default Banner;