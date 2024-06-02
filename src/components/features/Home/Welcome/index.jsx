import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Modal } from "@mui/material";
import { Button, Section } from "components/common";
import { useState } from "react";
import styles from "./styles";

const Welcome = () => {
  const [open, setOpen] = useState(false);
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
            onClick={() => setOpen(true)}
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
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={styles.mainModal}
        disableAutoFocus
        disableEnforceFocus
        disableRestoreFocus
      >
        <Box sx={styles.modal}>
          <Box sx={styles.modalContainer}>
            <Box sx={styles.modalHeader}>
              <Box sx={styles.modalHeading}>Billionaires Bridesmaid</Box>
              <Box sx={styles.modalDescription}>Who is registering ?</Box>
            </Box>
            <Box sx={styles.modalPhotos}>
              <Box sx={styles.modalImageContainer}>
                <Box
                  component="img"
                  src="/theGroom.png"
                  sx={styles.modalImage}
                />
                <Box sx={styles.modalText}>The Groom</Box>
              </Box>
              <Box sx={styles.modalImageContainer}>
                <Box
                  component="img"
                  src="/theBride.png"
                  sx={styles.modalImage}
                />
                <Box sx={styles.modalText}>The Bride</Box>
              </Box>
            </Box>
            <Button
              as="GradientButton"
              label="Next"
              customStyles={styles.modalButton}
            />
          </Box>
        </Box>
      </Modal>
    </Section>
  );
};

export default Welcome;
