import { Fragment } from "react";
import Logo from '../../img/logo.png'
export default function Menu() {
  return (
    <Fragment>
     <nav id="topnav">
        <div className="inner">
        <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars checkbtn"></i>
      </label>
          <a className="left logo"><img src={Logo} alt="Logo" /></a>
          <div className="left nav">
            <ul>
              <li><a>Superheroes</a></li>
              <li><a>Villains</a></li>
              <li><a>Damsels</a></li>
              <li className="action"><a className="btn btn-small">More...</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
