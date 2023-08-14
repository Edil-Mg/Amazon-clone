import React from 'react';
import carousel from "./Carousel.css"
import "swiper/css"
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay,  Navigation } from "swiper/modules";

const Carousel = () => {
    
  return (
		<div className="home__image">
			<Swiper
				spaceBetween={0}
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
						src="https://m.media-amazon.com/images/I/71jgwIu4ZsL._SX3000_.jpg"
						style={{
							maxWidth: "100%",
							maxHeight: "100%",
							objectFit: "contain",
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://m.media-amazon.com/images/I/61HBeh4tctL._SX3000_.jpg"
						style={{
							maxWidth: "100%",
							maxHeight: "100%",
							objectFit: "contain",
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://m.media-amazon.com/images/I/71mXZ5RCedL._SX3000_.jpg"
						style={{
							maxWidth: "100%",
							maxHeight: "100%",
							objectFit: "contain",
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://m.media-amazon.com/images/I/61n0HKriWZL._SX3000_.jpg"
						style={{
							maxWidth: "100%",
							maxHeight: "100%",
							objectFit: "contain",
						}}
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Carousel
