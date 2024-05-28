import { Box } from "@mui/material";
import styles from "./styles";

const ParticipantsCard = ({ image, designation, user, customStyles }) => {
  const features = [
    {
      heading: "AGE",
      description: "24",
    },
    {
      heading: "HEIGHT",
      description: "175",
    },
    {
      heading: "WEIGHT",
      description: "56",
    },
    {
      heading: "EYES",
      description: "Blue",
    },
    {
      heading: "HAIR",
      description: "Brown",
    },
  ];
  return (
    <Box sx={{ ...styles.wrapper, ...customStyles }}>
      <Box component="img" src={image} sx={styles.image} />
      <Box sx={styles.overlay} />
      <Box sx={styles.dataContainer}>
        <Box sx={styles.designation}>{designation}</Box>
        <Box sx={styles.heading}>{user}</Box>
        <Box sx={styles.features}>
          {features.map(({ heading, description }, index) => (
            <Box sx={styles.featureWrapper} key={index}>
              <Box sx={styles.featureHeading}>{heading}</Box>
              <Box sx={styles.featureDesignation}>{description}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ParticipantsCard;
