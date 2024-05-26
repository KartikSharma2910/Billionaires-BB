const styles = {
  wrapper: {
    position: "relative",
    height: "50vh",
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
    left: 0,
    right: 0,
    backgroundColor: "rgb(0,0,0,0.6)",
  },

  headers: {
    position: "absolute",
    width: "100%",
    top: "50%",
    color: "white",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },

  heading: {
    fontSize: "48px",
    width: "100%",
    textAlign: "center",
    letterSpacing: "1.5px",
    fontFamily: "Playfair Display, serif",
    fontWeight: "bold",
  },

  description: {
    marginTop: "8px",
    textAlign: "center",
    fontSize: "15px",
    color: "rgba(249, 249, 249, 1)",
  },
};

export default styles;
