import { Box } from "@mui/material";
import styles from "./styles";

const Spotlight = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.heading}>
          Step into the Spotlight with{" "}
          <span style={styles.bb}>Billionaire Bride</span>
        </Box>
        <Box sx={styles.description}>
          Experience the thrill of competition and seize your chance to shine in
          the ultimate showcase of talent and charisma. Join us now!
        </Box>
        <Box sx={styles.button}>Register Now</Box>
      </Box>
    </Box>
  );
};

export default Spotlight;
