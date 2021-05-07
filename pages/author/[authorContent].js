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

export default function AuthorContent(){
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
      const authorContentData = {
        "data": {
          "feed": [
            {
              "id": 1,
              "title": "Bazaar India",
              "slug": "bazaar-india",
              "description": "default",
              "email": "tiwanasimrit@gmail.com",
              "published": "1",
              "apps_id": "1",
              "created_at": "2020-11-18T10:09:35.000000Z",
              "updated_at": "2020-11-18T10:22:53.000000Z",
              "deleted_at": null
            }
          ],
          "articaldata": {
            "data": {
              "feed": [
                {
                  "content_id": 1950,
                  "apps_id": "1",
                  "post_types_id": "2",
                  "content_type": "story",
                  "headline": "Bazaar Gets Candid With YouTube Sensation Preeti Nair",
                  "introtext": "&lt;p&gt;With videos that make you laugh-out-loud one minute, then think long and hard the next, Preeti Nair, aka Preetipls, is a veritable YouTube sensation. Here, she talks to Jeffrey Yan about her successful crowdfunding campaign for migrant workers, the importance of body positivity and when to share the mic.&lt;/p&gt;",
                  "fulltext": "&lt;p&gt;&amp;nbsp;Preeti Nair has perfected the art of satire for the Internet Age. Her take-no-prisoners videos and sassy raps paint an unvarnished picture of life in Singapore, with all its idiosyncrasies intact. Never one to shy away from calling out uncomfortable truths, Nair has attracted widespread resonance, but also occasional moments of controversy&amp;mdash;culminating in last year police‑issued conditional warning over her clap back to an advertisement that offensively featured brownface. This April, though, Nair made headlines for an entirely different reason. When the Covid-19 pandemic imploded in Singapore and ravaged the migrant worker community, Nair sprang into action. Together with activist collective Utopia, she started a crowdfunding campaign to benefit HealthServe and Transient Workers Count Too (TWC2), two organizations dedicated to aiding the migrant community. The campaign hit its goal of $1,00,000 (`73 lakh approx) in 12 hours and by the time it ended, raised almost $3,46,000 ( Rs. 2.5 crores approx). The funds went into the procurement of essentials such as face masks, hand sanitizers, and care kits; topping-up mobile phone prepaid cards so workers can stay in touch with family members and caseworkers, and ensuring that the clinics for migrant workers run by HealthServe remain open to address whatever health concerns they may have. Here, Nair speaks to us on a range of issues.&lt;/p&gt;&lt;p&gt;&lt;span style='text-decoration: underline;'&gt;&lt;strong&gt;On Her Work With The Migrant Worker Community&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&amp;ldquo;It came quite clearly to me. The pandemic was a new situation for all of us and we were just trying to figure out how to navigate it. When we received updates specific to the migrant workers, a lot of the information was pretty generic: &amp;lsquo;Migrant workers will still be paid&amp;rsquo; or &amp;lsquo;they will be using their paid leave days&amp;rsquo;. My group of friends and I started asking ourselves, &amp;lsquo;Won&amp;rsquo;t paid leave days run out?&amp;rsquo; We didn&amp;rsquo;t know how long the circuit-breaker would go on for. Who&amp;rsquo;s going to make sure that they have money to send home, that they&amp;rsquo;re taken care of, that their families are taken care of? Where are they going to get groceries and resources when they&amp;rsquo;re under lockdown in the dorms? Though we didn&amp;rsquo;t have the answers, it was important to raise these questions on a public platform. It got other Singaporeans who are navigating this pandemic to start thinking about the people who are extra vulnerable. As much as you hear things like &amp;lsquo;cases in the community&amp;rsquo; versus &amp;lsquo;cases in dormitories&amp;rsquo;, the migrant workers are a part of our community&amp;mdash;they built all these places we go to every day. It just came from having a conscience. It&amp;rsquo;s not like I went the extra mile to do anything special. Having a platform, I felt that if there is something here that can actually help someone, I&amp;rsquo;m going to do it. I&amp;rsquo;m not here just to make funny videos for people to laugh at and then forget about. I would love to carry on a conversation, actually, help people, or help enable some form of critical thinking.&amp;rdquo;&lt;/p&gt;&lt;p&gt;&lt;img title='harpers-bazaar-september-2020-21_112420082307.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/harpers-bazaar-september-2020-21_112420082307.png' alt='harpers-bazaar-september-2020-21_112420082307.png' width='430'  /&gt;&lt;/p&gt;&lt;p&gt;&lt;span style='text-decoration: underline;'&gt;&lt;strong&gt;On When To Speak Up And When To Share The Mic&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&amp;ldquo;Sometimes, I think we just need to know when not to take up space&amp;mdash;like if the conversation is not about us, if you can&amp;rsquo;t add any value to it or even take some value from it. I definitely see people saying that it&amp;rsquo;s better [to post] than not post at all, but I personally stand by the belief that if there is no value to add, then don&amp;rsquo;t take up space. You don&amp;rsquo;t have to do it for the sake of doing it. When we only see and hear from people who are doing it just because there&amp;rsquo;s a hashtag, it shows that they just care about performative representation&amp;mdash;they&amp;rsquo;re not actually about dismantling these systems of power, privilege, and oppression. People need to realise that their followers and the rest of us out there, we&amp;rsquo;re not dumb. Like in my recent &amp;lsquo;Pink Dot&amp;rsquo; video, I talked about how I wasn't going to talk in the video. I&amp;rsquo;d let my intern, Wee San, talk instead because he&amp;rsquo;s a member of the LGBTQ community. That&amp;rsquo;s what I mean about not taking up space. Even though it was a Preetipls video, I didn&amp;rsquo;t want it to be like, &amp;lsquo;Hey, I&amp;rsquo;m an ally and this is how you should be an ally&amp;rsquo;.&amp;rdquo;&lt;/p&gt;&lt;p&gt;&lt;span style='text-decoration: underline;'&gt;&lt;strong&gt;On Body Positivity&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&amp;ldquo;For every body-shaming comment I get, I also get so many others telling me, &amp;lsquo;Thank you for being so confident in the skin you&amp;rsquo;re in because I struggle with my weight and how I look. You living your best life and just being you gives me hope.&amp;rsquo; I have friends who are slightly older than me saying they wish they had someone like Preetipls when they were growing up. And that&amp;rsquo;s crazy because I wish there was a Preetipls when I was growing up&amp;mdash;a local, brown, plus-size woman I could look up to and be like, okay, I can say these things I want to say, I can make these ridiculous jokes in my head; it&amp;rsquo;s fine for me to just be me. The body shamers are literally just hiding behind a keyboard to condescend. They&amp;rsquo;re not looking to engage in proper discourse. They&amp;rsquo;re trolls who just want to say, &amp;lsquo;You&amp;rsquo;re fat, bye&amp;rsquo;. Somebody who actually cares about the issues I raise would be like, &amp;lsquo;Let&amp;rsquo;s talk about this. I don&amp;rsquo;t agree with you, this is my stand, perhaps you can think about this angle&amp;rsquo;. When it comes from a place with obviously-good intentions, I&amp;rsquo;m all for it.&amp;rdquo;&lt;/p&gt;",
                  "amp_fulltext": "&lt;p&gt;&amp;nbsp;Preeti Nair has perfected the art of satire for the Internet Age. Her take-no-prisoners videos and sassy raps paint an unvarnished picture of life in Singapore, with all its idiosyncrasies intact. Never one to shy away from calling out uncomfortable truths, Nair has attracted widespread resonance, but also occasional moments of controversy&mdash;culminating in last year police‑issued conditional warning over her clap back to an advertisement that offensively featured brownface. This April, though, Nair made headlines for an entirely different reason. When the Covid-19 pandemic imploded in Singapore and ravaged the migrant worker community, Nair sprang into action. Together with activist collective Utopia, she started a crowdfunding campaign to benefit HealthServe and Transient Workers Count Too (TWC2), two organizations dedicated to aiding the migrant community. The campaign hit its goal of $1,00,000 (`73 lakh approx) in 12 hours and by the time it ended, raised almost $3,46,000 ( Rs. 2.5 crores approx). The funds went into the procurement of essentials such as face masks, hand sanitizers, and care kits; topping-up mobile phone prepaid cards so workers can stay in touch with family members and caseworkers, and ensuring that the clinics for migrant workers run by HealthServe remain open to address whatever health concerns they may have. Here, Nair speaks to us on a range of issues.&lt;/p&gt;&lt;p&gt;&lt;span&gt;&lt;strong&gt;On Her Work With The Migrant Worker Community&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&ldquo;It came quite clearly to me. The pandemic was a new situation for all of us and we were just trying to figure out how to navigate it. When we received updates specific to the migrant workers, a lot of the information was pretty generic: &lsquo;Migrant workers will still be paid&rsquo; or &lsquo;they will be using their paid leave days&rsquo;. My group of friends and I started asking ourselves, &lsquo;Won&rsquo;t paid leave days run out?&rsquo; We didn&rsquo;t know how long the circuit-breaker would go on for. Who&rsquo;s going to make sure that they have money to send home, that they&rsquo;re taken care of, that their families are taken care of? Where are they going to get groceries and resources when they&rsquo;re under lockdown in the dorms? Though we didn&rsquo;t have the answers, it was important to raise these questions on a public platform. It got other Singaporeans who are navigating this pandemic to start thinking about the people who are extra vulnerable. As much as you hear things like &lsquo;cases in the community&rsquo; versus &lsquo;cases in dormitories&rsquo;, the migrant workers are a part of our community&mdash;they built all these places we go to every day. It just came from having a conscience. It&rsquo;s not like I went the extra mile to do anything special. Having a platform, I felt that if there is something here that can actually help someone, I&rsquo;m going to do it. I&rsquo;m not here just to make funny videos for people to laugh at and then forget about. I would love to carry on a conversation, actually, help people, or help enable some form of critical thinking.&rdquo;&lt;/p&gt;&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/harpers-bazaar-september-2020-21_112420082307.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;&lt;p&gt;&lt;span&gt;&lt;strong&gt;On When To Speak Up And When To Share The Mic&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&ldquo;Sometimes, I think we just need to know when not to take up space&mdash;like if the conversation is not about us, if you can&rsquo;t add any value to it or even take some value from it. I definitely see people saying that it&rsquo;s better [to post] than not post at all, but I personally stand by the belief that if there is no value to add, then don&rsquo;t take up space. You don&rsquo;t have to do it for the sake of doing it. When we only see and hear from people who are doing it just because there&rsquo;s a hashtag, it shows that they just care about performative representation&mdash;they&rsquo;re not actually about dismantling these systems of power, privilege, and oppression. People need to realise that their followers and the rest of us out there, we&rsquo;re not dumb. Like in my recent &lsquo;Pink Dot&rsquo; video, I talked about how I wasn't going to talk in the video. I&rsquo;d let my intern, Wee San, talk instead because he&rsquo;s a member of the LGBTQ community. That&rsquo;s what I mean about not taking up space. Even though it was a Preetipls video, I didn&rsquo;t want it to be like, &lsquo;Hey, I&rsquo;m an ally and this is how you should be an ally&rsquo;.&rdquo;&lt;/p&gt;&lt;p&gt;&lt;span&gt;&lt;strong&gt;On Body Positivity&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&ldquo;For every body-shaming comment I get, I also get so many others telling me, &lsquo;Thank you for being so confident in the skin you&rsquo;re in because I struggle with my weight and how I look. You living your best life and just being you gives me hope.&rsquo; I have friends who are slightly older than me saying they wish they had someone like Preetipls when they were growing up. And that&rsquo;s crazy because I wish there was a Preetipls when I was growing up&mdash;a local, brown, plus-size woman I could look up to and be like, okay, I can say these things I want to say, I can make these ridiculous jokes in my head; it&rsquo;s fine for me to just be me. The body shamers are literally just hiding behind a keyboard to condescend. They&rsquo;re not looking to engage in proper discourse. They&rsquo;re trolls who just want to say, &lsquo;You&rsquo;re fat, bye&rsquo;. Somebody who actually cares about the issues I raise would be like, &lsquo;Let&rsquo;s talk about this. I don&rsquo;t agree with you, this is my stand, perhaps you can think about this angle&rsquo;. When it comes from a place with obviously-good intentions, I&rsquo;m all for it.&rdquo;&lt;/p&gt;",
                  "category_trail": [
                    {
                      "id": 5,
                      "title": "Culture",
                      "slug": "culture",
                      "parent": "0"
                    }
                  ],
                  "primary_section_id": 5,
                  "primary_section_name": "Culture",
                  "primary_section_slug": "culture",
                  "primary_id": "5",
                  "primary_id_name": "Culture",
                  "primary_id_slug": "culture",
                  "url": "/culture/story/preeti-real-1950",
                  "full_url": "https://alpha-harperbazar.intoday.in/culture/story/preeti-real-1950",
                  "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/culture/story/preeti-real-1950",
                  "slug": "preeti-real",
                  "excerpt": "&lt;p&gt;With videos that make you laugh-out-loud one minute, then think long and hard the next, Preeti Nair, aka Preetipls, is a veritable YouTube sensation. Here, she talks to Jeffrey Yan about her successful crowdfunding campaign for migrant workers, the importance of body positivity and when to share the mic.&lt;/p&gt;",
                  "publish_up": "2020-11-25 15:00:59",
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
                  "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image0002_251120034822_1156x675.png",
                  "feature_image_data": {
                    "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image0002_251120034822_1156x675.png",
                    "title": "image0002_251120034822_1156x675",
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
                      "section_id": 5,
                      "section_name": "Culture",
                      "category_id": "",
                      "category_name": ""
                    }
                  ],
                  "created_at": "2020-11-24T14:55:18.000000Z",
                  "created_by_id": "13",
                  "created_by_name": "prachi goyal",
                  "cache_time": "07/05/2021 09:12:40 am",
                  "updated_at": "2020-11-25 15:51:08",
                  "galleries": "",
                  "video_node": "",
                  "previous_url_id": "1948"
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
                  "cache_time": "07/05/2021 09:12:41 am",
                  "updated_at": "2020-11-27 16:07:18",
                  "galleries": "",
                  "video_node": "",
                  "previous_url_id": "1945"
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
                  "cache_time": "07/05/2021 09:12:41 am",
                  "updated_at": "2021-04-13 18:13:32",
                  "galleries": "",
                  "video_node": "",
                  "previous_url_id": "1947"
                },
                {
                  "content_id": 1937,
                  "apps_id": "1",
                  "post_types_id": "2",
                  "content_type": "story",
                  "headline": "The Indian Photographer Who Inspired Helmut Lang's Newest Campaign",
                  "introtext": "&lt;p&gt;How a series of photographs from the 1970s by photographer Sunil Gupta became the inspiration for the American brand's fall 2020 campaign.&lt;/p&gt;",
                  "fulltext": "&lt;p&gt;&lt;span style='font-family: verdana, geneva, sans-serif;'&gt;A Canadian citizen born in Delhi, photographer Sunil Gupta first moved to New York in 1976. He was supposed to do his MBA but, encouraged by his tutors, ended up pursuing a photography course at The New School. As a young, excited 23-year-old student looking to become a part of the city&amp;rsquo;s vibrant queer community, Gupta captured a series of black and white images of gay men walking the streets of New York. The results would become the basis for his photo book Christopher Street, 1976, which he released in 2018. Thomas Carson, creative director at Helmut Lang, saw the series last year and invited Gupta to recreate those images for the American brand&amp;rsquo;s newest campaign. &amp;ldquo;I initially thought it was a joke,&amp;rdquo; said the documentary photographer, over the phone from his home in London, about the brand&amp;rsquo;s first Instagram messages to him. It was only when they lodged an official query with his representing gallery that Gupta realised it was true. The 67-year-old has had a prolific career as an activist, teacher, photographer, and curator, but his work so far has largely focused on documenting marginalised gay communities. His images have been exhibited at galleries around the world, from Vadehra Art Gallery, Delhi to the Centre Pompidou, Paris. He spoke to us about the journey back into his archives. &lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style='font-family: verdana, geneva, sans-serif;'&gt;&lt;strong&gt;Harper&amp;rsquo;s Bazaar:&lt;/strong&gt; How did it feel to revisit your old photos?&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style='font-family: verdana, geneva, sans-serif;'&gt;&lt;strong&gt; Sunil Gupta:&lt;/strong&gt; It was very nostalgic because the world has changed so much since then. Luckily Greenwich Village still has some of those lovely old brownstone homes so we could shoot in the same location.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style='font-family: verdana, geneva, sans-serif;'&gt;&lt;strong&gt; HB:&lt;/strong&gt; How has the queer scene evolved since you first started documenting it? &lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style='font-family: verdana, geneva, sans-serif;'&gt;&lt;strong&gt;SG:&lt;/strong&gt; I had photographed the first series because I was amazed to see so many gay men in public. I had just moved to New York from Canada and this was right after the Stonewall uprising (1969) so everyone was out and about. I think the need for these kind of public spaces has gone, or at least in big cities, where everything has become too expensive. Everyone has now retired to the Internet where they chat or swipe to meet others. &lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style='font-family: verdana, geneva, sans-serif;'&gt;&lt;strong&gt;HB:&lt;/strong&gt; What was it like to work on a fashion campaign for the first time?&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style='font-family: verdana, geneva, sans-serif;'&gt;&lt;strong&gt; SG:&lt;/strong&gt; My initial thought was that it would be like The Devil Wears Prada. But in fact, everyone on the team was very sweet and we got on really well. &lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style='font-family: verdana, geneva, sans-serif;'&gt;&lt;strong&gt;HB:&lt;/strong&gt; Could you share some of your inspirations? &lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style='font-family: verdana, geneva, sans-serif;'&gt;&lt;strong&gt;SG:&lt;/strong&gt; I grew up in Sixties&amp;rsquo; India so I love old songs and cinema. I like film for its narrative abilities, the melodrama, and colour. Indian movies have an especially unique power to draw emotion from you. Some cinematographers and film makers I admire include Wim Wenders, Roman Polanski, and Vilmos Zsigmond who shot the film Deliverance (1972)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;&amp;nbsp;Selects from the original series, Christopher Street, 1976&lt;/strong&gt;&lt;/p&gt;&lt;p&gt;&lt;img title='image--0002_112020011905.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0002_112020011905.png' alt='image--0002_112020011905.png' width='450'  /&gt;&lt;/p&gt;&lt;p&gt;&lt;img title='image--0012_112020012000.png' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0012_112020012000.png' alt='image--0012_112020012000.png' width='449'  /&gt;&lt;/p&gt;&lt;p&gt;&lt;img title='image--002_112020012021.jpg' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--002_112020012021.jpg' alt='image--002_112020012021.jpg' /&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Images from the Helmut Lang fall 2020 campaign.&lt;/strong&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;img title='image--004_112020012213.jpg' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--004_112020012213.jpg' alt='image--004_112020012213.jpg' /&gt;&lt;/p&gt;&lt;p&gt;&lt;img title='image--003_112020012118.jpg' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--003_112020012118.jpg' alt='image--003_112020012118.jpg' width='386'  /&gt;&lt;/p&gt;",
                  "amp_fulltext": "&lt;p&gt;&lt;span&gt;A Canadian citizen born in Delhi, photographer Sunil Gupta first moved to New York in 1976. He was supposed to do his MBA but, encouraged by his tutors, ended up pursuing a photography course at The New School. As a young, excited 23-year-old student looking to become a part of the city&rsquo;s vibrant queer community, Gupta captured a series of black and white images of gay men walking the streets of New York. The results would become the basis for his photo book Christopher Street, 1976, which he released in 2018. Thomas Carson, creative director at Helmut Lang, saw the series last year and invited Gupta to recreate those images for the American brand&rsquo;s newest campaign. &ldquo;I initially thought it was a joke,&rdquo; said the documentary photographer, over the phone from his home in London, about the brand&rsquo;s first Instagram messages to him. It was only when they lodged an official query with his representing gallery that Gupta realised it was true. The 67-year-old has had a prolific career as an activist, teacher, photographer, and curator, but his work so far has largely focused on documenting marginalised gay communities. His images have been exhibited at galleries around the world, from Vadehra Art Gallery, Delhi to the Centre Pompidou, Paris. He spoke to us about the journey back into his archives. &lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span&gt;&lt;strong&gt;Harper&rsquo;s Bazaar:&lt;/strong&gt; How did it feel to revisit your old photos?&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span&gt;&lt;strong&gt; Sunil Gupta:&lt;/strong&gt; It was very nostalgic because the world has changed so much since then. Luckily Greenwich Village still has some of those lovely old brownstone homes so we could shoot in the same location.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span&gt;&lt;strong&gt; HB:&lt;/strong&gt; How has the queer scene evolved since you first started documenting it? &lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span&gt;&lt;strong&gt;SG:&lt;/strong&gt; I had photographed the first series because I was amazed to see so many gay men in public. I had just moved to New York from Canada and this was right after the Stonewall uprising (1969) so everyone was out and about. I think the need for these kind of public spaces has gone, or at least in big cities, where everything has become too expensive. Everyone has now retired to the Internet where they chat or swipe to meet others. &lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span&gt;&lt;strong&gt;HB:&lt;/strong&gt; What was it like to work on a fashion campaign for the first time?&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span&gt;&lt;strong&gt; SG:&lt;/strong&gt; My initial thought was that it would be like The Devil Wears Prada. But in fact, everyone on the team was very sweet and we got on really well. &lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span&gt;&lt;strong&gt;HB:&lt;/strong&gt; Could you share some of your inspirations? &lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span&gt;&lt;strong&gt;SG:&lt;/strong&gt; I grew up in Sixties&rsquo; India so I love old songs and cinema. I like film for its narrative abilities, the melodrama, and colour. Indian movies have an especially unique power to draw emotion from you. Some cinematographers and film makers I admire include Wim Wenders, Roman Polanski, and Vilmos Zsigmond who shot the film Deliverance (1972)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;&amp;nbsp;Selects from the original series, Christopher Street, 1976&lt;/strong&gt;&lt;/p&gt;&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0002_112020011905.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0012_112020012000.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;&lt;p&gt;&lt;amp-img title=&quot;image--002_112020012021.jpg&quot; src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--002_112020012021.jpg&quot; alt=&quot;image--002_112020012021.jpg&quot; width=&quot;340&quot; height=&quot;522&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Images from the Helmut Lang fall 2020 campaign.&lt;/strong&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;amp-img title=&quot;image--004_112020012213.jpg&quot; src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--004_112020012213.jpg&quot; alt=&quot;image--004_112020012213.jpg&quot; width=&quot;400&quot; height=&quot;530&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;&lt;p&gt;&lt;amp-img title=&quot;image--003_112020012118.jpg&quot; src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--003_112020012118.jpg&quot; alt=&quot;image--003_112020012118.jpg&quot; width=&quot;601&quot; height=&quot;795&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;",
                  "category_trail": [
                    {
                      "id": 5,
                      "title": "Culture",
                      "slug": "culture",
                      "parent": "0"
                    }
                  ],
                  "primary_section_id": 5,
                  "primary_section_name": "Culture",
                  "primary_section_slug": "culture",
                  "primary_id": "5",
                  "primary_id_name": "Culture",
                  "primary_id_slug": "culture",
                  "url": "/culture/story/fresh-perspective-1937",
                  "full_url": "https://alpha-harperbazar.intoday.in/culture/story/fresh-perspective-1937",
                  "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/culture/story/fresh-perspective-1937",
                  "slug": "fresh-perspective",
                  "excerpt": "&lt;p&gt;How a series of photographs from the 1970s by photographer Sunil Gupta became the inspiration for the American brand's fall 2020 campaign.&lt;/p&gt;",
                  "publish_up": "2020-11-23 15:00:33",
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
                  "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/832_231120032215_692x459.png",
                  "feature_image_data": {
                    "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/832_231120032215_692x459.png",
                    "title": "832_231120032215_692x459",
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
                      "section_id": 5,
                      "section_name": "Culture",
                      "category_id": "",
                      "category_name": ""
                    }
                  ],
                  "created_at": "2020-11-20T07:47:14.000000Z",
                  "created_by_id": "13",
                  "created_by_name": "prachi goyal",
                  "cache_time": "07/05/2021 09:12:42 am",
                  "updated_at": "2020-11-23 20:13:05",
                  "galleries": "",
                  "video_node": "",
                  "previous_url_id": "1936"
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
                  "cache_time": "07/05/2021 09:12:42 am",
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
                  "cache_time": "07/05/2021 09:12:43 am",
                  "updated_at": "2020-11-26 12:44:37",
                  "galleries": "",
                  "video_node": "",
                  "previous_url_id": "1934"
                },
                {
                  "content_id": 1933,
                  "apps_id": "1",
                  "post_types_id": "2",
                  "content_type": "story",
                  "headline": "The Genius Dalit Poet Who Hid In Plain Sight",
                  "introtext": "&lt;p&gt;Dalit History Month commemorates the contributions of the community&amp;rsquo;s icons to South Asian history. Here, author Yashica Dutt pays homage to one such lyricist.&lt;/p&gt;&lt;p&gt;&lt;/p&gt;",
                  "fulltext": "&lt;p&gt;For a generation of Indians who grew up to full-bodied tunes on the radio diffusing the daily dusk with rhythmic stillness, &lt;em&gt;Raat Ke Hamsafar&lt;/em&gt; might hold a special space. A deeply evocative song from the 1967 classic An Evening in Paris, it features Shammi Kapoor serenading Sharmila Tagore, who, in an ikat silk sari and a backless knotted blouse, epitomises Parisian chic. With languid camera pans over a dimly-lit Paris and the instantly recognisable view of the Moulin Rouge cabaret theatre, the song painted a stunningly vivid&amp;mdash; if somewhat unattainable&amp;mdash;the reality of the city&amp;rsquo;s nightlife for many Indians, especially Dalits, cementing its position as the imaginary international escape of choice of millions for decades. For my maternal grandmother, that song was more than just an escape. It was a window to the alternate &amp;lsquo;upper&amp;rsquo;-caste universe that was almost impenetrable to Dalits at the time.&lt;/p&gt;&lt;p&gt;&lt;img title='hqdefault_112020061756.jpg' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/hqdefault_112020061756.jpg' alt='hqdefault_112020061756.jpg' /&gt;&lt;/p&gt;&lt;p&gt;Even though she was possibly still engaged in the manual scavenging work that&amp;rsquo;s typical to our caste as my grandfather doggedly attempted to clear the IAS exam when the song first came out, it left an imprint. The extremely light-skinned and green-eyed Shammi Kapoor, who was so unquestionably &amp;lsquo;upper&amp;rsquo;-caste that he was often &amp;lsquo;complimented&amp;rsquo; as a foreigner, and Sharmila Tagore, with her impeccable Brahmin literary pedigree as Rabindranath Tagore&amp;rsquo;s great-granddaughter, gave the song its mighty aspirational heft. It also turned &lt;em&gt;Raat Ke Hamsafar&lt;/em&gt; (and the movie) into an &amp;lsquo;upper&amp;rsquo;-caste playbook that many Dalits like my mum&amp;rsquo;s parents hoped to emulate to possibly avoid the direct discrimination of their &amp;lsquo;lower&amp;rsquo; caste. My mum recalled how my grandmother got several blouses stitched in the same style as Tagore&amp;rsquo;s in the song and would often do her hair to resemble the actor&amp;rsquo;s, too. It&amp;rsquo;s not just aspiration, however, that unmistakably ties this song to Dalit culture. It&amp;rsquo;s the man behind its hauntingly&amp;nbsp;evocative lyrics &lt;em&gt;&amp;ldquo;Raat ne pyaar ke jam bhar kar diye//Aankhon aankhon se jo maine tumne piye&amp;rdquo;&lt;/em&gt; (The night handed us chalices brimming with love//You and I drank it with our eyes).&lt;/p&gt;&lt;p&gt;&lt;img title='images_112020061831.jpeg' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/images_112020061831.jpeg' alt='images_112020061831.jpeg' width='524'  /&gt;&lt;/p&gt;&lt;p&gt;Shailendra, the genius Dalit lyricist, was also responsible for the biggest, most enduring Bollywood hits of the &amp;rsquo;50s and&amp;rsquo;60s. Born into a cobbler-caste family, he struggled with extreme disadvantages and moved to Bombay to work for central Railways. Eventually collaborating with Raj Kapoor for his debut, he went on to write hundreds of genre-defining songs, while hiding, as much as he possibly could, the fact that he was Dalit. If passing as an &amp;lsquo;upper'-caste person is a challenge for Dalits in 2020 (my own experience notwithstanding), it seems wildly unrealistic that Shailendra not only did that in the &amp;rsquo;50s but also wrote songs that undeniably established a new class consciousness in an emerging India. And given the systemic oppression of Dalits in Bollywood, that&amp;rsquo;s hugely responsible for imposing a limited &amp;lsquo;upper&amp;rsquo;-caste worldview on an entire country and conflating it with the larger culture, it&amp;rsquo;s hard not to wonder what could be if one of the most iconic songwriters of a generation wasn&amp;rsquo;t forced to hide his caste identity. Would he have not dropped his last name? Or written songs that explicitly targeted casteism? Perhaps it would have inspired a generation of Dalit writers and lyricists? Or maybe created an inclusive narrative where Dalit culture, our ways, aspirations, and hopes had their rightful seat on the table? Thanks to casteism that continues to affect millions of Dalits today, there is no way to find out.&lt;/p&gt;",
                  "amp_fulltext": "&lt;p&gt;For a generation of Indians who grew up to full-bodied tunes on the radio diffusing the daily dusk with rhythmic stillness, &lt;em&gt;Raat Ke Hamsafar&lt;/em&gt; might hold a special space. A deeply evocative song from the 1967 classic An Evening in Paris, it features Shammi Kapoor serenading Sharmila Tagore, who, in an ikat silk sari and a backless knotted blouse, epitomises Parisian chic. With languid camera pans over a dimly-lit Paris and the instantly recognisable view of the Moulin Rouge cabaret theatre, the song painted a stunningly vivid&mdash; if somewhat unattainable&mdash;the reality of the city&rsquo;s nightlife for many Indians, especially Dalits, cementing its position as the imaginary international escape of choice of millions for decades. For my maternal grandmother, that song was more than just an escape. It was a window to the alternate &lsquo;upper&rsquo;-caste universe that was almost impenetrable to Dalits at the time.&lt;/p&gt;&lt;p&gt;&lt;amp-img title=&quot;hqdefault_112020061756.jpg&quot; src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/hqdefault_112020061756.jpg&quot; alt=&quot;hqdefault_112020061756.jpg&quot; width=&quot;480&quot; height=&quot;360&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;&lt;p&gt;Even though she was possibly still engaged in the manual scavenging work that&rsquo;s typical to our caste as my grandfather doggedly attempted to clear the IAS exam when the song first came out, it left an imprint. The extremely light-skinned and green-eyed Shammi Kapoor, who was so unquestionably &lsquo;upper&rsquo;-caste that he was often &lsquo;complimented&rsquo; as a foreigner, and Sharmila Tagore, with her impeccable Brahmin literary pedigree as Rabindranath Tagore&rsquo;s great-granddaughter, gave the song its mighty aspirational heft. It also turned &lt;em&gt;Raat Ke Hamsafar&lt;/em&gt; (and the movie) into an &lsquo;upper&rsquo;-caste playbook that many Dalits like my mum&rsquo;s parents hoped to emulate to possibly avoid the direct discrimination of their &lsquo;lower&rsquo; caste. My mum recalled how my grandmother got several blouses stitched in the same style as Tagore&rsquo;s in the song and would often do her hair to resemble the actor&rsquo;s, too. It&rsquo;s not just aspiration, however, that unmistakably ties this song to Dalit culture. It&rsquo;s the man behind its hauntingly&amp;nbsp;evocative lyrics &lt;em&gt;&ldquo;Raat ne pyaar ke jam bhar kar diye//Aankhon aankhon se jo maine tumne piye&rdquo;&lt;/em&gt; (The night handed us chalices brimming with love//You and I drank it with our eyes).&lt;/p&gt;&lt;p&gt;&lt;amp-img title=&quot;images_112020061831.jpeg&quot; src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/images_112020061831.jpeg&quot; alt=&quot;images_112020061831.jpeg&quot; width=&quot;270&quot; height=&quot;186&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;&lt;p&gt;Shailendra, the genius Dalit lyricist, was also responsible for the biggest, most enduring Bollywood hits of the &rsquo;50s and&rsquo;60s. Born into a cobbler-caste family, he struggled with extreme disadvantages and moved to Bombay to work for central Railways. Eventually collaborating with Raj Kapoor for his debut, he went on to write hundreds of genre-defining songs, while hiding, as much as he possibly could, the fact that he was Dalit. If passing as an &lsquo;upper'-caste person is a challenge for Dalits in 2020 (my own experience notwithstanding), it seems wildly unrealistic that Shailendra not only did that in the &rsquo;50s but also wrote songs that undeniably established a new class consciousness in an emerging India. And given the systemic oppression of Dalits in Bollywood, that&rsquo;s hugely responsible for imposing a limited &lsquo;upper&rsquo;-caste worldview on an entire country and conflating it with the larger culture, it&rsquo;s hard not to wonder what could be if one of the most iconic songwriters of a generation wasn&rsquo;t forced to hide his caste identity. Would he have not dropped his last name? Or written songs that explicitly targeted casteism? Perhaps it would have inspired a generation of Dalit writers and lyricists? Or maybe created an inclusive narrative where Dalit culture, our ways, aspirations, and hopes had their rightful seat on the table? Thanks to casteism that continues to affect millions of Dalits today, there is no way to find out.&lt;/p&gt;",
                  "category_trail": [
                    {
                      "id": 5,
                      "title": "Culture",
                      "slug": "culture",
                      "parent": "0"
                    }
                  ],
                  "primary_section_id": 5,
                  "primary_section_name": "Culture",
                  "primary_section_slug": "culture",
                  "primary_id": "5",
                  "primary_id_name": "Culture",
                  "primary_id_slug": "culture",
                  "url": "/culture/story/the-genius-dalit-poet-who-hid-in-plain-sight-1933",
                  "full_url": "https://alpha-harperbazar.intoday.in/culture/story/the-genius-dalit-poet-who-hid-in-plain-sight-1933",
                  "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/culture/story/the-genius-dalit-poet-who-hid-in-plain-sight-1933",
                  "slug": "the-genius-dalit-poet-who-hid-in-plain-sight",
                  "excerpt": "&lt;p&gt;Dalit History Month commemorates the contributions of the community&amp;rsquo;s icons to South Asian history. Here, author Yashica Dutt pays homage to one such lyricist.&lt;/p&gt;&lt;p&gt;&lt;/p&gt;",
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
                  "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/jaikishanshammikapoor_201120062156_653x479.jpeg",
                  "feature_image_data": {
                    "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/jaikishanshammikapoor_201120062156_653x479.jpeg",
                    "title": "jaikishanshammikapoor_201120062156_653x479",
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
                      "section_id": 5,
                      "section_name": "Culture",
                      "category_id": "",
                      "category_name": ""
                    }
                  ],
                  "created_at": "2020-11-19T14:50:28.000000Z",
                  "created_by_id": "13",
                  "created_by_name": "prachi goyal",
                  "cache_time": "07/05/2021 09:12:43 am",
                  "updated_at": "2020-11-23 20:07:44",
                  "galleries": "",
                  "video_node": "",
                  "previous_url_id": "1932"
                },
                {
                  "content_id": 954,
                  "apps_id": "1",
                  "post_types_id": "4",
                  "content_type": "photo",
                  "headline": "10 Indian Designers Show Us Their SS20 Collections",
                  "introtext": "Welcome the new season with a sublime mix of textured fabrics, exaggerated details, and luxurious prints from India’s best designers",
                  "fulltext": "",
                  "amp_fulltext": "",
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
                  "url": "/fashion/photo/s-p-r-i-n-g--f-o-r-w-a-r-d-954",
                  "full_url": "https://alpha-harperbazar.intoday.in/fashion/photo/s-p-r-i-n-g--f-o-r-w-a-r-d-954",
                  "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/fashion/photo/s-p-r-i-n-g--f-o-r-w-a-r-d-954",
                  "slug": "s-p-r-i-n-g--f-o-r-w-a-r-d",
                  "excerpt": "Welcome the new season with a sublime mix of textured fabrics, exaggerated details, and luxurious prints from India’s best designers",
                  "publish_up": "2020-11-20 14:00:44",
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
                  "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/1041131_201120030619_1156x675.jpg",
                  "feature_image_data": {
                    "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/1041131_201120030619_1156x675.jpg",
                    "title": "1041131_201120030619_1156x675",
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
                  "created_at": "2020-11-19T16:03:36.000000Z",
                  "created_by_id": "13",
                  "created_by_name": "prachi goyal",
                  "cache_time": "07/05/2021 09:12:43 am",
                  "updated_at": "2020-11-20 15:13:29",
                  "galleries": [
                    {
                      "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_009_png_111920093345.image_009_png",
                      "extra": {
                        "text": "<p>Dress, Rs.26,000, Atsu. Shoes, stylist&rsquo;s own.</p>\r\n<p>&nbsp;</p>\r\n<p>Models: Elizabeth Mech, Samruddhi Shirodkar at Anima Creative Management, and Scarlet Raphael Achangadan<br />at Feat. Artists.</p>\r\n<p>Hair: Mike Desir at Anima Creative Management.</p>\r\n<p>Makeup: Mitesh Rajani at Feat. Artists.</p>\r\n<p>Fashion assistant: Asu Longkumer.</p>\r\n<p>Fashion intern: Yashna Jain.</p>\r\n<p>Production: P. Productions.</p>",
                        "caption": "<p>Dress, Rs.26,000, Atsu. Shoes, stylist&rsquo;s own.</p>\r\n<p>&nbsp;</p>\r\n<p>Models: Elizabeth Mech, Samruddhi Shirodkar at Anima Creative Management, and Scarlet Raphael Achangadan<br />at Feat. Artists.</p>\r\n<p>Hair: Mike Desir at Anima Creative Management.</p>\r\n<p>Makeup: Mitesh Rajani at Feat. Artists.</p>\r\n<p>Fashion assistant: Asu Longkumer.</p>\r\n<p>Fashion intern: Yashna Jain.</p>\r\n<p>Production: P. Productions.</p>",
                        "alt_text": "",
                        "description": "<p>Dress, Rs.26,000, Atsu. Shoes, stylist&rsquo;s own.</p>\r\n<p>&nbsp;</p>\r\n<p>Models: Elizabeth Mech, Samruddhi Shirodkar at Anima Creative Management, and Scarlet Raphael Achangadan<br />at Feat. Artists.</p>\r\n<p>Hair: Mike Desir at Anima Creative Management.</p>\r\n<p>Makeup: Mitesh Rajani at Feat. Artists.</p>\r\n<p>Fashion assistant: Asu Longkumer.</p>\r\n<p>Fashion intern: Yashna Jain.</p>\r\n<p>Production: P. Productions.</p>"
                      }
                    },
                    {
                      "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_008_png_111920093344.image_008_png",
                      "extra": {
                        "text": "<p>Blazer Rs.24,500, and pants, Rs.10,500, Rajesh Pratap Singh.</p>",
                        "caption": "<p>Blazer Rs.24,500, and pants, Rs.10,500, Rajesh Pratap Singh.</p>",
                        "alt_text": "",
                        "description": "<p>Blazer Rs.24,500, and pants, Rs.10,500, Rajesh Pratap Singh.</p>"
                      }
                    },
                    {
                      "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_007_png_111920093343.image_007_png",
                      "extra": {
                        "text": "<p>Dress and blazer, Manish Arora.</p>",
                        "caption": "<p>Dress and blazer, Manish Arora.</p>",
                        "alt_text": "",
                        "description": "<p>Dress and blazer, Manish Arora.</p>"
                      }
                    },
                    {
                      "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_006_png_111920093342.image_006_png",
                      "extra": {
                        "text": "<p>Dress, Rs.32,000, and jacket, Rs.65,000, Ashdeen. Shoes, stylist&rsquo;s own.</p>",
                        "caption": "<p>Dress, Rs.32,000, and jacket, Rs.65,000, Ashdeen. Shoes, stylist&rsquo;s own.</p>",
                        "alt_text": "",
                        "description": "<p>Dress, Rs.32,000, and jacket, Rs.65,000, Ashdeen. Shoes, stylist&rsquo;s own.</p>"
                      }
                    },
                    {
                      "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_005_png_111920093341.image_005_png",
                      "extra": {
                        "text": "<p>Jacket, Rs.17,000 and pants, Rs.16,000, Kanika Goyal. Shoes, Isabel Marant.</p>",
                        "caption": "<p>Jacket, Rs.17,000 and pants, Rs.16,000, Kanika Goyal. Shoes, Isabel Marant.</p>",
                        "alt_text": "",
                        "description": "<p>Jacket, Rs.17,000 and pants, Rs.16,000, Kanika Goyal. Shoes, Isabel Marant.</p>"
                      }
                    },
                    {
                      "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_004_png_111920093340.image_004_png",
                      "extra": {
                        "text": "<p>Shirt, Rs.13,500, blazer, Rs.38,500, and pants, Rs.16,500, Dhruv Kapoor<br />.</p>",
                        "caption": "<p>Shirt, Rs.13,500, blazer, Rs.38,500, and pants, Rs.16,500, Dhruv Kapoor<br />.</p>",
                        "alt_text": "",
                        "description": "<p>Shirt, Rs.13,500, blazer, Rs.38,500, and pants, Rs.16,500, Dhruv Kapoor<br />.</p>"
                      }
                    },
                    {
                      "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_003_png_111920093339.image_003_png",
                      "extra": {
                        "text": "<p>Cape, Rs.67,200, Rimzim Dadu.</p>",
                        "caption": "<p>Cape, Rs.67,200, Rimzim Dadu.</p>",
                        "alt_text": "",
                        "description": "<p>Cape, Rs.67,200, Rimzim Dadu.</p>"
                      }
                    },
                    {
                      "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_000_png_111920093336.image_000_png",
                      "extra": {
                        "text": "<p>&nbsp;Blazer, Rs.48,650, Suket Dhir. Hat<br /><br /></p>",
                        "caption": "<p>&nbsp;Blazer, Rs.48,650, Suket Dhir. Hat<br /><br /></p>",
                        "alt_text": "",
                        "description": "<p>&nbsp;Blazer, Rs.48,650, Suket Dhir. Hat<br /><br /></p>"
                      }
                    },
                    {
                      "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_001_png_111920093337.image_001_png",
                      "extra": {
                        "text": "<p>Dress, Rahul Mishra. Shoes, Isabel Marant.</p>",
                        "caption": "<p>Dress, Rahul Mishra. Shoes, Isabel Marant.</p>",
                        "alt_text": "",
                        "description": "<p>Dress, Rahul Mishra. Shoes, Isabel Marant.</p>"
                      }
                    },
                    {
                      "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_002_png_111920093338.image_002_png",
                      "extra": {
                        "text": "<p>Jacket, Rs.31,000, and pants, Rs.14,000, Pankaj &amp; Nidhi. Shoes,Salvatore Ferragamo.</p>",
                        "caption": "<p>Jacket, Rs.31,000, and pants, Rs.14,000, Pankaj &amp; Nidhi. Shoes,Salvatore Ferragamo.</p>",
                        "alt_text": "",
                        "description": "<p>Jacket, Rs.31,000, and pants, Rs.14,000, Pankaj &amp; Nidhi. Shoes,Salvatore Ferragamo.</p>"
                      }
                    }
                  ],
                  "video_node": "",
                  "previous_url_id": "950"
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
                  "cache_time": "07/05/2021 09:12:43 am",
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
                  "cache_time": "07/05/2021 09:12:43 am",
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
                "total_no_of_records": 20,
                "display_records": 10,
                "cache_time": "07/05/2021 09:12:40 am"
              }
            }
          },
          "other_information": {
            "total_no_of_records": 1,
            "display_records": 1,
            "cache_time": "07/05/2021 09:12:43 am"
          }
        }
      }
   return(
       <> 
        <Head>
        <title>Author News: Author Details</title>
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
                    <a href="www.facebook.com">Author</a>
                    <span> <img src={backArrowImg} alt="back2" /></span>
                    <a href="www.facebook.com">{authorContentData.data.feed[0].title}</a>
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
        <h2>Author: {authorContentData.data.feed[0].title}</h2>
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
                authorContentData.data.articaldata.data.feed.map((data)=>{
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