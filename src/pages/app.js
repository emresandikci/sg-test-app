import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from 'pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Seo, theme } from 'utils';
import { GlobalStyles } from 'components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Seo />
      <div>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
