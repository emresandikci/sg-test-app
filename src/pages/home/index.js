import React, { useContext, useEffect } from 'react';
import { Home } from 'containers';
import { Popup, Box, Card } from 'components';
import { welcome } from 'public/images';
import { responsiveCalc, theme } from 'utils';

function HomePage() {
  return (
    <>
      <Home />
      <Popup>
        <Box
          css={`
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .popup-card {
              height: ${responsiveCalc(1 / 1.2)};
              border-radius: 8px;
            }
          `}
        >
          <Card width={1 / 2} className="popup-card">
            <Box
              css={`
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-direction: column;
                height: 100%;
              `}
            >
              <img src={welcome} width={500} alt="welcome-message" />
              <Box
                as="h1"
                css={`
                  color: ${({ theme }) => theme.colors.white};
                  text-align: center;
                `}
              >
                You will never struggle to find a gift again!
              </Box>
            </Box>
          </Card>
        </Box>
      </Popup>
    </>
  );
}

export default HomePage;
