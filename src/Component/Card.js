import React from "react";
// import jobData from "../db/Data";
import { AiOutlineSave } from "react-icons/ai";

const Card = ({
  id,
  title,
  company,
  location,
  jobType,
  description,
  salary,
  logo,
  companyLogo,
  dateposted,
  bgcolor,
  job,
}) => {
  return (
    <div className="border-2 border-gray-400 max-w-sm  items-center justify-center p-2 rounded-2xl mx-6">
      <main className="flex w-[100%] items-center justify-center p-1">
        <div className="rounded-md w-[100%]">
          <div
            className={`group  rounded-900 p-4 transition-all duration-300 hover:rotate-1 lg:p-8 rounded-lg ${bgcolor} `}
          >
            <div className="mb-3 flex justify-between gap-8">
              <div className=" w-30 h-10 rounded-50 flex items-center justify-center">
                <span className="bg-white w-full h-10 rounded-full flex items-center justify-center p-2">
                  {dateposted}
                </span>
              </div>
              <div classNameName=" w-30 h-10 rounded-50 flex items-center justify-center">
                <span className="bg-white w-10 h-10 rounded-full flex items-center justify-center ">
                  <AiOutlineSave className="w-5 h-5 hover:text-black-500 " />
                </span>
              </div>
            </div>

            <div className="my-4">
              <h5 className="text-sm font-medium text-gray-200">{company}</h5>
              <div className="text-sm font-medium flex">
                <div className="flex-1">
                  <p className="m-1 ml-0  text-black-500 text-2xl">{title}</p>
                  <p className=" text-2xl ">{description}</p>
                </div>
                <div className="w-10 h-10 ml-8">
                  <img
                    src={logo}
                    className="w-full h-full rounded-full"
                    alt="img logo"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap jobskill ">
              <span className="border-2 w-20 h-10 rounded-full flex items-center justify-center text-sm">
                {jobType.type1}
              </span>
              <span className="border-2 w-20 h-10 rounded-full flex items-center justify-center">
                {jobType.type2}
              </span>
              <span className="border-2 w-20 h-10 rounded-full flex items-center justify-center">
                {jobType.type3}
              </span>
            </div>
          </div>
        </div>
      </main>
      <div className="flex m-1 justify-between">
        <div className="pl-2">
          <p className="font-bold">{salary}</p>
          <p className="text-gray-400">{location}</p>
        </div>
        <div>
          <span className="bg-black w-20 h-10 rounded-full flex items-center justify-centera text-white justify-center">
            Details
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
