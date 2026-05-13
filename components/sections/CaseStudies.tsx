import React from "react";

const CaseStudies = () => {
  return (
    <div
      id="case-studies"
      className="flex flex-col bg-gray-500 text-white w-full p-10 gap-9 h-fit"
    >
      <div className="flex flex-row items-center gap-4 pl-5">
        <h2 className="border-r p-3 text-4xl">Case Studies</h2>
        <p className="text-xl">
          A list of our most successful marketing campaigns and the results we
          achieved for our clients.
        </p>
      </div>
      <div className="flex flex-row w-full">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={i}
            className="bg-gray-700 py-8 px-4 m-2 rounded-lg h-100 w-[33%]"
          >
            <h3 className="text-xl font-bold">Case Study {i + 1}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
