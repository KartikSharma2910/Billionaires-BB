const styles = {
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
  },

  imageWrapper: {
    width: "30%",
    height: "100%",
  },

  image: {
    width: "100%",
    height: "650px",
    objectFit: "cover",
  },

  dataContainer: {
    width: "70%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "40px",
    alignItems: "center",
    padding: "20px 80px",
    height: "650px",
  },

  listContainer: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    gap: "20px",
  },

  listHeading: {
    fontSize: "18px",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    color: "rgba(252, 163, 17, 1)",
  },

  list: {
    fontSize: "14px",
    width: "80%",
    fontWeight: 300,
  },

  upperImage: {
    position: "absolute",
    top: 30,
    right: 30,
  },

  lowerImage: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
};

export default styles;
