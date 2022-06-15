import { createContext, useEffect, useState } from "react";
import SDK from "./Sdk";

const Data = createContext({});

const DataProvider = ({ children }) => {
  const sdk = new SDK();

  //menu
  const menuData = async () => {
    const menus = await sdk.getMenu();
    setMenu(menus);
  };

  //tables
  const tableData = async () => {
    const tables = await sdk.getTable();
    setTable(tables);
  };

  //employees
  const employeesData = async () => {
    const employee = await sdk.getEmployees();
    setEmployees(employee);
  };

  //order Status
  const statusData = async () => {
    const orderStatus = await sdk.getStatus();
    setStatus(orderStatus);
  };

  const [table, setTable] = useState();
  const [status, setStatus] = useState();
  const [menu, setMenu] = useState([]);
  const [employees, setEmployees] = useState();
  const [method, setMethod] = useState({});


//appendMethods for total sum
  const appendMethods = (newMethods) => {
    setMethod({
      ...method,
      ...newMethods,
    });
  };

  useEffect(() => {
    menuData();
    statusData();
    employeesData();
    tableData();
  }, []);

  return (
    <Data.Provider
      value={{
        table,
        status,
        menu,
        employees,
        appendMethods,
        ...method,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export { Data, DataProvider };
