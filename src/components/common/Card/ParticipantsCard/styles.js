const styles = {
  wrapper: {
    position: "relative",
    height: "600px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 51.5%, #000000 100%)",
  },

  dataContainer: {
    color: "white",
    width: "100%",
    position: "absolute",
    bottom: 20,
  },

  designation: {
    fontSize: "18px",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "3px",
    fontWeight: 300,
  },

  heading: {
    fontSize: "32px",
    textAlign: "center",
    fontWeight: 600,
  },

  features: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  featureWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
  },

  featureHeading: {
    fontSize: "20px",
    fontWeight: 600,
    color: "rgba(252, 163, 17, 1)",
  },

  featureDesignation: {
    fontSize: "16px",
    fontWeight: 600,
  },
};

export default styles;
