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

export default function Fashion({fashionData}){
   return(
    <>
    <Head>
        <title>Fashion News: Latest Fashion</title>
        {/* <script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script> */}
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
                <a href="www.facebook.com">{fashionData.data.feed[0].primary_section_name}</a>
            </div>
        </div>

         {/* Heading */}
         <h1 className="tittle_text"><span>{fashionData.data.feed[0].primary_section_name}</span></h1>

         <section className="content_wrapper">
                <div className="container">
                    <div className="content_inner">
                        <div className="content_left">
            
                        {/* Fashion */}     
                        <div className="fashion_top">
                            <figure>
                            <img src={fashionData.data.feed[0].feature_image_data.url} alt="fashion_img_main" />
                            </figure>
                            <Link href={'/story/'+fashionData.data.feed[0].url.slice(fashionData.data.feed[0].url.length - 4)}><h3>{fashionData.data.feed[0].headline}</h3></Link>
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
                <figure><img src={fashionData.data.feed[1].feature_image_data.url} alt="rhs_img" /></figure>
                <p><Link href={'/photo/3478'}>{fashionData.data.feed[1].headline}</Link></p>
            </div>
			</div>
            </div>
            <ul className="section_list">
            {
                fashionData.data.feed.slice(2).map((fashion)=>{
                    return(
                        <li>
                        <div className="list_detail">
                            <strong>{moment(fashion.updated_at).format("MMM DD, YYYY")}</strong>
                            <h3><Link href={'/photo/3478'}>{fashion.headline}</Link></h3>
                            <p>{fashion.introtext}</p>
                            <Link href="/author/bazaar-india/"><span>By {fashion.author_data[0].author_name}</span></Link>
                        </div>
                        <figure className="list_pic">
                            <img src={fashion.feature_image_data.url} alt="list_img1"/>
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
    // const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/latest?section=fashion&section_level=0content_type=all&page=1&limit=10&order_by=publish_up%20desc&app=all`)
    const fashionData = {"data": {
        "feed": [
          {
            "content_id": 1992,
            "apps_id": "1",
            "post_types_id": "2",
            "content_type": "story",
            "headline": "How To Declutter Your Closet Sustainably",
            "introtext": "Journalist and bestselling author Katherine Ormerod learns to edit her closet and dress more sustainably",
            "fulltext": "&lt;p&gt;I&amp;rsquo;ve been working in fashion for more than 15 years, and along the way, I&amp;rsquo;ve collected my shiny prizes. But having lots of pretty things has never helped me get dressed. At one point I had close to 250 dresses in my closet, layered three to a hanger and stuffed so tightly together, you risked a hernia removing them. And yet I was sure I had nothing to wear. So I decided to use my professional skills to edit myself for a change. I started by trying on everything I&amp;nbsp; owned. It took about five hours to zip, button, and shimmy my way through my wardrobe. I soon realized that I really didn&amp;rsquo;t like a lot of it. Sure,&lt;br /&gt;\r\nI loved the stories behind how I&amp;rsquo;d inveigled each item&amp;mdash;the bag I bought with my first paycheck, the shoes I unearthed at an outlet. But actually, wearing some of them again? No chance. Rather than simply keep the pieces that spark joy &amp;agrave; la Marie Kondo, I attempted to take my emotions out of the picture (after all, they&amp;rsquo;re what landed me in this mess in the first place). Versatility was of paramount concern. Which pieces had I worn at least 30 times, the number of wears deemed to be sustainable? Which ones worked with every sweater or shirt, and could see me through breakfast, lunch, and cocktails? I got tactical and tried to forget how much I&amp;rsquo;d spent on each item.&lt;/p&gt;\r\n\r\n&lt;p&gt;Anything dull, over-the-top, or just-not- entirely-me was nixed. Ever conscious of the environmental impact of discarding clothing (the Environmental Protection Agency estimates that Americans throw away 16.9 million tons of textile waste each year), I made a pledge never to put a single piece of fabric in the garbage and came up with a system of piles.&lt;/p&gt;\r\n\r\n&lt;p&gt;First, I put together a stash of the good stuff for a swapping party. There has to be an agreement that it&amp;rsquo;s about finding treasures in other people&amp;rsquo;s trash rather than attempting to swap like-for-like price. I bartered an oversize Jacquemus blazer for a perfectly sheer Chlo&amp;eacute; dress and a roomy&amp;nbsp;Mulberry tote for an immaculate Loewe mini bag. Everything that wasn&amp;rsquo;t swapped I sent to a resale site. I also made a pile for repairs and found an incredible service to restore beloved high-end pieces, including my brutally scuffed Chanel pumps. The cost was steep (we&amp;rsquo;re talking half the full price), but it made sense to recondition them rather than double the fashion footprint. My litmus test was whether the loss would create a true hole in my day-to-day dressing options: Would I miss the item so much that I&amp;rsquo;d wind up buying it again?&lt;/p&gt;\r\n\r\n&lt;p&gt;From lower-cost items that didn&amp;rsquo;t (a) fit, (b) flatter, or (c) feel fundamental to any outfit, I made the largest pile. But instead of just dumping them at the nearest charity store, I got in touch with ethical and eco-friendly donation centres; Housing Works and Dress for Success are great options. The final pile, which was for anything torn or stained, went along with old towels, sheets, and underwear to a fabric recycling bin. I&amp;rsquo;m not going to lie and say that I felt immediately amazing at the end of all this because I didn&amp;rsquo;t. I actually felt a deep sense of regret. I started to worry that I was going to look drab and same-y in so few outfits. How would I ever cope with only one-third of my old wardrobe left? Luckily the stats gave me some perspective. Recycling-industry experts have noted that we buy five times as much clothing as we did 40 years ago. In 1950, approximately 12 percent of a family&amp;rsquo;s monthly budget was spent on fashion. Today it&amp;rsquo;s closer to three percent, so we buy more, but not better. What&amp;rsquo;s more, it&amp;rsquo;s been estimated that we wear 20 percent of what we own 80 percent of the time, leading to a situation where many of us feel overwhelmed by the choices our overstuffed closets present us with on the daily. In my search for sustainability, I didn&amp;rsquo;t lose great pieces that defined my style&amp;mdash;I just lost the ones that were holding me back.&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;Katherine Ormerod is the author of Why Social Media is Ruining Your Life&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;Closet Essentials&lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;9&amp;nbsp;cashmere knits (one round neck, one V-neck, and one turtleneck, each in charcoal, black, and camel, to cover every eventuality)&lt;/p&gt;\r\n\r\n&lt;p&gt;3&amp;nbsp;midi dresses (black, red, and printed)&lt;/p&gt;\r\n\r\n&lt;p&gt;4&amp;nbsp;pairs of jeans&lt;/p&gt;\r\n\r\n&lt;p&gt;1&amp;nbsp;red silk cocktail dress (or similar bombshell number)&lt;/p&gt;\r\n\r\n&lt;p&gt;1&amp;nbsp;black gown&lt;/p&gt;",
            "amp_fulltext": "&lt;p&gt;I&rsquo;ve been working in fashion for more than 15 years, and along the way, I&rsquo;ve collected my shiny prizes. But having lots of pretty things has never helped me get dressed. At one point I had close to 250 dresses in my closet, layered three to a hanger and stuffed so tightly together, you risked a hernia removing them. And yet I was sure I had nothing to wear. So I decided to use my professional skills to edit myself for a change. I started by trying on everything I&amp;nbsp; owned. It took about five hours to zip, button, and shimmy my way through my wardrobe. I soon realized that I really didn&rsquo;t like a lot of it. Sure,&lt;br&gt;\nI loved the stories behind how I&rsquo;d inveigled each item&mdash;the bag I bought with my first paycheck, the shoes I unearthed at an outlet. But actually, wearing some of them again? No chance. Rather than simply keep the pieces that spark joy &agrave; la Marie Kondo, I attempted to take my emotions out of the picture (after all, they&rsquo;re what landed me in this mess in the first place). Versatility was of paramount concern. Which pieces had I worn at least 30 times, the number of wears deemed to be sustainable? Which ones worked with every sweater or shirt, and could see me through breakfast, lunch, and cocktails? I got tactical and tried to forget how much I&rsquo;d spent on each item.&lt;/p&gt;\n\n&lt;p&gt;Anything dull, over-the-top, or just-not- entirely-me was nixed. Ever conscious of the environmental impact of discarding clothing (the Environmental Protection Agency estimates that Americans throw away 16.9 million tons of textile waste each year), I made a pledge never to put a single piece of fabric in the garbage and came up with a system of piles.&lt;/p&gt;\n\n&lt;p&gt;First, I put together a stash of the good stuff for a swapping party. There has to be an agreement that it&rsquo;s about finding treasures in other people&rsquo;s trash rather than attempting to swap like-for-like price. I bartered an oversize Jacquemus blazer for a perfectly sheer Chlo&eacute; dress and a roomy&amp;nbsp;Mulberry tote for an immaculate Loewe mini bag. Everything that wasn&rsquo;t swapped I sent to a resale site. I also made a pile for repairs and found an incredible service to restore beloved high-end pieces, including my brutally scuffed Chanel pumps. The cost was steep (we&rsquo;re talking half the full price), but it made sense to recondition them rather than double the fashion footprint. My litmus test was whether the loss would create a true hole in my day-to-day dressing options: Would I miss the item so much that I&rsquo;d wind up buying it again?&lt;/p&gt;\n\n&lt;p&gt;From lower-cost items that didn&rsquo;t (a) fit, (b) flatter, or (c) feel fundamental to any outfit, I made the largest pile. But instead of just dumping them at the nearest charity store, I got in touch with ethical and eco-friendly donation centres; Housing Works and Dress for Success are great options. The final pile, which was for anything torn or stained, went along with old towels, sheets, and underwear to a fabric recycling bin. I&rsquo;m not going to lie and say that I felt immediately amazing at the end of all this because I didn&rsquo;t. I actually felt a deep sense of regret. I started to worry that I was going to look drab and same-y in so few outfits. How would I ever cope with only one-third of my old wardrobe left? Luckily the stats gave me some perspective. Recycling-industry experts have noted that we buy five times as much clothing as we did 40 years ago. In 1950, approximately 12 percent of a family&rsquo;s monthly budget was spent on fashion. Today it&rsquo;s closer to three percent, so we buy more, but not better. What&rsquo;s more, it&rsquo;s been estimated that we wear 20 percent of what we own 80 percent of the time, leading to a situation where many of us feel overwhelmed by the choices our overstuffed closets present us with on the daily. In my search for sustainability, I didn&rsquo;t lose great pieces that defined my style&mdash;I just lost the ones that were holding me back.&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;Katherine Ormerod is the author of Why Social Media is Ruining Your Life&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;Closet Essentials&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;9&amp;nbsp;cashmere knits (one round neck, one V-neck, and one turtleneck, each in charcoal, black, and camel, to cover every eventuality)&lt;/p&gt;\n\n&lt;p&gt;3&amp;nbsp;midi dresses (black, red, and printed)&lt;/p&gt;\n\n&lt;p&gt;4&amp;nbsp;pairs of jeans&lt;/p&gt;\n\n&lt;p&gt;1&amp;nbsp;red silk cocktail dress (or similar bombshell number)&lt;/p&gt;\n\n&lt;p&gt;1&amp;nbsp;black gown&lt;/p&gt;",
            "category_trail": [
              {
                "id": 1,
                "title": "Fashion",
                "slug": "fashion",
                "parent": "0"
              }
            ],
            "primary_section_id": 1,
            "primary_section_name": "Fashion",
            "primary_section_slug": "fashion",
            "primary_id": "1",
            "primary_id_name": "Fashion",
            "primary_id_slug": "fashion",
            "url": "/fashion/story/how-to-edit-your-closet-1992",
            "full_url": "https://alpha-harperbazar.intoday.in/fashion/story/how-to-edit-your-closet-1992",
            "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/fashion/story/how-to-edit-your-closet-1992",
            "slug": "how-to-edit-your-closet",
            "excerpt": "Journalist and bestselling author Katherine Ormerod learns to edit her closet and dress more sustainably",
            "publish_up": "2020-12-21 19:17:00",
            "publish_down": null,
            "metatitle": "How To Edit Your Closet",
            "metadesc": "Journalist and bestselling author Katherine Ormerod learns to dress more sustainably",
            "metakey": "",
            "highlights": "",
            "rating": "",
            "review_title": "",
            "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
            "review_pros": "",
            "review_cons": "",
            "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/untitled-design-68021220115042.png",
            "feature_image_data": {
              "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/untitled-design-68021220115042.png",
              "title": "untitled-design-68021220115042",
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
            "created_at": "2020-12-02T18:07:35.000000Z",
            "created_by_id": "13",
            "created_by_name": "prachi goyal",
            "cache_time": "03/05/2021 03:18:00 pm",
            "updated_at": "2020-12-21 19:17:36",
            "galleries": "",
            "video_node": "",
            "previous_url_id": "1990"
          },
          {
            "content_id": 933,
            "apps_id": "1",
            "post_types_id": "4",
            "content_type": "photo",
            "headline": "Flatforms are the Stylish and Comfortable Trend Your Shoe Closet Needs",
            "introtext": "Ace the balance between comfort and style with versatile flatforms in sumptuous leather, sporty nylon, and natural fabrics",
            "fulltext": "&lt;p&gt;Ace the balance between comfort and style with versatile flatforms in sumptuous leather, sporty nylon, and natural fabrics&lt;/p&gt;",
            "amp_fulltext": "&lt;p&gt;Ace the balance between comfort and style with versatile flatforms in sumptuous leather, sporty nylon, and natural fabrics&lt;/p&gt;",
            "category_trail": [
              {
                "id": 1,
                "title": "Fashion",
                "slug": "fashion",
                "parent": "0"
              }
            ],
            "primary_section_id": 1,
            "primary_section_name": "Fashion",
            "primary_section_slug": "fashion",
            "primary_id": "1",
            "primary_id_name": "Fashion",
            "primary_id_slug": "fashion",
            "url": "/fashion/photo/hold-your-ground-933",
            "full_url": "https://alpha-harperbazar.intoday.in/fashion/photo/hold-your-ground-933",
            "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/fashion/photo/hold-your-ground-933",
            "slug": "hold-your-ground",
            "excerpt": "Ace the balance between comfort and style with versatile flatforms in sumptuous leather, sporty nylon, and natural fabrics",
            "publish_up": "2020-12-21 19:05:00",
            "publish_down": null,
            "metatitle": "Flatforms are the Stylish and Comfortable Trend Your Shoe Closet Needs",
            "metadesc": "Ace the balance between comfort and style with versatile flatforms in sumptuous leather, sporty nylon, and natural fabrics",
            "metakey": "",
            "highlights": "",
            "rating": "",
            "review_title": "",
            "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
            "review_pros": "",
            "review_cons": "",
            "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image040_171120015052_349x191.png",
            "feature_image_data": {
              "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image040_171120015052_349x191.png",
              "title": "image040_171120015052_349x191",
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
            "created_at": "2020-11-17T08:27:01.000000Z",
            "created_by_id": "13",
            "created_by_name": "prachi goyal",
            "cache_time": "03/05/2021 03:18:00 pm",
            "updated_at": "2020-12-21 19:05:23",
            "galleries": [
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_038_png_111720015701.image_038_png",
                "extra": {
                  "text": "<p>Shoes, Rs.68,000 (approx), Gucci</p>",
                  "caption": "<p>Shoes, Rs.68,000 (approx), Gucci</p>",
                  "alt_text": "",
                  "description": "<p>Shoes, Rs.68,000 (approx), Gucci</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_039_png_111720015702.image_039_png",
                "extra": {
                  "text": "<p>Shoes, Rs.67,000 (approx), Stella McCartney</p>",
                  "caption": "<p>Shoes, Rs.67,000 (approx), Stella McCartney</p>",
                  "alt_text": "",
                  "description": "<p>Shoes, Rs.67,000 (approx), Stella McCartney</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_040_png_111720015702.image_040_png",
                "extra": {
                  "text": "<p>Shoes, Rs.57,000 (approx), Chlo&eacute;;</p>",
                  "caption": "<p>Shoes, Rs.57,000 (approx), Chlo&eacute;;</p>",
                  "alt_text": "",
                  "description": "<p>Shoes, Rs.57,000 (approx), Chlo&eacute;;</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_036_png_111720015703.image_036_png",
                "extra": {
                  "text": "image_036_png_111720015703",
                  "caption": "",
                  "alt_text": "",
                  "description": ""
                }
              }
            ],
            "video_node": "",
            "previous_url_id": "932"
          },
          {
            "content_id": 2011,
            "apps_id": "1",
            "post_types_id": "4",
            "content_type": "photo",
            "headline": "How to Wear All- White for a Night Out",
            "introtext": "This season, all white eveningwear is having a moment. Bazaar captures the best looks against Asian Paints’s\r\ncolour of the year, Curiosity.",
            "fulltext": "&lt;p&gt;This season, all-white eveningwear is having a moment. Bazaar India captures some of the best looks.&lt;/p&gt;",
            "amp_fulltext": "&lt;p&gt;This season, all-white eveningwear is having a moment. Bazaar India captures some of the best looks.&lt;/p&gt;",
            "category_trail": [
              {
                "id": 1,
                "title": "Fashion",
                "slug": "fashion",
                "parent": "0"
              }
            ],
            "primary_section_id": 1,
            "primary_section_name": "Fashion",
            "primary_section_slug": "fashion",
            "primary_id": "1",
            "primary_id_name": "Fashion",
            "primary_id_slug": "fashion",
            "url": "/fashion/photo/clean-slate-2011",
            "full_url": "https://alpha-harperbazar.intoday.in/fashion/photo/clean-slate-2011",
            "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/fashion/photo/clean-slate-2011",
            "slug": "clean-slate",
            "excerpt": "This season, all white eveningwear is having a moment. Bazaar captures the best looks against Asian Paints’s\r\ncolour of the year, Curiosity.",
            "publish_up": "2020-12-21 18:56:00",
            "publish_down": null,
            "metatitle": "Clean Slate",
            "metadesc": "This season, all white eveningwear is having a moment. Bazaar captures the best looks against Asian Paints’s\r\ncolour of the year, Curiosity.",
            "metakey": "",
            "highlights": "",
            "rating": "",
            "review_title": "",
            "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
            "review_pros": "",
            "review_cons": "",
            "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/untitled-design-78161220020104.png",
            "feature_image_data": {
              "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/untitled-design-78161220020104.png",
              "title": "untitled-design-78161220020104",
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
            "created_at": "2020-12-11T07:18:32.000000Z",
            "created_by_id": "13",
            "created_by_name": "prachi goyal",
            "cache_time": "03/05/2021 03:18:00 pm",
            "updated_at": "2020-12-21 18:56:28",
            "galleries": [
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img45111220123916.jpeg",
                "extra": {
                  "text": "img45111220123916",
                  "caption": "",
                  "alt_text": "",
                  "description": "<p style=\"margin-bottom:8px\"><span style=\"font-size:11pt\"><span style=\"font-family:Calibri,sans-serif\">&nbsp;Dress, Rs.1,50,000, Gauri &amp; Nainika. Shoes, stylist&rsquo;s own.</span></span></p>\n\n<p style=\"margin-bottom:8px\"><span style=\"font-size:11pt\"><span style=\"font-family:Calibri,sans-serif\">Fashion director: Edward Lalrempuia.</span></span></p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img43111220123916.jpeg",
                "extra": {
                  "text": "img43111220123916",
                  "caption": "",
                  "alt_text": "",
                  "description": "<p style=\"margin-bottom:8px\"><span style=\"font-size:11pt\"><span style=\"font-family:Calibri,sans-serif\">On Kiyara: </span></span><span style=\"font-size:11pt\"><span style=\"font-family:Calibri,sans-serif\">Dress, Rs. 16,000, Atsu. Shoes, stylist&rsquo;s own. </span></span></p>\n\n<p style=\"margin-bottom:8px\"><span style=\"font-size:11pt\"><span style=\"font-family:Calibri,sans-serif\">On Shruti: Dress, price upon request, Aikeyah Couture.&nbsp;</span></span><span style=\"font-size:11.0pt\"><span style=\"font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;\">Shoes, stylist&rsquo;s own.</span></span></p>\n\n<p style=\"margin-bottom:8px\">&nbsp;</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img33111220123733.jpeg",
                "extra": {
                  "text": "img33111220123733",
                  "caption": "",
                  "alt_text": "",
                  "description": "<p><span style=\"font-size:11.0pt\"><span style=\"font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;\">Top, cape, and pants, Rs. 1,10,000, Gaurav Gupta</span></span></p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img31111220123733.jpeg",
                "extra": {
                  "text": "img31111220123733",
                  "caption": "",
                  "alt_text": "",
                  "description": "<p style=\"margin-bottom:8px\"><span style=\"font-size:11pt\"><span style=\"font-family:Calibri,sans-serif\">Dress, price upon request, Shriya Som.</span></span></p>\n\n<p style=\"margin-bottom:8px\"><span style=\"font-size:11pt\"><span style=\"font-family:Calibri,sans-serif\">See Where to Buy for details. </span></span></p>\n\n<p style=\"margin-bottom:8px\"><span style=\"font-size:11pt\"><span style=\"font-family:Calibri,sans-serif\">Models: Kiyara Sandhu and Shruti Chauhan at INEGA. </span></span></p>\n\n<p style=\"margin-bottom:8px\"><span style=\"font-size:11pt\"><span style=\"font-family:Calibri,sans-serif\">Hair: Mike Desir at Anima Creative Management.</span></span></p>\n\n<p style=\"margin-bottom:8px\"><span style=\"font-size:11pt\"><span style=\"font-family:Calibri,sans-serif\">Makeup: Mitesh Rajani at Feat. Artists. </span></span></p>\n\n<p style=\"margin-bottom:8px\"><span style=\"font-size:11pt\"><span style=\"font-family:Calibri,sans-serif\">Fashion assistant: Asu Longkumer.</span></span></p>\n\n<p style=\"margin-bottom:8px\"><span style=\"font-size:11pt\"><span style=\"font-family:Calibri,sans-serif\">Fashion intern: Yashna Jain. </span></span></p>\n\n<p style=\"margin-bottom:8px\"><span style=\"font-size:11pt\"><span style=\"font-family:Calibri,sans-serif\">Production: P. Productions.</span></span></p>"
                }
              }
            ],
            "video_node": "",
            "previous_url_id": "2010"
          },
          {
            "content_id": 978,
            "apps_id": "1",
            "post_types_id": "4",
            "content_type": "photo",
            "headline": "The Power Suit is Back. Here's How to Wear the Trend",
            "introtext": "The classic suit is no longer just for the boy’s club.",
            "fulltext": "&lt;p&gt;There&amp;rsquo;s no skirting the issue&amp;mdash;designers showed who wear the pants on the runway with fitted suits, tuxedos, and styles that harked back to every decade of the previous century. Plain, printed, or textured. Worn with strappy heels, closed shoes, or furry slippers. The message was resoundingly clear&amp;mdash;the classic suit is no longer just for the boy&amp;rsquo;s club.&lt;/p&gt;",
            "amp_fulltext": "&lt;p&gt;There&rsquo;s no skirting the issue&mdash;designers showed who wear the pants on the runway with fitted suits, tuxedos, and styles that harked back to every decade of the previous century. Plain, printed, or textured. Worn with strappy heels, closed shoes, or furry slippers. The message was resoundingly clear&mdash;the classic suit is no longer just for the boy&rsquo;s club.&lt;/p&gt;",
            "category_trail": [
              {
                "id": 1,
                "title": "Fashion",
                "slug": "fashion",
                "parent": "0"
              }
            ],
            "primary_section_id": 1,
            "primary_section_name": "Fashion",
            "primary_section_slug": "fashion",
            "primary_id": "1",
            "primary_id_name": "Fashion",
            "primary_id_slug": "fashion",
            "url": "/fashion/photo/lets-talk-business-978",
            "full_url": "https://alpha-harperbazar.intoday.in/fashion/photo/lets-talk-business-978",
            "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/fashion/photo/lets-talk-business-978",
            "slug": "lets-talk-business",
            "excerpt": "The classic suit is no longer just for the boy’s club.",
            "publish_up": "2020-12-18 19:33:00",
            "publish_down": null,
            "metatitle": "Let's Talk Business",
            "metadesc": "Let's Talk Business",
            "metakey": "",
            "highlights": "",
            "rating": "",
            "review_title": "",
            "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
            "review_pros": "",
            "review_cons": "",
            "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign46_261120123930_1199x674.png",
            "feature_image_data": {
              "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign46_261120123930_1199x674.png",
              "title": "untitleddesign46_261120123930_1199x674",
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
            "created_at": "2020-11-25T19:09:40.000000Z",
            "created_by_id": "13",
            "created_by_name": "prachi goyal",
            "cache_time": "03/05/2021 03:18:00 pm",
            "updated_at": "2020-12-18 19:33:52",
            "galleries": [
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_000_png_112620123940.image_000_png",
                "extra": {
                  "text": "<p>Altuzarra</p>",
                  "caption": "<p>Altuzarra</p>",
                  "alt_text": "",
                  "description": "<p>Altuzarra</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_002_png_112620123941.image_002_png",
                "extra": {
                  "text": "<p>Hugo Boss</p>",
                  "caption": "<p>Hugo Boss</p>",
                  "alt_text": "",
                  "description": "<p>Hugo Boss</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_004_png_112620123942.image_004_png",
                "extra": {
                  "text": "<p>Christian Dior</p>",
                  "caption": "<p>Christian Dior</p>",
                  "alt_text": "",
                  "description": "<p>Christian Dior</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_006_png_112620123942.image_006_png",
                "extra": {
                  "text": "<p>Balenciaga</p>",
                  "caption": "<p>Balenciaga</p>",
                  "alt_text": "",
                  "description": "<p>Balenciaga</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_008_png_112620123943.image_008_png",
                "extra": {
                  "text": "<p>Etro</p>",
                  "caption": "<p>Etro</p>",
                  "alt_text": "",
                  "description": "<p>Etro</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_010_png_112620123943.image_010_png",
                "extra": {
                  "text": "<p>Salvatore Ferragamo</p>",
                  "caption": "<p>Salvatore Ferragamo</p>",
                  "alt_text": "",
                  "description": "<p>Salvatore Ferragamo</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_012_png_112620123944.image_012_png",
                "extra": {
                  "text": "<p>Gabriela Hearst</p>",
                  "caption": "<p>Gabriela Hearst</p>",
                  "alt_text": "",
                  "description": "<p>Gabriela Hearst</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_014_png_112620123945.image_014_png",
                "extra": {
                  "text": "<p>Elie Saab</p>",
                  "caption": "<p>Elie Saab</p>",
                  "alt_text": "",
                  "description": "<p>Elie Saab</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_016_png_112620123945.image_016_png",
                "extra": {
                  "text": "<p>Alexander McQueen</p>",
                  "caption": "<p>Alexander McQueen</p>",
                  "alt_text": "",
                  "description": "<p>Alexander McQueen</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_018_png_112620123946.image_018_png",
                "extra": {
                  "text": "<p>Prabal Gurung</p>",
                  "caption": "<p>Prabal Gurung</p>",
                  "alt_text": "",
                  "description": "<p>Prabal Gurung</p>"
                }
              }
            ],
            "video_node": "",
            "previous_url_id": "970"
          },
          {
            "content_id": 979,
            "apps_id": "1",
            "post_types_id": "4",
            "content_type": "photo",
            "headline": "How to Wear Florals for Fall",
            "introtext": "Floral prints blossom every year, but this fall, they’re bigger and brighter than before just the spirit we need right now.",
            "fulltext": "&lt;p&gt;Floral prints blossom every year, but this fall, they&amp;rsquo;re bigger and brighter than before just the spirit we need right now. Come into bloom and wear it head-to-toe on a dress, overcoat, cape, or suit. While black boots perform a great balancing act, you can even consider shoes in another print to exaggerate your statement.&lt;/p&gt;",
            "amp_fulltext": "&lt;p&gt;Floral prints blossom every year, but this fall, they&rsquo;re bigger and brighter than before just the spirit we need right now. Come into bloom and wear it head-to-toe on a dress, overcoat, cape, or suit. While black boots perform a great balancing act, you can even consider shoes in another print to exaggerate your statement.&lt;/p&gt;",
            "category_trail": [
              {
                "id": 1,
                "title": "Fashion",
                "slug": "fashion",
                "parent": "0"
              }
            ],
            "primary_section_id": 1,
            "primary_section_name": "Fashion",
            "primary_section_slug": "fashion",
            "primary_id": "1",
            "primary_id_name": "Fashion",
            "primary_id_slug": "fashion",
            "url": "/fashion/photo/out-in-bloom-979",
            "full_url": "https://alpha-harperbazar.intoday.in/fashion/photo/out-in-bloom-979",
            "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/fashion/photo/out-in-bloom-979",
            "slug": "out-in-bloom",
            "excerpt": "Floral prints blossom every year, but this fall, they’re bigger and brighter than before just the spirit we need right now.",
            "publish_up": "2020-12-18 19:29:00",
            "publish_down": null,
            "metatitle": "Out In Bloom",
            "metadesc": "Out In Bloom",
            "metakey": "",
            "highlights": "",
            "rating": "",
            "review_title": "",
            "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
            "review_pros": "",
            "review_cons": "",
            "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign47_261120124914_1199x674.png",
            "feature_image_data": {
              "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign47_261120124914_1199x674.png",
              "title": "untitleddesign47_261120124914_1199x674",
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
            "created_at": "2020-11-25T19:19:38.000000Z",
            "created_by_id": "13",
            "created_by_name": "prachi goyal",
            "cache_time": "03/05/2021 03:18:01 pm",
            "updated_at": "2020-12-18 19:41:31",
            "galleries": [
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_020_png_112620124938.image_020_png",
                "extra": {
                  "text": "<p>Naeem Khan</p>",
                  "caption": "<p>Naeem Khan</p>",
                  "alt_text": "",
                  "description": "<p>Naeem Khan</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_022_png_112620124939.image_022_png",
                "extra": {
                  "text": "<p>Altuzarra</p>",
                  "caption": "<p>Altuzarra</p>",
                  "alt_text": "",
                  "description": "<p>Altuzarra</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_024_png_112620124940.image_024_png",
                "extra": {
                  "text": "<p>Valentino</p>",
                  "caption": "<p>Valentino</p>",
                  "alt_text": "",
                  "description": "<p>Valentino</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_026_png_112620124941.image_026_png",
                "extra": {
                  "text": "<p>Oscar de la Renta</p>",
                  "caption": "<p>Oscar de la Renta</p>",
                  "alt_text": "",
                  "description": "<p>Oscar de la Renta</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_028_png_112620124942.image_028_png",
                "extra": {
                  "text": "<p>Balenciaga</p>",
                  "caption": "<p>Balenciaga</p>",
                  "alt_text": "",
                  "description": "<p>Balenciaga</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_030_png_112620124943.image_030_png",
                "extra": {
                  "text": "<p>Erdem</p>",
                  "caption": "<p>Erdem</p>",
                  "alt_text": "",
                  "description": "<p>Erdem</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_032_png_112620124944.image_032_png",
                "extra": {
                  "text": "<p>Gucci</p>",
                  "caption": "<p>Gucci</p>",
                  "alt_text": "",
                  "description": "<p>Gucci</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_034_png_112620124945.image_034_png",
                "extra": {
                  "text": "<p>Ralph &amp; Russo</p>",
                  "caption": "<p>Ralph &amp; Russo</p>",
                  "alt_text": "",
                  "description": "<p>Ralph &amp; Russo</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_036_png_112620124946.image_036_png",
                "extra": {
                  "text": "<p>Tom Ford</p>",
                  "caption": "<p>Tom Ford</p>",
                  "alt_text": "",
                  "description": "<p>Tom Ford</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_038_png_112620124946.image_038_png",
                "extra": {
                  "text": "<p>Versace</p>",
                  "caption": "<p>Versace</p>",
                  "alt_text": "",
                  "description": "<p>Versace</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_040_png_112620124947.image_040_png",
                "extra": {
                  "text": "<p>Isabel Marant</p>",
                  "caption": "<p>Isabel Marant</p>",
                  "alt_text": "",
                  "description": "<p>Isabel Marant</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_042_png_112620124948.image_042_png",
                "extra": {
                  "text": "<p>Halpern</p>",
                  "caption": "<p>Halpern</p>",
                  "alt_text": "",
                  "description": "<p>Halpern</p>"
                }
              }
            ],
            "video_node": "",
            "previous_url_id": "978"
          },
          {
            "content_id": 931,
            "apps_id": "1",
            "post_types_id": "4",
            "content_type": "photo",
            "headline": "Toe Ring Sandals Are The Unexpected Summer Shoe Everyone Loves",
            "introtext": "Slip-ons and flip flops get a dressier upgrade with these toe-ring versions",
            "fulltext": "&lt;p&gt;Hailey Bieber made toe ring sandals a thing, and now they are everywhere. Here&amp;#39;s how you can wear this trend.&lt;/p&gt;",
            "amp_fulltext": "&lt;p&gt;Hailey Bieber made toe ring sandals a thing, and now they are everywhere. Here's how you can wear this trend.&lt;/p&gt;",
            "category_trail": [
              {
                "id": 1,
                "title": "Fashion",
                "slug": "fashion",
                "parent": "0"
              }
            ],
            "primary_section_id": 1,
            "primary_section_name": "Fashion",
            "primary_section_slug": "fashion",
            "primary_id": "1",
            "primary_id_name": "Fashion",
            "primary_id_slug": "fashion",
            "url": "/fashion/photo/on-your-toes-931",
            "full_url": "https://alpha-harperbazar.intoday.in/fashion/photo/on-your-toes-931",
            "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/fashion/photo/on-your-toes-931",
            "slug": "on-your-toes",
            "excerpt": "Slip-ons and flip flops get a dressier upgrade with these toe-ring versions",
            "publish_up": "2020-12-18 19:26:00",
            "publish_down": null,
            "metatitle": "Toe Ring Sandals Are The Unexpected Summer Shoe Everyone Loves",
            "metadesc": "Slip-ons and flip flops get a dressier upgrade with these toe-ring versions",
            "metakey": "",
            "highlights": "",
            "rating": "",
            "review_title": "",
            "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
            "review_pros": "",
            "review_cons": "",
            "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image009_171120124507_353x453.png",
            "feature_image_data": {
              "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image009_171120124507_353x453.png",
              "title": "image009_171120124507_353x453",
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
            "created_at": "2020-11-17T07:16:23.000000Z",
            "created_by_id": "13",
            "created_by_name": "prachi goyal",
            "cache_time": "03/05/2021 03:18:01 pm",
            "updated_at": "2020-12-21 18:56:28",
            "galleries": [
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_009_png_111720124623.image_009_png",
                "extra": {
                  "text": "<p>Rs. 49,000 (approx), Cult Gaia</p>",
                  "caption": "<p>Rs. 49,000 (approx), Cult Gaia</p>",
                  "alt_text": "",
                  "description": "<p>Rs. 49,000 (approx), Cult Gaia</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_010_png_111720124624.image_010_png",
                "extra": {
                  "text": "<p>RS.38,000 (approx), Proenza Schouler</p>",
                  "caption": "<p>RS.38,000 (approx), Proenza Schouler</p>",
                  "alt_text": "",
                  "description": "<p>RS.38,000 (approx), Proenza Schouler</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_011_png_111720124625.image_011_png",
                "extra": {
                  "text": "<p>Rs.70,000 (approx), Bottega Veneta.</p>",
                  "caption": "<p>Rs.70,000 (approx), Bottega Veneta.</p>",
                  "alt_text": "",
                  "description": "<p>Rs.70,000 (approx), Bottega Veneta.</p>"
                }
              }
            ],
            "video_node": "",
            "previous_url_id": "930"
          },
          {
            "content_id": 980,
            "apps_id": "1",
            "post_types_id": "4",
            "content_type": "photo",
            "headline": "The New Updated Way to Wear a LBD",
            "introtext": "The black dress models itself on the femme fatale this year, with hourglass silhouettes, plunging necklines, and deep slits running along the thigh.",
            "fulltext": "&lt;p&gt;The black dress models itself on the femme fatale this year, with hourglass silhouettes, plunging necklines, and deep slits running along the thigh. And much like its alter ego, it&amp;rsquo;s about being sophisticated and perfectly irresistible&lt;/p&gt;",
            "amp_fulltext": "&lt;p&gt;The black dress models itself on the femme fatale this year, with hourglass silhouettes, plunging necklines, and deep slits running along the thigh. And much like its alter ego, it&rsquo;s about being sophisticated and perfectly irresistible&lt;/p&gt;",
            "category_trail": [
              {
                "id": 1,
                "title": "Fashion",
                "slug": "fashion",
                "parent": "0"
              }
            ],
            "primary_section_id": 1,
            "primary_section_name": "Fashion",
            "primary_section_slug": "fashion",
            "primary_id": "1",
            "primary_id_name": "Fashion",
            "primary_id_slug": "fashion",
            "url": "/fashion/photo/the-lbd-980",
            "full_url": "https://alpha-harperbazar.intoday.in/fashion/photo/the-lbd-980",
            "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/fashion/photo/the-lbd-980",
            "slug": "the-lbd",
            "excerpt": "The black dress models itself on the femme fatale this year, with hourglass silhouettes, plunging necklines, and deep slits running along the thigh.",
            "publish_up": "2020-12-18 19:21:00",
            "publish_down": null,
            "metatitle": "The Lbd",
            "metadesc": "The Lbd",
            "metakey": "",
            "highlights": "",
            "rating": "",
            "review_title": "",
            "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
            "review_pros": "",
            "review_cons": "",
            "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign48_261120010016_1199x674.png",
            "feature_image_data": {
              "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign48_261120010016_1199x674.png",
              "title": "untitleddesign48_261120010016_1199x674",
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
            "created_at": "2020-11-25T19:30:29.000000Z",
            "created_by_id": "13",
            "created_by_name": "prachi goyal",
            "cache_time": "03/05/2021 03:18:01 pm",
            "updated_at": "2020-12-18 19:21:31",
            "galleries": [
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_002_png_112620010029.image_002_png",
                "extra": {
                  "text": "image_002_png_112620010029",
                  "caption": "",
                  "alt_text": "",
                  "description": ""
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_004_png_112620010030.image_004_png",
                "extra": {
                  "text": "image_004_png_112620010030",
                  "caption": "",
                  "alt_text": "",
                  "description": ""
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_006_png_112620010031.image_006_png",
                "extra": {
                  "text": "image_006_png_112620010031",
                  "caption": "",
                  "alt_text": "",
                  "description": ""
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_028_png_112620010031.image_028_png",
                "extra": {
                  "text": "image_028_png_112620010031",
                  "caption": "",
                  "alt_text": "",
                  "description": ""
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_030_png_112620010032.image_030_png",
                "extra": {
                  "text": "image_030_png_112620010032",
                  "caption": "",
                  "alt_text": "",
                  "description": ""
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_032_png_112620010033.image_032_png",
                "extra": {
                  "text": "image_032_png_112620010033",
                  "caption": "",
                  "alt_text": "",
                  "description": ""
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_008_png_112620010033.image_008_png",
                "extra": {
                  "text": "image_008_png_112620010033",
                  "caption": "",
                  "alt_text": "",
                  "description": ""
                }
              }
            ],
            "video_node": "",
            "previous_url_id": "979"
          },
          {
            "content_id": 981,
            "apps_id": "1",
            "post_types_id": "4",
            "content_type": "photo",
            "headline": "Chic Velvet Outfits You Need to Own",
            "introtext": "Velvet scores strong in lending a sense of opulence to everyday wear.",
            "fulltext": "&lt;p&gt;It&amp;rsquo;s all about luxury this year, or at least the allusion to it. Velvet scores strong in lending a sense of opulence to everyday wear, with belted overcoats, bomber jackets, and the louche tracksuit in a burst of colours.&lt;/p&gt;",
            "amp_fulltext": "&lt;p&gt;It&rsquo;s all about luxury this year, or at least the allusion to it. Velvet scores strong in lending a sense of opulence to everyday wear, with belted overcoats, bomber jackets, and the louche tracksuit in a burst of colours.&lt;/p&gt;",
            "category_trail": [
              {
                "id": 1,
                "title": "Fashion",
                "slug": "fashion",
                "parent": "0"
              }
            ],
            "primary_section_id": 1,
            "primary_section_name": "Fashion",
            "primary_section_slug": "fashion",
            "primary_id": "1",
            "primary_id_name": "Fashion",
            "primary_id_slug": "fashion",
            "url": "/fashion/photo/soft-spot-981",
            "full_url": "https://alpha-harperbazar.intoday.in/fashion/photo/soft-spot-981",
            "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/fashion/photo/soft-spot-981",
            "slug": "soft-spot",
            "excerpt": "Velvet scores strong in lending a sense of opulence to everyday wear.",
            "publish_up": "2020-12-18 19:19:00",
            "publish_down": null,
            "metatitle": "Soft Spot",
            "metadesc": "Soft Spot",
            "metakey": "",
            "highlights": "",
            "rating": "",
            "review_title": "",
            "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
            "review_pros": "",
            "review_cons": "",
            "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign49_261120010650_1199x674.png",
            "feature_image_data": {
              "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign49_261120010650_1199x674.png",
              "title": "untitleddesign49_261120010650_1199x674",
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
                "authors_id": null,
                "author_name": "",
                "author_slug": "",
                "author_image": ""
              }
            ],
            "section_data": "",
            "created_at": "2020-11-25T19:37:15.000000Z",
            "created_by_id": "13",
            "created_by_name": "prachi goyal",
            "cache_time": "03/05/2021 03:18:01 pm",
            "updated_at": "2020-12-18 19:19:14",
            "galleries": [
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_034_png_112620010715.image_034_png",
                "extra": {
                  "text": "<p>Dries van Noten</p>",
                  "caption": "<p>Dries van Noten</p>",
                  "alt_text": "",
                  "description": "<p>Dries van Noten</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_036_png_112620010716.image_036_png",
                "extra": {
                  "text": "<p>Celine</p>",
                  "caption": "<p>Celine</p>",
                  "alt_text": "",
                  "description": "<p>Celine</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_042_png_112620010717.image_042_png",
                "extra": {
                  "text": "<p>Etro</p>",
                  "caption": "<p>Etro</p>",
                  "alt_text": "",
                  "description": "<p>Etro</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_040_png_112620010717.image_040_png",
                "extra": {
                  "text": "<p>Emporio Armani</p>",
                  "caption": "<p>Emporio Armani</p>",
                  "alt_text": "",
                  "description": "<p>Emporio Armani</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_038_png_112620010718.image_038_png",
                "extra": {
                  "text": "<p>Elie Saab</p>",
                  "caption": "<p>Elie Saab</p>",
                  "alt_text": "",
                  "description": "<p>Elie Saab</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_046_png_112620010718.image_046_png",
                "extra": {
                  "text": "<p>Proenza Schouler</p>",
                  "caption": "<p>Proenza Schouler</p>",
                  "alt_text": "",
                  "description": "<p>Proenza Schouler</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_044_png_112620010719.image_044_png",
                "extra": {
                  "text": "<p>Giorgio Armani</p>",
                  "caption": "<p>Giorgio Armani</p>",
                  "alt_text": "",
                  "description": "<p>Giorgio Armani</p>"
                }
              }
            ],
            "video_node": "",
            "previous_url_id": "980"
          },
          {
            "content_id": 982,
            "apps_id": "1",
            "post_types_id": "4",
            "content_type": "photo",
            "headline": "10 Stylish Capes to Keep You Fashionably Warm",
            "introtext": "Cloaked Heroes",
            "fulltext": "&lt;p&gt;It&amp;rsquo;s official: the cape makes a well-rounded case for fall this year, with sweeping sleeves in plaid, tweed, wool, and leather. Add a bohemian flair to chilly temperatures (or temperaments) this season, and pair the look with knee-high boots and layered separates.&lt;/p&gt;",
            "amp_fulltext": "&lt;p&gt;It&rsquo;s official: the cape makes a well-rounded case for fall this year, with sweeping sleeves in plaid, tweed, wool, and leather. Add a bohemian flair to chilly temperatures (or temperaments) this season, and pair the look with knee-high boots and layered separates.&lt;/p&gt;",
            "category_trail": [
              {
                "id": 1,
                "title": "Fashion",
                "slug": "fashion",
                "parent": "0"
              }
            ],
            "primary_section_id": 1,
            "primary_section_name": "Fashion",
            "primary_section_slug": "fashion",
            "primary_id": "1",
            "primary_id_name": "Fashion",
            "primary_id_slug": "fashion",
            "url": "/fashion/photo/cloaked-heroes-982",
            "full_url": "https://alpha-harperbazar.intoday.in/fashion/photo/cloaked-heroes-982",
            "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/fashion/photo/cloaked-heroes-982",
            "slug": "cloaked-heroes",
            "excerpt": "Cloaked Heroes",
            "publish_up": "2020-12-18 19:17:00",
            "publish_down": null,
            "metatitle": "Cloaked Heroes",
            "metadesc": "Cloaked Heroes",
            "metakey": "",
            "highlights": "",
            "rating": "",
            "review_title": "",
            "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
            "review_pros": "",
            "review_cons": "",
            "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign50_261120011435_1199x674.png",
            "feature_image_data": {
              "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign50_261120011435_1199x674.png",
              "title": "untitleddesign50_261120011435_1199x674",
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
            "created_at": "2020-11-25T19:44:46.000000Z",
            "created_by_id": "13",
            "created_by_name": "prachi goyal",
            "cache_time": "03/05/2021 03:18:01 pm",
            "updated_at": "2020-12-18 19:17:17",
            "galleries": [
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_000_png_112620011446.image_000_png",
                "extra": {
                  "text": "<p>Salvatore Ferragamo</p>",
                  "caption": "<p>Salvatore Ferragamo</p>",
                  "alt_text": "",
                  "description": "<p>Salvatore Ferragamo</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_010_png_112620011447.image_010_png",
                "extra": {
                  "text": "<p>Christian Dior</p>",
                  "caption": "<p>Christian Dior</p>",
                  "alt_text": "",
                  "description": "<p>Christian Dior</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_012_png_112620011447.image_012_png",
                "extra": {
                  "text": "<p>Etro</p>",
                  "caption": "<p>Etro</p>",
                  "alt_text": "",
                  "description": "<p>Etro</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_014_png_112620011448.image_014_png",
                "extra": {
                  "text": "<p>Isabel Marant</p>",
                  "caption": "<p>Isabel Marant</p>",
                  "alt_text": "",
                  "description": "<p>Isabel Marant</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_016_png_112620011448.image_016_png",
                "extra": {
                  "text": "<p>Lanvin</p>",
                  "caption": "<p>Lanvin</p>",
                  "alt_text": "",
                  "description": "<p>Lanvin</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_018_png_112620011449.image_018_png",
                "extra": {
                  "text": "<p>Max Mara</p>",
                  "caption": "<p>Max Mara</p>",
                  "alt_text": "",
                  "description": "<p>Max Mara</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_020_png_112620011449.image_020_png",
                "extra": {
                  "text": "<p>Stella McCartney</p>",
                  "caption": "<p>Stella McCartney</p>",
                  "alt_text": "",
                  "description": "<p>Stella McCartney</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_022_png_112620011450.image_022_png",
                "extra": {
                  "text": "<p>Saint Laurent</p>",
                  "caption": "<p>Saint Laurent</p>",
                  "alt_text": "",
                  "description": "<p>Saint Laurent</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_026_png_112620011451.image_026_png",
                "extra": {
                  "text": "<p>Michael Kors</p>",
                  "caption": "<p>Michael Kors</p>",
                  "alt_text": "",
                  "description": "<p>Michael Kors</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_024_png_112620011451.image_024_png",
                "extra": {
                  "text": "<p>Victoria Beckham</p>",
                  "caption": "<p>Victoria Beckham</p>",
                  "alt_text": "",
                  "description": "<p>Victoria Beckham</p>"
                }
              }
            ],
            "video_node": "",
            "previous_url_id": "981"
          },
          {
            "content_id": 983,
            "apps_id": "1",
            "post_types_id": "4",
            "content_type": "photo",
            "headline": "A Complete Sartorial Guide to Wearing Green",
            "introtext": "Lush greens replace autumnal tones in emerald shades, from a single-tone look to colour blocking with hints of blue.",
            "fulltext": "&lt;p&gt;Lush greens replace autumnal tones in emerald shades, from a single-tone look to colour blocking with hints of blue. Add small doses of texture liven up the style&amp;mdash;tweed, pleats, or appliqu&amp;eacute;. Rest assured in the fact that green is a highlight in itself, so you don&amp;rsquo;t need to find ways to dress it up.&lt;/p&gt;",
            "amp_fulltext": "&lt;p&gt;Lush greens replace autumnal tones in emerald shades, from a single-tone look to colour blocking with hints of blue. Add small doses of texture liven up the style&mdash;tweed, pleats, or appliqu&eacute;. Rest assured in the fact that green is a highlight in itself, so you don&rsquo;t need to find ways to dress it up.&lt;/p&gt;",
            "category_trail": [
              {
                "id": 1,
                "title": "Fashion",
                "slug": "fashion",
                "parent": "0"
              }
            ],
            "primary_section_id": 1,
            "primary_section_name": "Fashion",
            "primary_section_slug": "fashion",
            "primary_id": "1",
            "primary_id_name": "Fashion",
            "primary_id_slug": "fashion",
            "url": "/fashion/photo/green-pastures-983",
            "full_url": "https://alpha-harperbazar.intoday.in/fashion/photo/green-pastures-983",
            "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/fashion/photo/green-pastures-983",
            "slug": "green-pastures",
            "excerpt": "Lush greens replace autumnal tones in emerald shades, from a single-tone look to colour blocking with hints of blue.",
            "publish_up": "2020-12-18 19:15:00",
            "publish_down": null,
            "metatitle": "Green Pastures",
            "metadesc": "Green Pastures",
            "metakey": "",
            "highlights": "",
            "rating": "",
            "review_title": "",
            "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
            "review_pros": "",
            "review_cons": "",
            "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign51_261120012400_1199x674.png",
            "feature_image_data": {
              "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign51_261120012400_1199x674.png",
              "title": "untitleddesign51_261120012400_1199x674",
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
            "created_at": "2020-11-25T19:54:15.000000Z",
            "created_by_id": "13",
            "created_by_name": "prachi goyal",
            "cache_time": "03/05/2021 03:18:01 pm",
            "updated_at": "2020-12-18 19:15:55",
            "galleries": [
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_020_png_112620012415.image_020_png",
                "extra": {
                  "text": "<p>Carolina Herrera</p>",
                  "caption": "<p>Carolina Herrera</p>",
                  "alt_text": "",
                  "description": "<p>Carolina Herrera</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_021_png_112620012416.image_021_png",
                "extra": {
                  "text": "<p>Herm&egrave;s</p>",
                  "caption": "<p>Herm&egrave;s</p>",
                  "alt_text": "",
                  "description": "<p>Herm&egrave;s</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_022_png_112620012416.image_022_png",
                "extra": {
                  "text": "<p>Miu Miu</p>",
                  "caption": "<p>Miu Miu</p>",
                  "alt_text": "",
                  "description": "<p>Miu Miu</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_023_png_112620012417.image_023_png",
                "extra": {
                  "text": "<p>Tod&rsquo;s</p>",
                  "caption": "<p>Tod&rsquo;s</p>",
                  "alt_text": "",
                  "description": "<p>Tod&rsquo;s</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_024_png_112620012417.image_024_png",
                "extra": {
                  "text": "<p>Jason Wu</p>",
                  "caption": "<p>Jason Wu</p>",
                  "alt_text": "",
                  "description": "<p>Jason Wu</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_025_png_112620012418.image_025_png",
                "extra": {
                  "text": "<p>Emporio Armani</p>",
                  "caption": "<p>Emporio Armani</p>",
                  "alt_text": "",
                  "description": "<p>Emporio Armani</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_026_png_112620012419.image_026_png",
                "extra": {
                  "text": "<p>Elie Saab</p>",
                  "caption": "<p>Elie Saab</p>",
                  "alt_text": "",
                  "description": "<p>Elie Saab</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_027_png_112620012419.image_027_png",
                "extra": {
                  "text": "<p>Altuzarra</p>",
                  "caption": "<p>Altuzarra</p>",
                  "alt_text": "",
                  "description": "<p>Altuzarra</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_028_png_112620012420.image_028_png",
                "extra": {
                  "text": "<p>Naeem Khan</p>",
                  "caption": "<p>Naeem Khan</p>",
                  "alt_text": "",
                  "description": "<p>Naeem Khan</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_029_png_112620012420.image_029_png",
                "extra": {
                  "text": "<p>Bibhu Mohapatra</p>",
                  "caption": "<p>Bibhu Mohapatra</p>",
                  "alt_text": "",
                  "description": "<p>Bibhu Mohapatra</p>"
                }
              },
              {
                "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_030_png_112620012421.image_030_png",
                "extra": {
                  "text": "<p>Prabal Gurung</p>",
                  "caption": "<p>Prabal Gurung</p>",
                  "alt_text": "",
                  "description": "<p>Prabal Gurung</p>"
                }
              }
            ],
            "video_node": "",
            "previous_url_id": "982"
          }
        ],
        "other_information": {
          "total_no_of_records": 48,
          "display_records": 10,
          "cache_time": "03/05/2021 03:18:00 pm"
        },
        "trail_info": {
          "section_name": "Fashion",
          "section_slug": "fashion"
        },
        "seo_info": {
          "meta_title": "Fashion News: Latest Fashion Trends and Celebrity Style, Fashion Tips on Harpers Bazaar",
          "meta_desc": "Harpers Bazaar is your source for fashion style, Celebrity Style updates, fashion tips, fashion designers and latest fashion trends.",
          "meta_key": "Fashion news, latest fashion tips, Celebrity Style updates, fashion news online, fashion news live, fashion Tips, Beauty Tips, fashion style Tips, fashion Trends, fashion advice, latest fashion trends, fashion designers."
        },
        "seo_posttype": []
      }
  }
    return {
        props: { fashionData, },
      };
}


// export async function getServerSideProps(){
//     const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/latest?section=fashion&section_level=0content_type=all&page=1&limit=10&order_by=publish_up%20desc&app=all`)
//     const fashionData = await res.json()
//     return {
//         props: { fashionData, },
//       };
// }
