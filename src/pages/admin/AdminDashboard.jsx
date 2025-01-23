// import { useState, useEffect } from "react";
// import Sidebar from "../../components/Sidebar";
// import Header from "../../components/Header";
// import TableView from "../../components/TableView";
// import CardView from "../../components/CardView";
// import "./../../assets/styles/AdminDashboard.css";

// const AdminDashboard = () => {
//   const [view, setView] = useState("Table View"); // Default view is Card View
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check if the screen is mobile

//   useEffect(() => {
//     // Handle screen resizing
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//       if (window.innerWidth <= 768) {
//         setView("Card View");
//       }
//     };

//     window.addEventListener("resize", handleResize); 
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="admin-dashboard">
//       {/* Show Sidebar only for non-mobile views */}
//       {!isMobile && <Sidebar />} 
//       <div className="admin-dashboard-content">
//         <Header view={view} setView={setView} /> {/* Pass state as props */}
//         {/* <div className="dashboard-view">
//           {view === "Table View" && !isMobile ? <TableView /> : <CardView />}
//         </div> */}

//         <div
//           className={`dashboard-view ${view === "Card View" ? "card-view-centered" : ""}`}
//         >
//           {view === "Table View" && !isMobile ? <TableView /> : <CardView />}
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
import Compare from "../../components/Compare"; // Import Compare Component
import "./../../assets/styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [view, setView] = useState("Table View"); // Default view is Table View
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check if the screen is mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setView("Card View");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="admin-dashboard">
      {!isMobile && (
        <Sidebar setView={setView} currentView={view} /> // Pass props to Sidebar
      )}
      <div className="admin-dashboard-content">
        <Header view={view} setView={setView} />
        <div
          className={`dashboard-view ${
            view === "Card View" ? "card-view-centered" : ""
          }`}
        >
          {view === "Table View" && !isMobile && <TableView />}
          {view === "Card View" && <CardView />}
          {view === "Compare View" && <Compare />} {/* Render Compare Component */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
