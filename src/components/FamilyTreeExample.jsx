// src/components/FamilyTree.jsx
import { Tree, TreeNode } from 'react-organizational-chart';

// Import your images (replace with your actual image paths)
import GrandparentImage from '../assets/public/sample_1.jpg';
import Parent1Image from '../assets/public/sample_1.jpg';
import Parent2Image from '../assets/public/sample_1.jpg';
import Child1Image from '../assets/public/sample_1.jpg';
import Child2Image from '../assets/public/sample_1.jpg';
import Child3Image from '../assets/public/sample_1.jpg';
import Child4Image from '../assets/public/sample_1.jpg';

const FamilyTree = () => {
  return (
    <div className="p-4">
      <Tree
        label={
          <div className="bg-transparent text-black p-4  flex flex-col items-center">
            <img
              src={GrandparentImage}
              alt="Grandparent"
              className="w-16 h-16 rounded-full mb-2"
            />
            <span>Grandparent</span>
          </div>
        }
      >
        <TreeNode
          label={
            <div className="bg-transparent text-black p-4 flex flex-col items-center">
              <img
                src={Parent1Image}
                alt="Parent 1"
                className="w-16 h-16 rounded-full mb-2"
              />
              <span>Parent 1</span>
            </div>
          }
        >
          <TreeNode
            label={
              <div className="bg-transparent text-black p-4 flex flex-col items-center">
                <img
                  src={Child1Image}
                  alt="Child 1"
                  className="w-16 h-16 rounded-full mb-2"
                />
                <span>Child 1</span>
              </div>
            }
          />
          <TreeNode
            label={
              <div className="bg-transparent text-black p-4 flex flex-col items-center">
                <img
                  src={Child2Image}
                  alt="Child 2"
                  className="w-16 h-16 rounded-full mb-2"
                />
                <span>Child 2</span>
              </div>
            }
          />
        </TreeNode>
        <TreeNode
          label={
            <div className="bg-transparent text-black p-4 flex flex-col items-center">
              <img
                src={Parent2Image}
                alt="Parent 2"
                className="w-16 h-16 rounded-full mb-2"
              />
              <span>Parent 2</span>
            </div>
          }
        >
          <TreeNode
            label={
              <div className="bg-transparent text-black p-4 flex flex-col items-center">
                <img
                  src={Child3Image}
                  alt="Child 3"
                  className="w-16 h-16 rounded-full mb-2"
                />
                <span>Child 3</span>
              </div>
            }
          />
          <TreeNode
            label={
              <div className="bg-transparent text-black p-4 flex flex-col items-center">
                <img
                  src={Child4Image}
                  alt="Child 4"
                  className="w-16 h-16 rounded-full mb-2"
                />
                <span>Child 4</span>
              </div>
            }
          />
        </TreeNode>
      </Tree>
    </div>
  );
};

export default FamilyTree;