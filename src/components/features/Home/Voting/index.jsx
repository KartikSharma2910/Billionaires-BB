import { Box } from "@mui/material";
import { Card, Section } from "components/common";
import { voting } from "constants/voting";
import styles from "./styles";

const Voting = () => {
  return (
    <Section heading="Voting" customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={{ ...styles.description, width: "80%" }}>
          Welcome to the Voting Section! Your vote can make all the difference
          in determining the fate of our participants. Scroll down to explore
          the contestant profiles and cast your vote for the one you believe
          deserves to win.
        </Box>
        <Box>
          <Box sx={styles.heading}>Voting Options</Box>
          <Box sx={styles.description}>
            Click the "Vote" button on your favorite participant's card to cast
            your vote. Each viewer can vote once.
          </Box>
        </Box>
        <Box>
          <Box sx={styles.heading}>Voting Period</Box>
          <Box sx={styles.description}>
            Voting is open from 10 march 24 to 12 march 24 Make sure to cast
            your vote before the deadline!
          </Box>
        </Box>
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
        <Box sx={styles.bottomText}>
          Don't wait! Make your voice heard by casting your vote now. Let's
          support our contestants and shape the outcome of the competition
          together!
        </Box>
      </Box>
    </Section>
  );
};

export default Voting;
