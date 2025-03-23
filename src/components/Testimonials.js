import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Pagination]);

const Testimonials = () => {
  const testimonials = [
    { text: "Amazing food, delivered on time!", author: "John D." },
    { text: "A lifesaver for busy days!", author: "Sarah M." },
    { text: "Tastes like home!", author: "Priya K." },
  ];

  return (
    <section className="py-16 bg-white text-center" id="testimonials">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        What Our Customers Say
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="max-w-2xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <p className="text-gray-800 mb-4">"{item.text}"</p>
              <p className="text-red-600 font-semibold">- {item.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
