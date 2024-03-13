import {Navigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useSelector} from "react-redux";

const PrivateRoute = ({ children}) => {
    const isAuthenticated = useSelector(state => state.login.isAuthenticated)

    if (!isAuthenticated) {
        return <Navigate to='/login' replace />
    }

    return children
};

export default PrivateRoute;