import { createGlobalStyle } from 'styled-components/macro';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`

  ${fonts};
  ${variables};

  ${'' /* html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  } */}

  body {
    height: 100%;

    ${'' /* margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: var(--white); */}
    font-family: var(--font);
    ${'' /* font-size: var(--fz-md); */}

    background-attachment: fixed;

    background-color: #DFDBE5;
    background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%2392aca0' fill-opacity='0.37' fill-rule='evenodd'/%3E%3C/svg%3E");
  }

  ${'' /* h1, h2, h3, h4, h5, h6 {
    letter-spacing: -.04em;
    margin: 0 0 10px;
  }

  p {
    margin: 0 0 10px;
  }

  a,
  button {
    transition: all 0.3s ease;
    color: inherit;
  }

  a {
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  } */}

  button {
    ${'' /* border: 0;
    cursor: pointer; */}
    font-family: var(--font);
    ${'' /* font-family: inherit;
    border-radius: var(--border-radius-pill);
    background-color: rgba(0,0,0,.7);
    color: var(--white);
    font-size: var(--fz-sm);
    font-weight: 700;
    padding: var(--spacing-xs) var(--spacing-sm);

    &:hover,
    &:focus {
      background-color: var(--dark-grey);
      outline: 0;
    } */}
  }

  ${'' /* img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  } */}

  main {
    margin: 0;
    padding: 0;
    ${'' /* position: relative; */}
    ${'' /* padding: var(--spacing-xxl) 0; */}
  }

  ${'' /* .app {
    min-height: 100vh;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .overflow-ellipsis {
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: unset;
    word-break: break-all;
  }

  .empty-notice {
    color: var(--grey);
    font-size: var(--fz-lg);
    text-align: center;
    padding: var(--spacing-xxl);
  } */}
`;
export default GlobalStyle;