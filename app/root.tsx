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
        <body className="bg-stone-950 font-outfit flex flex-col h-screen">
            <NavBar />
            
            <Outlet />
            
            <Scripts />
        </body>
        </html>
    );
}