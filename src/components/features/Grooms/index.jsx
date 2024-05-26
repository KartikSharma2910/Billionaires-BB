import { Header } from "components/common";
import { Fragment } from "react";
import Banner from "./Banner";
import DelhiChapter from "./DelhiChapter";
import Participants from "./Participants";

const Grooms = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <DelhiChapter />
      <Participants />
    </Fragment>
  );
};

export default Grooms;
