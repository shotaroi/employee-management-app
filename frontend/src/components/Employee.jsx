import { useState } from "react";
import { createEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Employee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigator = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const saveEmployee = (e) => {
    e.preventDefault();

    const newEmployee = { firstName, lastName, email };

    createEmployee(newEmployee)
      .then(() => {
        navigator("/employees");
      })
      .catch((error) => {
        console.log("hmm?");
        console.error(
          "Axios Error:",
          error.response ? error.response.data : error.message
        );
      });
  };

  const onSubmit = () => {
    const newEmployee = { firstName, lastName, email };

    createEmployee(newEmployee)
      .then(() => {
        navigator("/employees");
      })
      .catch((error) => {
        console.log("hmm?");
        console.error(
          "Axios Error:",
          error.response ? error.response.data : error.message
        );
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center m-4">Add Employee</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group m-3">
                <label htmlFor="" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                  name="firstName"
                  //   value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                {errors.firstName && (
                  <p style={{ color: "red" }}>{errors.firstName.message}</p>
                )}
              </div>
              <div className="form-group m-3">
                <label htmlFor="" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                  name="lastName"
                  //   value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                />
                {errors.lastName && (
                  <p style={{ color: "red" }}>{errors.lastName.message}</p>
                )}
              </div>
              <div className="form-group m-3">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  //   value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors.email && (
                  <p style={{ color: "red" }}>{errors.email.message}</p>
                )}
              </div>
            </form>
            <button
              className="btn btn-success m-3"
              type="submit"
              //   onClick={saveEmployee}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
