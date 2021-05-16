import React from 'react';
import { render } from 'react-dom';
import { App } from 'pages';
import { ThemeSetting } from 'components';
render(
  <ThemeSetting.Provider>
    <App />
  </ThemeSetting.Provider>,
  document.getElementById('sg-test-app')
);
