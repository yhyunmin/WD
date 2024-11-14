export interface Weather {
  current: Current;
  location: Location;
  forecast: { forecastday: ForecastDay[] };
}

export interface ForecastTideDay {
  astro: {
    is_moon_up: number;
    is_sun_up: number;
    moon_illumination: number;
    moon_phase: string;
    moonrise: string;
    moonset: string;
    sunrise: string;
    sunset: string;
  };
  date: string;
  date_epoch: number;
  day: {
    avghumidity: number;
    avgtemp_c: number;
    avgtemp_f: number;
    avgvis_km: number;
    avgvis_miles: number;
    condition: { text: string; icon: string; code: number };
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    daily_will_it_rain: number;
    daily_will_it_snow: number;
    maxtemp_c: number;
    maxtemp_f: number;
    maxwind_kph: number;
    maxwind_mph: number;
    mintemp_c: number;
    mintemp_f: number;
    totalprecip_in: number;
    totalprecip_mm: number;
    totalsnow_cm: number;
    uv: number;
    tides: [
      {
        tide: Tide[];
      },
    ];
  };
  hour: hourlyData[];
}
type WeatherCondition =
  | 'Sunny'
  | 'Partly cloudy'
  | 'Cloudy'
  | 'Overcast'
  | 'Mist'
  | 'Patchy rain possible'
  | 'Patchy snow possible'
  | 'Patchy sleet possible'
  | 'Patchy freezing drizzle possible'
  | 'Thundery outbreaks possible'
  | 'Blowing snow'
  | 'Blizzard'
  | 'Fog'
  | 'Freezing fog'
  | 'Patchy light drizzle'
  | 'Light drizzle'
  | 'Freezing drizzle'
  | 'Heavy freezing drizzle'
  | 'Patchy light rain'
  | 'Light rain'
  | 'Moderate rain at times'
  | 'Moderate rain'
  | 'Heavy rain at times'
  | 'Heavy rain'
  | 'Light freezing rain'
  | 'Moderate or heavy freezing rain'
  | 'Light sleet'
  | 'Moderate or heavy sleet'
  | 'Patchy light snow'
  | 'Light snow'
  | 'Patchy moderate snow'
  | 'Moderate snow'
  | 'Patchy heavy snow'
  | 'Heavy snow'
  | 'Ice pellets'
  | 'Light rain shower'
  | 'Moderate or heavy rain shower'
  | 'Torrential rain shower'
  | 'Light sleet showers'
  | 'Moderate or heavy sleet showers'
  | 'Light snow showers'
  | 'Moderate or heavy snow showers'
  | 'Light showers of ice pellets'
  | 'Moderate or heavy showers of ice pellets'
  | 'Patchy light rain with thunder'
  | 'Moderate or heavy rain with thunder'
  | 'Patchy light snow with thunder'
  | 'Moderate or heavy snow with thunder'
  | '';

export interface Current {
  cloud: number;
  condition: {
    text: WeatherCondition;
    icon: string;
    code: number;
  };
  dewpoint_c: number;
  dewpoint_f: number;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  heatindex_c: number;
  heatindex_f: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
  windchill_c: number;
  windchill_f: number;
}

export interface Location {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
}

export interface ForecastDay {
  astro: {
    is_moon_up: number;
    is_sun_up: number;
    moon_illumination: number;
    moon_phase: string;
    moonrise: string;
    moonset: string;
    sunrise: string;
    sunset: string;
  };
  date: string;
  date_epoch: number;
  day: {
    avghumidity: number;
    avgtemp_c: number;
    avgtemp_f: number;
    avgvis_km: number;
    avgvis_miles: number;
    condition: { text: string; icon: string; code: number };
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    daily_will_it_rain: number;
    daily_will_it_snow: number;
    maxtemp_c: number;
    maxtemp_f: number;
    maxwind_kph: number;
    maxwind_mph: number;
    mintemp_c: number;
    mintemp_f: number;
    totalprecip_in: number;
    totalprecip_mm: number;
    totalsnow_cm: number;
    uv: number;
  };
  hour: hourlyData[];
}

export interface hourlyData {
  chance_of_rain: number;
  chance_of_snow: number;
  cloud: number;
  condition: { text: string; icon: string; code: number };
  dewpoint_c: number;
  dewpoint_f: number;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  heatindex_c: number;
  heatindex_f: number;
  humidity: number;
  is_day: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  snow_cm: number;
  temp_c: number;
  temp_f: number;
  time: string;
  time_epoch: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  will_it_rain: number;
  will_it_snow: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
  windchill_c: number;
  windchill_f: number;
}

export interface Tide {
  tide_height_mt: string;
  tide_time: string;
  tide_type: string;
}
