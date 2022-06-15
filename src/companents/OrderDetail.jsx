import React, { useState, useEffect } from "react";
import { selectTables } from "../redux/slices/restaurant";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const OrderDetail = () => {
  const tables = useSelector(selectTables);
  const { id } = useParams();
  const [order, setOrder] = useState();
  const [dates, setDates]= useState()



const date=()=>{
  var today = new Date(),

  today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
setDates(today)
}

  useEffect(() => {
    if (id) {
      const od = tables.find((o) => o.id === id);
      setOrder(od);
    }
    date()
  }, [id]);


  return (
    <>
      <div className="container flex justify-center mx-auto my-5">
        <div className="flex flex-col w-full">
          <div className="w-full">
            <div className="border-b border-gray-200 shadow">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-center py-2 text-xs text-gray-500">
                    Masa
                    </th>
                    <th className="text-center py-2 text-xs text-gray-500">
                      Məhsul adı
                    </th>
                    <th className="text-center py-2 text-xs text-gray-500">
                      Miqdar
                    </th>
                    <th className="text-center py-2 text-xs text-gray-500">
                      Ümumi məbləğ
                    </th>
                    <th className="text-center py-2 text-xs text-gray-500">
                      Sifariş tarixi
                    </th>
                  
                    <th className="text-center py-2 text-xs text-gray-500">
                      Status
                    </th>
                    <th className="text-center py-2 text-xs text-gray-500">
                    
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="whitespace-nowrap">
                    <td className="text-center py-4 text-sm text-gray-500">{order?.tables}</td>
                    <td className="text-center py-4">
                      <div className="text-sm text-gray-900">{order?.orders.name}</div>
                    </td>
                    <td className="text-center py-4">
                      <div className="text-sm text-gray-500">{order?.orders.amount}</div>
                    </td>
                    <td className="text-center py-4 text-sm text-gray-500">{order?.orders.price}</td>
                    <td className="text-center py-4 text-sm text-gray-500">
                    {dates}
                    </td>
                  
                    <td className="text-center py-4">
                    <button
                     
                        className="px-4 py-1 text-sm text-white bg-green-400 rounded"
                      >
                        Verildi
                      </button>
                    </td>
                    <td className="text-center py-4">
                    <Link to = "/orders"
                        className="px-4 py-1 text-sm text-white bg-orange-500 rounded"
                      >
                      Sifarişlərə dön
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
 
     
    </>
  );
};

export default OrderDetail;
