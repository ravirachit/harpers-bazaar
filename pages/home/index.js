import React from 'react';
import Head from 'next/head';

// Images
// const banner_img = './assets/images/banner.png';
const add_img = './assets/images/add.png';
const FashionAdd = './assets/images/fashionadd.png';
const cultureAdImg = './assets/images/300x250.png';

export default function Home({homeData}){
    console.log("homeData- ", homeData);
    return(
       <>
        <Head>
        <title>Lifestyle News: Latest Lifestyle</title>
      </Head>

<h1>Home page working but api is not working when deployed...</h1>

            {/* Add Section */}
         <div className="add_wrapper">
                    <img src={add_img} alt="add" />
        </div>
        {/* <div>{homeData}</div> */}
           
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
//     const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/template?name=home`)
//     const homeData = await res.json()
//     return {
//         props: { homeData, },
//       };
// }

Home.getInitialProps = async()=>{
    const res = await fetch(`https://reqres.in/api/users`)
    const homeData = await res.json()
    return {homeData:homeData};
}
