import HourlyCard from '../components/common/HourlyCard';
import WeeklyCard from '../components/common/WeeklyCard';
import LayoutHeader from '../components/common/layout/LayoutHeader';
import TodayHighlight from '../components/common/layout/TodayHighlight';
import { Card } from '../components/ui/card';
import TodayCard from './../components/common/TodayCard';

const HomePage = () => {
  return (
    <>
      <main
        id='main'
        className='w-dvh h-dvh bg-zinc-900 p-4 overflow-hidden antialiased '>
        <LayoutHeader />
        <div className='gap-2 w-full h-full p-3 '>
          <section className='grid grid-cols-4 grid-rows-3 gap-4'>
            <article className='col-span-1 row-span-1 '>
              <TodayCard />
            </article>
            <article className='col-span-2 row-span-1'>
              {/* hourly */}
              <HourlyCard />
            </article>
            <article className='col-span-1 row-span-1'>
              {/* map */}
              <Card className='bg-zinc-400 h-full min-w-[268px]'></Card>
            </article>
            <article className='col-span-3 row-span-2'>
              {/* today's highlights */}
              <TodayHighlight />
            </article>
            <article className='col-span-1 row-span-2'>
              {/* 7days */}
              <WeeklyCard />
            </article>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
