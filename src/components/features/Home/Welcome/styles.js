const styles = {
  wrapper: {
    display: "flex",
    color: "rgba(229, 229, 229, 1)",
  },

  data: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "40px",
    width: "60%",
    padding: "20px 40px",
  },

  imageWrapper: {
    width: "40%",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  mainText: {
    fontSize: "18px",
    letterSpacing: "1.5px",
    fontWeight: 300,
  },

  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  features: {
    fontSize: "22px",
    fontWeight: 600,
  },

  list: {
    gap: "6px",
    display: "flex",
    flexDirection: "column",
    fontSize: "14px",
  },

  button: {
    width: "300px",
  },

  iconWrapper: {
    display: "flex",
    gap: "15px",
  },

  mainModal: {
    "& .MuiModal-root": {
      borderRadius: "20px",
    },

    "& .MuiModal-backdrop": {
      backdropFilter: "blur(10px)",
    },
  },

  modal: {
    position: "absolute",
    color: "white",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "black",
    boxShadow: 24,
  },

  modalContainer: {
    display: "flex",
    padding: "40px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },

  modalHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },

  modalHeading: {
    fontSize: "14px",
    fontWeight: 300,
    letterSpacing: "4px",
    textTransform: "uppercase",
  },

  modalDescription: {
    letterSpacing: "2px",
    fontWeight: 500,
    fontSize: "22px",
  },

  modalPhotos: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    alignItems: "center",
  },

  modalImageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "12px",
    alignItems: "center",
    border: "1px solid rgba(255, 255, 255, 0.15)",
  },

  modalImage: {
    width: "180px",
    cursor: "pointer",
    objectFit: "cover",
  },

  modalText: {
    fontSize: "12px",
    fontWeight: 300,
    letterSpacing: "4px",
    textTransform: "uppercase",
  },

  modalButton: {
    width: "80%",
  },
};

export default styles;
