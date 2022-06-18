
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({children}){
    const {isAuth} = useSelector(store => store.auth);
    const location = useLocation();

    if(isAuth){
        return children;
    }

    return <Navigate to='/sign-in' state={{from:location.pathname}} />

    
}

export default PrivateRoute;