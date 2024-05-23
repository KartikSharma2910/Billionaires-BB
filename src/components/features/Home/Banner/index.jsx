import { Box } from "@mui/material";
import styles from "./styles";

const Banner = () => {
  return (
    <Box component="section">
      <Box component="img" src="/homeBanner.png" sx={styles.image} />
      <Box sx={styles.overlay} />
      <Box sx={styles.headers}>
        <Box sx={styles.heading}>
          <Box>Welcome to</Box>
          <Box>Billionaires Bridesmaid</Box>
        </Box>
        <Box sx={styles.description}>
          Where Love Meets Luxury: Step into the World of Billionaire Bride
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
