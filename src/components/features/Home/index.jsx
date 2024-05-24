import { Fragment } from "react";
import Banner from "./Banner";
import Challenges from "./Challenges";
import Chapters from "./Chapters";
import MeetParticipants from "./MeetParticipants";
import ParentsInteraction from "./ParentsInteraction";
import Prizes from "./Prizes";
import Voting from "./Voting";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Welcome />
      <Chapters />
      <MeetParticipants />
      <Challenges />
      <ParentsInteraction />
      <Prizes />
      <Voting />
    </Fragment>
  );
};

export default Home;
