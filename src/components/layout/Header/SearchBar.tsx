import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative h-auto">
      <SearchIcon size={16} color="black" className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
      <Input className="w-[400px] bg-white pl-8" placeholder="검색할 지역 이름을 입력해주세요." />
    </div>
  );
};

export default SearchBar;
