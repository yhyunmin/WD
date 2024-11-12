import { CloudSunRain, SearchIcon } from 'lucide-react';
import { Input } from '../../ui/input';

const LayoutHeader = () => {
  return (
    <>
      <header className='flex gap-4 items-center mb-2'>
        <h1 className='flex items-center gap-2 text-white font-black text-2xl'>
          <CloudSunRain strokeWidth={3} />
          Weather.io
        </h1>
        <div className='relative h-auto'>
          <SearchIcon
            size={16}
            color='black'
            className='absolute top-1/2 left-2 transform -translate-y-1/2'
          />
          <Input
            className='w-[400px] bg-white pl-8'
            placeholder='검색할 지역 이름을 입력해주세요.'
          />
        </div>
      </header>
    </>
  );
};

export default LayoutHeader;
