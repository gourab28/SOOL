import { Fragment } from "react";
import Logo from '../../img/logo.png'
export default function Info() {
  return (
    <Fragment>
      <div>
        <section className="panel blue">
          <div className="inner">
            <div className="left two-thirds">
              <div className="burst">
                <img className="big" src={Logo} alt="Logo" />
              </div>
            </div>
            <div className="right third">
              <div className="comics-thought">
                <p>
                  <strong>Et esse tempor enim elit</strong>
                  Est laboris cillum est in mollit ad do anim do. Tempor nisi nisi mollit officia ad non aute ,<strong>Lorem ipsum dolor sit.</strong> Lorem, ipsum.
                  krauss.
                </p>
              </div>
            </div>
            <div className="half">
              <div className="comics-dialog">
                <h4>
                  <strong>Lorem.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corrupti ea, fugit voluptate iusto eum fugiat doloribus. <strong>Lorem.</strong>Lorem, ipsum dolor.
                  krauss.
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
