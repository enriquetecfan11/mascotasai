// src/components/SidebarRight.js

import Link from 'next/link';

const SidebarRight = () => {
  return (
    <div className="fixed top-20 left-0 h-[calc(100vh-5rem)] w-60 p-4 bg-gray-100 overflow-hidden">
      <ul className="space-y-4">
        <li>
          <Link href="/" legacyBehavior>
            <a className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
              💯 Ranking de Ideas
            </a>
          </Link>
        </li>
        <li>
          <Link href="/nuevas-ideas" legacyBehavior>
            <a className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
              💡 Nuevas Ideas
            </a>
          </Link>
        </li>
        <li>
          <Link href="/ideas-mas-votadas" legacyBehavior>
            <a className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
              🟢 Ideas más Votadas
            </a>
          </Link>
        </li>
        <li>
          <Link href="/categoria-de-ideas" legacyBehavior>
            <a className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
              📒 Categorías de Ideas
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarRight;
