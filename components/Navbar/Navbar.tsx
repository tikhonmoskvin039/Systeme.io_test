import React from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Home Page</Link>
        </div>
        <ul className="flex space-x-4 px-4">
          <li>
            <Link className="text-white hover:text-blue-300 px-4" href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-blue-300 px-4"
              href="/price-plans"
            >
              Prices plans
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-blue-300 pl-4" href="/pages">
              Pages
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
