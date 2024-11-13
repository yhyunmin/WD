import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: '4f161d8b02112b45ddb393e4901de967',
    libraries: ['clusterer', 'drawing', 'services'],
  });
}
