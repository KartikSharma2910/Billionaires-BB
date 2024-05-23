import { Fragment } from "react";
import Banner from "./Banner";
import Challenges from "./Challenges";
import Chapters from "./Chapters";
import MeetParticipants from "./MeetParticipants";
import ParentsInteraction from "./ParentsInteraction";
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
    </Fragment>
  );
};

export default Home;
