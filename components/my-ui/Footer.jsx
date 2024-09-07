import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
            <p className="text-xs">© 2023 MyBlog. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                    Terms of Service
                </Link>
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                    Privacy
                </Link>
            </nav>
            <div className="flex items-center space-x-4">
                <Link href="#" className="">
                    <TwitterIcon className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="">
                    <GithubIcon className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="">
                    <LinkedinIcon className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;