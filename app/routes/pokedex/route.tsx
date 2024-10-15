// Layout file for the /pokedex route

import { Outlet } from "@remix-run/react";

export default function Layout() {
    return (
        <main className="h-full flex flex-col justify-center">
            <Outlet />
        </main>
    );
}