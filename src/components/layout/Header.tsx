import SearchBar from '@/components/layout/Header/SearchBar';
import { CloudSunRain } from 'lucide-react';

const Header = () => {
  return (
    <>
      <header className="mb-2 flex items-center gap-4">
        <h1 className="flex items-center gap-2 font-black text-2xl text-white">
          <CloudSunRain strokeWidth={3} />
          Weather.io
        </h1>
        <SearchBar />
      </header>
    </>
  );
};

export default Header;
