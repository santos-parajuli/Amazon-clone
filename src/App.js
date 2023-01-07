/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty-pattern */
import React, { useEffect } from 'react'
import Home from './routes/Home'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';
import ProductPage from './routes/ProductPage';
import Checkout from './routes/Checkout';
import Login from './routes/Login';
import { auth } from './utils/firebaseUtils';
import { useStateValue } from './StateProvider';
import Register from './routes/Register';

export default function App() {
	const [{},dispatch]=useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged(authUser=>{
			if(authUser){
				// user logged in
				dispatch({
					type:"SET_USER",
					user:authUser
				})
			}else{
				// user not logged in
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		})
	}, [])

    return (
			<>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/product/:title"
						element={<ProductPage />}
					/>
					<Route
						path="/checkout"
						element={<Checkout />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/register"
						element={<Register />}
					/>
				</Routes>
			</>
		);
}
