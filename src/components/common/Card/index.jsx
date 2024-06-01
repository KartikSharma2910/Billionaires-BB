import FeatureCard from "./FeatureCard";
import ParticipantsCard from "./ParticipantsCard";
import TaskCard from "./TaskCard";
import VideoCard from "./VideoCard";
import VoteCard from "./VoteCard";

const CardTypeMapping = {
  TaskCard,
  VoteCard,
  FeatureCard,
  ParticipantsCard,
  VideoCard,
};

const defaultCardType = "TaskCard";

const Card = ({ as, ...rest }) => {
  const CardType =
    (as && CardTypeMapping[as]) || CardTypeMapping[defaultCardType];

  return <CardType {...rest} />;
};

export default Card;
