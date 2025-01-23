import { useState } from "react";

const Compare = () => {
    const [leftPerson, setLeftPerson] = useState({
        fullName: "",
        generation: "",
    });
    const [rightPerson, setRightPerson] = useState({
        fullName: "",
        generation: "",
    });

    const [relationship, setRelationship] = useState("");

    const handleCompare = () => {
        // Logic to determine the relationship
        setRelationship(`${leftPerson.fullName} and ${rightPerson.fullName} are brothers.`);
    };

    return (
        <div className="compare-component">
            <h1 className="text-center text-3xl font-bold mb-6">Compare</h1>
            <div className="flex justify-center space-x-8">
                {/* Left Person */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                        {/* <span className="text-2xl text-gray-500">+</span> */}
                    </div>
                    <input
                        type="text"
                        placeholder="Enter Full Name"
                        className="px-4 py-2 border rounded w-64"
                        value={leftPerson.fullName}
                        onChange={(e) =>
                            setLeftPerson((prev) => ({ ...prev, fullName: e.target.value }))
                        }
                    />
                    <input
                        type="text"
                        placeholder="Enter Generation"
                        className="px-4 py-2 border rounded w-64"
                        value={leftPerson.generation}
                        onChange={(e) =>
                            setLeftPerson((prev) => ({ ...prev, generation: e.target.value }))
                        }
                    />
                    <button
                        className="bg-purple-700 text-white px-6 py-2 rounded"
                        onClick={handleCompare}
                    >
                        Enter
                    </button>
                </div>

                {/* Right Person */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                        {/* <span className="text-2xl text-gray-500">+</span> */}
                    </div>
                    <input
                        type="text"
                        placeholder="Enter Full Name"
                        className="px-4 py-2 border rounded w-64"
                        value={rightPerson.fullName}
                        onChange={(e) =>
                            setRightPerson((prev) => ({ ...prev, fullName: e.target.value }))
                        }
                    />
                    <input
                        type="text"
                        placeholder="Enter Generation"
                        className="px-4 py-2 border rounded w-64"
                        value={rightPerson.generation}
                        onChange={(e) =>
                            setRightPerson((prev) => ({ ...prev, generation: e.target.value }))
                        }
                    />
                    <button
                        className="bg-purple-700 text-white px-6 py-2 rounded"
                        onClick={handleCompare}
                    >
                        Enter
                    </button>
                </div>
            </div>

            {/* Relationship Result */}
            <div className="text-center mt-8">
                {relationship && (
                    <p className="text-lg font-bold">{relationship}</p>
                )}
                <button
                    className="bg-green-600 text-white px-6 py-2 rounded mt-4"
                    onClick={() => alert("Generate Family Tree!")}
                >
                    Generate Family Tree
                </button>
            </div>
        </div>
    );
};

export default Compare;
