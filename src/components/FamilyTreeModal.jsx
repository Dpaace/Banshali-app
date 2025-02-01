
import PropTypes from "prop-types";
import { Tree, TreeNode } from "react-organizational-chart";

import sample1 from "/src/assets/public/sample_2.jpg";

const FamilyTreeModal = ({ familyData, onClose }) => {
  if (!familyData) return null;

  const { name } = familyData;

  // Function to render circular nodes
  const renderNode = (personName, photoUrl = sample1, gender = "M") => (
    <div className="flex flex-col items-center justify-center  h-28 bg-transparent p-2 ">
      <div className="relative">
        <img
          src={photoUrl}
          alt={personName}
          className="w-20 h-20 rounded-full object-cover"
        />
        {/* Gender Icon */}
        <div
          className={`absolute top-0 right-0 w-5 h-5 rounded-full flex items-center justify-center ${gender === "M" ? "bg-blue-500" : "bg-pink-500"
            }`}
        >
          {gender === "M" ? (
            <span className="text-white font-bold">♂</span>
          ) : (
            <span className="text-white font-bold">♀</span>
          )}
        </div>
      </div>
      <p className="text-xs text-center mt-2">{personName}</p>
    </div>
  );

  // Function to render a "Parent Group" node
  const renderParentGroup = (parent1, parent2) => (
    <div className="flex items-center space-x-4  justify-center">
      {renderNode(parent1.name, parent1.photo, parent1.gender)}
      {renderNode(parent2.name, parent2.photo, parent2.gender)}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 max-w-4xl p-6 rounded-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 font-bold text-lg"
        >
          &#x2715;
        </button>

        <h2 className="text-center text-xl font-bold mb-4">
          Family Tree of {name}
        </h2>

        {/* Family Tree */}
        <div className="flex justify-center">
          <Tree
            lineWidth={"2px"}
            lineColor={"black"}
            lineBorderRadius={"10px"}
            label={renderParentGroup(
              { name: "Parent 1", photo: sample1, gender: "M" },
              { name: "Parent 2", photo: sample1, gender: "F" }
            )} // Root node
          >
            {/* Parent Group Node */}
            <TreeNode
              label={renderParentGroup(
                { name: "Parent 1", photo: sample1, gender: "M" },
                { name: "Parent 2", photo: sample1, gender: "F" }
              )}
            >
              {/* Children */}
              <TreeNode label={renderNode("Child 1", sample1, "M")}>
                <TreeNode label={renderNode("Grandchild 1", sample1, "F")} />
                <TreeNode label={renderNode("Grandchild 2", sample1, "M")} />
              </TreeNode>
              <TreeNode label={renderNode("Child 2", sample1, "F")}>
                <TreeNode label={renderNode("Grandchild 3", sample1, "M")} />
                <TreeNode label={renderNode("Grandchild 4", sample1, "F")} />
              </TreeNode>

            </TreeNode>
            <TreeNode
              label={renderParentGroup(
                { name: "Parent 1", photo: sample1, gender: "M" },
                { name: "Parent 2", photo: sample1, gender: "F" }
              )}
            ></TreeNode>
          </Tree>
        </div>
      </div>
    </div>
  );
};

FamilyTreeModal.propTypes = {
  familyData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo_url: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FamilyTreeModal;
