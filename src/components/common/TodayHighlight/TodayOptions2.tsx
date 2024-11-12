import Wave from '../TodayHighlight/Icon/wave.svg?react';
const TodayOptions2 = ({
  first,
  second,
  third,
}: {
  first: string;
  second: string;
  third: string;
}) => {
  return (
    <>
      <div className='border border-zinc-200 bg-zinc-50 col-span-2 p-6 rounded-lg flex flex-col gap-4'>
        <div className='flex items-center gap-1 '>
          <h3 className='text-base font-bold tracking-tighter'>
            해양 및 조수 데이터
          </h3>
          <span className='text-zinc-600 text-sm'>Marine and Sailing</span>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='rounded-full w-auto h-auto'>
            <Wave width={48} height={48} />
          </div>
          <div className='flex flex-col gap-0.5 justify-center'>
            <p className='text-zinc-400 text-sm font-medium text-center'>
              1회 - 만조
            </p>
            <h3 className='text-zinc-800 font-bold text-lg'>{first}</h3>
          </div>
          <div className='flex flex-col gap-0.5 justify-center'>
            <p className='text-zinc-400 text-sm font-medium text-center'>
              2회 - 간조
            </p>
            <h3 className='text-zinc-800 font-bold text-lg'>{second}</h3>
          </div>
          <div className='flex flex-col gap-0.5 justify-center'>
            <p className='text-zinc-400 text-sm font-medium text-center'>
              3회 - 만조
            </p>
            <h3 className='text-zinc-800 font-bold text-lg'>{third}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayOptions2;
