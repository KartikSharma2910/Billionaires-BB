import { Box } from "@mui/material";
import { Section } from "components/common";
import styles from "./styles";

const ParentsInteraction = () => {
  return (
    <Section
      heading="Parents Interaction"
      customStyles={{ height: "min-content" }}
    >
      <Box sx={styles.container}>
        <Box sx={styles.imageWrapper}>
          <Box
            component="img"
            src="/parentsInteraction.png"
            sx={styles.image}
          />
        </Box>
        <Box sx={styles.dataContainer}>
          <Box sx={styles.listContainer}>
            <Box sx={styles.listHeading}>Parents Interaction</Box>
            <Box sx={styles.list}>
              Welcome to the heartwarming Parents Interaction section! Here, we
              celebrate the invaluable role of parents in our participants'
              journey. Their unwavering support and encouragement are integral
              to the success of our contestants, making this section a cherished
              tribute to the bond between parents and children.
            </Box>
          </Box>
          <Box sx={styles.listContainer}>
            <Box sx={styles.listHeading}>Parental Messages</Box>
            <Box sx={styles.list}>
              Watch heart-touching messages from parents, filled with love,
              pride, and words of wisdom for their children. These messages
              serve as a source of inspiration and motivation, reminding our
              participants of the love and support that surrounds them.
            </Box>
          </Box>
          <Box sx={styles.listContainer}>
            <Box sx={styles.listHeading}>Parental Visits</Box>
            <Box sx={styles.list}>
              Experience the emotional reunions as participants embrace their
              parents after weeks of separation. Witness the tears, laughter,
              and heartfelt moments shared between parents and children,
              capturing the essence of family bonds amidst the competition.
            </Box>
          </Box>
          <Box component="img" src="/fancing1.png" sx={styles.upperImage} />
          <Box component="img" src="/fancing2.png" sx={styles.lowerImage} />
        </Box>
      </Box>
    </Section>
  );
};

export default ParentsInteraction;
