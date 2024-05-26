import { Box } from "@mui/material";
import styles from "./styles";

const Banner = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src="/homeBanner.png" sx={styles.image} />
      <Box sx={styles.overlay} />
      <Box sx={styles.headers}>
        <Box sx={styles.heading}>Billionaires Bridesmaid Chapters</Box>
        <Box sx={styles.description}>
          Where Love Meets Luxury: Step into the World of Billionaire Bride
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
