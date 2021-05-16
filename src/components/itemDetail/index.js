import React, { useEffect, useState, useContext } from 'react';
import { Flex, Box, Button } from 'components';
import { Popup } from 'components';
import { currency } from 'utils';
import { Attribute, Tags } from './subComponents';

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

export default function ItemDetail({ data }) {
  const { setIsActive, setMessage } = useContext(Popup.Context);

  const [product, setProduct] = useState(initialProduct);

  const [selectedSku, setSelectedSku] = useState(initialSKU);

  useEffect(() => {
    setProduct(data);
    setSelectedSku(data?.selectedSku);
  }, []);

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
    setMessage(selectedSku.sku);
  };

  const { attrList, skus, tags } = product;

  const { name, desc, images, orderable, price, attrs } = selectedSku;

  return (
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
        <Box as="h1">{name}</Box>
        <Attribute
          width={1 / 2}
          attrList={attrList.Color}
          attrs={attrs.Color}
          css={`
            margin-bottom: 10px;
          `}
          onChange={onColorChange}
        />
        <Attribute
          width={1 / 2}
          attrList={attrList.Size}
          attrs={attrs.Size}
          onChange={onSizeChange}
        />
        <Tags tags={tags} />
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
  );
}
