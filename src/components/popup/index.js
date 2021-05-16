import React, { createContext, useState, useContext } from 'react';
import { Box, Card } from 'components';

const initialState = {
  isActive: false,
  setIsActive: Function,
  message: '',
  setMessage: Function,
};

const Context = createContext(initialState);

const Popup = (props) => {
  const { isActive, setIsActive, message } = useContext(Context);
  return (
    <Box
      css={`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.7);
        display: ${isActive ? 'flex' : 'none'};
        align-items: center;
        justify-content: center;
      `}
      onClick={() => setIsActive(false)}
      {...props}
    >
      <Card width={1 / 2}>
        <Box
          as="p"
          css={`
            text-align: center;
            color: ${({ theme }) => theme.colors.white};
          `}
        >
          {message}
        </Box>
      </Card>
    </Box>
  );
};

function Provider({ children }) {
  const [isActive, setIsActive] = useState(initialState.isActive);
  const [message, setMessage] = useState(initialState.message);
  return (
    <Context.Provider value={{ isActive, setIsActive, message, setMessage }}>
      {children}
    </Context.Provider>
  );
}

Popup.Provider = Provider;
Popup.Context = Context;
export default Popup;
