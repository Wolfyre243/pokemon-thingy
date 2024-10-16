import NavLinks from "./navLinks";

export default function NavBar() {
    return (
        <div className="flex flex-row sticky top-0 z-50 shadow-[0_5px_20px_5px_rgba(0,0,0,0.3)] justify-between items-center w-full py-1.5 px-4 bg-secondary text-stone-300">
            <a href="/"><h1 className="text-xl">That Useless Pokedex</h1></a>
            <NavLinks />

            {/* //TODO: Add sign up page here */}
            <div className="flex flex-row gap-3">
                <a href="" className="px-4 py-1 rounded-xl bg-accent text-primary">Login</a>
                <a href="" className="px-4 py-1 rounded-xl bg-accent text-primary">Sign Up</a>
            </div>
        </div>
    );
}