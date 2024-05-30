import { Box } from "@mui/material";
import { Card, Section } from "components/common";
import { voting } from "constants/voting";
import styles from "./styles";

const StartVoting = () => {
  return (
    <Section
      heading="Start Voting"
      customStyles={{
        height: "min-content",
      }}
    >
      <Box sx={styles.container}>
        <Box sx={styles.cardWrapper}>
          {voting.map((vote, index) => (
            <Card
              as="VoteCard"
              customStyles={styles.card}
              key={index}
              {...vote}
            />
          ))}
        </Box>
      </Box>
    </Section>
  );
};

export default StartVoting;
