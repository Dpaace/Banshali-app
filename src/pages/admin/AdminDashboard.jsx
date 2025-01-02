import { useState } from "react";
import Sidebar from "./../../components/admin/Sidebar";
import Header from "./../../components/admin/Header";
import TableView from "./../../components/admin/TableView";
import "./../../assets/admin/styles/AdminDashboard.css";

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
  const [view, setView] = useState("Table View"); // Default to Table View

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-dashboard-content">
        <Header view={view} setView={setView} /> {/* Pass state as props */}
        <div className="dashboard-view">
          {view === "Table View" ? (
            <TableView />
          ) : (
            <div className="card-view-placeholder">
              <h2>Card View Yet to be implemented</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
