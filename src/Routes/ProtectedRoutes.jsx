import React from "react";
import { Navigate} from "react-router-dom";

function ProtectedRoute({children}) {
const password = localStorage.getItem(1234);
if (!password) {
    return <Navigate to="/Login" replace/>;
}

return children;
}

export default ProtectedRoute;