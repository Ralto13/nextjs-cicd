# manual install

수정중

```shell
npm install next@14 react@18 react-dom@18
npm install -D typescript @types/react @types/node @types/react-dom @types/jest
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-jest
```

# vercel monitoring

```shell
npm i @vercel/speed-insights
```

- speedinsights 추가
  [link](https://vercel.com/docs/speed-insights/quickstart#add-the-speedinsights-component-to-your-app)

```javascript
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
```
