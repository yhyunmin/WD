import { WeatherError } from '@/components/error/WeatherError';
import { API_KEY, BASE_URL } from '@/services/api/config';
import { ForecastTideDay, Weather } from '@/types';
import ky from 'ky';

export const weatherApi = {
  // 날씨 조회
  async fetchData(localName: string, days: string = '1') {
    const searchParams = new URLSearchParams();
    searchParams.set('key', API_KEY);
    searchParams.set('q', localName);
    searchParams.set('days', days);
    try {
      const data = await ky.get(`${BASE_URL}/forecast.json`, { searchParams }).json<Weather>();
      return data;
    } catch (e) {
      throw new WeatherError('날씨 정보를 불러오는데 실패했습니다.');
    } finally {
      console.log('weatherApi.fetchData(날씨) called');
    }
  },
  // 조수간만 조회
  async fetchTideData(localName: string, days: string = '1') {
    const searchParams = new URLSearchParams();
    searchParams.set('key', API_KEY);
    searchParams.set('q', localName);
    searchParams.set('days', days);
    try {
      const data = await ky.get(`${BASE_URL}/marine.json`, { searchParams }).json<Weather>();
      return data;
    } catch (e) {
      throw new WeatherError('조수간만 정보를 불러오는데 실패했습니다.');
    } finally {
      console.log('weatherApi.fetchTideData(조수간만) called');
    }
  },
};
