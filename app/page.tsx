

import Link from "next/link";
import Image from "next/image";
import React, { Suspense } from "react";
import data from "../data.json";
import { ProfileOrganizations } from "./components/orgs";
import { RecentActivity } from "./components/recent-activity";
import { getUser } from "./data";
import LoadingIndicator from "./components/loading-indicator";
import PdfCard from "./components/pdf";
import { FaCircle, FaCode, FaGamepad, FaShieldAlt } from "react-icons/fa";

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
		<p className="text-xs text-gray-400">I’m <b className="text-blue-400">Qadsa Noor</b>, a Bachelor of Science in Computer Science (BSCS) graduate from FAST NUCES. While my academic background is rooted in computer science, I have found my true professional passion in <b className="text-blue-400">Social Media Marketing</b>. I specialize in crafting digital brand identities, executing high-impact campaigns, and growing online audiences with creativity and data-driven strategy.

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


  const marketingProjects = [
    {
      title: "Daira 2025",
      description:
        "Led social media for a nationwide Olympiad at FAST NUCES. Orchestrated strategy and live coverage to boost engagement and amplify reach before, during, and after the event.",
      image: "https://transknit.shop/daira.png",
    },
    {
      title: "FAST NUCES",
      description:
        "Collaborated on university events, creating impactful digital campaigns with strategic planning and creative content, notably during Daira 2025.",
      image: "https://transknit.shop/fast.png",
    },
    {
      title: "Heavella Bakers",
      description:
        "Managed digital content and campaigns for branches in Chakwal and Rawalpindi. Designed seasonal promotions, visuals, and influencer partnerships.",
      image: "https://transknit.shop/heavenella.png",
    },
  ];

  const devProjects = [
    {
      title: "Security Cell",
      description:
        "A SaaS platform to scan websites for security flaws like SQL injection. Built using Next.js, Node.js, TensorFlow, and Three.js for advanced automation and UI.",
      image: "https://transknit.shop/security-cell.webp",
    },
    {
      title: "ARB Ecommerce",
      description:
        "A React-based clothing store built from scratch with secure payment integration, a modern cart system, and real-time order management.",
      image: "https://transknit.shop/arb.png",
    },
    {
      title: "Math Riddle Factory",
      description:
        "An AI-powered riddle generator that teaches math through gamified logic, built using LLMs and tuned with LoRA instruction strategies.",
      image: "https://transknit.shop/riddle.png",
    },
  ];

  const Section = ({
    title,
    description,
    projects,
  }: {
    title: string;
    description: string;
    projects: {
      title: string;
      description: string;
      image: string;
    }[];
  }) => (
    <section className="text-gray-300 body-font pt-24 pb-20">
      <div className="container px-5 mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {title}
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">{description}</p>
          <div className="w-20 h-1 bg-indigo-500 mt-4 mx-auto rounded" />
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((proj, i) => (
            <div key={i} className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
                <div className="rounded-lg overflow-hidden mb-4 h-56">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    width={800}
                    height={400}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h2 className="text-white text-xl font-semibold mb-2">
                  {proj.title}
                </h2>
                <p className="text-sm text-gray-400">{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  
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
          <Link
                        href={"mailto:qadsanoor.cs@gmail.com" + (customUsername ? `?customUsername=${customUsername}` : '')}
                        className="duration-200 text-zinc-400 hover:text-zinc-100 relative block"
                      >
                        <span className="inline-flex items-center"><FaCircle className="pr-2" size={30}  /> qadsanoor.cs@gmail.com <LoadingIndicator /></span>
                      </Link>
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
					
						<div className="w-full h-px min-h-28 px-10 lg:px-40">
							<UserText promise={promise} />
							{/* <ProfileOrganizations username={username} />
							<RecentActivity username={username} /> */}
						</div>
					
				</h2>
			</div>
      <div className="flex md:px-20 md:space-x-10 flex-col-reverse lg:flex-row relative h-full md:h-[360px] justify-center items-center"> {/* Give a fixed or min height */}

{/* Product Card */}
<div className="flex flex-col h-full px-10 md:px-0">
  <div className="flex bg-white shadow-lg rounded-lg overflow-hidden h-full">
    <div className="w-1/2 bg-cover object-cover bg-center" style={{ backgroundImage: "url('https://transknit.shop/bayaan.png')" }}></div>
    <div className="w-1/2 p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-gray-900 font-bold text-2xl">Bayaan</h1>
        <p className="mt-2 text-gray-600 text-sm">
        Promoted and managed digital marketing campaigns for the Bayaan concert at Daira 2025, driving audience engagement and event visibility.
        </p>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          ))}
          {/* {[...Array(2)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          ))} */}
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <h1 className="text-gray-700 font-bold text-sm">Daira 2025</h1>
        <Link href="https://www.instagram.com/fast.daira/p/DImc_tKMTYz/" className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Check Out</Link>
      </div>
    </div>
  </div>
</div>

{/* PdfCard */}
<div className=" h-full px-10 lg:px-0">
  <PdfCard />
</div>
</div>




<section className="text-gray-400 bg-gray-900 body-font mt-20 rounded-2xl">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-800 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-white font-medium title-font text-lg mb-2 sm:mb-0">
              Full Stack Projects
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-sm sm:pl-10 pl-0">
              A selection of impactful projects that showcase my skills in full stack development, from building secure web applications to creating engaging platforms for developers.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {/* Project 1 */}
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg p-8 bg-gray-800 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-between mb-4">
                <FaShieldAlt size={30} className="text-indigo-500" />
                <span className="text-xs text-indigo-500">06/2024 – present</span>
              </div>
              <h2 className="text-lg font-medium title-font text-white">Security Cell - Web Protection Analysis</h2>
              <p className="text-sm leading-relaxed mt-2">
                Provides automated security analysis to detect vulnerabilities such as SQL injection and XSS to enhance website protection.
              </p>
              <ul className="mt-4 text-sm text-gray-400">
                <li>Detects SQL injection, XSS, and other security threats.</li>
                <li>Provides actionable security reports and recommendations.</li>
                <li>Real-time alerts for critical issues.</li>
                <li>Community forum for user discussions.</li>
              </ul>
            </div>
          </div>

          {/* Project 2 */}
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg p-8 bg-gray-800 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-between mb-4">
                <FaCode size={30} className="text-indigo-500" />
                <span className="text-xs text-indigo-500">10/2021 – 06/2024</span>
              </div>
              <h2 className="text-lg font-medium title-font text-white">Gigadevden - Platform for Articles</h2>
              <p className="text-sm leading-relaxed mt-2">
                A platform for hosting technical articles, SaaS tools, and project showcases with a built-in developer console.
              </p>
              <ul className="mt-4 text-sm text-gray-400">
                <li>Article publishing and resource sharing.</li>
                <li>Developer console for managing projects.</li>
                <li>User engagement and community interaction.</li>
              </ul>
            </div>
          </div>

          {/* Project 3 */}
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg p-8 bg-gray-800 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-between mb-4">
                <FaGamepad size={30} className="text-indigo-500" />
                <span className="text-xs text-indigo-500">12/2023 – 01/2024</span>
              </div>
              <h2 className="text-lg font-medium title-font text-white">Ludo Game</h2>
              <p className="text-sm leading-relaxed mt-2">
                Multithreaded C application simulating the Ludo board game for up to 4 players using synchronized game logic and thread communication.
              </p>
              <ul className="mt-4 text-sm text-gray-400">
                <li>Simulated 4-player Ludo with real game rules using multithreading.</li>
                <li>Handled thread synchronization with mutexes and condition variables.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

<Section
        title="Social Media Marketing"
        description="Strategic content, campaign execution, and data-driven branding for brands and events."
        projects={marketingProjects}
      />



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