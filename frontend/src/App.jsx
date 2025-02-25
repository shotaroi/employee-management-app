import "./App.css";
import EmployeeList from "./components/EmployeeList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Employee from "./components/Employee";
import ListDepartments from "./components/DepartmentList";
import Department from "./components/Department";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employees" element={<EmployeeList />}></Route>
          <Route path="/add-employee" element={<Employee />}></Route>
          <Route path="edit-employee/:id" element={<Employee />}></Route>
          <Route path="/departments" element={<ListDepartments />}></Route>
          <Route path="/add-department" element={<Department />}></Route>
          <Route path="/edit-department/:id" element={<Department />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
