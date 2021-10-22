import { Fragment } from "react";

export default function Welcome() {
  return (
    <Fragment>
      <header className="main panel red">
        <div className="inner">
          <div className="left">
            <h1 className="big">WELCOME</h1>
            <br />
            <h5 className="big">
              Solbit Heroes have landed! An exclusive 2D collection of your
              favourite super heroes in Solbit form!
            </h5>
            <p className="big">
              There are 10,000 Solbit Heroes in our first collection that will
              be randomly generated during the minting process. Our universe is
              full of Solbit Heroes ready to believe in the good.
            </p>
            {/* <h3 className="big">Big Header 3</h3>
              <h4 className="big">Big Header 4</h4> */}
          </div>
          <div className="right"></div>
        </div>
      </header>
    </Fragment>
  );
}
