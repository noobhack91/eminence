import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Eminence Technology App</h1>
        <nav>
          <Link href="/">
            <span className="text-white hover:text-gray-300 ml-4">Home</span>
          </Link>
          <Link href="/dashboard">
            <span className="text-white hover:text-gray-300 ml-4">Dashboard</span>
          </Link>
          <Link href="/projects">
            <span className="text-white hover:text-gray-300 ml-4">Projects</span>
          </Link>
          <Link href="/profile">
            <span className="text-white hover:text-gray-300 ml-4">Profile</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
