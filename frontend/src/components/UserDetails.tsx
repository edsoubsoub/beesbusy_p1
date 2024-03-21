// frontend/src/UserList.tsx

import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

interface User {
  id: number;
  username: string;
  first_name:  string;
  last_name:  string;
  email:  string;
  profile: {
    age: string;
    gender: string;
    hometown: string;
  }
}

type Props = {
  id: number
}

const UserDetails: React.FC<Props> = (props: Props) => {

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<User>(`http://localhost:8000/api/users/${props.id}/`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUser();
  }, []);

  return (
<section>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-6 mb-4 mb-lg-0">
        <div className="card mb-3" style={{ borderRadius: ".5rem"}}>
          <div className="row g-0">
            <div className="col-md-4 gradient-custom text-center text-white" style={{borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem"}}>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar" className="img-fluid my-5" style={{width: "80px"}} />
              <h5 className='text-black'>{user?.first_name} {user?.last_name} ({user?.username})</h5>
              <p className='text-black'>{user?.profile.hometown}</p>
              <i className="far fa-edit mb-5"></i>
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h6>Information</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>Email</h6>
                    <p className="text-muted">{user?.email}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Phone</h6>
                    <p className="text-muted">(+33) 6 89 56 23 14</p>
                  </div>
                </div>
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>Gender</h6>
                    <p className="text-muted">{user?.profile.gender}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Age</h6>
                    <p className="text-muted">{user?.profile.age}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                  <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                  <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                  <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default UserDetails;
