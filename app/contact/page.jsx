import { FaGithub } from "react-icons/fa";
import { GoPerson } from 'react-icons/go';
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

// Only 4 socials manually defined
const contacts = [
	{
		icon: <FaGithub size={20} />,
		href: "https://github.com/qadsa123",
		label: "",
		handle: "Github",
	},
	{
		icon: <FaLinkedin size={20} />,
		href: "https://www.linkedin.com/in/qadsa123",
		label: "",
		handle: "LinkedIn",
	},
	{
		icon: <FaInstagram size={20} />,
		href: "https://www.instagram.com/qadsanoor",
		label: "",
		handle: "Instagram",
	},
	{
		icon: <FaBehance size={20} />,
		href: "https://www.behance.net/qadsanoor1",
		label: "",
		handle: "Behance",
	},
];

export default function Contacts() {
	return (
		<div className="bg-linear-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:grid-cols-2 md:grid-cols-4 lg:gap-16">
					{contacts.map((s) => (
						<Card key={s.label}>
							<Link
								href={s.href}
								target="_blank"
								className="relative flex flex-col items-center gap-4 p-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16 sm:p-8 overflow-hidden"
							>
								{/* Gradient Overlay on Hover */}
								<span className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out pointer-events-none" />
								
								{/* Icon */}
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>

								{/* Text Content */}
								<div className="z-10 flex flex-col items-center">
									<span className="whitespace-nowrap text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>

			

			<section className="w-full items-center justify-center flex z-10">
       <div
            className=" px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center items-center justify-center"
          >
            <h1
              className="text-3xl items-center justify-center font-extrabold leading-10 tracking-tight text-white text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl"
            >
              <span className="inline md:block">Contact</span>
              <span
                className=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block"
              > For<span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300"> Marketing</span> </span>
            </h1>
            <div
              className="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg"
            >
        <a 
  className="bg-tkb border text-sm text-white py-3 px-7 rounded-full" 
  href="mailto:qadsanoor.cs@gmail.com"
>
  Email
</a>


            </div>
          </div>
  </section>
  
<hr className="text-white mx-5" />
  <footer className="bg-black pb-5">
  <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      

      <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0 h-10">
        T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developer
      </p>
    </div>
  </div>
</footer>

		</div>
	);
}
