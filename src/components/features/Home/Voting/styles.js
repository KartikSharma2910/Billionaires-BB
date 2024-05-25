const styles = {
  wrapper: {
    height: "min-content",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    color: "rgba(244, 244, 246, 1)",
    padding: "20px 40px",
  },

  heading: {
    fontSize: "18px",
    textAlign: "center",
    color: "rgba(252, 163, 17, 1)",
  },

  description: {
    fontSize: "16px",
    fontWeight: 300,
    textAlign: "center",
  },

  cardWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },

  card: {
    width: "22%",
  },

  bottomText: {
    fontSize: "16px",
    textTransform: "capitalize",
    letterSpacing: "1.5px",
    textAlign: "center",
    width: "60%",
  },
};

export default styles;
