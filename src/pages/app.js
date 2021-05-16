import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes, Seo } from 'utils';
import { GlobalStyles, ThemeSetting } from 'components';
import { Main } from 'containers';
import { Header } from 'containers';
import { DetailPage, HomePage, NotFound } from 'pages';
import { useTheme } from 'utils/hooks';

function App() {
  const { home, detail } = routes.base;
  const { theme, setColor, setMode, setFontSize, modes, mode } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <ThemeSetting.Provider>
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
        <ThemeSetting
          theme={theme}
          setColor={setColor}
          setMode={setMode}
          setFontSize={setFontSize}
          modes={modes}
          mode={mode}
        />
      </ThemeSetting.Provider>
    </ThemeProvider>
  );
}

export default App;
