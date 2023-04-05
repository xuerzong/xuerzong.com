import Script from 'next/script'

export const GA_ID = 'G-K73J0X0TZ2'

/* eslint-disable */
const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
              }
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
      </Script>
    </>
  )
}

export default GoogleAnalytics
