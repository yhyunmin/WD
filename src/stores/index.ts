import { defaultTideData, defaultWeatherData } from '@/constants';
import { ForecastTideDay, Weather } from '@/types';
import { atom } from 'jotai';

export const cityNameAtom = atom<string>('seoul');

export const weatherDataAtom = atom<Weather>(defaultWeatherData);
export const tideDataAtom = atom<ForecastTideDay>(defaultTideData);
