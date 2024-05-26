import { Box } from "@mui/material";
import { Card, Section } from "components/common";
import { achievements } from "constants/achievements";
import { features } from "constants/features";
import styles from "./styles";

const DelhiChapter = () => {
  const chips = [
    "Adventure Trekking",
    "Culinary Exploration",
    "reading books",
    "Digital Detox",
    "World Traveler",
    "Photography",
    "sports",
  ];
  return (
    <Section heading="Delhi Chapter" customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        <Box component="img" src="/delhiChapter.png" sx={styles.image} />
        <Box sx={styles.databox}>
          <Box sx={styles.colorText}>About</Box>
          <Box sx={styles.heading}>Binnanyy Bansal</Box>
          <Box sx={styles.description}>
            Binnanyy Bansal is an entrepreneur known for founding Tech
            Innovations Inc. and bansal Enterprises. His "Tech for Good
            Initiative" aims at social problem-solving and education
            accessibility. He advocates for financial suggestions, conservation,
            and educational enhancement.
          </Box>
          <Box sx={styles.cardsWrapper}>
            {features.map((feature, index) => (
              <Card
                key={index}
                as="FeatureCard"
                customStyles={styles.card}
                {...feature}
              />
            ))}
          </Box>
        </Box>
        <Box sx={styles.bottomBox}>
          <Box sx={styles.leftBox}>
            <Box sx={styles.colorText}>Hobbies</Box>
            <Box sx={styles.chipWrapper}>
              {chips.map((chip, index) => (
                <Box key={index} sx={styles.chip}>
                  {chip}
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={styles.rightBox}>
            <Box sx={styles.colorText}>Achievements</Box>
            <Box sx={styles.achievementsWrapper}>
              {achievements.map((achive, index) => (
                <Card
                  key={index}
                  {...achive}
                  as="FeatureCard"
                  customStyles={styles.achievementsCard}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default DelhiChapter;
