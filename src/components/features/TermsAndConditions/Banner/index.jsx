import { Box } from "@mui/material";
import styles from "./styles";

const Banner = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src="/terms.jpeg" sx={styles.image} />
      <Box sx={styles.overlay} />
    </Box>
  );
};

export default Banner;
