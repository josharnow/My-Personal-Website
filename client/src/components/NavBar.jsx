import { useEffect, useState } from 'react';
import { StyledNavBar, StyledNavButton, StyledNavDiv } from '../styles';

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
    <StyledNavBar>
      <h1 style={{ "margin": "0", "padding": "0", "textAlign": "center", "width": "25vw", "alignSelf": "center", "fontSize": "4vw" }}>Josh Arnow</h1>
      <StyledNavDiv>
        <StyledNavButton>
          Home
        </StyledNavButton>
        <StyledNavButton>
          About
        </StyledNavButton>
        <StyledNavButton>
          Portfolio
        </StyledNavButton>
        <StyledNavButton>
          Contact Me
        </StyledNavButton>
      </StyledNavDiv>
    </StyledNavBar>
  );
};
export default NavBar;