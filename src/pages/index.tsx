import React from "react";

import Link from "next/link";

import Navbar from "@components/Navbars/Navbar";

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar title="Dashboard" />
      <div className="flex flex-1 container mx-auto h-screen">
        <main>
          <ul>
            <li>
              <Link href="/weather/Berlin">
                <a>Berlin</a>
              </Link>
            </li>
            <li>
              <Link href="/weather/Chicago">
                <a>Chicago</a>
              </Link>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
