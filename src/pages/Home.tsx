import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import TodayCard from '@/components/home/TodayWidget';
import HourlyCard from '@/components/home/HourlyWidget';
import { Card } from '@/components/ui/card';
import TodayHighlight from '@/components/home/HighlightWidget';
import WeeklyCard from '@/components/home/WeeklyWidget';
import Header from '@/components/layout/Header';
import ky from 'ky';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Weather } from '@/types';

const defaultWeatherData: Weather = {
  current: {
    cloud: 0,
    condition: { text: '', icon: '', code: 0 },
    dewpoint_c: 0,
    dewpoint_f: 0,
    feelslike_c: 0,
    feelslike_f: 0,
    gust_kph: 0,
    gust_mph: 0,
    heatindex_c: 0,
    heatindex_f: 0,
    humidity: 0,
    is_day: 1,
    last_updated: '',
    last_updated_epoch: 0,
    precip_in: 0,
    precip_mm: 0,
    pressure_in: 0,
    pressure_mb: 0,
    temp_c: 0,
    temp_f: 0,
    uv: 0,
    vis_km: 0,
    vis_miles: 0,
    wind_degree: 0,
    wind_dir: '',
    wind_kph: 0,
    wind_mph: 0,
    windchill_c: 0,
    windchill_f: 0,
  },
  location: {
    country: '',
    lat: 0,
    localtime: '',
    localtime_epoch: 0,
    lon: 0,
    name: '',
    region: '',
    tz_id: '',
  },
  forecast: { forecastday: [] },
};

const HomePage = () => {
  const [weatherData, setWeatherData] = useState<Weather>(defaultWeatherData);

  const fetchApi = async (localName = 'seoul') => {
    const API_KEY = '0edfdbe00574410899c10501241411';
    const BASE_URL = 'https://api.weatherapi.com/v1/forecast';
    // https://api.weatherapi.com/v1/forecast.json?key=0edfdbe00574410899c10501241411&q=seoul
    const URL = `${BASE_URL}.json?key=${API_KEY}&q=${localName}`;
    const searchParams = new URLSearchParams();
    searchParams.set('key', API_KEY);
    searchParams.set('q', localName);
    try {
      //await axios.get(BASE_URL);
      // const data = await ky(URL).json();
      //       if(res.status ===200){
      // setWeatherData(res.data);
      //       }
      const data = await ky.get(`${URL}current.json`, { searchParams }).json<Weather>();
      console.log(data);
      console.log(data.forecast.forecastday);
      setWeatherData(data);
    } catch (e) {
      console.error(e);
    } finally {
      console.log('fetchAPI called');
    }
  };
  useKakaoLoader();
  useLayoutEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <main id="main" className="w-dvh h-dvh overflow-hidden bg-zinc-900 p-4 antialiased">
        <Header />
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
