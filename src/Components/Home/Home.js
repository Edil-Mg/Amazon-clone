import React from 'react'
import "./Home.css"
import Product from "../Product/Product"
import Row from '../Row/Row';
import RowSingle from '../RowSingle/RowSingle';
import { Link } from 'react-router-dom';

function Home() {
  return (
		<div className="home">
			<div className="home__conatiner">
				<img
					className="home__image"
					// src="https://m.media-amazon.com/images/I/61vye+ube-L._SX3000_.jpg"
					// src="https://m.media-amazon.com/images/I/61HBeh4tctL._SX3000_.jpg"
					// src="https://m.media-amazon.com/images/I/61ZxL5rpLTL._SX3000_.jpg"
					// src="https://m.media-amazon.com/images/I/71mXZ5RCedL._SX3000_.jpg"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>
				<div className="home__row">
					<RowSingle
						tittle="Ready for anything"
						description="Allfashion"
						image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/MISC/STANLEY/CategoryCard_2x_d_Stanley._SY608_CB588619800_.jpg"
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
						price={199.99}
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
					<div className="insider__row">
						<div class="title">Must-see fashion deals</div>
						<Link to="/moreproducts" className="link">
							<div className="top__row">
								<Row
									id="12329041"
									description="Allfashion"
									image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/SUM23/GW/JULY/QC/Desktop/QuadCard_2x_d_SummerEdit_July_AllDeals_D1._SY232_CB602109167_.jpg"
								/>
								<Row
									id="46538094"
									description="Women's"
									image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/SUM23/GW/JULY/QC/Desktop/QuadCard_1x_d_SummerEdit_July_WDeals_D2._SY116_CB602098077_.jpg"
								/>
							</div>

							<div className="bottom__row">
								<Row
									id="12321361"
									description="Men's"
									image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/SUM23/GW/JULY/QC/Desktop/QuadCard_2x_d_SummerEdit_July_MenDeals_D3._SY232_CB602109167_.jpg"
								/>

								<Row
									id="49538841"
									description="Kids"
									image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/SUM23/GW/JULY/QC/Desktop/QuadCard_1x_d_SummerEdit_July_KidsDeals_D4._SY116_CB602098077_.jpg"
								/>
							</div>
						</Link>

						<Link to="/moreproducts" className="link">
							<p className="description">Shop style savings</p>
						</Link>
					</div>
					<Product
						id="12321341"
						title="IRON °FLASK Sports Water Bottle - 32oz, 3 Lids (Straw Lid), Leak Proof - Stainless Steel Gym & Sport Bottles for Men, Women & Kids - Double Walled, Insulated Thermos, Metal Canteen"
						price={21.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/31pEOGK+0-L._SY500__AC_SY400_.jpg"
					/>

					<div className="insider__row">
						<div class="title">Must-see fashion deals</div>
						<Link to="/moreproducts" className="link">
							<div className="top__row">
								<Row
									id="12329041"
									description="Iconic Vintage"
									image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/MISC/PRE_LOVED/GW/QC/Desktop/QuadCard_d_2x_Preloved_WGACA_B1._SY232_CB600352808_.jpg"
								/>
								<Row
									id="46538094"
									description="Women's clothing"
									image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/MISC/PRE_LOVED/GW/QC/Desktop/QuadCard_d_2x_Preloved_Wclothing_A1._SY232_CB600352808_.jpg"
								/>
							</div>

							<div className="bottom__row">
								<Row
									id="12321361"
									description="Men's clothing"
									image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/MISC/PRE_LOVED/GW/QC/Desktop/QuadCard_d_2x_Preloved_Menclothing_A4._SY232_CB600352808_.jpg"
								/>

								<Row
									id="49538841"
									description="Rent the Runway"
									image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/MISC/PRE_LOVED/GW/QC/Desktop/QuadCard_d_2x_Preloved_RTR_B4._SY232_CB600352808_.jpg"
								/>
							</div>
						</Link>

						<Link to="/moreproducts" className="link">
							<p className="description">Shop all pre-loved fashions</p>
						</Link>
					</div>
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
						id="3254354345"
						title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
						price={598.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
					/>
					<Product
						id="5904850"
						title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
						price={199.57}
						rating={4}
						image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SY450_.jpg"
					/>
					<Product
						id="1203850"
						title="Sceptre Curved 24-inch Gaming Monitor 1080p R1500 98% sRGB HDMI x2 VGA Build-in Speakers, VESA Wall Mount Machine Black (C248W-1920RN Series)"
						price={89.97}
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
				</div>
			</div>
		</div>
	);
}

export default Home