// bla bla bla
import { Links, Meta, Outlet, Scripts, } from "@remix-run/react";

// BRING IN THE TAILWIND
import { LinksFunction } from "@remix-run/node";
import stylesheet from "./styles/globals.css?url";
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet },
];

// Import components
import NavBar from "./ui/navBar";

export default function App() {
    return (
        <html>
        <head>
            <Meta />
            <Links />
        </head>
        <body className="bg-stone-950 text-stone-300 font-outfit flex flex-col min-h-screen">
            <NavBar />
            
            <Outlet />

            <footer className="my-2 text-sm text-stone-800 text-center">This is a footer. I don't know why I put it here, so neither will you. Website made with love 💕 ft. PokeAPI (real). All rights reserved???</footer>
            
            <Scripts />
        </body>
        </html>
    );
}