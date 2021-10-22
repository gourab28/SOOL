import { Fragment } from "react";

export default function Quotes() {
  return (
    <Fragment>
     <section className="comic panel yellow">
          <div className="triple inner">
            <div className="third left">
              <div className="comic-pane">
                <div className="text">
                  <div className="holder">
                    <h2 className="yellow lh">“If we die we must, we will die a noble death.”</h2>
                    {/* <p>
                    - Cyclops
                    </p> */}
                  </div>
                </div>
                <div className="comic-image">
                  <span className="cyclops" />
                </div>
              </div>
            </div>
            <div className="third left">
              <div className="comic-pane">
                <div className="text">
                  <div className="holder">
                    <h2 className="orange lh">“If we can’t protect the Earth, you can be damn well sure we’ll avenge it.”</h2>
                    {/* <p>
                      - IronMan
                    </p> */}
                  </div>
                </div>
                <div className="comic-image">
                  <span className="ironMan" />
                </div>
              </div>
            </div>
            <div className="third right">
              <div className="comic-pane">
                <div className="text">
                  <div className="holder">
                    <h2 className="green lh">“Remember, with great power comes great responsibility.”</h2>
                    {/* <p>
                      - SpiderMan
                    </p> */}
                  </div>
                </div>
                <div className="comic-image">
                  <span className="spiderman" />
                </div>
              </div>
            </div>
            {/* 3Col */}
            <div className="third left">
              <div className="comic-pane">
                <div className="text">
                  <div className="holder">
                    <h2 className="green lh">“We are not a team, we are a time bomb.”</h2>
                    {/* <p>
                    - The Hulk
                    </p> */}
                  </div>
                </div>
                <div className="comic-image">
                  <span className="hulk" />
                </div>
              </div>
            </div>
            <div className="third left">
              <div className="comic-pane">
                <div className="text">
                  <div className="holder">
                    <h2 className="yellow lh-1">“Fill your heart with better memories. Better actions. Better friends.”</h2>
                    {/* <p>
                    - Wolverine
                    </p> */}
                  </div>
                </div>
                <div className="comic-image">
                  <span className="wolverine" />
                </div>
              </div>
            </div>
            <div className="third left">
              <div className="comic-pane">
                <div className="text">
                  <div className="holder">
                    <h2 className="orange lh">“If we die we must, we will die a noble death.”</h2>
                    {/* <p>
                    - Cyclops
                    </p> */}
                  </div>
                </div>
                <div className="comic-image">
                  <span className="cyclops" />
                </div>
              </div>
            </div>
          </div>
        </section>
    </Fragment>
  );
}
