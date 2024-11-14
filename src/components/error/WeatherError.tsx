import { FallbackProps } from '@/components/error/ErrorBoundary';

export class WeatherError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'WeatherError';
  }
}

export const WeatherFallback = ({ error }: FallbackProps) => {
  console.log('WeatherFallback has been called,like', error);
  return <></>;
};
