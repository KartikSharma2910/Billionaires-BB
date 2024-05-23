import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./styles";

const Header = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>Billionaires Bridemaid</Box>
      <IconButton>
        <MenuIcon sx={styles.icon} />
      </IconButton>
    </Box>
  );
};

export default Header;
