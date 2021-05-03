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

export default function Beauty({beautyData}){
   return(
    <>
    <Head>
        <title>Beauty Tips: Latest Beauty tips</title>
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
                <a href="www.facebook.com">{beautyData.data.feed[0].primary_section_name}</a>
            </div>
        </div>

         {/* Heading */}
         <h1 className="tittle_text"><span>{beautyData.data.feed[0].primary_section_name}</span></h1>

         <section className="content_wrapper">
                <div className="container">
                    <div className="content_inner">
                        <div className="content_left">
            
                        {/* Fashion */}     
                        <div className="fashion_top">
                            <figure>
                            <img src={beautyData.data.feed[0].feature_image_data.url} alt="fashion_img_main" />
                            </figure>
                            <Link href={'/story/'+beautyData.data.feed[0].url.slice(beautyData.data.feed[0].url.length - 4)}><h3>{beautyData.data.feed[0].headline}</h3></Link>
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
                <figure><img src={beautyData.data.feed[1].feature_image_data.url} alt="rhs_img" /></figure>
                <p>{beautyData.data.feed[1].headline}</p>
            </div>
			</div>
            </div>
            <ul className="section_list">
            {
                beautyData.data.feed.slice(2).map((beauty)=>{
                    return(
                        <li>
                        <div className="list_detail">
                            <strong>{moment(beauty.updated_at).format("MMM DD, YYYY")}</strong>
                            <h3><a href={beauty.url}>{beauty.headline}</a></h3>
                            <p>{beauty.introtext}</p>
                            <span>By <a href="/authors/bazaar-india">{beauty.author_data[0].author_name}</a></span>
                        </div>
                        <figure className="list_pic">
                            <img src={beauty.feature_image_data.url} alt="list_img1"/>
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

export async function getServerSideProps(){
    // const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/latest?section=beauty&section_level=0content_type=all&page=1&limit=10&order_by=publish_up%20desc&app=all`)
    const beautyData = {
        "data": {
          "feed": [
            {
              "content_id": 1980,
              "apps_id": "1",
              "post_types_id": "2",
              "content_type": "story",
              "headline": "How to Get Glossy and Luxuriant Hair",
              "introtext": "How lockdown has taken Meg Honigmann one step closer in her quest for glossy tresses worthy of a storybook heroine.",
              "fulltext": "&lt;p&gt;When I read Tennyson&amp;rsquo;s poetry as a teenager, I could never understand why so many of his female protagonists insisted on staying inside and bemoaning their existence. &amp;lsquo;No time hath she to sport and play,&amp;rsquo; he writes of the Lady of Shalott, who watches the world go by through her enchanted mirror. How awful, I thought. And then our own world went into lockdown and I reconsidered the lessons to be learnt from the cloistered heroines of literature and legend.&lt;/p&gt;\r\n\r\n&lt;p&gt;Think of Rapunzel shuttered up in a turret, her mood glum but her beautiful hair &amp;lsquo;fine as spun gold&amp;rsquo;. The idea of glossy waves long and strong enough to haul a prince up to the top of a tower remains a fantasy, but all that time indoors clearly worked wonders for her tresses. There is hair inspiration aplenty in art, too, most strikingly in the work of the Pre-Raphaelites. Dante Gabriel Rossetti&amp;rsquo;s painting Lady Lilith pictures Adam&amp;rsquo;s first wife brushing out endless lustrous red locks, while in William Holman Hunt&amp;rsquo;s The Lady of Shalott, the subject&amp;rsquo;s long hair blows up around her almost supernaturally, stretching to the edges of the canvas. Now confined to the home myself, without access to salons and with no need for excessive home styling, my lengths certainly feel like a better quality yarn. Having abandoned my daily routine of a hairdryer and straighteners (not forgetting bimonthly top-ups to maintain my blonde color), my hair has become softer and is in better condition than ever before. After years of damage&amp;mdash;and an incident known as a &amp;lsquo;chemical cut&amp;rsquo;, when a hairdresser bathing my head in bleach caused six inches of my hair to break off at the back&amp;mdash;I had grown used to the idea that it might never again grow past my shoulders.&lt;/p&gt;\r\n\r\n&lt;p&gt;But eight heat-free, dye-free weeks into lockdown, I caved in and straightened my hair once, out of curiosity. To my amazement, I found it had grown at least three inches, and I couldn&amp;rsquo;t see a single split end. Going au naturel, though, does require more product-based maintenance, and so I&amp;rsquo;ve been relying on a concoction of different potions to help tame my unruly mane, which never dries the same way no matter how hard I try. Previously, I would use a mask a few times a week, but recently, I&amp;rsquo;ve been drawn to oils and serums. Barbara Sturm&amp;rsquo;s Scalp Serum uses hyaluronic acid for hydration and purslane to counter irritation, leaving the scalp feeling wonderfully comfortable and calm. Fable &amp;amp; Mane&amp;rsquo;s pre-wash HoliRoots oil draws on&amp;nbsp;the ancient practice of Ayurvedic hair oiling and massage, using ashwagandha (a medicinal plant in the nightshade family) and a blend of 10 roots to tame thick tresses.&lt;/p&gt;\r\n\r\n&lt;p&gt;In the shower, Larry King&amp;rsquo;s cult Liquid Hairbrush conditioner brings me a step closer to the tangle-free sleekness of a Burne-Jones beauty, while K&amp;eacute;rastase&amp;rsquo;s Chronologiste Masque feeds my frail hair. Afterwards, I&amp;rsquo;ve found that a pea-size amount of Ola-plex&amp;rsquo;s leave-in Bond Smoother or Aveda&amp;rsquo;s Damage Remedy Daily Hair Repair (used while the hair is still wet) helps strengthen follicles so that they spring rather than snap when I brush through. The celebrity hairdresser Adam Reed also swears by apple cider vinegar rinses after shampoo, using just one tablespoon to seal cuticles and increase shine. Crucially, though, opt for a type that contains a health-boosting substance called &amp;lsquo;the mother&amp;rsquo; (strands of protein with enzymes and beneficial bacteria).&lt;/p&gt;\r\n\r\n&lt;p&gt;Perhaps another secret behind the luxuriant locks of fairy tale heroines is that they all seem to sleep incredibly well&amp;mdash;which is crucial for hair health. We spend a third of our lives in bed, so if you want to look as fresh as Sleeping Beauty, evening rituals and the right atmosphere are a must. Brushing your hair before you go to bed is a good habit: use a suitably gentle instrument and avoid tugging it through. The Manta brush has a flexible base to mould to your head and hand for better brushing, as it stimulates blood flow to the scalp; and a trusty Tangle Teezer slides through difficult knots.&lt;br /&gt;\r\nFor a simple upgrade to your nighttime routine, silk pillowcases help your hair to retain moisture, while reducing&lt;br /&gt;\r\nfrizzing and the development of split ends. Slip offers brilliant options, all made from long-fibre mulberry silk and non-toxic dyes in subtle shades, while Liberty&amp;rsquo;s are a bold and colourful printed alternative. Another method of overnight protection is wearing a hair wrap, which can prevent unwanted breakage caused by friction while you sleep. Silke London&amp;rsquo;s jewel-toned offerings left me feeling like some kind of Golden Age Hollywood starlet as I drifted off. So, even if you can&amp;rsquo;t be a sequestered beauty from a fairy tale, you can emerge into the outside world having reset your routine, armed with better habits and health. After all, as the age-old saying goes : hair is the crown you never take off.&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;u&gt;&lt;strong&gt;Legendary Potions &lt;/strong&gt;&lt;/u&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-003271120035634.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Moroccanoil Treatment Oil, Rs.3,150.&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-001271120035656.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;K&amp;egrave;rastase Cr&amp;egrave;me Chronologiste, price upon request&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-005271120035714.png' width='57' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Percy &amp;amp; Reed Perfectly Perfecting Wonder Care Conditioner, Rs.2,700&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-006271120035731.png' width='87' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Kiehl&amp;rsquo;s Deep Micro-Exfoliating Scalp Treatment, Rs.1,950&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-007271120035752.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Rene Furterer Complexe 5 Stimulating Plant Concentrate, Rs.4,000&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-009271120035810.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Aveda Damage Remedy Daily Hair Repair, Rs.2,300&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-010271120035828.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;L&amp;rsquo;Occitane Relaxing Pillow Mist, Rs.2,150&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;",
              "amp_fulltext": "&lt;p&gt;When I read Tennyson&rsquo;s poetry as a teenager, I could never understand why so many of his female protagonists insisted on staying inside and bemoaning their existence. &lsquo;No time hath she to sport and play,&rsquo; he writes of the Lady of Shalott, who watches the world go by through her enchanted mirror. How awful, I thought. And then our own world went into lockdown and I reconsidered the lessons to be learnt from the cloistered heroines of literature and legend.&lt;/p&gt;\n\n&lt;p&gt;Think of Rapunzel shuttered up in a turret, her mood glum but her beautiful hair &lsquo;fine as spun gold&rsquo;. The idea of glossy waves long and strong enough to haul a prince up to the top of a tower remains a fantasy, but all that time indoors clearly worked wonders for her tresses. There is hair inspiration aplenty in art, too, most strikingly in the work of the Pre-Raphaelites. Dante Gabriel Rossetti&rsquo;s painting Lady Lilith pictures Adam&rsquo;s first wife brushing out endless lustrous red locks, while in William Holman Hunt&rsquo;s The Lady of Shalott, the subject&rsquo;s long hair blows up around her almost supernaturally, stretching to the edges of the canvas. Now confined to the home myself, without access to salons and with no need for excessive home styling, my lengths certainly feel like a better quality yarn. Having abandoned my daily routine of a hairdryer and straighteners (not forgetting bimonthly top-ups to maintain my blonde color), my hair has become softer and is in better condition than ever before. After years of damage&mdash;and an incident known as a &lsquo;chemical cut&rsquo;, when a hairdresser bathing my head in bleach caused six inches of my hair to break off at the back&mdash;I had grown used to the idea that it might never again grow past my shoulders.&lt;/p&gt;\n\n&lt;p&gt;But eight heat-free, dye-free weeks into lockdown, I caved in and straightened my hair once, out of curiosity. To my amazement, I found it had grown at least three inches, and I couldn&rsquo;t see a single split end. Going au naturel, though, does require more product-based maintenance, and so I&rsquo;ve been relying on a concoction of different potions to help tame my unruly mane, which never dries the same way no matter how hard I try. Previously, I would use a mask a few times a week, but recently, I&rsquo;ve been drawn to oils and serums. Barbara Sturm&rsquo;s Scalp Serum uses hyaluronic acid for hydration and purslane to counter irritation, leaving the scalp feeling wonderfully comfortable and calm. Fable &amp;amp; Mane&rsquo;s pre-wash HoliRoots oil draws on&amp;nbsp;the ancient practice of Ayurvedic hair oiling and massage, using ashwagandha (a medicinal plant in the nightshade family) and a blend of 10 roots to tame thick tresses.&lt;/p&gt;\n\n&lt;p&gt;In the shower, Larry King&rsquo;s cult Liquid Hairbrush conditioner brings me a step closer to the tangle-free sleekness of a Burne-Jones beauty, while K&eacute;rastase&rsquo;s Chronologiste Masque feeds my frail hair. Afterwards, I&rsquo;ve found that a pea-size amount of Ola-plex&rsquo;s leave-in Bond Smoother or Aveda&rsquo;s Damage Remedy Daily Hair Repair (used while the hair is still wet) helps strengthen follicles so that they spring rather than snap when I brush through. The celebrity hairdresser Adam Reed also swears by apple cider vinegar rinses after shampoo, using just one tablespoon to seal cuticles and increase shine. Crucially, though, opt for a type that contains a health-boosting substance called &lsquo;the mother&rsquo; (strands of protein with enzymes and beneficial bacteria).&lt;/p&gt;\n\n&lt;p&gt;Perhaps another secret behind the luxuriant locks of fairy tale heroines is that they all seem to sleep incredibly well&mdash;which is crucial for hair health. We spend a third of our lives in bed, so if you want to look as fresh as Sleeping Beauty, evening rituals and the right atmosphere are a must. Brushing your hair before you go to bed is a good habit: use a suitably gentle instrument and avoid tugging it through. The Manta brush has a flexible base to mould to your head and hand for better brushing, as it stimulates blood flow to the scalp; and a trusty Tangle Teezer slides through difficult knots.&lt;br&gt;\nFor a simple upgrade to your nighttime routine, silk pillowcases help your hair to retain moisture, while reducing&lt;br&gt;\nfrizzing and the development of split ends. Slip offers brilliant options, all made from long-fibre mulberry silk and non-toxic dyes in subtle shades, while Liberty&rsquo;s are a bold and colourful printed alternative. Another method of overnight protection is wearing a hair wrap, which can prevent unwanted breakage caused by friction while you sleep. Silke London&rsquo;s jewel-toned offerings left me feeling like some kind of Golden Age Hollywood starlet as I drifted off. So, even if you can&rsquo;t be a sequestered beauty from a fairy tale, you can emerge into the outside world having reset your routine, armed with better habits and health. After all, as the age-old saying goes : hair is the crown you never take off.&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;u&gt;&lt;strong&gt;Legendary Potions &lt;/strong&gt;&lt;/u&gt;&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-003271120035634.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Moroccanoil Treatment Oil, Rs.3,150.&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-001271120035656.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;K&egrave;rastase Cr&egrave;me Chronologiste, price upon request&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-005271120035714.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Percy &amp;amp; Reed Perfectly Perfecting Wonder Care Conditioner, Rs.2,700&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-006271120035731.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Kiehl&rsquo;s Deep Micro-Exfoliating Scalp Treatment, Rs.1,950&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-007271120035752.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Rene Furterer Complexe 5 Stimulating Plant Concentrate, Rs.4,000&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-009271120035810.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Aveda Damage Remedy Daily Hair Repair, Rs.2,300&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-010271120035828.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;L&rsquo;Occitane Relaxing Pillow Mist, Rs.2,150&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;",
              "category_trail": [
                {
                  "id": 3,
                  "title": "Beauty",
                  "slug": "beauty",
                  "parent": "0"
                }
              ],
              "primary_section_id": 3,
              "primary_section_name": "Beauty",
              "primary_section_slug": "beauty",
              "primary_id": "3",
              "primary_id_name": "Beauty",
              "primary_id_slug": "beauty",
              "url": "/beauty/story/fairy-tale-hair-1980",
              "full_url": "https://alpha-harperbazar.intoday.in/beauty/story/fairy-tale-hair-1980",
              "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/beauty/story/fairy-tale-hair-1980",
              "slug": "fairy-tale-hair",
              "excerpt": "How lockdown has taken Meg Honigmann one step closer in her quest for glossy tresses worthy of a storybook heroine.",
              "publish_up": "2020-12-04 19:25:00",
              "publish_down": null,
              "metatitle": "Fairy Tale Hair",
              "metadesc": "How lockdown has taken Meg Honigmann one step closer in her quest for glossy tresses worthy of a storybook heroine.",
              "metakey": "",
              "highlights": "",
              "rating": "",
              "review_title": "",
              "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "review_pros": "",
              "review_cons": "",
              "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/fairytale041220072235.jpeg",
              "feature_image_data": {
                "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/fairytale041220072235.jpeg",
                "title": "fairytale041220072235",
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
              "created_at": "2020-11-27T10:33:00.000000Z",
              "created_by_id": "13",
              "created_by_name": "prachi goyal",
              "cache_time": "03/05/2021 03:54:04 pm",
              "updated_at": "2020-12-08 17:57:04",
              "galleries": "",
              "video_node": "",
              "previous_url_id": "1979"
            },
            {
              "content_id": 1978,
              "apps_id": "1",
              "post_types_id": "4",
              "content_type": "photo",
              "headline": "Makeup to Lift Your  Mood in Dark Times",
              "introtext": "As we face the unknown this season, we get ready to welcome the ‘new normal’ with adapting beauty and make-up trends.",
              "fulltext": "",
              "amp_fulltext": "",
              "category_trail": [
                {
                  "id": 3,
                  "title": "Beauty",
                  "slug": "beauty",
                  "parent": "0"
                }
              ],
              "primary_section_id": 3,
              "primary_section_name": "Beauty",
              "primary_section_slug": "beauty",
              "primary_id": "3",
              "primary_id_name": "Beauty",
              "primary_id_slug": "beauty",
              "url": "/beauty/photo/safe-and-beautiful-1978",
              "full_url": "https://alpha-harperbazar.intoday.in/beauty/photo/safe-and-beautiful-1978",
              "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/beauty/photo/safe-and-beautiful-1978",
              "slug": "safe-and-beautiful",
              "excerpt": "As we face the unknown this season, we get ready to welcome the ‘new normal’ with adapting beauty and make-up trends.",
              "publish_up": "2020-11-30 18:23:00",
              "publish_down": null,
              "metatitle": "Safe And Beautiful",
              "metadesc": "As we face the unknown this season, we get ready to welcome the ‘new normal’ with adapting beauty and make-up trends.",
              "metakey": "",
              "highlights": "",
              "rating": "",
              "review_title": "",
              "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "review_pros": "",
              "review_cons": "",
              "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/beauty-pandemic301120062219.jpeg",
              "feature_image_data": {
                "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/beauty-pandemic301120062219.jpeg",
                "title": "beauty-pandemic301120062219",
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
              "created_at": "2020-11-26T13:45:54.000000Z",
              "created_by_id": "13",
              "created_by_name": "prachi goyal",
              "cache_time": "03/05/2021 03:54:04 pm",
              "updated_at": "2020-12-15 18:11:02",
              "galleries": [
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-001261120070322.png",
                  "extra": {
                    "text": "image-001261120070322",
                    "caption": "",
                    "alt_text": "",
                    "description": "<p>Hair accessories, Gucci.<br />\nDress, Sandro.<br />\nBlouse , Dries van Noten.</p>\n\n<p>&nbsp;</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-002261120070323.png",
                  "extra": {
                    "text": "image-002261120070323",
                    "caption": "",
                    "alt_text": "",
                    "description": "<p>Blouse ,&nbsp;Riani.</p>\n\n<p>Coat , Des Petits Hauts.</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-004261120070323.png",
                  "extra": {
                    "text": "image-004261120070323",
                    "caption": "",
                    "alt_text": "",
                    "description": "<p>Blouse , Odeeh.</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-003261120070323.png",
                  "extra": {
                    "text": "null",
                    "caption": "null",
                    "alt_text": "null",
                    "description": "<p>Mask Riani, Blouse Sandro,&nbsp;Pants Susumu Ai.</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-000261120070322.png",
                  "extra": {
                    "text": "null",
                    "caption": "null",
                    "alt_text": "null",
                    "description": "<p>Mask : Odeeh. Overall Massimo Dutti.<br />\nMoisturiser: Augustinus Bader The Cream<br />\nPrimer: NARS Radiance Primer<br />\nFoundation: Bobbi Brown Skin Long-Wear Weightless Foundation SPF 15<br />\nEyeshadow: Christian Dior Backstage Glow Face Palette in 001<br />\nMascara: Dior Diorshow Black Out Waterproof Mascara</p>"
                  }
                }
              ],
              "video_node": "",
              "previous_url_id": "1977"
            },
            {
              "content_id": 1981,
              "apps_id": "1",
              "post_types_id": "2",
              "content_type": "story",
              "headline": "Homegrown Indian Beauty Brands Worth Knowing About",
              "introtext": "Bazaar takes stock of some of the leading homegrown ayurvedic and beauty brands and  that should be on your radar",
              "fulltext": "&lt;p&gt;As the world puts its faith in turmeric-infused milk and spiced concoctions, inspired by Ayurveda to fight the pandemic, beauty&amp;rsquo;s focus has also shifted to homegrown brands whose origins lie in the ancient Indian science of life. Bazaar takes stock of some of the leading players that should be on your radar.&lt;/p&gt;\r\n\r\n&lt;p&gt;While globalization in the early &amp;rsquo;90s focused our attention on scientific formulas that claimed to tackle all skin concerns, the natural Indian beauty industry&amp;mdash;which was shrugged off for peddling outdated theories and ideas&amp;mdash;has witnessed a surge, globally, over the last few years.&lt;/p&gt;\r\n\r\n&lt;p&gt;Indian women inherit beauty wisdom from their mothers and grandmothers. And even though these pearls have been packaged and sold since decades, homegrown beauty brands have received global recognition only recently.&lt;br /&gt;\r\nForest Essentials can be credited, to a large extent, for this image makeover. Launched in the year 2000, the brand&amp;rsquo;s heartening philosophy&amp;mdash;&amp;lsquo;If you cannot eat it, do not use it on your skin&amp;rsquo;&amp;mdash;piqued everyone&amp;rsquo;s interest in the clean beauty movement. A traditional skincare brand, it beautifully packages Ayurvedic beauty rituals, giving them a luxe twist. The brand is also known for using decadent ingredients like 24-karat gold, saffron, and roses, among others to create a more sensory experience with an emphasis on results. And with Est&amp;eacute;e Lauder investing in the brand, Forest Essentials has made global strides with its presence in key locations. Kama Ayurveda is another India-born brand that helped in steering the movement in the right direction. Their luxurious take on Ayurveda includes simple packaging&amp;nbsp;with striking motifs that are reminiscent of Indian art, and potent formulas (infused with sandalwood, turmeric, tamarind, etc.) that promise to treat acne, signs of ageing, and everything in between.&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-017271120041032.png' width='234' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Forest Essentials Facial Ubtan in Roop Nikhar Gulab, Rs.1,075&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-013271120041051.png' width='117' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;RAS Luxury Oils Radiance Beauty- Boosting Day Face Elixir, Rs.2,550&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-020271120041124.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Dr. Sheth&amp;rsquo;s Basic Brightening Sunscreen, Rs.950.&lt;/p&gt;\r\n\r\n&lt;p&gt;It is important to mention that the Made In India beauty revolution started long before Ayurvedic lotions and potions were beautifully-cased to lure Indian and international enthusiasts. Brands like Biotique, Shahnaz Husain Herbals, and Aroma Magic led the way, ensuring that natural and organic products weren&amp;rsquo;t lost in the nonglamorous aisles of multi-brand stores.&lt;/p&gt;\r\n\r\n&lt;p&gt;The Indian skincare offering has grown tremendously over the past&amp;nbsp;few years, with dozens of new brands entering the market. According to research, the organic beauty market is expected to grow eight to 10 percent every year&amp;mdash;a lot to do with millennials&amp;rsquo; need to make conscious choices about what they eat, wear, and apply to their skins. The boutique homegrown brands boast all the right buzzwords&amp;mdash;natural, organic, cruelty-free, vegan&amp;mdash;giving these brands an edge over established names. And this shift has made the beauty world recognise that we have the credentials to produce excellent products.&lt;/p&gt;\r\n\r\n&lt;p&gt;Pahadi Local, for instance, is one brand that uses the &amp;lsquo;goodness of the hills&amp;rsquo; to curate its line of body oils, scrubs,&lt;br /&gt;\r\nteas, and more. As it sources all its ingredients from the lush region of Himachal Pradesh, the brand&amp;rsquo;s main focus lies in setting a limit to the supply chain, as it is conscious about not straining the abundance of the Himalayas, which may have an adverse effect on the ecosystem. Pahadi Local&amp;rsquo;s produce comes in small batches, and if you are looking at trying one of the products, make it Gutti Ka Tel (Apricot Kernel Oil)&amp;mdash; one of their bestsellers, that comes highly-recommended by the Indian conscious beauty community. Ohria Ayurveda is another brand that sources precious herbs and plant-based ingredients from the Himalayas for its Ayurvedic formulas. Apart from that, their Kansa Wand (a traditional Ayurvedic massage tool) is also gaining favour for its many benefits. Along with soothing the senses, massaging your face daily with this wand draws out toxins and acidity accumulated in the skin, clearing up the complexion.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-009271120041354.png' width='152' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Pahadi Local Gutti Ka Tel, Rs.1,850&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-011271120041420.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Purearth Qing Cleansing Oil, Rs.5,872&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;India has always been partial to oils&amp;mdash;face, body, and aromatherapy. RAS Luxury Oils, a brand born in the small town of Ranchi, recognised this opportunity to launch a range of oils that cater to various skin types and concerns.&lt;br /&gt;\r\nAnd soon enough, it became a favourite, thanks to its rich,potent formulas. Indulgeo Essentials, too, grabbed a portion of the beauty pie by being India&amp;rsquo;s answer to Farsali&amp;mdash;a brand founded by global beauty influencer Farah Dhukai and her husband Sal Ali. The Indian brand has secured a spot with its face mists, as well as hair and face oils. Other noteworthy names to watch out for include Dr Sheth&amp;rsquo;s, Mantra Herbal, Kal Hans, Perenne, Bare Anatomy, and Just Herbs, among many others that are working towards creating a niche for themselves. With the average consumer being more aware of what they should and shouldn&amp;rsquo;t be feeding their skin, Indian brands&amp;mdash;with their small-but-effective portfolio of products&amp;mdash;are gaining people&amp;rsquo;s confidence, confirming a spot for themselves in this $532 billion industry.&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-007271120041528.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Mantra Herbal Saffron and Calendula Sun Cream, Rs.1,199&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-025271120041553.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Kama Ayurveda Lavender Patchouli Hair Cleanser, Rs.675&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-023271120041804.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Perenne Oil Control Clarifying Toner, Rs.450&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;",
              "amp_fulltext": "&lt;p&gt;As the world puts its faith in turmeric-infused milk and spiced concoctions, inspired by Ayurveda to fight the pandemic, beauty&rsquo;s focus has also shifted to homegrown brands whose origins lie in the ancient Indian science of life. Bazaar takes stock of some of the leading players that should be on your radar.&lt;/p&gt;\n\n&lt;p&gt;While globalization in the early &rsquo;90s focused our attention on scientific formulas that claimed to tackle all skin concerns, the natural Indian beauty industry&mdash;which was shrugged off for peddling outdated theories and ideas&mdash;has witnessed a surge, globally, over the last few years.&lt;/p&gt;\n\n&lt;p&gt;Indian women inherit beauty wisdom from their mothers and grandmothers. And even though these pearls have been packaged and sold since decades, homegrown beauty brands have received global recognition only recently.&lt;br&gt;\nForest Essentials can be credited, to a large extent, for this image makeover. Launched in the year 2000, the brand&rsquo;s heartening philosophy&mdash;&lsquo;If you cannot eat it, do not use it on your skin&rsquo;&mdash;piqued everyone&rsquo;s interest in the clean beauty movement. A traditional skincare brand, it beautifully packages Ayurvedic beauty rituals, giving them a luxe twist. The brand is also known for using decadent ingredients like 24-karat gold, saffron, and roses, among others to create a more sensory experience with an emphasis on results. And with Est&eacute;e Lauder investing in the brand, Forest Essentials has made global strides with its presence in key locations. Kama Ayurveda is another India-born brand that helped in steering the movement in the right direction. Their luxurious take on Ayurveda includes simple packaging&amp;nbsp;with striking motifs that are reminiscent of Indian art, and potent formulas (infused with sandalwood, turmeric, tamarind, etc.) that promise to treat acne, signs of ageing, and everything in between.&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-017271120041032.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Forest Essentials Facial Ubtan in Roop Nikhar Gulab, Rs.1,075&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-013271120041051.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;RAS Luxury Oils Radiance Beauty- Boosting Day Face Elixir, Rs.2,550&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-020271120041124.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Dr. Sheth&rsquo;s Basic Brightening Sunscreen, Rs.950.&lt;/p&gt;\n\n&lt;p&gt;It is important to mention that the Made In India beauty revolution started long before Ayurvedic lotions and potions were beautifully-cased to lure Indian and international enthusiasts. Brands like Biotique, Shahnaz Husain Herbals, and Aroma Magic led the way, ensuring that natural and organic products weren&rsquo;t lost in the nonglamorous aisles of multi-brand stores.&lt;/p&gt;\n\n&lt;p&gt;The Indian skincare offering has grown tremendously over the past&amp;nbsp;few years, with dozens of new brands entering the market. According to research, the organic beauty market is expected to grow eight to 10 percent every year&mdash;a lot to do with millennials&rsquo; need to make conscious choices about what they eat, wear, and apply to their skins. The boutique homegrown brands boast all the right buzzwords&mdash;natural, organic, cruelty-free, vegan&mdash;giving these brands an edge over established names. And this shift has made the beauty world recognise that we have the credentials to produce excellent products.&lt;/p&gt;\n\n&lt;p&gt;Pahadi Local, for instance, is one brand that uses the &lsquo;goodness of the hills&rsquo; to curate its line of body oils, scrubs,&lt;br&gt;\nteas, and more. As it sources all its ingredients from the lush region of Himachal Pradesh, the brand&rsquo;s main focus lies in setting a limit to the supply chain, as it is conscious about not straining the abundance of the Himalayas, which may have an adverse effect on the ecosystem. Pahadi Local&rsquo;s produce comes in small batches, and if you are looking at trying one of the products, make it Gutti Ka Tel (Apricot Kernel Oil)&mdash; one of their bestsellers, that comes highly-recommended by the Indian conscious beauty community. Ohria Ayurveda is another brand that sources precious herbs and plant-based ingredients from the Himalayas for its Ayurvedic formulas. Apart from that, their Kansa Wand (a traditional Ayurvedic massage tool) is also gaining favour for its many benefits. Along with soothing the senses, massaging your face daily with this wand draws out toxins and acidity accumulated in the skin, clearing up the complexion.&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-009271120041354.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Pahadi Local Gutti Ka Tel, Rs.1,850&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-011271120041420.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Purearth Qing Cleansing Oil, Rs.5,872&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;India has always been partial to oils&mdash;face, body, and aromatherapy. RAS Luxury Oils, a brand born in the small town of Ranchi, recognised this opportunity to launch a range of oils that cater to various skin types and concerns.&lt;br&gt;\nAnd soon enough, it became a favourite, thanks to its rich,potent formulas. Indulgeo Essentials, too, grabbed a portion of the beauty pie by being India&rsquo;s answer to Farsali&mdash;a brand founded by global beauty influencer Farah Dhukai and her husband Sal Ali. The Indian brand has secured a spot with its face mists, as well as hair and face oils. Other noteworthy names to watch out for include Dr Sheth&rsquo;s, Mantra Herbal, Kal Hans, Perenne, Bare Anatomy, and Just Herbs, among many others that are working towards creating a niche for themselves. With the average consumer being more aware of what they should and shouldn&rsquo;t be feeding their skin, Indian brands&mdash;with their small-but-effective portfolio of products&mdash;are gaining people&rsquo;s confidence, confirming a spot for themselves in this $532 billion industry.&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-007271120041528.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Mantra Herbal Saffron and Calendula Sun Cream, Rs.1,199&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-025271120041553.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Kama Ayurveda Lavender Patchouli Hair Cleanser, Rs.675&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-023271120041804.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Perenne Oil Control Clarifying Toner, Rs.450&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;",
              "category_trail": [
                {
                  "id": 3,
                  "title": "Beauty",
                  "slug": "beauty",
                  "parent": "0"
                }
              ],
              "primary_section_id": 3,
              "primary_section_name": "Beauty",
              "primary_section_slug": "beauty",
              "primary_id": "3",
              "primary_id_name": "Beauty",
              "primary_id_slug": "beauty",
              "url": "/beauty/story/national-treasures-1981",
              "full_url": "https://alpha-harperbazar.intoday.in/beauty/story/national-treasures-1981",
              "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/beauty/story/national-treasures-1981",
              "slug": "national-treasures",
              "excerpt": "Bazaar takes stock of some of the leading homegrown ayurvedic and beauty brands and  that should be on your radar",
              "publish_up": "2020-11-30 18:02:00",
              "publish_down": null,
              "metatitle": "National Treasures",
              "metadesc": "As the world puts its faith in turmeric infused milk and spiced concoctions, inspired by Ayurveda to fight the\r\npandemic, beauty’s focus has also shifted to homegrown brands whose origins lie in the ancient Indian science of life. Bazaar takes stock of so",
              "metakey": "",
              "highlights": "",
              "rating": "",
              "review_title": "",
              "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "review_pros": "",
              "review_cons": "",
              "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/national301120060510.jpeg",
              "feature_image_data": {
                "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/national301120060510.jpeg",
                "title": "national301120060510",
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
              "created_at": "2020-11-27T10:50:32.000000Z",
              "created_by_id": "13",
              "created_by_name": "prachi goyal",
              "cache_time": "03/05/2021 03:54:07 pm",
              "updated_at": "2020-12-04 17:26:45",
              "galleries": "",
              "video_node": "",
              "previous_url_id": "1980"
            },
            {
              "content_id": 1979,
              "apps_id": "1",
              "post_types_id": "2",
              "content_type": "story",
              "headline": "8  Women Share Their Lockdown Beauty Learnings",
              "introtext": "We asked our beauty-conscious tribe to let us in on the tweaks they have made to their beauty regimes to achieve flawless skin, luscious locks, and more.",
              "fulltext": "&lt;p&gt;&lt;strong&gt;&lt;u&gt;Samyukta Nair, Food and Fashion Entrepreneur&lt;/u&gt;&lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-006271120025708.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;ldquo;Embracing my curls during this time has been a game-changer for me, and I have been enjoying them courtesy Curlsmith&amp;rsquo;s Curl Quenching Conditioning Wash and their Oil-In-Cream. I&amp;rsquo;ve also made a conscious effort to change my night-time skincare routine with a weekly deep cleanse and exfoliation, using the Forest Essentials Multani Mitti Ubtan mixed with their Aloevera Juice. I call it a night with a thin layer of their Ojas Illuminating Night Beauty Balm.&amp;rdquo;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-014271120025900.png' /&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-016271120025944.png' width='70' /&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-032271120030016.png' width='140' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Forest Essentials Aloevera Juice, Rs.575&lt;/p&gt;\r\n\r\n&lt;p&gt;Curlsmith Curl Quenching Conditioning Wash and Oil-In- Cream,&amp;nbsp; Rs.2,000 (approx),&lt;/p&gt;\r\n\r\n&lt;p&gt;Ojas Illuminating Night Beauty Balm, Rs.3,800.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;u&gt;&lt;strong&gt;Mallika Tarkas Parekh, Founder and Director of AMP Fitness, LLP, Exclusive Licensee of Physique 57 in India&lt;/strong&gt;&lt;/u&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-005271120030127.png' width='232' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;ldquo;Honestly, it feels amazing to be able to give my make-up products a rest! The lockdown has been about exfoliation and hydration for me. My favourites include the SkinCeuticals C + AHA serum, which smells awful but really works for my skin, the SkinCeuticals Hydrating B5 Gel, and the Joanna Vargas Exfoliating Mask and Daily Hydrating Cream. If I&amp;rsquo;m feeling fancy (even for Zoom meetings), I spritz on Jo Malone&amp;rsquo;s Nectarine Blossom and Honey Cologne to brighten up my mood.&amp;rdquo;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-020271120032417.png' width='183' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Skinceuticals Hydrating B5 Gel, Rs.6,100 (approx)&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;u&gt;&lt;strong&gt;&amp;nbsp;Karishma Manga Bedi, Entrepreneur&lt;/strong&gt;&lt;/u&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-009271120032511.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;ldquo;I decided to use this time at home to do all the things I couldn&amp;rsquo;t earlier, including learning to play the piano, reading, and making time for self-care. In addition to my regular beauty regime, I have started using the Forest Essentials Facial Ubtan (in Soundarya) as a face pack in the morning and I follow it up with their Facial Tonic Mist Hasayan Rose. At night, I use the Forest Essentials Ojas Glow Replenishing Night Beauty Balm and also massage my face with a rose quartz roller that has been kept in the fridge for at least an hour. The result is supple and plumped skin.&amp;rdquo;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-017271120032640.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Forest Essentials Facial Tonic Mist Rosewater&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;u&gt;&lt;strong&gt;Shaheen Abbas, Jewellery Designer&lt;/strong&gt;&lt;/u&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-007271120032738.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;ldquo;During this lockdown, my focus has been on keeping my skin hydrated and exfoliated. I have been using Farmacy&amp;rsquo;s Honeymoon Glow AHA Resurfacing Night Serum, mixed with The Inkey List&amp;rsquo;s Hyaluronic Acid Serum two to three times a week&amp;mdash;this combination really helps keep my skin looking fresh. During the day, I use SK-II&amp;rsquo;s Facial Treatment Essence, followed by Drunk Elephant&amp;rsquo;s C-Firma Day Serum (again mixed with hyaluronic acid). For overall hydration, I have been using Drunk Elephant&amp;rsquo;s Protini Polypeptide Cream, which is fabulous! The Oats Cleansing Balm from The Inkey List has been my go-to, lately, because it keeps my skin clean without stripping off the natural oils. And when I feel like my skin needs an extra shot of hydration, I turn to Summer Fridays&amp;rsquo; Jet Lag Mask.&amp;rdquo;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-021271120033013.png' /&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-022271120033032.png' /&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-023271120033052.png' width='63' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Drunk Elephant Protini Polypeptide Cream, Rs.5,000 (approx),&lt;/p&gt;\r\n\r\n&lt;p&gt;The Inkey List Hyaluronic Acid Serum, Rs. 590 (approx), Farmacy&lt;/p&gt;\r\n\r\n&lt;p&gt;Honeymoon Glow, Rs.4,270 (approx).&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;u&gt;&lt;strong&gt;Diva Dhawan, Model&lt;/strong&gt;&lt;/u&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-012271120033228.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;ldquo;I have taken this time to really take care of my skin...keeping it clean and allowing it to breathe. I have opted for a super-minimal routine. The two products that I&amp;rsquo;m using at the moment are Bioderma&amp;rsquo;s moisturiser for dry skin and Bobbi Brown&amp;rsquo;s Vitamin Enriched Eye Base. Oh, and when I feel like pampering my skin, I massage my face with a jade roller...mostly once a week.&amp;rdquo;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-025271120033414.png' width='116' /&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-024271120033444.png' width='242' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Bioderma Atoderm Cr&amp;egrave;me, Rs.599&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;u&gt;&lt;strong&gt;Monica Dogra, Musician&lt;/strong&gt;&lt;/u&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-010271120033530.png' width='275' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;ldquo;Over the past few months I haven&amp;rsquo;t been able to visit my dermatologist or facialist. As a result, I have made a conscious shift in the products I use every day to ensure my skin is taken care of. Good skincare leads to great skin, and I have been using La Mer&amp;rsquo;s The Deep Cleansing Foam, followed by a moisturiser by Peter Thomas Roth, which keeps my skin hydrated all day long. And yes, I religiously use an eye cream&amp;mdash;the one by Clinique is excellent!&amp;rdquo;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-029271120033648.png' width='85' /&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-030271120033713.png' /&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-028271120033740.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;La Mer Deep The Cleansing Foam, Rs.6,750 (approx)&lt;/p&gt;\r\n\r\n&lt;p&gt;Hydrating Moisturizer, Rs.3,800 (approx), Clinique&lt;br /&gt;\r\nPep-Start Eye Cream, Rs.2,300.&lt;/p&gt;\r\n\r\n&lt;p&gt;Peter Thomas Roth Water Drench Hyaluronic Cloud Cream&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;u&gt;&lt;strong&gt;Shaleena Nathani, Celebrity Stylist&lt;/strong&gt;&lt;/u&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-001271120033940.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;ldquo;The one thing that this pandemic has taught me, in terms of skincare, is consistency. I was extremely impatient earlier, and over the past few months, I have religiously followed a regime recommended by a derm, and it has really helped me. It&amp;rsquo;s quite simple, actually: I start off with a foam cleanser and apply a serum mixed with a bit of retinol cream. Then, I top it up with a moisturiser. And I wear sunscreen all the time, even when I am indoors. These simple steps, and a little bit of patience, have transformed my skin.&amp;rdquo;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-031271120034117.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Shangpree Spa Care System S-Energy Facial Mousse Cleanser, Rs.1,900&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;&lt;u&gt;Richa Moorjani, Actor&lt;/u&gt;&lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-000271120034205.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;ldquo;I love using clean, cruelty-free, great-smelling products. Throughout the lockdown, I&amp;rsquo;ve been using Mario Badescu&amp;rsquo;s Cleansing Enzyme Gel and Botanical Exfoliating Scrub to cleanse and exfoliate. I follow that with their Aloe, Chamomile and Lavender Facial Spray (which I also use throughout the day), and then apply Soma Ayurvedic&amp;rsquo;s Vitamin C Serum, followed by their Lavender, Moringa, Avocado Under-Eye Gel. During the day, I always wear a moisturiser with SPF, like Mineral Fusion&amp;rsquo;s SPF 40 Moisturizer; and at night, I slather on Soma Ayurvedic&amp;rsquo;s Aloe Vera and Saffron Anti-Aging Cream.&amp;rdquo;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-026271120034350.png' width='63' /&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-027271120034412.png' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Mario Badescu Facial Spray with Aloe, Chamomile and Lavender Facial, Rs.510 (approx)&lt;/p&gt;\r\n\r\n&lt;p&gt;Mineral Fusion Mineral SPF 40 Face Moisturizer, Rs.1,840 (approx).&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;",
              "amp_fulltext": "&lt;p&gt;&lt;strong&gt;&lt;u&gt;Samyukta Nair, Food and Fashion Entrepreneur&lt;/u&gt;&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-006271120025708.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&ldquo;Embracing my curls during this time has been a game-changer for me, and I have been enjoying them courtesy Curlsmith&rsquo;s Curl Quenching Conditioning Wash and their Oil-In-Cream. I&rsquo;ve also made a conscious effort to change my night-time skincare routine with a weekly deep cleanse and exfoliation, using the Forest Essentials Multani Mitti Ubtan mixed with their Aloevera Juice. I call it a night with a thin layer of their Ojas Illuminating Night Beauty Balm.&rdquo;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-014271120025900.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-016271120025944.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-032271120030016.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Forest Essentials Aloevera Juice, Rs.575&lt;/p&gt;\n\n&lt;p&gt;Curlsmith Curl Quenching Conditioning Wash and Oil-In- Cream,&amp;nbsp; Rs.2,000 (approx),&lt;/p&gt;\n\n&lt;p&gt;Ojas Illuminating Night Beauty Balm, Rs.3,800.&lt;/p&gt;\n\n&lt;p&gt;&lt;u&gt;&lt;strong&gt;Mallika Tarkas Parekh, Founder and Director of AMP Fitness, LLP, Exclusive Licensee of Physique 57 in India&lt;/strong&gt;&lt;/u&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-005271120030127.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&ldquo;Honestly, it feels amazing to be able to give my make-up products a rest! The lockdown has been about exfoliation and hydration for me. My favourites include the SkinCeuticals C + AHA serum, which smells awful but really works for my skin, the SkinCeuticals Hydrating B5 Gel, and the Joanna Vargas Exfoliating Mask and Daily Hydrating Cream. If I&rsquo;m feeling fancy (even for Zoom meetings), I spritz on Jo Malone&rsquo;s Nectarine Blossom and Honey Cologne to brighten up my mood.&rdquo;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-020271120032417.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Skinceuticals Hydrating B5 Gel, Rs.6,100 (approx)&lt;/p&gt;\n\n&lt;p&gt;&lt;u&gt;&lt;strong&gt;&amp;nbsp;Karishma Manga Bedi, Entrepreneur&lt;/strong&gt;&lt;/u&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-009271120032511.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&ldquo;I decided to use this time at home to do all the things I couldn&rsquo;t earlier, including learning to play the piano, reading, and making time for self-care. In addition to my regular beauty regime, I have started using the Forest Essentials Facial Ubtan (in Soundarya) as a face pack in the morning and I follow it up with their Facial Tonic Mist Hasayan Rose. At night, I use the Forest Essentials Ojas Glow Replenishing Night Beauty Balm and also massage my face with a rose quartz roller that has been kept in the fridge for at least an hour. The result is supple and plumped skin.&rdquo;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-017271120032640.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Forest Essentials Facial Tonic Mist Rosewater&lt;/p&gt;\n\n&lt;p&gt;&lt;u&gt;&lt;strong&gt;Shaheen Abbas, Jewellery Designer&lt;/strong&gt;&lt;/u&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-007271120032738.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&ldquo;During this lockdown, my focus has been on keeping my skin hydrated and exfoliated. I have been using Farmacy&rsquo;s Honeymoon Glow AHA Resurfacing Night Serum, mixed with The Inkey List&rsquo;s Hyaluronic Acid Serum two to three times a week&mdash;this combination really helps keep my skin looking fresh. During the day, I use SK-II&rsquo;s Facial Treatment Essence, followed by Drunk Elephant&rsquo;s C-Firma Day Serum (again mixed with hyaluronic acid). For overall hydration, I have been using Drunk Elephant&rsquo;s Protini Polypeptide Cream, which is fabulous! The Oats Cleansing Balm from The Inkey List has been my go-to, lately, because it keeps my skin clean without stripping off the natural oils. And when I feel like my skin needs an extra shot of hydration, I turn to Summer Fridays&rsquo; Jet Lag Mask.&rdquo;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-021271120033013.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-022271120033032.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-023271120033052.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Drunk Elephant Protini Polypeptide Cream, Rs.5,000 (approx),&lt;/p&gt;\n\n&lt;p&gt;The Inkey List Hyaluronic Acid Serum, Rs. 590 (approx), Farmacy&lt;/p&gt;\n\n&lt;p&gt;Honeymoon Glow, Rs.4,270 (approx).&lt;/p&gt;\n\n&lt;p&gt;&lt;u&gt;&lt;strong&gt;Diva Dhawan, Model&lt;/strong&gt;&lt;/u&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-012271120033228.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&ldquo;I have taken this time to really take care of my skin...keeping it clean and allowing it to breathe. I have opted for a super-minimal routine. The two products that I&rsquo;m using at the moment are Bioderma&rsquo;s moisturiser for dry skin and Bobbi Brown&rsquo;s Vitamin Enriched Eye Base. Oh, and when I feel like pampering my skin, I massage my face with a jade roller...mostly once a week.&rdquo;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-025271120033414.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-024271120033444.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Bioderma Atoderm Cr&egrave;me, Rs.599&lt;/p&gt;\n\n&lt;p&gt;&lt;u&gt;&lt;strong&gt;Monica Dogra, Musician&lt;/strong&gt;&lt;/u&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-010271120033530.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&ldquo;Over the past few months I haven&rsquo;t been able to visit my dermatologist or facialist. As a result, I have made a conscious shift in the products I use every day to ensure my skin is taken care of. Good skincare leads to great skin, and I have been using La Mer&rsquo;s The Deep Cleansing Foam, followed by a moisturiser by Peter Thomas Roth, which keeps my skin hydrated all day long. And yes, I religiously use an eye cream&mdash;the one by Clinique is excellent!&rdquo;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-029271120033648.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-030271120033713.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-028271120033740.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;La Mer Deep The Cleansing Foam, Rs.6,750 (approx)&lt;/p&gt;\n\n&lt;p&gt;Hydrating Moisturizer, Rs.3,800 (approx), Clinique&lt;br&gt;\nPep-Start Eye Cream, Rs.2,300.&lt;/p&gt;\n\n&lt;p&gt;Peter Thomas Roth Water Drench Hyaluronic Cloud Cream&lt;/p&gt;\n\n&lt;p&gt;&lt;u&gt;&lt;strong&gt;Shaleena Nathani, Celebrity Stylist&lt;/strong&gt;&lt;/u&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-001271120033940.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&ldquo;The one thing that this pandemic has taught me, in terms of skincare, is consistency. I was extremely impatient earlier, and over the past few months, I have religiously followed a regime recommended by a derm, and it has really helped me. It&rsquo;s quite simple, actually: I start off with a foam cleanser and apply a serum mixed with a bit of retinol cream. Then, I top it up with a moisturiser. And I wear sunscreen all the time, even when I am indoors. These simple steps, and a little bit of patience, have transformed my skin.&rdquo;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-031271120034117.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Shangpree Spa Care System S-Energy Facial Mousse Cleanser, Rs.1,900&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;&lt;u&gt;Richa Moorjani, Actor&lt;/u&gt;&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-000271120034205.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&ldquo;I love using clean, cruelty-free, great-smelling products. Throughout the lockdown, I&rsquo;ve been using Mario Badescu&rsquo;s Cleansing Enzyme Gel and Botanical Exfoliating Scrub to cleanse and exfoliate. I follow that with their Aloe, Chamomile and Lavender Facial Spray (which I also use throughout the day), and then apply Soma Ayurvedic&rsquo;s Vitamin C Serum, followed by their Lavender, Moringa, Avocado Under-Eye Gel. During the day, I always wear a moisturiser with SPF, like Mineral Fusion&rsquo;s SPF 40 Moisturizer; and at night, I slather on Soma Ayurvedic&rsquo;s Aloe Vera and Saffron Anti-Aging Cream.&rdquo;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-026271120034350.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-027271120034412.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Mario Badescu Facial Spray with Aloe, Chamomile and Lavender Facial, Rs.510 (approx)&lt;/p&gt;\n\n&lt;p&gt;Mineral Fusion Mineral SPF 40 Face Moisturizer, Rs.1,840 (approx).&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;",
              "category_trail": [
                {
                  "id": 3,
                  "title": "Beauty",
                  "slug": "beauty",
                  "parent": "0"
                }
              ],
              "primary_section_id": 3,
              "primary_section_name": "Beauty",
              "primary_section_slug": "beauty",
              "primary_id": "3",
              "primary_id_name": "Beauty",
              "primary_id_slug": "beauty",
              "url": "/beauty/story/8-lovely-women-share-their-lockdown-beauty-learnings-1979",
              "full_url": "https://alpha-harperbazar.intoday.in/beauty/story/8-lovely-women-share-their-lockdown-beauty-learnings-1979",
              "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/beauty/story/8-lovely-women-share-their-lockdown-beauty-learnings-1979",
              "slug": "8-lovely-women-share-their-lockdown-beauty-learnings",
              "excerpt": "We asked our beauty-conscious tribe to let us in on the tweaks they have made to their beauty regimes to achieve flawless skin, luscious locks, and more.",
              "publish_up": "2020-11-30 18:01:00",
              "publish_down": null,
              "metatitle": "Changing Faces",
              "metadesc": "We asked our beauty-conscious tribe to let us in on the tweaks they have made to their beauty regimes\r\nto achieve flawless skin, luscious locks, and more.",
              "metakey": "",
              "highlights": "",
              "rating": "",
              "review_title": "",
              "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "review_pros": "",
              "review_cons": "",
              "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/beauty301120055703.jpeg",
              "feature_image_data": {
                "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/beauty301120055703.jpeg",
                "title": "beauty301120055703",
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
              "created_at": "2020-11-27T09:34:03.000000Z",
              "created_by_id": "13",
              "created_by_name": "prachi goyal",
              "cache_time": "03/05/2021 03:54:14 pm",
              "updated_at": "2020-12-04 17:21:22",
              "galleries": "",
              "video_node": "",
              "previous_url_id": "1952"
            },
            {
              "content_id": 1936,
              "apps_id": "1",
              "post_types_id": "2",
              "content_type": "story",
              "headline": "The Correct Order to Apply Your Skincare Routine",
              "introtext": "&lt;p&gt;Bazaar India tells you the exact order of skincare products to achieve the most effective results, in the AM and PM.&lt;/p&gt;",
              "fulltext": "&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;Everywhere you look these days, you are inundated with a plethora of skincare products to use in order to achieve flawless, glowing skin. If you are confused as to how exactly you should use your various products, and at what time and in what order, follow our step-by-step guide and get the maximum out of your skincare regimen. Here&amp;#39;s the exact order of skincare products to achieve the most effective results, plus we have got 5 useful tips on how to make your products work best for you.&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;strong&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;AM&lt;/span&gt;&lt;/span&gt;&lt;/strong&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;1.Cleanser (oil-based or water-based)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;2.pH balancer (toners, essences, mists)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;3.Antioxidant (vitamin C)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;4.Eye cream&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;5.Serum (anti-ageing, reparative, acne-fighting)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;6.Oil&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;7.Moisturiser&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;8.Sunscreen&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;strong&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;PM&lt;/span&gt;&lt;/span&gt;&lt;/strong&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;1.Makeup remover&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;2.Cleanser&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;3.Toner, essences, mists&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;4.Mask (sheet, peel-off, clay)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;5.AHA (glycolic acid, lactic acid)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;6.BHA (salicylic acid)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;7.Vitamin A (retinol)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;8.Antioxidants (vitamin E, niacinamide, polyphenols, flavonoids)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;9.Serum&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;10.Eye cream, moisturizer or a sleep mask&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;11. Hyaluronic Acid, Peptides, Ceramides&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='font-size:10pt'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;12.Oil&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p style='text-align:justify'&gt;&lt;span style='font-size:10pt'&gt;&lt;span style='text-justify:inter-ideograph'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;Expert Tips:&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p style='text-align:justify'&gt;&lt;span style='font-size:10pt'&gt;&lt;span style='text-justify:inter-ideograph'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;1. Don&amp;rsquo;t apply every product&amp;mdash;only use what your skin needs. &lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p style='text-align:justify'&gt;&lt;span style='font-size:10pt'&gt;&lt;span style='text-justify:inter-ideograph'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;2. Thinnest to the thickest formula is a general rule of thumb. &lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p style='text-align:justify'&gt;&lt;span style='font-size:10pt'&gt;&lt;span style='text-justify:inter-ideograph'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;3. Leave a gap of at least one to two minutes between each product.&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p style='text-align:justify'&gt;&lt;span style='font-size:10pt'&gt;&lt;span style='text-justify:inter-ideograph'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;4. Focus on specific areas of the face. For example, AHAs and BHAs both exfoliate the skin so cannot be used together. Apply an AHA to oily areas like the T-Zone and BHAs to acne spots.&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p style='text-align:justify'&gt;&lt;span style='font-size:10pt'&gt;&lt;span style='text-justify:inter-ideograph'&gt;&lt;span new='' roman='' style='font-family:' times=''&gt;&lt;span style='font-size:12.0pt'&gt;&lt;span style='font-family:Cambria'&gt;5. Seal products with an oil at night, as it locks in ingredients and moisture, especially in air conditioning or a cold climate.&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;",
              "amp_fulltext": "&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;Everywhere you look these days, you are inundated with a plethora of skincare products to use in order to achieve flawless, glowing skin. If you are confused as to how exactly you should use your various products, and at what time and in what order, follow our step-by-step guide and get the maximum out of your skincare regimen. Here's the exact order of skincare products to achieve the most effective results, plus we have got 5 useful tips on how to make your products work best for you.&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;strong&gt;&lt;span&gt;&lt;span&gt;AM&lt;/span&gt;&lt;/span&gt;&lt;/strong&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;1.Cleanser (oil-based or water-based)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;2.pH balancer (toners, essences, mists)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;3.Antioxidant (vitamin C)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;4.Eye cream&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;5.Serum (anti-ageing, reparative, acne-fighting)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;6.Oil&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;7.Moisturiser&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;8.Sunscreen&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;strong&gt;&lt;span&gt;&lt;span&gt;PM&lt;/span&gt;&lt;/span&gt;&lt;/strong&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;1.Makeup remover&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;2.Cleanser&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;3.Toner, essences, mists&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;4.Mask (sheet, peel-off, clay)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;5.AHA (glycolic acid, lactic acid)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;6.BHA (salicylic acid)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;7.Vitamin A (retinol)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;8.Antioxidants (vitamin E, niacinamide, polyphenols, flavonoids)&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;9.Serum&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;10.Eye cream, moisturizer or a sleep mask&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;11. Hyaluronic Acid, Peptides, Ceramides&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;12.Oil&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;Expert Tips:&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;1. Don&rsquo;t apply every product&mdash;only use what your skin needs. &lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;2. Thinnest to the thickest formula is a general rule of thumb. &lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;3. Leave a gap of at least one to two minutes between each product.&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;4. Focus on specific areas of the face. For example, AHAs and BHAs both exfoliate the skin so cannot be used together. Apply an AHA to oily areas like the T-Zone and BHAs to acne spots.&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;span&gt;5. Seal products with an oil at night, as it locks in ingredients and moisture, especially in air conditioning or a cold climate.&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;",
              "category_trail": [
                {
                  "id": 3,
                  "title": "Beauty",
                  "slug": "beauty",
                  "parent": "0"
                }
              ],
              "primary_section_id": 3,
              "primary_section_name": "Beauty",
              "primary_section_slug": "beauty",
              "primary_id": "3",
              "primary_id_name": "Beauty",
              "primary_id_slug": "beauty",
              "url": "/beauty/story/start-to-finish-1936",
              "full_url": "https://alpha-harperbazar.intoday.in/beauty/story/start-to-finish-1936",
              "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/beauty/story/start-to-finish-1936",
              "slug": "start-to-finish",
              "excerpt": "&lt;p&gt;Bazaar India tells you the exact order of skincare products to achieve the most effective results, in the AM and PM.&lt;/p&gt;",
              "publish_up": "2020-11-23 15:00:11",
              "publish_down": null,
              "metatitle": "The Correct Order to Apply Your Skincare Routine",
              "metadesc": "&lt;p&gt;Bazaar India tells you the exact order of skincare products to achieve the most effective results, in the AM and PM.&lt;/p&gt;",
              "metakey": "",
              "highlights": "",
              "rating": "",
              "review_title": "",
              "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
              "review_pros": "",
              "review_cons": "",
              "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/screenshot20201123at30455pm_231120030612_1085x675.png",
              "feature_image_data": {
                "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/screenshot20201123at30455pm_231120030612_1085x675.png",
                "title": "screenshot20201123at30455pm_231120030612_1085x675",
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
              "created_at": "2020-11-20T07:19:03.000000Z",
              "created_by_id": "13",
              "created_by_name": "prachi goyal",
              "cache_time": "03/05/2021 03:54:14 pm",
              "updated_at": "2020-11-27 17:34:57",
              "galleries": "",
              "video_node": "",
              "previous_url_id": "1935"
            },
            {
              "content_id": 949,
              "apps_id": "1",
              "post_types_id": "4",
              "content_type": "photo",
              "headline": "The Best Ranibow-Hued Eyeshadows to Own",
              "introtext": "This season's most impactful look calls for colourful shadows with a hint of shimmer, paired with voluminous brows and lashes",
              "fulltext": "",
              "amp_fulltext": "",
              "category_trail": [
                {
                  "id": 3,
                  "title": "Beauty",
                  "slug": "beauty",
                  "parent": "0"
                }
              ],
              "primary_section_id": 3,
              "primary_section_name": "Beauty",
              "primary_section_slug": "beauty",
              "primary_id": "3",
              "primary_id_name": "Beauty",
              "primary_id_slug": "beauty",
              "url": "/beauty/photo/chasing-rainbows-949",
              "full_url": "https://alpha-harperbazar.intoday.in/beauty/photo/chasing-rainbows-949",
              "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/beauty/photo/chasing-rainbows-949",
              "slug": "chasing-rainbows",
              "excerpt": "This season's most impactful look calls for colourful shadows with a hint of shimmer, paired with voluminous brows and lashes",
              "publish_up": "2020-11-20 14:00:24",
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
              "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/65715_201120025202_1200x675.jpg",
              "feature_image_data": {
                "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/65715_201120025202_1200x675.jpg",
                "title": "65715_201120025202_1200x675",
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
              "section_data": "",
              "created_at": "2020-11-19T12:21:26.000000Z",
              "created_by_id": "13",
              "created_by_name": "prachi goyal",
              "cache_time": "03/05/2021 03:54:14 pm",
              "updated_at": "2020-11-20 14:55:32",
              "galleries": [
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_012_jpg_111920055126.image_012_jpg",
                  "extra": {
                    "text": "<p>Hourglass Cosmetics</p>\r\n<p>Scattered light glitter eyeshadow in rapture, Rs.2,300 (approx).</p>",
                    "caption": "<p>Hourglass Cosmetics</p>\r\n<p>Scattered light glitter eyeshadow in rapture, Rs.2,300 (approx).</p>",
                    "alt_text": "",
                    "description": "<p>Hourglass Cosmetics</p>\r\n<p>Scattered light glitter eyeshadow in rapture, Rs.2,300 (approx).</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_010_jpg_111920055127.image_010_jpg",
                  "extra": {
                    "text": "<p>Tom Ford Acqua Metal</p>\r\n<p>Shadow in venus rising, Rs.3,500 (approx).</p>",
                    "caption": "<p>Tom Ford Acqua Metal</p>\r\n<p>Shadow in venus rising, Rs.3,500 (approx).</p>",
                    "alt_text": "",
                    "description": "<p>Tom Ford Acqua Metal</p>\r\n<p>Shadow in venus rising, Rs.3,500 (approx).</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_004_jpg_111920055127.image_004_jpg",
                  "extra": {
                    "text": "<p>Urban Decay</p>\r\n<p>Moondust eyeshadow in gamma ray, Rs.1,600 (approx).</p>",
                    "caption": "<p>Urban Decay</p>\r\n<p>Moondust eyeshadow in gamma ray, Rs.1,600 (approx).</p>",
                    "alt_text": "",
                    "description": "<p>Urban Decay</p>\r\n<p>Moondust eyeshadow in gamma ray, Rs.1,600 (approx).</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_003_jpg_111920055128.image_003_jpg",
                  "extra": {
                    "text": "<p>Charlotte Tilbury</p>\r\n<p>Colour chameleon in amber haze, Rs.1,400 (approx).</p>",
                    "caption": "<p>Charlotte Tilbury</p>\r\n<p>Colour chameleon in amber haze, Rs.1,400 (approx).</p>",
                    "alt_text": "",
                    "description": "<p>Charlotte Tilbury</p>\r\n<p>Colour chameleon in amber haze, Rs.1,400 (approx).</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_009_jpg_111920055128.image_009_jpg",
                  "extra": {
                    "text": "<p>Pat McGrath Labs</p>\r\n<p>PermaGel ultra glide eye pencil in shade, Rs.2,300 (approx).</p>",
                    "caption": "<p>Pat McGrath Labs</p>\r\n<p>PermaGel ultra glide eye pencil in shade, Rs.2,300 (approx).</p>",
                    "alt_text": "",
                    "description": "<p>Pat McGrath Labs</p>\r\n<p>PermaGel ultra glide eye pencil in shade, Rs.2,300 (approx).</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_031_jpg_111920055129.image_031_jpg",
                  "extra": {
                    "text": "<p>NARS</p>\r\n<p>Powerchrome loose eye pigment in riding high, Rs.2,100 (approx).</p>",
                    "caption": "<p>NARS</p>\r\n<p>Powerchrome loose eye pigment in riding high, Rs.2,100 (approx).</p>",
                    "alt_text": "",
                    "description": "<p>NARS</p>\r\n<p>Powerchrome loose eye pigment in riding high, Rs.2,100 (approx).</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_033_jpg_111920055129.image_033_jpg",
                  "extra": {
                    "text": "<p>Elizabeth Arden</p>\r\n<p>High drama eyeliner in espresso, Rs.1,700 (approx).</p>",
                    "caption": "<p>Elizabeth Arden</p>\r\n<p>High drama eyeliner in espresso, Rs.1,700 (approx).</p>",
                    "alt_text": "",
                    "description": "<p>Elizabeth Arden</p>\r\n<p>High drama eyeliner in espresso, Rs.1,700 (approx).</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/17_jpg_111920055130.17_jpg",
                  "extra": {
                    "text": "<p>Chantecaille</p>\r\n<p>Luminescent eye shade in lion, Rs.3,900 (approx).</p>",
                    "caption": "<p>Chantecaille</p>\r\n<p>Luminescent eye shade in lion, Rs.3,900 (approx).</p>",
                    "alt_text": "",
                    "description": "<p>Chantecaille</p>\r\n<p>Luminescent eye shade in lion, Rs.3,900 (approx).</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_029_jpg_111920055130.image_029_jpg",
                  "extra": {
                    "text": "<p>Clarins</p>\r\n<p>Wonder perfect mascara 4D waterproof, price upon request.</p>",
                    "caption": "<p>Clarins</p>\r\n<p>Wonder perfect mascara 4D waterproof, price upon request.</p>",
                    "alt_text": "",
                    "description": "<p>Clarins</p>\r\n<p>Wonder perfect mascara 4D waterproof, price upon request.</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_030_jpg_111920055131.image_030_jpg",
                  "extra": {
                    "text": "<p>Bobbi Brown</p>\r\n<p>Luxe eye shadow in sun flare, Rs.3,300.</p>",
                    "caption": "<p>Bobbi Brown</p>\r\n<p>Luxe eye shadow in sun flare, Rs.3,300.</p>",
                    "alt_text": "",
                    "description": "<p>Bobbi Brown</p>\r\n<p>Luxe eye shadow in sun flare, Rs.3,300.</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_034_png_111920055131.image_034_png",
                  "extra": {
                    "text": "<p>Stila Suede</p>\r\n<p>Shade liquid eye shadow in violet velvet, Rs.2,200</p>",
                    "caption": "<p>Stila Suede</p>\r\n<p>Shade liquid eye shadow in violet velvet, Rs.2,200</p>",
                    "alt_text": "",
                    "description": "<p>Stila Suede</p>\r\n<p>Shade liquid eye shadow in violet velvet, Rs.2,200</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_011_jpg_111920055132.image_011_jpg",
                  "extra": {
                    "text": "<p>Shiseido Kajal</p>\r\n<p>InkArtist - shadow, liner, brow in Rose Pagoda, Rs.2,000.</p>",
                    "caption": "<p>Shiseido Kajal</p>\r\n<p>InkArtist - shadow, liner, brow in Rose Pagoda, Rs.2,000.</p>",
                    "alt_text": "",
                    "description": "<p>Shiseido Kajal</p>\r\n<p>InkArtist - shadow, liner, brow in Rose Pagoda, Rs.2,000.</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/page_1_image_9_png_111920061107.page_1_image_9_png",
                  "extra": {
                    "text": "<p>Benefit Cosmetics</p>\r\n<p>Gimme brow+ volumising eyebrow gel, RS.2,290.</p>",
                    "caption": "<p>Benefit Cosmetics</p>\r\n<p>Gimme brow+ volumising eyebrow gel, RS.2,290.</p>",
                    "alt_text": "",
                    "description": "<p>Benefit Cosmetics</p>\r\n<p>Gimme brow+ volumising eyebrow gel, RS.2,290.</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/page_2_image_30_png_111920061107.page_2_image_30_png",
                  "extra": {
                    "text": "<p>Glossier</p>\r\n<p>Lash slick, Rs.1,200 (approx)</p>",
                    "caption": "<p>Glossier</p>\r\n<p>Lash slick, Rs.1,200 (approx)</p>",
                    "alt_text": "",
                    "description": "<p>Glossier</p>\r\n<p>Lash slick, Rs.1,200 (approx)</p>"
                  }
                }
              ],
              "video_node": "",
              "previous_url_id": "940"
            },
            {
              "content_id": 950,
              "apps_id": "1",
              "post_types_id": "4",
              "content_type": "photo",
              "headline": "8 Fresh New Luxury Fragrances to Own",
              "introtext": "Discover the season’s best fragrances: Soft florals, zesty citruses, and warm wood",
              "fulltext": "",
              "amp_fulltext": "",
              "category_trail": [
                {
                  "id": 3,
                  "title": "Beauty",
                  "slug": "beauty",
                  "parent": "0"
                }
              ],
              "primary_section_id": 3,
              "primary_section_name": "Beauty",
              "primary_section_slug": "beauty",
              "primary_id": "3",
              "primary_id_name": "Beauty",
              "primary_id_slug": "beauty",
              "url": "/beauty/photo/on-a-fresh-note-950",
              "full_url": "https://alpha-harperbazar.intoday.in/beauty/photo/on-a-fresh-note-950",
              "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/beauty/photo/on-a-fresh-note-950",
              "slug": "on-a-fresh-note",
              "excerpt": "Discover the season’s best fragrances: Soft florals, zesty citruses, and warm wood",
              "publish_up": "2020-11-20 14:00:13",
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
              "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/fumes_201120024109_1199x675.jpg",
              "feature_image_data": {
                "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/fumes_201120024109_1199x675.jpg",
                "title": "fumes_201120024109_1199x675",
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
              "section_data": "",
              "created_at": "2020-11-19T13:24:00.000000Z",
              "created_by_id": "13",
              "created_by_name": "prachi goyal",
              "cache_time": "03/05/2021 03:54:14 pm",
              "updated_at": "2020-12-16 13:51:45",
              "galleries": [
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_016_jpg_111920065400.image_016_jpg",
                  "extra": {
                    "text": "<p>Jo Malone London’s limited-edition trio pays tribute to the aromatic leaves and flowers of lavender. The collection offers unique formulations of grapefruit, coriander, and wisteria, mixed with the aromatic perennial.</p>\r\n<p>Lavender & coriander cologne,Rs.5,200/30ml </p>",
                    "caption": "<p>Jo Malone London’s limited-edition trio pays tribute to the aromatic leaves and flowers of lavender. The collection offers unique formulations of grapefruit, coriander, and wisteria, mixed with the aromatic perennial.</p>\r\n<p>Lavender & coriander cologne,Rs.5,200/30ml </p>",
                    "alt_text": "",
                    "description": "<p>Jo Malone London’s limited-edition trio pays tribute to the aromatic leaves and flowers of lavender. The collection offers unique formulations of grapefruit, coriander, and wisteria, mixed with the aromatic perennial.</p>\r\n<p>Lavender & coriander cologne,Rs.5,200/30ml </p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_017_jpg_111920065400.image_017_jpg",
                  "extra": {
                    "text": "<p>Silver birch & lavender cologne,Rs.5,200/30ml </p>",
                    "caption": "<p>Silver birch & lavender cologne,Rs.5,200/30ml </p>",
                    "alt_text": "",
                    "description": "<p>Silver birch & lavender cologne,Rs.5,200/30ml </p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_019_jpg_111920065401.image_019_jpg",
                  "extra": {
                    "text": "<p>Wisteria & lavender cologne, Rs.5,200/30ml </p>",
                    "caption": "<p>Wisteria & lavender cologne, Rs.5,200/30ml </p>",
                    "alt_text": "",
                    "description": "<p>Wisteria & lavender cologne, Rs.5,200/30ml </p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_018_jpg_111920065402.image_018_jpg",
                  "extra": {
                    "text": "<p>Ambrosia di Fiori, the new parfum edition of Gucci’s signature Bloom fragrance, inspires courage with its striking, spirited notes. It’s an even headier floral blend than the original. Rs.10,800/100ml.</p>",
                    "caption": "<p>Ambrosia di Fiori, the new parfum edition of Gucci’s signature Bloom fragrance, inspires courage with its striking, spirited notes. It’s an even headier floral blend than the original. Rs.10,800/100ml.</p>",
                    "alt_text": "",
                    "description": "<p>Ambrosia di Fiori, the new parfum edition of Gucci’s signature Bloom fragrance, inspires courage with its striking, spirited notes. It’s an even headier floral blend than the original. Rs.10,800/100ml.</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_024_jpg_111920065403.image_024_jpg",
                  "extra": {
                    "text": "<p>White florals are famously rich, but Olivier Polge, the nose behind Chanel’s new Gabrielle, has made the perfume even more captivating by including notes of the seductive tuberose. Intensely feminine, it’s perfect for the sophisticated woman. Rs.10,500/100ml</p>",
                    "caption": "<p>White florals are famously rich, but Olivier Polge, the nose behind Chanel’s new Gabrielle, has made the perfume even more captivating by including notes of the seductive tuberose. Intensely feminine, it’s perfect for the sophisticated woman. Rs.10,500/100ml</p>",
                    "alt_text": "",
                    "description": "<p>White florals are famously rich, but Olivier Polge, the nose behind Chanel’s new Gabrielle, has made the perfume even more captivating by including notes of the seductive tuberose. Intensely feminine, it’s perfect for the sophisticated woman. Rs.10,500/100ml</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/page_1_image_14_png_111920073603.page_1_image_14_png",
                  "extra": {
                    "text": "<p>Byredo’s Sundaze is a citrus fragrance formulated for endless days of summer. It has a potent mix of mandarin, Californian lemon, and Arabian jasmine. Rs.15,000/100ml (approx).</p>",
                    "caption": "<p>Byredo’s Sundaze is a citrus fragrance formulated for endless days of summer. It has a potent mix of mandarin, Californian lemon, and Arabian jasmine. Rs.15,000/100ml (approx).</p>",
                    "alt_text": "",
                    "description": "<p>Byredo’s Sundaze is a citrus fragrance formulated for endless days of summer. It has a potent mix of mandarin, Californian lemon, and Arabian jasmine. Rs.15,000/100ml (approx).</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/page_1_image_15_png_111920073604.page_1_image_15_png",
                  "extra": {
                    "text": "<p>Inspired by the French Riviera, Veronique Gabai’s debut collection of nine fragrances offers light, crisp notes. Our favourite? The minty, herbaceous vert désir. Rs.21,000/85ml (approx).</p>",
                    "caption": "<p>Inspired by the French Riviera, Veronique Gabai’s debut collection of nine fragrances offers light, crisp notes. Our favourite? The minty, herbaceous vert désir. Rs.21,000/85ml (approx).</p>",
                    "alt_text": "",
                    "description": "<p>Inspired by the French Riviera, Veronique Gabai’s debut collection of nine fragrances offers light, crisp notes. Our favourite? The minty, herbaceous vert désir. Rs.21,000/85ml (approx).</p>"
                  }
                },
                {
                  "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/page_1_image_17_png_111920073605.page_1_image_17_png",
                  "extra": {
                    "text": "<p>Unisex fragrances are more popular than ever. We love Bond No 9’s TriBeCa for its eclectic blend of notes. Jasmine and cedar—centred around cacao and green hazelnut—create a soft earthy scent that promises to work for all. Rs.30,000/100ml (approx).</p>",
                    "caption": "<p>Unisex fragrances are more popular than ever. We love Bond No 9’s TriBeCa for its eclectic blend of notes. Jasmine and cedar—centred around cacao and green hazelnut—create a soft earthy scent that promises to work for all. Rs.30,000/100ml (approx).</p>",
                    "alt_text": "",
                    "description": "<p>Unisex fragrances are more popular than ever. We love Bond No 9’s TriBeCa for its eclectic blend of notes. Jasmine and cedar—centred around cacao and green hazelnut—create a soft earthy scent that promises to work for all. Rs.30,000/100ml (approx).</p>"
                  }
                }
              ],
              "video_node": "",
              "previous_url_id": "949"
            }
          ],
          "other_information": {
            "total_no_of_records": 7,
            "display_records": 7,
            "cache_time": "03/05/2021 03:54:01 pm"
          },
          "trail_info": {
            "section_name": "Beauty",
            "section_slug": "beauty"
          },
          "seo_info": {
            "meta_title": "Beauty Tips: Latest Beauty News and Trends, Beauty Expert Advise on Harpers Bazaar",
            "meta_desc": "Get the daily beauty news and tips for women with latest trends on Harpers Bazaar. Find out about the hottest beauty trends, beauty tips, hair style tips, makeup tips and more.",
            "meta_key": "beauty tips, beauty news, latest beauty tips, beauty news online, beauty news live, latest beauty Tips, Beauty Tips trends, fashion advice, beauty expert advice, Star Hairstyles, Style And Beauty, Beauty Advice, Hair Stylist, Makeup Tips, Beauty Trends up"
          },
          "seo_posttype": []
        }
      }
    return {
        props: { beautyData, },
      };
}
