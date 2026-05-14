import React from "react";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export const CaseStudies = () => {
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
        {caseStudies.map((slug, i) => (
          <Link
            key={i}
            href={`/case-studies/${slug.slug}`}
            className="bg-gray-700 py-8 px-4 m-2 rounded-lg h-100 w-[33%]"
          >
            <h3 className="text-xl font-bold">{slug.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
