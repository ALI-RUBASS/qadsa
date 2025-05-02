

import Link from "next/link";
import Image from "next/image";
import React, { Suspense } from "react";
import data from "../data.json";
import { ProfileOrganizations } from "./components/orgs";
import { RecentActivity } from "./components/recent-activity";
import { getUser } from "./data";
import LoadingIndicator from "./components/loading-indicator";
import PdfCard from "./components/pdf";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default async function Home(props) {
    const searchParams = await props.searchParams;

    return (
		<LandingComponent searchParams={searchParams} />
	)
}

const UserIcon = async ({ promise }) => {

	const user = await promise;

	return (
		<Image alt='👨‍💻' width={100} height={100} src={user.avatar_url || data.avatarUrl} className="float-right rounded-full mx-4" />
	);
};

const UserText = async ({ promise }) => {

	const user = await promise;

	return (
		<p className="text-xs">I’m <b className="text-blue-400">Qadsa Noor</b>, a Bachelor of Science in Computer Science (BSCS) graduate from FAST NUCES. While my academic background is rooted in computer science, I have found my true professional passion in <b className="text-blue-400">Social Media Marketing</b>. I specialize in crafting digital brand identities, executing high-impact campaigns, and growing online audiences with creativity and data-driven strategy.

		</p>
	);
};

const TryYourself = ({ customUsername }) => {

	const href = customUsername ? '/' : '/search';

	return <Link
		href={href}
		className="text-lg duration-500 text-zinc-500 hover:text-zinc-300 border-dashed p-2 rounded-sm border-2 border-zinc-500 hover:border-zinc-300"
	>
		{
			customUsername ? 'Showing: ' + customUsername + ', click to cancel ❌' : 'CV'
		}
	</Link>;
};

const LandingComponent = async ({ searchParams: { customUsername } }) => {

	const username = customUsername || process.env.GITHUB_USERNAME || data.githubUsername;
	const promise = getUser(username);

	return (
		<div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-y-auto bg-linear-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href + (customUsername ? `?customUsername=${customUsername}` : '')}
							className="text-lg duration-500 text-zinc-500 hover:text-zinc-300"
						>
							<span className="inline-flex items-center">
								{item.name} <LoadingIndicator />
							</span>
						</Link>
					))}
					{/* <TryYourself customUsername={customUsername} /> */}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

			<h1 className="flex items-center z-10 text-4xl hover:scale-110 text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-white p-5">
				Qadsa Noor
				{/* <Suspense fallback={<p>Loading...</p>}>
					<UserIcon promise={promise} />
				</Suspense> */}
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-lg text-zinc-500">
					
<<<<<<< HEAD
						<div className="w-full h-px min-h-28 px-20 lg:px-40">
=======
						<div className="w-full h-px min-h-28 px-10 lg:px-40">
>>>>>>> 16de5e8 (Final)
							<UserText promise={promise} />
							{/* <ProfileOrganizations username={username} />
							<RecentActivity username={username} /> */}
						</div>
					
				</h2>
			</div>


		<PdfCard />

			<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
      <div class="h-1 bg-gray-800 rounded overflow-hidden">
        <div class="w-24 h-full bg-indigo-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-white font-medium title-font text-lg mb-2 sm:mb-0">Social Media Marketing</h1>
        <p class="sm:w-3/5 leading-relaxed text-sm sm:pl-10 pl-0">
		With a unique blend of technical know-how and marketing acumen, I bridge the gap between digital platforms and audience engagement delivering measurable results through strategic content, trends, and performance analytics.        </p>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
	<div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://transknit.shop/daira.png" />
        </div>
        <h2 class="text-lg font-medium title-font text-white mt-5">Daira 2025</h2>
        <p class="text-sm leading-relaxed mt-2">
		A nationwide Olympiad hosted at FAST NUCES that brought together culture, tech, and talent. I led the social media strategy and live coverage to amplify reach, boost engagement, and create lasting hype before, during, and after the event.

        </p>
        <a class="text-indigo-400 inline-flex items-center mt-3 text-sm">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://transknit.shop/fast.png" />
        </div>
        <h2 class="text-lg font-medium title-font text-white mt-5">FAST NUCES</h2>
        <p class="text-sm leading-relaxed mt-2">
          As part of my BSCS journey at FAST NUCES, I worked closely with university event teams to build and execute impactful digital campaigns—most notably during Daira 2025—where creative content met strategic planning.
        </p>
        <a class="text-indigo-400 inline-flex items-center mt-3 text-sm">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://transknit.shop/heavenella.png" />
        </div>
        <h2 class="text-lg font-medium title-font text-white mt-5">Heavella Bakers</h2>
        <p class="text-sm leading-relaxed mt-2">
          Managed digital content and promotions for Heavella Bakers across Chakwal and Rawalpindi branches. Created visually engaging posts, seasonal campaigns, and local influencer collaborations to attract footfall and improve local brand visibility.
        </p>
        <a class="text-indigo-400 inline-flex items-center mt-3 text-sm">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
     
    </div>
  </div>
</section>



<section class="bg-black w-full items-center justify-center flex z-10">
       <div
            class=" bg-black px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center items-center justify-center"
          >
            <h1
              class="text-3xl items-center justify-center font-extrabold leading-10 tracking-tight text-white text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl"
            >
              <span class="inline md:block">Contact me</span>
              <span
                class=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block"
              > For<span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300"> Marketing</span> </span>
            </h1>
            <div
              class="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg"
            >
            <button 
  class="bg-tkb border text-sm text-white py-3 px-7 rounded-full"
  onclick="window.open('https://wa.me/', '_blank')">
  Whatsapp
</button>

            </div>
          </div>
  </section>
  
<hr class="text-white mx-5" />
  <footer class="bg-black pb-5">
  <div class="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="flex justify-center text-teal-300 sm:justify-start">
     <img class="rounded-full" src="https://sahilnetic.xyz/evilcat.png" width="40" height="40" />
      </div>

      <p class="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
        T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
      </p>
    </div>
  </div>
</footer>


		</div>
	);
}
