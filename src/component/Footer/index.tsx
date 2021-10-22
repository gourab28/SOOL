import { Fragment } from "react";
import Solana from "../../img/sol.svg"
export default function Footer() {
  return (
    <Fragment>
      <footer>
        <div className="bottom">
          <div className="inner">
            <div className="left half">
              <p>© 2021 Solbit Heroes</p>
            </div>
            <div className="right half">
              <p>Powered By &nbsp;<img style={{
                  width: "1.5rem"
              }} src={Solana} alt="Solana" /></p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
