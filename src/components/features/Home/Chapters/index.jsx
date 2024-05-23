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

const Chapters = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState();

  const slides = [
    "/chapter1.png",
    "/chapter2.png",
    "/chapter3.png",
    "/chapter4.png",
    "/chapter5.png",
  ];

  return (
    <Section heading="Chapters" customStyles={styles.wrapper}>
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

export default Chapters;
