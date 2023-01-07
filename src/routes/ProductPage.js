/* eslint-disable no-unused-vars */
import { Rating } from '@mui/material';
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

export default function ProductPage() {
	const location = useLocation();
	const [state, dispatch] = useStateValue();
	useEffect(() => {
		document.title = location.state.title + " | Amazon Clone";
	})
	
	const addToBasket = () => {
		// dispatch action to data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item: location.state,
		});
	};
	return (
		<section className="text-gray-600 body-font ">
			<div className="container px-5 py-2 mx-auto h-[80vh]">
				<div className="md:w-4/5 mx-auto flex flex-wrap">
					<img
						className="h-[50vh] md:w-1/2 w-full md:h-[80vh]  object-cover object-center rounded"
						src={location.state.image}
						alt="product imag"
					/>
					<div className="md:w-1/2 w-full md:pl-10 md:py-6 mt-6 md:mt-0">
						<h2 className="text-sm title-font text-gray-500 tracking-widest">
							{location.state.brand}
						</h2>
						<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
							{location.state.title}
						</h1>
						<div className="flex mb-4">
							<span className="flex items-center">
								<div className="flex items-center mt-2.5 mb-5">
									<Rating
										name="half-rating"
										value={location.state.rating}
										precision={0.1}
										readOnly
									/>
									<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
										{location.state.rating}
									</span>
									<span className="text-gray-600 ml-3">
										{location.state.ratings_total} Reviews
									</span>
								</div>
							</span>
						</div>
						<p className="leading-relaxed">
							<p>ASIN Code: {location.state.asin}</p>
						</p>
						<div className="flex">
							<span className="title-font font-medium text-2xl text-gray-900">
								{location.state.price
									? location.state.price.symbol + location.state.price.value
									: "Out Of Stock"}
							</span>
							<button onClick={addToBasket} className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">
								Add to Cart
							</button>
						</div>
						<div className="flex justify-center align-middle p-7">
							<Link to="/" className="flex  text-white bg-black border-0 py-2 px-6 focus:outline-none  rounded">
								Go back to Home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
