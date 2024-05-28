const styles = {
  wrapper: {
    position: "relative",
  },

  backgroundImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgb(0,0,0,0.5)",
  },

  dataBox: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },

  vector: {
    width: "70px",
  },

  challenge: {
    textTransform: "uppercase",
    letterSpacing: "3px",
    fontSize: "18px",
    color: "rgba(252, 163, 17, 1)",
  },

  heading: {
    textAlign: "center",
    color: "white",
    letterSpacing: "2px",
    fontWeight: 600,
    fontSize: "28px",
  },
};

export default styles;
