import React from 'react';
import { Detail } from 'containers';
import { ProductDetailStore } from 'stores';
import { Popup } from 'components';

export default function DetailPage() {
  return (
    <ProductDetailStore.Provider>
      <Popup.Provider>
        <Detail />
        <Popup />
      </Popup.Provider>
    </ProductDetailStore.Provider>
  );
}
