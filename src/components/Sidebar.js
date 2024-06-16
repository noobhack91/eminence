import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-4 shadow-md">
      <nav>
        <ul>
          <li className="py-2">
            <Link href="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="py-2">
            <Link href="/projects">
              Projects
            </Link>
          </li>
          <li className="py-2">
            <Link href="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
