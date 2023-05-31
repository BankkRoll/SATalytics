// src/components/NavBar.tsx
import Link from 'next/link';

const NavBar = () => {
  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto flex items-center justify-between p-6">
        <div>
          <Link href="/">
            <p className="text-2xl font-bold text-white">SATalytics</p>
          </Link>
        </div>
      </nav>
    </header>
);
};

export default NavBar;
