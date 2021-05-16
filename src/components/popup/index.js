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

const Popup = (props) => {
  const { isActive, setIsActive, message } = useContext(Context);

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
      <Box
        css={`
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .popup-card {
            height: 200px;
          }
        `}
      >
        <Card width={1 / 3} className="popup-card">
          <Box
            css={`
              display: flex;
              justify-content: space-around;
              align-items: center;
              flex-direction: column;
              height: 100%;
            `}
          >
            <img src={giftCode} width={120} alt="sku" />
            <Box
              as="p"
              css={`
                text-align: center;
                color: ${({ theme }) => theme.colors.white};
                font-size: 24px;
              `}
            >
              {message}
            </Box>
          </Box>
        </Card>
      </Box>
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
