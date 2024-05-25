import { Box } from "@mui/material";
import styles from "./styles";

const VoteCard = ({ heading, description, customStyles }) => {
  return (
    <Box sx={{ ...styles.wrapper, ...customStyles }}>
      <Box sx={styles.imageWrapper}>
        <Box sx={styles.backBox} />
        <Box component="img" src="/votingCard.png" sx={styles.objectImage} />
        <Box sx={styles.dataBox}>
          <Box sx={styles.heading}>{heading}</Box>
          <Box sx={styles.description}>{description}</Box>
        </Box>
      </Box>
      <Box sx={styles.button}>Vote Now</Box>
    </Box>
  );
};

export default VoteCard;
