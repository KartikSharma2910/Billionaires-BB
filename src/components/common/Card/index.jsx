import TaskCard from "./TaskCard";
import VoteCard from "./VoteCard";

const CardTypeMapping = {
  TaskCard,
  VoteCard,
};

const defaultCardType = "TaskCard";

const Card = ({ as, ...rest }) => {
  const CardType =
    (as && CardTypeMapping[as]) || CardTypeMapping[defaultCardType];

  return <CardType {...rest} />;
};

export default Card;
