<<<<<<< HEAD
import { Navigate } from "react-router-dom";
import useAuthStore from "../Store/AuthStore";
import React from "react";

const ProtectedRoute = ({ children }) => {
    const { user, adminToken,isAdmin } = useAuthStore();

    if (!user && !isAdmin) {
        return <Navigate to="/userlogin" replace />;
    }

    if (!adminToken && !user) {
        return <Navigate to="/admin/login" replace />;
    }


    return children;
=======
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("authToken"); 

  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
};

export default ProtectedRoute;
