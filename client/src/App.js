import React, { useEffect, FC } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { GlobalStyle } from './styles';
import './App.css';
import Main from './views/Main';

// export default function App() {
function App() {
  // const { id } = useParams();

  // Scroll to top of page when changing routes
  // https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />

      <Routes>
        {/* when a <Switch> is rendered, it searches through its children <Route> elements to find one whose path matches the current URL. When it finds one, it renders that <Route> and ignores all others. Therefore, routes with more specific (typically longer) paths should be listed before less-specific ones. */ }

        <Route path="/" element={ <Main /> } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
