import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import TodayCard from '@/components/home/TodayWidget';
import HourlyCard from '@/components/home/HourlyWidget';
import { Card } from '@/components/ui/card';
import TodayHighlight from '@/components/home/HighlightWidget';
import WeeklyCard from '@/components/home/WeeklyWidget';
import Header from '@/components/layout/Header';

const HomePage = () => {
  useKakaoLoader();
  return (
    <>
      <main id="main" className="w-dvh h-dvh overflow-hidden bg-zinc-900 p-4 antialiased">
        <Header />
        <div className="h-full w-full gap-2 p-3">
          <section className="grid grid-cols-4 grid-rows-3 gap-4">
            <article className="col-span-1 row-span-1">
              <TodayCard />
            </article>
            <article className="col-span-2 row-span-1">
              {/* hourly */}
              <HourlyCard />
            </article>
            <article className="col-span-1 row-span-1">
              {/* map */}
              <Card className="h-full min-w-[268px]">
                <Map
                  id="map"
                  center={{
                    /** 지도의 중심좌표 */
                    lat: 37.5683,
                    lng: 126.9778,
                  }}
                  style={{
                    /** 지도의 크기 */
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                  }}
                  /** 지도의 확대 레벨 */
                  level={13}
                />
              </Card>
            </article>
            <article className="col-span-3 row-span-2">
              {/* today's highlights */}
              <TodayHighlight />
            </article>
            <article className="col-span-1 row-span-2">
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
