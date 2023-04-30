import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer bg-[#f2f2f2] pt-8 pb-8 pl-6 pr-6 md:mt-60 xl:mt-32">
        <div className="sm:flex sm:flex-row sm:justify-around ">
          <div className="new flex flex-col gap-4">
            <h1 className="font-semibold text-gray-500">What's new</h1>
            <p className="text-xs  hover:underline text-gray-800 ">
              Microsoft 365
            </p>
            <p className="text-xs  hover:underline text-gray-800">Games</p>
            <p className="text-xs  hover:underline text-gray-800">
              Surface Pro 9
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Surface Laptop 5
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Surface Laptop Studio
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Surface Laptop Go 2
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Windows 11 apps
            </p>
          </div>
          <div className="store flex flex-col gap-4 ">
            <h1 className="mt-12 font-semibold text-gray-500 sm:mt-1">
              Microsoft Store
            </h1>
            <p className="text-xs  hover:underline text-gray-800">
              Account profile
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Download Center
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Microsoft Store Support
            </p>
            <p className="text-xs  hover:underline text-gray-800">Returns</p>
            <p className="text-xs  hover:underline text-gray-800">
              Order tracking
            </p>
          </div>
          <div className="education flex flex-col gap-4 ">
            <h1 className="mt-12 font-semibold text-gray-500 sm:mt-1">
              Education
            </h1>
            <p className="text-xs  hover:underline text-gray-800">
              Microsoft in education
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Devices for education
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Microsoft Teams for Education
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Microsoft 365 Education
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Office Education
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Educator training and development
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Deals for students and parents
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Azure for students
            </p>
          </div>
        </div>
        <div className="sm:flex sm:flex-row sm:justify-around ">
          <div className="business flex flex-col gap-4">
            <h1 className="mt-12 font-semibold text-gray-500 ">Business</h1>
            <p className="text-xs  hover:underline text-gray-800">
              Microsoft Cloud
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Microsoft Security
            </p>
            <p className="text-xs  hover:underline text-gray-800">Azure</p>
            <p className="text-xs  hover:underline text-gray-800">
              Dynamics 365
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Microsoft 365
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Microsoft Advertising
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Microsoft Industry
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Microsoft Teams
            </p>
          </div>
          <div className="developer flex flex-col gap-4">
            <h1 className="mt-12 font-semibold text-gray-500">
              Developer & IT
            </h1>
            <p className="text-xs  hover:underline text-gray-800">
              Developer Center
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Documentation
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Microsoft Learn
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Microsoft Tech Community
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Azure Marketplace
            </p>
            <p className="text-xs  hover:underline text-gray-800">AppSource</p>
            <p className="text-xs  hover:underline text-gray-800">
              Microsoft Power Platform
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Visual Studio
            </p>
          </div>
          <div className="company flex flex-col gap-4">
            <h1 className="mt-12 font-semibold text-gray-500">Company</h1>
            <p className="text-xs  hover:underline text-gray-800">Careers</p>
            <p className="text-xs  hover:underline text-gray-800">
              About Microsoft
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Company news
            </p>
            <p className="text-xs  hover:underline text-gray-800">
              Privacy at Microsoft
            </p>
            <p className="text-xs  hover:underline text-gray-800">Investors</p>
            <p className="text-xs  hover:underline text-gray-800">Security</p>
            <p className="text-xs  hover:underline text-gray-800">
              Sustainability
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
