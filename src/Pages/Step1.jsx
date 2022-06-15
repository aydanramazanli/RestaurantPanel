import React, { useContext, useState} from "react";
import { Data } from "../Datas/Context";
import { useNavigate , Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTable } from "../redux/slices/restaurant";
import { v4 as uuidv4 } from "uuid";

const Step1 = () => {
  const dispatch = useDispatch();
  const { table, employees } = useContext(Data);
  const [tables, setTables] = useState();
  const [employee, setEmployee] = useState();
  const navigator = useNavigate();




  const submit = () => {
    // if(employee && tables){
    //   <Step2 employee= {employee} tables={tables}/>
    // }
    // const data = {
    //   employees: employee,
    //   table: tables,
    // };

    // localStorage.setItem("data", JSON.stringify(data));

    const newTable = {
      id: uuidv4(),
      tables: tables,
      waiter: employee,
      orders: {},
      date: new Date().getTime(),
      isDone: false, //sonlanib/sonlanmayb
    };

    dispatch(addTable(newTable));

    navigator("/step2", { state: { tables: newTable.id } });
  };

  return (
  
    <div className="bg bg-orange-50 h-full">
      <form action="#" className=" form py-8 px-14 z-50 w-1/2 m-auto" >
        <div className="my-10">
          <label className="text-gray-500 font-semibold">Masa Seçin</label>
          <br />

          <select
            value={tables}
            onChange={(e) => setTables(e.target.value)}
            className="outline-0 px-4 py-2 my-4 border-2 border-gray bg-white rounded w-full"
          >
            {table?.map((e, id) => {
              return (
                <>
                  <option id={id} value={e.value}>
                    Masa {e.tableCode}
                  </option>
                </>
              );
            })}
          </select>
        </div>

        <div>
          <label className="text-gray-500 font-semibold">Xidmetçi seçin</label>
          <br />

          <select
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
            className="outline-0 px-4 py-2 my-4 border-2 border-gray bg-white rounded w-full"
          >
            <option>Xidmətçi</option>
            {employees?.map((e, id) => {
              return (
                <>
                  <option id={id} value={e.value}>
                    {e.name}
                  </option>
                </>
              );
            })}
          </select>
        </div>

        <div className="flex items-center my-4 justify-between">
          <button
            type="submit"
            onClick={submit}
            className="bg-green-400 px-6 py-1.5 rounded text-white"
          >
            Sifarisi yarat
          </button>
          <Link to="/"
            type="submit"
           
            className="bg-orange-400 px-6 py-1.5 rounded text-white"
          >
            Ana səhifəyə dön
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Step1;
