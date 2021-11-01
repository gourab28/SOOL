import { Fragment } from "react";
import Solana from "../../img/sol.svg";
export default function Footer() {
  return (
    <Fragment>
      <footer>
        <div className="top">
          <div className="inner">
            <div className="left quarter company">
              <h1>
              SOLBIT<span>//</span>
                <br />
                <span>//</span> HEROES
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              
            </div>
            <div className="left quarter">
              <h4>SECTION 1</h4>
              <ul>
                <li>
                  <a>LoremMan</a>
                </li>
                <li>
                  <a>LoremDerMan</a>
                </li>
                <li>
                  <a>LoremWoman</a>
                </li>
                <li>
                  <a>LoremBatMan</a>
                </li>
                <li>
                  <a>Wolverine</a>
                </li>
                <li>
                  <a>Catwoman</a>
                </li>
              </ul>
            </div>
            <div className="left quarter">
              <h4>SECTION 2</h4>
              <ul>
                <li>
                  <a>LoremMan</a>
                </li>
                <li>
                  <a>LoremDerMan</a>
                </li>
                <li>
                  <a>LoremWoman</a>
                </li>
                <li>
                  <a>LoremBatMan</a>
                </li>
                <li>
                  <a>Wolverine</a>
                </li>
                <li>
                  <a>Catwoman</a>
                </li>
              </ul>
            </div>
            <div className="left quarter">
              <h4>SECTION 3</h4>
              <ul>
                <li>
                  <a>LoremMan</a>
                </li>
                <li>
                  <a>LoremDerMan</a>
                </li>
                <li>
                  <a>LoremWoman</a>
                </li>
                <li>
                  <a>LoremBatMan</a>
                </li>
                <li>
                  <a>Wolverine</a>
                </li>
                <li>
                  <a>Catwoman</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="inner">
            <div className="left half">
              <p>© 2021 Solbit Heroes</p>
            </div>
            <div className="right half">
              <p>
                Powered By &nbsp;
                <img
                  style={{
                    width: "1.5rem",
                  }}
                  src={Solana}
                  alt="Solana"
                />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
