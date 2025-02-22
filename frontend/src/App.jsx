import "./App.css";
import EmployeeList from "./components/EmployeeList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Employee from "./components/Employee";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employees" element={<EmployeeList />}></Route>
          <Route path='/add-employee' element={<Employee />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
