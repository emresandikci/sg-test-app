import React, { useContext, useEffect } from 'react';
import { ProductDetailStore } from 'stores';
import { Box, ItemDetail } from 'components';
import { useRouter } from 'utils/hooks';
import { NotFound } from 'pages';

const Detail = () => {
  const { productState, getProductById } = useContext(ProductDetailStore.Context);

  const { data, isLoading } = productState;

  const { query } = useRouter();

  useEffect(() => {
    const codeQuery = query.id.split('-');
    const [merchantCode] = codeQuery;
    const productCode = codeQuery.filter((code) => code !== merchantCode);

    getProductById({
      productCode,
      merchantCode,
    });
  }, []);

  if (isLoading) return <>loading...</>;

  if (!isLoading && data.length === 0) return <NotFound />;

  return (
    <Box
      css={`
        margin-top: 2rem;
      `}
    >
      {data.map((item, i) => (
        <ItemDetail data={item} key={i} />
      ))}
    </Box>
  );
};

export default Detail;
