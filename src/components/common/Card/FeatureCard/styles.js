const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexDirection: "column",
    padding: "12px",
    borderRadius: "14px",
    color: "rgba(244, 244, 246, 1)",
    border: "1.29px solid rgba(102, 102, 110, 1)",
    backdropFilter: "blur(8px)",
    boxShadow: "0px 10.3px 20.6px 0px rgba(0, 0, 0, 0.18)",
  },

  image: {
    width: "40px",
    height: "100%",
    objectFit: "cover",
  },

  heading: {
    textAlign: "center",
    fontWeight: 300,
    fontSize: "10px",
  },

  description: {
    fontSize: "12px",
    textAlign: "center",
  },
};

export default styles;
