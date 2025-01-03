import { useState } from "react";

import { FaInfoCircle, FaEdit, FaTrash, FaSearch, FaCloudDownloadAlt } from "react-icons/fa"; // Import icons
import ReactPaginate from 'react-paginate';


const TableView = () => {
  const data = [
    {
      profile_image: "/src/assets/admin/images/man_sample_1.jpg",
      name: "Arlene McCoy",
      generation: "G1",
      mother: "Barbara Gordon",
      father: "Tony Stark",
      gender: "M",
      dob: "5/27/15",
    },
    // Add more rows here
    {
      profile_image: "/src/assets/admin/images/man_sample_1.jpg",
      name: "Arlene McCoy",
      generation: "G2",
      mother: "Barbara Gordon",
      father: "Tony Stark",
      gender: "M",
      dob: "5/27/15",
    },
    {
      profile_image: "/src/assets/admin/images/man_sample_1.jpg",
      name: "Arlene McCoy",
      generation: "G3",
      mother: "Barbara Gordon",
      father: "Tony Stark",
      gender: "M",
      dob: "5/27/15",
    },
    {
      profile_image: "/src/assets/admin/images/man_sample_1.jpg",
      name: "Arlene McCoy",
      generation: "G4",
      mother: "Barbara Gordon",
      father: "Tony Stark",
      gender: "M",
      dob: "5/27/15",
    },
    {
      profile_image: "/src/assets/admin/images/man_sample_1.jpg",
      name: "Arlene McCoy",
      generation: "G5",
      mother: "Barbara Gordon",
      father: "Tony Stark",
      gender: "M",
      dob: "5/27/15",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  // const rowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = useState(1);


  // Calculate the rows for the current page
  const offset = currentPage * rowsPerPage;
  const currentRows = data.slice(offset, offset + rowsPerPage);

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
                  src={row.profile_image}
                  alt="Profile"
                />
                {row.name}
              </td>
              <td>{row.generation}</td>
              <td>{row.mother}</td>
              <td>{row.father}</td>
              <td>{row.gender}</td>
              <td>{row.dob}</td>
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

          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={Math.ceil(data.length / rowsPerPage)}
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
