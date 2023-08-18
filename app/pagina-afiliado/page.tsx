"use client"
import Head from "next/head";
import Script from "next/script";
import { useEffect } from 'react';

const PaginaAfiliado = () => {
  useEffect(() => {}, [

  ])
  
  const htmlScript = (
    <>
      <script>
        {`!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '317000867449369');
      fbq('track', 'PageView');`}
      </script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=317000867449369&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  );

  const nextScript = (
    <>
      <Script
        id="nextScript"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '317000867449369');
          fbq('track', 'PageView');`,
        }}
      ></Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=317000867449369&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  );

  const lariScript = (
    <script>
      {`
    {/* // Exemplo de criptografia e descriptografia usando o algoritmo AES */}
   
    `}
    </script>
  );

  return (
    <>
      <Head>
        {/* {decryptedContent}
      <>{document.write(decryptedContent as any)}</> */}
        {/* {htmlScript} */}
        {/* {lariScript} */}
      </Head>

      {nextScript}
      <h1>Afiliado</h1>
    </>
  );
};

export default PaginaAfiliado;
