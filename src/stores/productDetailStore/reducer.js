import { GET_PRODUCT_START, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from './types';

export default (state, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
        error: null,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload.data,
      };
    default:
      return state;
  }
};
