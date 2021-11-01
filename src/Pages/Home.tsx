import { Fragment } from "react";
import "./App.scss";
import Welcome from "../component/Welcome";
import Quotes from "../component/Quotes";
import Info from "../component/Info";
import Rarity from "../component/Rarity";
export default function Home() {
  return (
    <Fragment>
      <div>
       <Welcome />
       <Info />
       <Quotes />
       <Rarity />
      </div>
    </Fragment>
  );
}
