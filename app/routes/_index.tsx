// This is the index file of the root route, also known as the homepage.

import { GithubIcon, FolderIcon } from "../ui/svg_icons";

import PillButtonLink from "../ui/pillButtonLink";

export default function Home() {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center text-center text-white">
            <div className="mb-5 w-fit">
                <h1 className="text-6xl">Help I Do Not Know What To Do With This</h1>
                <p className="mt-4 text-lg">What am I even doing with my life</p>
            </div>

            <div className="flex flex-row gap-4 mb-5 w-fit">
                {/* <a href="https://github.com/Wolfyre243/Project-Francium" target="blank" className="flex flex-row w-fit gap-2 items-center justify-center bg-black px-5 py-3 rounded-xl">
                    <GithubIcon width={30} height={30} fill="#ffffff" />
                    <p className="text-lg">Github</p>
                </a>
                <a href="/home" className="flex flex-row w-fit gap-2 items-center justify-center bg-black px-5 py-3 rounded-xl">
                    <FolderIcon width={25} height={25} stroke="#ffffff" />
                    <p className="text-lg">Home</p>
                </a> */}
                <PillButtonLink href="https://github.com/Wolfyre243/Project-Francium">
                    <GithubIcon width={30} height={30} fill="#ffffff" />
                    <p className="text-lg">Github</p>
                </PillButtonLink>
                <PillButtonLink href="/home">
                    <FolderIcon width={25} height={25} stroke="#ffffff" />
                    <p className="text-lg">Home</p>
                </PillButtonLink>
            </div>

            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="bg-emerald-600 px-5 py-3 rounded-xl shadow hover:shadow-[0_0_20px_5px_rgba(125,125,125,0.2)] transition-all duration-300">
                <p>Click me for good luck</p>
            </a>

        </div>
    );
}