import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import {data} from "../fakeData/amazonProducts";
import { Pagination } from '@mui/material';
import { Carousel } from "react-responsive-carousel";
// eslint-disable-next-line no-unused-vars
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
    var products = data.search_results;
    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 13;
    var noOfPage = products.length / productPerPage;
    const lastProductIndex=currentPage * productPerPage;
    const firstProductIndex = lastProductIndex-productPerPage;
    const currentProducts = products.slice(firstProductIndex,lastProductIndex)
	useEffect(() => {
		document.title = "Home | Amazon Clone";
	});
    

    return (
			<div className="home">
				<Carousel
					showArrows={true}
					infiniteLoop
					showThumbs={false}
					renderIndicator={false}
					className="w-full -z-10 -mb-16 md:-mb-44 lg:-mb-60 object-contain "
				>
					<div>
						<img
							className=" maskImage h-full -z-10 "
							src="https://i.imgur.com/TuosPIR.jpg"
							alt="amazon home slide 1"
						/>
					</div>
					<div>
						<img
							className=" maskImage w-full -z-10 -mb-16 md:-mb-44 lg:-mb-60 object-contain cursor-zoom-in"
							src="https://i.imgur.com/LC5wcOe.jpg"
							alt="amazon home slide 1"
						/>
					</div>
					<div>
						<img
							className=" maskImage w-full -z-10 -mb-16 md:-mb-44 lg:-mb-60 object-contain cursor-zoom-in"
							src="https://i.imgur.com/4h6kmsd.jpg"
							alt="amazon home slide 1"
						/>
					</div>
				</Carousel>
				<div className="w-[80%] m-auto md:w-[90%] flex flex-wrap justify-evenly gap-y-16 z-100">
					{currentProducts.map((product) => {
						return (
							<Product
								key={product.title}
								details={product}
							/>
						);
					})}
				</div>
				<div className="w-fit my-4 m-auto">
					<Pagination
						showFirstButton
						size="large"
						count={Number(noOfPage.toFixed(0))}
						variant="outlined"
						shape="rounded"
						onChange={(event, page) => {
							setCurrentPage(page);
						}}
					/>
				</div>
			</div>
		);
}
