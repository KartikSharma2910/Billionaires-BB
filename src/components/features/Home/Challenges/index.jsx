import { Box } from "@mui/material";
import { Card, Section } from "components/common";
import { challenges } from "constants/challenges";
import styles from "./styles";

const Challenges = () => {
  return (
    <Section heading="Challenges and Tasks" customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.heading}>
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
        <Box sx={styles.challengingData}>
          <Box sx={styles.challengingList}>
            <Box sx={styles.listContainer}>
              <Box sx={styles.listHeading}>Fashion Frenzy</Box>
              <Box sx={styles.list}>
                <Box component="li">
                  Fashion face-off challenged participants to create stunning
                  designs and showcase their style on the runway.
                </Box>
                <Box component="li">
                  Contestants unleashed their creativity as they brought their
                  fashion visions to life.
                </Box>
              </Box>
            </Box>
            <Box sx={styles.listContainer}>
              <Box sx={styles.listHeading}>Memorable Moments</Box>
              <Box sx={styles.list}>
                <Box component="li">
                  Spectacular runway shows featuring innovative designs and
                  breathtaking couture.
                </Box>
                <Box component="li">
                  Judges were impressed by contestants' attention to detail,
                  originality, and ability to push boundaries.
                </Box>
              </Box>
            </Box>
            <Box sx={styles.listContainer}>
              <Box sx={styles.listHeading}>Creative Expression</Box>
              <Box sx={styles.list}>
                <Box component="li">
                  Participants unleashed their creativity, translating their
                  fashion visions into stunning designs that captivated
                  audiences.
                </Box>
                <Box component="li">
                  Contestants showcased their unique style and flair, infusing
                  their creations with personal touches and innovative elements.
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.challengingImager}>
            <Box sx={styles.challengingImageContainer}>
              <Box
                component="img"
                src="/challengeLady.png"
                sx={styles.challengingImage}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Challenges;
