import { useCallback, useEffect, useState } from "react";

const defaultOptions = {
  method: "GET",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": window.localStorage.getItem("token"),
  },
};

const useFetch = (endpoint = "", options = defaultOptions) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchJSON = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(endpoint, options);
      const data = await response.json();
      // if (!data.ok) {
      //   const message = `An error ocurred: ${response.status}, code: ${data?.errcode}`;
      //   throw new Error(message);
      // }

      return setData(data);
    } catch (err) {
      console.log(err);
      return setError(err);
    } finally {
      setLoading(false);
    }
  }, [endpoint, options]);

  useEffect(() => {
    fetchJSON();
  }, [fetchJSON]);

  const refetch = () => {
    fetchJSON();
  };

  return { data, loading, error, refetch };
};

export default useFetch;
