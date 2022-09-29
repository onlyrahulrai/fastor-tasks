import React, { useContext, createContext, useMemo, useState } from "react";
import axios from "axios";

export const FastorContext = createContext();

export const FastorProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const token = useMemo(() => localStorage.getItem("token"), [loading]);
  const [restuarents, setRestuarents] = useState([]);

  const baseURL = "http://staging.fastor.in";

  const axiosClient = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${token}` },
  });

  const captilizeText = (text) => {
    return text?.charAt(0)?.toUpperCase() + text?.slice(1);
  };

  const getRestaurant = (id) => {
    return restuarents.find((restuarent) => restuarent.restaurant_id == id);
  };

  const value = {
    token,
    loading,
    setLoading,
    restuarents,
    setRestuarents,
    captilizeText,
    getRestaurant,
    axiosClient,
  };
  return (
    <FastorContext.Provider value={value}>
      {!loading ? children : <h4>Loading...</h4>}
    </FastorContext.Provider>
  );
};

const useFastor = () => useContext(FastorContext);

export default useFastor;
