import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/material";
import { Button, Section } from "components/common";
import styles from "./styles";

const Welcome = () => {
  return (
    <Section heading="Welcome to Billionaires Bridemaid">
      <Box sx={styles.wrapper}>
        <Box sx={styles.data}>
          <Box sx={styles.mainText}>
            Enter the world of Billionaire Bride, where love meets luxury in a
            fusion of Bigg Boss drama and Splitsvilla romance. Get ready for an
            exhilarating journey filled with challenges, emotions, and
            unexpected twists.
          </Box>
          <Box sx={styles.listContainer}>
            <Box sx={styles.features}>Key Features</Box>
            <Box sx={styles.list}>
              <Box component="li">Luxurious Mansion Setting</Box>
              <Box component="li">
                Tasks Inspired by Bigg Boss and Splitsvilla
              </Box>
              <Box component="li">Emotional Moments and Unexpected Twists</Box>
              <Box component="li">Involvement of Contestants' Parents</Box>
              <Box component="li">Audience Engagement Through Voting</Box>
            </Box>
          </Box>
          <Button
            as="GradientButton"
            label="Learn More"
            customStyles={styles.button}
          />
          <Box sx={styles.iconWrapper}>
            <FacebookOutlinedIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </Box>
        </Box>
        <Box sx={styles.imageWrapper}>
          <Box component="img" src="/homeWelcome.png" sx={styles.image} />
        </Box>
      </Box>
    </Section>
  );
};

export default Welcome;
