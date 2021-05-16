import React, { useState, useEffect, useContext } from 'react';
import { Box, Flex, Input, Button, Popup } from 'components';
import { routes } from 'utils';
import useRouter from 'utils/hooks/useRouter';
import { gift } from 'public/images';

function Home() {
  const { push } = useRouter();
  const { detail } = routes.base;
  const [productCode, setProductCode] = useState('');
  const [merchantCode, setMerchantCode] = useState('');
  const [isValidCodes, setIsValidCodes] = useState('');
  const { setIsActive } = useContext(Popup.Context);

  useEffect(() => {
    if (sessionStorage.getItem('shouldPreventWelcome')) return;

    setIsActive(true);

    sessionStorage.setItem('shouldPreventWelcome', true);
  }, []);

  useEffect(() => {
    setIsValidCodes(productCode?.length >= 8 && merchantCode?.length >= 3);
  }, [productCode, merchantCode]);

  const onProductCodeChange = ({ target: { value } }) => {
    setProductCode(value);
  };
  const onMerchantCodeChange = ({ target: { value } }) => {
    setMerchantCode(value);
  };

  const onSearchClick = () => {
    let redirectUrl = createRedirectUrl();
    push(redirectUrl);
  };

  const createRedirectUrl = () => {
    return productCode.includes(',')
      ? detail.replace(':id', `${merchantCode}-${productCode.split(',').join('-')}`)
      : detail.replace(':id', `${merchantCode}-${productCode}`);
  };

  return (
    <Flex
      css={`
        padding-top: 2rem;
        height: calc(100vh - 55px);
        background: url(${gift});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        justify-content: space-evenly;
        align-items: center;
      `}
    >
      <Flex
        width={1 / 2}
        css={`
          height: 200px;
          background-color: rgba(0, 0, 0, 0.3);
          padding: 1rem;
          border-radius: 1rem;
          text-align: center;
          color: #fff;
          flex-direction: column;
          justify-content: space-between;
          backdrop-filter: blur(10px);
        `}
      >
        <Box>
          <h2>Company Friendly Gift Search</h2>
        </Box>

        <Box>
          <Input
            css={`
              margin-bottom: 10px;
              color: ${({ theme }) => theme.colors.black};
            `}
            placeholder="Enter a merchant code"
            width={1}
            onChange={onMerchantCodeChange}
          />
          <Input
            css={`
              color: ${({ theme }) => theme.colors.black};
            `}
            placeholder="Enter some product code(s) by comma seperated"
            width={1}
            onChange={onProductCodeChange}
          />
        </Box>
        <Box>
          <Button width={1} onClick={onSearchClick} disabled={!isValidCodes}>
            Search
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Home;
