import { twMerge } from 'tailwind-merge';

export default function PillButtonLink({ children, href, className } : { children: React.ReactNode, href: string, className?: string }) {
    return (
        <a href={href}>
            <div className={twMerge("flex flex-row w-fit gap-2 items-center justify-center bg-black px-5 py-3 rounded-xl hover:scale-110 transition-all duration-200", className)}>
                { children }
            </div>
        </a>
    );
}