import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import Row from "../Row/Row";
import RowSingle from "../RowSingle/RowSingle";
// import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="home">
			<div className="home__conatiner">
				<div className="home__row">
					<Product
						id="3254354345"
						title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
						price={289.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
					/>
					<Product
						id="4903850"
						title="Nike Heritage Backpack - 2.0 (Wolf Gray Black)"
						price={50.0}
						rating={4}
						image="https://m.media-amazon.com/images/I/A1CVC3z6KML._AC_SY550_.jpg"
					/>
					<Product
						id="4903850"
						title="Parsonver Smart Watch for Men Women(Dial/Answer Calls) 1.91 HD Touch Screen Fitness Tracker Sports Modes IP68 Waterproof Heart Rate Sleep Blood Oxygen Monitor for iOS Android Phones"
						price={97.99}
						rating={3}
						image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
					/>
					<Product
						id="4903850"
						title="WMT USB Microphone, Condenser Gaming Microphone for PC/MAC/PS4/PS5/Phone- Cardioid Mic with Brilliant RGB Lighting Headphone Output Volume Control, Mute Button, for Streaming Podcast YouTube Discord"
						price={29.99}
						rating={3}
						image="https://m.media-amazon.com/images/I/714reGgb8mL._AC_UL400_.jpg"
					/>
				</div>
				<div className="home__row">
					<Row
						tittle="Pre-loved fashion for all"
						image1="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/MISC/PRE_LOVED/GW/QC/Desktop/QuadCard_d_2x_Preloved_WGACA_B1._SY232_CB600352808_.jpg"
						subtitle1="Iconic Vintage"
						image2="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/MISC/PRE_LOVED/GW/QC/Desktop/QuadCard_d_2x_Preloved_Wclothing_A1._SY232_CB600352808_.jpg"
						subtitle2="Women's clothing"
						image3="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/MISC/PRE_LOVED/GW/QC/Desktop/QuadCard_d_2x_Preloved_Menclothing_A4._SY232_CB600352808_.jpg"
						subtitle3="Men's clothing"
						image4="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/MISC/PRE_LOVED/GW/QC/Desktop/QuadCard_d_2x_Preloved_RTR_B4._SY232_CB600352808_.jpg"
						subtitle4="Rent the Runway"
						description="Shop all pre-loved fashions"
					/>

					<RowSingle
						tittle="Ready for anything"
						image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/MISC/STANLEY/CategoryCard_1x_d_Stanley._SY304_CB588619800_.jpg"
						description="Shop style savings"
					/>

					<Row
						tittle="Made in Italy"
						image1="https://images-na.ssl-images-amazon.com/images/G/01/ACS/Made_in_Italy/2023/GWs/01-Jan/QC-D_BA_Food_372x232._SY232_CB619437081_.jpg"
						subtitle1="Food"
						image2="https://images-na.ssl-images-amazon.com/images/G/01/ACS/Made_in_Italy/2023/GWs/05-May/mmonicel_GW_card_apparel_372x232._SY232_CB591762938_.jpg"
						subtitle2="Apparel"
						image3="https://images-na.ssl-images-amazon.com/images/G/01/ACS/Made_in_Italy/2023/GWs/02-Feb/QC-D_BA_Furniture_372x232._SY232_CB614009005_.jpg"
						subtitle3="Home"
						image4="https://images-na.ssl-images-amazon.com/images/G/01/ACS/Made_in_Italy/2023/GWs/05-May/mmonicel_GW_card_B3_372x232._SY232_CB591762939_.jpg"
						subtitle4="Beauty"
						description="Shop all pre-loved fashions"
					/>
					<RowSingle
						tittle="The swim shop"
						image="https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/June/CategoryCards/mp_20230605_swim_desktopsinglecategory_desktop_758x608._SY304_CB589286520_.jpg"
						description="See more from Shopbop"
					/>
				</div>

				<div className="home__row">
					<Product
						id="90829332"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="5904850"
						title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
						price={95.57}
						rating={4}
						image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SY450_.jpg"
					/>
					<Product
						id="1203850"
						title="Sceptre Curved 24-inch Gaming Monitor 1080p R1500 98% sRGB HDMI x2 VGA Build-in Speakers, VESA Wall Mount Machine Black (C248W-1920RN Series)"
						price={989.97}
						rating={3}
						image="https://m.media-amazon.com/images/I/71P0M7tKjYL._AC_UL600_FMwebp_QL65_.jpg"
					/>
					<Product
						id="3050354348"
						title="Rolex
Pre-Loved Stainless Steel & 18k Yellow Gold Daytona Cosmograph 115523 40mm, Black"
						price={4650.0}
						rating={4}
						image="https://m.media-amazon.com/images/I/81aTpXKXT3L._AC_UL480_QL65_.jpg"
					/>

					<Product
						id="12321341"
						title="IRON °FLASK Sports Water Bottle - 32oz, 3 Lids (Straw Lid), Leak Proof - Stainless Steel Gym & Sport Bottles for Men, Women & Kids - Double Walled, Insulated Thermos, Metal Canteen"
						price={21.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/31pEOGK+0-L._SY500__AC_SY400_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
