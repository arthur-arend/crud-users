import React from 'react';
import PropTypes from 'prop-types';

// import { AuthProvider } from './auth';
import { UsersProvider } from './users';

export const AppProvider = ({ children }) => {
  return (
    <UsersProvider>{children}</UsersProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};