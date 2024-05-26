import FeatureCard from "./FeatureCard";
import TaskCard from "./TaskCard";
import VoteCard from "./VoteCard";

const CardTypeMapping = {
  TaskCard,
  VoteCard,
  FeatureCard,
};

const defaultCardType = "TaskCard";

const Card = ({ as, ...rest }) => {
  const CardType =
    (as && CardTypeMapping[as]) || CardTypeMapping[defaultCardType];

  return <CardType {...rest} />;
};

export default Card;
