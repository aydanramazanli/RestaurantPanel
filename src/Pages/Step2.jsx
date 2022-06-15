import React, { useContext, useState, useEffect } from "react";
import { Data } from "../Datas/Context";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { addOrder } from "../redux/slices/restaurant";

const Step2 = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { menu } = useContext(Data);
  const [order, setOrder] = useState();
  const [amount, setAmount] = useState();
  const [price, setPrice] = useState();
  const location = useLocation();

  useEffect(() => {
    menu.map((e) => {
      if (order === e.Name && amount !== null) {
        let sum = Math.abs(amount) * e.price;
        setPrice(sum);
      }
    });
  });

  const submit = (e) => {
    // const data = {
    //   orders: order,
    //   amounts: amount,
    //   prices: price,
    // };
    // console.log(JSON.parse(window.localStorage.getItem(data)));
    // localStorage.setItem("data", JSON.stringify(data));

    const newOrder = {
      id: uuid(),
      name: order,
      amount: amount,
      price: price,
      date: new Date().getTime(),
    };
    dispatch(addOrder({ tableId: location.state.tables, order: newOrder }));
    navigator("/orders")
  };


  return (
    <div className="bg bg-orange-50 h-full">
      <form action="#" className="py-8 px-14 z-50 w-1/2 m-auto" onSubmit={submit}>
        <div className="my-10">
          <label className="text-gray-500  font-semibold">
            Məhsul adı
          </label>
          <br />
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="outline-0 px-4 py-2 my-4  border-2 border-gray bg-white rounded w-full"
          >
            <option>Menu</option>
            {menu?.map((e) => {
            
              return (
                <>
                
                  <option key={uuid()} value={e.value}>
                    {e.Name}
                  </option>
                </>
              );
            })}
          </select>
        </div>
        <div>
          <label  className="text-gray-500  font-semibold">
            Miqdar
          </label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            min="1"
            className="outline-0 px-4 py-2 my-4 border-2 border-gray  bg-swhite rounded w-full"
          />
        </div>
        <h3 className="text-gray-500 font-semibold">
        
          Qiymet : {price || 0} azn
        </h3>
        <div className="flex items-center my-4 justify-between">
          <button
            type="submit"
            className="bg-green-400 px-6 py-1.5 rounded text-white"
          
          >
            Əlavə et
          </button>
          <Link to="/step1"
        
            className="bg-orange-400 px-6 py-1.5 rounded text-white"
          
          >
          Geri dön
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Step2;
