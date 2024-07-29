// src/components/PrivateRoute.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from './PrivateModal';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const [showModal, setShowModal] = useState(false);
  const [redirectTo, setRedirectTo] = useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleCloseModal = () => {
    setShowModal(false);
    if (redirectTo) {
      // Redirect to login page after closing the modal
      window.location.href = '/login';
    }
  };

  if (!isAuthenticated) {
    if (!showModal) {
      setShowModal(true);
      setRedirectTo('/login');
    }
    return (
      <Modal
        show={showModal}
        message="You need to be logged in to access this page."
        onClose={handleCloseModal}
      />
    );
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
