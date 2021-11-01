import { Fragment } from "react";

export default function Rarity() {
  return (
    <Fragment>
      <section className="comic panel green">
        <div className="inner">
          <div className="left third">
            <div className="burst">
              <h4 className="big">TRAIT RARITY</h4>
            </div>
          </div>
        </div>
        <div className="triple inner">
          <div className="third left">
            <div className="comic-pane image-heavy">
              <div className="text">
                <div className="holder">
                  <span className="trapezoid">
                    <h2 className="yellow lh">C O M M O N</h2>
                  </span>
                  <div className="caption">
                    <p>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates explicabo ex aspernatur eveniet labore sequi nam!
                    </p>
                  </div>
                </div>
              </div>
              <div className="comic-image">
                <span className="cimg" />
              </div>
            </div>
          </div>
          <div className="third left">
            <div className="comic-pane">
              <div className="text">
                <div className="holder">
                  <h2 className="orange">U N C O M M O N</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi nemo ipsam omnis eum pariatur.
                  </p>
                </div>
              </div>
              <div className="comic-image">
                <span className="cimg" />
              </div>
            </div>
          </div>
          <div className="third right">
            <div className="comic-pane image-heavy">
              <div className="text">
                <div className="holder">
                  <span className="trapezoid">
                    <h2 className="green">R A R E</h2>
                  </span>
                  <div className="caption">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sit unde. Repellat, odio illo!
                    </p>
                  </div>
                </div>
              </div>
              <div className="comic-image">
                <span className="cimg" />
              </div>
            </div>
          </div>
        </div>
        <div className="double triple inner">
        <div className="two-thirds left">
          <div className="comic-pane">
            <div className="text">
              <div className="holder">
                <h2 className="yellow">SUPER HERO</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est beatae ea praesentium? Obcaecati est autem dolore veritatis quos.</p>
              </div>
            </div>
            <div className="comic-image"><span className="cimg" /></div>
          </div>
        </div>
        <div className="third right">
          <div className="comic-pane">
            <div className="text">
              <div className="holder">
                <h2 className="orange">MYTHICAL</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error doloribus quisquam!</p>
              </div>
            </div>
            <div className="comic-image"><span className="cimg" /></div>
          </div>
        </div>
      </div>
      </section>
    </Fragment>
  );
}
