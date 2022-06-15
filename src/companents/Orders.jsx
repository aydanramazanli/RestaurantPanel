import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { selectTables } from "../redux/slices/restaurant";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {Data} from '../Datas/Context'
import { removeOrder } from "../redux/slices/restaurant";

const Orders = () => {
  const tables = useSelector(selectTables);
  const { appendMethods } = useContext(Data);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tables) {
      let sum = 0;
      tables.forEach((w) => (sum += w.orders.price));
      setTotal(sum);
    }
  }, []);

  const removeOrders = (id, index) => {
    dispatch(removeOrder(id));
    const price = tables[index].orders.price;
    setTotal(total - price);
  };

  useEffect(() => {
    if(total) {
      appendMethods({total})
    }
  }, [total]);



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
                      ID
                    </th>
                    <th className="text-center py-2 text-xs text-gray-500">
                      Masa
                    </th>
                    <th className="text-center py-2 text-xs text-gray-500">
                      Xidmətçi
                    </th>
                    <th className="text-center py-2 text-xs text-gray-500">
                      Status
                    </th>
                    <th className="text-center py-2 text-xs text-gray-500">
                      Məbləğ
                    </th>
                    <th className=" text-center py-2 text-xs text-gray-500">
                      Tarix
                    </th>
                    <th className="text-center py-2 text-xs text-gray-500">
                      Ətraflı bax
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {tables !== null
                    ? tables.map((item, id) => {
                        return (
                          <>
                            <tr className="whitespace-nowrap">
                              <td className="text-center py-4 text-sm text-gray-500">
                                {id}
                              </td>
                              <td className="text-center py-4">
                                <div className="text-sm text-gray-900">
                                  {item.tables}
                                </div>
                              </td>
                              <td className="text-center py-4">
                                <div className="text-sm text-gray-500">
                                  {item.waiter}
                                </div>
                              </td>
                              <td className="text-center py-4 text-sm text-gray-500">
                                {item.isDone ? "Sonlanib" : "Sonlanmayib"}
                              </td>
                              <td className="text-center py-4 text-sm text-gray-500">
                                {item.orders.price} AZN
                              </td>
                              <td className="text-center py-4 text-sm text-gray-500">
                                {item.date}
                              </td>
                              <td className="text-center py-4">
                                <Link to={`/orderdetail/${item.id}`}>
                                  <li className="px-2 py-1 text-sm text-white bg-blue-500 rounded">
                                    Bax
                                  </li>
                                </Link>
                              </td>
                              <td>
                              <button
                                  type="button"
                                  onClick={() => removeOrders(item.id, id)}
                                  className="px-4 py-1 text-sm text-white bg-red-500 rounded"
                                >
                                  Sil
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                               
                              </td>
                            </tr>
                          </>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center font-semibold text-xl text-slate-600">
        Cəmi Məbləğ : {total} Azn
      </h1>
    </>
  );
};

export default Orders;
