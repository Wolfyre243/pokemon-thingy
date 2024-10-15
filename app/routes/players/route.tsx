// Layout file for the /players route

import { Outlet } from "@remix-run/react";

export default function Layout() {
    return (
        <main>
            <h1>Here lies non-existent players</h1>
            <Outlet />
        </main>
    );
}