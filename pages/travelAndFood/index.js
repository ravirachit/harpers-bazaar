import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import Head from 'next/head';
import {Bling as GPT} from "react-gpt";

GPT.enableSingleRequest();
// Images
const Ads = './assets/images/add.png';
const short_Ads = './assets/images/300x250.png';
const backArrowImg = './assets/images/backarrow.png';

export default function TravelAndFood({travelAndFoodData}){
   return(
    <>
    <Head>
        <title>Travel News: Latest Travel news</title>
        <script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script>
    </Head>
    {/* ads section */}
    <div className="add_wrapper">
    <div id="div-gpt-ad-6326067-1">
                <GPT
                    adUnitPath="/1007232/HarperBazaar_HP_300x250-728x90_ATF"
                    slotSize={[728, 90]}
                />
            </div>
    </div>

    {/* Navigation */}
    <div className="nevigation_section">
            <div className="container">
                <a href="www.facebook.com" className="active">Home  </a>
                <span> <img src={backArrowImg} alt="back" /></span>
                <a href="www.facebook.com">{travelAndFoodData.data.feed[0].primary_section_name}</a>
            </div>
        </div>

         {/* Heading */}
         <h1 className="tittle_text"><span>{travelAndFoodData.data.feed[0].primary_section_name}</span></h1>

         <section className="content_wrapper">
                <div className="container">
                    <div className="content_inner">
                        <div className="content_left">
            
                        {/* Fashion */}     
                        <div className="fashion_top">
                            <figure>
                            <img src={travelAndFoodData.data.feed[0].feature_image_data.url} alt="fashion_img_main" />
                            </figure>
                            <Link href={'/story/'+travelAndFoodData.data.feed[0].url.slice(travelAndFoodData.data.feed[0].url.length - 4)}><h3>{travelAndFoodData.data.feed[0].headline}</h3></Link>
                        </div> 
                        </div>	                                  	
            <div className="content_right">
                {/* Small ADS */}
            <figure className="add_box">
            <div id="div-gpt-ad-6326067-2">
                                <GPT
                                    adUnitPath="/1007232/HarperBazaar_HP_300x250_MTF"
                                    slotSize={[300, 250]}
                                />
                                </div>
            </figure>

            {/* rhs story */}
            <h4>Must Read</h4>
            <div className="right_card">
                <figure><img src={travelAndFoodData.data.feed[1].feature_image_data.url} alt="rhs_img" /></figure>
                <p><Link href={'/story/1992'}>{travelAndFoodData.data.feed[1].headline}</Link></p>
            </div>
			</div>
            </div>
            <ul className="section_list">
            {
                travelAndFoodData.data.feed.slice(2).map((travelAndFood)=>{
                    return(
                        <li>
                        <div className="list_detail">
                            <strong>{moment(travelAndFood.updated_at).format("MMM DD, YYYY")}</strong>
                            <h3><Link href={'/story/1992'}>{travelAndFood.headline}</Link></h3>
                            <p>{travelAndFood.introtext}</p>
                            <Link href="/author/bazaar-india/"><span>By {travelAndFood.author_data[0].author_name}</span></Link>
                        </div>
                        <figure className="list_pic">
                            <img src={travelAndFood.feature_image_data.url} alt="list_img1"/>
                        </figure>
                    </li> 
                    )
                })
            }
				 </ul>
            </div>
		</section>
        <div className="add_wrapper">
                <div id="div-gpt-ad-6326067-3">
                    <GPT
                        adUnitPath="/1007232/HarperBazaar_HP_728x90-300x250_BTF"
                        slotSize={[800, 450]}
                    />
                </div>
        </div>
        </>
   )
}

export async function getStaticProps(){
    // const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/latest?section=travel-food&section_level=0content_type=all&page=1&limit=10&order_by=publish_up%20desc&app=all`)
    const travelAndFoodData = {
        "data": {
          "feed": [
            {
              "content_id": 1987,
              "apps_id": "1",
              "post_types_id": "4",
              "content_type": "photo",
              "headline": "The 10 Best Jungle Resorts Around the World",
              "introtext": "Swing above the treetops or trek through the undergrowth and create your tropical adventure to a soundtrack of humming cicadas, trumpeting elephants, and the chatter of rose-faced parrots. Our pick of the best jungle resorts around the world.",
              "fulltext": "",
              "amp_fulltext": "",
              "category_trail": [
                {
                  "id": 4,
                  "title": "Travel & Food",
                  "slug": "travel-food",
                  "parent": "0"
                }
              ],
              "primary_section_id": 4,
              "primary_section_name": "Travel & Food",
              "primary_section_slug": "travel-food",
              "primary_id": "4",
              "primary_id_name": "Travel & Food",
              "primary_id_slug": "travel-food",
              "url": "/travel-food/photo/welcome-to-jungle-1987",
              "full_url": "https://alpha-harperbazar.intoday.in/travel-food/photo/welcome-to-jungle-1987",
              "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/travel-food/photo/welcome-to-jungle-1987",
              "slug": "welcome-to-jungle",
              "excerpt": "Swing above the treetops or trek through the undergrowth and create your tropical adventure to a soundtrack of humming cicadas, trumpeting elephants, and the chatter of rose-faced parrots. Our pick of the best jungle resorts around the world.",
              "publish_up": "2020-12-11 18:13:00",
              "publish_down": null,
              "metatitle": "Welcome To Jungle",
              "metadesc": "Swing above the treetops or trek through the undergrowth and create your tropical adventure to a soundtrack of humming cicadas, trumpeting elephants, and the chatter of rose-faced parrots. Our pick of the best jungle resorts around the world.",
              "metakey": "",
              "highlights": "",
              "rating": "",
              "review_title": "",
              "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "review_pros": "",
              "review_cons": "",
              "feature_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "feature_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "vertical_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "feature_image_lazy": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "vertical_image_lazy": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "author_data": [
                {
                  "authors_id": "1",
                  "author_name": "Bazaar India",
                  "author_slug": "bazaar-india",
                  "author_image": ""
                }
              ],
              "section_data": "",
              "created_at": "2020-12-01T07:33:39.000000Z",
              "created_by_id": "13",
              "created_by_name": "prachi goyal",
              "cache_time": "03/05/2021 04:20:10 pm",
              "updated_at": "2020-12-15 18:11:02",
              "galleries": [
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img89011220070943.jpeg",
                  "extra": {
                    "text": "img89011220070943",
                    "caption": "",
                    "alt_text": "",
                    "description": ""
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img87011220070942.jpeg",
                  "extra": {
                    "text": "img87011220070942",
                    "caption": "",
                    "alt_text": "",
                    "description": "<p>Chasing waterfalls</p>\n\n<p>Situated inside Brazil&rsquo;s Igua&ccedil;u<br />\nNational Park&mdash;home to<br />\nendangered animals including<br />\njaguars and giant anteaters&mdash;the<br />\nBelmond Hotel das Cataratas<br />\noffers guests a private view of the<br />\nmajestic Igua&ccedil;u Falls at dusk when<br />\nthe park closes. By day, lounge<br />\nbeside the pool, where waiters<br />\ncirculate with chilled coconuts,<br />\nhead to the spa for a massage, or,<br />\nfor young families, take full<br />\nadvantage of the kids&rsquo; club.</p>\n\n<p><br />\nBelmond.com</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img86011220070942.jpeg",
                  "extra": {
                    "text": "img86011220070942",
                    "caption": "",
                    "alt_text": "",
                    "description": ""
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img85011220070942.jpeg",
                  "extra": {
                    "text": "img85011220070942",
                    "caption": "",
                    "alt_text": "",
                    "description": ""
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img84011220070942.jpeg",
                  "extra": {
                    "text": "img84011220070942",
                    "caption": "",
                    "alt_text": "",
                    "description": "<p>Stream of consciousness</p>\n\n<p>Wake to the sight of grazing beasts by your bed in one of the &lsquo;jungle bubbles&rsquo; at Anantara Golden Triangle Elephant Camp. From your perch on the banks of the Ruak River, you&rsquo;ll gaze out through the transparent roof to enjoy majestic vistas where Thailand, Laos, and Myanmar meet. Anantara.com</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img83011220070942.jpeg",
                  "extra": {
                    "text": "img83011220070942",
                    "caption": "",
                    "alt_text": "",
                    "description": "<p>A vibrant palette</p>\n\n<p>You&rsquo;ll find a box of watercolours in each of the 36 suites at Amanjiwo,<br />\na delightful gift to help you capture Java&rsquo;s fertile landscape or sketch<br />\nthe beautifully restored Borobudur Temple, which is clearly visible from the hotel&rsquo;s sweeping terraces.</p>\n\n<p>Aman.com</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img82011220070942.jpeg",
                  "extra": {
                    "text": "img82011220070942",
                    "caption": "",
                    "alt_text": "",
                    "description": "<p>Rainforest rejuvenation</p>\n\n<p>The newly refurbished Ena Spa at Inkaterra Reserva Amaz&oacute;nica (where every guest is promised a fully carbon-neutral stay) offers treatments that combine ancient Peruvian techniques with local ingredients such as cat&rsquo;s claw, a woody vine that can help to purify and cleanse the body. Inkaterra.com</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img81011220070942.jpeg",
                  "extra": {
                    "text": "img81011220070942",
                    "caption": "",
                    "alt_text": "",
                    "description": ""
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img80011220070942.jpeg",
                  "extra": {
                    "text": "img80011220070942",
                    "caption": "",
                    "alt_text": "",
                    "description": ""
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img79011220070941.jpeg",
                  "extra": {
                    "text": "img79011220070941",
                    "caption": "",
                    "alt_text": "",
                    "description": "<p>Head in the clouds</p>\n\n<p>The sensational Mashpi Lodge, a three-hour drive from Quito,<br />\nEcuador&rsquo;s capital, sits in the heart of the South American rainforest<br />\nin one of the wettest, most exhilarating, and ethereally beautiful</p>\n\n<p>environments in the world. On the other side of the huge plate-<br />\nglass windows that separate the deceptively minimalist guest-<br />\nrooms from the forest, the cloud-drifts curl, coil, twist, and float</p>\n\n<p>between the hills, valleys, and ancient trees&mdash;some planted seven<br />\ncenturies ago&mdash;with the agility and grace of ballet dancers. Roque<br />\nSevilla, the former mayor of Quito, has saved from the widespread<br />\ndeforestation 3,000 precious acres of forest, home to 800 endemic<br />\nspecies of animal and plant life, more than 400 varieties of birds,<br />\nand 300 types of butterflies and moths. The lodge and the land<br />\nprovide a livelihood to members of the once struggling local<br />\ncommunity, who serve as charming and expert guides alongside<br />\na team of world-class botanists. Moving to the rhythm of the</p>\n\n<p>day, we joined the emerald winged hummingbird and the rose-<br />\nfaced parrots that woke with the dawn; we swung from the vines;</p>\n\n<p>we walked, rubber-booted, along the pebble floor of the Laguna<br />\nRiver, and rode high above the thick vegetation of the canopy<br />\non a sky-bicycle made for two. We marvelled at an owl moth<br />\nthe size of a fist by torchlight; and listened to the pulsating,<br />\ntransparent frog, his deep-throated croak filling the night air.<br />\nI asked our guide, Jos&eacute;, to give me his view of Mashpi, the place<br />\nwhere clouds are born. &ldquo;M&aacute;gico,&rdquo; he replied without hesitation.</p>\n\n<p>Mashpilodge.com</p>\n\n<p>By Juliet Nicolson</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img78011220070856.jpeg",
                  "extra": {
                    "text": "img78011220070856",
                    "caption": "",
                    "alt_text": "",
                    "description": ""
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img77011220070830.jpeg",
                  "extra": {
                    "text": "img77011220070830",
                    "caption": "",
                    "alt_text": "",
                    "description": ""
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img76011220070816.jpeg",
                  "extra": {
                    "text": "img76011220070816",
                    "caption": "",
                    "alt_text": "",
                    "description": "<p>Zoom to your room</p>\n\n<p>The hotel designer Bill Bensleys latest project features 16 tents&mdash;each kitted out with carved teak furniture, antique curios, and colourful textiles&mdash;set in a 400-acre reserve in Southern Cambodia that, thanks to his efforts, has been saved from poaching, mining, and logging. On arrival, more daring guests can descend into the camp on a zip-line that stretches over the Tmor Rung River and waterfall. Shintamani.com</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img75011220070804.jpeg",
                  "extra": {
                    "text": "img75011220070804",
                    "caption": "",
                    "alt_text": "",
                    "description": "<p>Burning bright in the forests of the night</p>\n\n<p>Some 110 miles from the<br />\ngilded temples of Jaipur lies the<br />\nOberoi Vanyavilas Wildlife<br />\nResort, on the border of the<br />\nRanthambore National Park,<br />\nwhich is home to the Indian<br />\ntiger. If you&rsquo;re lucky, you&rsquo;ll<br />\ncatch a glimpse of these<br />\nmagnificent creatures up close,<br />\nbut if not, the palatial tents<br />\nfurnished in antique rugs,<br />\nfour-poster beds, and claw-foot<br />\nbaths are delights enough.<br />\n<br />\nOberoihotels.com</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img74011220070650.jpeg",
                  "extra": {
                    "text": "img74011220070650",
                    "caption": "",
                    "alt_text": "",
                    "description": ""
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img72011220070644.jpeg",
                  "extra": {
                    "text": "img72011220070644",
                    "caption": "",
                    "alt_text": "",
                    "description": "<p>Ecology in the canopy</p>\n\n<p>Winding through 10-million-year-old trees that stretch upto 150 ft, the elevated walkways at the Datai Langkawi are an extraordinary attraction on their own. Recent refurbishments have bolstered the property&rsquo;s focus on sustainability: There&rsquo;s now an organic garden that grows turmeric, lemongrass, papayas, and more.</p>\n\n<p>Thedatai.com</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img70011220070618.jpeg",
                  "extra": {
                    "text": "img70011220070618",
                    "caption": "",
                    "alt_text": "",
                    "description": "<p>The sound of silence</p>\n\n<p>Deep within the cloud forest that lies across Costa Rica&rsquo;s central highlands sits the otherworldly El Silencio Lodge &amp; Spa. Here, the only noises you will hear come from nature: The call of the wood wrens, the buzzing cicadas in the trees, and the rumble of the waterfalls that pour down from the surrounding mountains. &nbsp;</p>\n\n<p>Elsilenciolodge.com</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img68011220070452.jpeg",
                  "extra": {
                    "text": "img68011220070452",
                    "caption": "",
                    "alt_text": "",
                    "description": ""
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img66011220070355.jpeg",
                  "extra": {
                    "text": "img66011220070355",
                    "caption": "",
                    "alt_text": "",
                    "description": "<p>Garden of Eden</p>\n\n<p>Brimming with lilies and lotus flowers, the rooftop pond at the Four Seasons Resort Bali at Sayan has breathtaking views of the lush Ubud jungle all around it. Fourseasons.com</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img65011220070337.jpeg",
                  "extra": {
                    "text": "img65011220070337",
                    "caption": "",
                    "alt_text": "",
                    "description": ""
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img61011220065523.jpeg",
                  "extra": {
                    "text": "img61011220065523",
                    "caption": "",
                    "alt_text": "",
                    "description": ""
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img58011220065456.jpeg",
                  "extra": {
                    "text": "img58011220065456",
                    "caption": "",
                    "alt_text": "",
                    "description": ""
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img54011220065440.jpeg",
                  "extra": {
                    "text": "img54011220065440",
                    "caption": "",
                    "alt_text": "",
                    "description": ""
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/10-013011220021130.jpeg",
                  "extra": {
                    "text": "10-013011220021130",
                    "caption": "",
                    "alt_text": "",
                    "description": ""
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/5-013-copy011220020933.jpeg",
                  "extra": {
                    "text": "5-013-copy011220020933",
                    "caption": "",
                    "alt_text": "",
                    "description": ""
                  }
                }
              ],
              "video_node": "",
              "previous_url_id": "1978"
            },
            {
              "content_id": 1946,
              "apps_id": "1",
              "post_types_id": "2",
              "content_type": "story",
              "headline": "Explore Istanbul With Digital Content Creator Leeza Mangaldas",
              "introtext": "&lt;p&gt;As we daydream about blue skies and sandy shores, avid traveller Leeza Mangaldas take us to her favourite city to satisfy our wanderlust&lt;/p&gt;",
              "fulltext": "&lt;p&gt;&amp;ldquo;All the clich&amp;eacute;s about Istanbul being the ultimate confluence of the East and the West are true. This city offers a photo opportunity on virtually every street, especially in the historical area. The obvious spots are Sultanahmet Square, Topkapi Palace, Dolmabah&amp;ccedil;e Palace, and the banks of the Bosphorus. I actually find that the so-called &amp;lsquo;Insta worthy&amp;rsquo; spots are often the most touristy and crowded, so I like to check out the hidden gems. For example, I&amp;rsquo;d avoid Taksim Square and, instead, head down some of the smaller, winding streets nearby. The Soho House in Istanbul is a great place to stay, as it is housed in a gorgeous, old Venetian palace and is extremely well located. If you&amp;rsquo;re looking to shop, do visit Serdar-i-Ekrem: a narrow street, dotted with some of the most fashionable clothes and accessories by local designers. I love bringing back local food, and Kadikoy Market offers just that&amp;mdash;here, you can find the freshest and most-delicious olives, cheese, herbs, homemade jams, spices, and more. Among the caf&amp;eacute;s that you must check out are Bilice Kebap, Aheste, and Yeni Lokanta, all in Beyoglu&amp;mdash;they serve up delicious skewered meats and kebabs. Karak&amp;ouml;y Lokantasi is excellent for a traditional Ottoman meal. Or if you&amp;rsquo;re visiting during the warm months, seafood at Rumeli Hisari Iskele, on the banks of the Bosphorus, is lovely.&amp;rdquo;&lt;/p&gt;&lt;p&gt;&lt;em&gt;&lt;img title='image--0041_112320044247.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0041_112320044247.png' alt='image--0041_112320044247.png' /&gt;&lt;/em&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;&amp;nbsp;Leeza Mangaldas, Digital Content Creator&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Do Try:&amp;nbsp;&amp;ldquo;A hammam bath is a uniquely-Turkish experience that you must consider. Kılı&amp;ccedil; Ali Paşa Hamami was built in the 16thcentury by an Ottoman admiral, and its expansive dome and marble interiors are a magnificent setting for what is to be the ultimate bath of your life. The hammam bath, itself, felt almost like a spiritual experience&amp;mdash;it&amp;rsquo;s &amp;lsquo;cleansing&amp;rsquo; in more ways than one. To lie on the warm marble platform and look at the light pouring through the dome is pretty magical.&amp;rdquo;&lt;/p&gt;&lt;p&gt;&lt;img title='image--009_112320044430.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--009_112320044430.png' alt='image--009_112320044430.png' /&gt;&lt;/p&gt;&lt;p&gt;My Tip : &amp;ldquo;Dress in layers because the temperature fluctuates quite a bit. Wear sneakers so you can walk around as much as possible. Istanbul is a fairly-casual city, so if you like travelling light, just carry your favourite classics that work well both for day and night.&amp;rdquo;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;img title='image--0011_112320044350.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0011_112320044350.png' alt='image--0011_112320044350.png' width='444'  /&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;",
              "amp_fulltext": "&lt;p&gt;&ldquo;All the clich&eacute;s about Istanbul being the ultimate confluence of the East and the West are true. This city offers a photo opportunity on virtually every street, especially in the historical area. The obvious spots are Sultanahmet Square, Topkapi Palace, Dolmabah&ccedil;e Palace, and the banks of the Bosphorus. I actually find that the so-called &lsquo;Insta worthy&rsquo; spots are often the most touristy and crowded, so I like to check out the hidden gems. For example, I&rsquo;d avoid Taksim Square and, instead, head down some of the smaller, winding streets nearby. The Soho House in Istanbul is a great place to stay, as it is housed in a gorgeous, old Venetian palace and is extremely well located. If you&rsquo;re looking to shop, do visit Serdar-i-Ekrem: a narrow street, dotted with some of the most fashionable clothes and accessories by local designers. I love bringing back local food, and Kadikoy Market offers just that&mdash;here, you can find the freshest and most-delicious olives, cheese, herbs, homemade jams, spices, and more. Among the caf&eacute;s that you must check out are Bilice Kebap, Aheste, and Yeni Lokanta, all in Beyoglu&mdash;they serve up delicious skewered meats and kebabs. Karak&ouml;y Lokantasi is excellent for a traditional Ottoman meal. Or if you&rsquo;re visiting during the warm months, seafood at Rumeli Hisari Iskele, on the banks of the Bosphorus, is lovely.&rdquo;&lt;/p&gt;&lt;p&gt;&lt;em&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0041_112320044247.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/em&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;&amp;nbsp;Leeza Mangaldas, Digital Content Creator&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Do Try:&amp;nbsp;&ldquo;A hammam bath is a uniquely-Turkish experience that you must consider. Kılı&ccedil; Ali Paşa Hamami was built in the 16thcentury by an Ottoman admiral, and its expansive dome and marble interiors are a magnificent setting for what is to be the ultimate bath of your life. The hammam bath, itself, felt almost like a spiritual experience&mdash;it&rsquo;s &lsquo;cleansing&rsquo; in more ways than one. To lie on the warm marble platform and look at the light pouring through the dome is pretty magical.&rdquo;&lt;/p&gt;&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--009_112320044430.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;&lt;p&gt;My Tip : &ldquo;Dress in layers because the temperature fluctuates quite a bit. Wear sneakers so you can walk around as much as possible. Istanbul is a fairly-casual city, so if you like travelling light, just carry your favourite classics that work well both for day and night.&rdquo;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0011_112320044350.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;",
              "category_trail": [
                {
                  "id": 4,
                  "title": "Travel & Food",
                  "slug": "travel-food",
                  "parent": "0"
                }
              ],
              "primary_section_id": 4,
              "primary_section_name": "Travel & Food",
              "primary_section_slug": "travel-food",
              "primary_id": "4",
              "primary_id_name": "Travel & Food",
              "primary_id_slug": "travel-food",
              "url": "/travel-food/story/travel-diaries--istanbul-turkey-by--leeza-mangaldas-1946",
              "full_url": "https://alpha-harperbazar.intoday.in/travel-food/story/travel-diaries--istanbul-turkey-by--leeza-mangaldas-1946",
              "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/travel-food/story/travel-diaries--istanbul-turkey-by--leeza-mangaldas-1946",
              "slug": "travel-diaries--istanbul-turkey-by--leeza-mangaldas",
              "excerpt": "&lt;p&gt;As we daydream about blue skies and sandy shores, avid traveller Leeza Mangaldas take us to her favourite city to satisfy our wanderlust&lt;/p&gt;",
              "publish_up": "2020-11-23 18:00:47",
              "publish_down": null,
              "metatitle": "",
              "metadesc": "",
              "metakey": "",
              "highlights": "",
              "rating": "",
              "review_title": "",
              "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "review_pros": "",
              "review_cons": "",
              "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign21_231120055209_1199x674.png",
              "feature_image_data": {
                "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign21_231120055209_1199x674.png",
                "title": "untitleddesign21_231120055209_1199x674",
                "caption": "",
                "alt_text": "",
                "description": ""
              },
              "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "vertical_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "feature_image_lazy": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "vertical_image_lazy": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "author_data": [
                {
                  "authors_id": 1,
                  "author_name": "Bazaar India",
                  "author_slug": "bazaar-india",
                  "author_image": ""
                }
              ],
              "section_data": [
                {
                  "section_id": 4,
                  "section_name": "Travel & Food",
                  "category_id": "",
                  "category_name": ""
                }
              ],
              "created_at": "2020-11-23T11:15:09.000000Z",
              "created_by_id": "13",
              "created_by_name": "prachi goyal",
              "cache_time": "03/05/2021 04:20:13 pm",
              "updated_at": "2020-11-27 16:07:18",
              "galleries": "",
              "video_node": "",
              "previous_url_id": "1945"
            },
            {
              "content_id": 1944,
              "apps_id": "1",
              "post_types_id": "2",
              "content_type": "story",
              "headline": "Explore Madrid With Arvind Vijaymohan",
              "introtext": "&lt;p&gt;The CEO of Artery India shares the delights of Madrid. “I’ve travelled to this city four times and still haven’t had my fill of its museums.”&lt;/p&gt;",
              "fulltext": "&lt;p&gt;“Madrid offers a wide range of delightful experiences, the madding crowd notwithstanding. I’ve travelled to this city four times and still haven’t had my fill of its exceptional museums. Amongst the most memorable I’ve visited is the Herzog &amp; de Meuron-designed, CaixaForum—it has many special architectural details. In particular, is a stairway that’s straight of out 2001: A Space Odyssey, and a monumental vertical garden, that could easily blend into a set piece on Avatar. The Palacio de Cristal is another stunning structure: the palace features a breathtaking cupola, and being built almost entirely with glass, looks beautiful from the outside. El Retiro Park is another a visual delight, peppered in equal measure with galleries, sculptures, and flora of all kinds. The view from the roof of the Círculo de Bellas Artes is quite simply spectacular. I usually head there for a drink to catch the sunset and an unrestricted, bird’s-eye view of the entire city. I also make sure I attend a flamenco performance whenever I’m in the country, and the Teatro Flamenco—listed as the world’s first flamenco theatre—is one of the best for this. I would also recommend visiting the Mercado de San Miguel, where you have about 20 restaurants under a very beautiful roof, offering you a wide gamut of flavours.”&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--0031_112320023332.png'  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0031_112320023332.png' title='image--0031_112320023332.png' width='366' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;em&gt;Arvind Vijaymohan, CEO, Artery India&lt;/em&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--0051_112320023516.png'  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0051_112320023516.png' title='image--0051_112320023516.png' width='391' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;The Círculo de Bellas Artes.&lt;/p&gt;\r\n\r\n&lt;p&gt;Do Try: “I’ve always been a raging shoe collector, and Spain has some of the finest craftsmen of this trade. Carmina Shoemaker, a 150-year old brand from Majorca, is eminently praiseworthy. Meermin Mallorca is another favourite, and I inevitably spend a few hours in both these studios.”&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--0021_112320023429.png'  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0021_112320023429.png' title='image--0021_112320023429.png' width='395' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;My Tip: “If you like flea markets, make sure you’re in the city on a Sunday. El Rastro is the biggest one, and the market has been in business every Sunday for nearly 200 years. It’s the perfect hunting ground for souvenirs.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--0061_112320023555.png'  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0061_112320023555.png' title='image--0061_112320023555.png' width='425' /&gt;&lt;/p&gt;",
              "amp_fulltext": "&lt;p&gt;&ldquo;Madrid offers a wide range of delightful experiences, the madding crowd notwithstanding. I&rsquo;ve travelled to this city four times and still haven&rsquo;t had my fill of its exceptional museums. Amongst the most memorable I&rsquo;ve visited is the Herzog &amp;amp; de Meuron-designed, CaixaForum&mdash;it has many special architectural details. In particular, is a stairway that&rsquo;s straight of out 2001: A Space Odyssey, and a monumental vertical garden, that could easily blend into a set piece on Avatar. The Palacio de Cristal is another stunning structure: the palace features a breathtaking cupola, and being built almost entirely with glass, looks beautiful from the outside. El Retiro Park is another a visual delight, peppered in equal measure with galleries, sculptures, and flora of all kinds. The view from the roof of the C&iacute;rculo de Bellas Artes is quite simply spectacular. I usually head there for a drink to catch the sunset and an unrestricted, bird&rsquo;s-eye view of the entire city. I also make sure I attend a flamenco performance whenever I&rsquo;m in the country, and the Teatro Flamenco&mdash;listed as the world&rsquo;s first flamenco theatre&mdash;is one of the best for this. I would also recommend visiting the Mercado de San Miguel, where you have about 20 restaurants under a very beautiful roof, offering you a wide gamut of flavours.&rdquo;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0031_112320023332.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;em&gt;Arvind Vijaymohan, CEO, Artery India&lt;/em&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0051_112320023516.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;The C&iacute;rculo de Bellas Artes.&lt;/p&gt;\n\n&lt;p&gt;Do Try: &ldquo;I&rsquo;ve always been a raging shoe collector, and Spain has some of the finest craftsmen of this trade. Carmina Shoemaker, a 150-year old brand from Majorca, is eminently praiseworthy. Meermin Mallorca is another favourite, and I inevitably spend a few hours in both these studios.&rdquo;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0021_112320023429.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;My Tip: &ldquo;If you like flea markets, make sure you&rsquo;re in the city on a Sunday. El Rastro is the biggest one, and the market has been in business every Sunday for nearly 200 years. It&rsquo;s the perfect hunting ground for souvenirs.&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0061_112320023555.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;",
              "category_trail": [
                {
                  "id": 4,
                  "title": "Travel & Food",
                  "slug": "travel-food",
                  "parent": "0"
                }
              ],
              "primary_section_id": 4,
              "primary_section_name": "Travel & Food",
              "primary_section_slug": "travel-food",
              "primary_id": "4",
              "primary_id_name": "Travel & Food",
              "primary_id_slug": "travel-food",
              "url": "/travel-food/story/travel-diaries-madrid-spain-by-arvind-vijaymohan-1944",
              "full_url": "https://alpha-harperbazar.intoday.in/travel-food/story/travel-diaries-madrid-spain-by-arvind-vijaymohan-1944",
              "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/travel-food/story/travel-diaries-madrid-spain-by-arvind-vijaymohan-1944",
              "slug": "travel-diaries-madrid-spain-by-arvind-vijaymohan",
              "excerpt": "&lt;p&gt;The CEO of Artery India shares the delights of Madrid. “I’ve travelled to this city four times and still haven’t had my fill of its museums.”&lt;/p&gt;",
              "publish_up": "2020-11-23 18:00:28",
              "publish_down": "0000-00-00 00:00:00",
              "metatitle": "Explore Madrid With Arvind Vijaymohan",
              "metadesc": "&lt;p&gt;The CEO of Artery India shares the delights of Madrid. “I’ve travelled to this city four times and still haven’t had my fill of its museums.”&lt;/p&gt;",
              "metakey": "",
              "highlights": "",
              "rating": "",
              "review_title": "",
              "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "review_pros": "",
              "review_cons": "",
              "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign22_231120060741_1199x674.png",
              "feature_image_data": {
                "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign22_231120060741_1199x674.png",
                "title": "untitleddesign22_231120060741_1199x674",
                "caption": "",
                "alt_text": "",
                "description": ""
              },
              "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "vertical_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "feature_image_lazy": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "vertical_image_lazy": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "author_data": [
                {
                  "authors_id": "1",
                  "author_name": "Bazaar India",
                  "author_slug": "bazaar-india",
                  "author_image": ""
                }
              ],
              "section_data": "",
              "created_at": "2020-11-23T08:55:26.000000Z",
              "created_by_id": "13",
              "created_by_name": "prachi goyal",
              "cache_time": "03/05/2021 04:20:14 pm",
              "updated_at": "2021-04-13 17:12:55",
              "galleries": "",
              "video_node": "",
              "previous_url_id": "1943"
            },
            {
              "content_id": 1947,
              "apps_id": "1",
              "post_types_id": "2",
              "content_type": "story",
              "headline": "Travel to Singapore With Actor Maanvi Gagroo",
              "introtext": "&lt;p&gt;“I love exploring local boutiques to understand what the city has to offer.”&lt;/p&gt;",
              "fulltext": "&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--0002_112320045454.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0002_112320045454.png' title='image--0002_112320045454.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;ldquo;I first visited Singapore a couple of years ago, and I immediately fell in love with it. I have been there many times since. In fact, even while travelling to other Southeast Asian countries, I try to take a flight with a layover in Singapore. My sister also lives there, so it&amp;rsquo;s nice to have a family in a city that you love so much. What&amp;rsquo;s amazing about it is that it offers something for everyone, whether you enjoy shopping, are a foodie, or like sightseeing. The city offers both world cuisine and Michelin-starred street food...and what&amp;rsquo;s not to love about that? Lau Pa Sat is a haven for street food and is a great blend of striking architecture local delicacies. I would also recommend trying out Bacha Coffee, a gorgeous Moroccan-themed coffee boutique. Some of Singapore&amp;rsquo;s star attractions include East Coast Park and Beach&amp;mdash;I love going there for a walk. Clarke Quay and 1-Altitude bar are two of my favourite places to experience the thriving nightlife of the city. And finally, there&amp;rsquo;s Sentosa island, which may sound run-of-the-mill, but falls under the category of must-visit places.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--0012_112320045333.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0012_112320045333.png' title='image--0012_112320045333.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;em&gt;Maanvi Gagroo, Actor&lt;/em&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Do Try:&amp;ldquo;Going for the TreeTop Walk was one of the best decisions I made. If you love the great outdoors, this lush trail will make you very, very happy. It isn&amp;rsquo;t the most-adventurous thing one can do, but it sure leaves you exhilarated.&amp;rdquo;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--0052_112320045602.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0052_112320045602.png' title='image--0052_112320045602.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Kilic Ali Pasa Hamam&lt;/p&gt;\r\n\r\n&lt;p&gt;My Tip:&amp;nbsp;Instead of shopping for brands one can find the world over, I love exploring local boutiques to understand whatthe city has to offer. My favourite is Bugis Street because it offers the best of street shopping. For luxury brands, visitOrchard Street.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--0032_112320045528.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0032_112320045528.png' title='image--0032_112320045528.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;The Bacha Coffee.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--0042_112320053012.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0042_112320053012.png' title='image--0042_112320053012.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Aerial view of TreeTopWalk in Singapore.&lt;/p&gt;",
              "amp_fulltext": "&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0002_112320045454.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&ldquo;I first visited Singapore a couple of years ago, and I immediately fell in love with it. I have been there many times since. In fact, even while travelling to other Southeast Asian countries, I try to take a flight with a layover in Singapore. My sister also lives there, so it&rsquo;s nice to have a family in a city that you love so much. What&rsquo;s amazing about it is that it offers something for everyone, whether you enjoy shopping, are a foodie, or like sightseeing. The city offers both world cuisine and Michelin-starred street food...and what&rsquo;s not to love about that? Lau Pa Sat is a haven for street food and is a great blend of striking architecture local delicacies. I would also recommend trying out Bacha Coffee, a gorgeous Moroccan-themed coffee boutique. Some of Singapore&rsquo;s star attractions include East Coast Park and Beach&mdash;I love going there for a walk. Clarke Quay and 1-Altitude bar are two of my favourite places to experience the thriving nightlife of the city. And finally, there&rsquo;s Sentosa island, which may sound run-of-the-mill, but falls under the category of must-visit places.&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0012_112320045333.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;em&gt;Maanvi Gagroo, Actor&lt;/em&gt;&lt;/p&gt;\n\n&lt;p&gt;Do Try:&ldquo;Going for the TreeTop Walk was one of the best decisions I made. If you love the great outdoors, this lush trail will make you very, very happy. It isn&rsquo;t the most-adventurous thing one can do, but it sure leaves you exhilarated.&rdquo;&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0052_112320045602.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Kilic Ali Pasa Hamam&lt;/p&gt;\n\n&lt;p&gt;My Tip:&amp;nbsp;Instead of shopping for brands one can find the world over, I love exploring local boutiques to understand whatthe city has to offer. My favourite is Bugis Street because it offers the best of street shopping. For luxury brands, visitOrchard Street.&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0032_112320045528.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;The Bacha Coffee.&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0042_112320053012.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Aerial view of TreeTopWalk in Singapore.&lt;/p&gt;",
              "category_trail": [
                {
                  "id": 4,
                  "title": "Travel & Food",
                  "slug": "travel-food",
                  "parent": "0"
                }
              ],
              "primary_section_id": 4,
              "primary_section_name": "Travel & Food",
              "primary_section_slug": "travel-food",
              "primary_id": "4",
              "primary_id_name": "Travel & Food",
              "primary_id_slug": "travel-food",
              "url": "/travel-food/story/travel-diaries-1947",
              "full_url": "https://alpha-harperbazar.intoday.in/travel-food/story/travel-diaries-1947",
              "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/travel-food/story/travel-diaries-1947",
              "slug": "travel-diaries",
              "excerpt": "&lt;p&gt;“I love exploring local boutiques to understand what the city has to offer.”&lt;/p&gt;",
              "publish_up": "2020-11-23 18:00:21",
              "publish_down": null,
              "metatitle": "Travel to Singapore With Actor Maanvi Gagroo",
              "metadesc": "&lt;p&gt;“I love exploring local boutiques to understand what the city has to offer.”&lt;/p&gt;",
              "metakey": "",
              "highlights": "",
              "rating": "",
              "review_title": "",
              "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "review_pros": "",
              "review_cons": "",
              "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image0052_231120045636_518x343.png",
              "feature_image_data": {
                "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image0052_231120045636_518x343.png",
                "title": "image0052_231120045636_518x343",
                "caption": "",
                "alt_text": "",
                "description": ""
              },
              "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "vertical_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "feature_image_lazy": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "vertical_image_lazy": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "author_data": [
                {
                  "authors_id": "1",
                  "author_name": "Bazaar India",
                  "author_slug": "bazaar-india",
                  "author_image": ""
                }
              ],
              "section_data": "",
              "created_at": "2020-11-23T11:26:43.000000Z",
              "created_by_id": "13",
              "created_by_name": "prachi goyal",
              "cache_time": "03/05/2021 04:11:49 pm",
              "updated_at": "2020-11-27 18:08:38",
              "galleries": "",
              "video_node": "",
              "previous_url_id": "1946"
            },
            {
              "content_id": 1948,
              "apps_id": "1",
              "post_types_id": "2",
              "content_type": "story",
              "headline": "Discover Copenhagen With Travel Influencer Shenaz Treasury",
              "introtext": "&lt;p&gt;'Christiania&amp;rsquo;s graffiti- painted walls, and cobblestone alleys with cosy bars and cafés, are what make it interesting.&amp;rdquo;&lt;/p&gt;",
              "fulltext": "&lt;p&gt;&lt;/p&gt;&lt;p&gt;&amp;ldquo;I visited the Nordic city recently, and absolutely loved its vibe. Apart from getting my fill of Danish pastries, I explored areas like Freetown Christiania&amp;mdash;a district that has its own rules, completely independent of the Danish government. Established in the &amp;rsquo;70s by a group of hippies, it&amp;rsquo;s the polar opposite of what Copenhagen is known for. Christiania&amp;rsquo;s graffiti painted walls, and cobblestone alleys with cozy bars and caf&amp;eacute;s, are what make it interesting. And the Green Light District is known for its greatconcerts, art galleries, and restaurants. Another place you must check out&amp;nbsp;is Nyhavn&amp;mdash;a waterfront district lined with brightly-colored, 17th-century&amp;nbsp;townhouses, bars, caf&amp;eacute;s, and restaurants. Do visit the Rosenborg Castle for the Crown Jewels andsee the Changing of the Guard ceremony at the Christiansborg Palace. Lastly, Tarnet or The Tower offers an amazing view of the city and is free for all.&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;img title='image--0062_112320050628.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0062_112320050628.png' alt='image--0062_112320050628.png' width='343'  /&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;Shenaz Treasury, Travel Influencer&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Do Try: &amp;ldquo;The Little Mermaid and Zinkglobal are two iconic sculptures in the city that you can&amp;rsquo;t miss to visit. A picture thereis a must. Also, the Danes are known for their stylish, minimalist home products&amp;mdash; something you should definitely bring back.&amp;rdquo;&lt;/p&gt;&lt;p&gt;&lt;img title='image--0022_112320050817.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0022_112320050817.png' alt='image--0022_112320050817.png' width='408'  /&gt;&lt;/p&gt;&lt;p&gt;&lt;img title='image--0082_112320050848.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0082_112320050848.png' alt='image--0082_112320050848.png' width='391'  /&gt;&lt;/p&gt;&lt;p&gt;My Tip: &amp;ldquo;Take a boat and explore this city on water&amp;mdash;the sights are breathtaking. Also, Copenhagen is cafe heaven.Cafe Livingstone tops my list...it&amp;rsquo;s minimal, yet very stylish. If you can manage to get a reservation at Noma, a two-Michelin-star restaurant, that&amp;rsquo;s great! Copengahen is the birthplace of LEGO, and a walk through their store on K&amp;oslash;benhavn is a visual delight.&lt;/p&gt;&lt;p&gt;&lt;img title='image--0072_112320050940.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0072_112320050940.png' alt='image--0072_112320050940.png' width='448'  /&gt;&lt;/p&gt;&lt;p&gt;A building in the Christiania district.&lt;/p&gt;",
              "amp_fulltext": "&lt;p&gt;&lt;/p&gt;&lt;p&gt;&ldquo;I visited the Nordic city recently, and absolutely loved its vibe. Apart from getting my fill of Danish pastries, I explored areas like Freetown Christiania&mdash;a district that has its own rules, completely independent of the Danish government. Established in the &rsquo;70s by a group of hippies, it&rsquo;s the polar opposite of what Copenhagen is known for. Christiania&rsquo;s graffiti painted walls, and cobblestone alleys with cozy bars and caf&eacute;s, are what make it interesting. And the Green Light District is known for its greatconcerts, art galleries, and restaurants. Another place you must check out&amp;nbsp;is Nyhavn&mdash;a waterfront district lined with brightly-colored, 17th-century&amp;nbsp;townhouses, bars, caf&eacute;s, and restaurants. Do visit the Rosenborg Castle for the Crown Jewels andsee the Changing of the Guard ceremony at the Christiansborg Palace. Lastly, Tarnet or The Tower offers an amazing view of the city and is free for all.&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0062_112320050628.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;Shenaz Treasury, Travel Influencer&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Do Try: &ldquo;The Little Mermaid and Zinkglobal are two iconic sculptures in the city that you can&rsquo;t miss to visit. A picture thereis a must. Also, the Danes are known for their stylish, minimalist home products&mdash; something you should definitely bring back.&rdquo;&lt;/p&gt;&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0022_112320050817.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0082_112320050848.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;&lt;p&gt;My Tip: &ldquo;Take a boat and explore this city on water&mdash;the sights are breathtaking. Also, Copenhagen is cafe heaven.Cafe Livingstone tops my list...it&rsquo;s minimal, yet very stylish. If you can manage to get a reservation at Noma, a two-Michelin-star restaurant, that&rsquo;s great! Copengahen is the birthplace of LEGO, and a walk through their store on K&oslash;benhavn is a visual delight.&lt;/p&gt;&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0072_112320050940.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;&lt;p&gt;A building in the Christiania district.&lt;/p&gt;",
              "category_trail": [
                {
                  "id": 4,
                  "title": "Travel & Food",
                  "slug": "travel-food",
                  "parent": "0"
                }
              ],
              "primary_section_id": 4,
              "primary_section_name": "Travel & Food",
              "primary_section_slug": "travel-food",
              "primary_id": "4",
              "primary_id_name": "Travel & Food",
              "primary_id_slug": "travel-food",
              "url": "/travel-food/story/travel-diaries---copenhagen-denmark-by-shenaz-treasury-1948",
              "full_url": "https://alpha-harperbazar.intoday.in/travel-food/story/travel-diaries---copenhagen-denmark-by-shenaz-treasury-1948",
              "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/travel-food/story/travel-diaries---copenhagen-denmark-by-shenaz-treasury-1948",
              "slug": "travel-diaries---copenhagen-denmark-by-shenaz-treasury",
              "excerpt": "&lt;p&gt;'Christiania&amp;rsquo;s graffiti- painted walls, and cobblestone alleys with cosy bars and cafés, are what make it interesting.&amp;rdquo;&lt;/p&gt;",
              "publish_up": "2020-11-23 17:11:36",
              "publish_down": null,
              "metatitle": "",
              "metadesc": "",
              "metakey": "",
              "highlights": "",
              "rating": "",
              "review_title": "",
              "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "review_pros": "",
              "review_cons": "",
              "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/shenaz1_251120042531_1199x675.jpg",
              "feature_image_data": {
                "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/shenaz1_251120042531_1199x675.jpg",
                "title": "shenaz1_251120042531_1199x675",
                "caption": "",
                "alt_text": "",
                "description": ""
              },
              "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "vertical_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "feature_image_lazy": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "vertical_image_lazy": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "author_data": [
                {
                  "authors_id": 1,
                  "author_name": "Bazaar India",
                  "author_slug": "bazaar-india",
                  "author_image": ""
                }
              ],
              "section_data": [
                {
                  "section_id": 4,
                  "section_name": "Travel & Food",
                  "category_id": "",
                  "category_name": ""
                }
              ],
              "created_at": "2020-11-23T11:41:36.000000Z",
              "created_by_id": "13",
              "created_by_name": "prachi goyal",
              "cache_time": "03/05/2021 04:11:50 pm",
              "updated_at": "2021-04-13 18:13:32",
              "galleries": "",
              "video_node": "",
              "previous_url_id": "1947"
            },
            {
              "content_id": 1943,
              "apps_id": "1",
              "post_types_id": "2",
              "content_type": "story",
              "headline": "Journey to Cinque Terre in Italy With Fashion Designer Kresha Bajaj",
              "introtext": "&lt;p&gt;As we daydream about blue skies and sandy shores, fashion designer and avid traveller Kresha Bajaj takes us to her favourite city to satisfy our wanderlust.&lt;br /&gt;&lt;br /&gt;&lt;/p&gt;",
              "fulltext": "&lt;p&gt;&amp;ldquo;During my recent trip to Italy, I visited Cinque Terre and it soon became one of my favourite places. The colours, culture, and ambience of the five towns was truly unique and inspiring. My list of things to do is exhaustive&amp;mdash;this coastal area has so much to offer! Go catch the views at Santuario di Nostra Signora di Montenero in Riomaggiore, which is a great Instagram spot. Try the &amp;lsquo;Pesto Experience&amp;rsquo; at Nessun Dorma in Manarola, where you learn how to make your own pesto with the local chef. A boat ride through Cinque Terre is an absolute must, and you can also take a kayaking trip from Monterosso, paddling across the five different villages while passing through the rugged cliffs and hidden coves. A wine tour during sunset through Riomaggiorecomes highly recommended and for good reason. If an offbeat dining experience is what you prefer, definitely go to Cesarina&amp;rsquo;sHome, where you get to feast on a traditional Italian meal with live cooking and recipes that are native to the region.&amp;rdquo;&lt;/p&gt;&lt;p&gt;&lt;img title='image--007_112320020636.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--007_112320020636.png' alt='image--007_112320020636.png' width='357'  /&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;Kresha Bajaj, Fashion Designer&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Do Try: &amp;ldquo;The Nessun Dorma restaurant offers the best views in Manarola. And Il Porticciolo, another Italian restaurant, serves the most delicious bruschetta I have ever tasted, along with great pasta and pizzas. If you&amp;rsquo;re there in summer, I recommend Gelateria Vernazza for their fresh, artisan gelatos in unique flavours.&amp;rdquo;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;img title='image--005_112320020924.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--005_112320020924.png' alt='image--005_112320020924.png' width='370'  /&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;My Tip: &amp;ldquo;Take a trek to the top of Vernazza, where you can find a beautiful picnic spot overlooking the whole city.&amp;rdquo;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;img title='image--004_112320020557.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--004_112320020557.png' alt='image--004_112320020557.png' width='388'  /&gt;&lt;/p&gt;&lt;p&gt;Riomaggiore village.&lt;/p&gt;&lt;p&gt;&lt;img title='image--002_112320020301.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--002_112320020301.png' alt='image--002_112320020301.png' width='333'  /&gt;&lt;/p&gt;",
              "amp_fulltext": "&lt;p&gt;&ldquo;During my recent trip to Italy, I visited Cinque Terre and it soon became one of my favourite places. The colours, culture, and ambience of the five towns was truly unique and inspiring. My list of things to do is exhaustive&mdash;this coastal area has so much to offer! Go catch the views at Santuario di Nostra Signora di Montenero in Riomaggiore, which is a great Instagram spot. Try the &lsquo;Pesto Experience&rsquo; at Nessun Dorma in Manarola, where you learn how to make your own pesto with the local chef. A boat ride through Cinque Terre is an absolute must, and you can also take a kayaking trip from Monterosso, paddling across the five different villages while passing through the rugged cliffs and hidden coves. A wine tour during sunset through Riomaggiorecomes highly recommended and for good reason. If an offbeat dining experience is what you prefer, definitely go to Cesarina&rsquo;sHome, where you get to feast on a traditional Italian meal with live cooking and recipes that are native to the region.&rdquo;&lt;/p&gt;&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--007_112320020636.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;Kresha Bajaj, Fashion Designer&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Do Try: &ldquo;The Nessun Dorma restaurant offers the best views in Manarola. And Il Porticciolo, another Italian restaurant, serves the most delicious bruschetta I have ever tasted, along with great pasta and pizzas. If you&rsquo;re there in summer, I recommend Gelateria Vernazza for their fresh, artisan gelatos in unique flavours.&rdquo;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--005_112320020924.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;My Tip: &ldquo;Take a trek to the top of Vernazza, where you can find a beautiful picnic spot overlooking the whole city.&rdquo;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--004_112320020557.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;&lt;p&gt;Riomaggiore village.&lt;/p&gt;&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--002_112320020301.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;",
              "category_trail": [
                {
                  "id": 4,
                  "title": "Travel & Food",
                  "slug": "travel-food",
                  "parent": "0"
                }
              ],
              "primary_section_id": 4,
              "primary_section_name": "Travel & Food",
              "primary_section_slug": "travel-food",
              "primary_id": "4",
              "primary_id_name": "Travel & Food",
              "primary_id_slug": "travel-food",
              "url": "/travel-food/story/the-travel-diaries--cinque-terre-italy-by-kresha-bajaj-1943",
              "full_url": "https://alpha-harperbazar.intoday.in/travel-food/story/the-travel-diaries--cinque-terre-italy-by-kresha-bajaj-1943",
              "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/travel-food/story/the-travel-diaries--cinque-terre-italy-by-kresha-bajaj-1943",
              "slug": "the-travel-diaries--cinque-terre-italy-by-kresha-bajaj",
              "excerpt": "&lt;p&gt;As we daydream about blue skies and sandy shores, fashion designer and avid traveller Kresha Bajaj takes us to her favourite city to satisfy our wanderlust.&lt;br /&gt;&lt;br /&gt;&lt;/p&gt;",
              "publish_up": "2020-11-23 15:00:19",
              "publish_down": null,
              "metatitle": "",
              "metadesc": "",
              "metakey": "",
              "highlights": "",
              "rating": "",
              "review_title": "",
              "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "review_pros": "",
              "review_cons": "",
              "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/travel1_251120041113_1199x675.jpg",
              "feature_image_data": {
                "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/travel1_251120041113_1199x675.jpg",
                "title": "travel1_251120041113_1199x675",
                "caption": "",
                "alt_text": "",
                "description": ""
              },
              "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "vertical_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "feature_image_lazy": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "vertical_image_lazy": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "author_data": [
                {
                  "authors_id": 1,
                  "author_name": "Bazaar India",
                  "author_slug": "bazaar-india",
                  "author_image": ""
                }
              ],
              "section_data": [
                {
                  "section_id": 4,
                  "section_name": "Travel & Food",
                  "category_id": "",
                  "category_name": ""
                }
              ],
              "created_at": "2020-11-23T08:28:52.000000Z",
              "created_by_id": "13",
              "created_by_name": "prachi goyal",
              "cache_time": "03/05/2021 04:11:50 pm",
              "updated_at": "2020-11-25 19:24:46",
              "galleries": "",
              "video_node": "",
              "previous_url_id": "1940"
            },
            {
              "content_id": 1935,
              "apps_id": "1",
              "post_types_id": "2",
              "content_type": "story",
              "headline": "Not A Piece Of Cake",
              "introtext": "&lt;p&gt;Bazaar India chats with&amp;nbsp;Kainaz Messman Harchandrai of &lt;em&gt;Theobroma&lt;/em&gt;, who tells us about her new book, her favourite dessert and more...&lt;/p&gt;",
              "fulltext": "&lt;p&gt;&lt;strong&gt;Harper&amp;rsquo;s Bazaar:&lt;/strong&gt; What do you hope budding entrepreneurs will take away from the book?&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Kainaz Messman Harchandrai:&lt;/strong&gt; Baking a Dream is not meant to be a manual&amp;mdash;it&amp;rsquo;s partly a corporate and personal biography. I hope it provides an honest account of what running a business in India entails.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;HB:&lt;/strong&gt; In your words, &amp;ldquo;a recipe is like a fidgeting child&amp;rdquo;. Tell us of your most serendipitous encounter with one.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;KMH:&lt;/strong&gt; I first had a chip butty at a pub in Oxford. Cold salted chips between slices of white bread&amp;mdash;it was an underwhelming meal. But a few months later, I saw hot chips coming out of the fryer at our Colaba kitchen, and decided to make one. I used a fresh butter roll, hot chips, and lots of garlic mayonnaise. The Theobroma chip butty was born!&lt;/p&gt;&lt;p&gt;&lt;strong&gt;HB:&lt;/strong&gt; From demonetisation to Mumbai rains&amp;mdash;you document Theobroma&amp;rsquo;s challenges in detail. What keeps you going?&lt;/p&gt;&lt;p&gt;&lt;strong&gt;KMH:&lt;/strong&gt; &amp;lsquo;This too shall pass&amp;rsquo; is our mantra. Running a business inherently means facing uncertainty. In these difficult times, we count our blessings and do our best to steer our company.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;HB:&lt;/strong&gt; What&amp;rsquo;s your favourite item in Theobroma?&lt;/p&gt;&lt;p&gt;&lt;strong&gt;KMH:&lt;/strong&gt; Currently, our strawberry tart. I love the glazed fruit, vanilla custard, almond frangipane, and crisp butter pastry tart; it&amp;rsquo;s equally attractive and delicious.&lt;/p&gt;&lt;p&gt;&lt;/p&gt;",
              "amp_fulltext": "&lt;p&gt;&lt;strong&gt;Harper&rsquo;s Bazaar:&lt;/strong&gt; What do you hope budding entrepreneurs will take away from the book?&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Kainaz Messman Harchandrai:&lt;/strong&gt; Baking a Dream is not meant to be a manual&mdash;it&rsquo;s partly a corporate and personal biography. I hope it provides an honest account of what running a business in India entails.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;HB:&lt;/strong&gt; In your words, &ldquo;a recipe is like a fidgeting child&rdquo;. Tell us of your most serendipitous encounter with one.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;KMH:&lt;/strong&gt; I first had a chip butty at a pub in Oxford. Cold salted chips between slices of white bread&mdash;it was an underwhelming meal. But a few months later, I saw hot chips coming out of the fryer at our Colaba kitchen, and decided to make one. I used a fresh butter roll, hot chips, and lots of garlic mayonnaise. The Theobroma chip butty was born!&lt;/p&gt;&lt;p&gt;&lt;strong&gt;HB:&lt;/strong&gt; From demonetisation to Mumbai rains&mdash;you document Theobroma&rsquo;s challenges in detail. What keeps you going?&lt;/p&gt;&lt;p&gt;&lt;strong&gt;KMH:&lt;/strong&gt; &lsquo;This too shall pass&rsquo; is our mantra. Running a business inherently means facing uncertainty. In these difficult times, we count our blessings and do our best to steer our company.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;HB:&lt;/strong&gt; What&rsquo;s your favourite item in Theobroma?&lt;/p&gt;&lt;p&gt;&lt;strong&gt;KMH:&lt;/strong&gt; Currently, our strawberry tart. I love the glazed fruit, vanilla custard, almond frangipane, and crisp butter pastry tart; it&rsquo;s equally attractive and delicious.&lt;/p&gt;&lt;p&gt;&lt;/p&gt;",
              "category_trail": [
                {
                  "id": 4,
                  "title": "Travel & Food",
                  "slug": "travel-food",
                  "parent": "0"
                }
              ],
              "primary_section_id": 4,
              "primary_section_name": "Travel & Food",
              "primary_section_slug": "travel-food",
              "primary_id": "4",
              "primary_id_name": "Travel & Food",
              "primary_id_slug": "travel-food",
              "url": "/travel-food/story/not-a-piece-of-cake--1935",
              "full_url": "https://alpha-harperbazar.intoday.in/travel-food/story/not-a-piece-of-cake--1935",
              "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/travel-food/story/not-a-piece-of-cake--1935",
              "slug": "not-a-piece-of-cake-",
              "excerpt": "&lt;p&gt;Bazaar India chats with&amp;nbsp;Kainaz Messman Harchandrai of &lt;em&gt;Theobroma&lt;/em&gt;, who tells us about her new book, her favourite dessert and more...&lt;/p&gt;",
              "publish_up": "2020-11-20 18:00:27",
              "publish_down": null,
              "metatitle": "",
              "metadesc": "",
              "metakey": "",
              "highlights": "",
              "rating": "",
              "review_title": "",
              "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "review_pros": "",
              "review_cons": "",
              "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/baking_201120063718_1199x675.jpg",
              "feature_image_data": {
                "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/baking_201120063718_1199x675.jpg",
                "title": "baking_201120063718_1199x675",
                "caption": "",
                "alt_text": "",
                "description": ""
              },
              "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "vertical_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "feature_image_lazy": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "vertical_image_lazy": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png",
              "author_data": [
                {
                  "authors_id": 1,
                  "author_name": "Bazaar India",
                  "author_slug": "bazaar-india",
                  "author_image": ""
                }
              ],
              "section_data": [
                {
                  "section_id": 4,
                  "section_name": "Travel & Food",
                  "category_id": "",
                  "category_name": ""
                }
              ],
              "created_at": "2020-11-19T15:26:29.000000Z",
              "created_by_id": "13",
              "created_by_name": "prachi goyal",
              "cache_time": "03/05/2021 04:11:51 pm",
              "updated_at": "2020-11-26 12:44:37",
              "galleries": "",
              "video_node": "",
              "previous_url_id": "1934"
            }
          ],
          "other_information": {
            "total_no_of_records": 7,
            "display_records": 7,
            "cache_time": "03/05/2021 04:20:10 pm"
          },
          "trail_info": {
            "section_name": "Travel & Food",
            "section_slug": "travel-food"
          },
          "seo_info": {
            "meta_title": "Travel News: Latest Travel Destination Tips, India Tourism news Online",
            "meta_desc": "Read latest news on travel industry, top travel destinations tips, best Vacation Spots, hottest desinations & places in India to travel, tourism travel tips and more on Harpers Bazaar",
            "meta_key": "travel news, latest travel news, travel tips, top travel destinations tips, tourism news online, tour and travel, travel and tourism, india travel news, best destinations in india to visit, latest news on travel industry"
          },
          "seo_posttype": []
        }
      }
    return {
        props: { travelAndFoodData, },
      };
}
