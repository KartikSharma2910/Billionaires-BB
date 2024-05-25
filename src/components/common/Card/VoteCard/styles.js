const styles = {
  wrapper: {
    position: "relative",
    backgroundColor: "rgba(51, 51, 51, 1)",
  },

  imageWrapper: {
    position: "relative",
  },

  backBox: {
    position: "absolute",
    zIndex: 0,
    top: "15%",
    left: "10%",
    width: "240px",
    height: "240px",
    border: "8px solid white",
  },

  objectImage: {
    position: "relative",
    width: "100%",
    objectFit: "cover",
    zIndex: 1,
  },

  dataBox: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    bottom: 0,
    zIndex: 1,
    padding: "20px",
    background:
      "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #000000 100%)",
  },

  heading: {
    fontSize: "22px",
  },

  description: {
    fontSize: "14px",
    fontWeight: 300,
  },

  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    fontSize: "24px",
    cursor: "pointer",
    textTransform: "uppercase",
    fontWeight: 500,
    backgroundColor: "rgba(252, 163, 17, 1)",
  },
};

export default styles;
