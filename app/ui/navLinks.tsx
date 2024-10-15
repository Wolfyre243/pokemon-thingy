import { HomeIcon } from "../ui/svg_icons";
import { NavLink } from "@remix-run/react";

import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/home', icon: HomeIcon },
    {
      name: 'Pokedex',
      href: '/pokedex',
      icon: HomeIcon,
    },
    { name: 'Players', href: '/players', icon: HomeIcon },
    { name: 'New & Updates', href: '/news', icon: HomeIcon },
];

export default function NavLinks() {
    return (
        <div className="flex flex-row w-1/3 justify-between">
            {links.map((link, index) => {
                const LinkIcon = link.icon;
                return (
                    <NavLink key={index} to={link.href} className={({ isActive, isPending }) => clsx(
                        'flex flex-row gap-2 items-center px-3 py-0.5 rounded-xl transition-all duration-200 ease-out',
                        {
                            'bg-primary' : isActive === true,
                            'hover:bg-neutral-800' : isActive === false,
                        }
                    )}>
                        <LinkIcon width={14} height={14} fill="currentColor"/>
                        <p>{ link.name }</p>
                    </NavLink>
                );
            })}
        </div>
    );
}