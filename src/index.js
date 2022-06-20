import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";
import { db } from './firebase'
import { collection, getDocs } from "firebase/firestore";
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
    <CssBaseline />
    <App />
  </React.Fragment>
);

function App() {
  const [maintenanceStaff, setMaintenanceStaff] = useState([]);

  useEffect(() => {
		const getMaintenanceStaff = async () => {
			const data = await getDocs(collection(db, 'maintenancestaff'));
			setMaintenanceStaff(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
		};
		getMaintenanceStaff();
	}, [])

  if (maintenanceStaff.length !== 0) {
	return (
    <>
      <h1>Greenwood Scheduler</h1>
      <h2>Maintenance Staff</h2>
      <table>
        {maintenanceStaff.map((user) => {
          return(
            <tr>
              <th>{user.name}</th>
              <th>{user.factor}</th>
            </tr>
          ) 
        })}
      </table>
    </>
	);
  } else {
	return null;
  }
}