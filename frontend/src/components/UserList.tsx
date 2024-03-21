import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { CustomCellRendererProps } from "ag-grid-react";
import { AgGridReact } from '@ag-grid-community/react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {
  ColDef,
  ModuleRegistry
} from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface User {
  id: number;
  username: string;
  profile: {
    age: string;
    gender: string;
    hometown: string;
  }
}
// const CustomButtomComponent = props => {
//   return (
//     <button onClick={() => window.alert("Mission Launched")}>Launch!</button>
//   )
// }


const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  const CustomButtomComponent = (props: CustomCellRendererProps) => {
    return <button  onClick={() => window.open(`/users/${props.data.id}/`, '_self')} className="btn btn btn-primary btn-sm"><i className="bi bi-eye-fill"></i></button>;
  };

  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "actions", headerName: "", cellRenderer: CustomButtomComponent, width: 60 },
    { field: "username" },
    { field: "first_name" },
    { field: "last_name" },
    { field: "email" },
    { field: "profile.age", headerName: "Age" },
    { field: "profile.hometown", headerName: "Hometown" },
    { field: "profile.gender", headerName: "Gender" },

  ]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>('http://localhost:8000/api/users/');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);


  const searchUsers = async () => {
    try {
      const response = await axios.get<User[]>('http://localhost:8000/api/users/search/', {params: filter});
      console.log(response)
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [filter, setFilter] = useState<{}>({});

  useEffect(() => {
    setFilter(Object.assign({},
      username && {username},
      email && {email},
      age && {age},
    ));
  }, [username, email, age]);

  useEffect(() => {
   console.log(filter)
  }, [filter]);

  return (
    <div>
      <h2>Liste des Utilisateurs</h2>
      <div>
      <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
        <div className="col-auto">
          <label htmlFor="inputUsername" className="visually-hidden">Username</label>
          <input type="text" className="form-control" id="inputUsername" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="col-auto">
          <label htmlFor="imputEmail" className="visually-hidden">Email</label>
          <input type="text" className="form-control" id="inputEmail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="col-sm-1">
          <label htmlFor="inputAge" className="visually-hidden">Age</label>
          <input type="number" className="form-control" id="inputAge" placeholder="Age" value={age} onChange={(e) => setAge(parseInt(e.target.value))}/>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary mb-3" onClick={(e) => searchUsers()}>Filtrer</button>
        </div>
      </form>
      </div>
      <div style={containerStyle}>
        <div style={{ height: "400px", boxSizing: "border-box" }}>
          <div
            style={gridStyle}
            className={
              "ag-theme-alpine"
            }>
            <AgGridReact
            rowData={users}
            columnDefs={columnDefs}
            pagination={true}
            paginationAutoPageSize={true}
            autoSizeStrategy={{
              type: 'fitGridWidth',
              defaultMinWidth: 50
            }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
