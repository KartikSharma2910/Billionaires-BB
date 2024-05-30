import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import XIcon from "@mui/icons-material/X";
import { Box } from "@mui/material";
import { footerLinks } from "constants/footer";
import { useNavigate } from "react-router-dom";
import styles from "./styles";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.heading}>Billionaires Bridesmaid</Box>
        <Box sx={styles.divider} />
        <Box sx={styles.description}>
          Welcome to Billionaire Bridesmaid, where luxury meets love in an
          extravagant showcase of talent, relationships, and self-discovery.
          With tasks inspired by popular reality shows and emotional moments
          that captivate, we promise an unforgettable experience for
          participants and viewers alike. Stay tuned for updates and exclusive
          content!
        </Box>
        <Box sx={styles.divider} />
        <Box sx={styles.linksWrapper}>
          {footerLinks.map(({ label, route }, index) => (
            <Box key={index} onClick={() => navigate(route)} sx={styles.links}>
              {label}
            </Box>
          ))}
        </Box>
        <Box sx={styles.iconWrapper}>
          <FacebookOutlinedIcon sx={styles.icon} />
          <TwitterIcon sx={styles.icon} />
          <InstagramIcon sx={styles.icon} />
          <XIcon sx={styles.icon} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
