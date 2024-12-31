import React from "react";
import Sidebar from "./../../components/admin/Sidebar";
import Header from "./../../components/admin/Header";
import TableView from "./../../components/admin/TableView";
import "./../../assets/admin/styles/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-dashboard-content">
        <Header />
        <TableView />
      </div>
    </div>
  );
};

export default AdminDashboard;
