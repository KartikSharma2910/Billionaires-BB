import { Box } from "@mui/material";
import { Section, VideoPlayer } from "components/common";
import { activities } from "constants/activities";
import styles from "./styles";

const Activities = () => {
  return (
    <Section heading="Activities" customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        {activities.map(({ thumb, source, text }, index) => (
          <Box key={index} sx={styles.videoWrapper}>
            <VideoPlayer
              thumbnail={thumb}
              src={source}
              customStyles={styles.video}
            />
            <Box sx={styles.text}>{text}</Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
};

export default Activities;
