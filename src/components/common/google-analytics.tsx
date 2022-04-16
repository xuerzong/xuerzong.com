import { DEV } from '@/constants/config';

export const GoogleAnalytics = () => {
  if (DEV) {
    return null;
  }
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-K73J0X0TZ2"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K73J0X0TZ2');
        `,
        }}
      />
    </>
  );
};
