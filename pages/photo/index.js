import React, { Component } from 'react';
import { Gpt } from 'react-gpt-ads';
import Head from 'next/head';

export default function Photo(){
    return(
        <>
         <Head>
        {/* <title>Fashion News: Latest Fashion</title> */}
        <script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script>
    </Head>
        <div>Photo is working</div>
        <Gpt 
        adUnit="/1007232/HarperBazaar_HP_300x250-728x90_ATF"
        name="ad-name"
        size={[300, 250]}
    />
    </>
    )
}


// import React, { Component } from 'react';
// import Ad from 'react-google-publisher-tag';

// export default class Photo extends Component {
//   render() {
//     return (
//       <div id="application">
//         <Ad path="/network-code/ad-code" />
//         <RouteHandler />
//       </div>
//     );
//   }
// }

