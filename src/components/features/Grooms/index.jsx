import { Header } from "components/common";
import { Fragment } from "react";
import Banner from "./Banner";
import ChallengeVoyage from "./ChallengeVoyage";
import DelhiChapter from "./DelhiChapter";
import Participants from "./Participants";

const Grooms = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <DelhiChapter />
      <Participants />
      <ChallengeVoyage />
    </Fragment>
  );
};

export default Grooms;
