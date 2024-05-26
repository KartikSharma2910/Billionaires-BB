import { Box } from "@mui/material";
import styles from "./styles";

const FeatureCard = ({ image, heading, description, customStyles }) => {
  return (
    <Box sx={{ ...styles.wrapper, ...customStyles }}>
      <Box component="img" src={image} sx={styles.image} />
      <Box>
        <Box sx={styles.heading}>{heading}</Box>
        <Box sx={styles.description}>{description}</Box>
      </Box>
    </Box>
  );
};

export default FeatureCard;
