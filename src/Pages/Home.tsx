import { Fragment } from "react";
import "./App.scss";
import Welcome from "../component/Welcome";
import Quotes from "../component/Quotes";
export default function Home() {
  return (
    <Fragment>
      <div>
       <Welcome />
       <Quotes />
      </div>
    </Fragment>
  );
}
