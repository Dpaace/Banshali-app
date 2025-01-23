// import { useState } from "react";

// import { FaInfoCircle, FaEdit, FaTrash, FaSearch, FaCloudDownloadAlt } from "react-icons/fa"; // Import icons
// import ReactPaginate from 'react-paginate';
// import { globalData } from "../data/globalData";
// import "./../assets/styles/TableView.css";




// const TableView = () => {


//   const [currentPage, setCurrentPage] = useState(0);
//   // const rowsPerPage = 10;
//   const [rowsPerPage, setRowsPerPage] = useState(5);


//   // Calculate the rows for the current page
//   const offset = currentPage * rowsPerPage;
//   const currentRows = globalData.slice(offset, offset + rowsPerPage);


  


//   // Handle page change
//   const handlePageChange = ({ selected }) => {
//     setCurrentPage(selected);
//   };

//   return (
//     <div className="table-view">
//       <div className="table-view-filters">
//         {/* Search Bar */}
//         <div className="search-bar">
//           <FaSearch className="search-icon" />
//           <input type="text" placeholder="Search" className="search-input" />
//         </div>

//         {/* Buttons */}
//         <button className="filter-button">Filter</button>
//         <button className="add-button">+ Add New</button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Generation</th>
//             <th>Mother&apos;s name</th>
//             <th>Father&apos;s name</th>
//             <th>Gender</th>
//             <th>DOB</th>
//             <th>Info</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentRows.map((row, index) => (
//             <tr key={index}>
//               <td>
//                 <img
//                   src={row.photo_url}
//                   alt="Profile"
//                 />
//                 {row.name}
//               </td>
//               {/* <td>Pusta {row.pusta_number}</td> */}
//               <td>
//                 {row.pusta_number === "1" ? (
//                   <div className="flex items-center justify-center  w-3/4 h-6 p-2 rounded-full bg-green-200 text-green-700">
//                     <span
//                       className=" w-2 h-2 rounded-full mr-2"
//                       style={{ backgroundColor: "green" }}
//                     ></span>
//                     G{row.pusta_number}
//                   </div>
//                 ) : (
//                   <div className="flex items-center justify-center w-3/4 h-6 p-2 rounded-full bg-red-200 text-red-700">
//                     <span
//                       className="w-2 h-2 rounded-full mr-2"
//                       style={{ backgroundColor: "red" }}
//                     ></span>
//                     G{row.pusta_number}
//                   </div>
//                 )}
//               </td>


//               <td>{row.family_relations.mother}</td>
//               <td>{row.family_relations.father}</td>
//               <td>{row.gender}</td>
//               <td>{row.date_of_birth}</td>
//               <td>
//                 <button className="icon-button info-button">
//                   <FaInfoCircle />
//                 </button>
//                 <button className="icon-button edit-button">
//                   <FaEdit />
//                 </button>
//                 <button className="icon-button delete-button">
//                   <FaTrash />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="table-footer">
//         <button className="import-button">
//           Import <FaCloudDownloadAlt className="import-icon" />
//         </button>


//         <div className="paginate-align">

//           <div>
//             <span>Show  </span>
//             <select
//               className="rows-per-page"
//               value={rowsPerPage}
//               onChange={(e) => {
//                 setCurrentPage(0);
//                 setRowsPerPage(parseInt(e.target.value));
//               }}
//             >
//               <option value={1}>1</option>
//               <option value={2}>2</option>
//               <option value={3}>3</option>
//               <option value={4}>4</option>
//               <option value={5}>5</option>
//             </select>
//             <span> Rows</span>
//           </div>

//           <ReactPaginate
//             previousLabel={"<"}
//             nextLabel={">"}
//             breakLabel={"..."}
//             pageCount={Math.ceil(globalData.length / rowsPerPage)}
//             // marginPagesDisplayed={2}
//             // pageRangeDisplayed={5}
//             onPageChange={handlePageChange}
//             containerClassName={"pagination"}
//             activeClassName={"active"}
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TableView;


import { useState } from "react";
import {
  FaInfoCircle,
  FaEdit,
  FaTrash,
  FaSearch,
  FaCloudDownloadAlt,
} from "react-icons/fa"; // Import icons
import ReactPaginate from "react-paginate";
import { globalData } from "../data/globalData";
import EditFormModal from "./EditFormModal";
import "./../assets/styles/TableView.css";

const TableView = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedRow, setSelectedRow] = useState(null); // State to track selected row for editing
  const [isEditing, setIsEditing] = useState(false); // State to manage modal visibility

  // Calculate the rows for the current page
  const offset = currentPage * rowsPerPage;
  const currentRows = globalData.slice(offset, offset + rowsPerPage);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Open Edit Modal
  const handleEditClick = (row) => {
    setSelectedRow(row);
    setIsEditing(true);
  };

  // Save changes from modal
  const handleSave = (updatedRow) => {
    console.log("Updated Row:", updatedRow);
    // Update globalData or local state here with updatedRow logic
    setIsEditing(false); // Close the modal
  };

  return (
    <div className="table-view">
      <div className="table-view-filters">
        {/* Search Bar */}
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>

        {/* Buttons */}
        <button className="filter-button">Filter</button>
        <button className="add-button">+ Add New</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Generation</th>
            <th>Mother&apos;s name</th>
            <th>Father&apos;s name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => (
            <tr key={index}>
              <td>
                <img src={row.photo_url} alt="Profile" />
                {row.name}
              </td>
              <td>
                {row.pusta_number === "1" ? (
                  <div className="flex items-center justify-center w-3/4 h-6 p-2 rounded-full bg-green-200 text-green-700">
                    <span
                      className=" w-2 h-2 rounded-full mr-2"
                      style={{ backgroundColor: "green" }}
                    ></span>
                    G{row.pusta_number}
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-3/4 h-6 p-2 rounded-full bg-red-200 text-red-700">
                    <span
                      className="w-2 h-2 rounded-full mr-2"
                      style={{ backgroundColor: "red" }}
                    ></span>
                    G{row.pusta_number}
                  </div>
                )}
              </td>
              <td>{row.family_relations.mother}</td>
              <td>{row.family_relations.father}</td>
              <td>{row.gender}</td>
              <td>{row.date_of_birth}</td>
              <td>
                <button className="icon-button info-button">
                  <FaInfoCircle />
                </button>
                <button
                  className="icon-button edit-button"
                  onClick={() => handleEditClick(row)} // Open edit modal
                >
                  <FaEdit />
                </button>
                <button className="icon-button delete-button">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        <button className="import-button">
          Import <FaCloudDownloadAlt className="import-icon" />
        </button>

        <div className="paginate-align">
          <div>
            <span>Show </span>
            <select
              className="rows-per-page"
              value={rowsPerPage}
              onChange={(e) => {
                setCurrentPage(0);
                setRowsPerPage(parseInt(e.target.value, 10));
              }}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <span> Rows</span>
          </div>

          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={Math.ceil(globalData.length / rowsPerPage)}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <EditFormModal
          formData={{
            username: selectedRow.name || "",
            pusta_number: selectedRow.pusta_number || "",
            father_name: selectedRow.family_relations?.father || "",
            mother_name: selectedRow.family_relations?.mother || "",
            dob: selectedRow.date_of_birth || "",
            status: selectedRow.status || "Alive",
            profession: selectedRow.profession || "",
            gender: selectedRow.gender || "",
          }}
          onClose={() => setIsEditing(false)} // Close the modal
          onSave={handleSave} // Save changes
        />
      )}
    </div>
  );
};

export default TableView;
