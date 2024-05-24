import { Box } from "@mui/material";
import { Section } from "components/common";
import styles from "./styles";

const Prizes = () => {
  return (
    <Section heading="Prizes" customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.upperCard}>
          <Box sx={styles.upperCardContainer}>
            <Box sx={styles.goldHeading}>Crowning Glory</Box>
            <Box sx={styles.dataContainer}>
              <Box sx={styles.heading}>Grand Prize for the Winner</Box>
              <Box sx={styles.description}>
                The ultimate symbol of victory and regality, the Crown of
                Elegance awaits the bride who captures the heart of our
                billionaire groom. This exquisite crown represents not just a
                title, but the beginning of a new chapter filled with love,
                luxury, and endless possibilities.
              </Box>
            </Box>
          </Box>
          <Box>
            <Box component="img" src="/crown.png" sx={{ width: "180px" }} />
          </Box>
        </Box>
        <Box sx={styles.smallCardWrapper}>
          <Box sx={styles.smallCard}>
            <Box sx={styles.upperCardContainer}>
              <Box sx={styles.goldHeading}>Ride in Style</Box>
              <Box sx={styles.dataContainer}>
                <Box sx={styles.heading}>Second Runner Up</Box>
                <Box sx={styles.smallCardDescription}>
                  Drive away in style with our luxurious car prize!
                </Box>
              </Box>
            </Box>
            <Box component="img" src="/car.png" sx={styles.smallImage} />
          </Box>
          <Box sx={styles.smallCard}>
            <Box sx={styles.upperCardContainer}>
              <Box sx={styles.goldHeading}>Cash for Success</Box>
              <Box sx={styles.dataContainer}>
                <Box sx={styles.heading}>Third Runner Up</Box>
                <Box sx={styles.smallCardDescription}>
                  As the third runner up, we're rewarding your hard work.
                </Box>
              </Box>
            </Box>
            <Box component="img" src="/money.png" sx={styles.smallImage} />
          </Box>
          <Box sx={styles.smallCard}>
            <Box sx={styles.upperCardContainer}>
              <Box sx={styles.goldHeading}>Firsts Runner UP</Box>
              <Box sx={styles.dataContainer}>
                <Box sx={styles.heading}>Cash Prizes</Box>
                <Box sx={styles.smallCardDescription}>
                  With multiple gadgets and goodies and all the different
                  accessories
                </Box>
              </Box>
            </Box>
            <Box component="img" src="/prize.png" sx={styles.smallImage} />
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Prizes;
