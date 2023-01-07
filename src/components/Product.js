/* eslint-disable no-unused-vars */
import { Rating } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
export default function Product({ details }) {
	const [state,dispatch]=useStateValue();
	const addToBasket = ()=>{
		// dispatch action to data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item:details
		});
	}
	return (
		<div className=" w-full max-w-sm bg-white rounded-lg shadow-xl border dark:bg-gray-900 dark:border-gray-700">
			<div className="min-h-[400px] flex justify-center items-center ">
				<Link
					to={"/product/" + details.title}
					state={details}
				>
					<img
						className="p-8 rounded-t-lg  max-h-[400px] m-auto"
						src={details.image}
						alt={details.title}
					/>
				</Link>
			</div>
			<div className="px-5 pb-5 flex flex-col ">
				<Link
					to={"/product/" + details.title}
					state={details}
				>
					<h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
						{details.title}
					</h5>
				</Link>
				<div className="flex items-center mt-2.5 mb-5">
					<Rating
						name="half-rating"
						value={details.rating}
						precision={0.1}
						readOnly
					/>
					<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
						{details.rating}
					</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">
						{details.price
							? details.price.symbol + details.price.value
							: "Out Of Stock"}
					</span>
					<button
						onClick={addToBasket}
						className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
}
