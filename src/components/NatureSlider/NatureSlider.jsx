import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./NatureSlider.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

// ❗ встав сюди свій реальний ключ з Pixabay
const PIXABAY_API_KEY = "55295944-00667858dcc250c98128e887a";

export default function NatureSlider() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=mountains&category=nature&image_type=photo&per_page=20`
        );

        // 🔴 перевірка помилки API
        if (!res.ok) {
          throw new Error("API error: " + res.status);
        }

        const data = await res.json();

        // 🔥 унікальні картинки
        const uniqueImages = Array.from(
          new Map(data.hits.map((item) => [item.id, item])).values()
        );

        setImages(uniqueImages);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="slider-section">
      <h2>Beautiful nature</h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={img.webformatURL} alt="nature" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}