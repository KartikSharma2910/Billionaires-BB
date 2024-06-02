const styles = {
  container: {
    height: "min-content",
  },

  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
  },

  leftWrapper: {
    backgroundColor: "black",
    width: "30%",
    height: "100%",
  },

  rightWrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "40px",
    width: "70%",
    height: "100%",
  },

  rightLeftBox: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    color: "white",
    width: "30%",
    height: "100%",
  },

  miniGaps: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  mainHeading: {
    fontSize: "26px",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
  },

  miniHeading: {
    fontSize: "16px",
  },

  description: {
    fontSize: "12px",
    textTransform: "capitalize",
  },

  formWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    width: "67%",
  },
};

export default styles;
