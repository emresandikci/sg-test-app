import React, { useContext } from 'react';
import { Detail } from 'containers';
import { ProductDetailStore } from 'stores';
import { Popup, Box, Card } from 'components';
import { giftCode } from 'public/images';

export default function DetailPage() {
  const { message } = useContext(Popup.Context);
  return (
    <ProductDetailStore.Provider>
      <Detail />
      <Popup>
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
      </Popup>
    </ProductDetailStore.Provider>
  );
}
