import React, { useState, useEffect } from 'react';
import { Box, Flex, Input, Button } from 'components';
import { routes } from 'utils';
import useRouter from 'utils/hooks/useRouter';
import { gift } from 'public/images';

function HomePage() {
  const { push } = useRouter();
  const { detail } = routes.base;
  const [productCode, setProductCode] = useState('');
  const [merchantCode, setMerchantCode] = useState('');
  const [isValidCodes, setIsValidCodes] = useState('');

  const onProductCodeChange = ({ target: { value } }) => {
    setProductCode(value);
  };
  const onMerchantCodeChange = ({ target: { value } }) => {
    setMerchantCode(value);
  };

  const onSearchClick = () => {
    let redirectUrl = detail;
    if (productCode.includes(',')) {
      redirectUrl = redirectUrl.replace(
        ':id',
        `${merchantCode}-${productCode.split(',').join('-')}`
      );
    } else {
      redirectUrl = redirectUrl.replace(':id', `${merchantCode}-${productCode}`);
    }
    push(redirectUrl);
  };

  useEffect(() => {
    setIsValidCodes(productCode?.length >= 8 && merchantCode?.length >= 3);
  }, [productCode, merchantCode]);

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
        `}
      >
        <Box>
          <h2>Company Friendly Gift Search</h2>
        </Box>

        <Box>
          <Input
            css={`
              margin-bottom: 10px;
            `}
            placeholder="Enter a merchant code"
            width={1}
            onChange={onMerchantCodeChange}
          />
          <Input placeholder="Enter a product code" width={1} onChange={onProductCodeChange} />
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

export default HomePage;

const c = 'vineyardvines-1K000006-1T010212-1T010182'.split('-');
const [m] = c;
c.filter((code) => code !== m).join(',');
