import { Header } from "components/common";
import { Fragment } from "react";
import Activities from "./Activities";
import AdventureUnveiled from "./AdventureUnveiled";
import Banner from "./Banner";
import ChallengeVoyage from "./ChallengeVoyage";
import DelhiChapter from "./DelhiChapter";
import Participants from "./Participants";
import StartVoting from "./StartVoting";

const Grooms = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <DelhiChapter />
      <Participants />
      <ChallengeVoyage />
      <AdventureUnveiled />
      <Activities />
      <StartVoting />
    </Fragment>
  );
};

export default Grooms;
