import { Box } from "@mui/material";
import { Section } from "components/common";
import React from "react";

const ParentsInteraction = () => {
  return (
    <Section heading="Parents Interaction">
      <Box>
        <Box
          sx={{
            width: "30%",
          }}
        >
          <Box
            component="img"
            src="/parentsInteraction.png"
            sx={{
              width: "100%",
              height: "100%",
              //   objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "70%",
          }}
        ></Box>
      </Box>
    </Section>
  );
};

export default ParentsInteraction;
