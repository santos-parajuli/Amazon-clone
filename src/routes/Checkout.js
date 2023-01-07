/* eslint-disable no-unused-vars */
import { Checkbox, FormControlLabel, FormGroup, Rating } from '@mui/material';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import {useStateValue} from "../StateProvider";
import {basketTotalPrice} from "../reducer"


export default function Checkout() {
	const [{basket},dispatch]=useStateValue();
	useEffect(() => {
		document.title = "Check Out | Amazon Clone";
	});
	const removeFromBasket = (title)=>{

		dispatch({
			type: "REMOVE_FROM_BASKET",
			item:title
		});
	}
    return (
			<div>
				<div className="flex flex-col md:flex-row container m-auto p-5 bg-white border shadow-lg mt-5 items-center justify-center">
					<img
						className="w-36 "
						src="https://i.imgur.com/hkxZYnF.png"
						alt="credit card"
					/>
					<p className="p-5 text-base">
						Get a{" "}
						<span className="text-green-800 font-bold">
							$50 Amazon.ca Gift Card
						</span>{" "}
						instantly, plus up to 5% back for 6 months after approval for the
						Amazon.ca Rewards Mastercard.
					</p>
					<button className="w-fit border-2 border-spacing-10 p-2 rounded-md whitespace-nowrap">
						Learn More
					</button>
				</div>
				<div className="flex flex-col-reverse lg:flex-row container w-[90%] m-auto gap-2">
					<div className="flex flex-col w-[90%] m-auto lg:w-4/6 p-5 bg-white border shadow-lg mt-5   ">
						{basket.length === 0 && (
							<>
								<h2 className="text-2xl font-semibold">
									Your Amazon Cart is empty.
								</h2>
								<p className="text-sm mt-2">
									Your shopping cart lives to serve. Give it purpose – fill it
									with groceries, clothing, household supplies, electronics and
									more. Continue shopping on the
									<Link to="/">
										<span className="text-blue-700"> Amazon.ca homepage</span>.
									</Link>
								</p>
							</>
						)}
						{basket.length !== 0 && (
							<>
								{basket.map((product) => {
									return (
										<div key={product.title} id={product.title}>
											<div className="flex w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 my-5 p-2">
												<div
													className="w-1/3 bg-contain bg-no-repeat bg-center"
													style={{ backgroundImage: `url(${product.image})` }}
												></div>
												<div className="w-2/3 p-4 md:p-4">
													<h1 className="text-2xl font-bold text-gray-800 dark:text-white">
														{product.brand}
													</h1>
													<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
														{product.title}
													</p>
													<div className="flex mt-2 item-center">
														<Rating
															color="black"
															name="half-rating"
															value={product.rating}
															precision={0.1}
															readOnly
														/>
													</div>
													<div className="flex flex-col md:flex-row justify-between mt-3 item-center">
														<h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
															{product.price
																? product.price.symbol + product.price.value
																: "Out Of Stock"}
														</h1>
														<button onClick={()=>{removeFromBasket(product.title);}} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
															Remove From Cart
														</button>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</>
						)}
					</div>
					<div className="flex flex-col w-full top-0 mt-5 lg:w-2/6 m-auto p-5 bg-gray-200 border shadow-lg text-lg font-normal">
						<h1>
							Subtotal ({basket.length} items):
							<strong>
								$ {basket.length === 0 ? "0" : basketTotalPrice(basket)}{" "}
							</strong>
						</h1>
						<FormGroup>
							<FormControlLabel
								control={<Checkbox />}
								label="This order contains a gift."
								color="orange"
							/>
						</FormGroup>
						<button className="p-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
							Proceed to Checkout
						</button>
					</div>
				</div>
			</div>
		);
}
