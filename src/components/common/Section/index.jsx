import { Box } from "@mui/material";
import styles from "./styles";

const Section = ({ heading, children }) => {
  return (
    <Box component="section">
      <Box sx={styles.heading}>{heading}</Box>
      <Box sx={styles.children}>{children}</Box>
    </Box>
  );
};

export default Section;
