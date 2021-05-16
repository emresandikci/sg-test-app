import React, { createContext, useState, useContext, useEffect } from 'react';
import { Box, Card } from 'components';
import { giftCode } from 'public/images';
const initialState = {
  isActive: false,
  setIsActive: Function,
  message: '',
  setMessage: Function,
};

const Context = createContext(initialState);

const Popup = ({ children, ...props }) => {
  const { isActive, setIsActive } = useContext(Context);

  useEffect(() => {
    //prevent scroll when popup is active
    document.body.style = `overflow: ${isActive ? 'hidden' : 'auto'}`;
  }, [isActive]);
  return (
    <Box
      css={`
        display: ${isActive ? 'block' : 'none'};
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(10px);
      `}
      onClick={() => setIsActive(false)}
      {...props}
    >
      {children}
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
