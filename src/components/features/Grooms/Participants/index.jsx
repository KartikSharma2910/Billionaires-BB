import { Box } from "@mui/material";
import { Card, Section } from "components/common";
import { participants } from "constants/participants";
import styles from "./styles";

const Participants = () => {
  return (
    <Section heading="Participants" customStyles={styles.wrapper}>
      <Box sx={styles.cardsWrapper}>
        {participants.map((participant, index) => (
          <Card
            key={index}
            {...participant}
            as="ParticipantsCard"
            customStyles={styles.card}
          />
        ))}
      </Box>
    </Section>
  );
};

export default Participants;
