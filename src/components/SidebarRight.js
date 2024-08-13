import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, Lightbulb, BookOpen } from 'lucide-react';


const SidebarRight = () => {
  const router = useRouter();

  const navItems = [
    { href: '/', label: 'Ranking de Ideas', icon: Home },
    { href: '/nuevas-ideas', label: 'Nuevas Ideas', icon: Lightbulb },
    { href: '/categoria-de-ideas', label: 'Categorías de Ideas', icon: BookOpen },
  ];

  return (
    <nav className="fixed top-20 left-0 h-[calc(100vh-5rem)] w-70 p-10  bg-gray-100 overflow-hidden">
      <ul className="space-y-2">
        {navItems.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link href={href} legacyBehavior>
              <a className='flex items-center p-2 rounded transition-colors'>
                <Icon className="mr-2 h-5 w-5" />
                <span>{label}</span>

              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarRight;
