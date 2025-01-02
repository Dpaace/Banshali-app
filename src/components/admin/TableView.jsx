// import React from "react";

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
  ];

  return (
    <div className="table-view">
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
              <td>
                <button>Info</button>
                <button>Edit</button>
                <button>Delete</button>
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
