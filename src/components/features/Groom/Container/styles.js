const styles = {
  wrapper: {
    padding: "40px",
    display: "flex",
    gap: "50px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    background: "linear-gradient(143.43deg, #14213D 11.41%, #000000 88.59%)",
  },

  upperWrapper: {
    display: "flex",
    padding: "2px",
    color: "white",
    border: "1px solid white",
  },

  upperWrapperLeft: {
    width: "220px",
    textAlign: "center",
    color: "black",
    padding: "6px 16px",
    textTransform: "uppercase",
    backgroundColor: "rgba(252, 163, 17, 1)",
  },

  upperWrapperRight: {
    width: "220px",
    textTransform: "uppercase",
    textAlign: "center",
    padding: "6px 16px",
  },

  bottomWrapper: {
    display: "flex",
    gap: "12px",
    color: "white",
  },

  bottomWrapperBox: {
    width: "300px",
    borderRadius: "8px",
    textTransform: "uppercase",
    textAlign: "center",
    padding: "12px 16px",
  },

  container: {
    width: "100%",
    display: "flex",
  },

  leftBox: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
  },

  cardsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    rowGap: "20px",
    justifyContent: "space-between",
  },

  card: {
    width: "31%",
  },

  headers: {
    fontSize: "20px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "rgba(252, 163, 17, 1)",
  },

  yellowHeader: {
    fontSize: "14px",
    color: "rgba(252, 163, 17, 1)",
  },

  description: {
    fontSize: "14px",
    color: "white",
    opacity: 0.7,
  },

  rightBox: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
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

  containerBox: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "8px",
    background:
      "linear-gradient(134.7deg, rgba(102, 102, 110, 0.105) 0%, rgba(197, 197, 212, 0.042) 100%)",
  },

  price: {
    borderRadius: "4px",
    fontSize: "24px",
    textTransform: "uppercase",
    textAlign: "center",
    color: "white",
    padding: "12px 16px",
    border: "1px solid rgba(252, 163, 17, 1)",
    background: "rgba(102, 102, 110, 0.25)",
  },
};

export default styles;
