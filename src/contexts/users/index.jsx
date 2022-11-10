import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const UsersContext = createContext({});

export const UsersProvider = ({ children }) => {
  const [ listUsers, setListUsers ] = useState([]);
  const [ user, setUser ] = useState({});
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/users').then((response) => {
      setListUsers(response.data)
  })
  }, []) 

  return (
    <UsersContext.Provider
      value={{
        listUsers, 
        setListUsers, 
        user, 
        setUser, 
        isModalVisible, 
        setIsModalVisible
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

  const { listUsers, setListUsers, user, setUser, isModalVisible, setIsModalVisible } = context;

  return {
    listUsers, 
    setListUsers, 
    user, 
    setUser, 
    isModalVisible, 
    setIsModalVisible
  };
};

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};