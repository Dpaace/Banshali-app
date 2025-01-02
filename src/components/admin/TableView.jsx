import { FaInfoCircle, FaEdit, FaTrash, FaSearch } from "react-icons/fa"; // Import icons


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
      generation: "G1",
      mother: "Barbara Gordon",
      father: "Tony Stark",
      gender: "M",
      dob: "5/27/15",
    },
    {
      profile_image: "/src/assets/admin/images/man_sample_1.jpg",
      name: "Arlene McCoy",
      generation: "G1",
      mother: "Barbara Gordon",
      father: "Tony Stark",
      gender: "M",
      dob: "5/27/15",
    },
    {
      profile_image: "/src/assets/admin/images/man_sample_1.jpg",
      name: "Arlene McCoy",
      generation: "G1",
      mother: "Barbara Gordon",
      father: "Tony Stark",
      gender: "M",
      dob: "5/27/15",
    },
  ];

  return (
    <div className="table-view">
      {/* <div className="table-view-filters">
        <input type="text" placeholder="Search" />
        <button className="search-button">
          <FaSearch />
        </button>
        <button className="filter-button">Filter</button>
        <button className="add-button">+ Add New</button>
      </div> */}
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
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <img
                  // className="profile-image"
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
              {/* <td>
                <button>Info</button>
                <button>Edit</button>
                <button>Delete</button>
              </td> */}
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
        <button>Import</button>
        <div className="pagination">
          <button>{"<"}</button>
          <span>1</span>
          <button>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default TableView;
