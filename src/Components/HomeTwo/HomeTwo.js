import React from 'react'
import homeTwo from './homeTwo.css'
import MoreProducts from '../MoreProducts/MoreProducts';

const HomeTwo = () => {
  return (
		<div className="homeTwo">
			<div className="homeTwo__conatiner">
				<div className="homeTwo__row">
					<MoreProducts
						id="3259356345"
						title="igourmet A Little Bit of Italy in Gift Box - Italy's best cheeses, meats and sweets Italian Food Tasting Gift Box"
						price={114.77}
						rating={4}
						image="https://m.media-amazon.com/images/I/91GZAQynT7L._AC_UL600_FMwebp_QL65_.jpg"
					/>
					<MoreProducts
						id="3259356345"
						title="POLY & BARK Aida Lounge Full-Grain Pure-Aniline Italian LeatherPB-LR-769-TAN Chair, Single, Cognac Tan"
						price={169.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/81YrKhPxv7L._AC_SX569_.jpg"
					/>
					<MoreProducts
						id="3259356345"
						title="Provence Beauty Rose Multi-Use Oil for Face, Body and Hair - Organic Blend of Apricot, Vitamin E and Sweet Almond Oil Moisturizer for Dry Skin, Scalp & Nails - Rose Petals & Bergamot Essential Oil - 4 Fl Oz"
						price={13.95}
						rating={3}
						image="https://m.media-amazon.com/images/I/41bN+v-P5SL._SY450_.jpg"
					/>
				</div>
				<div className="homeTwo__row">
					<MoreProducts
						id="3259356345"
						title="Pre-Loved Blue Sequin Waterfall Flap Bag XL, Blue
"
						price={450.0}
						rating={4}
						image="https://m.media-amazon.com/images/I/9176MG2QG-L._AC_UL480_QL65_.jpg"
					/>
					<MoreProducts
						id="3259356345"
						title="Apparis Women's Oshin Beanie"
						price={17.0}
						rating={4}
						image="https://m.media-amazon.com/images/I/51pKVkTqhlL._AC_UL600_FMwebp_QL65_.jpg"
					/>
					<MoreProducts
						id="3259356345"
						title="Stanley Classic IceFlow Flip Straw Tumbler for Kids (8 or Above), 20oz, Stan the Bear Stainless Steel Tumbler with Double-Wall Vacuum Insulation"
						price={30.0}
						rating={3}
						image="https://m.media-amazon.com/images/I/51lAt+QX+-L._AC_SL1500_.jpg"
					/>
				</div>
				<div className="homeTwo__row">
					<MoreProducts
						id="3259356345"
						title="GAP Girls' Graphic Short Sleeve Tee T-Shirt"
						price={14.77}
						rating={5}
						image="https://m.media-amazon.com/images/I/51kjRYapaqL._AC_UY550_.jpg"
					/>
					<MoreProducts
						id="3259356345"
						title="Apparis Women's Roohi Ear Muffs"
						price={19.5}
						rating={4}
						image="https://m.media-amazon.com/images/I/51HFuJMVSIL._AC_UL600_FMwebp_QL65_.jpg"
					/>
					<MoreProducts
						id="3259356345"
						title="GAP Men's Classic Logo Tee"
						price={25.68}
						rating={4}
						image="https://m.media-amazon.com/images/I/510V0QLbU4L._AC_UY550_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default HomeTwo