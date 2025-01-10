import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TableView from "../../components/TableView";
import CardView from "../../components/CardView";
import "./../../assets/styles/AdminDashboard.css";

// const AdminDashboard = () => {
//   return (
//     <div className="admin-dashboard">
//       <Sidebar />
//       <div className="admin-dashboard-content">
//         <Header />
//         <TableView />
//       </div>
//     </div>
//   );
// };


const AdminDashboard = () => {
  const [view, setView] = useState("Card View"); // Default to Table View

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-dashboard-content">
        <Header view={view} setView={setView} /> {/* Pass state as props */}
        <div className="dashboard-view">
        {/* dsf */}
        {view === "Table View" ? <TableView /> : <CardView />}
          {/* {view === "Table View" ? (
            <TableView />
          ) : (
            <div className="card-view-placeholder">
              <h2>Card View Yet to be implemented</h2>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
