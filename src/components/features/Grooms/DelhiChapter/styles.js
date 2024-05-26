const styles = {
  wrapper: {
    height: "min-content",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "40px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  databox: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  colorText: {
    fontSize: "18px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "rgba(252, 163, 17, 1)",
  },

  heading: {
    fontSize: "28px",
    color: "white",
    letterSpacing: "1.5px",
    fontFamily: "Playfair Display, serif",
    fontWeight: "bold",
  },

  description: {
    fontSize: "14px",
    widht: "80%",
    color: "white",
  },

  cardsWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },

  card: {
    width: "15%",
  },

  bottomBox: {
    display: "flex",
    justifyContent: "space-between",
  },

  leftBox: {
    width: "55%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  chipWrapper: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },

  chip: {
    color: "white",
    minWidth: "140px",
    textTransform: "capitalize",
    padding: "16px 8px",
    textAlign: "center",
    fontSize: "12px",
    backgroundColor: "rgba(102, 102, 110, 0.25)",
  },

  rightBox: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "35%",
  },

  achievementsWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },

  achievementsCard: {
    width: "30%",
  },
};

export default styles;
