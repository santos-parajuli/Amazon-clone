/* eslint-disable no-unused-vars */
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../utils/firebaseUtils';
export default function Header() {
	const [{basket,user},dispatch] = useStateValue();
return (
	<div className=" flex items-center bg-zinc-900 sticky top-0 z-50">
		<Link to="/">
			<img
				className="h-14 p-2 object-contain mx-0 my-1 ml-3"
				src="https://i.imgur.com/lVqWD00.png"
				alt="amazon logo"
			/>
		</Link>
		<div className="flex flex-row flex-1  items-center m-5 ">
			<input
				className="p-1 w-full"
				type="text"
			/>
			<div className="p-1 bg-orange-500">
				<SearchIcon className=" text-black " />
			</div>
		</div>
		<div className="flex justify-evenly">
			{!user && (
				<Link to={"/login"}>
					<div className="flex flex-col text-white mx-3">
						<span className="text-xs">Hello  Guest</span>
						<span className="text-base font-bold" id="login">
							Log In
						</span>
					</div>
				</Link>
			)}
			{user && (

				<div onClick={()=>{
					dispatch({
						type: "REMOVE_USER",
					});
					auth.signOut();
				}} className="flex flex-col text-white mx-3 cursor-pointer">
					<span className="text-xs">Hello {user.email}</span>
					<span className="text-base font-bold">
						Log Out
					</span>
				</div>
			)}
			
			<Link
				to="/checkout"
				className="text-white flex items-center"
			>
				<ShoppingBasketIcon />
				<span className="mx-2"> {basket?.length} </span>
			</Link>
		</div>
	</div>
);}
