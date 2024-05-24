const styles = {
  wrapper: {
    height: "min-content",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    padding: "20px 40px",
  },

  upperCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 40px",
    borderRadius: "8px",
    background: "linear-gradient(106.57deg, #1A1840 0%, #332A7B 100%)",
  },

  upperCardContainer: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    gap: "20px",
  },

  goldHeading: {
    fontSize: "18px",
    fontWeight: 300,
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    color: "rgba(252, 163, 17, 1)",
  },

  dataContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  heading: {
    fontSize: "24px",
    fontWeight: 600,
  },

  description: {
    fontSize: "14px",
    fontWeight: 300,
  },

  smallCardWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },

  smallCard: {
    position: "relative",
    width: "32%",
    height: "270px",
    display: "flex",
    flexDirection: "column",
    padding: "30px",
    borderRadius: "8px",
    background: "linear-gradient(106.57deg, #1A1840 0%, #332A7B 100%)",
  },

  smallCardDescription: {
    fontSize: "14px",
    width: "60%",
    fontWeight: 300,
  },

  smallImage: {
    position: "absolute",
    right: 30,
    bottom: 10,
    width: "160px",
  },
};

export default styles;
