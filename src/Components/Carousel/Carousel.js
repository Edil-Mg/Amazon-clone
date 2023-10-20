import React from "react";
import carousel from "./Carousel.css";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Carousel = () => {
	return (
		<div className="carousel-container">
			<Swiper
				spaceBetween={20}
				centeredSlides={true}
				autoplay={{
					delay: 4500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Navigation]}
				className="h-[50%]"
			>
				<SwiperSlide>
					<img
						src="https://m.media-amazon.com/images/I/716hd-GCReL._SX3000_.jpg"
						style={{}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://m.media-amazon.com/images/I/71jgwIu4ZsL._SX3000_.jpg"
						style={{}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://m.media-amazon.com/images/I/61HBeh4tctL._SX3000_.jpg"
						style={{}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://m.media-amazon.com/images/I/71mXZ5RCedL._SX3000_.jpg"
						style={{}}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<img
						src="https://m.media-amazon.com/images/I/61Hjccck3rL._SX3000_.jpg"
						style={{}}
					/>
				</SwiperSlide>
			</Swiper>
			<div className="gradient-bg" />
		</div>
	);
};

export default Carousel;
