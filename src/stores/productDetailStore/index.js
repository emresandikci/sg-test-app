import React, { createContext, useReducer, useMemo } from 'react';
import reducer from './reducer';
import { GET_PRODUCT_ERROR, GET_PRODUCT_START, GET_PRODUCT_SUCCESS } from './types';
import { getAxiosInstance, routes, constants } from 'utils';

const initialState = {
  productState: { data: [], isLoading: true, error: null },
  getProductById: Function,
};

const Context = createContext(initialState);

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState.productState);

  const http = getAxiosInstance();
  const { httpStatus } = constants;

  const getProductById = async ({ productCode = [], merchantCode = '' }) => {
    const {
      api: { product },
    } = routes;

    dispatch({
      type: GET_PRODUCT_START,
    });
    try {
      const url = product({ codes: productCode, merchantCode });

      const { status, data } = await http.get(url);

      if (status !== httpStatus.OK) {
        return dispatch({
          type: GET_PRODUCT_ERROR,
          payload: { ...data },
        });
      }

      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: { ...data },
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCT_ERROR,
        payload: error,
      });
    }
  };

  const contextValue = useMemo(() => {
    return {
      productState: state,
      getProductById,
    };
  }, [state]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

Provider.displayName = 'ProductDetailCtx';
Context.displayName = 'ProductDetailCtx';

export { Provider, Context };
