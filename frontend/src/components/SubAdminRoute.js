import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Store } from '../Store';

export default function SubAdminRoute({ children }) {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return userInfo && userInfo.isSubAdmin ? children : <Navigate to="/signin" />;
}
