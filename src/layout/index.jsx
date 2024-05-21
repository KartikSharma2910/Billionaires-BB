import { Box } from "@mui/material";
import { Footer, Header } from "components/common";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
