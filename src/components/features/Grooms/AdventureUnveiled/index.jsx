import { Box } from "@mui/material";
import { Card, Section } from "components/common";

const AdventureUnveiled = () => {
  return (
    <Section
      heading="Adventure Unveiled"
      customStyles={{
        height: "max-content",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "40px",
        }}
      >
        <Card as="VideoCard" />
      </Box>
    </Section>
  );
};

export default AdventureUnveiled;
