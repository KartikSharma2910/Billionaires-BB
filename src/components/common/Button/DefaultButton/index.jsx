import { Button } from "@mui/material";
import styles from "./styles";

const DefaultButton = ({
  label,
  variant = "contained",
  customStyles,
  ...rest
}) => {
  return (
    <Button
      sx={{ ...styles.wrapper, ...customStyles }}
      variant={variant}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default DefaultButton;
