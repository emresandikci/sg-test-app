import React, { useContext, useEffect, useState } from 'react';
import { ProductDetailStore } from 'stores';
import { Flex, Box, Button, Select } from 'components';
import { currency } from 'utils';
import { useRouter } from 'utils/hooks';
import { NotFound } from 'pages';
import { Popup } from 'components';

const initialSKU = {
  name: '',
  desc: '',
  images: [],
  quantity: 0,
  shortDesc: '',
  skus: [],
  sku: '',
  orderable: false,
  attrs: { Color: '', Size: '' },
};
const initialProduct = {
  ...initialSKU,
  attrList: {},
  tags: [],
};

export default function Detail() {
  return <ItemDetail />;
}

const ItemDetail = () => {
  const { productState, getProductById } = useContext(ProductDetailStore.Context);
  const { setIsActive, setMessage } = useContext(Popup.Context);

  const { data, isLoading } = productState;

  const [product, setProduct] = useState(initialProduct);

  const [selectedSku, setSelectedSku] = useState(initialSKU);

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

  useEffect(() => {
    if (isLoading) return;
    setProduct(data[0]);
    setSelectedSku(data[0]?.selectedSku);
  }, [isLoading]);

  useEffect(() => {
    if (selectedSku) setMessage(selectedSku.sku);
  }, [selectedSku]);

  const onColorChange = (e) => {
    const { value } = e.target;
    if (!value) return;
    setSelectedSku(skus.filter((item) => item?.attrs?.Color === value)[0]);
  };

  const onSizeChange = (e) => {
    const { value } = e.target;
    if (!value) return;
    setSelectedSku(skus.filter((item) => item?.attrs?.Size === value)[0]);
  };

  const onAcceptBtnClick = () => {
    setIsActive(true);
  };

  if (isLoading) return <>loading...</>;

  if (!isLoading && data.length === 0) return <NotFound />;

  const { attrList, skus, tags } = product;

  const { name, desc, images, orderable, price, attrs } = selectedSku;

  return (
    <Box
      css={`
        margin-top: 2rem;
      `}
    >
      <Flex>
        <Flex
          css={`
            flex: 1;
            justify-content: center;
          `}
        >
          <Box>
            <Box
              css={`
                margin-bottom: 10px;
                position: relative;
              `}
            >
              {images?.map((url, i) => (
                <img key={i} src={url} alt={name + i} />
              ))}
              <Box
                css={`
                  color: #fff;
                  background-color: ${({ theme }) => theme.color};
                  padding: 0.5rem;
                  position: absolute;
                  left: 0;
                  bottom: 6px;
                  font-size: 16px;
                `}
              >
                {currency(price)}
              </Box>
            </Box>
            <Box
              dangerouslySetInnerHTML={{
                __html: desc,
              }}
            />
          </Box>
        </Flex>
        <Flex
          css={`
            justify-content: flex-start;
            flex-direction: column;
            flex: 1;
          `}
        >
          <Box
            css={`
              font-size: 32px;
              line-height: 2;
            `}
          >
            {name}
          </Box>
          <Box
            css={`
              margin-bottom: 10px;
            `}
          >
            <Select width={1 / 2} value={attrs.Color} onChange={onColorChange}>
              {attrList.Color?.map((item, i) => (
                <option value={item} key={item + i}>
                  {item}
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            <Select width={1 / 2} value={attrs.Size} onChange={onSizeChange}>
              {attrList.Size?.map((item, i) => (
                <option value={item} key={item + i}>
                  {item}
                </option>
              ))}
            </Select>
          </Box>
          <Flex
            css={`
              margin-top: 10px;
              flex-wrap: wrap;
            `}
          >
            {tags?.map(({ name }, i) => (
              <Box
                key={i}
                css={`
                  margin: 5px 0;
                  margin-right: ${tags.length - 1 !== i && '5px'};
                `}
              >
                <Button
                  variant="outline"
                  css={`
                    cursor: default;
                  `}
                >
                  {name}
                </Button>
              </Box>
            ))}
          </Flex>
          <Box
            css={`
              margin-top: 10px;
            `}
          >
            <Button disabled={!orderable} width={1 / 2} onClick={onAcceptBtnClick}>
              {orderable ? 'Accept' : 'Selection is not available'}
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
