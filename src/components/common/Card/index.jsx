import TaskCard from "./TaskCard";

const CardTypeMapping = {
  TaskCard,
};

const defaultCardType = "TaskCard";

const Card = ({ as, ...rest }) => {
  const CardType =
    (as && CardTypeMapping[as]) || CardTypeMapping[defaultCardType];

  return <CardType {...rest} />;
};

export default Card;
