import React from 'react';
import UserDetails from '../components/UserDetails';
import {
  useParams
} from "react-router-dom";


const User: React.FC = () => {
  
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      {id && <UserDetails id={parseInt(id)} />}
    </div>
  );
};

export default User;
