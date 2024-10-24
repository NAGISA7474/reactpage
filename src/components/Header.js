import { useNavigate, Link } from "react-router-dom";

const Header = () => {
<<<<<<< HEAD
  return (
=======
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate('/login');
  }

  return(
>>>>>>> ff2a345 (complete)
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="nav__logo"
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt=""
            />
          </Link>

          <div className="navbar">
            <form className="d-flex" role="search">
              <select>
                <option>日本語</option>
                <option>English</option>
              </select>
<<<<<<< HEAD
              <button className="btn btn-danger" onClick={clickHandler}>
                Signin
              </button>
=======
              <button className="btn btn-danger" onClick={clickHandler}>ログイン</button>
>>>>>>> ff2a345 (complete)
            </form>
          </div>
        </div>
      </nav>
    </header>
<<<<<<< HEAD
  );
};
=======
  )
}
>>>>>>> ff2a345 (complete)

export default Header;
