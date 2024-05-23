import { Box } from "@mui/material";
import styles from "./styles";

const TaskCard = ({
  backgroundImage,
  vector,
  challenge,
  heading,
  customStyles,
}) => {
  return (
    <Box sx={{ ...styles.wrapper, ...customStyles }}>
      <Box
        component="img"
        src={backgroundImage}
        alt="cardImage"
        sx={styles.backgroundImage}
      />
      <Box sx={styles.overlay} />
      <Box sx={styles.dataBox}>
        <Box component="img" src={vector} sx={styles.vector} />
        <Box sx={styles.challenge}>{challenge}</Box>
        <Box sx={styles.heading}>{heading}</Box>
        {/* <Box
            sx={{
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            Participants must work together to solve clues and escape from a
            locked room within a time limit.
          </Box> */}
      </Box>
    </Box>
  );
};

export default TaskCard;
