import SearchBar from '@/components/layout/Header/SearchBar';
import { CloudSunRain } from 'lucide-react';
import Logo from '@/assets/images/Logo.svg?react';

const Header = () => {
  return (
    <>
      <header className="mb-2 flex items-center gap-4">
        <h1 className="flex items-center gap-2 font-black text-2xl text-white">
          <Logo width={48} height={48} />
          Weather.io
        </h1>
        <SearchBar />
      </header>
    </>
  );
};

export default Header;
