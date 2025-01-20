import { useState } from "react";

import { FaInfoCircle, FaEdit, FaTrash, FaSearch, FaCloudDownloadAlt } from "react-icons/fa"; // Import icons
import ReactPaginate from 'react-paginate';
import { globalData } from "../data/globalData";
import "./../assets/styles/TableView.css";




const TableView = () => {


  const [currentPage, setCurrentPage] = useState(0);
  // const rowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = useState(1);


  // Calculate the rows for the current page
  const offset = currentPage * rowsPerPage;
  const currentRows = globalData.slice(offset, offset + rowsPerPage);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
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
                <img
                  src={row.photo_url}
                  alt="Profile"
                />
                {row.name}
              </td>
              <td>Pusta {row.pusta_number}</td>
              <td>{row.family_relations.mother}</td>
              <td>{row.family_relations.father}</td>
              <td>{row.gender}</td>
              <td>{row.date_of_birth}</td>
              <td>
                <button className="icon-button info-button">
                  <FaInfoCircle />
                </button>
                <button className="icon-button edit-button">
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
            <span>Show  </span>
            <select
              className="rows-per-page"
              value={rowsPerPage}
              onChange={(e) => {
                setCurrentPage(0);
                setRowsPerPage(parseInt(e.target.value));
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
            // marginPagesDisplayed={2}
            // pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>

      </div>
    </div>
  );
};

export default TableView;
