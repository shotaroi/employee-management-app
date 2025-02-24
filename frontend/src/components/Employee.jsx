import { useEffect } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Employee = () => {

  const { id } = useParams();
  const navigator = useNavigate();

  const {
    register,
    handleSubmit,
    // setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
    },
  });

  const onSubmit = (employee) => {
    if (id) {
      updateEmployee(id, employee)
        .then(() => {
          navigator("/employees");
        })
        .catch((error) => console.error(error));
    } else {
      createEmployee(employee)
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
    }
  };

  const pageTitle = () => {
    if (id) {
      return <h2 className="text-center m-4">Update Employee</h2>;
    } else {
      return <h2 className="text-center m-4">Add Employee</h2>;
    }
  };

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
            const {firstName, lastName, email} = response.data;
            reset({ firstName, lastName, email });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id, reset]);

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group m-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                  name="firstName"
                  {...register("firstName", {
                    required: "First Name required",
                  })}
                />
                {errors.firstName && (
                  <p style={{ color: "red" }}>{errors.firstName.message}</p>
                )}
              </div>
              <div className="form-group m-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                  name="lastName"
                  {...register("lastName", {
                    required: "Last Name required",
                  })}
                />
                {errors.lastName && (
                  <p style={{ color: "red" }}>{errors.lastName.message}</p>
                )}
              </div>
              <div className="form-group m-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  {...register("email", {
                    required: "Email required",
                  })}
                />
                {errors.email && (
                  <p style={{ color: "red" }}>{errors.email.message}</p>
                )}
              </div>
              <button className="btn btn-success m-3" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
