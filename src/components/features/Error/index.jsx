import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 3000);
  }, [navigate]);

  return (
    <Box onClick={() => navigate("/")} sx={styles.wrapper}>
      <Box component="img" src="/error.png" sx={styles.image} />
    </Box>
  );
};

export default Error;
