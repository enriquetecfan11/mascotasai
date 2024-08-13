import Image from 'next/image';
import Logo from '../assets/mascotasai-logo.png';

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full bg-white p-6 flex justify-between items-center z-50">
      <div className="flex items-center">
        <Image className="w-10 h-10" src={Logo} alt="Logo" width={40} height={40} />
        <h1 className='rounded'><a href='/'>MascotasAi</a></h1>
      </div>
      <div className="flex-1 mx-6">
        <input
          className="w-full max-w-xl p-2 border rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          type="text"
          placeholder="Search..."
          aria-label="Search"
        />
      </div>
      <div className="flex items-center">
        {/* <Image className="w-10 h-10 rounded-full" src="/images/avatar.svg" alt="User Avatar" width={40} height={40} /> */}
      </div>
    </header>
  );
};

export default Header;
