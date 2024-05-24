import { Box } from "@mui/material";
import { Section } from "components/common";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles";

const MeetParticipants = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState();

  const slides = [
    "/participant1.png",
    "/participant2.jpeg",
    "/participant3.jpeg",
    "/participant4.jpeg",
    "/participant5.jpeg",
  ];

  return (
    <Section heading="Meet the Participants" customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.thumbsContainer}>
          <Swiper
            loop
            freeMode
            slidesPerView={5}
            watchSlidesProgress
            spaceBetween={20}
            onSwiper={setThumbsSwiper}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {slides.map((image, index) => (
              <SwiperSlide>
                <Box
                  key={index}
                  component="img"
                  src={image}
                  sx={styles.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box sx={styles.infoContainer}>
          <Swiper
            loop
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2"
          >
            {slides.map((image, index) => (
              <SwiperSlide>
                <Box
                  key={index}
                  component="img"
                  src={image}
                  sx={styles.image}
                />
                <Box sx={styles.overlay} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Section>
  );
};

export default MeetParticipants;
