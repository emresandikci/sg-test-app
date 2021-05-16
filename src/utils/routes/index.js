export default {
  base: {
    home: '/',
    detail: '/:id?',
  },
  api: {
    product: ({ query = '', codes = [], merchantCode = '' }) => {
      //if there is custom query
      if (query) {
        return `/products?${query}`;
      }
      //if there is multiple product codes
      if (codes.length > 1) {
        let multipleCodeUrl = codes.map((code) => `&codes[]=${code}`).join('');
        return `/products?merchantCode=${merchantCode}${multipleCodeUrl}`;
      }
      //if there is single product code
      return `/products?merchantCode=${merchantCode}&codes[]=${codes[0]}`;
    },
  },
};
