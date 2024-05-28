import { Box } from "@mui/material";
import { Card, CustomTable, Section } from "components/common";
import { challenges } from "constants/challenges";
import styles from "./styles";

const ChallengeVoyage = () => {
  return (
    <Section
      heading="Challenge Voyage"
      customStyles={{
        height: "min-content",
      }}
    >
      <Box
        sx={{
          padding: "20px 40px",
        }}
      >
        <Box
          sx={{
            color: "white",
            margin: "0 auto",
            textAlign: "center",
            width: "80%",
          }}
        >
          Welcome to the challenge zone! Brace yourself for a whirlwind of
          excitement as our participants dive headfirst into a series of
          high-stakes tasks designed to test their limits and ignite their
          competitive spirit. Get ready to witness passion, perseverance, and
          sheer determination in action as our contestants battle it out for
          glory!
        </Box>
        <Box sx={styles.cardsWrapper}>
          {challenges.map((data, index) => (
            <Card key={index} {...data} customStyles={styles.card} />
          ))}
        </Box>
        <Box
          sx={{
            width: "80%",
            height: "100%",
            margin: "2rem auto",
            borderRadius: "10px",
            border: "1px solid white",
          }}
        >
          <CustomTable />
        </Box>
      </Box>
    </Section>
  );
};

export default ChallengeVoyage;
