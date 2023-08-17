import Head from 'next/head';
import React from 'react'

const Pixel = () => {
  return (
    <Head>
      {/* <!-- Meta Pixel Code --> */}
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
      {/* <!-- End Meta Pixel Code --> */}


      <script>
        {`
    {/* // Exemplo de criptografia e descriptografia usando o algoritmo AES */}
    async function encryptAndDecrypt() {
      const data = \`
        // <!-- Offer Conversion: Zeis - CPL -->
        <iframe src="https://igoal.go2cloud.org/aff_l?offer_id=5805&adv_sub=SUB_ID" scrolling="no" frameborder="0" width="1" height="1">
        adserver
        </iframe>
        // <!-- // End Offer Conversion -->\`;

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

    const decryptedContent = encryptAndDecrypt();
    document.write(decryptedContent);
    `}
  </script>
    </Head>
  );
}

export default Pixel