"use client";

import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import PaginaIdigital from "./pagina-idigital/page";

export default function Home() {
  const [nextOptScript, setNextOptScript] = useState(null);
  const [nextGtmOpt, setGtmOpt] = useState(null);

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

  const nextInlineScript = (
    <>
      <Script
        id="nextOptScript"
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

  // useEffect(() => {
  //   setNextOptScript(
  //     (
  //       <>
  //         <script>
  //           {`!function(f,b,e,v,n,t,s)
  //         {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  //         n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  //         if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  //         n.queue=[];t=b.createElement(e);t.async=!0;
  //         t.src=v;s=b.getElementsByTagName(e)[0];
  //         s.parentNode.insertBefore(t,s)}(window, document,'script',
  //         'https://connect.facebook.net/en_US/fbevents.js');
  //         fbq('init', '317000867449369');
  //         fbq('track', 'PageView');`}
  //         </script>
  //         <noscript>
  //           <img
  //             height="1"
  //             width="1"
  //             style={{ display: "none" }}
  //             src="https://www.facebook.com/tr?id=317000867449369&ev=PageView&noscript=1"
  //           />
  //         </noscript>
  //       </>
  //     ) as any
  //   );
  // }, []);

  const lariScript = (
    <script>
      {`
    {/* // Exemplo de criptografia e descriptografia usando o algoritmo AES */}
   
    `}
    </script>
  );

  const htmlGtm = (
    <script>
      {`
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-5T9BZRGT");`}
    </script>
  );

  const nextOptGtm = (
    <script>
      {`
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-5T9BZRGT");`}
    </script>
  );

  return (
    <>
      <Head>
        {/* <script>
        {`
        async function encryptAndDecrypt() { 
            const data = !function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '317000867449369'); fbq('track', 'PageView');;

            const key = await crypto.subtle.generateKey( 
                { name: "AES-GCM", length: 256 }, 
                true, 
                ["encrypt", "decrypt"] 
            ); 

            const encodedData = new TextEncoder().encode(data); 

            const encryptedData = await crypto.subtle.encrypt( 
                { name: "AES-GCM", iv: new Uint8Array(12) }, 
                key, 
                encodedData 
            ); 

            const decryptedData = await crypto.subtle.decrypt( 
                { name: "AES-GCM", iv: new Uint8Array(12) }, 
                key, 
                encryptedData 
            ); 

            const decryptedText = new TextDecoder().decode(decryptedData); 
            return decryptedText; // Retorna o texto decifrado 
        } 

        (async () => {
            const decryptedContent = await encryptAndDecrypt(); 
            document.write(decryptedContent);
        })()`}
      </script> */}
        {/* <>{document.write(decryptedContent as any)}</> */}

        {/* {htmlScript} */}
        {/* {nextInlineScript} */}
        {/* {nextOptScript} */}
        {/* {lariScript} */}
        {/* <iframe src="/pixel" frameBorder="0"></iframe> */}
      </Head>
      {/* <PaginaIdigital /> */}
      <iframe
        src="https://thunderous-muffin-9e4653.netlify.app/pagina-idigital"
        frameBorder="0"
        // height="1"
        // width="1"
      ></iframe>
      {/* <h1>Cliente</h1> */}
    </>
  );
}
