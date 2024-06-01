import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box } from "@mui/material";
import VideoPlayer from "components/common/VideoPlayer";
import styles from "./styles";
import { Fragment } from "react";

const VideoCard = () => {
  const adventure = [
    {
      thumb: "/adventure1.png",
      source: "/sample.mp4",
      text: "Fashion Feats: Strutting Style",
    },
    {
      thumb: "/adventure2.png",
      source: "/sample.mp4",
      text: "Culinary Conquests: Under Pressure",
    },
    {
      thumb: "/adventure3.png",
      source: "/sample.mp4",
      text: "Escape Expeditions: Mastered Challenges",
    },
  ];

  return (
    <Fragment>
      {adventure.map(({ thumb, source, text }, index) => (
        <Box sx={styles.wrapper} key={index}>
          <VideoPlayer
            thumbnail={thumb}
            src={source}
            customStyles={styles.video}
          />
          <Box sx={styles.container}>
            <Box sx={styles.heading}>{text}</Box>
            <Box sx={styles.timeWrapper}>
              <Box sx={styles.thumbs}>
                <Box sx={styles.date}>19 March, 2024</Box>
                <Box sx={styles.views}>
                  <VisibilityIcon />
                  15151454 views
                </Box>
              </Box>
              <Box>
                <ShareIcon sx={styles.share} />
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Fragment>
  );
};

export default VideoCard;
