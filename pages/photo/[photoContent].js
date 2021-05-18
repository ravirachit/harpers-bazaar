import React from 'react';
import moment from 'moment';
import { useRouter } from "next/router";
import { Bling as GPT } from "react-gpt";
import Head from 'next/head';

GPT.enableSingleRequest();

// Import Components Dependencies
// Images
const smalladd = '../assets/images/300x250.png';
const Ads = '../assets/images/add.png';
const backArrowImg = '../assets/images/backarrow.png';

export default function PhotoContent() {
    const rhsData = {
        "data": {
            "feed": {
                "id": 2,
                "title": "RHS",
                "slug": "rhs",
                "description": "&lt;p&gt;rhs&lt;/p&gt;",
                "published": "1",
                "apps_id": "1",
                "created_at": "2020-11-19T11:58:15.000000Z",
                "updated_at": "2020-11-19T11:58:15.000000Z",
                "seo": {
                    "meta_title": "",
                    "meta_desc": "",
                    "meta_key": ""
                },
                "templatedata": [
                    {
                        "id": 22,
                        "content": "{\"multi_data_title\":\"Must Read\",\"multi_data_widget_id\":\"5\",\"multi_data_widget_extra\":\"image_size=364x209|total_record=4|more_link=/photos/|widget_template=listing_new\",\"multi_data_widget_template\":\"\"}",
                        "content_data": {
                            "title": "Must Read",
                            "multi_data_widget_id": "5",
                            "multi_data_widget_extra": "image_size=364x209&total_record=4&more_link=/photos/&widget_template=listing_new",
                            "multi_data_widget_template": "",
                            "multi_data_widget_extra_config": {
                                "image_size": "364x209",
                                "total_record": "4",
                                "more_link": "/photos/",
                                "widget_template": "listing_new"
                            },
                            "widget_data": {
                                "id": 5,
                                "title": "Latest Gallery",
                                "slug": "latest-gallery",
                                "description": "Latest Gallery",
                                "type": "latest_article",
                                "content": "{\"related_content_type\":\"4\",\"category_id\":\"\",\"no_of_records\":\"10\"}",
                                "published": "1",
                                "created_at": "2020-11-19T11:52:58.000000Z",
                                "updated_at": "2020-11-19T11:52:58.000000Z",
                                "deleted_at": null,
                                "widget_data": {
                                    "related_content_type_id": "4",
                                    "related_content_type_name": [
                                        "photo"
                                    ],
                                    "category_id": "",
                                    "category_name": "",
                                    "section_level": "",
                                    "no_of_records": "10",
                                    "main_data": [
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
                                            "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image040_171120015052_349x191.png?size=364:209",
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
                                            "cache_time": "05/05/2021 01:53:53 pm",
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
                                            "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/untitled-design-78161220020104.png?size=364:209",
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
                                            "cache_time": "05/05/2021 01:53:53 pm",
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
                                            "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign46_261120123930_1199x674.png?size=364:209",
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
                                            "cache_time": "05/05/2021 01:53:54 pm",
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
                                            "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign47_261120124914_1199x674.png?size=364:209",
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
                                            "cache_time": "05/05/2021 01:53:54 pm",
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
                                        }
                                    ]
                                }
                            }
                        }
                    }
                ]
            },
            "other_information": {
                "total_no_of_records": "1"
            }
        }
    }
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Latest Photo: Latest Photo Details</title>
                {/* <script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script> */}
            </Head>
            <div className="add_wrapper">
                <div id="div-gpt-ad-6326067-1">
                    <GPT
                        adUnitPath="/1007232/HarperBazaar_HP_300x250-728x90_ATF"
                        slotSize={[728, 90]}
                    />
                </div>
            </div>
            <div className="nevigation_section">
                <div className="container">
                    <a href="www.facebook.com" className="active">Home  </a>
                    <span> <img src={backArrowImg} alt="back" /></span>
                    <a href="www.facebook.com">Fashion</a>
                </div>
            </div>
            <section className="content_wrapper">
                <div className="container">
                    <div className="content_inner">
                        <div className="content_left">
                            <h1>7 Indian Designers Create Facemasks for Bazaar India</h1>
                            <span className="heading_sub">We invited some of the country’s best designers to share their interpretation of the universal symbol of safety</span>
                            <div className="user_profile">
                                <figure>
                                    <img className="authorIcon" src="https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202104/author-icon160421113925.png" alt="" />
                                </figure>
                                <i>Nov 23, 2020 | by <a href="/authors/bazaar-india">Bazaar India</a>  </i>
                            </div>
                            <div className="gallery_box gallery_box_center">
                                <div className="figure_box">
                                    <figure className="image">
                                        <img src="https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/page_1_image_1_png_111620033349.page_1_image_1_png" alt="" title='RAHUL MISHRA
                                “There is something very heart-warming about how each entity that exists in a forest lives to complement the others. While we push towards a new normal and masks become a common accessory, we choose the surface as a canvas for our storytelling—of craftsmanship, beauty, and emotions. The visual symbolises an undisturbed forest in equilibrium while the hand embroidery represents the mindful and sustainable process of production in fashion.”' />
                                        <div className="pic_count">
                                            <i><img src="https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/camera.png" alt="" /></i>
                                            <span>1 / 3</span>
                                        </div>
                                    </figure>
                                    <figcaption>RAHUL MISHRA
                                    “There is something very heart-warming about how each entity that exists in a forest lives to complement the others. While we push towards a new normal and masks become a common accessory, we choose the surface as a canvas for our storytelling—of craftsmanship, beauty, and emotions. The visual symbolises an undisturbed forest in equilibrium while the hand embroidery represents the mindful and sustainable process of production in fashion.”
                                </figcaption>
                                </div>
                                <p>RAHUL MISHRA
                                “There is something very heart-warming about how each entity that exists in a forest lives to complement the others. While we push towards a new normal and masks become a common accessory, we choose the surface as a canvas for our storytelling—of craftsmanship, beauty, and emotions. The visual symbolises an undisturbed forest in equilibrium while the hand embroidery represents the mindful and sustainable process of production in fashion.”
                                </p>
                            </div>

                            <div className="gallery_box gallery_box_center">
                                <div className="figure_box">
                                    <figure className="image">
                                        <img src="https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_002_1_jpg_111620033350.image_002_1_jpg" alt="" title='Tarun Tahiliani
“The image is an edited version of the cover of a Time magazine called You Brain: A Users Guide. It captures all the sensations, emotions, speech, vision and all the madness that the coronavirus is unleashing globally. The mask is our flag and I have placed a chakra, a symbol of peace and duty on it. The idea is to not let negative thoughts, the virus, any doubt or hate enter. Stay calm and collected. Use your mind, your faculties, to protect yourself and to spread calm, peace, science and love. That is the only thing that is going to get us through this."' />
                                        <div className="pic_count">
                                            <i><img src="https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/camera.png" alt="" /></i>
                                            <span>2 / 3</span>
                                        </div>
                                    </figure>
                                    <figcaption>Tarun Tahiliani
                                    “The image is an edited version of the cover of a Time magazine called You Brain: A Users Guide. It captures all the sensations, emotions, speech, vision and all the madness that the coronavirus is unleashing globally. The mask is our flag and I've placed a chakra, a symbol of peace and duty on it. The idea is to not let negative thoughts, the virus, any doubt or hate enter. Stay calm and collected. Use your mind, your faculties, to protect yourself and to spread calm, peace, science and love. That is the only thing that is going to get us through this."
                                    &nbsp;
</figcaption>
                                </div>
                                <p>Tarun Tahiliani
                                “The image is an edited version of the cover of a Time magazine called You Brain: A Users Guide. It captures all the sensations, emotions, speech, vision and all the madness that the coronavirus is unleashing globally. The mask is our flag and I've placed a chakra, a symbol of peace and duty on it. The idea is to not let negative thoughts, the virus, any doubt or hate enter. Stay calm and collected. Use your mind, your faculties, to protect yourself and to spread calm, peace, science and love. That is the only thing that is going to get us through this."
&nbsp;</p>

                            </div>

                            <div className="gallery_box gallery_box_center">
                                <div className="figure_box">
                                    <figure className="image">
                                        <img src="https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_008_1_jpg_111620033353.image_008_1_jpg" alt="" title='Ashdeen
“We have conceived an elegant ombré mask with a pearl edging. It is embroidered with our favourite motif of a flying crane. Serendipitously, the crane represents long life and is also a symbol of wisdom. We really do hope that its mythical qualities rub off on the wearers. Long life to appreciate our very existence, the wisdom to cherish nature and humanity. May we, like the feathered tribe, soar above our problems with empathy and compassion' />
                                        <div className="pic_count">
                                            <i><img src="https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/camera.png" alt="" /></i>
                                            <span>3 / 3</span>
                                        </div>
                                    </figure>
                                    <figcaption>Ashdeen
                                        “We have conceived an elegant ombré mask with a pearl edging. It is embroidered with our favourite motif of a flying crane. Serendipitously, the crane represents long life and is also a symbol of wisdom. We really do hope that its mythical qualities rub off on the wearers. Long life to appreciate our very existence, the wisdom to cherish nature and humanity. May we, like the feathered tribe, soar above our problems with empathy and compassion.” 
                                    </figcaption>
                                </div>
                                <p>Ashdeen
“We have conceived an elegant ombré mask with a pearl edging. It is embroidered with our favourite motif of a flying crane. Serendipitously, the crane represents long life and is also a symbol of wisdom. We really do hope that its mythical qualities rub off on the wearers. Long life to appreciate our very existence, the wisdom to cherish nature and humanity. May we, like the feathered tribe, soar above our problems with empathy and compassion.”</p>

                            </div>

                            <div className="cm-comment-btn-container cm_list"><div className="cm-btn-group"><span id="postCommentId925"><span className="cmopenbut postCommentBut cmload-comment-btn">Post a Comment <span className="cmPageButCount">(0)</span></span></span></div></div>

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
                            {
                                rhsData.data.feed.templatedata[0].content_data.widget_data.widget_data.main_data.map((data) => {
                                    return (
                                        <div className="right_card">
                                            <figure><img src={data.feature_image_data.url} alt="card" /></figure>
                                            <p>{data.headline}</p>
                                        </div>
                                    )

                                })
                            }
                        </div>
                    </div>
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