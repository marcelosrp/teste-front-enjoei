import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { API_URL } from "./services/api";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [requestError, setRequestError] = useState(false);

  const getData = useCallback(async (term = null) => {
    setLoading(true);
    setNotFound(false);
    setTotal(null);
    setRequestError(false);
    setData([]);

    try {
      const response = await axios.post(
        API_URL,
        {
          query: `
            query searchProducts(
              $term: String!,
              $first: Int,
              $after: String
            ) {
              search(products: {
                term: $term
              }) {
                products(first: $first, after: $after) {
                  total
                  edges {
                    cursor
                    node {
                      id
                      path
                      photo {
                        image_public_id
                      }
                      title {
                        name
                      }
                      brand {
                        displayable_name
                      }
                      price {
                        original
                        current
                      }
                    }
                  }
                }
              }
            }
          `,
          variables: {
            term: term === null ? "" : term,
            first: 15,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = response.data.data.search.products;

      if (json.total === 0) {
        setNotFound(true);
      } else {
        setData(json.edges);
      }

      setTotal(json.total);
      setLoading(false);
    } catch (error) {
      setRequestError(true);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleInputSearch = ({ target }) => {
    setSearch(target.value);
  };

  const handleClickSearch = () => {
    if (search === "") {
      setInputError(true);
    } else {
      setInputError(false);
      getData(search);
    }
  };

  const handleResetSearch = () => {
    if (notFound) setNotFound(false);

    setSearch("");
    getData();
  };

  return (
    <GlobalContext.Provider
      value={{
        data,
        total,
        loading,
        handleInputSearch,
        search,
        handleResetSearch,
        handleClickSearch,
        notFound,
        inputError,
        requestError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
