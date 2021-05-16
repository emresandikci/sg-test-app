import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes, Seo } from 'utils';
import { GlobalStyles, ThemeSetting, Popup } from 'components';
import { Main, Header } from 'containers';
import { DetailPage, HomePage, NotFound } from 'pages';

function App() {
  const { home, detail } = routes.base;
  const { theme } = useContext(ThemeSetting.Context);

  return (
    <ThemeProvider theme={theme}>
      <Popup.Provider>
        <GlobalStyles />
        <Seo />
        <Header />
        <Main>
          <Router>
            <Switch>
              <Route path={home} exact component={HomePage} />
              <Route path={detail} exact component={DetailPage} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </Main>
        <ThemeSetting />
      </Popup.Provider>
    </ThemeProvider>
  );
}

export default App;
