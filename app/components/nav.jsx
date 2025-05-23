"use client";

import { GoArrowLeft } from 'react-icons/go';
import Link from "next/link";
// import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from "react";
import LoadingIndicator from './loading-indicator';
import { FaCircle } from 'react-icons/fa';

export const Navigation = () => {
	const ref = useRef(null);
	const [isIntersecting, setIntersecting] = useState(true);
	// const searchParams = useSearchParams();
	const customUsername = "";

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500 border-zinc-800"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8 text-base">
						<Link
							href={"/projects" + (customUsername ? `?customUsername=${customUsername}` : '')}
							className="duration-200 text-zinc-400 hover:text-zinc-100 relative block"
						>
							<span className="inline-flex items-center">Projects <LoadingIndicator /></span>
						</Link>
						<Link
							href={"/contact" + (customUsername ? `?customUsername=${customUsername}` : '')}
							className="duration-200 text-zinc-400 hover:text-zinc-100 relative block"
						>
							<span className="inline-flex items-center">Contact <LoadingIndicator /></span>
						</Link>
						<Link
                        href={"mailto:qadsanoor.cs@gmail.com" + (customUsername ? `?customUsername=${customUsername}` : '')}
                        className="duration-200 text-zinc-400 hover:text-zinc-100 relative block"
                      >
                        <span className="inline-flex items-center"><FaCircle className="pr-2" size={30}  /> qadsanoor.cs@gmail.com <LoadingIndicator /></span>
                      </Link>
					</div>

					<Link
						href={"/" + (customUsername ? `?customUsername=${customUsername}` : '')}
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<GoArrowLeft className="w-6 h-6" />
					</Link>
				</div>
			</div>
		</header>
	);
};
