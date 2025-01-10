// import { useState } from "react";
// import Sidebar from "../../components/Sidebar";
// import Header from "../../components/Header";
// import TableView from "../../components/TableView";
// import CardView from "../../components/CardView";
// import "./../../assets/styles/AdminDashboard.css";

// // const AdminDashboard = () => {
// //   return (
// //     <div className="admin-dashboard">
// //       <Sidebar />
// //       <div className="admin-dashboard-content">
// //         <Header />
// //         <TableView />
// //       </div>
// //     </div>
// //   );
// // };


// const AdminDashboard = () => {
//   const [view, setView] = useState("Card View"); // Default to Table View

//   return (
//     <div className="admin-dashboard">
//       <Sidebar />
//       <div className="admin-dashboard-content">
//         <Header view={view} setView={setView} /> {/* Pass state as props */}
//         <div className="dashboard-view">
//           {view === "Table View" ? <TableView /> : <CardView />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TableView from "../../components/TableView";
import CardView from "../../components/CardView";
import "./../../assets/styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [view, setView] = useState("Card View"); // Default view is Card View
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check if the screen is mobile

  useEffect(() => {
    // Handle screen resizing
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setView("Card View"); // Force Card View on mobile
      }
    };

    window.addEventListener("resize", handleResize); // Add resize listener
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  return (
    <div className="admin-dashboard">
      {!isMobile && <Sidebar />} {/* Show Sidebar only for non-mobile views */}
      <div className="admin-dashboard-content">
        <Header view={view} setView={setView} /> {/* Pass state as props */}
        {/* <div className="dashboard-view">
          {view === "Table View" && !isMobile ? <TableView /> : <CardView />}
        </div> */}

        <div
          className={`dashboard-view ${view === "Card View" ? "card-view-centered" : ""}`}
        >
          {view === "Table View" && !isMobile ? <TableView /> : <CardView />}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;

