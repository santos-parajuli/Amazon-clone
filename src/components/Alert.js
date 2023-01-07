import React, { useEffect, useState } from 'react';
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";

export default function Alert({type,text}) {
    var bgColor;
    var alertIcon;
	const [display, setDisplay] = useState(true);
    switch (type) {
			case "WARNING":
				bgColor = "bg-yellow-400";
				alertIcon = <WarningIcon />;
				break;
			case "SUCCESS":
				bgColor = "bg-emerald-500";
				alertIcon = <CheckCircleIcon />;
				break;
            case "ERROR":
                bgColor = "bg-red-500";
				alertIcon = <ErrorIcon />;
                break;
			default:
				bgColor = "bg-red-500";
				alertIcon = <ErrorIcon />;
		}
		useEffect(() => {
			setTimeout(() => {
				setDisplay(false)
			}, 3000);		  
		})
		
    return (
			<>
				{display && <div className={`w-full text-white ${bgColor}`}>
					<div className="container flex items-center justify-between px-6 py-4 mx-auto">
						<div className="flex">
							{alertIcon}
							<p className="mx-3"> {text ? text : "Some Error Occurred"} </p>
						</div>
						<button className="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
							<svg
								className="w-5 h-5"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 18L18 6M6 6L18 18"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>}
			</>
		);
}
