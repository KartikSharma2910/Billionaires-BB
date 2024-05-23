const styles = {
  wrapper: {
    height: "min-content",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    padding: "20px 40px",
    color: "rgba(244, 244, 246, 1)",
  },

  heading: {
    fontSize: "16px",
    width: "80%",
    margin: "0 auto",
    textTransform: "capitalize",
    fontWeight: 300,
    letterSpacing: "1.5px",
    textAlign: "center",
  },

  cardsWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
  },

  card: {
    width: "30%",
  },

  challengingData: {
    display: "flex",
  },

  challengingList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "30px",
    alignItems: "center",
    width: "50%",
  },

  listContainer: {
    display: "flex",
    flexDirection: "column",
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
    fontWeight: 300,
  },

  challengingImager: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },

  challengingImageContainer: {
    position: "relative",
    border: "1px solid rgba(252, 163, 17, 1)",
    width: "350px",
    height: "400px",
  },

  challengingImage: {
    position: "absolute",
    right: -25,
    bottom: -25,
    width: "100%",
    height: "100%",
    objectPosition: "top",
    objectFit: "cover",
  },
};

export default styles;
