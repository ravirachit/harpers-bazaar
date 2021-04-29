import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const jobs = {
    "data": {
      "feed": {
        "id": 1,
        "title": "Home",
        "slug": "home",
        "description": "&lt;p&gt;Home&lt;/p&gt;",
        "published": "1",
        "apps_id": "1",
        "created_at": "2020-10-15T23:46:10.000000Z",
        "updated_at": "2020-11-20T13:07:31.000000Z",
        "seo": {
          "meta_title": "Lifestyle News: Latest Lifestyle, Beauty, Fashion trends and Updates",
          "meta_desc": "Harpers Bazaar brings all the latest Lifestyle news, beauty tips, lifestyle trends, fashion news and Celebrity Style updates.",
          "meta_key": "Lifestyle news, Latest Lifestyle news, Celebrity Style updates, Lifestyle news online, Lifestyle news live, Lifestyle Tips, Beauty Tips, fashion News, Sex and Relationship, Travel news, Style Tips, Style Trends, Fashion Trends, Lifestyle Trends, Harpers B"
        },
        "templatedata": [
          {
            "id": 13,
            "content": "{\"multi_data_title\":\"Slider\",\"multi_data_widget_id\":\"3\",\"multi_data_widget_extra\":\"image_size=1349x776|total_record=1|widget_template=home_slider|hide_title=1\",\"multi_data_widget_template\":\"\"}",
            "content_data": {
              "title": "Slider",
              "multi_data_widget_id": "3",
              "multi_data_widget_extra": "image_size=1349x776&total_record=1&widget_template=home_slider&hide_title=1",
              "multi_data_widget_template": "",
              "multi_data_widget_extra_config": {
                "image_size": "1349x776",
                "total_record": "1",
                "widget_template": "home_slider",
                "hide_title": "1"
              },
              "widget_data": {
                "id": 3,
                "title": "Slider",
                "slug": "slider",
                "description": "Slider",
                "type": "custom_article",
                "content": "{\"related_content_type\":\"2\",\"category_id\":\"\",\"title_text\":\"24\",\"id_number\":\"\",\"to_class_data\":\"960\"}",
                "published": "1",
                "created_at": "2020-11-18T12:39:49.000000Z",
                "updated_at": "2021-03-15T12:36:48.000000Z",
                "deleted_at": null,
                "widget_data": {
                  "related_content_type_id": "2",
                  "related_content_type_name": "story",
                  "category_id": "",
                  "category_name": "",
                  "title_text": "24",
                  "id_number": "",
                  "id_list": "960",
                  "main_data": [
                    {
                      "content_id": 960,
                      "apps_id": "1",
                      "post_types_id": "4",
                      "content_type": "photo",
                      "headline": "Actor Jacqueline Fernandez on Finding Peace and Happiness",
                      "introtext": "Step inside Bazaar India's exclusive shoot with actor Jacqueline Fernandez shot and conceptualised under unique circumstance. The results give us hope for a better world..",
                      "fulltext": "&lt;p&gt;Our first-ever digital issue cover shoot was created under unique circumstances. Actor Jacqueline Fernandez styled herself and collaborated with those who are with her during this lockdown to create these images exclusively for Bazaar. The results give us hope for a better world.&lt;/p&gt;",
                      "amp_fulltext": "&lt;p&gt;Our first-ever digital issue cover shoot was created under unique circumstances. Actor Jacqueline Fernandez styled herself and collaborated with those who are with her during this lockdown to create these images exclusively for Bazaar. The results give us hope for a better world.&lt;/p&gt;",
                      "category_trail": [
                        {
                          "id": 2,
                          "title": "Celebrity",
                          "slug": "celebrity",
                          "parent": "0"
                        }
                      ],
                      "primary_section_id": 2,
                      "primary_section_name": "Celebrity",
                      "primary_section_slug": "celebrity",
                      "primary_id": "2",
                      "primary_id_name": "Celebrity",
                      "primary_id_slug": "celebrity",
                      "url": "/celebrity/photo/how-jacqueline-fernandez-finds-peace-and-happiness-in-nature-960",
                      "full_url": "https://alpha-harperbazar.intoday.in/celebrity/photo/how-jacqueline-fernandez-finds-peace-and-happiness-in-nature-960",
                      "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/celebrity/photo/how-jacqueline-fernandez-finds-peace-and-happiness-in-nature-960",
                      "slug": "how-jacqueline-fernandez-finds-peace-and-happiness-in-nature",
                      "excerpt": "Step inside Bazaar India's exclusive shoot with actor Jacqueline Fernandez shot and conceptualised under unique circumstance. The results give us hope for a better world..",
                      "publish_up": "2020-11-23 18:00:34",
                      "publish_down": null,
                      "metatitle": "Actor Jacqueline Fernandez Finds Peace and Happiness in Nature",
                      "metadesc": "Step inside Bazaar India's exclusive shoot with actor Jacqueline Fernandez, shot and conceptualised under unique circumstances",
                      "metakey": "",
                      "highlights": "",
                      "rating": "",
                      "review_title": "",
                      "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "review_pros": "",
                      "review_cons": "",
                      "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/951031_231120064135_1200x675.jpg?size=1349:776",
                      "feature_image_data": {
                        "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/951031_231120064135_1200x675.jpg",
                        "title": "951031_231120064135_1200x675",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      },
                      "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/jackie271120055756.jpeg",
                      "vertical_image_data": {
                        "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/jackie271120055756.jpeg",
                        "title": "jackie271120055756",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      },
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
                      "created_at": "2020-11-23T13:17:57.000000Z",
                      "created_by_id": "17",
                      "created_by_name": "Simrit Tiwana",
                      "cache_time": "29/04/2021 02:40:52 pm",
                      "updated_at": "2020-11-30 15:59:28",
                      "galleries": [
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/95_103_3_jpg_112320064757.95_103_3_jpg",
                          "extra": {
                            "text": "<div class=\"page\" title=\"Page 3\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>&ldquo;I hope that this time has taught us to be more conscious of the world that we are living in.&rdquo;</p>\r\n</div>\r\n</div>\r\n</div>",
                            "caption": "<div class=\"page\" title=\"Page 3\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>&ldquo;I hope that this time has taught us to be more conscious of the world that we are living in.&rdquo;</p>\r\n</div>\r\n</div>\r\n</div>",
                            "alt_text": "",
                            "description": "<div class=\"page\" title=\"Page 3\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>&ldquo;I hope that this time has taught us to be more conscious of the world that we are living in.&rdquo;</p>\r\n</div>\r\n</div>\r\n</div>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/95_103_4_jpg_112320064758.95_103_4_jpg",
                          "extra": {
                            "text": "<div class=\"page\" title=\"Page 8\">\r\n<div class=\"section\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>&ldquo;I&rsquo;m just trying to make the most of things, stay positive, and do my work. I&rsquo;ve rediscovered how much I love what I do and I&rsquo;ve been trying to think of ways in which I can improve myself, how I can be a better person.&rdquo;</p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>",
                            "caption": "<div class=\"page\" title=\"Page 8\">\r\n<div class=\"section\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>&ldquo;I&rsquo;m just trying to make the most of things, stay positive, and do my work. I&rsquo;ve rediscovered how much I love what I do and I&rsquo;ve been trying to think of ways in which I can improve myself, how I can be a better person.&rdquo;</p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>",
                            "alt_text": "",
                            "description": "<div class=\"page\" title=\"Page 8\">\r\n<div class=\"section\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>&ldquo;I&rsquo;m just trying to make the most of things, stay positive, and do my work. I&rsquo;ve rediscovered how much I love what I do and I&rsquo;ve been trying to think of ways in which I can improve myself, how I can be a better person.&rdquo;</p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/95_103_5_jpg_112320064759.95_103_5_jpg",
                          "extra": {
                            "text": "<div class=\"page\" title=\"Page 5\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>&ldquo;Meditation, horse riding, and painting are some of the activities I&rsquo;m doing now which are really therapeutic. Horse riding in particular is really all about patience. You're constantly learning about the animal, his personality and character.&rdquo;</p>\r\n</div>\r\n</div>\r\n</div>",
                            "caption": "<div class=\"page\" title=\"Page 5\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>&ldquo;Meditation, horse riding, and painting are some of the activities I&rsquo;m doing now which are really therapeutic. Horse riding in particular is really all about patience. You're constantly learning about the animal, his personality and character.&rdquo;</p>\r\n</div>\r\n</div>\r\n</div>",
                            "alt_text": "",
                            "description": "<div class=\"page\" title=\"Page 5\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>&ldquo;Meditation, horse riding, and painting are some of the activities I&rsquo;m doing now which are really therapeutic. Horse riding in particular is really all about patience. You're constantly learning about the animal, his personality and character.&rdquo;</p>\r\n</div>\r\n</div>\r\n</div>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/95_103_7_jpg_112320064759.95_103_7_jpg",
                          "extra": {
                            "text": "<div class=\"page\" title=\"Page 6\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>&ldquo;Reconnecting with nature has been such an enriching, liberating experience. It&rsquo;s been the greatest gift to be with the animals, the trees, and the water.&rdquo;</p>\r\n</div>\r\n</div>\r\n</div>",
                            "caption": "<div class=\"page\" title=\"Page 6\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>&ldquo;Reconnecting with nature has been such an enriching, liberating experience. It&rsquo;s been the greatest gift to be with the animals, the trees, and the water.&rdquo;</p>\r\n</div>\r\n</div>\r\n</div>",
                            "alt_text": "",
                            "description": "<div class=\"page\" title=\"Page 6\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>&ldquo;Reconnecting with nature has been such an enriching, liberating experience. It&rsquo;s been the greatest gift to be with the animals, the trees, and the water.&rdquo;</p>\r\n</div>\r\n</div>\r\n</div>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/95_103_8_jpg_112320064800.95_103_8_jpg",
                          "extra": {
                            "text": "<div class=\"page\" title=\"Page 7\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>&ldquo;Being fully aware of the pain and suffering this pandemic has caused for many, I'm just grateful that I&rsquo;m on a farm, safe and well. I&rsquo;m doing everything that I can to help those in need from here and praying for strength and health to each one in this world during these tough times.&rdquo;</p>\r\n<div class=\"page\" title=\"Page 1\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>Clothes and accessories, Fernandez&rsquo;s own; Fashion stylist: Jacqueline Fernandez; Photographs by Saajan Singh</p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>",
                            "caption": "<div class=\"page\" title=\"Page 7\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>&ldquo;Being fully aware of the pain and suffering this pandemic has caused for many, I'm just grateful that I&rsquo;m on a farm, safe and well. I&rsquo;m doing everything that I can to help those in need from here and praying for strength and health to each one in this world during these tough times.&rdquo;</p>\r\n<div class=\"page\" title=\"Page 1\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>Clothes and accessories, Fernandez&rsquo;s own; Fashion stylist: Jacqueline Fernandez; Photographs by Saajan Singh</p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>",
                            "alt_text": "",
                            "description": "<div class=\"page\" title=\"Page 7\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>&ldquo;Being fully aware of the pain and suffering this pandemic has caused for many, I'm just grateful that I&rsquo;m on a farm, safe and well. I&rsquo;m doing everything that I can to help those in need from here and praying for strength and health to each one in this world during these tough times.&rdquo;</p>\r\n<div class=\"page\" title=\"Page 1\">\r\n<div class=\"layoutArea\">\r\n<div class=\"column\">\r\n<p>Clothes and accessories, Fernandez&rsquo;s own; Fashion stylist: Jacqueline Fernandez; Photographs by Saajan Singh</p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>"
                          }
                        }
                      ],
                      "video_node": "",
                      "previous_url_id": "954"
                    }
                  ]
                }
              }
            }
          },
          {
            "id": 21,
            "content": "{\"multi_data_title\":\"top add after add\",\"multi_data_widget_id\":\"11\",\"multi_data_widget_extra\":\"hide_title=1\",\"multi_data_widget_template\":\"\"}",
            "content_data": {
              "title": "top add after add",
              "multi_data_widget_id": "11",
              "multi_data_widget_extra": "hide_title=1",
              "multi_data_widget_template": "",
              "multi_data_widget_extra_config": {
                "hide_title": "1"
              },
              "widget_data": {
                "id": 11,
                "title": "top add",
                "slug": "top-add",
                "description": "",
                "type": "html",
                "content": "{\"related_data\":\"<div id='div-gpt-ad-1510297429459-0'>\\n\\t  <script>\\n\\t\\tgoogletag.cmd.push(function() { googletag.display('div-gpt-ad-1510297429459-0'); });\\n\\t  </script>\\n\\t</div>\\n<div class=\\\"baner-area\\\"><div class=\\\"row-center\\\"><div class=\\\"l-banner\\\"> <div id='div-gpt-ad-1510296701525-0'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1510296701525-0'); });</script></div></div></div></div>\\n\"}",
                "published": "1",
                "created_at": "2021-03-15T13:44:59.000000Z",
                "updated_at": "2021-03-15T13:44:59.000000Z",
                "deleted_at": null,
                "widget_data": {
                  "main_data": "&lt;div id='div-gpt-ad-1510297429459-0'&gt;\n\t  &lt;script&gt;\n\t\tgoogletag.cmd.push(function() { googletag.display('div-gpt-ad-1510297429459-0'); });\n\t  &lt;/script&gt;\n\t&lt;/div&gt;\n&lt;div class='baner-area'&gt;&lt;div class='row-center'&gt;&lt;div class='l-banner'&gt; &lt;div id='div-gpt-ad-1510296701525-0'&gt;&lt;script&gt;googletag.cmd.push(function() { googletag.display('div-gpt-ad-1510296701525-0'); });&lt;/script&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;\n"
                }
              }
            }
          },
          {
            "id": 15,
            "content": "{\"multi_data_title\":\"Fashion\",\"multi_data_widget_id\":\"6\",\"multi_data_widget_extra\":\"total_record=4|widget_template=fashion|widget_class=fashion|image_size=293x521\",\"multi_data_widget_template\":\"\"}",
            "content_data": {
              "title": "Fashion",
              "multi_data_widget_id": "6",
              "multi_data_widget_extra": "total_record=4&widget_template=fashion&widget_class=fashion&image_size=293x521",
              "multi_data_widget_template": "",
              "multi_data_widget_extra_config": {
                "total_record": "4",
                "widget_template": "fashion",
                "widget_class": "fashion",
                "image_size": "293x521"
              },
              "widget_data": {
                "id": 6,
                "title": "Fashion",
                "slug": "fashion",
                "description": "Fashion",
                "type": "custom_article",
                "content": "{\"related_content_type\":\"\",\"category_id\":\"1\",\"title_text\":\"\",\"id_number\":\"938\",\"to_class_data\":\"1925,962,936,1924,914,938\"}",
                "published": "1",
                "created_at": "2020-11-27T09:49:29.000000Z",
                "updated_at": "2020-11-27T12:00:22.000000Z",
                "deleted_at": null,
                "widget_data": {
                  "related_content_type_id": "",
                  "related_content_type_name": "",
                  "category_id": "1",
                  "category_name": "fashion",
                  "title_text": "",
                  "id_number": "938",
                  "id_list": "1925,962,936,1924,914,938",
                  "main_data": [
                    {
                      "content_id": 1925,
                      "apps_id": "1",
                      "post_types_id": "2",
                      "content_type": "story",
                      "headline": "What Women Want: Bazaar India Exclusive With Designer Payal Singhal",
                      "introtext": "&lt;p&gt;Designer Payal Singhal is celebrating 20 years in the fashion industry. We’re partying along in her gender, size, and age-inclusive clothing that effortlessly makes us feel the best version of ourselves.&lt;/p&gt;",
                      "fulltext": "&lt;p&gt;&amp;ldquo;I had never entered Ensemble until their 30th anniversary party,&amp;rdquo; says Payal Singhal. Her label is one of the multi-designer boutique&amp;rsquo;s more popular choices, having been stocked there for five years. Now, as it turns 20, she is revelling in the fact that she&amp;rsquo;s done her best to not be influenced by the work of other designers. &amp;ldquo;Whether you like it or not, you might not even remember when or where you saw it [but you do get influenced],&amp;rdquo; says Singhal. Singhal&amp;rsquo;s signature prints are as individualistic as they&amp;rsquo;re recognisable. Her aesthetic usually includes Rajasthani block prints and toile-like patterns rendered across a wide range of soft, pastel tones and vibrant neon fabrics. Her cuts are always comfortable and flattering, with easy flowingcapes, asymmetrical hems, and drop-crotch trousers. Two decades ago, Mumbai-based Singhal started designing occasion-wear for young women like herself, who had grown up wearing jeans and a T-shirt. When brides-to-be nagged her to start a bridal line, she dipped into it a few years later, catapulting a modest business into a sleeper hit. &amp;ldquo;I come from a garment manufacturing background, my parents&amp;rsquo; business supplied western and then Indian ready-to-wear to retail chains. When I went to fashion school [SNDT Women&amp;rsquo;s University], my father&amp;rsquo;s first piece of advice was, &amp;lsquo;We make wearableart.&amp;rsquo; I was 16, and it stayed with me ever since,&amp;rdquo; she says. Wearable art is a succinct description of Singhal&amp;rsquo;s work. Contemporary design with function at its heart&amp;mdash;silhouettes that are kind and flatter all shapes, ages and sizes, long before the concept became a trending hashtag. When she isn&amp;rsquo;t designing seasonal collections, she&amp;rsquo;s working on one of her many fabulous collaborations across multiple product categories&amp;mdash;accessories, beauty, apparel, and shoes. She approaches fashion from the point of view of someone who understands what it is like to enjoy it. &amp;ldquo;There is a lot of me in the brand. I want to look cool, trendy, and be super comfortable. That is what will bring out the best of me.&amp;rdquo; She describes her range like Lego sets&amp;mdash;suitable for ages anywhere between 0 to 99. Inclusivity and responsibility have always been a focus without being the main story. She&amp;rsquo;s been dressing gender non-conforming icons like Alok Vaid-Menon and inclusivity-focused beauty blogger Deepica Mutyala for years. Ever since she launched her website, her bestselling sizes have been XL and XXL. There are bikinis and abayas, and price points that range from `900 to `5 lakhs. &amp;ldquo;I always wanted to be relatable,&amp;rdquo; says Singhal. &amp;ldquo;I don&amp;rsquo;t want people to walk into the store and feel intimidated.&amp;rdquo; Singhal&amp;rsquo;s vision stands testament to the fact that she started by catering to 20-year-olds, and today is still speaking to a new generation. Her recent participation at the fashion trade show Who&amp;rsquo;s Next in Paris confirmed a thought that has been percolating in her mind for a while. &amp;ldquo;It&amp;rsquo;s necessary to establish a federation or a body that governs the business of Indian fashion and helps young designers,&amp;rdquo; she says decisively. &amp;ldquo;Even though I grew up in the fashion industry, there was no one really to guide me. My growth came from sharing information&amp;mdash;go here, source here, do this, don&amp;rsquo;t trust that guy. I wish someone had helped me like that when I started&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;The designer; a look from her first bridal show in 1996&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--009_111620021201.jpg'  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--009_111620021201.jpg' title='image--009_111620021201.jpg' width='476' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;ldquo;There is a lot of me in the brand. I want to look cool, trendy, and be super comfortable. That is what will bring out the best of me.&amp;rdquo;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--008_111620020543.jpg'  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--008_111620020543.jpg' title='image--008_111620020543.jpg' width='709' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;Looks from the fall 2019 collection&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--002_111620021120.jpg'  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--002_111620021120.jpg' title='image--002_111620021120.jpg' width='846' /&gt;&lt;img alt='image--006_111620020104.jpg'  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--006_111620020104.jpg' title='image--006_111620020104.jpg' width='843' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--001_111620015459.jpg'  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--001_111620015459.jpg' title='image--001_111620015459.jpg' width='839' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--003_111620015602.jpg'  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--003_111620015602.jpg' title='image--003_111620015602.jpg' width='827' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Sketches from the 2015 range&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--011_111620020809.jpg'  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--011_111620020809.jpg' title='image--011_111620020809.jpg' width='441' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--000_111620021029.jpg'  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--000_111620021029.jpg' title='image--000_111620021029.jpg' width='500' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;",
                      "amp_fulltext": "&lt;p&gt;&ldquo;I had never entered Ensemble until their 30th anniversary party,&rdquo; says Payal Singhal. Her label is one of the multi-designer boutique&rsquo;s more popular choices, having been stocked there for five years. Now, as it turns 20, she is revelling in the fact that she&rsquo;s done her best to not be influenced by the work of other designers. &ldquo;Whether you like it or not, you might not even remember when or where you saw it [but you do get influenced],&rdquo; says Singhal. Singhal&rsquo;s signature prints are as individualistic as they&rsquo;re recognisable. Her aesthetic usually includes Rajasthani block prints and toile-like patterns rendered across a wide range of soft, pastel tones and vibrant neon fabrics. Her cuts are always comfortable and flattering, with easy flowingcapes, asymmetrical hems, and drop-crotch trousers. Two decades ago, Mumbai-based Singhal started designing occasion-wear for young women like herself, who had grown up wearing jeans and a T-shirt. When brides-to-be nagged her to start a bridal line, she dipped into it a few years later, catapulting a modest business into a sleeper hit. &ldquo;I come from a garment manufacturing background, my parents&rsquo; business supplied western and then Indian ready-to-wear to retail chains. When I went to fashion school [SNDT Women&rsquo;s University], my father&rsquo;s first piece of advice was, &lsquo;We make wearableart.&rsquo; I was 16, and it stayed with me ever since,&rdquo; she says. Wearable art is a succinct description of Singhal&rsquo;s work. Contemporary design with function at its heart&mdash;silhouettes that are kind and flatter all shapes, ages and sizes, long before the concept became a trending hashtag. When she isn&rsquo;t designing seasonal collections, she&rsquo;s working on one of her many fabulous collaborations across multiple product categories&mdash;accessories, beauty, apparel, and shoes. She approaches fashion from the point of view of someone who understands what it is like to enjoy it. &ldquo;There is a lot of me in the brand. I want to look cool, trendy, and be super comfortable. That is what will bring out the best of me.&rdquo; She describes her range like Lego sets&mdash;suitable for ages anywhere between 0 to 99. Inclusivity and responsibility have always been a focus without being the main story. She&rsquo;s been dressing gender non-conforming icons like Alok Vaid-Menon and inclusivity-focused beauty blogger Deepica Mutyala for years. Ever since she launched her website, her bestselling sizes have been XL and XXL. There are bikinis and abayas, and price points that range from `900 to `5 lakhs. &ldquo;I always wanted to be relatable,&rdquo; says Singhal. &ldquo;I don&rsquo;t want people to walk into the store and feel intimidated.&rdquo; Singhal&rsquo;s vision stands testament to the fact that she started by catering to 20-year-olds, and today is still speaking to a new generation. Her recent participation at the fashion trade show Who&rsquo;s Next in Paris confirmed a thought that has been percolating in her mind for a while. &ldquo;It&rsquo;s necessary to establish a federation or a body that governs the business of Indian fashion and helps young designers,&rdquo; she says decisively. &ldquo;Even though I grew up in the fashion industry, there was no one really to guide me. My growth came from sharing information&mdash;go here, source here, do this, don&rsquo;t trust that guy. I wish someone had helped me like that when I started&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;The designer; a look from her first bridal show in 1996&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt=&quot;image--009_111620021201.jpg&quot; src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--009_111620021201.jpg&quot; title=&quot;image--009_111620021201.jpg&quot; width=&quot;518&quot; height=&quot;735&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&ldquo;There is a lot of me in the brand. I want to look cool, trendy, and be super comfortable. That is what will bring out the best of me.&rdquo;&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt=&quot;image--008_111620020543.jpg&quot; src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--008_111620020543.jpg&quot; title=&quot;image--008_111620020543.jpg&quot; width=&quot;833&quot; height=&quot;1323&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;Looks from the fall 2019 collection&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt=&quot;image--002_111620021120.jpg&quot; src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--002_111620021120.jpg&quot; title=&quot;image--002_111620021120.jpg&quot; width=&quot;1222&quot; height=&quot;1833&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;amp-img alt=&quot;image--006_111620020104.jpg&quot; src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--006_111620020104.jpg&quot; title=&quot;image--006_111620020104.jpg&quot; width=&quot;1268&quot; height=&quot;1787&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt=&quot;image--001_111620015459.jpg&quot; src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--001_111620015459.jpg&quot; title=&quot;image--001_111620015459.jpg&quot; width=&quot;1106&quot; height=&quot;2175&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt=&quot;image--003_111620015602.jpg&quot; src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--003_111620015602.jpg&quot; title=&quot;image--003_111620015602.jpg&quot; width=&quot;1291&quot; height=&quot;1935&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Sketches from the 2015 range&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt=&quot;image--011_111620020809.jpg&quot; src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--011_111620020809.jpg&quot; title=&quot;image--011_111620020809.jpg&quot; width=&quot;681&quot; height=&quot;1032&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt=&quot;image--000_111620021029.jpg&quot; src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--000_111620021029.jpg&quot; title=&quot;image--000_111620021029.jpg&quot; width=&quot;782&quot; height=&quot;1464&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;",
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
                      "url": "/fashion/story/payal-singhal-is-celebrating-20-years-in-the-fashion-industry-were-partying-along-in-her-gender-size-and-age-inclusive-clothing-that-effortlessly-makes-us-feel-the-best-version-of-ourselves-1925",
                      "full_url": "https://alpha-harperbazar.intoday.in/fashion/story/payal-singhal-is-celebrating-20-years-in-the-fashion-industry-were-partying-along-in-her-gender-size-and-age-inclusive-clothing-that-effortlessly-makes-us-feel-the-best-version-of-ourselves-1925",
                      "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/fashion/story/payal-singhal-is-celebrating-20-years-in-the-fashion-industry-were-partying-along-in-her-gender-size-and-age-inclusive-clothing-that-effortlessly-makes-us-feel-the-best-version-of-ourselves-1925",
                      "slug": "payal-singhal-is-celebrating-20-years-in-the-fashion-industry-were-partying-along-in-her-gender-size-and-age-inclusive-clothing-that-effortlessly-makes-us-feel-the-best-version-of-ourselves",
                      "excerpt": "&lt;p&gt;Designer Payal Singhal is celebrating 20 years in the fashion industry. We’re partying along in her gender, size, and age-inclusive clothing that effortlessly makes us feel the best version of ourselves.&lt;/p&gt;",
                      "publish_up": "2020-11-18 15:10:36",
                      "publish_down": null,
                      "metatitle": "payal singhal,designer payal singhal,what women want,bazaar india,payal singhal interview,designer payal singhal interview,chit chat with designer payal singhal",
                      "metadesc": "payal singhal,\r\ndesigner payal singhal,\r\nwhat women want,\r\nbazaar india,\r\npayal singhal interview,\r\ndesigner payal singhal interview,\r\nchit chat with designer payal singhal",
                      "metakey": "payal singhal,designer payal singhal,what women want,bazaar india,payal singhal interview,designer payal singhal interview,chit chat with designer payal singhal",
                      "highlights": "",
                      "rating": "",
                      "review_title": "",
                      "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "review_pros": "",
                      "review_cons": "",
                      "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign8_161120014701_1199x674.png",
                      "feature_image_data": {
                        "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign8_161120014701_1199x674.png",
                        "title": "untitleddesign8_161120014701_1199x674",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      },
                      "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/payal-vertical271120052204.jpeg?size=293:521",
                      "vertical_image_data": {
                        "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/payal-vertical271120052204.jpeg",
                        "title": "payal-vertical271120052204",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      },
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
                      "created_at": "2020-11-16T08:21:08.000000Z",
                      "created_by_id": "13",
                      "created_by_name": "prachi goyal",
                      "cache_time": "29/04/2021 02:40:54 pm",
                      "updated_at": "2020-11-27 17:58:07",
                      "galleries": "",
                      "video_node": "",
                      "previous_url_id": "1924"
                    },
                    {
                      "content_id": 962,
                      "apps_id": "1",
                      "post_types_id": "4",
                      "content_type": "photo",
                      "headline": "11 Key Looks From India Couture Week 2020",
                      "introtext": "From Manish Malhotra to Anju Modi, Indian fashion broke new ground this month with the first-ever, online showcase of India Couture Week 2020 by the Fashion Design Council of India (FDCI)",
                      "fulltext": "Indian fashion broke new ground this month with the first-ever, online showcase of India Couture Week 2020 by the Fashion Design Council of India (FDCI). The six-day Instagram presentation featured pre-recorded, virtual shows by India’s couture maestros. We curate some of the key looks from the season",
                      "amp_fulltext": "Indian fashion broke new ground this month with the first-ever, online showcase of India Couture Week 2020 by the Fashion Design Council of India (FDCI). The six-day Instagram presentation featured pre-recorded, virtual shows by India&rsquo;s couture maestros. We curate some of the key looks from the season",
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
                      "url": "/fashion/photo/key-looks-from-india-couture-week-962",
                      "full_url": "https://alpha-harperbazar.intoday.in/fashion/photo/key-looks-from-india-couture-week-962",
                      "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/fashion/photo/key-looks-from-india-couture-week-962",
                      "slug": "key-looks-from-india-couture-week",
                      "excerpt": "From Manish Malhotra to Anju Modi, Indian fashion broke new ground this month with the first-ever, online showcase of India Couture Week 2020 by the Fashion Design Council of India (FDCI)",
                      "publish_up": "2020-11-25 14:00:37",
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
                      "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign24_241120115219_1199x674.png",
                      "feature_image_data": {
                        "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/untitleddesign24_241120115219_1199x674.png",
                        "title": "untitleddesign24_241120115219_1199x674",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      },
                      "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=293:521",
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
                      "created_at": "2020-11-24T06:22:42.000000Z",
                      "created_by_id": "13",
                      "created_by_name": "prachi goyal",
                      "cache_time": "29/04/2021 02:40:54 pm",
                      "updated_at": "2020-11-25 14:43:52",
                      "galleries": [
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_009_png_112420115242.image_009_png",
                          "extra": {
                            "text": "<p>Shantanu &amp; Nikhil</p>",
                            "caption": "<p>Shantanu &amp; Nikhil</p>",
                            "alt_text": "",
                            "description": "<p>Shantanu &amp; Nikhil</p>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_008_png_112420115243.image_008_png",
                          "extra": {
                            "text": "<p>Manish Malhotra</p>",
                            "caption": "<p>Manish Malhotra</p>",
                            "alt_text": "",
                            "description": "<p>Manish Malhotra</p>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_006_png_112420115244.image_006_png",
                          "extra": {
                            "text": "<p>Amit Aggarwal</p>",
                            "caption": "<p>Amit Aggarwal</p>",
                            "alt_text": "",
                            "description": "<p>Amit Aggarwal</p>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_004_png_112420115246.image_004_png",
                          "extra": {
                            "text": "<p>Anju Modi</p>",
                            "caption": "<p>Anju Modi</p>",
                            "alt_text": "",
                            "description": "<p>Anju Modi</p>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_005_png_112420115247.image_005_png",
                          "extra": {
                            "text": "<p>Falguni Shane Peacock.</p>",
                            "caption": "<p>Falguni Shane Peacock.</p>",
                            "alt_text": "",
                            "description": "<p>Falguni Shane Peacock.</p>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_003_png_112420115248.image_003_png",
                          "extra": {
                            "text": "<p>Dolly J.</p>",
                            "caption": "<p>Dolly J.</p>",
                            "alt_text": "",
                            "description": "<p>Dolly J.</p>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_010_png_112420115249.image_010_png",
                          "extra": {
                            "text": "<p>Rahul Mishra</p>",
                            "caption": "<p>Rahul Mishra</p>",
                            "alt_text": "",
                            "description": "<p>Rahul Mishra</p>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_001_png_112420115250.image_001_png",
                          "extra": {
                            "text": "<p>Suneet Varma</p>",
                            "caption": "<p>Suneet Varma</p>",
                            "alt_text": "",
                            "description": "<p>Suneet Varma</p>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_000_1_png_112420115251.image_000_1_png",
                          "extra": {
                            "text": "<p>Gaurav Gupta</p>",
                            "caption": "<p>Gaurav Gupta</p>",
                            "alt_text": "",
                            "description": "<p>Gaurav Gupta</p>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_007_png_112420115252.image_007_png",
                          "extra": {
                            "text": "<p>JJ Valaya</p>",
                            "caption": "<p>JJ Valaya</p>",
                            "alt_text": "",
                            "description": "<p>JJ Valaya</p>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_002_png_112420115253.image_002_png",
                          "extra": {
                            "text": "<p>Kunal Rawal</p>",
                            "caption": "<p>Kunal Rawal</p>",
                            "alt_text": "",
                            "description": "<p>Kunal Rawal</p>"
                          }
                        }
                      ],
                      "video_node": "",
                      "previous_url_id": "960"
                    },
                    {
                      "content_id": 936,
                      "apps_id": "1",
                      "post_types_id": "4",
                      "content_type": "photo",
                      "headline": "Make a Flapper Style Statement With These Fringed Accessories",
                      "introtext": "Whether subtle accents or all-out flamboyance—fringe is an easy way to get noticed",
                      "fulltext": "Whether subtle accents or all-out flamboyance—fringe is an easy way to get noticed",
                      "amp_fulltext": "Whether subtle accents or all-out flamboyance&mdash;fringe is an easy way to get noticed",
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
                      "url": "/fashion/photo/hang-in-there-936",
                      "full_url": "https://alpha-harperbazar.intoday.in/fashion/photo/hang-in-there-936",
                      "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/fashion/photo/hang-in-there-936",
                      "slug": "hang-in-there",
                      "excerpt": "Whether subtle accents or all-out flamboyance—fringe is an easy way to get noticed",
                      "publish_up": "2020-11-19 19:05:06",
                      "publish_down": null,
                      "metatitle": "",
                      "metadesc": "fringed accessories,\r\nflapper style,\r\nflapper accessories,\r\nflapper style accessories,\r\nflapper ideas,\r\nflapper style ideas,\r\nfringe flapper dress costume accessories",
                      "metakey": "fringed accessories,\r\nflapper style,\r\nflapper accessories,\r\nflapper style accessories,\r\nflapper ideas,\r\nflapper style ideas,\r\nfringe flapper dress costume accessories",
                      "highlights": "",
                      "rating": "",
                      "review_title": "",
                      "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "review_pros": "",
                      "review_cons": "",
                      "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image035_171120020609_314x402.png",
                      "feature_image_data": {
                        "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/image035_171120020609_314x402.png",
                        "title": "image035_171120020609_314x402",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      },
                      "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=293:521",
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
                      "created_at": "2020-11-17T08:36:21.000000Z",
                      "created_by_id": "13",
                      "created_by_name": "prachi goyal",
                      "cache_time": "29/04/2021 02:40:54 pm",
                      "updated_at": "2020-11-30 17:07:11",
                      "galleries": [
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_041_png_111720020621.image_041_png",
                          "extra": {
                            "text": "<p>Shoes Rs. 58,000 (approx), MM6 Maison Margiela;</p>",
                            "caption": "<p>Shoes Rs. 58,000 (approx), MM6 Maison Margiela;</p>",
                            "alt_text": "",
                            "description": "<p>Shoes Rs. 58,000 (approx), MM6 Maison Margiela;</p>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_042_png_111720020621.image_042_png",
                          "extra": {
                            "text": "<p>Shoes ,Rs.90,000 (approx), Jimmy Choo</p>",
                            "caption": "<p>Shoes ,Rs.90,000 (approx), Jimmy Choo</p>",
                            "alt_text": "",
                            "description": "<p>Shoes ,Rs.90,000 (approx), Jimmy Choo</p>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_043_png_111720020622.image_043_png",
                          "extra": {
                            "text": "<p>Bag, Rs.73,000 (approx), Ingie Paris</p>",
                            "caption": "<p>Bag, Rs.73,000 (approx), Ingie Paris</p>",
                            "alt_text": "",
                            "description": "<p>Bag, Rs.73,000 (approx), Ingie Paris</p>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_044_png_111720020622.image_044_png",
                          "extra": {
                            "text": "<p>Shoes, Rs.86,000 (approx), Gianvito Rossi</p>",
                            "caption": "<p>Shoes, Rs.86,000 (approx), Gianvito Rossi</p>",
                            "alt_text": "",
                            "description": "<p>Shoes, Rs.86,000 (approx), Gianvito Rossi</p>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_046_png_111720020623.image_046_png",
                          "extra": {
                            "text": "<p>Bag, Rs.30,000 (approx), 0711.</p>",
                            "caption": "<p>Bag, Rs.30,000 (approx), 0711.</p>",
                            "alt_text": "",
                            "description": "<p>Bag, Rs.30,000 (approx), 0711.</p>"
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_035_png_111720020624.image_035_png",
                          "extra": {
                            "text": "image_035_png_111720020624",
                            "caption": "",
                            "alt_text": "",
                            "description": ""
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image_037_png_111720020624.image_037_png",
                          "extra": {
                            "text": "image_037_png_111720020624",
                            "caption": "",
                            "alt_text": "",
                            "description": ""
                          }
                        },
                        {
                          "file_path": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/photo_gallery/image--045_111720061403.png",
                          "extra": {
                            "text": "<p>Shoes , Rs.78,000 (approx), Aquazzura</p>",
                            "caption": "<p>Shoes , Rs.78,000 (approx), Aquazzura</p>",
                            "alt_text": "",
                            "description": "<p>Shoes , Rs.78,000 (approx), Aquazzura</p>"
                          }
                        }
                      ],
                      "video_node": "",
                      "previous_url_id": "933"
                    },
                    {
                      "content_id": 1924,
                      "apps_id": "1",
                      "post_types_id": "2",
                      "content_type": "story",
                      "headline": "Tracing the Origins of Chikankari Embroidery",
                      "introtext": "&lt;p&gt;&lt;em&gt;Fabindia &lt;/em&gt;(a brand specialising in traditional Indian techniques) takes you on a journey to discover the labour of love behind the making of a &lt;em&gt;Chikanakri&lt;/em&gt; embroidered garment.&lt;/p&gt;",
                      "fulltext": "&lt;p&gt;&lt;em&gt;&amp;nbsp;Chikan&lt;/em&gt; literally translates to&lt;em&gt; chikin&lt;/em&gt; in Persian, meaning colourless. The name refers to the impossibly subtle, white-on-white needlework embroidery, although we now see renditions of &lt;em&gt;chikankari&lt;/em&gt; in almost every colour. Mughal empress Nur Jahan is widely credited with being one of the first patrons of this textile embroidery artform in the 1600s. Now it provides livelihood to lakhs of artisans, particularly those from Lucknow, where it was granted a Geographical Index (GI) status in December 2008.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='text-decoration: underline;'&gt;&lt;strong&gt;The Journey&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;&lt;span style='text-decoration: underline;'&gt;The Tailoring Workshop&lt;/span&gt;:&lt;/strong&gt; At Radha Krishna factory (one of Fabindia&amp;rsquo;s vendors) in Lucknow, patterns for close to 90 pieces of one style of kurta are cut at the same time. A team of tailors then stitches the parts together using both hand and machine.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;&lt;span style='text-decoration: underline;'&gt;Building the Outline&lt;/span&gt;:&lt;/strong&gt;The pieces are then sent to &amp;lsquo;chapai centres&amp;rsquo;, or block printers. They print the ornate designs (mostly inspired by Persian architecture) in &lt;em&gt;neel&lt;/em&gt; (an indigo dye variant), a temporary dye that serves as a guideline for embroiderers.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--0001_111820104816.png'  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0001_111820104816.png' style='display: block; margin-left: auto; margin-right: auto;' title='image--0001_111820104816.png' width='145' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;span style='text-decoration: underline;'&gt;&lt;strong&gt;Stitch by Stitch&lt;/strong&gt;&lt;/span&gt;&lt;strong&gt;:&lt;/strong&gt; Women from Kursi, Dharsanda, Barabanki, and several other smaller villages in UP hand embroider every single piece. From girls as young as 22 to experienced women in their 50s, and a few men, artisans work over many weeks to finish a single garment. There are broadly 36 types of stitches that make up the embroidery style and each artisan is specialized in a different set of techniques. Interestingly enough, not one of them wears anything in chikan. &amp;ldquo;We use this skill to earn money, not a single stitch should go to waste,&amp;rdquo; says one of the artisans, a woman in her 50s.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;&lt;span style='text-decoration: underline;'&gt;Rinse and Dry&lt;/span&gt;:&lt;/strong&gt; After the clothes are returned to Fabindia from the villages, they go through a stringent process of cleaning to remove any stains and the temporary dye that was used to outline the pattern. The pieces are then finished (tightening of loose stitches, ironing and so on) in-house before being sent over to the stores around the world. The whole journey can take up to 10 months and each piece is the result of patience, care, and skill by many hands.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt='image--0061_111820104937.png'  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0061_111820104937.png' style='display: block; margin-left: auto; margin-right: auto;' title='image--0061_111820104937.png' width='152' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;One could say the Indian version of a closet must-haves list should include a sari, a dupatta, and a (Fabindia) kurta. It wouldn&amp;#39;t be a far stretch to claim that almost every urban Indian owns some version of the cult brand&amp;rsquo;s ready-to-wear. To know the story of Fabindia you have to travel to Lucknow, home of &lt;em&gt;chikankari&lt;/em&gt; embroidery&amp;mdash;one of the brand&amp;#39;s two key offerings, the other being indigo-dyed fabrics.&lt;em&gt; Chikankari&lt;/em&gt; was selected because of its additional role as a medium to uplift Indian women via crafts. Founded in 1960 by American John Bissell, Fabindia began as a corporation that supplied made-in-India fabrics and handicrafts to the world. Today, the brand has grown into a massive conglomerate, with over 300 stores across the globe selling almost every sort of textile from South Asia as clothes or home d&amp;eacute;cor.&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;",
                      "amp_fulltext": "&lt;p&gt;&lt;em&gt;&amp;nbsp;Chikan&lt;/em&gt; literally translates to&lt;em&gt; chikin&lt;/em&gt; in Persian, meaning colourless. The name refers to the impossibly subtle, white-on-white needlework embroidery, although we now see renditions of &lt;em&gt;chikankari&lt;/em&gt; in almost every colour. Mughal empress Nur Jahan is widely credited with being one of the first patrons of this textile embroidery artform in the 1600s. Now it provides livelihood to lakhs of artisans, particularly those from Lucknow, where it was granted a Geographical Index (GI) status in December 2008.&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;strong&gt;The Journey&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;&lt;span&gt;The Tailoring Workshop&lt;/span&gt;:&lt;/strong&gt; At Radha Krishna factory (one of Fabindia&rsquo;s vendors) in Lucknow, patterns for close to 90 pieces of one style of kurta are cut at the same time. A team of tailors then stitches the parts together using both hand and machine.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;&lt;span&gt;Building the Outline&lt;/span&gt;:&lt;/strong&gt;The pieces are then sent to &lsquo;chapai centres&rsquo;, or block printers. They print the ornate designs (mostly inspired by Persian architecture) in &lt;em&gt;neel&lt;/em&gt; (an indigo dye variant), a temporary dye that serves as a guideline for embroiderers.&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0001_111820104816.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;strong&gt;Stitch by Stitch&lt;/strong&gt;&lt;/span&gt;&lt;strong&gt;:&lt;/strong&gt; Women from Kursi, Dharsanda, Barabanki, and several other smaller villages in UP hand embroider every single piece. From girls as young as 22 to experienced women in their 50s, and a few men, artisans work over many weeks to finish a single garment. There are broadly 36 types of stitches that make up the embroidery style and each artisan is specialized in a different set of techniques. Interestingly enough, not one of them wears anything in chikan. &ldquo;We use this skill to earn money, not a single stitch should go to waste,&rdquo; says one of the artisans, a woman in her 50s.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;&lt;span&gt;Rinse and Dry&lt;/span&gt;:&lt;/strong&gt; After the clothes are returned to Fabindia from the villages, they go through a stringent process of cleaning to remove any stains and the temporary dye that was used to outline the pattern. The pieces are then finished (tightening of loose stitches, ironing and so on) in-house before being sent over to the stores around the world. The whole journey can take up to 10 months and each piece is the result of patience, care, and skill by many hands.&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/embed/202011/image--0061_111820104937.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;One could say the Indian version of a closet must-haves list should include a sari, a dupatta, and a (Fabindia) kurta. It wouldn't be a far stretch to claim that almost every urban Indian owns some version of the cult brand&rsquo;s ready-to-wear. To know the story of Fabindia you have to travel to Lucknow, home of &lt;em&gt;chikankari&lt;/em&gt; embroidery&mdash;one of the brand's two key offerings, the other being indigo-dyed fabrics.&lt;em&gt; Chikankari&lt;/em&gt; was selected because of its additional role as a medium to uplift Indian women via crafts. Founded in 1960 by American John Bissell, Fabindia began as a corporation that supplied made-in-India fabrics and handicrafts to the world. Today, the brand has grown into a massive conglomerate, with over 300 stores across the globe selling almost every sort of textile from South Asia as clothes or home d&eacute;cor.&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;",
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
                      "url": "/fashion/story/tracing-the-origins-of-chikankari-embroidery-with-fabindia-1924",
                      "full_url": "https://alpha-harperbazar.intoday.in/fashion/story/tracing-the-origins-of-chikankari-embroidery-with-fabindia-1924",
                      "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/fashion/story/tracing-the-origins-of-chikankari-embroidery-with-fabindia-1924",
                      "slug": "tracing-the-origins-of-chikankari-embroidery-with-fabindia",
                      "excerpt": "&lt;p&gt;&lt;em&gt;Fabindia &lt;/em&gt;(a brand specialising in traditional Indian techniques) takes you on a journey to discover the labour of love behind the making of a &lt;em&gt;Chikanakri&lt;/em&gt; embroidered garment.&lt;/p&gt;",
                      "publish_up": "2020-11-18 15:10:07",
                      "publish_down": null,
                      "metatitle": "Tracing the Origins of Chikankari Embroidery",
                      "metadesc": "&lt;p&gt;&lt;em&gt;Fabindia &lt;/em&gt;(a brand specialising in traditional Indian techniques) takes you on a journey to discover the labour of love behind the making of a &lt;em&gt;Chikanakri&lt;/em&gt; embroidered garment.&lt;/p&gt;",
                      "metakey": "",
                      "highlights": "",
                      "rating": "",
                      "review_title": "",
                      "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "review_pros": "",
                      "review_cons": "",
                      "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/chickankari261120065137.jpeg",
                      "feature_image_data": {
                        "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202011/chickankari261120065137.jpeg",
                        "title": "chickankari261120065137",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      },
                      "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=293:521",
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
                      "created_at": "2020-11-13T07:10:46.000000Z",
                      "created_by_id": "13",
                      "created_by_name": "prachi goyal",
                      "cache_time": "29/04/2021 02:40:54 pm",
                      "updated_at": "2020-11-26 18:52:27",
                      "galleries": "",
                      "video_node": "",
                      "previous_url_id": "1921"
                    }
                  ]
                }
              }
            }
          },
          {
            "id": 14,
            "content": "{\"multi_data_title\":\"Beauty\",\"multi_data_widget_id\":\"7\",\"multi_data_widget_extra\":\"total_record=4|widget_template=beauty|widget_class=travel_food beauty_section\",\"multi_data_widget_template\":\"\"}",
            "content_data": {
              "title": "Beauty",
              "multi_data_widget_id": "7",
              "multi_data_widget_extra": "total_record=4&widget_template=beauty&widget_class=travel_food beauty_section",
              "multi_data_widget_template": "",
              "multi_data_widget_extra_config": {
                "total_record": "4",
                "widget_template": "beauty",
                "widget_class": "travel_food beauty_section"
              },
              "widget_data": {
                "id": 7,
                "title": "Beauty",
                "slug": "beauty",
                "description": "Beauty Home page Custom Articles",
                "type": "latest_article",
                "content": "{\"related_content_type\":[],\"category_id\":\"3\",\"no_of_records\":\"10\"}",
                "published": "1",
                "created_at": "2020-11-27T09:50:56.000000Z",
                "updated_at": "2021-03-15T13:45:34.000000Z",
                "deleted_at": null,
                "widget_data": {
                  "related_content_type_id": "",
                  "related_content_type_name": "",
                  "category_id": "3",
                  "category_name": "beauty",
                  "section_level": 0,
                  "no_of_records": "10",
                  "main_data": [
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
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=400:450",
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
                      "cache_time": "29/04/2021 02:40:55 pm",
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
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=400:450",
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
                      "cache_time": "29/04/2021 02:40:55 pm",
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
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=400:450",
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
                      "cache_time": "29/04/2021 02:40:56 pm",
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
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=400:450",
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
                      "cache_time": "29/04/2021 02:40:58 pm",
                      "updated_at": "2020-12-04 17:21:22",
                      "galleries": "",
                      "video_node": "",
                      "previous_url_id": "1952"
                    }
                  ]
                }
              }
            }
          },
          {
            "id": 16,
            "content": "{\"multi_data_title\":\"Culture\",\"multi_data_widget_id\":\"4\",\"multi_data_widget_extra\":\"total_record=4|widget_template=culture|widget_class=culture\",\"multi_data_widget_template\":\"\"}",
            "content_data": {
              "title": "Culture",
              "multi_data_widget_id": "4",
              "multi_data_widget_extra": "total_record=4&widget_template=culture&widget_class=culture",
              "multi_data_widget_template": "",
              "multi_data_widget_extra_config": {
                "total_record": "4",
                "widget_template": "culture",
                "widget_class": "culture"
              },
              "widget_data": {
                "id": 4,
                "title": "Latest culture",
                "slug": "latest-culture",
                "description": "Latest Articles",
                "type": "latest_article",
                "content": "{\"related_content_type\":[],\"category_id\":\"5\",\"no_of_records\":\"10\"}",
                "published": "1",
                "created_at": "2020-11-18T12:51:15.000000Z",
                "updated_at": "2021-03-15T13:43:48.000000Z",
                "deleted_at": null,
                "widget_data": {
                  "related_content_type_id": "",
                  "related_content_type_name": "",
                  "category_id": "5",
                  "category_name": "culture",
                  "section_level": 0,
                  "no_of_records": "10",
                  "main_data": [
                    {
                      "content_id": 2001,
                      "apps_id": "1",
                      "post_types_id": "2",
                      "content_type": "story",
                      "headline": "Artist Arpita Shah Explores Ideas of Migration, Memory, and Loss",
                      "introtext": "Through photographs of the most influential women in her life, artist Arpita Shah looks to capture the memories of her maternal ancestors.",
                      "fulltext": "&lt;p&gt;&lt;span style='font-size:11pt'&gt;&lt;span style='font-family:Calibri,sans-serif'&gt;Nalini is a family portrait&lt;/span&gt;&lt;/span&gt;. A new series of photographs by artist Arpita Shah, it looks to capture the memories of her maternal ancestors. &amp;ldquo;I have focused predominantly on my mother and grandmother, and want to explore the intimacy, distance, and longing between the several generations of women in my family,&amp;rdquo; says Shah. &amp;ldquo;My family left Africa in the early &amp;rsquo;40s after the advent of World War II and packed with them whatever they considered precious.&amp;rdquo;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img83081220082018.jpeg' width='508' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Photographed over a span of four years across India, Kenya, and the United Kingdom, the series also features images of landscapes and personal artefacts. The objects&amp;mdash;an old passport, opal stones, and a pale silk sari brought back from Nairobi&amp;mdash;are arranged in still-life compositions, tracing the history of her family. &amp;ldquo;The sari was passed down to my grandmother, my mother, and now to me,&amp;rdquo; she adds.&lt;/p&gt;\r\n\r\n&lt;figure class='image'&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img81081220082303.jpeg' width='488' /&gt;\r\n&lt;figcaption&gt;Untitled; Bougainvillaea Mahara.&lt;/figcaption&gt;\r\n&lt;/figure&gt;\r\n\r\n&lt;p&gt;Elsewhere family photographs appear, adorned with fresh bougainvillea and roses. Shah draws from Hindu mythology, as she honours her ancestors through these floral offerings. Currently based in Edinburgh, Shah aims to evoke the commonality of experiences of the Indian diaspora through her images. &amp;ldquo;Each time I visit India, my grandmother gets frailer and more forgetful,&amp;rdquo; she says, explaining her decision to document her ancestors and tell their stories before they fade away. &amp;ldquo;I cannot explain the emotions of discovering, for the first time a crumpled photograph of my great-grandmother standing elegantly in a photo studio in Nairobi. Had I not started this project, it would&amp;rsquo;ve quietly disappeared in an attic. I can only hope it inspires someone else to preserve their heritage.&amp;rdquo; Nalini is on at Impressions Gallery, Bradford, England, until March 28&lt;/p&gt;\r\n\r\n&lt;figure class='image' style='float:left'&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img79081220081755.jpeg' width='503' /&gt;\r\n&lt;figcaption&gt;Great grandmother, Nairobi Photo Studio, 1939&lt;/figcaption&gt;\r\n&lt;/figure&gt;",
                      "amp_fulltext": "&lt;p&gt;&lt;span&gt;&lt;span&gt;Nalini is a family portrait&lt;/span&gt;&lt;/span&gt;. A new series of photographs by artist Arpita Shah, it looks to capture the memories of her maternal ancestors. &ldquo;I have focused predominantly on my mother and grandmother, and want to explore the intimacy, distance, and longing between the several generations of women in my family,&rdquo; says Shah. &ldquo;My family left Africa in the early &rsquo;40s after the advent of World War II and packed with them whatever they considered precious.&rdquo;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img83081220082018.jpeg&quot; width=&quot;773&quot; height=&quot;641&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Photographed over a span of four years across India, Kenya, and the United Kingdom, the series also features images of landscapes and personal artefacts. The objects&mdash;an old passport, opal stones, and a pale silk sari brought back from Nairobi&mdash;are arranged in still-life compositions, tracing the history of her family. &ldquo;The sari was passed down to my grandmother, my mother, and now to me,&rdquo; she adds.&lt;/p&gt;\n\n&lt;figure class=&quot;image&quot;&gt;&lt;amp-img alt src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img81081220082303.jpeg&quot; width=&quot;1146&quot; height=&quot;917&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;\n&lt;figcaption&gt;Untitled; Bougainvillaea Mahara.&lt;/figcaption&gt;\n&lt;/figure&gt;\n\n&lt;p&gt;Elsewhere family photographs appear, adorned with fresh bougainvillea and roses. Shah draws from Hindu mythology, as she honours her ancestors through these floral offerings. Currently based in Edinburgh, Shah aims to evoke the commonality of experiences of the Indian diaspora through her images. &ldquo;Each time I visit India, my grandmother gets frailer and more forgetful,&rdquo; she says, explaining her decision to document her ancestors and tell their stories before they fade away. &ldquo;I cannot explain the emotions of discovering, for the first time a crumpled photograph of my great-grandmother standing elegantly in a photo studio in Nairobi. Had I not started this project, it would&rsquo;ve quietly disappeared in an attic. I can only hope it inspires someone else to preserve their heritage.&rdquo; Nalini is on at Impressions Gallery, Bradford, England, until March 28&lt;/p&gt;\n\n&lt;figure class=&quot;image&quot;&gt;&lt;amp-img alt src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img79081220081755.jpeg&quot; width=&quot;896&quot; height=&quot;717&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;\n&lt;figcaption&gt;Great grandmother, Nairobi Photo Studio, 1939&lt;/figcaption&gt;\n&lt;/figure&gt;",
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
                      "url": "/culture/story/across-borders-2001",
                      "full_url": "https://alpha-harperbazar.intoday.in/culture/story/across-borders-2001",
                      "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/culture/story/across-borders-2001",
                      "slug": "across-borders",
                      "excerpt": "Through photographs of the most influential women in her life, artist Arpita Shah looks to capture the memories of her maternal ancestors.",
                      "publish_up": "2020-12-11 18:03:00",
                      "publish_down": null,
                      "metatitle": "Across Borders",
                      "metadesc": "Through photographs of the most influential women in her life, artist Arpita Shah explores ideas of migration, memory, and loss",
                      "metakey": "",
                      "highlights": "",
                      "rating": "",
                      "review_title": "",
                      "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "review_pros": "",
                      "review_cons": "",
                      "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/exhibit111220060140.jpeg",
                      "feature_image_data": {
                        "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/exhibit111220060140.jpeg",
                        "title": "exhibit111220060140",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      },
                      "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=400:450",
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
                      "created_at": "2020-12-08T15:05:51.000000Z",
                      "created_by_id": "13",
                      "created_by_name": "prachi goyal",
                      "cache_time": "29/04/2021 02:40:58 pm",
                      "updated_at": "2020-12-16 13:32:27",
                      "galleries": "",
                      "video_node": "",
                      "previous_url_id": "2000"
                    },
                    {
                      "content_id": 2000,
                      "apps_id": "1",
                      "post_types_id": "2",
                      "content_type": "story",
                      "headline": "Discover an Art's Exhibit in Paris Dedicated to Harper's Bazaar",
                      "introtext": "A new exhibition at the Musée des Arts Décoratifs in Paris explores the history of fashion through the lens of Harper’s Bazaar",
                      "fulltext": "&lt;p&gt;By Stephen Mooallem&lt;/p&gt;\r\n\r\n&lt;p&gt;On February&amp;nbsp;28, the Mus&amp;eacute;e des Arts D&amp;eacute;coratifs in Paris will mark the reopening of its newly renovated fashion galleries with an exhibition devoted to Harper&amp;rsquo;s Bazaar. First in Fashion will examine the history of fashion as it has unfolded in the pages of the magazine, spotlighting a collection of watershed moments and seismic shifts in the way we dress, think, and live as they were captured in&amp;mdash;and, in some cases, instigated by&amp;mdash;Bazaar. Overseen by MAD director Olivier Gabet and curators &amp;Eacute;ric Pujalet-Pl&amp;agrave;a and Marianne Le Galliard, with Bazaar&amp;rsquo;s former editor in chief, Glenda Bailey, and design director, Elizabeth Hummer, the exhibition charts Bazaar&amp;rsquo;s evolution from a 19th-century literary lifestyle journal that billed itself as &amp;ldquo;a repository for fashion, pleasure, and instruction&amp;rdquo; into the first modern fashion magazine.&lt;/p&gt;\r\n\r\n&lt;figure class='image'&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/image-003081220074943.png' width='343' /&gt;\r\n&lt;figcaption&gt;November 1992 by Peter Lindbergh&lt;/figcaption&gt;\r\n&lt;/figure&gt;\r\n\r\n&lt;p&gt;The name of the exhibition is fitting: Since its founding in 1867, Bazaar has been present for an epoch of &amp;lsquo;firsts&amp;rsquo; in fashion, as well as myriad creative, cultural, and social revolutions. Bazaar&amp;mdash;or Bazar, as it was originally spelt&amp;mdash;was the first American magazine to dedicate itself to exploring the lives of women through fashion. Bazaar&amp;rsquo;s first editor, Mary Louise Booth, was involved in the women&amp;rsquo;s suffrage movement, and it was one of the first mainstream publications to advocate for voting rights, equal pay, and educational and professional opportunities for women. Bazaar was the first magazine to look at fashion within the context of art and culture, and the first to depict women in fashion in real environments, moving through real spaces in real-time. It was the first magazine to commission Richard Avedon, and the first to anoint denim and bikinis as fashion (the latter of which Diana Vreeland deemed &amp;ldquo;the most important thing since the atom bomb&amp;rdquo;). Bazaar was also the first to celebrate Dior&amp;rsquo;s New Look, the first to put a man on its cover, and the first to introduce Kate Moss to America.&lt;/p&gt;\r\n\r\n&lt;figure class='image'&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/image-000081220075049.png' width='357' /&gt;\r\n&lt;figcaption&gt;October 1968 by Hiro&lt;/figcaption&gt;\r\n&lt;/figure&gt;\r\n\r\n&lt;p&gt;The list of creative talent who launched their careers in Bazaar and contributed to the magazine is equally impressive. Editors like Bailey, Booth, Carmel Snow, Nancy White, Anthony T Mazzola, and Liz Tilberis all shepherded Bazaar during long, transformative periods. Creative and art directors like Alexey Brodovitch, Henry Wolf, Marvin Israel, Ruth Ansel, Bea Feitler, Fabien Baron, and Stephen Gan broke new ground and helped change the visual vocabulary of magazines. Artists like Ert&amp;eacute;, Christian &amp;ldquo;B&amp;eacute;b&amp;eacute;&amp;rdquo; B&amp;eacute;rard, Marcel Vert&amp;egrave;s, AM Cassandre, Man Ray, Jean Cocteau, Salvador Dal&amp;iacute;, and Andy Warhol all did&amp;nbsp;illustrations for Bazaar. Writers and editors like Vreeland, Daisy Fellowes, Gloria Guinness, Eugenia Sheppard, Carrie Donovan, Tonne Goodman, Paul Cavaco, Sarah Mower, Melanie Ward, and Carine Roitfeld brought in new perspectives on fashion. Photographers like Avedon, Martin Munk&amp;aacute;csi, Toni Frissell, Henri Cartier-Bresson, Louise Dahl-Wolfe, Lillian Bassman, Melvin Sokolsky, Hiro, Francesco Scavullo, Patrick Demarchelier, Peter Lindbergh,&lt;br /&gt;\r\nJean-Paul Goude, and Karl Lagerfeld, who shot for Bazaar, expanded the potential of fashion imagery.&lt;/p&gt;\r\n\r\n&lt;figure class='image'&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/image-005081220075325.png' width='365' /&gt;\r\n&lt;figcaption&gt;October 1963 by Hiro&lt;/figcaption&gt;\r\n&lt;/figure&gt;\r\n\r\n&lt;p&gt;The MAD show is firmly grounded in fashion, drawing upon the museum&amp;rsquo;s robust archive of more than 150,000 pieces. But the thread of Bazaar&amp;rsquo;s ongoing dialogue with fashion animates much of the material. The way Bazaar has covered fashion was undeniably shaped by the moment at which it was born. Patterned after a German publication called Der Bazar, Bazaar was originally conceived as a general interest weekly aimed at the women of the rising American leisure class that would cover fashion and the aristocratic social swirl in places like London, Paris, and Vienna, and offer advice on topics such as homemaking and etiquette alongside fiction and poetry. Under Mary Louise Booth&amp;rsquo;s leadership, Bazaar delivered glitzy coverage of the codes, clothes, manners, and modes of old-world high society, with a smattering of New York for good measure. But it also encouraged women to think more consciously about the roles that were being imposed upon them&amp;mdash;domestic and otherwise&amp;mdash;and even rethink aspects of their own lives and possibilities.&lt;/p&gt;\r\n\r\n&lt;figure class='image'&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/image-004081220075452.png' width='328' /&gt;\r\n&lt;figcaption&gt;October 1963 by Hiro&lt;/figcaption&gt;\r\n&lt;/figure&gt;\r\n\r\n&lt;p&gt;Bazaar was at once of its time and ahead of its time. An essay in the June 12, 1869 issue argued for &amp;ldquo;fairer laws for women, the opening to them of new avenues of employment, the gradual approximation to the just rule of equal wages for equal work, and the very general admission that in a few years all judicial distinctions between the rights of the two halves of humanity will be swept from the statute-books.&amp;rdquo; This was more than 50 years before the 19th amendment was ratified in 1920, guaranteeing women the right to vote.&lt;/p&gt;\r\n\r\n&lt;figure class='image'&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/image-006081220075616.png' width='311' /&gt;\r\n&lt;figcaption&gt;July 1958 by Gleb Derujinsky&lt;/figcaption&gt;\r\n&lt;/figure&gt;\r\n\r\n&lt;p&gt;&lt;br /&gt;\r\nIt wasn&amp;rsquo;t until the turn of the 20th century, as designers like Paul Poiret and later Coco Chanel, Madeleine Vionnet, Jeanne Lanvin, and Elsa Schiaparelli cast off the old strictures of the Victorian era, that Bazaar began to more closely resemble the magazine it is today. But Bazaar&amp;rsquo;s definition of fashion had already come to embody the spirit of what Carmel Snow would later refer to as &amp;ldquo;well-dressed women with well-dressed minds.&amp;rdquo; The question of what it means to live as a woman in the modern world has hovered over the magazine for 153 years&amp;mdash;and is one that&amp;rsquo;s at the centre of the MAD exhibition. &amp;ldquo;Visualise yourself as you looked on a beautiful autumn day last year,&amp;rdquo; Bazaar implored in the August 1947 issue. &amp;ldquo;There&amp;rsquo;s not much in the old picture that survives.&amp;rdquo;&lt;/p&gt;\r\n\r\n&lt;figure class='image'&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/image-001081220075700.png' width='318' /&gt;\r\n&lt;figcaption&gt;June 1964 by Hiro&lt;/figcaption&gt;\r\n&lt;/figure&gt;\r\n\r\n&lt;p&gt;In some ways, that is fashion: A powerful gust that blows through each season leaving a Rorschach of adjusted hemlines, reimagined silhouettes, and artistic, cultural, social, political, and economic implications in its wake. To Bazaar, though, the job of fashion magazines has never been just to describe the weather. It&amp;rsquo;s to be the wind.&lt;/p&gt;\r\n\r\n&lt;p style='text-align:justify; margin-bottom:8px'&gt;&lt;span style='font-size:11pt'&gt;&lt;span style='font-family:Calibri,sans-serif'&gt;Images: Courtesy mus&amp;eacute;e des arts d&amp;eacute;coratifs, Paris; Peter Llindbergh, Paris&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;figure class='image'&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/image-002081220075731.png' width='342' /&gt;\r\n&lt;figcaption&gt;March 1896 drawn by William H Broadley&lt;/figcaption&gt;\r\n&lt;/figure&gt;",
                      "amp_fulltext": "&lt;p&gt;By Stephen Mooallem&lt;/p&gt;\n\n&lt;p&gt;On February&amp;nbsp;28, the Mus&eacute;e des Arts D&eacute;coratifs in Paris will mark the reopening of its newly renovated fashion galleries with an exhibition devoted to Harper&rsquo;s Bazaar. First in Fashion will examine the history of fashion as it has unfolded in the pages of the magazine, spotlighting a collection of watershed moments and seismic shifts in the way we dress, think, and live as they were captured in&mdash;and, in some cases, instigated by&mdash;Bazaar. Overseen by MAD director Olivier Gabet and curators &Eacute;ric Pujalet-Pl&agrave;a and Marianne Le Galliard, with Bazaar&rsquo;s former editor in chief, Glenda Bailey, and design director, Elizabeth Hummer, the exhibition charts Bazaar&rsquo;s evolution from a 19th-century literary lifestyle journal that billed itself as &ldquo;a repository for fashion, pleasure, and instruction&rdquo; into the first modern fashion magazine.&lt;/p&gt;\n\n&lt;figure class=&quot;image&quot;&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/image-003081220074943.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;\n&lt;figcaption&gt;November 1992 by Peter Lindbergh&lt;/figcaption&gt;\n&lt;/figure&gt;\n\n&lt;p&gt;The name of the exhibition is fitting: Since its founding in 1867, Bazaar has been present for an epoch of &lsquo;firsts&rsquo; in fashion, as well as myriad creative, cultural, and social revolutions. Bazaar&mdash;or Bazar, as it was originally spelt&mdash;was the first American magazine to dedicate itself to exploring the lives of women through fashion. Bazaar&rsquo;s first editor, Mary Louise Booth, was involved in the women&rsquo;s suffrage movement, and it was one of the first mainstream publications to advocate for voting rights, equal pay, and educational and professional opportunities for women. Bazaar was the first magazine to look at fashion within the context of art and culture, and the first to depict women in fashion in real environments, moving through real spaces in real-time. It was the first magazine to commission Richard Avedon, and the first to anoint denim and bikinis as fashion (the latter of which Diana Vreeland deemed &ldquo;the most important thing since the atom bomb&rdquo;). Bazaar was also the first to celebrate Dior&rsquo;s New Look, the first to put a man on its cover, and the first to introduce Kate Moss to America.&lt;/p&gt;\n\n&lt;figure class=&quot;image&quot;&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/image-000081220075049.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;\n&lt;figcaption&gt;October 1968 by Hiro&lt;/figcaption&gt;\n&lt;/figure&gt;\n\n&lt;p&gt;The list of creative talent who launched their careers in Bazaar and contributed to the magazine is equally impressive. Editors like Bailey, Booth, Carmel Snow, Nancy White, Anthony T Mazzola, and Liz Tilberis all shepherded Bazaar during long, transformative periods. Creative and art directors like Alexey Brodovitch, Henry Wolf, Marvin Israel, Ruth Ansel, Bea Feitler, Fabien Baron, and Stephen Gan broke new ground and helped change the visual vocabulary of magazines. Artists like Ert&eacute;, Christian &ldquo;B&eacute;b&eacute;&rdquo; B&eacute;rard, Marcel Vert&egrave;s, AM Cassandre, Man Ray, Jean Cocteau, Salvador Dal&iacute;, and Andy Warhol all did&amp;nbsp;illustrations for Bazaar. Writers and editors like Vreeland, Daisy Fellowes, Gloria Guinness, Eugenia Sheppard, Carrie Donovan, Tonne Goodman, Paul Cavaco, Sarah Mower, Melanie Ward, and Carine Roitfeld brought in new perspectives on fashion. Photographers like Avedon, Martin Munk&aacute;csi, Toni Frissell, Henri Cartier-Bresson, Louise Dahl-Wolfe, Lillian Bassman, Melvin Sokolsky, Hiro, Francesco Scavullo, Patrick Demarchelier, Peter Lindbergh,&lt;br&gt;\nJean-Paul Goude, and Karl Lagerfeld, who shot for Bazaar, expanded the potential of fashion imagery.&lt;/p&gt;\n\n&lt;figure class=&quot;image&quot;&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/image-005081220075325.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;\n&lt;figcaption&gt;October 1963 by Hiro&lt;/figcaption&gt;\n&lt;/figure&gt;\n\n&lt;p&gt;The MAD show is firmly grounded in fashion, drawing upon the museum&rsquo;s robust archive of more than 150,000 pieces. But the thread of Bazaar&rsquo;s ongoing dialogue with fashion animates much of the material. The way Bazaar has covered fashion was undeniably shaped by the moment at which it was born. Patterned after a German publication called Der Bazar, Bazaar was originally conceived as a general interest weekly aimed at the women of the rising American leisure class that would cover fashion and the aristocratic social swirl in places like London, Paris, and Vienna, and offer advice on topics such as homemaking and etiquette alongside fiction and poetry. Under Mary Louise Booth&rsquo;s leadership, Bazaar delivered glitzy coverage of the codes, clothes, manners, and modes of old-world high society, with a smattering of New York for good measure. But it also encouraged women to think more consciously about the roles that were being imposed upon them&mdash;domestic and otherwise&mdash;and even rethink aspects of their own lives and possibilities.&lt;/p&gt;\n\n&lt;figure class=&quot;image&quot;&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/image-004081220075452.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;\n&lt;figcaption&gt;October 1963 by Hiro&lt;/figcaption&gt;\n&lt;/figure&gt;\n\n&lt;p&gt;Bazaar was at once of its time and ahead of its time. An essay in the June 12, 1869 issue argued for &ldquo;fairer laws for women, the opening to them of new avenues of employment, the gradual approximation to the just rule of equal wages for equal work, and the very general admission that in a few years all judicial distinctions between the rights of the two halves of humanity will be swept from the statute-books.&rdquo; This was more than 50 years before the 19th amendment was ratified in 1920, guaranteeing women the right to vote.&lt;/p&gt;\n\n&lt;figure class=&quot;image&quot;&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/image-006081220075616.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;\n&lt;figcaption&gt;July 1958 by Gleb Derujinsky&lt;/figcaption&gt;\n&lt;/figure&gt;\n\n&lt;p&gt;&lt;br&gt;\nIt wasn&rsquo;t until the turn of the 20th century, as designers like Paul Poiret and later Coco Chanel, Madeleine Vionnet, Jeanne Lanvin, and Elsa Schiaparelli cast off the old strictures of the Victorian era, that Bazaar began to more closely resemble the magazine it is today. But Bazaar&rsquo;s definition of fashion had already come to embody the spirit of what Carmel Snow would later refer to as &ldquo;well-dressed women with well-dressed minds.&rdquo; The question of what it means to live as a woman in the modern world has hovered over the magazine for 153 years&mdash;and is one that&rsquo;s at the centre of the MAD exhibition. &ldquo;Visualise yourself as you looked on a beautiful autumn day last year,&rdquo; Bazaar implored in the August 1947 issue. &ldquo;There&rsquo;s not much in the old picture that survives.&rdquo;&lt;/p&gt;\n\n&lt;figure class=&quot;image&quot;&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/image-001081220075700.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;\n&lt;figcaption&gt;June 1964 by Hiro&lt;/figcaption&gt;\n&lt;/figure&gt;\n\n&lt;p&gt;In some ways, that is fashion: A powerful gust that blows through each season leaving a Rorschach of adjusted hemlines, reimagined silhouettes, and artistic, cultural, social, political, and economic implications in its wake. To Bazaar, though, the job of fashion magazines has never been just to describe the weather. It&rsquo;s to be the wind.&lt;/p&gt;\n\n&lt;p&gt;&lt;span&gt;&lt;span&gt;Images: Courtesy mus&eacute;e des arts d&eacute;coratifs, Paris; Peter Llindbergh, Paris&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;figure class=&quot;image&quot;&gt;&lt;amp-img src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/image-002081220075731.png&quot; alt=&quot;&quot; height=&quot;425&quot; width=&quot;650&quot; layout=&quot;responsive&quot; heights=&quot;(min-width:500px) 200px, 80%&quot;&gt;&lt;/amp-img&gt;\n&lt;figcaption&gt;March 1896 drawn by William H Broadley&lt;/figcaption&gt;\n&lt;/figure&gt;",
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
                      "url": "/culture/story/1st-in-fashion-2000",
                      "full_url": "https://alpha-harperbazar.intoday.in/culture/story/1st-in-fashion-2000",
                      "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/culture/story/1st-in-fashion-2000",
                      "slug": "1st-in-fashion",
                      "excerpt": "A new exhibition at the Musée des Arts Décoratifs in Paris explores the history of fashion through the lens of Harper’s Bazaar",
                      "publish_up": "2020-12-11 17:48:00",
                      "publish_down": null,
                      "metatitle": "1st In Fashion",
                      "metadesc": "A new exhibition at the Musée des Arts Décoratifs in Paris explores the history of fashion through the lens of Harper’s Bazaar\r\n\r\nBy Stephen Mooallem",
                      "metakey": "",
                      "highlights": "",
                      "rating": "",
                      "review_title": "",
                      "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "review_pros": "",
                      "review_cons": "",
                      "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/art-exhibitions111220054418.jpeg",
                      "feature_image_data": {
                        "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/art-exhibitions111220054418.jpeg",
                        "title": "art-exhibitions111220054418",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      },
                      "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=400:450",
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
                      "created_at": "2020-12-08T14:28:06.000000Z",
                      "created_by_id": "13",
                      "created_by_name": "prachi goyal",
                      "cache_time": "29/04/2021 02:40:59 pm",
                      "updated_at": "2020-12-11 17:48:32",
                      "galleries": "",
                      "video_node": "",
                      "previous_url_id": "1999"
                    },
                    {
                      "content_id": 2002,
                      "apps_id": "1",
                      "post_types_id": "2",
                      "content_type": "story",
                      "headline": "Wolf Hall Trilogy Author Hilary Mantel Reveal What's Exciting in Her Final Book",
                      "introtext": "With her long-awaited novel 'The Mirror &amp; the Light', Hilary Mantel reveals the final chapter of her phenomenal trilogy, reimagining the scandal and decadence of the Tudors. In an India exclusive, she talks to Bazaar about her controversial protagonist, the power of women in the court, and the boundaries of historical fiction",
                      "fulltext": "&lt;p&gt;&lt;strong&gt;The trilogy charts the rise and fall of Thomas Cromwell, a powerful advisor to King Henry VIII. What made you focus on him, and what did you hope to convey in a larger sense through his story?&lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;The larger purpose is always to tell a story that bridges understanding between different ages and different cultures. Thomas Cromwell&amp;rsquo;s biography is one that anyone can understand: A man from an obscure background uses his resources to achieve power and wealth. It&amp;rsquo;s easy to grasp, on an intellectual and emotional level. But what holds readers is the specific: This time, this place, this character, this particular set of circumstances. All the time as an author you are trying to move between the two: The universal, and the very local and particular. You are looking for a character and a narrative curve that will allow you to make that move. Thomas Cromwell seemed to be a richly ambiguous character. Is he just the sum of his actions? Is it possible to understand what drove him? And given that he was a central figure in one of the most charged and fraught decades of English history, why was he so absent from the page, in novels, drama, biography?&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;You&amp;rsquo;ve spent over a decade with Thomas Cromwell&amp;mdash;are you ready to let go of the character?&lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;No question of letting go&amp;mdash;I am now absorbed in creating the stage version.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;How did the theatre adaptations of the previous two books influence your experience of writing the third?&lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Working on the theatre versions made me brisker. That may seem to be an odd word to apply to a big book. But what matters is not the word count, but the pace and power within each scene.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;The earlier books in the trilogy&amp;mdash;Wolf Hall and Bring Up The Bodies&amp;mdash;both won the Man Booker Prize. Did that add pressure to The Mirror &amp;amp; the Light?&lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;As I publish, yes, I feel the pressure&amp;mdash;but when I was writing, I had no thought but the scene in my head.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;As an author, what appeals to you most about historical fiction?&lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;I think you write what you want to read. As a young reader, I loved history and literature equally, so I was always looking for good historical fiction. I also wanted ghost stories&amp;mdash;maybe the two forms are not so different. Very early, I noticed that certain themes and personalities were missing from the fictional picture. Both in the manner and in content, historical fiction seemed to be conservative. I wanted to challenge that.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/130-131-hot-list-crowning-glory-1111220051626.jpeg' width='343' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;What do you hope to add to the story by fictionalising certain elements? &lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Fiction is not icing on the cake; it is the cake. Whatever era you look at, the record is incomplete and subject to different interpretations; the story is owned by whoever is telling it. The project of historical fiction is a radical reimagining. You throw out what you think you know, then look at the record afresh. Then you try to work out what is missing, and why, and ask yourself what could have existed in the blank spaces.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;How do you maintain the balance between dramatisation and the truth, and authenticity in writing about real events?&lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;I work with the facts as far as they go, and try to get the best facts I can. Within the limits of my scholarship, I do have rules. I don&amp;rsquo;t put people where they couldn&amp;rsquo;t be. I don&amp;rsquo;t put speeches in their mouths unless there are no recorded words to draw on. I make sure they operate within a world view and frame of reference that they could have held. But there are many kinds of historical fiction. I would apply these rules across the board, even to my own work. For instance, my novel The Giant O&amp;rsquo;Brien is closer to myth than sober fact, and works differently. It&amp;rsquo;s closer to a song or a poem.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;What does your research and self-education entail? Does it happen alongside the writing process or do you view them as two separate parts?&lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;The groundwork is becoming familiar with a culture through art, music, religion, science. But research and writing can&amp;rsquo;t be separate, because until I write a specific section, I don&amp;rsquo;t know what I need to know. Curiosity grows through the life of a project.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;How do you approach writing about women during a time when they had very little agency and control? &lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;One of the attractions of writing about the court of Henry VIII is that women have vital power and agency. Only a woman can give Henry the heir he craves. But which woman? It&amp;rsquo;s the question that dominates his reign&lt;/p&gt;",
                      "amp_fulltext": "&lt;p&gt;&lt;strong&gt;The trilogy charts the rise and fall of Thomas Cromwell, a powerful advisor to King Henry VIII. What made you focus on him, and what did you hope to convey in a larger sense through his story?&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;The larger purpose is always to tell a story that bridges understanding between different ages and different cultures. Thomas Cromwell&rsquo;s biography is one that anyone can understand: A man from an obscure background uses his resources to achieve power and wealth. It&rsquo;s easy to grasp, on an intellectual and emotional level. But what holds readers is the specific: This time, this place, this character, this particular set of circumstances. All the time as an author you are trying to move between the two: The universal, and the very local and particular. You are looking for a character and a narrative curve that will allow you to make that move. Thomas Cromwell seemed to be a richly ambiguous character. Is he just the sum of his actions? Is it possible to understand what drove him? And given that he was a central figure in one of the most charged and fraught decades of English history, why was he so absent from the page, in novels, drama, biography?&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;You&rsquo;ve spent over a decade with Thomas Cromwell&mdash;are you ready to let go of the character?&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;No question of letting go&mdash;I am now absorbed in creating the stage version.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;How did the theatre adaptations of the previous two books influence your experience of writing the third?&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;Working on the theatre versions made me brisker. That may seem to be an odd word to apply to a big book. But what matters is not the word count, but the pace and power within each scene.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;The earlier books in the trilogy&mdash;Wolf Hall and Bring Up The Bodies&mdash;both won the Man Booker Prize. Did that add pressure to The Mirror &amp;amp; the Light?&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;As I publish, yes, I feel the pressure&mdash;but when I was writing, I had no thought but the scene in my head.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;As an author, what appeals to you most about historical fiction?&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;I think you write what you want to read. As a young reader, I loved history and literature equally, so I was always looking for good historical fiction. I also wanted ghost stories&mdash;maybe the two forms are not so different. Very early, I noticed that certain themes and personalities were missing from the fictional picture. Both in the manner and in content, historical fiction seemed to be conservative. I wanted to challenge that.&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/130-131-hot-list-crowning-glory-1111220051626.jpeg&quot; width=&quot;1116&quot; height=&quot;1706&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;What do you hope to add to the story by fictionalising certain elements? &lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;Fiction is not icing on the cake; it is the cake. Whatever era you look at, the record is incomplete and subject to different interpretations; the story is owned by whoever is telling it. The project of historical fiction is a radical reimagining. You throw out what you think you know, then look at the record afresh. Then you try to work out what is missing, and why, and ask yourself what could have existed in the blank spaces.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;How do you maintain the balance between dramatisation and the truth, and authenticity in writing about real events?&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;I work with the facts as far as they go, and try to get the best facts I can. Within the limits of my scholarship, I do have rules. I don&rsquo;t put people where they couldn&rsquo;t be. I don&rsquo;t put speeches in their mouths unless there are no recorded words to draw on. I make sure they operate within a world view and frame of reference that they could have held. But there are many kinds of historical fiction. I would apply these rules across the board, even to my own work. For instance, my novel The Giant O&rsquo;Brien is closer to myth than sober fact, and works differently. It&rsquo;s closer to a song or a poem.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;What does your research and self-education entail? Does it happen alongside the writing process or do you view them as two separate parts?&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;The groundwork is becoming familiar with a culture through art, music, religion, science. But research and writing can&rsquo;t be separate, because until I write a specific section, I don&rsquo;t know what I need to know. Curiosity grows through the life of a project.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;How do you approach writing about women during a time when they had very little agency and control? &lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;One of the attractions of writing about the court of Henry VIII is that women have vital power and agency. Only a woman can give Henry the heir he craves. But which woman? It&rsquo;s the question that dominates his reign&lt;/p&gt;",
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
                      "url": "/culture/story/crowning-glory-2002",
                      "full_url": "https://alpha-harperbazar.intoday.in/culture/story/crowning-glory-2002",
                      "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/culture/story/crowning-glory-2002",
                      "slug": "crowning-glory",
                      "excerpt": "With her long-awaited novel 'The Mirror &amp; the Light', Hilary Mantel reveals the final chapter of her phenomenal trilogy, reimagining the scandal and decadence of the Tudors. In an India exclusive, she talks to Bazaar about her controversial protagonist, the power of women in the court, and the boundaries of historical fiction",
                      "publish_up": "2020-12-11 17:22:00",
                      "publish_down": null,
                      "metatitle": "Crowning Glory",
                      "metadesc": "With her long-awaited novel The Mirror &amp; the Light, Hilary Mantel reveals the final chapter of her phenomenal trilogy, reimagining the scandal and decadence of the Tudors. In an India exclusive, she talks to Bazaar about her controversial protagonist, the",
                      "metakey": "",
                      "highlights": "",
                      "rating": "",
                      "review_title": "",
                      "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "review_pros": "",
                      "review_cons": "",
                      "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/chromwell111220052254.jpeg",
                      "feature_image_data": {
                        "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/chromwell111220052254.jpeg",
                        "title": "chromwell111220052254",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      },
                      "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=400:450",
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
                      "created_at": "2020-12-08T15:17:36.000000Z",
                      "created_by_id": "13",
                      "created_by_name": "prachi goyal",
                      "cache_time": "29/04/2021 02:40:59 pm",
                      "updated_at": "2020-12-11 17:23:28",
                      "galleries": "",
                      "video_node": "",
                      "previous_url_id": "2001"
                    },
                    {
                      "content_id": 2003,
                      "apps_id": "1",
                      "post_types_id": "2",
                      "content_type": "story",
                      "headline": "Why You Need to Read Aravind Adiga New Novel 'Amnesty'",
                      "introtext": "In his latest novel, 'Amnesty', Booker-prize winner Aravind Adiga narrates the experience of being a coloured immigrant in a foreign land.",
                      "fulltext": "&lt;p style='text-align:justify; margin-bottom:8px'&gt;&lt;span style='font-size:11pt'&gt;&lt;span style='font-family:Calibri,sans-serif'&gt;Amnesty’s epigraph borrows from an inscription on an arch in Chinatown, Sydney. It reads:&lt;/span&gt;&lt;/span&gt; “Within the four seas all men are brothers”. Irony eclipses idealism—in today’s world, this is a widely incongruous thought. The year 2020 began with Brexit finally becoming a reality, intensifying the fraught position of the non-white immigrant in the West. And as Britain’s immigration laws remain in a state of flux, its lawmakers see a blueprint in the hardline anti-immigrant regulations of Australia, a country that is currently interning thousands of migrants. Under such political affairs then, Aravind Adiga’s fourth novel is well-timed.&lt;/p&gt;\r\n\r\n&lt;p style='text-align:justify; margin-bottom:8px'&gt;&lt;br /&gt;\r\n“What it means to be brown, in a white country, is a central theme of the novel,” he says. “Besides South Africa, nowhere else was race—whiteness—as integral to the construction of national identity in Britain’s colonies as in Australia. Even though it is now very multicultural, it is impossible to write a novel set in Sydney without factoring in the ever-present legacy of race.” This burden of race, of being different, is a reality that our protagonist is all too conscious of. Dhananjaya Rajaratnam is a Sri Lankan Tamil, and a man of many sobriquets: Danny, Honest Danny, Incredible Cleaner Danny. His hair is streaked golden, his accent ‘nearly’ Australian, and his everyday bearing guided by a set of proscriptions—‘Never walk and eat in daylight. They see you’. In four years of working as a cleaner, living in the stockroom of a grocery store, Danny has ingested this hard pill—at all times, the brown immigrant must be invisible. This is also why the author decided early on that all his protagonists would be South Asian.&lt;/p&gt;\r\n\r\n&lt;p style='text-align:justify; margin-bottom:8px'&gt;Amnesty takes place within the scope of one day, as the events are set into motion with the murder of Danny’s client, the Indian-Australian Radha Thomas. Being the only one to know of the killer—her lover, Dr Prakash—Danny is faced with a conundrum that becomes the narratorial pivot: Should he report Prakash at the cost of being deported? In Prakash, Danny is threatened by someone from his own race, only differing in the legality&lt;br /&gt;\r\nof their being. Even as Adiga explores race and migration through the wider binary of ‘white’ and ‘coloured’, he draws attention to divergent categories of immigrants along margins of class and generations: “Australia has developed a permanent two-tiered multicultural society:&lt;br /&gt;\r\nIn the top slab, you have many successful South Asians who have often married white&lt;br /&gt;\r\nAustralians. These are also the only people white Australians notice when they talk of&lt;br /&gt;\r\nthemselves as a ‘race-blind’ society. But there is a growing second tier in this multi-racial&lt;br /&gt;\r\nsociety—an enormous and permanent brown underclass.”&lt;br /&gt;\r\nAravind Adiga’s family emigrated to Sydney during his teenage years. After completing&lt;br /&gt;\r\nschool there, he went on to graduate from Columbia University, New York—a migration trajectory quite different from that of Danny’s. “In India, would I be bothered by the exploitation of international students? I don’t know. But in Australia, I am always a minority, always a brown man, and always observing—and being pricked by—things I see happening to South Asians around me... Every brown man in Sydney, rich or poor, has to beg one day or the other, Danny realises. That line is at the heart of Amnesty. The novel is also an exploration of masculinity—what it is to be a brown man in a part of the world where the prevailing culture tries to emasculate you, regardless of your economic status.”&lt;br /&gt;\r\nIn Adiga’s writing, fiction runs concurrent to fact. And as is the nature of reality, answers are never self-evident. Danny’s experience exists within a nexus of several migrant stories—Malaysian classmates who pick fruit, the Japanese-American ‘Abe the abseiler’—and until the very end, uncertainty haunts the narrative. “Amnesty is not a novel about reconciliation between the South Asian protagonist and the Western society he has arrived in. Both in the West and in India, there is an insatiable appetite for successful immigrant stories: ‘Boy from Patiala becomes richest man in New Jersey!’” He adds, “I’ve got my eye on other kinds of stories.”&lt;/p&gt;\r\n\r\n&lt;p style='text-align:justify; margin-bottom:8px'&gt;&lt;img alt='' src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img66091220123415.jpeg' /&gt;&lt;/p&gt;",
                      "amp_fulltext": "&lt;p&gt;&lt;span&gt;&lt;span&gt;Amnesty&rsquo;s epigraph borrows from an inscription on an arch in Chinatown, Sydney. It reads:&lt;/span&gt;&lt;/span&gt;&amp;nbsp;&ldquo;Within the four seas all men are brothers&rdquo;. Irony eclipses idealism&mdash;in today&rsquo;s world, this is a widely incongruous thought. The year 2020 began with Brexit finally becoming a reality, intensifying the fraught position of the non-white immigrant in the West. And as Britain&rsquo;s immigration laws remain in a state of flux, its lawmakers see a blueprint in the hardline anti-immigrant regulations of Australia, a country that is currently interning thousands of migrants. Under such political affairs then, Aravind Adiga&rsquo;s fourth novel is well-timed.&lt;/p&gt;\n\n&lt;p&gt;&lt;br&gt;\n&ldquo;What it means to be brown, in a white country, is a central theme of the novel,&rdquo; he says. &ldquo;Besides South Africa, nowhere else was race&mdash;whiteness&mdash;as integral to the construction of national identity in Britain&rsquo;s colonies as in Australia. Even though it is now very multicultural, it is impossible to write a novel set in Sydney without factoring in the ever-present legacy of race.&rdquo; This burden of race, of being different, is a reality that our protagonist is all too conscious of. Dhananjaya Rajaratnam is a Sri Lankan Tamil, and a man of many sobriquets: Danny, Honest Danny, Incredible Cleaner Danny. His hair is streaked golden, his accent &lsquo;nearly&rsquo; Australian, and his everyday bearing guided by a set of proscriptions&mdash;&lsquo;Never walk and eat in daylight. They see you&rsquo;. In four years of working as a cleaner, living in the stockroom of a grocery store, Danny has ingested this hard pill&mdash;at all times, the brown immigrant must be invisible. This is also why the author decided early on that all his protagonists would be South Asian.&lt;/p&gt;\n\n&lt;p&gt;Amnesty takes place within the scope of one day, as the events are set into motion with the murder of Danny&rsquo;s client, the Indian-Australian Radha Thomas. Being the only one to know of the killer&mdash;her lover, Dr Prakash&mdash;Danny is faced with a conundrum that becomes the narratorial pivot: Should he report Prakash at the cost of being deported? In Prakash, Danny is threatened by someone from his own race, only differing in the legality&lt;br&gt;\nof their being. Even as Adiga explores race and migration through the wider binary of &lsquo;white&rsquo; and &lsquo;coloured&rsquo;, he draws attention to divergent categories of immigrants along margins of class and generations: &ldquo;Australia has developed a permanent two-tiered multicultural society:&lt;br&gt;\nIn the top slab, you have many successful South Asians who have often married white&lt;br&gt;\nAustralians. These are also the only people white Australians notice when they talk of&lt;br&gt;\nthemselves as a &lsquo;race-blind&rsquo; society. But there is a growing second tier in this multi-racial&lt;br&gt;\nsociety&mdash;an enormous and permanent brown underclass.&rdquo;&lt;br&gt;\nAravind Adiga&rsquo;s family emigrated to Sydney during his teenage years. After completing&lt;br&gt;\nschool there, he went on to graduate from Columbia University, New York&mdash;a migration trajectory quite different from that of Danny&rsquo;s. &ldquo;In India, would I be bothered by the exploitation of international students? I don&rsquo;t know. But in Australia, I am always a minority, always a brown man, and always observing&mdash;and being pricked by&mdash;things I see happening to South Asians around me... Every brown man in Sydney, rich or poor, has to beg one day or the other, Danny realises. That line is at the heart of Amnesty. The novel is also an exploration of masculinity&mdash;what it is to be a brown man in a part of the world where the prevailing culture tries to emasculate you, regardless of your economic status.&rdquo;&lt;br&gt;\nIn Adiga&rsquo;s writing, fiction runs concurrent to fact. And as is the nature of reality, answers are never self-evident. Danny&rsquo;s experience exists within a nexus of several migrant stories&mdash;Malaysian classmates who pick fruit, the Japanese-American &lsquo;Abe the abseiler&rsquo;&mdash;and until the very end, uncertainty haunts the narrative. &ldquo;Amnesty is not a novel about reconciliation between the South Asian protagonist and the Western society he has arrived in. Both in the West and in India, there is an insatiable appetite for successful immigrant stories: &lsquo;Boy from Patiala becomes richest man in New Jersey!&rsquo;&rdquo; He adds, &ldquo;I&rsquo;ve got my eye on other kinds of stories.&rdquo;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img66091220123415.jpeg&quot; width=&quot;749&quot; height=&quot;1093&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;",
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
                      "url": "/culture/story/a-long-way-from-home-2003",
                      "full_url": "https://alpha-harperbazar.intoday.in/culture/story/a-long-way-from-home-2003",
                      "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/culture/story/a-long-way-from-home-2003",
                      "slug": "a-long-way-from-home",
                      "excerpt": "In his latest novel, 'Amnesty', Booker-prize winner Aravind Adiga narrates the experience of being a coloured immigrant in a foreign land.",
                      "publish_up": "2020-12-11 17:05:00",
                      "publish_down": "0000-00-00 00:00:00",
                      "metatitle": "A Long Way From Home",
                      "metadesc": "In his latest novel, Amnesty, Booker-prize winner Aravind Adiga narrates the\r\nexperience of being a coloured immigrant in a foreign land",
                      "metakey": "",
                      "highlights": "",
                      "rating": "",
                      "review_title": "",
                      "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "review_pros": "",
                      "review_cons": "",
                      "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/whatsapp-image-2020-12-09-at-123519-am091220123557.jpeg",
                      "feature_image_data": {
                        "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/whatsapp-image-2020-12-09-at-123519-am091220123557.jpeg",
                        "title": "whatsapp-image-2020-12-09-at-123519-am091220123557",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      },
                      "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=400:450",
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
                      "created_at": "2020-12-08T15:23:28.000000Z",
                      "created_by_id": "13",
                      "created_by_name": "prachi goyal",
                      "cache_time": "29/04/2021 02:40:59 pm",
                      "updated_at": "2021-04-13 18:13:32",
                      "galleries": "",
                      "video_node": "",
                      "previous_url_id": "2002"
                    }
                  ]
                }
              }
            }
          },
          {
            "id": 17,
            "content": "{\"multi_data_title\":\"Celebrity\",\"multi_data_widget_id\":\"2\",\"multi_data_widget_extra\":\"total_record=4|widget_template=celebrity|widget_class=fashion Celebrity\",\"multi_data_widget_template\":\"\"}",
            "content_data": {
              "title": "Celebrity",
              "multi_data_widget_id": "2",
              "multi_data_widget_extra": "total_record=4&widget_template=celebrity&widget_class=fashion Celebrity",
              "multi_data_widget_template": "",
              "multi_data_widget_extra_config": {
                "total_record": "4",
                "widget_template": "celebrity",
                "widget_class": "fashion Celebrity"
              },
              "widget_data": {
                "id": 2,
                "title": "Latest Celebrity",
                "slug": "latest-celebrity",
                "description": "Latest Celebrity",
                "type": "latest_article",
                "content": "{\"related_content_type\":\"\",\"category_id\":\"2\",\"no_of_records\":\"10\"}",
                "published": "1",
                "created_at": "2020-11-18T12:35:38.000000Z",
                "updated_at": "2020-11-18T12:35:45.000000Z",
                "deleted_at": null,
                "widget_data": {
                  "related_content_type_id": "",
                  "related_content_type_name": "",
                  "category_id": "2",
                  "category_name": "celebrity",
                  "section_level": 0,
                  "no_of_records": "10",
                  "main_data": [
                    {
                      "content_id": 1990,
                      "apps_id": "1",
                      "post_types_id": "2",
                      "content_type": "story",
                      "headline": "Designers Abu Sandeep on New Terrains, Old Crafts and Making Their Own Future",
                      "introtext": "Bazaar India chats with ace designers Abu Jani and Sandeep Khosla about their over 30-year tryst with Indian fashion and their vision for the future.",
                      "fulltext": "&lt;p&gt;In 1989 actor Dimple Kapadia, star of the film Bobby (1973), was photographed in a campaign wearing a velvet, high-collared men&amp;rsquo;s sherwani. The image was for designers Abu Jani and Sandeep Khosla, who had opened their first store, &lt;em&gt;Mata Hari&lt;/em&gt;, just three years before in 1986 in Juhu, Mumbai. The gender-bending sherwani might be hailed as cutting- edge in the current conversations about gender-fluid dressing when images of women in power suits and men in skirts still get feted. But for the Mumbai-based duo, designing is never according to gender; or even age, sexual orientation, or any of the other categories we&amp;rsquo;ve constructed for ourselves. &amp;ldquo;It&amp;rsquo;s about beauty,&amp;rdquo; says Jani, &amp;ldquo;that&amp;rsquo;s what we&amp;rsquo;re always looking for. There has to be emotion and poetry behind what you do.&amp;rdquo; This tireless pursuit of beauty has led the longtime partners and colleagues to become masters of craft. Their work is defined by detailed threadwork embroideries&amp;mdash;from subtle white on white &lt;em&gt;chikankari&lt;/em&gt;, to intricate aari, shimmering real gold or silver zardozi, metallic &lt;em&gt;mukaish &lt;/em&gt;patterns, and graphic use of mirrorwork. On lavish bridal lehengas, saris, and voluminous&lt;em&gt; anarkalis&lt;/em&gt;, their colourful patterns demonstrate the skill and painstaking hours of work that go into each hand-stitched piece.&lt;/p&gt;\r\n\r\n&lt;p&gt;Just one skirt, for example, embroidered in Tharad&amp;mdash; a region in Gujarat known for its unique threadwork&amp;mdash; can take upto six months to finish. They push their&lt;em&gt; karigars &lt;/em&gt;to excel, champion the purity of age-old techniques, and help maintain the craft&amp;rsquo;s status as covetable luxury. But it&amp;rsquo;s the uncertain future of these very crafts that is making the designers pause for thought. &amp;ldquo;We stand to lose everything to machines if coming generations don&amp;rsquo;t continue to treasure the beauty and refinement of the hand-crafted. Throughout history, Indians have been patrons of luxury and deeply appreciative of the textiles, weaves, and embroideries of India. Now our youth must carry forth this patronage,&amp;rdquo; says Khosla. &amp;ldquo;Crafts die out when they are no longer financially viable to practice. We need to make these skills not merely viable but profitable, by creating contemporary expressions of them that will find a market in India and across the globe. At the heart of all of this is the artisan, the embroiderer, or weaver who must&amp;nbsp;be valued and remunerated, empowered and trained to see crafts as a lucrative and respected profession.The next generation isn&amp;rsquo;t interested in doing what their parents did. You cannot treat artisans like cheap labour. Unless we really nurture the craft and respect the craftspeople of this country, we will lose it all.&amp;rdquo; Thirty-three years since they founded their label, the pair is rethinking how to grow. &amp;ldquo;When we started out it was just two of us scrambling to survive, impatient, overflowing with ideas of what we wanted to create. Now we have to become masters of marketing and share what we&amp;rsquo;ve done with the world,&amp;rdquo; adds Khosla.&lt;/p&gt;\r\n\r\n&lt;p&gt;In the last few years they have launched multiple sub-brands and collaborations. From the western line Khosla Jani, launched in 2014, to their diffusion label ASAL, 2016, or the most recent expansion Gulabo, 2018, which features breezy cotton with light touches of the brand&amp;rsquo;s signature embroideries. &amp;ldquo;The need of the hour is to get our work out there and make it more accessible,&amp;rdquo; says Jani. &amp;ldquo;It&amp;rsquo;s also exciting to think of new, innovative ways to work with the same techniques that we have used for over 30 years.&amp;rdquo;&lt;/p&gt;\r\n\r\n&lt;p&gt;The two met for the first time in August 1986, in Mumbai through the designer Xerxes Bhathena. It took just one shared taxi ride home to cement their partnership. Together, they have created everything from furniture to wedding d&amp;eacute;cor (the first wedding they designed was that of Shweta Bachchan and Nikhil Nanda in 1997), and jewellery to footwear. They have accumulated fans in many of Bollywood&amp;rsquo;s first families&amp;mdash;from the Bachchans to the Kapoors; dressed Oscar winners like Judi Dench and their work has even been featured in the James Bond film,&lt;/p&gt;\r\n\r\n&lt;p&gt;The World Is Not Enough (1999). &amp;ldquo;In his previous life, Abu was definitely a maharaja,&amp;rdquo; says Khosla. &amp;ldquo;That&amp;rsquo;s where our love for drama and luxury comes from. I was not a maharaja, but I was somewhere in that court, having fun, doing some creative nonsense.&amp;rdquo; That love for drama continues on the runway. Take last October&amp;rsquo;s big anniversary show which took place in Mumbai. The models stared down the cameras through space-age visors, twirling in their skirts, and dancing to the music. Even the men vogued and flexed in pieces from the new menswear line, Mard. The casting lineup included their favourite models Anna Bredmeyer, now 60, and Noyonika Chatterjee, in her 50s, along with other runway regulars. Previous shows have included dancers, musicians, and, once in 1995, even models Arjun Rampal and Milind Soman dancing in matching gold-spangled outfits. &amp;ldquo;The shows have to almost be a theatrical experience. The clothes demand that,&amp;rdquo; says Khosla. At a time when pessimism can take over, Khosla and Jani&amp;rsquo;s over-the-top, fabulously joyful presentations are a reminder that fashion can be a place for self-expression, indulgence and beauty for everyone.&lt;/p&gt;",
                      "amp_fulltext": "&lt;p&gt;In 1989 actor Dimple Kapadia, star of the film Bobby (1973), was photographed in a campaign wearing a velvet, high-collared men&rsquo;s sherwani. The image was for designers Abu Jani and Sandeep Khosla, who had opened their first store, &lt;em&gt;Mata Hari&lt;/em&gt;, just three years before in 1986 in Juhu, Mumbai. The gender-bending sherwani might be hailed as cutting- edge in the current conversations about gender-fluid dressing when images of women in power suits and men in skirts still get feted. But for the Mumbai-based duo, designing is never according to gender; or even age, sexual orientation, or any of the other categories we&rsquo;ve constructed for ourselves. &ldquo;It&rsquo;s about beauty,&rdquo; says Jani, &ldquo;that&rsquo;s what we&rsquo;re always looking for. There has to be emotion and poetry behind what you do.&rdquo; This tireless pursuit of beauty has led the longtime partners and colleagues to become masters of craft. Their work is defined by detailed threadwork embroideries&mdash;from subtle white on white &lt;em&gt;chikankari&lt;/em&gt;, to intricate aari, shimmering real gold or silver zardozi, metallic &lt;em&gt;mukaish &lt;/em&gt;patterns, and graphic use of mirrorwork. On lavish bridal lehengas, saris, and voluminous&lt;em&gt; anarkalis&lt;/em&gt;, their colourful patterns demonstrate the skill and painstaking hours of work that go into each hand-stitched piece.&lt;/p&gt;\n\n&lt;p&gt;Just one skirt, for example, embroidered in Tharad&mdash; a region in Gujarat known for its unique threadwork&mdash; can take upto six months to finish. They push their&lt;em&gt; karigars &lt;/em&gt;to excel, champion the purity of age-old techniques, and help maintain the craft&rsquo;s status as covetable luxury. But it&rsquo;s the uncertain future of these very crafts that is making the designers pause for thought. &ldquo;We stand to lose everything to machines if coming generations don&rsquo;t continue to treasure the beauty and refinement of the hand-crafted. Throughout history, Indians have been patrons of luxury and deeply appreciative of the textiles, weaves, and embroideries of India. Now our youth must carry forth this patronage,&rdquo; says Khosla. &ldquo;Crafts die out when they are no longer financially viable to practice. We need to make these skills not merely viable but profitable, by creating contemporary expressions of them that will find a market in India and across the globe. At the heart of all of this is the artisan, the embroiderer, or weaver who must&amp;nbsp;be valued and remunerated, empowered and trained to see crafts as a lucrative and respected profession.The next generation isn&rsquo;t interested in doing what their parents did. You cannot treat artisans like cheap labour. Unless we really nurture the craft and respect the craftspeople of this country, we will lose it all.&rdquo; Thirty-three years since they founded their label, the pair is rethinking how to grow. &ldquo;When we started out it was just two of us scrambling to survive, impatient, overflowing with ideas of what we wanted to create. Now we have to become masters of marketing and share what we&rsquo;ve done with the world,&rdquo; adds Khosla.&lt;/p&gt;\n\n&lt;p&gt;In the last few years they have launched multiple sub-brands and collaborations. From the western line Khosla Jani, launched in 2014, to their diffusion label ASAL, 2016, or the most recent expansion Gulabo, 2018, which features breezy cotton with light touches of the brand&rsquo;s signature embroideries. &ldquo;The need of the hour is to get our work out there and make it more accessible,&rdquo; says Jani. &ldquo;It&rsquo;s also exciting to think of new, innovative ways to work with the same techniques that we have used for over 30 years.&rdquo;&lt;/p&gt;\n\n&lt;p&gt;The two met for the first time in August 1986, in Mumbai through the designer Xerxes Bhathena. It took just one shared taxi ride home to cement their partnership. Together, they have created everything from furniture to wedding d&eacute;cor (the first wedding they designed was that of Shweta Bachchan and Nikhil Nanda in 1997), and jewellery to footwear. They have accumulated fans in many of Bollywood&rsquo;s first families&mdash;from the Bachchans to the Kapoors; dressed Oscar winners like Judi Dench and their work has even been featured in the James Bond film,&lt;/p&gt;\n\n&lt;p&gt;The World Is Not Enough (1999). &ldquo;In his previous life, Abu was definitely a maharaja,&rdquo; says Khosla. &ldquo;That&rsquo;s where our love for drama and luxury comes from. I was not a maharaja, but I was somewhere in that court, having fun, doing some creative nonsense.&rdquo; That love for drama continues on the runway. Take last October&rsquo;s big anniversary show which took place in Mumbai. The models stared down the cameras through space-age visors, twirling in their skirts, and dancing to the music. Even the men vogued and flexed in pieces from the new menswear line, Mard. The casting lineup included their favourite models Anna Bredmeyer, now 60, and Noyonika Chatterjee, in her 50s, along with other runway regulars. Previous shows have included dancers, musicians, and, once in 1995, even models Arjun Rampal and Milind Soman dancing in matching gold-spangled outfits. &ldquo;The shows have to almost be a theatrical experience. The clothes demand that,&rdquo; says Khosla. At a time when pessimism can take over, Khosla and Jani&rsquo;s over-the-top, fabulously joyful presentations are a reminder that fashion can be a place for self-expression, indulgence and beauty for everyone.&lt;/p&gt;",
                      "category_trail": [
                        {
                          "id": 2,
                          "title": "Celebrity",
                          "slug": "celebrity",
                          "parent": "0"
                        }
                      ],
                      "primary_section_id": 2,
                      "primary_section_name": "Celebrity",
                      "primary_section_slug": "celebrity",
                      "primary_id": "2",
                      "primary_id_name": "Celebrity",
                      "primary_id_slug": "celebrity",
                      "url": "/celebrity/story/it-takes-two-1990",
                      "full_url": "https://alpha-harperbazar.intoday.in/celebrity/story/it-takes-two-1990",
                      "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/celebrity/story/it-takes-two-1990",
                      "slug": "it-takes-two",
                      "excerpt": "Bazaar India chats with ace designers Abu Jani and Sandeep Khosla about their over 30-year tryst with Indian fashion and their vision for the future.",
                      "publish_up": "2020-12-21 19:23:00",
                      "publish_down": null,
                      "metatitle": "It Takes Two",
                      "metadesc": "Designers Abu Jani and Sandeep Khosla on new terrains, old crafts, and making their own future",
                      "metakey": "",
                      "highlights": "",
                      "rating": "",
                      "review_title": "",
                      "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "review_pros": "",
                      "review_cons": "",
                      "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/whatsapp-image-2020-12-02-at-102353-pm021220102801.jpeg",
                      "feature_image_data": {
                        "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/whatsapp-image-2020-12-02-at-102353-pm021220102801.jpeg",
                        "title": "whatsapp-image-2020-12-02-at-102353-pm021220102801",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      },
                      "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=400:450",
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
                      "created_at": "2020-12-02T06:38:42.000000Z",
                      "created_by_id": "13",
                      "created_by_name": "prachi goyal",
                      "cache_time": "29/04/2021 02:40:59 pm",
                      "updated_at": "2020-12-21 19:23:41",
                      "galleries": "",
                      "video_node": "",
                      "previous_url_id": "1988"
                    },
                    {
                      "content_id": 2004,
                      "apps_id": "1",
                      "post_types_id": "2",
                      "content_type": "story",
                      "headline": "The Roles Actor Janina Gavankar Enjoys Playing",
                      "introtext": "Before the release of her new film, 'The Way Back', Indian-American actor Janina Gavankar speaks to Bazaar about starring alongside Ben Affleck, directing her first-ever short film, and future plans in India",
                      "fulltext": "&lt;p&gt;An actor, singer, and director, the multi-talented Janina Gavankar is a woman of many avocations. Add die-hard gamer, tech-nerd, percussionist, and pianist. It is with this very resolve to diversify that the 39-year-old approaches new acting roles. Since we last met her for Bazaar&amp;rsquo;s December 2019 cover, she has directed her first short film Stucco in which she plays an agoraphobic woman and acted as a TV host in the series The Morning Show. Simultaneously, Gavankar was filming The Way Back, the upcoming sports drama which releases on March 6. &amp;ldquo;I feel such a heavy dose of gratitude for whatever I do, that it does not seem hard,&amp;rdquo; says the artist on an early morning call from Los Angeles.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;font face='Calibri, sans-serif'&gt;&lt;span style='font-size: 14.6667px;'&gt;&lt;b&gt;Harper&amp;#39;s Bazaar&lt;/b&gt;&lt;/span&gt;&lt;/font&gt;: What kind of roles do you most enjoy playing?&lt;br /&gt;\r\n&lt;strong&gt;&lt;span style='font-size:11.0pt'&gt;&lt;span calibri='' style='font-family:'&gt;Janina Gavankar&lt;/span&gt;&lt;/span&gt;&lt;/strong&gt;: I like playing terrible people because women don&amp;rsquo;t get to play them. Even when they do, we don&amp;rsquo;t spend enough time examining the complexities of such characters. And when I say &amp;lsquo;terrible people&amp;rsquo;, there are big quotes around that, because nobody is actually entirely bad. I am really interested in taking on such roles.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;HB:&amp;nbsp;&lt;/strong&gt;You play the ex-wife of a struggling alcoholic [played by Ben Affleck] in The Way Back. What facet of yourself are you most excited to show through your character?&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;JG:&lt;/strong&gt; A lot of times, female characters are judged for deciding to prioritise their own happiness over that of the male lead&amp;rsquo;s. When we meet my character, Angela, she has already made that decision. The writers have not demonised her for it and that&amp;rsquo;s how I&amp;rsquo;ve played her. I&amp;rsquo;m really happy that that&amp;rsquo;s how the world gets to see her.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;HB:&lt;/strong&gt; Affleck has publicly spoken about how this movie is deeply biographical for him. How did you approach a role that resonates so intimately with your co-star?&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;JG&lt;/strong&gt;: As actors, we hope that at least once in our careers, we can be part of a project where we can truly bring something of ourselves and be of service to our co-artists. With this&amp;nbsp;film, I got to experience that. Both Ben and I were going through some pretty rough times in our personal lives while we were shooting. We were very honest about them, and how they related to the characters we were playing. It made us understand one another quite intimately and because of that, I think we&amp;rsquo;ll have each other&amp;rsquo;s backs forever. We keep talking about how it was deeply emotional for both of us, and how we are so proud of what we have made. I hope you can tell when you watch the film.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;HB:&lt;/strong&gt; Stucco has been screening at international film festivals since August 2019. Tell us more about it.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;JG:&lt;/strong&gt; It&amp;rsquo;s a film that I wrote with my creative partner Russo Schelling. It deals with anxiety and mental health, and, at its best, examines the parts of yourself that you&amp;rsquo;re not proud of. We wanted to take some of the tough parts of our lives and build a story around a universal experience. We hope that it&amp;rsquo;s very relatable and that people reflect on their own personal experiences when viewing it. It&amp;rsquo;s a horror film, and what&amp;rsquo;s great about such a genre is that you can dive even deeper into the way you feel without using normal speech or tropes that you&lt;br /&gt;\r\nmay have seen a million times before.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;HB: &lt;/strong&gt;You&amp;rsquo;ve said in the recent past, &amp;ldquo;The more women we have behind the camera, the faster things will change for all of us&amp;rdquo;. In that sense, what does the film mean to you?&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;JG: &lt;/strong&gt;I have a female cinematographer. She&amp;rsquo;s Vietnamese-American and her perspective is not one that has saturated the industry yet. She is a unique voice in the space. In some ways, that&amp;rsquo;s unfortunate. But a positive way to look at it is to say, here&amp;rsquo;s a brilliant woman who can show us how she sees the world. We now have access to a rare and fresh perspective.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;HB:&amp;nbsp;&lt;/strong&gt;What&amp;rsquo;s next for you? Any plans in India?&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;JG: &lt;/strong&gt;Actually, yes! It&amp;rsquo;s pretty vague and I have not talked about it to anybody before this, but I plan to begin work on a feature film that will be shot in India. Nothing&amp;rsquo;s finalised yet, but the short answer is I&amp;rsquo;m dying to go back there.&lt;/p&gt;",
                      "amp_fulltext": "&lt;p&gt;An actor, singer, and director, the multi-talented Janina Gavankar is a woman of many avocations. Add die-hard gamer, tech-nerd, percussionist, and pianist. It is with this very resolve to diversify that the 39-year-old approaches new acting roles. Since we last met her for Bazaar&rsquo;s December 2019 cover, she has directed her first short film Stucco in which she plays an agoraphobic woman and acted as a TV host in the series The Morning Show. Simultaneously, Gavankar was filming The Way Back, the upcoming sports drama which releases on March 6. &ldquo;I feel such a heavy dose of gratitude for whatever I do, that it does not seem hard,&rdquo; says the artist on an early morning call from Los Angeles.&lt;/p&gt;\n\n&lt;p&gt;: What kind of roles do you most enjoy playing?&lt;br&gt;\n&lt;strong&gt;&lt;span&gt;&lt;span&gt;Janina Gavankar&lt;/span&gt;&lt;/span&gt;&lt;/strong&gt;: I like playing terrible people because women don&rsquo;t get to play them. Even when they do, we don&rsquo;t spend enough time examining the complexities of such characters. And when I say &lsquo;terrible people&rsquo;, there are big quotes around that, because nobody is actually entirely bad. I am really interested in taking on such roles.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;HB:&amp;nbsp;&lt;/strong&gt;You play the ex-wife of a struggling alcoholic [played by Ben Affleck] in The Way Back. What facet of yourself are you most excited to show through your character?&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;JG:&lt;/strong&gt; A lot of times, female characters are judged for deciding to prioritise their own happiness over that of the male lead&rsquo;s. When we meet my character, Angela, she has already made that decision. The writers have not demonised her for it and that&rsquo;s how I&rsquo;ve played her. I&rsquo;m really happy that that&rsquo;s how the world gets to see her.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;HB:&lt;/strong&gt; Affleck has publicly spoken about how this movie is deeply biographical for him. How did you approach a role that resonates so intimately with your co-star?&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;JG&lt;/strong&gt;: As actors, we hope that at least once in our careers, we can be part of a project where we can truly bring something of ourselves and be of service to our co-artists. With this&amp;nbsp;film, I got to experience that. Both Ben and I were going through some pretty rough times in our personal lives while we were shooting. We were very honest about them, and how they related to the characters we were playing. It made us understand one another quite intimately and because of that, I think we&rsquo;ll have each other&rsquo;s backs forever. We keep talking about how it was deeply emotional for both of us, and how we are so proud of what we have made. I hope you can tell when you watch the film.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;HB:&lt;/strong&gt; Stucco has been screening at international film festivals since August 2019. Tell us more about it.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;JG:&lt;/strong&gt; It&rsquo;s a film that I wrote with my creative partner Russo Schelling. It deals with anxiety and mental health, and, at its best, examines the parts of yourself that you&rsquo;re not proud of. We wanted to take some of the tough parts of our lives and build a story around a universal experience. We hope that it&rsquo;s very relatable and that people reflect on their own personal experiences when viewing it. It&rsquo;s a horror film, and what&rsquo;s great about such a genre is that you can dive even deeper into the way you feel without using normal speech or tropes that you&lt;br&gt;\nmay have seen a million times before.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;HB: &lt;/strong&gt;You&rsquo;ve said in the recent past, &ldquo;The more women we have behind the camera, the faster things will change for all of us&rdquo;. In that sense, what does the film mean to you?&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;JG: &lt;/strong&gt;I have a female cinematographer. She&rsquo;s Vietnamese-American and her perspective is not one that has saturated the industry yet. She is a unique voice in the space. In some ways, that&rsquo;s unfortunate. But a positive way to look at it is to say, here&rsquo;s a brilliant woman who can show us how she sees the world. We now have access to a rare and fresh perspective.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;HB:&amp;nbsp;&lt;/strong&gt;What&rsquo;s next for you? Any plans in India?&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;JG: &lt;/strong&gt;Actually, yes! It&rsquo;s pretty vague and I have not talked about it to anybody before this, but I plan to begin work on a feature film that will be shot in India. Nothing&rsquo;s finalised yet, but the short answer is I&rsquo;m dying to go back there.&lt;/p&gt;",
                      "category_trail": [
                        {
                          "id": 2,
                          "title": "Celebrity",
                          "slug": "celebrity",
                          "parent": "0"
                        }
                      ],
                      "primary_section_id": 2,
                      "primary_section_name": "Celebrity",
                      "primary_section_slug": "celebrity",
                      "primary_id": "2",
                      "primary_id_name": "Celebrity",
                      "primary_id_slug": "celebrity",
                      "url": "/celebrity/story/centre-stage-2004",
                      "full_url": "https://alpha-harperbazar.intoday.in/celebrity/story/centre-stage-2004",
                      "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/celebrity/story/centre-stage-2004",
                      "slug": "centre-stage",
                      "excerpt": "Before the release of her new film, 'The Way Back', Indian-American actor Janina Gavankar speaks to Bazaar about starring alongside Ben Affleck, directing her first-ever short film, and future plans in India",
                      "publish_up": "2020-12-11 16:36:00",
                      "publish_down": null,
                      "metatitle": "Centre Stage",
                      "metadesc": "Before the release of her new film, The Way Back, Indian-American actor Janina Gavankar speaks to Bazaar about starring alongside Ben Affleck, directing her first-ever short film, and future plans in India",
                      "metakey": "",
                      "highlights": "",
                      "rating": "",
                      "review_title": "",
                      "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "review_pros": "",
                      "review_cons": "",
                      "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/whatsapp-image-2020-12-09-at-123122-am091220123229.jpeg",
                      "feature_image_data": {
                        "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/whatsapp-image-2020-12-09-at-123122-am091220123229.jpeg",
                        "title": "whatsapp-image-2020-12-09-at-123122-am091220123229",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      },
                      "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=400:450",
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
                      "created_at": "2020-12-08T15:32:53.000000Z",
                      "created_by_id": "13",
                      "created_by_name": "prachi goyal",
                      "cache_time": "29/04/2021 02:40:59 pm",
                      "updated_at": "2020-12-11 17:23:53",
                      "galleries": "",
                      "video_node": "",
                      "previous_url_id": "2003"
                    },
                    {
                      "content_id": 2005,
                      "apps_id": "1",
                      "post_types_id": "2",
                      "content_type": "story",
                      "headline": "Kareena Kapoor Khan on Films, Fashion and Family",
                      "introtext": "What makes an icon? For Kareena Kapoor Khan, it’s irreverence, authenticity, and unshakeable confidence. As she celebrates 20 years in cinema, she talks to Bazaar India",
                      "fulltext": "&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;Seriously, what is going on?&amp;rdquo; asks Kareena Kapoor Khan, incredulous. We&amp;rsquo;re talking about the &amp;lsquo;airport look&amp;rsquo;&lt;br /&gt;\r\nthe phenomenon in the backseat of her car, where, dressed in track pants and a loose T-shirt, she seems utterly confounded by the concept.&amp;ldquo;Honestly, I don&amp;rsquo;t care how I&amp;rsquo;m looking. If you want to take my photograph, take it, but I&amp;rsquo;m not in Chanel or Balmain or Balenciaga, I&amp;rsquo;m sorry. And the airport is not a runway. I just need to be comfortable. And it looks really silly, no, overdressed and all.&amp;rdquo; There&amp;rsquo;s no strategy, no artifice, no clothing racks brought by her stylist each time she boards a flight&amp;mdash;she is simply a working mother with a life to live.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img98081220113000.jpeg' width='389' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;em&gt;Shirt and skirt, Tod&amp;rsquo;s. Earrings, Malabar Gold &amp;amp; Diamonds.&lt;/em&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Whether her pregnancy wardrobe or gym attire&amp;mdash;meticulously, frenetically, documented by blogs, magazines, and even news publications across the country&amp;mdash;what she wears is who she is. Yet, her authenticity, irreverence, and complete indifference to fashion statements catapulted her to social media stardom, without running a single public account herself. (Until March 5, when @kareenakapoorkhan made a surprise but stealthy Instagram debut.) &amp;ldquo;I don&amp;rsquo;t own a single piece of couture; it doesn&amp;rsquo;t interest me. I dress for my body type, and as long as I feel hot and look amazing, I&amp;rsquo;m happy. Like, you won&amp;rsquo;t see me in cycling shorts and a blazer just because it&amp;rsquo;s a trend. I think I look hot in the morning in my pyjamas with no makeup. Most people don&amp;rsquo;t understand that fashion needs to be relatable. I think for me, this relatability is also what&amp;rsquo;s led to my longevity in films.&amp;rdquo; Ah yes, this year Kareena celebrates two decades in cinema.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img57081220112504.jpeg' width='288' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;em&gt;Shirt, Tod&amp;rsquo;s. Earrings, Malabar Gold &amp;amp; Diamonds&lt;/em&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Her first role, that of a Muslim woman forced to relocate from Bangladesh to Pakistan, in the period drama Refugee, set the tone for her career. Here was an actor willing to take a risk, certain that it would pay off. Nonchalant if it didn&amp;rsquo;t. In an early interview from 2000, ahead of the release of Refugee, she said,&lt;br /&gt;\r\n&amp;ldquo;I am glad they are giving me star status because I know I will be able to live up to it. I am very sure of my performance. Even if the film is a failure and doesn&amp;rsquo;t do well, I am ready for it.&amp;rdquo; Today, the resolute confidence of an 18-year-old hasn&amp;rsquo;t left her&amp;mdash;it&amp;rsquo;s only intensified, albeit matured. &amp;ldquo;I look back but I constantly move forward. That&amp;rsquo;s the person I am. Yes, maybe I&amp;rsquo;ve done some wrong films, but they are all my films.&lt;br /&gt;\r\nI think my failures have made me who I am. If you&amp;rsquo;re not ready for failure, this is not the place to be. And I&amp;rsquo;m at a stage where I&amp;rsquo;m ready for anything,&amp;rdquo; she says.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img59081220112731.jpeg' width='318' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;em&gt;Dress, Tod&amp;rsquo;s. All jewellery, Malabar Gold &amp;amp; Diamonds&lt;/em&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;In film, as in fashion, there&amp;rsquo;s a consistency to Kareena&amp;rsquo;s approach, and it&amp;rsquo;s rooted in an innate sense of self. An inner strength, she says. She remains unafraid of sharing screen space with an illustrious ensemble cast&amp;mdash;from Kabhi Khushi Kabhie Gham (2001), to Udta Punjab (2016), Veere Di Wedding (2018), Good Newwz (2020), and the upcoming Takht (2020); she praises actors like Kangana Ranaut, Vidya Balan, and Alia Bhatt, whom she calls &amp;ldquo;spectacular&amp;rdquo; and &amp;ldquo;blessed&amp;rdquo;, without any qualms; and she maintains no insecurities of her place in an industry that has changed remarkably since her debut. &amp;ldquo;She has a star aura, she has a star persona. You can&amp;rsquo;t take that away from her. You want to watch her,&amp;rdquo; said Karan Johar, on Rendezvous with Simi Garewal, back in 2002. That sentiment holds true even now, as we shoot this cover at Mumbai&amp;rsquo;s Mehboob Studio&amp;mdash;where, of course, she was snapped by paparazzi eager to capture her every move.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;em&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img129081220113215.jpeg' width='275' /&gt;&lt;/em&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;em&gt;Dress, Tod&amp;rsquo;s. All jewellery, Malabar Gold &amp;amp; Diamonds.&lt;/em&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;ldquo;She is the perfect subject,&amp;rdquo; says Tarun Vishwa, who photographed this feature. &amp;ldquo;She has incredible, interactive eyes. And a complete awareness of her face, the light. You just can&amp;rsquo;t go wrong with her.&amp;rdquo; In front of the camera, she is magic. Kareena owns a particular and long-overdue distinction&amp;mdash; she is the first in her generation of actors to demonstrate the happy coexistence of motherhood and a successful career. Perhaps because her roles mirror her position in real life&amp;mdash; she&amp;rsquo;s no longer twentysomething Poo, but rather a 39-year- old woman who has something to say. Her comeback Veere Di Wedding&amp;mdash;though she was absent for just two years after the birth of her son&amp;mdash;not only joined the &amp;lsquo;100 crore club&amp;rsquo;, but did so by celebrating women who had agency, opinions, and flaws, with men at the periphery.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;em&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img127081220113337.jpeg' width='326' /&gt;&lt;/em&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;em&gt;Shirt, Tod&amp;rsquo;s. All jewellery, Malabar Gold &amp;amp; Diamonds.&lt;/em&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;And in the subsequent Good Newwz&amp;mdash;Kareena&amp;rsquo;s second-highest grosser after 3 Idiots&amp;mdash;she portrayed a working woman with a ticking biological clock, yearning for a child. &amp;ldquo;Despite being married, despite being a mother, I&amp;rsquo;ve been able to crack being a part of the movie business. I think experience helps you make better decisions. I&amp;rsquo;m also a lot calmer now. Earlier I was more competitive, more hyper, doing five films at a time. I&amp;rsquo;ve started enjoying acting a lot more than I did earlier, and that&amp;rsquo;s why I think I&amp;rsquo;m a better actor now. I&amp;rsquo;m enjoying that process of getting into a role, and just doing one film at a time,&amp;rdquo; she says. &amp;ldquo;The entire game of cinema has changed; the arc of cinema has changed. Women have to be a lot more fearless, and most of us are trying to do that. It&amp;rsquo;s a new age, it&amp;rsquo;s a new time. I love.&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;em&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img164091220122607.jpeg' width='317' /&gt;&lt;/em&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Dress, Tod&amp;rsquo;s. All jewellery, Malabar Gold &amp;amp; Diamonds.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img193091220122720.jpeg' width='307' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Dress, Tod&amp;rsquo;s. Earrings, Malabar Gold &amp;amp; Diamonds.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img195091220122843.jpeg' width='307' /&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Shirt and skirt, Tod&amp;rsquo;s. All jewellery, Malabar Gold &amp;amp; Diamonds.&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;Photographs by TARUN VISHWA&lt;br /&gt;\r\nText by ESHA MAHAJAN&lt;/p&gt;\r\n\r\n&lt;p&gt;Hair: Yianni Tsapatori at Faze Management.&lt;/p&gt;\r\n\r\n&lt;p&gt;Makeup: Pompy Hans.&lt;/p&gt;\r\n\r\n&lt;p&gt;Production: P. Productions. Fashion&lt;/p&gt;",
                      "amp_fulltext": "&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;Seriously, what is going on?&rdquo; asks Kareena Kapoor Khan, incredulous. We&rsquo;re talking about the &lsquo;airport look&rsquo;&lt;br&gt;\nthe phenomenon in the backseat of her car, where, dressed in track pants and a loose T-shirt, she seems utterly confounded by the concept.&ldquo;Honestly, I don&rsquo;t care how I&rsquo;m looking. If you want to take my photograph, take it, but I&rsquo;m not in Chanel or Balmain or Balenciaga, I&rsquo;m sorry. And the airport is not a runway. I just need to be comfortable. And it looks really silly, no, overdressed and all.&rdquo; There&rsquo;s no strategy, no artifice, no clothing racks brought by her stylist each time she boards a flight&mdash;she is simply a working mother with a life to live.&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img98081220113000.jpeg&quot; width=&quot;3043&quot; height=&quot;4110&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;em&gt;Shirt and skirt, Tod&rsquo;s. Earrings, Malabar Gold &amp;amp; Diamonds.&lt;/em&gt;&lt;/p&gt;\n\n&lt;p&gt;Whether her pregnancy wardrobe or gym attire&mdash;meticulously, frenetically, documented by blogs, magazines, and even news publications across the country&mdash;what she wears is who she is. Yet, her authenticity, irreverence, and complete indifference to fashion statements catapulted her to social media stardom, without running a single public account herself. (Until March 5, when @kareenakapoorkhan made a surprise but stealthy Instagram debut.) &ldquo;I don&rsquo;t own a single piece of couture; it doesn&rsquo;t interest me. I dress for my body type, and as long as I feel hot and look amazing, I&rsquo;m happy. Like, you won&rsquo;t see me in cycling shorts and a blazer just because it&rsquo;s a trend. I think I look hot in the morning in my pyjamas with no makeup. Most people don&rsquo;t understand that fashion needs to be relatable. I think for me, this relatability is also what&rsquo;s led to my longevity in films.&rdquo; Ah yes, this year Kareena celebrates two decades in cinema.&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img57081220112504.jpeg&quot; width=&quot;2738&quot; height=&quot;3490&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;em&gt;Shirt, Tod&rsquo;s. Earrings, Malabar Gold &amp;amp; Diamonds&lt;/em&gt;&lt;/p&gt;\n\n&lt;p&gt;Her first role, that of a Muslim woman forced to relocate from Bangladesh to Pakistan, in the period drama Refugee, set the tone for her career. Here was an actor willing to take a risk, certain that it would pay off. Nonchalant if it didn&rsquo;t. In an early interview from 2000, ahead of the release of Refugee, she said,&lt;br&gt;\n&ldquo;I am glad they are giving me star status because I know I will be able to live up to it. I am very sure of my performance. Even if the film is a failure and doesn&rsquo;t do well, I am ready for it.&rdquo; Today, the resolute confidence of an 18-year-old hasn&rsquo;t left her&mdash;it&rsquo;s only intensified, albeit matured. &ldquo;I look back but I constantly move forward. That&rsquo;s the person I am. Yes, maybe I&rsquo;ve done some wrong films, but they are all my films.&lt;br&gt;\nI think my failures have made me who I am. If you&rsquo;re not ready for failure, this is not the place to be. And I&rsquo;m at a stage where I&rsquo;m ready for anything,&rdquo; she says.&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img59081220112731.jpeg&quot; width=&quot;3018&quot; height=&quot;4087&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;em&gt;Dress, Tod&rsquo;s. All jewellery, Malabar Gold &amp;amp; Diamonds&lt;/em&gt;&lt;/p&gt;\n\n&lt;p&gt;In film, as in fashion, there&rsquo;s a consistency to Kareena&rsquo;s approach, and it&rsquo;s rooted in an innate sense of self. An inner strength, she says. She remains unafraid of sharing screen space with an illustrious ensemble cast&mdash;from Kabhi Khushi Kabhie Gham (2001), to Udta Punjab (2016), Veere Di Wedding (2018), Good Newwz (2020), and the upcoming Takht (2020); she praises actors like Kangana Ranaut, Vidya Balan, and Alia Bhatt, whom she calls &ldquo;spectacular&rdquo; and &ldquo;blessed&rdquo;, without any qualms; and she maintains no insecurities of her place in an industry that has changed remarkably since her debut. &ldquo;She has a star aura, she has a star persona. You can&rsquo;t take that away from her. You want to watch her,&rdquo; said Karan Johar, on Rendezvous with Simi Garewal, back in 2002. That sentiment holds true even now, as we shoot this cover at Mumbai&rsquo;s Mehboob Studio&mdash;where, of course, she was snapped by paparazzi eager to capture her every move.&lt;/p&gt;\n\n&lt;p&gt;&lt;em&gt;&lt;amp-img alt src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img129081220113215.jpeg&quot; width=&quot;3018&quot; height=&quot;4092&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/em&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;em&gt;Dress, Tod&rsquo;s. All jewellery, Malabar Gold &amp;amp; Diamonds.&lt;/em&gt;&lt;/p&gt;\n\n&lt;p&gt;&ldquo;She is the perfect subject,&rdquo; says Tarun Vishwa, who photographed this feature. &ldquo;She has incredible, interactive eyes. And a complete awareness of her face, the light. You just can&rsquo;t go wrong with her.&rdquo; In front of the camera, she is magic. Kareena owns a particular and long-overdue distinction&mdash; she is the first in her generation of actors to demonstrate the happy coexistence of motherhood and a successful career. Perhaps because her roles mirror her position in real life&mdash; she&rsquo;s no longer twentysomething Poo, but rather a 39-year- old woman who has something to say. Her comeback Veere Di Wedding&mdash;though she was absent for just two years after the birth of her son&mdash;not only joined the &lsquo;100 crore club&rsquo;, but did so by celebrating women who had agency, opinions, and flaws, with men at the periphery.&lt;/p&gt;\n\n&lt;p&gt;&lt;em&gt;&lt;amp-img alt src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img127081220113337.jpeg&quot; width=&quot;3071&quot; height=&quot;4061&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/em&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;em&gt;Shirt, Tod&rsquo;s. All jewellery, Malabar Gold &amp;amp; Diamonds.&lt;/em&gt;&lt;/p&gt;\n\n&lt;p&gt;And in the subsequent Good Newwz&mdash;Kareena&rsquo;s second-highest grosser after 3 Idiots&mdash;she portrayed a working woman with a ticking biological clock, yearning for a child. &ldquo;Despite being married, despite being a mother, I&rsquo;ve been able to crack being a part of the movie business. I think experience helps you make better decisions. I&rsquo;m also a lot calmer now. Earlier I was more competitive, more hyper, doing five films at a time. I&rsquo;ve started enjoying acting a lot more than I did earlier, and that&rsquo;s why I think I&rsquo;m a better actor now. I&rsquo;m enjoying that process of getting into a role, and just doing one film at a time,&rdquo; she says. &ldquo;The entire game of cinema has changed; the arc of cinema has changed. Women have to be a lot more fearless, and most of us are trying to do that. It&rsquo;s a new age, it&rsquo;s a new time. I love.&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;em&gt;&lt;amp-img alt src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img164091220122607.jpeg&quot; width=&quot;2917&quot; height=&quot;3948&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/em&gt;&lt;/p&gt;\n\n&lt;p&gt;Dress, Tod&rsquo;s. All jewellery, Malabar Gold &amp;amp; Diamonds.&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img193091220122720.jpeg&quot; width=&quot;3016&quot; height=&quot;3939&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Dress, Tod&rsquo;s. Earrings, Malabar Gold &amp;amp; Diamonds.&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/img195091220122843.jpeg&quot; width=&quot;2977&quot; height=&quot;4061&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;/p&gt;\n\n&lt;p&gt;Shirt and skirt, Tod&rsquo;s. All jewellery, Malabar Gold &amp;amp; Diamonds.&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;Photographs by TARUN VISHWA&lt;br&gt;\nText by ESHA MAHAJAN&lt;/p&gt;\n\n&lt;p&gt;Hair: Yianni Tsapatori at Faze Management.&lt;/p&gt;\n\n&lt;p&gt;Makeup: Pompy Hans.&lt;/p&gt;\n\n&lt;p&gt;Production: P. Productions. Fashion&lt;/p&gt;",
                      "category_trail": [
                        {
                          "id": 2,
                          "title": "Celebrity",
                          "slug": "celebrity",
                          "parent": "0"
                        }
                      ],
                      "primary_section_id": 2,
                      "primary_section_name": "Celebrity",
                      "primary_section_slug": "celebrity",
                      "primary_id": "2",
                      "primary_id_name": "Celebrity",
                      "primary_id_slug": "celebrity",
                      "url": "/celebrity/story/kareena-kapoor-khan-on-films-fashion-and-family-2005",
                      "full_url": "https://alpha-harperbazar.intoday.in/celebrity/story/kareena-kapoor-khan-on-films-fashion-and-family-2005",
                      "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/celebrity/story/kareena-kapoor-khan-on-films-fashion-and-family-2005",
                      "slug": "kareena-kapoor-khan-on-films-fashion-and-family",
                      "excerpt": "What makes an icon? For Kareena Kapoor Khan, it’s irreverence, authenticity, and unshakeable confidence. As she celebrates 20 years in cinema, she talks to Bazaar India",
                      "publish_up": "2020-12-11 16:24:00",
                      "publish_down": null,
                      "metatitle": "Kareena Kapoor Cover Story",
                      "metadesc": "What makes an icon? For Kareena Kapoor Khan, it’s irreverence, authenticity, and unshakeable confidence. As she celebrates 20 years in cinema, she talks to Bazaar about films, fashion, and family.",
                      "metakey": "",
                      "highlights": "",
                      "rating": "",
                      "review_title": "",
                      "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "review_pros": "",
                      "review_cons": "",
                      "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/whatsapp-image-2020-12-09-at-121958-am091220123306.jpeg",
                      "feature_image_data": {
                        "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/whatsapp-image-2020-12-09-at-121958-am091220123306.jpeg",
                        "title": "whatsapp-image-2020-12-09-at-121958-am091220123306",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      },
                      "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=400:450",
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
                      "created_at": "2020-12-08T15:39:16.000000Z",
                      "created_by_id": "13",
                      "created_by_name": "prachi goyal",
                      "cache_time": "29/04/2021 02:41:01 pm",
                      "updated_at": "2020-12-11 16:24:48",
                      "galleries": "",
                      "video_node": "",
                      "previous_url_id": "2004"
                    },
                    {
                      "content_id": 1988,
                      "apps_id": "1",
                      "post_types_id": "2",
                      "content_type": "story",
                      "headline": "Shobita Dhulipala on Life, Love, and How She's 'Adulting' Post the Lockdown",
                      "introtext": "Shobita Dhulipala might just be Bollywood’s most interesting actor.  Read her exclusive interview with Bazaar India's digital editor Nandini Bhalla.",
                      "fulltext": "&lt;p&gt;Just a few hours before this interview&amp;nbsp;takes place, &amp;nbsp;Sobhita Dhulipala&amp;nbsp;has found herself a new apartment. &amp;quot;Finally!&amp;quot; she exclaims, &amp;quot;I&amp;rsquo;ve been searching for months.&amp;quot; For the record, there is nothing unlivable about her current abode. It&amp;#39;s just that she feels she has &amp;quot;emotionally outgrown&amp;quot; the space. &amp;quot;I am looking forward to the newness that setting up a place will bring... I feel like I&amp;rsquo;m adulting, man!&amp;quot; she laughs. Sobhita would like, very much, for her new home to have a Parisian vibe-an aesthetic she is &amp;quot;smitten by&amp;quot;. &amp;nbsp;&amp;quot;I want it to be cosy, intimate... There will be lots of plants, lots of white, lots of books, and the house will smell of freshly-brewed coffee and have jazz music playing all the time,&amp;quot; she says. Did she already mention the plants, she asks. Yes, she did, I confirm. &amp;quot;I&amp;#39;m obsessed with plants, right now.&amp;nbsp;&lt;br /&gt;\r\nI&amp;#39;ve spent so much time researching them,&amp;quot; she says. The hunt for a new apartment-and its future trimmings-is one of the things that has kept the actor busy during the nationwide lockdown. The other, is the launch of a &amp;lsquo;creative studio&amp;rsquo;. Sort of. (Sobhita isn&amp;rsquo;t fussed about giving her new digital venture a rigid title; &amp;quot;You can call it whatever you like,&amp;quot; she says). Earlier this month, she published a heartfelt &amp;#39;open note&amp;#39; on Instagram, inviting submissions for scripts, stories, and ideas. It was an impulsive idea, Sobhita reveals, one she is incredibly excited about. &amp;ldquo;I would watch how some actors, with certain credibility or commercial standing, were able to facilitate wonderful projects, and I&amp;rsquo;d think, &amp;lsquo;Damn, I have to be a big star to do that.&amp;rsquo; But then I thought, &amp;lsquo;Why can&amp;rsquo;t I just democratise the way ideas are brought into the industry? I mean, it&amp;rsquo;s not like I am some extraordinary person...I&amp;rsquo;m small fry, but this could be a way to support creative expression. Because on one side, there&amp;rsquo;s so much talent in the country...&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/5-013-copy011220020933.jpeg' width='409' /&gt;&lt;br /&gt;\r\nI speak to so many people, and their life stories are insanely exciting. And on the other side, there are producers and platforms and mediums that are searching for something original, relatable, and fresh. So I feel like I want to be this &amp;lsquo;middle ground&amp;rsquo; where I can create a bank of stories and scripts, and people can come &amp;lsquo;shop them&amp;rsquo;. It&amp;rsquo;s quite exciting, really!&amp;rdquo; There has always been a voracious reader at the core of Sobhita. As a young girl&amp;mdash;shy and timid&amp;mdash;many of her learnings about life, people, sexuality, and emotions came from the pages she spent hours poring over. Books became her &amp;ldquo;Narnia&amp;rdquo;, her door into other dimensions. In the days of social distancing, Sobhita is reading (&amp;ldquo;bingeing on!&amp;rdquo;) poetry by Tishani Doshi&amp;mdash;a genre she takes delights in. &amp;nbsp;And, of course, there are the several, thousand scripts she has received from hopeful writers. &amp;nbsp;&amp;auml; &amp;ldquo;I&amp;rsquo;ve been soaking up people&amp;rsquo;s life stories...taking in their emotions,&amp;rdquo; she says. &amp;ldquo;There is no race to run; everyone&amp;rsquo;s home, so I don&amp;rsquo;t have to feel like sh*t for being lazy and doing nothing. I asked a friend the other day about what made us &amp;lsquo;grow up&amp;rsquo; in school, when we transferred from one grade to the next? It was the same school, the same uniform and yet, every grade felt different. I realised that we &amp;lsquo;grew up&amp;rsquo; during our summer holidays. And while I haven&amp;rsquo;t had a vacation since school, this lockdown has been an opportunity for me to introspect, which is a great luxury. I&amp;rsquo;ve gotten closer to myself, a lot closer. I&amp;rsquo;ve admitted to a couple of my shortcomings, instead of blaming situations or other people. I like to call myself out when I&amp;rsquo;m wrong.&amp;rdquo; Sobhita&amp;rsquo;s &amp;ldquo;flaws&amp;rdquo; include being somewhat impatient and &amp;ldquo;living in her head&amp;rdquo;. She admits to how she can&amp;mdash;sometimes and unconsciously&amp;mdash;project her own expectations onto others. Which has often led to disappointment when they don&amp;rsquo;t live up to those assumptions. &amp;ldquo;It burdens the other person,&amp;rdquo; she says.&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=''  src='https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/10-013011220021130.jpeg' width='331' /&gt;&lt;br /&gt;\r\n&amp;ldquo;In the past, I haven&amp;rsquo;t given relationships much time...I was quick to categorise people in my head, like, &amp;lsquo;This person is my &amp;lsquo;type&amp;rsquo; or this person isn&amp;rsquo;t&amp;rsquo;. And that has not always been the reality... So I&amp;rsquo;ve been working on that, not judging a book by its cover...&amp;rdquo; I have spoken with Sobhita a few times before, and if there is one thing that struck me then&amp;mdash;and that strikes me now&amp;mdash;it is this: there is absolutely nothing generic about the 28-year-old. It is clear to see that she holds ample sex appeal, often hard to conceal. And when she speaks, the words are often deliberate, but she doesn&amp;rsquo;t seem to be holding back. She could be in a Fritz Lang-film noir, a bohemian at the brink of a golden age, or a protagonist in a Satyajit Ray film. It&amp;rsquo;s entirely possible to imagine her a brooding poet or a philosopher discussing neo-Platonism, but she is also the cool-girl from university who discovered ripped jeans before her classmates followed. &amp;nbsp;She is all those things, and she is none of them. Her friend, photographer Farrokh Chothia, describes Sobhita as &amp;ldquo;a soul from another time&amp;rdquo;. The two met some years ago, he can&amp;rsquo;t remember precisely when, but they quickly became the kind of friends who have eight-hour-long chats, about music and art and the meaning of life. &amp;ldquo;She is like a diva from some bygone era...some mythical past,&amp;rdquo; Farrokh shares with me. &amp;ldquo;I always tell her she was born a few decades too late for Woodstock. There&amp;rsquo;s a depth to Sobhita which is fascinating, and if you&amp;rsquo;ve read her writing, you&amp;rsquo;ll know what I mean.&amp;nbsp;&lt;br /&gt;\r\nShe has absorbed so much literature and music from the past, that it&amp;rsquo;s all part of this wonderful mix, packaged into a contemporary form. And she oozes sensuality... she isn&amp;rsquo;t even aware of the effect she has on people. Not just men,&amp;nbsp;but women, too&amp;mdash;women seem to take to her and that, to me,&amp;nbsp; is a good indicator of a person&amp;rsquo;s universal appeal.&amp;rdquo; Farrokh&amp;rsquo;s observations tie in with how Sobhita describes her own life, and interests. She tells me that she has always been drawn to vintage and timeless pieces. And if she could live in a different era, it would be the &amp;rsquo;40s or &amp;rsquo;50s. &amp;ldquo;I&amp;rsquo;m very enamoured by the glamour of those days, the simplicity...&amp;rdquo; she says. &amp;ldquo;It seems to me that people lived on their own terms because there was a lot less &amp;lsquo;social intervention&amp;rsquo;.&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;br /&gt;\r\nThey were less afraid. I feel like somewhere, at some point, there has been a rise in &amp;lsquo;suppression of expression&amp;rsquo;. And people have felt this need to live up to some sort of an image. This wasn&amp;rsquo;t the case back then, because people didn&amp;rsquo;t have access to so much information.&amp;rdquo; She is also a self-confessed &amp;ldquo;vintage freak&amp;rdquo;, with a penchant for preserving things that can stay beautiful forever.&amp;nbsp;&lt;br /&gt;\r\n&amp;ldquo;I believe that there is some energy exchanged with everything we interact with,&amp;rdquo; she says. &amp;ldquo;There is a soul in the things we surround ourselves with... people and objects. I still have things from my childhood, like stationary or a book someone gave me a long time ago. I hold on to my mother&amp;rsquo;s saris, and if someone gave me a flower, I&amp;rsquo;ll still have it sandwiched between books...&amp;rdquo;&lt;/p&gt;\r\n\r\n&lt;p&gt;Photographs by:&amp;nbsp;Bikramjit Bose&lt;/p&gt;\r\n\r\n&lt;p&gt;Text By:&amp;nbsp;Nandini Bhalla&amp;nbsp;&lt;/p&gt;",
                      "amp_fulltext": "&lt;p&gt;Just a few hours before this interview&amp;nbsp;takes place, &amp;nbsp;Sobhita Dhulipala&amp;nbsp;has found herself a new apartment. &quot;Finally!&quot; she exclaims, &quot;I&rsquo;ve been searching for months.&quot; For the record, there is nothing unlivable about her current abode. It's just that she feels she has &quot;emotionally outgrown&quot; the space. &quot;I am looking forward to the newness that setting up a place will bring... I feel like I&rsquo;m adulting, man!&quot; she laughs. Sobhita would like, very much, for her new home to have a Parisian vibe-an aesthetic she is &quot;smitten by&quot;. &amp;nbsp;&quot;I want it to be cosy, intimate... There will be lots of plants, lots of white, lots of books, and the house will smell of freshly-brewed coffee and have jazz music playing all the time,&quot; she says. Did she already mention the plants, she asks. Yes, she did, I confirm. &quot;I'm obsessed with plants, right now.&amp;nbsp;&lt;br&gt;\nI've spent so much time researching them,&quot; she says. The hunt for a new apartment-and its future trimmings-is one of the things that has kept the actor busy during the nationwide lockdown. The other, is the launch of a &lsquo;creative studio&rsquo;. Sort of. (Sobhita isn&rsquo;t fussed about giving her new digital venture a rigid title; &quot;You can call it whatever you like,&quot; she says). Earlier this month, she published a heartfelt 'open note' on Instagram, inviting submissions for scripts, stories, and ideas. It was an impulsive idea, Sobhita reveals, one she is incredibly excited about. &ldquo;I would watch how some actors, with certain credibility or commercial standing, were able to facilitate wonderful projects, and I&rsquo;d think, &lsquo;Damn, I have to be a big star to do that.&rsquo; But then I thought, &lsquo;Why can&rsquo;t I just democratise the way ideas are brought into the industry? I mean, it&rsquo;s not like I am some extraordinary person...I&rsquo;m small fry, but this could be a way to support creative expression. Because on one side, there&rsquo;s so much talent in the country...&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/5-013-copy011220020933.jpeg&quot; width=&quot;1080&quot; height=&quot;1445&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;br&gt;\nI speak to so many people, and their life stories are insanely exciting. And on the other side, there are producers and platforms and mediums that are searching for something original, relatable, and fresh. So I feel like I want to be this &lsquo;middle ground&rsquo; where I can create a bank of stories and scripts, and people can come &lsquo;shop them&rsquo;. It&rsquo;s quite exciting, really!&rdquo; There has always been a voracious reader at the core of Sobhita. As a young girl&mdash;shy and timid&mdash;many of her learnings about life, people, sexuality, and emotions came from the pages she spent hours poring over. Books became her &ldquo;Narnia&rdquo;, her door into other dimensions. In the days of social distancing, Sobhita is reading (&ldquo;bingeing on!&rdquo;) poetry by Tishani Doshi&mdash;a genre she takes delights in. &amp;nbsp;And, of course, there are the several, thousand scripts she has received from hopeful writers. &amp;nbsp;&auml; &ldquo;I&rsquo;ve been soaking up people&rsquo;s life stories...taking in their emotions,&rdquo; she says. &ldquo;There is no race to run; everyone&rsquo;s home, so I don&rsquo;t have to feel like sh*t for being lazy and doing nothing. I asked a friend the other day about what made us &lsquo;grow up&rsquo; in school, when we transferred from one grade to the next? It was the same school, the same uniform and yet, every grade felt different. I realised that we &lsquo;grew up&rsquo; during our summer holidays. And while I haven&rsquo;t had a vacation since school, this lockdown has been an opportunity for me to introspect, which is a great luxury. I&rsquo;ve gotten closer to myself, a lot closer. I&rsquo;ve admitted to a couple of my shortcomings, instead of blaming situations or other people. I like to call myself out when I&rsquo;m wrong.&rdquo; Sobhita&rsquo;s &ldquo;flaws&rdquo; include being somewhat impatient and &ldquo;living in her head&rdquo;. She admits to how she can&mdash;sometimes and unconsciously&mdash;project her own expectations onto others. Which has often led to disappointment when they don&rsquo;t live up to those assumptions. &ldquo;It burdens the other person,&rdquo; she says.&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;amp-img alt src=&quot;https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/10-013011220021130.jpeg&quot; width=&quot;1080&quot; height=&quot;1445&quot; layout=&quot;responsive&quot;&gt;&lt;/amp-img&gt;&lt;br&gt;\n&ldquo;In the past, I haven&rsquo;t given relationships much time...I was quick to categorise people in my head, like, &lsquo;This person is my &lsquo;type&rsquo; or this person isn&rsquo;t&rsquo;. And that has not always been the reality... So I&rsquo;ve been working on that, not judging a book by its cover...&rdquo; I have spoken with Sobhita a few times before, and if there is one thing that struck me then&mdash;and that strikes me now&mdash;it is this: there is absolutely nothing generic about the 28-year-old. It is clear to see that she holds ample sex appeal, often hard to conceal. And when she speaks, the words are often deliberate, but she doesn&rsquo;t seem to be holding back. She could be in a Fritz Lang-film noir, a bohemian at the brink of a golden age, or a protagonist in a Satyajit Ray film. It&rsquo;s entirely possible to imagine her a brooding poet or a philosopher discussing neo-Platonism, but she is also the cool-girl from university who discovered ripped jeans before her classmates followed. &amp;nbsp;She is all those things, and she is none of them. Her friend, photographer Farrokh Chothia, describes Sobhita as &ldquo;a soul from another time&rdquo;. The two met some years ago, he can&rsquo;t remember precisely when, but they quickly became the kind of friends who have eight-hour-long chats, about music and art and the meaning of life. &ldquo;She is like a diva from some bygone era...some mythical past,&rdquo; Farrokh shares with me. &ldquo;I always tell her she was born a few decades too late for Woodstock. There&rsquo;s a depth to Sobhita which is fascinating, and if you&rsquo;ve read her writing, you&rsquo;ll know what I mean.&amp;nbsp;&lt;br&gt;\nShe has absorbed so much literature and music from the past, that it&rsquo;s all part of this wonderful mix, packaged into a contemporary form. And she oozes sensuality... she isn&rsquo;t even aware of the effect she has on people. Not just men,&amp;nbsp;but women, too&mdash;women seem to take to her and that, to me,&amp;nbsp; is a good indicator of a person&rsquo;s universal appeal.&rdquo; Farrokh&rsquo;s observations tie in with how Sobhita describes her own life, and interests. She tells me that she has always been drawn to vintage and timeless pieces. And if she could live in a different era, it would be the &rsquo;40s or &rsquo;50s. &ldquo;I&rsquo;m very enamoured by the glamour of those days, the simplicity...&rdquo; she says. &ldquo;It seems to me that people lived on their own terms because there was a lot less &lsquo;social intervention&rsquo;.&amp;nbsp;&lt;/p&gt;\n\n&lt;p&gt;&lt;br&gt;\nThey were less afraid. I feel like somewhere, at some point, there has been a rise in &lsquo;suppression of expression&rsquo;. And people have felt this need to live up to some sort of an image. This wasn&rsquo;t the case back then, because people didn&rsquo;t have access to so much information.&rdquo; She is also a self-confessed &ldquo;vintage freak&rdquo;, with a penchant for preserving things that can stay beautiful forever.&amp;nbsp;&lt;br&gt;\n&ldquo;I believe that there is some energy exchanged with everything we interact with,&rdquo; she says. &ldquo;There is a soul in the things we surround ourselves with... people and objects. I still have things from my childhood, like stationary or a book someone gave me a long time ago. I hold on to my mother&rsquo;s saris, and if someone gave me a flower, I&rsquo;ll still have it sandwiched between books...&rdquo;&lt;/p&gt;\n\n&lt;p&gt;Photographs by:&amp;nbsp;Bikramjit Bose&lt;/p&gt;\n\n&lt;p&gt;Text By:&amp;nbsp;Nandini Bhalla&amp;nbsp;&lt;/p&gt;",
                      "category_trail": [
                        {
                          "id": 2,
                          "title": "Celebrity",
                          "slug": "celebrity",
                          "parent": "0"
                        }
                      ],
                      "primary_section_id": 2,
                      "primary_section_name": "Celebrity",
                      "primary_section_slug": "celebrity",
                      "primary_id": "2",
                      "primary_id_name": "Celebrity",
                      "primary_id_slug": "celebrity",
                      "url": "/celebrity/story/shobita-dhulipala-on-life-love-and-how-shes-adulting-post-the-lockdown-1988",
                      "full_url": "https://alpha-harperbazar.intoday.in/celebrity/story/shobita-dhulipala-on-life-love-and-how-shes-adulting-post-the-lockdown-1988",
                      "amp_full_url": "https://alpha-harperbazar.intoday.in/amp/celebrity/story/shobita-dhulipala-on-life-love-and-how-shes-adulting-post-the-lockdown-1988",
                      "slug": "shobita-dhulipala-on-life-love-and-how-shes-adulting-post-the-lockdown",
                      "excerpt": "Shobita Dhulipala might just be Bollywood’s most interesting actor.  Read her exclusive interview with Bazaar India's digital editor Nandini Bhalla.",
                      "publish_up": "2020-12-01 14:13:00",
                      "publish_down": null,
                      "metatitle": "Shobita Dhulipala on Life, Love, and How She’s ‘Adulting’ Post the Lockdown",
                      "metadesc": "Shobita Dhulipala might just be Bollywood’s most interesting actor.  Read her exclusive interview with Bazaar India's digital editor Nandini Bhalla.",
                      "metakey": "",
                      "highlights": "",
                      "rating": "",
                      "review_title": "",
                      "review_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "review_pros": "",
                      "review_cons": "",
                      "feature_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/sobhita-1011220020010.jpeg",
                      "feature_image_data": {
                        "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/sobhita-1011220020010.jpeg",
                        "title": "sobhita-1011220020010",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      },
                      "square_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "square_image_data": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_454x255.png",
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/sobhita041220061200.jpeg?size=400:450",
                      "vertical_image_data": {
                        "url": "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202012/sobhita041220061200.jpeg",
                        "title": "sobhita041220061200",
                        "caption": "",
                        "alt_text": "",
                        "description": ""
                      },
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
                      "created_at": "2020-12-01T08:43:33.000000Z",
                      "created_by_id": "17",
                      "created_by_name": "Simrit Tiwana",
                      "cache_time": "29/04/2021 02:41:01 pm",
                      "updated_at": "2020-12-18 11:03:31",
                      "galleries": "",
                      "video_node": "",
                      "previous_url_id": "1986"
                    }
                  ]
                }
              }
            }
          },
          {
            "id": 19,
            "content": "{\"multi_data_title\":\"Travel & Food\",\"multi_data_widget_id\":\"10\",\"multi_data_widget_extra\":\"total_record=4|offset=3|widget_template=travel|widget_class=travel_food\",\"multi_data_widget_template\":\"\"}",
            "content_data": {
              "title": "Travel & Food",
              "multi_data_widget_id": "10",
              "multi_data_widget_extra": "total_record=4&offset=3&widget_template=travel&widget_class=travel_food",
              "multi_data_widget_template": "",
              "multi_data_widget_extra_config": {
                "total_record": "4",
                "offset": "3",
                "widget_template": "travel",
                "widget_class": "travel_food"
              },
              "widget_data": {
                "id": 10,
                "title": "Travel And Food",
                "slug": "travel-and-food",
                "description": "Travel And Food Home Page Custom Articles",
                "type": "latest_article",
                "content": "{\"related_content_type\":[],\"category_id\":\"4\",\"no_of_records\":\"10\"}",
                "published": "1",
                "created_at": "2020-11-27T09:56:43.000000Z",
                "updated_at": "2021-03-15T13:46:05.000000Z",
                "deleted_at": null,
                "widget_data": {
                  "related_content_type_id": "",
                  "related_content_type_name": "",
                  "category_id": "4",
                  "category_name": "travel-food",
                  "section_level": 0,
                  "no_of_records": "10",
                  "main_data": [
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
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=400:450",
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
                      "cache_time": "29/04/2021 02:41:02 pm",
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
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=400:450",
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
                      "cache_time": "29/04/2021 02:41:02 pm",
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
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=400:450",
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
                      "cache_time": "29/04/2021 02:41:03 pm",
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
                      "vertical_image": "https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/default_294x523.png?size=400:450",
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
                      "cache_time": "29/04/2021 02:41:03 pm",
                      "updated_at": "2020-11-26 12:44:37",
                      "galleries": "",
                      "video_node": "",
                      "previous_url_id": "1934"
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