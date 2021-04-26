import React from 'react';
import Head from 'next/head';

import useDfpSlot from './useDfpSlot';

// Images
// const banner_img = './assets/images/banner.png';
const add_img = './assets/images/add.png';
const FashionAdd = './assets/images/fashionadd.png';
const cultureAdImg = './assets/images/300x250.png';

export default function Home({homeData}){
  useDfpSlot({
    path: '/1007232/HarperBazaar_HP_300x250-728x90_ATF',
    size: [[728,90],[300,250],[970,90]],
    id: 'div-gpt-ad-6326067-1',
  });
    // console.log("homeData- ", homeData);
    return(
       <>
        <Head>
        <title>Lifestyle News: Latest Lifestyle</title>
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
      </Head>
      <div id="div-gpt-ad-6326067-1" style={{ width: '320px', height: '100px' }}/>
            {/* Add Section */}
         <div className="add_wrapper">
                    <img src={add_img} alt="add" />
        </div>
        {/* <div>{homeData}</div> */}

        <h1>Home page is working</h1>
           
            </>
    )
}

// export async function getStaticProps(){
//     const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/template?name=home`)
//     const homeData = await res.json()
//     return {
//         props: { homeData, },
//       };
// }

// export async function getServerSideProps(){
//     const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/template?name=home`,function (req, res) {
//         res.header("Access-Control-Allow-Origin", "http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/template?name=home")})
//     const homeData = await res.json()
//     return {
//         props: { homeData, },
//       };
// }

// Home.getInitialProps = async()=>{
//     const res = await fetch(`https://reqres.in/api/users`)
//     const homeData = await res.json()
//     return {homeData:homeData};
// }
