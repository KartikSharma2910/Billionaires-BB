import { Box } from "@mui/material";

const VoteCard = () => {
  return (
    <Box
      sx={{
        width: "350px",
        position: "relative",
        backgroundColor: "rgba(51, 51, 51, 1)",
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 0,
            top: "15%",
            left: "10%",
            width: "280px",
            height: "280px",
            border: "8px solid white",
          }}
        />
        <Box
          component="img"
          src="/votingCard.png"
          sx={{
            position: "relative",
            zIndex: 1,
          }}
        />
      </Box>
      <Box
        sx={{
          height: "50px",
          backgroundColor: "rgba(252, 163, 17, 1)",
        }}
      >
        Vote Now
      </Box>
    </Box>
  );
};

export default VoteCard;
