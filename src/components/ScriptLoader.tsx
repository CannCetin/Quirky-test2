'use client';
import Script from 'next/script';

export default function ScriptLoader() {
  return (
    <>
      <Script 
        src="/js/jquery.js"
        strategy="beforeInteractive"
      />
      <Script 
        src="/js/site.js"
        strategy="afterInteractive"
      />
    </>
  );
}