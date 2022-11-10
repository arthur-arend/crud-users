import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const UsersContext = createContext({});

export const UsersProvider = ({ children }) => {
  const [ listUsers, setListUsers ] = useState([]);
  const [ user, setUser ] = useState({});
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const [refresh, setRefresh ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:3000/users/?_page=${currentPage}&_limit=10`).then((response) => {
      setListUsers((prevUsers) => [...prevUsers, ...response.data]);
      console.log(listUsers)
  })
  }, [refresh, currentPage]) 

  return (
    <UsersContext.Provider
      value={{
        listUsers, 
        setListUsers, 
        user, 
        setUser, 
        isModalVisible, 
        setIsModalVisible, refresh, setRefresh, currentPage, setCurrentPage
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UsersContext);

  if (!context)
    throw new Error("useUsers must be used within a UsersContext.");

  const { listUsers, setListUsers, user, setUser, isModalVisible, setIsModalVisible, refresh, setRefresh, currentPage, setCurrentPage } = context;

  return {
    listUsers, 
    setListUsers, 
    user, 
    setUser, 
    isModalVisible, 
    setIsModalVisible, refresh, setRefresh, currentPage, setCurrentPage
  };
};

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};