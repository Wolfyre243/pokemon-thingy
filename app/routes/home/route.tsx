import { Outlet } from "@remix-run/react";
import React from "react";

export default function Layout() {
    return (
        <main>
            <h1>Here lies non-existent players</h1>
            <Outlet />
        </main>
    );
}