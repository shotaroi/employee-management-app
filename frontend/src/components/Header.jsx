import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <NavLink className="navbar-brand title" to="/">Employee Management App</NavLink>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className='nav-link' to='/employees'>Employees</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className='nav-link' to='/departments'>Departments</NavLink>
              </li>
              
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
