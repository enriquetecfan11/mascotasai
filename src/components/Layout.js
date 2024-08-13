// src/components/Layout.js

import Header from '@/components/Header';
import SidebarLeft from '@/components/SidebarLeft';
import SidebarRight from '@/components/SidebarRight';

const Layout = ({ children }) => {
  return (
    <div className='bg-gray-100'>
      <Header />
      <SidebarLeft />
      <SidebarRight />
      <div className="">
        {children}
      </div>
    </div>
  );
};

export default Layout;
