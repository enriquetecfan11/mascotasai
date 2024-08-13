import Image from 'next/image';
import Logo from '../assets/mascotasai-logo.png';

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full bg-white p-6 flex justify-between items-center z-50 border-b border-slate-200">
      <div className="flex items-center">
        <Image className="w-10 h-10" src={Logo} alt="Logo" width={40} height={40} />
        <h1 className='ml-2 text-xl font-bold'><a href='/'>MascotasAi</a></h1>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-6">
        <input
          className="w-full p-2 border rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          type="text"
          placeholder="Busca ideas... (todavia no esta implementado)"
          aria-label="Search"
        />
      </div>
      <div className="flex items-center">
        {/* Add user avatar or other elements here */}
      </div>
    </header>
  );
};

export default Header;
