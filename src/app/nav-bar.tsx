import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-custom">
      <Link className="text-white font-bold text-2xl underline mx-2" href="/">
        Home
      </Link>
      <Link
        className="text-white font-bold text-2xl underline mx-2"
        href="/expenses"
      >
        Expenses
      </Link>
    </nav>
  );
}
