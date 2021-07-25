import React from "react";

import Link from "next/link";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const showBackArrow = title.toLowerCase() !== "dashboard";
  return (
    <div className="flex justify-between p-4">
      <div className="flex-none w-16 h-16 flex">
        {showBackArrow && (
          <div className="m-auto">
            <Link href="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </a>
            </Link>
          </div>
        )}
      </div>
      <div className="text-center flex">
        <h1 className="m-auto text-3xl">{title}</h1>
      </div>
      <div className="flex-none w-16 h-16"> </div>
    </div>
  );
};

export default Navbar;
