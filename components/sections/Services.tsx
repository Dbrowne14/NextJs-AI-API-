import React from "react";

const servicesData = ["website design", "seo", "social media marketing", "content creation"];

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col bg-gray-800 text-white h-fit w-full p-10 gap-8"
    >
      <div className="flex flex-row items-center gap-4 pl-5">
        <h2 className="border-r p-3 text-4xl">Services</h2>
        <p className="text-xl">
          We offer a wide range of marketing services to help your business
          grow.
        </p>
      </div>
      <div aria-label="services-boxes">
        {servicesData.map((service) => (
          <div key={service} className="bg-gray-700 py-8 px-4 m-2 rounded-lg">
            <h3 className="text-xl font-bold">{service}</h3>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Services;
