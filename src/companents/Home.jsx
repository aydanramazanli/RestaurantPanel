import React, { useContext } from "react";
import { Data } from "../Datas/Context";

const Home = () => {
  const { total } = useContext(Data);
  return (
    <>
      <div className="bg-fixed imageHome w-full py-6">
        <h1 className="text-center text-orange-500 font-semibold text-2xl ">
          Deliciko Restaurant
        </h1>
        <div className="w-1/2 m-auto ">
          <p className="text-center text-gray-500 my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            distinctio inventore animi pariatur, accusamus, aperiam atque eius
            assumenda minus deserunt tempora cum debitis, et repudiandae nulla.
          </p>
        </div>

        <div className=" m-auto h-1/2 w-1/2 flex items-center justify-center ">
         
          <h2 className="text-2xl font-semibold text-slate-900">Ümumi məbləğ :{total} Azn</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
