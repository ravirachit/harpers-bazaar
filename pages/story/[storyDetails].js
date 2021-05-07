import React from 'react';
import moment from 'moment';
import { useRouter } from "next/router";
import {Bling as GPT} from "react-gpt";
import Head from 'next/head';
import parse from 'html-react-parser';
import Link from 'next/link';

GPT.enableSingleRequest();

// Import Components Dependencies
// Images
const smalladd = '../assets/images/300x250.png';
const Ads = '../assets/images/add.png';
const backArrowImg = '../assets/images/backarrow.png';

export default function StoryContent(){
    const router = useRouter();
    function createMarkup() { return {__html: storyData.data.feed[0].fulltext}; };
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
      const storyData = {
        "data": {
          "feed": [
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
              "cache_time": "06/05/2021 12:20:30 pm",
              "updated_at": "2020-12-04 17:21:22",
              "galleries": "",
              "video_node": "",
              "previous_url_id": "1952"
            }
          ],
          "other_information": {
            "total_no_of_records": "1"
          },
          "related_stories": [
            ""
          ]
        }
      }
   return(
       <>  
       <Head>
        <title>Latest Story: Latest Story content</title>
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
                    <a href="www.facebook.com">{storyData.data.feed[0].primary_section_name}</a>
                </div>
            </div>

            {/* Search Main Section */}
            <section className="content_wrapper">
                <div className="container">
                    <div className="content_inner">
                        <div className="content_left">
                            <h1>{storyData.data.feed[0].headline}</h1>
                            <span className="heading_sub">{storyData.data.feed[0].introtext}</span>
                            <div className="user_profile">
                            <figure>
                                <img src="https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202104/author-icon160421113925.png" alt="" />
                            </figure>
                                <i>{moment(storyData.data.feed[0].updated_at).format("MMM DD, YYYY")} | by <Link href="/author/bazaar-india/">{storyData.data.feed[0].author_data[0].author_name}</Link>  </i>
                            </div>

							<figure className="story_one">
                                    <img src={storyData.data.feed[0].feature_image_data.url} alt="story_img" />
                            </figure>
				<p></p>
                {/* <div dangerouslySetInnerHTML={{__html:storyData.data.feed[0].fulltext}}></div> */}
                {/* <div dangerouslySetInnerHTML={createMarkup()}></div> */}
                {/* <div>{ ReactHtmlParser(storyData.data.feed[0].fulltext) }</div> */}
                <div>
                {parse(`<p><strong><u>Samyukta Nair, Food and Fashion Entrepreneur</u></strong></p> <p><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-006271120025708.png' /></p> <p>&ldquo;Embracing my curls during this time has been a game-changer for me, and I have been enjoying them courtesy Curlsmith&rsquo;s Curl Quenching Conditioning Wash and their Oil-In-Cream. I&rsquo;ve also made a conscious effort to change my night-time skincare routine with a weekly deep cleanse and exfoliation, using the Forest Essentials Multani Mitti Ubtan mixed with their Aloevera Juice. I call it a night with a thin layer of their Ojas Illuminating Night Beauty Balm.&rdquo;</p> <p><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-014271120025900.png' /><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-016271120025944.png' width='70' /><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-032271120030016.png' width='140' /></p> <p>Forest Essentials Aloevera Juice, Rs.575</p> <p>Curlsmith Curl Quenching Conditioning Wash and Oil-In- Cream,&nbsp; Rs.2,000 (approx),</p> <p>Ojas Illuminating Night Beauty Balm, Rs.3,800.</p> <p><u><strong>Mallika Tarkas Parekh, Founder and Director of AMP Fitness, LLP, Exclusive Licensee of Physique 57 in India</strong></u></p> <p><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-005271120030127.png' width='232' /></p> <p>&nbsp;</p> <p>&ldquo;Honestly, it feels amazing to be able to give my make-up products a rest! The lockdown has been about exfoliation and hydration for me. My favourites include the SkinCeuticals C + AHA serum, which smells awful but really works for my skin, the SkinCeuticals Hydrating B5 Gel, and the Joanna Vargas Exfoliating Mask and Daily Hydrating Cream. If I&rsquo;m feeling fancy (even for Zoom meetings), I spritz on Jo Malone&rsquo;s Nectarine Blossom and Honey Cologne to brighten up my mood.&rdquo;</p> <p><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-020271120032417.png' width='183' /></p> <p>Skinceuticals Hydrating B5 Gel, Rs.6,100 (approx)</p> <p><u><strong>&nbsp;Karishma Manga Bedi, Entrepreneur</strong></u></p> <p><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-009271120032511.png' /></p> <p>&ldquo;I decided to use this time at home to do all the things I couldn&rsquo;t earlier, including learning to play the piano, reading, and making time for self-care. In addition to my regular beauty regime, I have started using the Forest Essentials Facial Ubtan (in Soundarya) as a face pack in the morning and I follow it up with their Facial Tonic Mist Hasayan Rose. At night, I use the Forest Essentials Ojas Glow Replenishing Night Beauty Balm and also massage my face with a rose quartz roller that has been kept in the fridge for at least an hour. The result is supple and plumped skin.&rdquo;</p> <p><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-017271120032640.png' /></p> <p>Forest Essentials Facial Tonic Mist Rosewater</p> <p><u><strong>Shaheen Abbas, Jewellery Designer</strong></u></p> <p><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-007271120032738.png' /></p> <p>&ldquo;During this lockdown, my focus has been on keeping my skin hydrated and exfoliated. I have been using Farmacy&rsquo;s Honeymoon Glow AHA Resurfacing Night Serum, mixed with The Inkey List&rsquo;s Hyaluronic Acid Serum two to three times a week&mdash;this combination really helps keep my skin looking fresh. During the day, I use SK-II&rsquo;s Facial Treatment Essence, followed by Drunk Elephant&rsquo;s C-Firma Day Serum (again mixed with hyaluronic acid). For overall hydration, I have been using Drunk Elephant&rsquo;s Protini Polypeptide Cream, which is fabulous! The Oats Cleansing Balm from The Inkey List has been my go-to, lately, because it keeps my skin clean without stripping off the natural oils. And when I feel like my skin needs an extra shot of hydration, I turn to Summer Fridays&rsquo; Jet Lag Mask.&rdquo;</p> <p><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-021271120033013.png' /><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-022271120033032.png' /><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-023271120033052.png' width='63' /></p> <p>Drunk Elephant Protini Polypeptide Cream, Rs.5,000 (approx),</p> <p>The Inkey List Hyaluronic Acid Serum, Rs. 590 (approx), Farmacy</p> <p>Honeymoon Glow, Rs.4,270 (approx).</p> <p><u><strong>Diva Dhawan, Model</strong></u></p> <p><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-012271120033228.png' /></p> <p>&ldquo;I have taken this time to really take care of my skin...keeping it clean and allowing it to breathe. I have opted for a super-minimal routine. The two products that I&rsquo;m using at the moment are Bioderma&rsquo;s moisturiser for dry skin and Bobbi Brown&rsquo;s Vitamin Enriched Eye Base. Oh, and when I feel like pampering my skin, I massage my face with a jade roller...mostly once a week.&rdquo;</p> <p><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-025271120033414.png' width='116' /><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-024271120033444.png' width='242' /></p> <p>Bioderma Atoderm Cr&egrave;me, Rs.599</p> <p><u><strong>Monica Dogra, Musician</strong></u></p> <p><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-010271120033530.png' width='275' /></p> <p>&ldquo;Over the past few months I haven&rsquo;t been able to visit my dermatologist or facialist. As a result, I have made a conscious shift in the products I use every day to ensure my skin is taken care of. Good skincare leads to great skin, and I have been using La Mer&rsquo;s The Deep Cleansing Foam, followed by a moisturiser by Peter Thomas Roth, which keeps my skin hydrated all day long. And yes, I religiously use an eye cream&mdash;the one by Clinique is excellent!&rdquo;</p> <p><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-029271120033648.png' width='85' /><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-030271120033713.png' /><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-028271120033740.png' /></p> <p>La Mer Deep The Cleansing Foam, Rs.6,750 (approx)</p> <p>Hydrating Moisturizer, Rs.3,800 (approx), Clinique<br /> Pep-Start Eye Cream, Rs.2,300.</p> <p>Peter Thomas Roth Water Drench Hyaluronic Cloud Cream</p> <p><u><strong>Shaleena Nathani, Celebrity Stylist</strong></u></p> <p><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-001271120033940.png' /></p> <p>&ldquo;The one thing that this pandemic has taught me, in terms of skincare, is consistency. I was extremely impatient earlier, and over the past few months, I have religiously followed a regime recommended by a derm, and it has really helped me. It&rsquo;s quite simple, actually: I start off with a foam cleanser and apply a serum mixed with a bit of retinol cream. Then, I top it up with a moisturiser. And I wear sunscreen all the time, even when I am indoors. These simple steps, and a little bit of patience, have transformed my skin.&rdquo;</p> <p><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-031271120034117.png' /></p> <p>Shangpree Spa Care System S-Energy Facial Mousse Cleanser, Rs.1,900</p> <p><strong><u>Richa Moorjani, Actor</u></strong></p> <p><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-000271120034205.png' /></p> <p>&ldquo;I love using clean, cruelty-free, great-smelling products. Throughout the lockdown, I&rsquo;ve been using Mario Badescu&rsquo;s Cleansing Enzyme Gel and Botanical Exfoliating Scrub to cleanse and exfoliate. I follow that with their Aloe, Chamomile and Lavender Facial Spray (which I also use throughout the day), and then apply Soma Ayurvedic&rsquo;s Vitamin C Serum, followed by their Lavender, Moringa, Avocado Under-Eye Gel. During the day, I always wear a moisturiser with SPF, like Mineral Fusion&rsquo;s SPF 40 Moisturizer; and at night, I slather on Soma Ayurvedic&rsquo;s Aloe Vera and Saffron Anti-Aging Cream.&rdquo;</p> <p><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-026271120034350.png' width='63' /><img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image-027271120034412.png' /></p> <p>Mario Badescu Facial Spray with Aloe, Chamomile and Lavender Facial, Rs.510 (approx)</p> <p>Mineral Fusion Mineral SPF 40 Face Moisturizer, Rs.1,840 (approx).</p> <p>&nbsp;</p>`)}
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
            {
                                rhsData.data.feed.templatedata[0].content_data.widget_data.widget_data.main_data.map((data)=>{
                                    return(
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