import React from 'react';
import moment from 'moment';
import { useRouter } from "next/router";
import {Bling as GPT} from "react-gpt";
import Head from 'next/head';

GPT.enableSingleRequest();

// Import Components Dependencies
// Images
const smalladd = '../assets/images/300x250.png';
const Ads = '../assets/images/add.png';
const backArrowImg = '../assets/images/backarrow.png';

export default function SearchContent(){
    const router = useRouter();
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
      const searchContentData = {
        "data": {
          "feed": [
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
              "full_url": "https://dev-harperbazar.intoday.in/travel-food/story/the-travel-diaries--cinque-terre-italy-by-kresha-bajaj-1943",
              "amp_full_url": "https://dev-harperbazar.intoday.in/amp/travel-food/story/the-travel-diaries--cinque-terre-italy-by-kresha-bajaj-1943",
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
                  "author_image": [
                    {
                      "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/priyanka_251120033723_1099x675.jpeg",
                      "extra": {
                        "text": "priyanka_251120033723_1099x675",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      }
                    }
                  ]
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
              "cache_time": "05/05/2021 02:24:22 pm",
              "updated_at": "2020-12-16 15:03:41",
              "galleries": "",
              "video_node": "",
              "previous_url_id": "1940"
            },
            {
              "content_id": 1948,
              "apps_id": "1",
              "post_types_id": "2",
              "content_type": "story",
              "headline": "Discover Copenhagen With Travel Influencer Shenaz Treasury",
              "introtext": "&lt;p&gt;'Christiania’s graffiti- painted walls, and cobblestone alleys with cosy bars and cafés, are what make it interesting.”&lt;/p&gt;",
              "fulltext": "&lt;p&gt;&lt;/p&gt;&lt;p&gt;“I visited the Nordic city recently, and absolutely loved its vibe. Apart from getting my fill of Danish pastries, I explored areas like Freetown Christiania—a district that has its own rules, completely independent of the Danish government. Established in the ’70s by a group of hippies, it’s the polar opposite of what Copenhagen is known for. Christiania’s graffiti painted walls, and cobblestone alleys with cozy bars and cafés, are what make it interesting. And the Green Light District is known for its greatconcerts, art galleries, and restaurants. Another place you must check out is Nyhavn—a waterfront district lined with brightly-colored, 17th-century townhouses, bars, cafés, and restaurants. Do visit the Rosenborg Castle for the Crown Jewels andsee the Changing of the Guard ceremony at the Christiansborg Palace. Lastly, Tarnet or The Tower offers an amazing view of the city and is free for all.&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;img title='image--0062_112320050628.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0062_112320050628.png' alt='image--0062_112320050628.png' width='343'  /&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;Shenaz Treasury, Travel Influencer&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Do Try: “The Little Mermaid and Zinkglobal are two iconic sculptures in the city that you can’t miss to visit. A picture thereis a must. Also, the Danes are known for their stylish, minimalist home products— something you should definitely bring back.”&lt;/p&gt;&lt;p&gt;&lt;img title='image--0022_112320050817.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0022_112320050817.png' alt='image--0022_112320050817.png' width='408'  /&gt;&lt;/p&gt;&lt;p&gt;&lt;img title='image--0082_112320050848.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0082_112320050848.png' alt='image--0082_112320050848.png' width='391'  /&gt;&lt;/p&gt;&lt;p&gt;My Tip: “Take a boat and explore this city on water—the sights are breathtaking. Also, Copenhagen is cafe heaven.Cafe Livingstone tops my list...it’s minimal, yet very stylish. If you can manage to get a reservation at Noma, a two-Michelin-star restaurant, that’s great! Copengahen is the birthplace of LEGO, and a walk through their store on København is a visual delight.&lt;/p&gt;&lt;p&gt;&lt;img title='image--0072_112320050940.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0072_112320050940.png' alt='image--0072_112320050940.png' width='448'  /&gt;&lt;/p&gt;&lt;p&gt;A building in the Christiania district.&lt;/p&gt;",
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
              "url": "/travel-food/story/travel-diaries-copenhagen-denmark-by-shenaz-treasury-1948",
              "full_url": "https://dev-harperbazar.intoday.in/travel-food/story/travel-diaries-copenhagen-denmark-by-shenaz-treasury-1948",
              "amp_full_url": "https://dev-harperbazar.intoday.in/amp/travel-food/story/travel-diaries-copenhagen-denmark-by-shenaz-treasury-1948",
              "slug": "travel-diaries-copenhagen-denmark-by-shenaz-treasury",
              "excerpt": "&lt;p&gt;'Christiania’s graffiti- painted walls, and cobblestone alleys with cosy bars and cafés, are what make it interesting.”&lt;/p&gt;",
              "publish_up": "2020-11-23 17:11:36",
              "publish_down": "0000-00-00 00:00:00",
              "metatitle": "Discover Copenhagen With Travel Influencer Shenaz Treasury",
              "metadesc": "&lt;p&gt;'Christiania’s graffiti- painted walls, and cobblestone alleys with cosy bars and cafés, are what make it interesting.”&lt;/p&gt;",
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
                  "authors_id": "1",
                  "author_name": "Bazaar India",
                  "author_slug": "bazaar-india",
                  "author_image": [
                    {
                      "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/priyanka_251120033723_1099x675.jpeg",
                      "extra": {
                        "text": "priyanka_251120033723_1099x675",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      }
                    }
                  ]
                }
              ],
              "section_data": "",
              "created_at": "2020-11-23T11:41:36.000000Z",
              "created_by_id": "13",
              "created_by_name": "prachi goyal",
              "cache_time": "05/05/2021 02:24:23 pm",
              "updated_at": "2021-04-16 11:36:41",
              "galleries": "",
              "video_node": "",
              "previous_url_id": "1947"
            }
          ],
          "other_information": {
            "total_no_of_records": 5,
            "display_records": 2,
            "cache_time": "05/05/2021 02:24:23 pm"
          }
        }
      }
   return(
       <> 
        <Head>
        <title>Latest Search: Latest Search Content</title>
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
                    <span> <img src={backArrowImg} alt="back1" /></span>
                    <a href="www.facebook.com">Search</a>
                    <span> <img src={backArrowImg} alt="back2" /></span>
                    <a href="www.facebook.com">{router.query.searchInput}</a>
                </div>
            </div>

            {/* Search Main Section */}
            <section className="content_wrapper">
                <div className="container">
                    <div className="content_inner">
                         <div className="content_left">
                             <slot>

   {/* top heading */}
   <div className="author_head">
        <h2>{searchContentData.data.feed.length} Results for {router.query.searchInput}</h2>
        <div className="update_tab">
            <a href="www.facebook.com">Oldest</a>
            <a href="www.facebook.com" className="active">Newest</a>
        </div>
        </div>
        {/* end */}

        {/* CelebrityList */}
        <div>
        <ul className="author_list">
            {
                searchContentData.data.feed.map((data)=>{
                    return(
                        <li>
                        <div className="clearfix">
                        <figure>
                            <img src={data.feature_image_data.url} alt="list_img1"/>
                        </figure>
                        <div className="author_detail">
                            <span>{moment(data.updated_at).format("MMM DD, YYYY")}</span>
                                <p>{data.headline}</p>
                            </div>
                            </div>
                    </li> 
                    )
                })
            }

        </ul>
    </div>
    {/* end */}



                             </slot>
                          </div>
                         <div className="content_right">
                                <figure className="add_box">
                                <div id="div-gpt-ad-6326067-2">
                                <GPT
                                    adUnitPath="/1007232/HarperBazaar_HP_300x250_MTF"
                                    slotSize={[300, 250]}
                                />
                                </div>
                                </figure>
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