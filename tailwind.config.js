/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        thin: ['Pretendard-Thin', 'sans-serif'],
        extralight: ['Pretendard-ExtraLight', 'sans-serif'],
        light: ['Pretendard-Light', 'sans-serif'],
        regular: ['Pretendard-Regular', 'sans-serif'],
        medium: ['Pretendard-Medium', 'sans-serif'],
        semibold: ['Pretendard-SemiBold', 'sans-serif'],
        bold: ['Pretendard-Bold', 'sans-serif'],
        extrabold: ['Pretendard-ExtraBold', 'sans-serif'],
        black: ['Pretendard-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
