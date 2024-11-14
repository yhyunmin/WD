import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import TodayCard from '@/components/home/TodayWidget';
import HourlyCard from '@/components/home/HourlyWidget';
import { Card } from '@/components/ui/card';
import TodayHighlight from '@/components/home/HighlightWidget';
import WeeklyCard from '@/components/home/WeeklyWidget';
import Header from '@/components/layout/Header';
import { useEffect, useState } from 'react';
import { Weather } from '@/types';
import { useAtom } from 'jotai';
import { cityNameAtom, tideDataAtom } from '@/stores';
import { weatherApi } from '@/services/api/weatherApi';
import { defaultWeatherData } from '@/constants';

const positions = [
  {
    cityName: 'seoul',
    latlng: { lat: 37.5683, lng: 126.9778 },
  },
  {
    cityName: 'incheon',
    latlng: { lat: 37.4562557, lng: 126.7052062 },
  },
  {
    cityName: 'gwangju',
    latlng: { lat: 35.1599785, lng: 126.8513072 },
  },
  {
    cityName: 'daejeon',
    latlng: { lat: 36.3504567, lng: 127.3848187 },
  },
  {
    cityName: 'cheongju',
    latlng: { lat: 36.6358093, lng: 127.4913338 },
  },
  {
    cityName: 'daegu',
    latlng: { lat: 35.8715411, lng: 128.601505 },
  },
  {
    cityName: 'ulsan',
    latlng: { lat: 35.5396224, lng: 129.3115276 },
  },
  {
    cityName: 'busan',
    latlng: { lat: 35.179665, lng: 129.0747635 },
  },
];
const HomePage = () => {
  const [weatherData, setWeatherData] = useState<Weather>(defaultWeatherData);
  const [weeklyData, setWeeklyData] = useState<any>(defaultWeatherData);
  const [cityName, setCityName] = useAtom(cityNameAtom);
  const [_, setTideData] = useAtom(tideDataAtom);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  useKakaoLoader();

  useEffect(() => {
    // setIsLoading(true);
    weatherApi.fetchData(cityName, '1').then((w) => {
      setWeatherData(w);
    });
    weatherApi.fetchTideData(cityName, '1').then((t) => {
      setTideData(t.forecast.forecastday[0]);
    });
    weatherApi.fetchData(cityName, '7').then((w) => {
      setWeeklyData(w);
    });
    // } catch (e) {}
    // setIsLoading(false);
  }, [cityName]);

  return (
    <>
      <main id="main" className="w-dvh h-dvh overflow-hidden bg-zinc-900 p-4 antialiased">
        <Header />
        {/* {isLoading && <div className="flex h-full w-full items-center justify-center bg-transparent text-black">Loading</div>} */}
        <div className="h-full w-full gap-2 p-3">
          <section className="grid grid-cols-4 grid-rows-3 gap-4">
            <article className="col-span-1 row-span-1">
              <TodayCard data={weatherData} />
            </article>
            <article className="col-span-2 row-span-1">
              {/* hourly */}
              <HourlyCard data={weatherData.forecast.forecastday[0]} />
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
                >
                  {positions.map((position, _) => (
                    <MapMarker
                      key={`${position.cityName}-${position.latlng}`}
                      position={position.latlng} // 마커를 표시할 위치
                      image={{
                        src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
                        size: {
                          width: 24,
                          height: 35,
                        }, // 마커이미지의 크기입니다
                      }}
                      title={position.cityName} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다.
                      clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                      onClick={(marker) => setCityName(marker.getTitle())}
                    />
                  ))}
                </Map>
              </Card>
            </article>
            <article className="col-span-3 row-span-2">
              {/* today's highlights */}
              <TodayHighlight data={weatherData.forecast.forecastday[0]} current={weatherData.current} />
            </article>
            <article className="col-span-1 row-span-2">
              {/* 7days */}
              <WeeklyCard data={weeklyData.forecast} />
            </article>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
