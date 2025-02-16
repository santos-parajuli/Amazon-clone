import React, { useEffect, useState } from 'react'
import {auth}  from '../utils/firebaseUtils';
import {	signInWithEmailAndPassword} from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import  Alert  from '../components/Alert';
import {useStateValue } from '../StateProvider';
export default function Login() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("");
    const [password, setPassword] = useState("");
	const [state] = useStateValue();

    const navigate = useNavigate();
	useEffect(() => {
		document.title="Login | Amazon Clone";
		if(state.user){
			navigate("/");
		}
	})
	
    const logIn = e =>{
		setError(false)
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						const user = userCredential.user;
                        if (user) {
                            navigate("/");
                        }
					})
					.catch((error) => {
						setErrorMsg(error.message);
						setError(true)
					});
    }

	
    return (
			<div className="flex flex-col justify-center items-center">
				{error && (
					<Alert
						type="ERROR"
						text={errorMsg}
					/>
				)}
				<div className="w-4/5 lg:w-2/5  bg-gray-50 border shadow-lg text-lg font-normal mt-5 text-left pl-10 p-5 ">
					<form>
						<h1 className="text-4xl font-semibold">Sign in</h1>
						<div className="relative mt-5">
							<label
								htmlFor="email"
								className="text-lg mt-5 font-medium text-gray-900"
							>
								Enter your E-mail address
							</label>
							<input
								type="email"
								required
								id="email"
								name="email"
								onChange={(event) => {
									setEmail(event.target.value);
								}}
								className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
						<div className="relative mt-5">
							<label
								htmlFor="password"
								className="text-lg mt-5 font-medium text-gray-900"
							>
								Enter Password
							</label>
							<input
								required
								type="password"
								id="password"
								name="password"
								onChange={(event) => {
									setPassword(event.target.value);
								}}
								className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
						<button
							type="submit"
							id="login-button"
							onClick={logIn}
							className="w-full mt-5 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg"
						>
							Sign In
						</button>
					</form>
					<p className="text-base font-normal mt-5 ">
						By Logging In, you agree to Amazon's Conditions of Use and Privacy
						Notice. Need help?
					</p>
					<Link to="/register">
						<button
							className="w-full mt-5 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
						>
							Create Your Amazon Account
						</button>
					</Link>
				</div>
			</div>
		);
}
