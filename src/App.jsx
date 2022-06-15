import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./Pages/Error";
import Login from "./Pages/Login";
import Home from "./companents/Home";
import Main from "./Pages/Main";
import Orders from "./companents/Orders";
import OrderDetail from "./companents/OrderDetail";
import Step1 from "./Pages/Step1";
import Step2 from "./Pages/Step2";

function App() {
  return (
    <div className="App relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Home />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          
          <Route path="/orderdetail/:id" element={<OrderDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
