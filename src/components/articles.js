const image1 = "data:image/jpeg;base64,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"

const image2 = "data:image/jpeg;base64,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"

const Articles = { 
    "general": [
    {
        "source": {
            "id": null,
            "name": "Pib.gov.in"
        },
        "author": null,
        "title": "Press Information Bureau - PIB",
        "description": "A young researcher has divulged the secret of how one of the smallest green algae called Picocystis",
        "url": "https://pib.gov.in/PressReleseDetailm.aspx?PRID=1976837",
        "urlToImage": image1,
        "publishedAt": "2023-11-14T08:22:00Z",
        "content": "Ministry of Science &amp; Technology\r\nPosted On:\r\n 14 NOV 2023 1:52PM by PIB Delhi\r\nA young researcher has divulged the secret of how one of the smallest green algae called Picocystis Salinarum survi… [+3185 chars]"
    },
    {
        "source": {
            "id": "the-hindu",
            "name": "The Hindu"
        },
        "author": "The Hindu",
        "title": "Israel Hamas war Day 39 Live Updates | At least six Palestinians killed in West Bank city - The Hindu",
        "description": null,
        "url": "https://www.thehindu.com/news/international/israel-hamas-gaza-palestine-war-conflict-updates-november-14-2023/article67530990.ece",
        "urlToImage": null,
        "publishedAt": "2023-11-14T07:24:24Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Investing.com"
        },
        "author": "IANS",
        "title": "Samsung unveils its own generative AI model 'Gauss' - Investing.com India",
        "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
        "url": "https://in.investing.com/news/samsung-unveils-its-own-generative-ai-model-gauss-3901015",
        "urlToImage": image2,
        "publishedAt": "2023-11-14T07:20:46Z",
        "content": "Seoul, Nov 14 (IANS) Samsung Electronics (KS:\r\n005930\r\n) on Tuesday showcased its latest updates to software and services, including its new generative artificial intelligence (AI) model, Samsung Gau… [+1779 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": null,
        "title": "Researchers find second-most distant galaxy using James Webb telescope - Mint Lounge",
        "description": "Using data from JWST, researchers have discovered the second- and fourth-most distant galaxies ever observed in a region of space known as Pandora’s Cluster",
        "url": "https://lifestyle.livemint.com/smart-living/innovation/second-most-distant-galaxy-james-webb-space-telescope-111699889883063.html",
        "urlToImage": "https://images.livemint.com/img/2023/11/14/1140x641/Pandoras_Cluster_Abell_2744_1699944827059_1699944842482.jpg",
        "publishedAt": "2023-11-14T07:18:08Z",
        "content": "It is turning out to be a month of more discoveries for the James Webb Space Telescope (JWST). Earlier this month, a research team from UC Riverside found a Milky Way-type galaxy in the early univers… [+3838 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Science Desk",
        "title": "NASA stops sending commands to red planet fleet due to Mars solar conjunction - The Indian Express",
        "description": "NASA has stopped sending commands to its fleet of robotic probes on or orbiting the red planet because the Sun is in between Earth and Mars.",
        "url": "https://indianexpress.com/article/technology/science/nasa-mars-solar-conjunction-signals-9026012/",
        "urlToImage": "https://images.indianexpress.com/2023/11/NASA-mars-probes-20231114.jpg",
        "publishedAt": "2023-11-14T07:16:16Z",
        "content": "From the Curiosity and Perseverance rovers to the Ingenuity Mars Helicopter and Mars Reconnaissance Orbiter and more, NASA has a veritable army of robots on the red planet or orbiting. But the space … [+579 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Dr. Ambrish Mithal",
        "title": "World diabetes day: Can severe air quality trigger blood sugar levels, insulin resistance? - The Indian Express",
        "description": "Why one of the factors responsible for the increase in diabetes could well be air pollution, explains Dr Ambrish Mithal, Chairman of Endocrinology and Diabetes, Max Healthcare",
        "url": "https://indianexpress.com/article/health-wellness/world-diabetes-day-air-quality-trigger-blood-sugar-levels-insulin-resistance-9026023/",
        "urlToImage": "https://images.indianexpress.com/2023/11/diabetes-air-pollution-1600.jpg",
        "publishedAt": "2023-11-14T07:14:21Z",
        "content": "India continues to hold the dubious distinction of having some of the most polluted cities in the world, led by the capital, Delhi. This phenomenon peaks in the winter months, but air quality is subs… [+4947 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "Piyush Goyal visits Tesla’s plant in California; here’s what Elon Musk had to say - IndiaTimes",
        "description": "India Business News: Tesla's entry in India soon? Indian Commerce and Industry Minister, Piyush Goyal, visited Tesla's manufacturing facility in California and announced t",
        "url": "https://timesofindia.indiatimes.com/business/india-business/piyush-goyal-visits-teslas-plant-in-california-heres-what-elon-musk-had-to-say/articleshow/105202418.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105202763,width-1070,height-580,imgsize-64524,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-14T06:55:00Z",
        "content": "FD Calculator\r\nWhen investing in a fixed deposit, the amount you deposit earns interest as per the prevailing...\r\nCalculate Now"
    },
    {
        "source": {
            "id": null,
            "name": "India TV News"
        },
        "author": "Edited by Vishal Upadhyay",
        "title": "Garena Free Fire Max codes for November 14 revealed: Check codes, how to redeem, and more - India TV News",
        "description": "Looking for Free Fire Max codes for today? Go to reward.ff.garena.com, and use codes (like ZFIXDVTSLSC) for cool stuff like premium bundles and diamonds!",
        "url": "https://www.indiatvnews.com/technology/news/garena-free-fire-max-daily-codes-14-november-for-weapons-diamonds-and-more-2023-11-14-902658",
        "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/11/garena-free-fire-codes-for-14-november-1699944291.jpg",
        "publishedAt": "2023-11-14T06:54:51Z",
        "content": "Garena Free Fire Max fans, gear up for today's exclusive redeem codes! Accessible on the official website reward.ff.garena.com, these 12-character alphanumeric codes unlock awesome things like outfit… [+1554 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Zee Business"
        },
        "author": "ZeeBiz WebTeam",
        "title": "Buy Apple iPhone 13 for just Rs 999 on Flipkart - Check Details - Zee Business",
        "description": "While most of the Diwali offers on smartphones are now over, theres still a chance to buy the iPhone 13 at the lowest price.",
        "url": "https://www.zeebiz.com/technology/news-apple-iphone-13-128gb-price-in-india-flipkart-offer-hdfc-bank-exchange-offer-264247",
        "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/11/14/268956-iphone13flipkart.jpg",
        "publishedAt": "2023-11-14T06:50:54Z",
        "content": "Apple iPhone 13 Series was the first to come with a diagonal rear camera design. The Cupertino-based tech company is still carrying the same design. So iPhone 13 can be the best option for those who … [+1267 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "ANI",
        "title": "Need to make changes in our daily activities: Union Minister G Kishan Reddy on World Diabetes Day - IndiaTimes",
        "description": "India News: Union Minister G Kishan Reddy spoke on World Diabetes Day, emphasizing the need to make lifestyle changes to prevent diabetes. He encouraged consultin",
        "url": "https://timesofindia.indiatimes.com/india/need-to-make-changes-in-our-daily-activities-union-minister-g-kishan-reddy-on-world-diabetes-day/articleshow/105202491.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105202564,width-1070,height-580,imgsize-492050,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-14T06:41:00Z",
        "content": "Rashmika Mandanna shines in ethnic wear, inspiring Diwali fashion choices"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "Disney Tom",
        "title": "Aluva child rape and murder case: Convict Asafaq Alam sentenced to death by Kerala court - Times of India",
        "description": "Asafaq Alam, who brutally sexually assaulted and murdered a five-year-old child in Kerala, has been sentenced to death by the Ernakulam additional dis",
        "url": "https://timesofindia.indiatimes.com/city/kochi/aluva-child-rape-and-murder-convict-asafaq-alam-sentenced-to-death/articleshow/105201526.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105201726,width-1070,height-580,imgsize-74514,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-14T06:23:00Z",
        "content": "Woman gang-raped at homestay, case registered, five arrested including a woman"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "Badshah reacts as rumours of him dating Mrunal Thakur take over internet - Hindustan Times",
        "description": "Rapper Badshah and actor Mrunal Thakur were spotted holding hands at a Diwali party on Sunday, sparking dating rumours.",
        "url": "https://www.hindustantimes.com/entertainment/music/badshah-reacts-as-rumours-of-him-dating-mrunal-thakur-take-over-social-media-101699941455531.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/14/1600x900/mrunal_thakur_1699941447755_1699941447976.jpg",
        "publishedAt": "2023-11-14T06:22:55Z",
        "content": "Rapper-singer Badshah is 'sorry to disappoint the internet,' but it looks like he is not dating Mrunal Thakur. After rumours of their relationship took over Reddit and Twitter on Monday, he shared a … [+1719 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "PRS Oberoi, Oberoi Group Chairman Emeritus and doyen of Indian hospitality, dies at 94 | Mint - Mint",
        "description": "Prithvi Raj Singh Oberoi, Chairman Emeritus of the Oberoi Group, passed away today. His passing is a significant loss for the hospitality industry in India and overseas.",
        "url": "https://www.livemint.com/companies/news/prs-oberoi-doyen-of-indian-hospitality-dies-11699931296603.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/11/14/1600x900/yfyergfw_1699933322552_1699933333590.jpg",
        "publishedAt": "2023-11-14T06:14:26Z",
        "content": "Prithvi Raj Singh Oberoi aka Biki, the doyen of Indian hospitality and Chairman Emeritus of the Oberoi Group passed away this morning, November 14, Tuesday, said a spokeswoman of the Oberoi Group. He… [+2991 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Israel Hamas War: Israeli Soldiers Capture Hamas Parliament, Share Pictures - India Today",
        "description": "Israeli army soldiers have taken over the Palestinian Legislative Council building in Gaza, also called the Gaza Parliament building. Photos show Israeli arm...",
        "url": "https://www.youtube.com/watch?v=BygFRCBx1tQ",
        "urlToImage": "https://i.ytimg.com/vi/BygFRCBx1tQ/maxresdefault.jpg",
        "publishedAt": "2023-11-14T05:51:35Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Tiger 3 Box Office Collection Day 2: Salman Khan's Film Sets New Record - NDTV Movies",
        "description": "The spy thriller has made Rs 58 crore on day 2",
        "url": "https://www.ndtv.com/entertainment/tiger-3-box-office-collection-day-2-salman-khans-spy-thriller-crosses-the-rs-100-crore-mark-4572228",
        "urlToImage": "https://c.ndtvimg.com/2023-11/bm8jo5co_salman-_625x300_14_November_23.jpg",
        "publishedAt": "2023-11-14T05:29:36Z",
        "content": "Salman-Katrina in a still from the film. (Courtesy: YouTube)\r\nNew Delhi: Tiger 3, the new entry in Salman Khan's blockbuster spy franchise, made its 100 crores in just two days. The film \"went into o… [+3059 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "6 In Car Killed After Collision With Truck In UP's Muzaffarnagar - NDTV",
        "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
        "url": "https://www.ndtv.com",
        "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
        "publishedAt": "2023-11-14T05:14:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "India vs New Zealand, Cricket World Cup 2023 Semi-Final: Match Preview, Prediction, Head-To-Head, Pi.. - NDTV Sports",
        "description": "Director Comey says the probe into last year's US election would assess if crimes were committed.",
        "url": "https://www.bbc.com/news/world-us-canada-39324587",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg",
        "publishedAt": "2023-11-14T05:03:31Z",
        "content": "Media caption, 'Putin hates Clinton' and other things the FBI learned about Russia\r\nFBI director James Comey has confirmed for the first time that the FBI is investigating alleged Russian interferenc… [+5942 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "AR Rahman's rendition of Kazi Nazrul Islam's song in 'Pippa' faces backlash | Explained | Mint - Mint",
        "description": "AR Rahman's rendition of a patriotic song by Kazi Nazrul Islam in the film 'Pippa' has drawn criticism from the poet's family and singers due to distortion in rhythm and tunes. The film's makers have issued an apology, but Nazrul Islam's grandson and granddau…",
        "url": "https://www.livemint.com/news/india/ar-rahmans-rendition-of-kazi-nazrul-islams-song-in-pippa-faces-backlash-explained-11699933520659.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/11/14/1600x900/AR_Rahman_1694420198500_1699934752176.jpg",
        "publishedAt": "2023-11-14T04:41:26Z",
        "content": "AR Rahmans rendition of a popular patriotic song of legendary Bengali poet Kazi Nazrul Islam in the Bollywood film Pippa has drawn flak. The litterateurs family and singers have expressed outrage ove… [+4091 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "title": "Mangalyaan-2 mission: How ISRO’s project is different from NASA’s Mars Reconnaissance Orbiter Mission - HT Tech",
        "description": "Know how ISRO’s Mars Orbiter mission-2 is different from NASA’s Mars Reconnaissance Orbiter Mission.",
        "url": "https://tech.hindustantimes.com/photos/mangalyaan2-mission-how-isro-s-project-is-different-from-nasa-s-mars-reconnaissance-orbiter-mission-71699935439705.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2023/11/14/1600x900/Last_1687759108971_1699935492344.jpg",
        "publishedAt": "2023-11-14T04:24:18Z",
        "content": "Top SectionsExplore Tech Copyright © HT Media Limited All rights reserved."
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Sushmita Srivastav",
        "title": "From Lemon Ginger Zinger to Green Tea Detox Elixir, 7 detox drinks to get over the festive binge - Moneycontrol",
        "description": "Best detox drinks: Relish these rejuvenating drinks to bid farewell to the post-festive slump. Incorporate them into your daily routine, and let the natural goodness cleanse and revitalise your body from within.",
        "url": "https://www.moneycontrol.com/news/health-and-fitness/from-lemon-ginger-zinger-to-green-tea-detox-elixir-7-detox-drinks-to-get-over-the-festive-binge-11737761.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/11/Benefits-of-Cucumber-Mint-Cooler-770x433.jpg",
        "publishedAt": "2023-11-14T04:20:33Z",
        "content": "As the festive season bids adieu, its time to pause, relax, and hit the reset button on our health. Indulging in delicious festive feasts is a delightful tradition, but it can leave us feeling sluggi… [+2787 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Business Standard"
        },
        "author": "Press Trust of India",
        "title": "Janjatiya Gaurav Diwas: PM Modi on two-day Jharkhand visit for celebrations - Business Standard",
        "description": "Prime Minister Narendra Modi will begin his two-day visit to Jharkhand on Tuesday, during which he will undertake a roadshow and launch several projects.",
        "url": "https://www.business-standard.com/india-news/janjatiya-gaurav-diwas-pm-modi-on-two-day-jharkhand-visit-for-celebrations-123111400147_1.html",
        "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-10/13/full/1697185607-5549.jpg",
        "publishedAt": "2023-11-14T04:12:54Z",
        "content": "Prime Minister Narendra Modi will begin his two-day visit to Jharkhand on Tuesday, during which he will undertake a roadshow and launch several projects.\r\nThe PM will arrive at Birsa Munda Airport in… [+1683 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "The Indian Express",
        "title": "2,000 people from Myanmar cross over to India as intense gunfight rock Chin state - The Indian Express",
        "description": null,
        "url": "https://indianexpress.com/article/india/2000-people-from-myanmar-cross-over-to-india-as-intense-gunfight-rock-chin-state-9025414/",
        "urlToImage": null,
        "publishedAt": "2023-11-14T03:53:34Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Amit Bathla",
        "title": "Uttarakhand tunnel collapse: Auger drilling machines at site to evacuate workers - Hindustan Times",
        "description": "A portion of the tunnel between Silkyara and Dandalgaon on the Brahmakhal- Yamunotri national highway collapsed in the early hours of Sunday",
        "url": "https://www.hindustantimes.com/cities/dehradun-news/uttarakhand-tunnel-collapse-auger-drilling-machines-at-site-to-evacuate-workers-101699933841710.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/14/1600x900/A-total-of-eight-pipes-have-arrived-at-the-spot-fr_1699933839278.jpg",
        "publishedAt": "2023-11-14T03:50:41Z",
        "content": "Nearly three feet diameter pipes will be pushed through the heap of debris by drilling a hole using auger drilling machines in the tunnel where 40 labourers have been trapped arrived at the accident … [+2096 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBCTV18"
        },
        "author": "Kanishka Sarkar",
        "title": "Stock market holiday: BSE, NSE closed on account of Diwali Balipratipada - CNBCTV18",
        "description": "Stock market closed today due to Diwali Balipratipada: Trading on both the stock exchanges — NSE and BSE — will resume on Wednesday, November 15.",
        "url": "https://www.cnbctv18.com/market/stocks/stock-market-holiday-bse-nse-closed-on-account-of-diwali-balipratipada-18320481.htm",
        "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2019/11/BSE-market-stocks-e1594835013863.jpg",
        "publishedAt": "2023-11-14T03:04:11Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Sumanti Sen",
        "title": "President Joe Biden, First Lady Jill light diyas to mark Diwali: watch - Hindustan Times",
        "description": "“Jill and I lit the Diya to symbolize Diwali’s message of seeking the light of wisdom, love, and unity over the darkness of hate and division,\" Joe Biden wrote",
        "url": "https://www.hindustantimes.com/world-news/us-news/president-joe-biden-first-lady-jill-light-diyas-to-mark-diwali-seeking-the-light-of-wisdom-love-and-unity-101699929251005.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/14/1600x900/Biden_1699929813411_1699929814143.jpg",
        "publishedAt": "2023-11-14T02:47:48Z",
        "content": "President Joe Biden has shared a video of himself and Jill Biden lighting diyas to mark the occasion of Diwali. Taking to X, he wrote, alongside the video, Today, Jill and I lit the Diya to symbolize… [+2684 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "2 Days After Diwali, Delhi Air Quality Slips Back Into \"Severe\" Category - NDTV",
        "description": "Delhi continued to struggle to breathe on Tuesday morning as its air quality index (AQI) entered the \"severe\" category, days after rain washed away the toxic haze.",
        "url": "https://www.ndtv.com/delhi-news/delhi-air-pollution-2-days-after-diwali-delhi-air-quality-slips-back-into-severe-category-4572040",
        "urlToImage": "https://c.ndtvimg.com/2022-11/i2qvgg8g_delhi-air-quality-delhi-air-pollution-india-gate-smog-pti_625x300_05_November_22.jpg",
        "publishedAt": "2023-11-14T02:19:57Z",
        "content": "An air quality index between 401 and 500 is considered \"severe\" (File)\r\nNew Delhi: Delhi gasped for a breath this morning as the Air Quality Index (AQI) re-entered the \"severe\" category in several ar… [+1911 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Moneycontrol News",
        "title": "Madhya Pradesh Assembly polls: Children of former CMs in fray - Moneycontrol",
        "description": "The BJP has been accusing former Congress chief ministers Kamal Nath and Digvijaya Singh of trying to establish the political career of their children to strengthen the party’s organisation in the state.",
        "url": "https://www.moneycontrol.com/news/assembly-elections/madhya-pradesh-assembly-polls-children-of-former-cms-in-fray-11736791.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2019/05/Voters-show-their-finger-marked-with-indelible-ink-after-casting-vote-at-a-polling-station-in-Nagaur-district-Rajasthan-on-May-06-2019.-Image-PTI-770x433.jpg",
        "publishedAt": "2023-11-14T01:30:00Z",
        "content": "With the upcoming assembly poll in Madhya Pradesh, the Congress party and the BJP have been trading barbs at each other. The BJP has been accusing former Congress chief ministers Kamal Nath and Digvi… [+3258 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Venkata Krishna B",
        "title": "For father who chanted ‘Saachin, Saachin’, it’s time for ‘Raachin, Raachin’ - The Indian Express",
        "description": "The software engineer, who migrated to New Zealand in the ’90s, was at M Chinnaswamy Stadium in Bengaluru when Rachin, playing Pakistan, smashed his third century of the tournament.",
        "url": "https://indianexpress.com/article/sports/cricket-world-cup/for-father-who-chanted-saachin-saachin-its-time-for-raachin-raachin-9025531/",
        "urlToImage": "https://images.indianexpress.com/2023/11/New-Zealand-player-Rachin-Ravindra-with-Sachin-Tendulkars-wax-figure-in-Sydney.-File.jpg",
        "publishedAt": "2023-11-14T00:24:24Z",
        "content": "Ravi Krishnamurthy, 53, cant get a chant out of his head since the time he returned to his home in Wellington after the short trip to India to watch his son Rachin Ravindra play the World Cup.The sof… [+4871 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Bqprime.com"
        },
        "author": "Sai Aravindh",
        "title": "NMDC, Kalyan Jewellers, Aster DM Q2 Results Today — Earnings Estimates - BQ Prime",
        "description": "Here are the earnings estimates of major companies that are scheduled to announce their results on Tuesday.",
        "url": "https://www.bqprime.com/business/nmdc-kalyan-jewellers-aster-dm-q2-results-today-earnings-estimates",
        "urlToImage": "https://gumlet.assettype.com/bloombergquint%2F2020-08%2Fda2782d6-dc5c-4021-8a2e-6282fae57398%2FNMDC_Ltd___image_Company_website_.png?w=1200&auto=format%2Ccompress&ogImage=true",
        "publishedAt": "2023-11-13T23:30:00Z",
        "content": "EMS Ltd., Yatra Online Ltd., Trident Ltd., Natco Pharma Ltd., Rajesh Exports Ltd., NMDC Steel Ltd., Dhampure Speciality Sugars Ltd., Indiabulls Housing Finance Ltd., MMTC Ltd., KNR Constructions LTD.… [+329 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Koimoi"
        },
        "author": "Umesh Punwani",
        "title": "Tiger 3: Hrithik Roshan’s Cameo Hints At Tiger Vs Pathaan In A Secret Way We All Missed, Sky Would Be The Limit For Shah Rukh Khan & Salman Khan’s Tag Team At The Box Office! - Koimoi",
        "description": "Can you imagine a film which would probably be discussed more about its cameos than the film itself? Salman Khan's Tiger 3 is a rare example because of the way in which Hrithik Roshan & Shah Rukh Khan's special appearances...",
        "url": "https://www.koimoi.com/bollywood-news/tiger-3-hrithik-roshans-cameo-hints-at-tiger-vs-pathaan-in-a-secret-way-we-all-missed-sky-would-be-the-limit-for-shah-rukh-khan-salman-khans-tag-team-at-the-box-office/",
        "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/11/jr-ntr-tiger-3-01.jpg",
        "publishedAt": "2023-11-13T23:00:17Z",
        "content": "Tiger 3: Hrithik Roshan’s Cameo Hints At Tiger Vs Pathaan In A Secret Way We All Missed, Sky Would Be The Limit For Shah Rukh Khan &amp; Salman Khan’s Tag Team… (Photo Credit Instagram; Facebook)\r\nCa… [+3266 chars]"
    }
],

"business": [
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "Anand Mahindra's lookalike? Industrialist says 'we were separated during...' | Mint - Mint",
        "description": "Mahindra Group chairman Anand Mahindra responds to a user on X who shared an image of his doppelganger, jokingly saying they were separated during a childhood 'Mela'.",
        "url": "https://www.livemint.com/news/india/anand-mahindras-lookalike-industrialist-says-we-were-separated-during-11699940952086.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/11/14/1600x900/2-0-238867174-Anand-Mahindra-0_1681101643013_1699945076352.JPG",
        "publishedAt": "2023-11-14T07:00:00Z",
        "content": "Mahindra Group chairman Anand Mahindra has been an active social media user. The Chairman often shares witty tweets, human interest stories, funny videos, offbeat posts to motivate and inspire his 10… [+1872 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "Piyush Goyal visits Tesla’s plant in California; here’s what Elon Musk had to say - IndiaTimes",
        "description": "India Business News: Tesla's entry in India soon? Indian Commerce and Industry Minister, Piyush Goyal, visited Tesla's manufacturing facility in California and announced t",
        "url": "https://timesofindia.indiatimes.com/business/india-business/piyush-goyal-visits-teslas-plant-in-california-heres-what-elon-musk-had-to-say/articleshow/105202418.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105202763,width-1070,height-580,imgsize-64524,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-14T06:55:00Z",
        "content": "FD Calculator\r\nWhen investing in a fixed deposit, the amount you deposit earns interest as per the prevailing...\r\nCalculate Now"
    },
    {
        "source": {
            "id": null,
            "name": "Entrackr"
        },
        "author": "Entrackr",
        "title": "Exclusive: Slice raises debt from Stride Ventures - Entrackr",
        "description": null,
        "url": "https://entrackr.com/2023/11/exclusive-slice-raises-debt-from-stride-ventures/",
        "urlToImage": null,
        "publishedAt": "2023-11-14T06:01:31Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "GaadiWaadi.com"
        },
        "author": "Surendhar M",
        "title": "5 Upcoming Mahindra SUVs In 2024 In India - 3 ICE & 2 EVs - GaadiWaadi.com",
        "description": "In the list of upcoming Mahindra SUVs in 2024, we have explained about the XUV300 facelift, XUV400 facelift, 5-Door Thar, etc",
        "url": "https://gaadiwaadi.com/5-upcoming-mahindra-suvs-in-2024-in-india-3-ice-2-evs/",
        "urlToImage": "https://gaadiwaadi.com/wp-content/uploads/2023/08/Mahindra-Thar-EV-Concept-Render-1.jpg",
        "publishedAt": "2023-11-14T05:05:19Z",
        "content": "Mahindra &amp; Mahindra will have a busy 2024 calendar year as a slew of new models have been planned and here we have explained the confirmed as well as speculated launches:\r\n1. Mahindra XUV300 Face… [+1915 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Moneycontrol News",
        "title": "Retail investor is like Glenn Maxwell, says Nilesh Shah of Kotak AMC - Moneycontrol",
        "description": "&quot;The maturity of retail investors is truly unbelievable. We now have to go fully prepared, investors ask us really tough questions&quot;",
        "url": "https://www.moneycontrol.com/news/business/markets/retail-investor-is-like-glenn-maxwell-says-nilesh-shah-of-kotak-amc-11724071.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/11/Nilesh-Shah-770x433.jpg",
        "publishedAt": "2023-11-14T04:56:43Z",
        "content": "Retail investors have matured and they know when to take a u-turn in markets, said Nilesh Shah, managing director of Kotak Mahindra Asset Management. In an exclusive interview with Moneycontrol, he s… [+3552 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "Hospitality icon, PRS Oberoi passes away: Oberoi Group mourns the passing of chairman Emeritus - Times of India",
        "description": "Prithvi Raj Singh Oberoi, the esteemed Chairman Emeritus of the Oberoi Group, has sadly passed away. Recognized for his outstanding contributions, he was honored with the Padma Vibhushan, India's second-highest civilian award, in January 2008. Servin",
        "url": "https://timesofindia.indiatimes.com/videos/toi-original/hospitality-icon-prs-oberoi-passes-away-oberoi-group-mourns-the-passing-of-chairman-emeritus/videoshow/105199711.cms",
        "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-105199711,imgsize-85684.cms",
        "publishedAt": "2023-11-14T04:55:03Z",
        "content": "Nov 14, 2023, 10:25AM ISTSource: TOI.inPrithvi Raj Singh Oberoi, the esteemed Chairman Emeritus of the Oberoi Group, has sadly passed away. Recognized for his outstanding contributions, he was honore… [+523 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Dhanya Nagasundaram",
        "title": "MSCI Index rejig: Nine stocks including IndusInd Bank, Suzlon Energy, Paytm, likely to enter global index; details here | Mint - Mint",
        "description": "According to Nuvama Alternative & Quantitative Research, the addition of IndusInd Bank, Suzlon Energy, Persistent Systems, APL Apollo, and One97 Communications to the MSCI Global Standard Index could result in inflows of $163 million to $290 million.",
        "url": "https://www.livemint.com/market/stock-market-news/msci-index-rejig-nine-stocks-including-indusind-bank-suzlon-energy-paytm-likely-to-enter-global-index-details-here-11699931112330.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/11/14/1600x900/2020-12-16T032841Z_1_LYNXMPEGBF06Z_RTROPTP_3_USA-C_1699933014363_1699933014498.JPG",
        "publishedAt": "2023-11-14T03:57:37Z",
        "content": "Analysts anticipate the addition of IndusInd Bank, Suzlon Energy, Persistent Systems, APL Apollo, and One97 Communications, parent company of Paytm, to the closely watched Morgan Stanley Capital Inte… [+2910 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Ravindra Sonavane",
        "title": "IREDA sets Rs 30-32 price band for its IPO - Moneycontrol",
        "description": "Basis of allotment will be on November 23, initiation of refund will be on November 28 and the firm will list on exchanges on December 1.",
        "url": "https://www.moneycontrol.com/news/business/ipo/ireda-sets-rs-30-32-price-band-for-its-ipo-11737731.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/11/market_flat-1-770x433.jpg",
        "publishedAt": "2023-11-14T03:25:17Z",
        "content": "State-run Indian Renewable Energy Development Agency (IREDA) has set a price band for its initial public offering at Rs 30-32 a share. The issue will open on November 21 and close on November 23. The… [+1812 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Information"
        },
        "author": "Sylvia Varnham O'Regan, Theo Wayt",
        "title": "Amazon Reaches Deal to Run Shopping Ads on Snap - The Information",
        "description": "Amazon has reached a deal with Snap that will let people buy Amazon products directly from ads on the Snapchat app, an Amazon spokesperson confirmed. The previously unreported arrangement closely resembles an ad partnership announced last week between Amazon …",
        "url": "https://www.theinformation.com/articles/amazon-reaches-deal-to-run-shopping-ads-on-snap",
        "urlToImage": "https://tii.imgix.net/production/articles/11699/db33a284-0255-4209-886c-360b809adf60.JPEG?fm=jpg&auto=compress&w=1200&frame=0",
        "publishedAt": "2023-11-14T03:06:00Z",
        "content": "Amazon has reached a deal with Snap that will let people buy Amazon products directly from ads on the Snapchat app, an Amazon spokesperson confirmed. The previously unreported arrangement closely res… [+580 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBCTV18"
        },
        "author": "Kanishka Sarkar",
        "title": "Stock market holiday: BSE, NSE closed on account of Diwali Balipratipada - CNBCTV18",
        "description": "Stock market closed today due to Diwali Balipratipada: Trading on both the stock exchanges — NSE and BSE — will resume on Wednesday, November 15.",
        "url": "https://www.cnbctv18.com/market/stocks/stock-market-holiday-bse-nse-closed-on-account-of-diwali-balipratipada-18320481.htm",
        "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2019/11/BSE-market-stocks-e1594835013863.jpg",
        "publishedAt": "2023-11-14T03:04:11Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Abeer Ray",
        "title": "Children’s Day: From PPF to real estate, 8 investment options you can choose from, for your child | Mint - Mint",
        "description": "Investing for children is not easy. It takes considerable decision-making to decide which investment options will help secure their future depending on how much you are looking to secure for them",
        "url": "https://www.livemint.com/money/personal-finance/childrens-day-from-ppf-to-real-estate-8-investment-options-you-can-choose-from-for-your-child-11699876442866.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/11/13/1600x900/2-0-1063745260-family-0_1679719271536_1699877040524.jpg",
        "publishedAt": "2023-11-14T02:08:28Z",
        "content": "Instead, parents must opt for appropriate investment avenues that facilitate the growth of their money over time. The question that then arises: where should one invest to fulfill the financial needs… [+17043 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Dhuraivel Gunasekaran",
        "title": "Opportunity in market correction: New midcap stocks that MFs added in October - Moneycontrol",
        "description": "The correction in equity markets due to geo-political reasons has provided the fund manager to add a fresh position in the quality midcap stocks with attractive valuations",
        "url": "https://www.moneycontrol.com/news/photos/business/personal-finance/new-midcap-stocks-added-by-mutual-funds-in-october-11737131.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/11/Feat-4-770x431.jpg",
        "publishedAt": "2023-11-14T01:55:13Z",
        "content": "Global equity markets including India were on correction mode in October mainly due to the global events such as rising US Treasury yields and the geopolitical conflict between Israel and Hamas. Nift… [+3226 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "Tata Technologies IPO to open for subscription on November 22. Details here | Mint - Mint",
        "description": "Tata Technologies IPO: Tata Motors' subsidiary Tata Technologies is planning to launch its IPO, offering up to 60,850,278 equity shares. The IPO will be open for subscription from November 22 to November 24",
        "url": "https://www.livemint.com/market/ipo/tata-technologies-ipo-to-open-for-subscription-on-november-22-details-here-11699925789916.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/11/14/1600x900/Tata_Technologies_IPO_1699926504733_1699926512088.JPG",
        "publishedAt": "2023-11-14T01:52:29Z",
        "content": "Tata Technologies IPO: After a gap of nearly two decades, Tata Group is going to launch its initial public offer (IPO) in the primary market. The company plans to float its public issue on November 2… [+2325 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Reuters",
        "title": "Amazon cuts jobs in games division marking second round of layoffs as a part of ‘broader restructuring’ | Mint - Mint",
        "description": "Amazon.com has cut around jobs in its games division marking the second round of layoffs in under a week for the online retailer and digital streaming provider.",
        "url": "https://www.livemint.com/news/amazon-cuts-jobs-in-games-division-marking-second-round-of-layoffs-as-a-part-of-broader-restructuring-11699922458344.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/11/14/1600x900/im-875187_1698337743784_1699923240904.jpg",
        "publishedAt": "2023-11-14T00:56:55Z",
        "content": "Amazon.com has cut around 180 jobs in its games division, at least the second round of layoffs in under a week by the online retailer and digital streaming provider in a broader restructuring, an ema… [+2437 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "FXStreet"
        },
        "author": "Lallalit Srijandorn",
        "title": "Gold Price Forecast: XAU/USD attracts some buyers above $1,940, investors await the US CPI data - FXStreet",
        "description": "Gold price (XAU/USD) attracts some buyers and currently trades around $1,946 during the early Asian trading hours on Tuesday.",
        "url": "https://www.fxstreet.com/news/gold-price-forecast-xau-usd-attracts-some-buyers-above-1-940-investors-await-the-us-cpi-data-202311140034",
        "urlToImage": "https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/stack-of-golden-bars-in-the-bank-vault-60756080_Large.jpg",
        "publishedAt": "2023-11-14T00:34:07Z",
        "content": "<ul><li>Gold price posts a modest recovery around $1,946 on the softer USD.</li><li>Gold traders will monitor the US inflation data on Tuesday.</li><li>The first resistance level is seen at $1,960; t… [+1499 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Bqprime.com"
        },
        "author": "Sai Aravindh",
        "title": "NMDC, Kalyan Jewellers, Aster DM Q2 Results Today — Earnings Estimates - BQ Prime",
        "description": "Here are the earnings estimates of major companies that are scheduled to announce their results on Tuesday.",
        "url": "https://www.bqprime.com/business/nmdc-kalyan-jewellers-aster-dm-q2-results-today-earnings-estimates",
        "urlToImage": "https://gumlet.assettype.com/bloombergquint%2F2020-08%2Fda2782d6-dc5c-4021-8a2e-6282fae57398%2FNMDC_Ltd___image_Company_website_.png?w=1200&auto=format%2Ccompress&ogImage=true",
        "publishedAt": "2023-11-13T23:30:00Z",
        "content": "EMS Ltd., Yatra Online Ltd., Trident Ltd., Natco Pharma Ltd., Rajesh Exports Ltd., NMDC Steel Ltd., Dhampure Speciality Sugars Ltd., Indiabulls Housing Finance Ltd., MMTC Ltd., KNR Constructions LTD.… [+329 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "DailyFX"
        },
        "author": "Diego Colman",
        "title": "US Dollar Setups Before US CPI: USD/JPY, GBP/USD, AUD/USD, Volatility Up Ahead - DailyFX",
        "description": "This article explores pivotal technical levels for USD/JPY, GBP/USD and AUD/USD that may act as support or resistance following the October U.S. inflation report due for release on Tuesday.",
        "url": "https://www.dailyfx.com/news/forex-usd-dollar-setups-before-us-cpi-usd-jpy-gbp-usd-aud-usd-volatility-up-ahead-20231113.html",
        "urlToImage": "https://a.c-dn.net/b/3tLvOr/USD_FOMC.JPG",
        "publishedAt": "2023-11-13T22:45:00Z",
        "content": "USD/JPY, GBP/USD, AUD/USD FORECAST:\r\n<ul><li>The October U.S. inflation report will steal the limelight on Tuesday</li><li>If actual CPI results deviate from consensus expectations by a wide margin, … [+4701 chars]"
    },
    {
        "source": {
            "id": "bloomberg",
            "name": "Bloomberg"
        },
        "author": "Tassia Sipahutar, John Viljoen",
        "title": "Stock Market Today: Dow, S&P Live Updates for November 14 - Bloomberg",
        "description": "European stocks and US equity futures posted small moves as traders awaited Tuesday’s US inflation report for confirmation that price pressures slowed last month.",
        "url": "https://www.bloomberg.com/news/articles/2023-11-13/stock-market-today-dow-s-p-live-updates",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i5cunynMU3qM/v0/1200x675.png",
        "publishedAt": "2023-11-13T22:34:51Z",
        "content": "European stocks and US equity futures posted small moves as traders awaited Tuesdays US inflation report for confirmation that price pressures slowed last month.\r\nMiners were the best performers in E… [+456 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Suneera Tandon",
        "title": "Tanishq sparkles as buyers snap up premium products | Mint - Mint",
        "description": "High-end pieces now bring 13% of Tanishq sales; company looks to add more Zoya outlets",
        "url": "https://www.livemint.com/companies/news/tanishq-sparkles-as-buyers-snap-up-premium-products-11699901982351.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/11/13/1600x900/2-0-608865086-tanishq1-0_1680261634987_1699902056985.jpg",
        "publishedAt": "2023-11-13T19:02:52Z",
        "content": "NEW DELHI : Titan Co.s jewellery division is witnessing a surge in demand for premium pieces, priced above 5 lakh, indicating a growing appetite for top-tier consumer goods. These high-end studded pi… [+3427 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Rhik Kundu",
        "title": "Retail inflation hits 4-month low in Oct | Mint - Mint",
        "description": "Food inflation, measured by the Consumer Food Price Index, which accounts for nearly half of the overall consumer price basket, slowed to 6.61% in October from 7.01% a year earlier",
        "url": "https://www.livemint.com/news/india/retail-inflation-hits-4-month-low-in-oct-11699901431318.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/11/13/1600x900/2-0-71719342-onion-prices-3C-0_1681408389243_1699901503014.jpg",
        "publishedAt": "2023-11-13T18:52:51Z",
        "content": "NEW DELHI : Retail inflation fell to a four-month low of 4.87% in October as food prices eased, prompting expectations that the central bank may yet again keep policy rates unchanged at its monetary … [+3741 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Ranjani Raghavan",
        "title": "Biocon Biologicals’ IPO only after integrating Viatris: CEO | Mint - Mint",
        "description": "The company’s biosimilar arm is looking to complete the process by the end of March",
        "url": "https://www.livemint.com/companies/news/biocon-biologicals-ipo-only-after-integrating-viatris-ceo-11699899467850.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/11/13/1600x900/2-0-283929040-biocon-0_1680508382348_1699899555144.JPG",
        "publishedAt": "2023-11-13T18:21:06Z",
        "content": "MUMBAI\r\n : \r\nBiocon Biologics Ltd, the biosimilar arm of Biocon, will consider a listing only after it completes the integration of its Viatris portfolio, which is due by the end of March, the compan… [+3114 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Business Standard"
        },
        "author": "Krishna Kant",
        "title": "Corporate profits surge, but Sensex earnings remain in slow lane - Business Standard",
        "description": "Shows deceleration in earnings of top-listed firms from FY22 highs",
        "url": "https://www.business-standard.com/markets/news/this-signals-a-sharp-deceleration-in-the-earnings-of-top-listed-companies-in-the-country-from-their-highs-in-fy22-and-fy23-123111300992_1.html",
        "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-11/13/full/1699898111-9773.jpg",
        "publishedAt": "2023-11-13T17:57:05Z",
        "content": "To read the full story, subscribe to BS Premium now, at just Rs 249/ month.Key stories on business-standard.com are available only to BS Premium subscribers.\r\nRegister to read more on Business-Standa… [+5 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Punekarnews.in"
        },
        "author": "Rahul Dolare",
        "title": "Pune Airport's 'Digi Yatra' Implementation Faces Challenges Amid Diwali Rush - Punekar News",
        "description": "Pune, 13th November 2023: The Pune Airport Authority has introduced the 'Digi Yatra' (Digi Trip) facility to streamline passenger checks and reduce waiting times. However, the lack of integration with three airlines— AirAsia, Star Air, and Alliance Air—has re…",
        "url": "https://www.punekarnews.in/pune-airports-digi-yatra-implementation-faces-challenges-amid-diwali-rush/",
        "urlToImage": "https://www.punekarnews.in/wp-content/uploads/2020/03/Pune-airport-e1584977416209.jpg",
        "publishedAt": "2023-11-13T15:13:31Z",
        "content": "Pune, 13th November 2023: The Pune Airport Authority has introduced the ‘Digi Yatra’ (Digi Trip) facility to streamline passenger checks and reduce waiting times. However, the lack of integration wit… [+2059 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "FXStreet"
        },
        "author": "Filip Lagaart",
        "title": "Oil jumps as markets buy into OPEC bullish oil outlook - FXStreet",
        "description": "Oil prices are finally starting to erase some of their incurred losses, which amounted to over 20% from its top in September near $94. Oil prices were getting battered as OPEC+ looks unable for now to provide any incentive",
        "url": "https://www.fxstreet.com/news/oil-testing-downside-support-at-75-ahead-of-opec-monthly-report-202311131130",
        "urlToImage": "https://editorial.fxstreet.com/images/Markets/Commodities/Energy/Oil/oil-pumps-25838229_Large.jpg",
        "publishedAt": "2023-11-13T14:52:24Z",
        "content": "<ul><li> WTI Oil off the low for this Monday</li><li>The US Dollar is in a wait-and-see pattern ahead of US inflation numbers. </li><li>Oil squares back some losses from last week. </li></ul>Oil pric… [+5753 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Moneycontrol News",
        "title": "Grasim Industries Q2 net profit rises 15% to Rs 1,164 crore - Moneycontrol",
        "description": "Grasim Industries is the flagship company of the Aditya Birla group, having interests in textile, chemicals and cement businesses, among others.",
        "url": "https://www.moneycontrol.com/news/business/earnings/grasim-industries-q2-net-profit-zooms-15-to-rs-1164-crore-11734311.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2017/11/RTR1VU1E-1-690x435.jpg",
        "publishedAt": "2023-11-13T14:49:15Z",
        "content": "Grasim Industries on November 13 reported consolidated net profit for the quarter ended September 30, 2023 at Rs 1,163.75 crore, registering a growth of 15.31 percent from Rs 1,009.17 crore in the sa… [+1170 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Carwale.com"
        },
        "author": "Jay Shah",
        "title": "Mahindra XUV300 Facelift likely to miss out on ADAS - CarWale",
        "description": "The newly spied prototypes of the mid-spec XUV300 facelift suggest that the SUV may miss out on ADAS tech.",
        "url": "https://www.carwale.com/news/mahindra-xuv300-facelift-likely-to-miss-out-on-adas/",
        "urlToImage": "https://imgd.aeplcdn.com/642x336/n/cw/ec/164703/mahindra-xuv300-facelift-left-front-three-quarter2.jpeg?isig=0&art=1&q=80",
        "publishedAt": "2023-11-13T14:42:50Z",
        "content": "<ul><li>To get new headlamp design along with connected tail lamps</li><li>Expected to be launched in 2024</li></ul>The XUV300 facelift is one of the anticipated launches from Mahindra in 2024. The t… [+1015 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Bqprime.com"
        },
        "author": "Shubhayan Bhattacharya",
        "title": "RVNL Gets Rs 311 Crore Order From Railways To Build Tunnels, Bridges - BQ Prime",
        "description": "The contract will be executed in 18 months.",
        "url": "https://www.bqprime.com/business/rvnl-gets-rs-311-crore-order-from-railways-to-build-tunnels-bridges",
        "urlToImage": "https://gumlet.assettype.com/bloombergquint%2F2023-05%2Fc9ce731c-fea0-4930-aaa5-7676d50b9e1f%2FLKOPBE1.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
        "publishedAt": "2023-11-13T14:40:46Z",
        "content": "The state-run Rail Vikas Nigam Ltd. received a letter of acceptance for a Rs 311 crore order from the Central Railway to build tunnels and bridges in Madhya Pradesh.\r\nThe company will construct four … [+349 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Investing.com"
        },
        "author": "Barani Krishnan",
        "title": "Crude oil edges higher; OPEC lifts demand growth forecast By Investing.com - Investing.com",
        "description": "Oil up as OPEC blames speculators for market crash; jury still out on demand",
        "url": "https://www.investing.com/news/commodities-news/crude-oil-edges-higher-opec-lifts-demand-growth-forecast-3232535",
        "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEBA20ZO_L.jpg",
        "publishedAt": "2023-11-13T14:27:00Z",
        "content": "Investing.com - OPEC has acted as OPEC in blaming everything but itself for the market crash in oil, and issuing higher forecast numbers to reinforce its bet that oil demand is well and fine.\r\nIn its… [+2971 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "Tata Steel to scrap 800 positions in Netherlands, mulling 'thousands' of job cuts in UK | Mint - Mint",
        "description": "Tata Steel Monday said its Netherlands unit would scrap around 800 jobs at its under-pressure plant in IJmuiden near Amsterdam to ‘improve market conditions and bring down costs’",
        "url": "https://www.livemint.com/companies/news/tata-steel-to-scrap-800-jobs-in-the-netherlands-11699883908952.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/11/13/1600x900/Tata_Steel_1699884145301_1699884154945.jpg",
        "publishedAt": "2023-11-13T14:10:12Z",
        "content": "Tata Steel on Monday said its Netherlands unit would scrap around 800 jobs at its under-pressure plant in near Amsterdam in a bid to improve market conditions and bring down costs,\" reported AFP.  \"T… [+1873 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Rituraj Baruah",
        "title": "Govt plans 1.4 billion tonne coal output by 2027 | Mint - Mint",
        "description": "In response to rising power demand, the government has asked power generating companies to blend 6% imported coal until March 2024",
        "url": "https://www.livemint.com/industry/govt-plans-1-4-billion-tonne-coal-output-by-2027-11699882102710.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/11/13/1600x900/g0cf1ac37ea6a5853d7f308e344b0b52cf4e2ce445913f9a0d5cbd7a63edcbd88b83b9e521bbb9993edc605580b924f75b2c4aa75814726192887f65e7c8a1bca_1280_1699882968581_1699882982996.jpg",
        "publishedAt": "2023-11-13T13:44:58Z",
        "content": "New Delhi: The Union coal ministry on Monday announced plans to increase India's coal production to 1.404 billion tonne by 2027, with an eye to further boost it to 1.577 billion tonne by 2030.  Curre… [+2257 chars]"
    }
],

"entertainment": [
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "PTI",
        "title": "Kapil Sharma's new comedy show to air on Netflix; Archana, Krushna join him - Hindustan Times",
        "description": "Kapil Sharma's The Kapil Sharma Show became a rage among the viewers. Many celebrities including Shah Rukh Khan, and Salman Khan often made appearances. | Web Series",
        "url": "https://www.hindustantimes.com/entertainment/web-series/kapil-sharma-new-comedy-show-on-netflix-archana-puran-singh-krushna-abhishek-kiku-sharda-101699944851567.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/14/1600x900/kapil_sharma_1699946303423_1699946506839.jpg",
        "publishedAt": "2023-11-14T07:22:58Z",
        "content": "Comedian Kapil Sharma has partnered with Netflix for a new comedy show. Kapil, who ruled the Indian television scene with his popular celebrity chat series The Kapil Sharma Show, will now bring a \"fr… [+2514 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "Badshah reacts as rumours of him dating Mrunal Thakur take over internet - Hindustan Times",
        "description": "Rapper Badshah and actor Mrunal Thakur were spotted holding hands at a Diwali party on Sunday, sparking dating rumours.",
        "url": "https://www.hindustantimes.com/entertainment/music/badshah-reacts-as-rumours-of-him-dating-mrunal-thakur-take-over-social-media-101699941455531.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/14/1600x900/mrunal_thakur_1699941447755_1699941447976.jpg",
        "publishedAt": "2023-11-14T06:22:55Z",
        "content": "Rapper-singer Badshah is 'sorry to disappoint the internet,' but it looks like he is not dating Mrunal Thakur. After rumours of their relationship took over Reddit and Twitter on Monday, he shared a … [+1719 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "'Leo' box office collection: Vijay starrer surpassed Rajinikanth's 'Jailer', becomes the highest-grossing - IndiaTimes",
        "description": "Vijay's 'Leo' has been having a successful theatrical run and the film is set to complete a month of theatrical run. Meanwhile, 'Leo' has grossed over",
        "url": "https://timesofindia.indiatimes.com/entertainment/tamil/movies/box-office/leo-box-office-collection-vijay-starrer-surpassed-rajinikanths-jailer-becomes-the-highest-grossing-tamil-film-of-2023/articleshow/105200849.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105200849,width-1070,height-580,imgsize-256085,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-14T05:47:00Z",
        "content": "Leo | Tamil Song - Im Scared (Lyrical)"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Tiger 3 Box Office Collection Day 2: Salman Khan's Film Sets New Record - NDTV Movies",
        "description": "The spy thriller has made Rs 58 crore on day 2",
        "url": "https://www.ndtv.com/entertainment/tiger-3-box-office-collection-day-2-salman-khans-spy-thriller-crosses-the-rs-100-crore-mark-4572228",
        "urlToImage": "https://c.ndtvimg.com/2023-11/bm8jo5co_salman-_625x300_14_November_23.jpg",
        "publishedAt": "2023-11-14T05:29:36Z",
        "content": "Salman-Katrina in a still from the film. (Courtesy: YouTube)\r\nNew Delhi: Tiger 3, the new entry in Salman Khan's blockbuster spy franchise, made its 100 crores in just two days. The film \"went into o… [+3059 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "Kareena Kapoor reveals why she married Saif Ali Khan after living in for 5 years - Hindustan Times",
        "description": "Kareena Kapoor opens up about marriage and parenthood in candid interview, talks about wanting to live her life her way. | Bollywood",
        "url": "https://www.hindustantimes.com/entertainment/bollywood/kareena-kapoor-reveals-why-she-married-saif-ali-khan-after-living-in-for-5-years-101699936558316.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/14/1600x900/kareena_saif_1699719390882_1699936679747.jpg",
        "publishedAt": "2023-11-14T05:10:35Z",
        "content": "Kareena Kapoor and Saif Ali Khan married over a decade ago. He was earlier married to Amrita Singh. In a new cover interview with The Dirty Magazine, Kareena opened up about marriage and parenthood. … [+2114 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "Pics: Inside Priyanka Chopra-Nick Jonas' glittering Diwali dinner bash - IndiaTimes",
        "description": "Additional images offered a sneak peek into the captivating dining space of the Diwali gathering. The focal point was embellished with stunning floral",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/pics-inside-priyanka-chopra-nick-jonas-glittering-diwali-dinner-bash/articleshow/105199925.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105199925,width-1070,height-580,imgsize-75270,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-14T05:04:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "Animal song Papa Meri Jaan: Explore Ranbir Kapoor, Anil Kapoor's complex bond - Hindustan Times",
        "description": "On Children's Day, a new song from Animal, Papa Meri Jaan, was unveiled, which sets the stage for Ranbir Kapoor and Anil Kapoor's messed up dynamic. | Bollywood",
        "url": "https://www.hindustantimes.com/entertainment/bollywood/animal-song-papa-meri-jaan-ranbir-kapoor-and-anil-kapoors-track-explores-their-complex-father-son-bond-101699937660341.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/14/1600x900/animal_1699937873981_1699937878961.png",
        "publishedAt": "2023-11-14T05:01:19Z",
        "content": "Animal's new song Papa Meri Jaan has been released. The song delves deep into the emotional connection between the characters portrayed by Ranbir Kapoor and Anil Kapoor, shedding light on the vulnera… [+2031 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "AR Rahman's rendition of Kazi Nazrul Islam's song in 'Pippa' faces backlash | Explained | Mint - Mint",
        "description": "AR Rahman's rendition of a patriotic song by Kazi Nazrul Islam in the film 'Pippa' has drawn criticism from the poet's family and singers due to distortion in rhythm and tunes. The film's makers have issued an apology, but Nazrul Islam's grandson and granddau…",
        "url": "https://www.livemint.com/news/india/ar-rahmans-rendition-of-kazi-nazrul-islams-song-in-pippa-faces-backlash-explained-11699933520659.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/11/14/1600x900/AR_Rahman_1694420198500_1699934752176.jpg",
        "publishedAt": "2023-11-14T04:41:26Z",
        "content": "AR Rahmans rendition of a popular patriotic song of legendary Bengali poet Kazi Nazrul Islam in the Bollywood film Pippa has drawn flak. The litterateurs family and singers have expressed outrage ove… [+4091 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "India Today Entertainment Desk",
        "title": "Atlee confirms working on a script for SRK and Vijay: It could be... - India Today",
        "description": "In a recent interview, Atlee confirmed that he's working on a script that will bring together Shah Rukh Khan and Thalapathy Vijay. He had earlier spoken about it at the India Today Conclave this year as well.",
        "url": "https://www.indiatoday.in/movies/regional-cinema/story/atlee-confirms-working-on-a-script-for-shah-rukh-khan-and-thalapathy-vijay-it-could-be-2462544-2023-11-14",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/atlee-vijay-shah-rukh-khan-143705942-16x9_0.jpeg?VersionId=PmKrRpW8rDCWGw.6H7ON_Jqv6IiYxhp4",
        "publishedAt": "2023-11-14T04:09:05Z",
        "content": "Director Atlee scored a massive hit in 2023 with Shah Rukh Khan-starrer 'Jawan'. The film earned over Rs 1,000 crore worldwide in its lifetime run. In a recent interview, Atlee revealed that he is cu… [+1766 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "Varun Tej, Lavanya Tripathi glow in red and black combo for another Diwali bash - Hindustan Times",
        "description": "Newlyweds Varun Tej and Lavanya Tripathi are celebrating the festive season with great outfits and photoshoots. See their pictures here.",
        "url": "https://www.hindustantimes.com/entertainment/telugu-cinema/varun-tej-lavanya-tripathi-glow-in-red-and-black-combo-for-another-amazing-diwali-bash-101699932109584.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/14/1600x900/lavanya_tripathi_varun_tej_1699932270439_1699932270753.jpg",
        "publishedAt": "2023-11-14T04:02:03Z",
        "content": "This Diwali is extra special for Varun Tej and Lavanya Tripathi as it is their first time celebrating together as a married couple. Varun and Lavanya tied the knot in Italy earlier this month and hav… [+2006 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "Vicky Kaushal was asked who his favorite actress is apart from wife Katrina Kaif; his reply will leave yo - IndiaTimes",
        "description": "Recently, Vicky Kaushal took to his IG handle to share some pics, that included the Kaifs and Kaushals in full attendance. Seen in the pics were Vicky",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/vicky-kaushal-was-asked-who-his-favorite-actress-is-apart-from-wife-katrina-kaif-his-reply-will-leave-you-in-splits/articleshow/105198537.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105198504,width-1070,height-580,imgsize-220960,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-14T03:52:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Arfa Javaid",
        "title": "Kili Paul, sis Neema Paul’s video set to Khalasi lights up Instagram - Hindustan Times",
        "description": "Kili Paul and Neema Paul’s video set to the tunes of Coke Studio song Khalasi has been swiftly going viral on Instagram and is sure to lift your spirits.  | Trending",
        "url": "https://www.hindustantimes.com/trending/kili-paul-sis-neema-paul-s-video-set-to-khalasi-lights-up-instagram-101699932544826.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/14/1600x900/coke-studio-khalasi-kili-paul-neema-paul-instagram_1699932974865_1699932989757.jpg",
        "publishedAt": "2023-11-14T03:38:06Z",
        "content": "Tanzanian content creator Kili Paul and his sister Neema Paul are known for their love for Indian music. They consistently treat their audience to captivating videos set to the latest Indian chart-to… [+1428 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "PINKVILLA"
        },
        "author": "Lubna Khan",
        "title": "INSIDE Arpita Khan’s Diwali bash ft. Salman Khan, Sohail Khan, Shilpa Shetty, Shamita Shetty and others-PICS - PINKVILLA",
        "description": "After Salman Khan And Shah Rukh Khan’s Video From Arpita Khan’s Diwali Bash, We Have Now Come Across Some Inside Pictures From The Party Featuring Salman, Sohail, Shilpa Shetty And Others.",
        "url": "https://www.pinkvilla.com/entertainment/news/inside-arpita-khans-diwali-bash-ft-salman-khan-sohail-khan-shilpa-shetty-shamita-shetty-and-others-pics-1258294",
        "urlToImage": "https://www.pinkvilla.com/images/2023-11/1621102964_inside-arpita-khans-diwali-bash-ft-salman-khan-sohail-khan-shilpa-shetty-shamita-shetty-and-oth.jpg",
        "publishedAt": "2023-11-14T03:33:58Z",
        "content": "Two days ago, Arpita Khan Sharma and Aayush Sharma hosted a grand Diwali bash which was attended by the whos who of Bollywood including Salman Khan, Shah Rukh Khan, Karisma Kapoor, Shilpa Shetty, Son… [+1867 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "Raveena Tandon's Diwali dump includes pics with Sushmita Sen, Govinda. See pics - Hindustan Times",
        "description": "Raveena Tandon celebrated Diwali with Bollywood friends and family. Check out her Diwali post featuring photos with daughter Rasha Thadani and celebs. | Bollywood",
        "url": "https://www.hindustantimes.com/entertainment/bollywood/raveena-tandon-diwali-pics-sushmita-sen-govinda-family-101699931218648.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/14/1600x900/raveena_1699931654991_1699931685559.jpg",
        "publishedAt": "2023-11-14T03:30:13Z",
        "content": "Raveena Tandon has had a busy Diwali this year, hopping from one Diwali party to another. The actor was spotted with daughter Rasha Thadani, who will be making her Bollywood debut soon, at many of th… [+2442 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": null,
        "title": "Deepika Padukone opens up on her struggling period and spending time with Ranveer Singh: 'My mother would be so worried...' - Times of India",
        "description": "Deepika Padukone was recently in news for her statement on Karan Johar's show about her being in an 'open relationship' with Ranveer Singh before he proposed to her and now the diva has opened up about her struggle period, how she dealt with things as a teena…",
        "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/deepika-padukone-opens-up-on-her-struggling-period-and-spending-time-with-ranveer-singh-my-mother-would-be-so-worried-/videoshow/105197916.cms",
        "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-105197916,imgsize-20364.cms",
        "publishedAt": "2023-11-14T03:13:04Z",
        "content": "Nov 14, 2023, 08:43AM ISTSource: etimes.inDeepika Padukone was recently in news for her statement on Karan Johar's show about her being in an 'open relationship' with Ranveer Singh before he proposed… [+1267 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "News18"
        },
        "author": "Kashvi Raj Singh",
        "title": "Shehnaaz Gill REACTS After SidNaaz Fans Troll Her For Visiting Raghav Juyal's Hometown: 'I Don't...' - News18",
        "description": "Shehnaaz Gill took to her Instagram story to share a photo of herself with the words \"I don't care\" written on her glasses.",
        "url": "https://www.news18.com/movies/shehnaaz-gill-reacts-after-sidnaaz-fans-troll-her-for-visiting-raghav-juyals-hometown-i-dont-8661151.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/11/fotojet-2023-11-13t164406.698-2023-11-01df189ae9e5e126eb004aaf87ef182b-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2023-11-14T02:09:00Z",
        "content": "Shehnaaz Gill worked with Raghav Juyal in Salman Khans Kisi Ka Bhai Kisi Ki Jaan. Since she shared screen space with the actor, some netizens believed that the duo were dating. Although Raghav has de… [+1462 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "VOGUE India"
        },
        "author": "VOGUE India",
        "title": "Taurus Horoscope Today: November 14, 2023 - VOGUE India",
        "description": null,
        "url": "https://www.vogue.in/horoscope/product/taurus-horoscope-today-november-14-2023/",
        "urlToImage": null,
        "publishedAt": "2023-11-14T00:20:31Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Koimoi"
        },
        "author": "Umesh Punwani",
        "title": "Tiger 3: Hrithik Roshan’s Cameo Hints At Tiger Vs Pathaan In A Secret Way We All Missed, Sky Would Be The Limit For Shah Rukh Khan & Salman Khan’s Tag Team At The Box Office! - Koimoi",
        "description": "Can you imagine a film which would probably be discussed more about its cameos than the film itself? Salman Khan's Tiger 3 is a rare example because of the way in which Hrithik Roshan & Shah Rukh Khan's special appearances...",
        "url": "https://www.koimoi.com/bollywood-news/tiger-3-hrithik-roshans-cameo-hints-at-tiger-vs-pathaan-in-a-secret-way-we-all-missed-sky-would-be-the-limit-for-shah-rukh-khan-salman-khans-tag-team-at-the-box-office/",
        "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/11/jr-ntr-tiger-3-01.jpg",
        "publishedAt": "2023-11-13T23:00:17Z",
        "content": "Tiger 3: Hrithik Roshan’s Cameo Hints At Tiger Vs Pathaan In A Secret Way We All Missed, Sky Would Be The Limit For Shah Rukh Khan &amp; Salman Khan’s Tag Team… (Photo Credit Instagram; Facebook)\r\nCa… [+3266 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "Fans dig up old photo of Alekha Advani with Aadar Jain and Tara Sutaria: 'Always the third wheel' - IndiaTimes",
        "description": "Aadar Jain has made his new relationship with Alekha Advani \"Insta-official\" after Tara Sutaria confirmed that she is single. Netizens have found an o",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/fans-dig-up-old-photo-of-alekha-advani-with-aadar-jain-and-tara-sutaria-always-the-third-wheel/articleshow/105193045.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105193045,width-1070,height-580,imgsize-140908,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-13T19:46:00Z",
        "content": null
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "Zeenat Aman opens up about the challenges of parenthood during a family vacation with Zahaan and Azaan - IndiaTimes",
        "description": "Actress Zeenat Aman recently shared a nostalgic post on Instagram, recalling a humorous incident involving her son during a family vacation in Mauriti",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/zeenat-aman-opens-up-about-the-challenges-of-parenthood-during-a-family-vacation-with-zahaan-and-azaan/articleshow/105192604.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105192605,width-1070,height-580,imgsize-48688,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-13T18:37:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Dr J.N Pandey",
        "title": "Cancer Daily Horoscope Today, November 14, 2023 predicts a promotion - Hindustan Times",
        "description": "Read Cancer daily horoscope for November 14, 2023 to know your daily astrological predictions. Cancerians, it's time to put your foot down and take charge! | Horoscope",
        "url": "https://www.hindustantimes.com/astrology/horoscope/cancer-daily-horoscope-today-november-14-2023-predicts-a-promotion-101699863044413.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/13/1600x900/cancer_monthly_horoscope_1690875694442_1699900439837.jpg",
        "publishedAt": "2023-11-13T18:36:25Z",
        "content": "Cancer (21st June to 22nd July)\r\nDaily Horoscope Prediction says, Time to Take Charge of Your Life, Cancer!\r\nCancer Daily Horoscope Today, November 14, 2023. Cancerians, it's time to put your foot do… [+2676 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Bollywood Life"
        },
        "author": "Urmimala Banerjee",
        "title": "Bigg Boss 17: Ankita Lokhande fans heartbroken with Vicky Jain's behaviour; netizens reminded of Ranbir Kapoo - Bollywood Life",
        "description": "Bigg Boss 17: Ankita Lokhande fans upset with how Vicky Jain is behaving with the actress. His comment on spectacles reminds them of how Alia Bhatt said that Ranbir Kapoor tells her to wipe off the lipstick",
        "url": "https://www.bollywoodlife.com/bigg-boss/bigg-boss-17-ankita-lokhande-fans-heartbroken-with-vicky-jains-behaviour-netizens-reminded-of-ranbir-kapoor-and-lipstick-matter-entertainment-news-2689038/",
        "urlToImage": "https://st1.bollywoodlife.com/wp-content/uploads/2023/11/FotoJet-2023-11-13T233910.948.jpg",
        "publishedAt": "2023-11-13T18:31:18Z",
        "content": "Bigg Boss 17 fans feel that Ankita Lokhande and Munawar Faruqui are two celebs who are winning material for the show. At the same time, people are appalled to see Vicky Jain's behavior with his wife.… [+3178 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "Arunesh Kumar Sharma",
        "title": "Daily Leo Horoscope Today, November 14, 2023: Balance and harmony will increase! - India Today",
        "description": "Leo Horoscope Today for November 14: Balance and harmony will increase. Check the full predictions here.",
        "url": "https://www.indiatoday.in/horoscopes/leo/story/leo-horoscope-today-daily-for-14-november-2023-balance-and-harmony-will-increase-2462332-2023-11-14",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/leo-horoscope-071310-16x9_4.jpg?VersionId=m3MnKGxMgP55o92AvmdsKLrAihVSFY1U",
        "publishedAt": "2023-11-13T18:30:38Z",
        "content": "What will your day look like in terms of health, romance, finance and fortune? Read everything here.\r\nMonetary gains: Clarity will be maintained in important matters. There will be progress in profes… [+1077 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "Hrithik Roshan and girlfriend Saba Azad's heartwarming Diwali picture with the Roshan family embodies the - IndiaTimes",
        "description": "Bollywood star Hrithik Roshan shared his Diwali celebration moments on Instagram, featuring girlfriend Saba Azad and family. Wearing all black, Hrithi",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/hrithik-roshan-and-girlfriend-saba-azads-heartwarming-diwali-picture-with-the-roshan-family-embodies-the-festival-of-love/articleshow/105192445.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105192424,width-1070,height-580,imgsize-59966,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-13T18:28:00Z",
        "content": "Salman Khan, Katrina Kaif, Ibrahim Ali Khan, and others attend Ramesh Tauranis Diwali bash in style"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "Amit Sadh opens up about Sushant Singh Rajput's demise; says there was no way to reach him - IndiaTimes",
        "description": "Amit Sadh, who acted alongside Sushant Singh Rajput in 'Kai Po Che', expressed his disappointment and frustration over not being able to reach out to",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/amit-sadh-opens-up-about-sushant-singh-rajputs-demise-says-there-was-no-way-to-reach-him/articleshow/105190807.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105190807,width-1070,height-580,imgsize-15230,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-13T15:55:00Z",
        "content": null
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "Bigg Boss 17: From Khanzaadi-Abhishek's love angle to Salman Khan's biased reaction to Mannara Chopra; Netizens react to the fiery Weekend ka Vaar - IndiaTimes",
        "description": "Bigg Boss 17's avid viewers witnessed a lengthy Weekend Ka Vaar for Diwali 2023. Katrina Kaif was in the house. Salman Khan had to school all of the housemates after they got into a heated disagreement. Salman Khan revealed to Khanzaadi that she has a habit t…",
        "url": "https://timesofindia.indiatimes.com/tv/news/hindi/bigg-boss-17-from-khanzaadi-abhisheks-love-angle-to-salman-khans-biased-reaction-to-mannara-chopra-netizens-react-to-the-fiery-weekend-ka-vaar/photostory/105190427.cms",
        "urlToImage": "https://static.toiimg.com/photo/msid-105190625.cms",
        "publishedAt": "2023-11-13T15:38:49Z",
        "content": "Netizens aren't happy with how Khanzaadi is trying to portray all goody good. A user reacted, \"Chalo good, #MunawarFaruqui, #AnkitaLokhande &amp; #VickyJain recognize the real #Khanzaadi. She is narc… [+195 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": null,
        "title": "Dia Mirza gets trolled for her 'No Gifts on Diwali' video; netizens say, 'This Diwali please don't give gyan' - Times of India",
        "description": "Dia Mirza began trending on micro-blogging site X a day after Diwali and the reason was a video wherein she was seen advocating 'no gifts policy for Diwali'. The snippet shows Dia saying, 'This Diwali don't give me anything. Please don't give me gifts. I feel…",
        "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/dia-mirza-gets-trolled-for-her-no-gifts-on-diwali-video-netizens-say-this-diwali-please-dont-give-gyan/videoshow/105190108.cms",
        "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-105190108,imgsize-65118.cms",
        "publishedAt": "2023-11-13T15:17:10Z",
        "content": "Nov 13, 2023, 08:47PM ISTSource: etimes.inDia Mirza began trending on micro-blogging site X a day after Diwali and the reason was a video wherein she was seen advocating 'no gifts policy for Diwali'.… [+1291 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "5 times Anushka Sharma and Virat Kohli spoke about their daughter Vamika - IndiaTimes",
        "description": "5 times Anushka Sharma and Virat Kohli spoke about their daughter Vamika",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/5-times-anushka-sharma-and-virat-kohli-spoke-about-their-daughter-vamika/photostory/105189983.cms",
        "urlToImage": "https://static.toiimg.com/photo/105190156.cms",
        "publishedAt": "2023-11-13T14:47:05Z",
        "content": "Following the birth of Anushka Sharma and Virat Kohli's daughter in January 2021, fans were busy picking and suggesting names for their baby girl. Many also believed that the couple would name their … [+276 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "Mick Jagger in Kolkata: Rock legend extends Diwali wishes; spotted watching cricket match and singing with Usha Uthup | Mint - Mint",
        "description": "Mick Jagger, the legendary frontman of The Rolling Stones, visited Kolkata for a cricket match and to celebrate Diwali and Kali Pujo.",
        "url": "https://www.livemint.com/news/india/mick-jagger-in-kolkata-rock-legend-extends-diwali-wishes-spotted-watching-cricket-match-and-singing-with-usha-uthup-11699880435667.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/11/13/1600x900/Mick-Jagger-2_1699883408072_1699883456119.jpg",
        "publishedAt": "2023-11-13T13:57:08Z",
        "content": "Mick Jagger, the founder and frontman of The Rolling Stones, was recently seen enjoying a lively visit to the City of Joy - Kolkata. The iconic rock musician, who is apparently a massive cricket fan,… [+1867 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "India Today Entertainment Desk",
        "title": "Ajay Devgn celebrates Diwali with wife Kajol, shares pic 'by popular demand' - India Today",
        "description": "Ajay Devgn enjoyed the festival of lights with his wife Kajol and son Yug. After the actress shared a couple of pictures, the 'Singham' actor also posted a photo of their vibrant Diwali celebrations.",
        "url": "https://www.indiatoday.in/movies/celebrities/story/ajay-devgn-celebrates-diwali-with-wife-kajol-picture-instagram-2462401-2023-11-13",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/ajay-devgn-and-kajol-133112305-16x9_0.jpg?VersionId=HgOU3ZxfpBnzc71rD5S3d6x7rDPHb.k2",
        "publishedAt": "2023-11-13T13:38:12Z",
        "content": "Diwali was celebrated with immense fervour on Sunday, November 12. Bollywood celebrities decked up in their bests to enjoy the festival with their family and loved ones. Recently, Kajol also dropped … [+1314 chars]"
    }
],

"health": [
    {
        "source": {
            "id": null,
            "name": "Cureus.com"
        },
        "author": null,
        "title": "A Rare Case of Central Odontogenic Fibroma of the Mandible - Cureus",
        "description": "The benign tumor central odontogenic fibroma (COF) accounts for less than 1% of all the existing odontogenic tumors. The mandibular or maxillary cortical plate is seen to show asymptotic diversification. It has been characterized as a benign jaw neoplasm. Rad…",
        "url": "https://www.cureus.com/articles/197316-a-rare-case-of-central-odontogenic-fibroma-of-the-mandible",
        "urlToImage": "https://assets.cureus.com/uploads/figure/file/778025/article_river_c572f770637a11eeaddaf1ec48aedbed-Fig-4.png",
        "publishedAt": "2023-11-14T08:29:56Z",
        "content": "Enter your email address to receive your free PDF download.\r\nPlease note that by doing so you agree to be added to our monthly email newsletter distribution list."
    },
    {
        "source": {
            "id": null,
            "name": "World Health Organization"
        },
        "author": "Global Tuberculosis Programme",
        "title": "Roadmap towards ending TB in children and adolescents, 3rd ed - World Health Organization",
        "description": "The Roadmap towards ending TB among children and adolescents, third edition builds on the 2013 and 2018 versions. The 2023 version recognizes the progress made over the past five years and outlines priorities and key actions designed to accelerate progress to…",
        "url": "https://www.who.int/publications-detail-redirect/9789240084254",
        "urlToImage": "https://iris.who.int/bitstream/handle/10665/373949/9789240084254-eng.pdf.jpg?sequence=4",
        "publishedAt": "2023-11-14T08:21:54Z",
        "content": "Overview \r\nThe Roadmap towards ending TB among children and adolescents, third edition builds on the2013 and 2018 versions. The 2023 version recognizes the progress made over the past five years and … [+1298 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "5 nutrient deficiencies that are dangerous for your heart health - IndiaTimes",
        "description": "Vitamin deficiencies can arise at any point of age. Your diet and lifestyle habits may fulfill most of them but they can be detrimental to your basic body functions including heart. These nutrient deficiencies have the worst effect on your heart function.",
        "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/5-nutrient-deficiencies-that-are-dangerous-for-your-heart-health/photostory/105204773.cms",
        "urlToImage": "https://static.toiimg.com/photo/105204782.cms",
        "publishedAt": "2023-11-14T08:09:34Z",
        "content": "The impact magnesium has on our general health is often overlooked. Magnesium has a critical role in the prevention of health issues, ranging from inflammation to depression and migraines. High blood… [+339 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "A Cup Of Strawberries A Day May Reduce Dementia Risk, Claims Study - NDTV",
        "description": "The research was carried out by researchers from University of Cincinnati who said eating eight strawberries a day can help prevent depression and dementia.",
        "url": "https://www.ndtv.com/science/a-cup-of-strawberries-a-day-may-reduce-dementia-risk-claims-study-4572642",
        "urlToImage": "https://c.ndtvimg.com/2022-05/v3asf7mg_strawberry-_625x300_31_May_22.jpg",
        "publishedAt": "2023-11-14T07:38:20Z",
        "content": "Strawberries are an excellent source of vitamin C.\r\nThere is good news for strawberry lovers. A team of researchers from University of Cincinnati has claimed that eating eight strawberries a day can … [+1798 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Dr. Ambrish Mithal",
        "title": "World diabetes day: Can severe air quality trigger blood sugar levels, insulin resistance? - The Indian Express",
        "description": "Why one of the factors responsible for the increase in diabetes could well be air pollution, explains Dr Ambrish Mithal, Chairman of Endocrinology and Diabetes, Max Healthcare",
        "url": "https://indianexpress.com/article/health-wellness/world-diabetes-day-air-quality-trigger-blood-sugar-levels-insulin-resistance-9026023/",
        "urlToImage": "https://images.indianexpress.com/2023/11/diabetes-air-pollution-1600.jpg",
        "publishedAt": "2023-11-14T07:14:21Z",
        "content": "India continues to hold the dubious distinction of having some of the most polluted cities in the world, led by the capital, Delhi. This phenomenon peaks in the winter months, but air quality is subs… [+4947 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Know Your Salt: A Comprehensive Guide To 6 Different Varieties - NDTV",
        "description": "The following guide will help you understand six of the most popular varieties of salt in detail. Read on!",
        "url": "https://www.ndtv.com/food/know-your-salt-a-comprehensive-guide-to-6-different-varieties-4572594",
        "urlToImage": "https://c.ndtvimg.com/2023-11/v5i34a28_salt_625x300_14_November_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20231016.06",
        "publishedAt": "2023-11-14T07:13:59Z",
        "content": "Different salt varieties you should know about. (Image Credit: Istock)\r\nSalt is something that we all use on a daily basis. It is an essential ingredient in cooking and is what adds flavour to our di… [+3027 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Dovepress.com"
        },
        "author": "Dove Press",
        "title": "Plasma SCFAs infection after COVID-19 vaccination | JIR - Dove Medical Press",
        "description": "Exploring the changes of circulating immune cell subsets and the plasma level of intestinal SCFAs in patients with Coronavirus disease 2019",
        "url": "https://www.dovepress.com/disturbance-of-adaptive-immunity-system-was-accompanied-by-a-decrease--peer-reviewed-fulltext-article-JIR",
        "urlToImage": "https://www.dovepress.com/assets/img/addon/og_logo.png",
        "publishedAt": "2023-11-14T07:07:49Z",
        "content": "Introduction\r\nSince December 2019, the spread of severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) has become a major public health threat affecting human health. Pneumonia is the main man… [+34258 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "India TV News"
        },
        "author": "Written by India TV Health Desk, Edited by Surabhi Shaurya",
        "title": "China on ALERT over likely COVID-19 relapse ahead of winter | Key points - India TV News",
        "description": "COVID-19 in China: Efforts to contain the Covid-19 pandemic have largely focused on vaccine development and deployment.",
        "url": "https://www.indiatvnews.com/health/china-on-alert-coronavirus-covid-19-relapse-fresh-advisory-on-vaccination-2023-11-14-902659",
        "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/11/covid-1699944561.jpg",
        "publishedAt": "2023-11-14T06:58:22Z",
        "content": "COVID-19 alert: Ahead of the winter season, an alert has been sounded across China about the relapse of COVID-19 infections and experts have asked elderly and vulnerable populations to get vaccinated… [+2255 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "ANI",
        "title": "Need to make changes in our daily activities: Union Minister G Kishan Reddy on World Diabetes Day - IndiaTimes",
        "description": "India News: Union Minister G Kishan Reddy spoke on World Diabetes Day, emphasizing the need to make lifestyle changes to prevent diabetes. He encouraged consultin",
        "url": "https://timesofindia.indiatimes.com/india/need-to-make-changes-in-our-daily-activities-union-minister-g-kishan-reddy-on-world-diabetes-day/articleshow/105202491.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105202564,width-1070,height-580,imgsize-492050,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-14T06:41:00Z",
        "content": "Rashmika Mandanna shines in ethnic wear, inspiring Diwali fashion choices"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "Apple’s health study takes a deep dive into diabetes, exercise, and menstrual health - Times of India",
        "description": "A study conducted by researchers from Harvard's Brigham and Women's Hospital and Harvard's T H Chan School of Public Health found that physical activi",
        "url": "https://timesofindia.indiatimes.com/gadgets-news/apples-health-study-takes-a-deep-dive-into-diabetes-exercise-and-menstrual-health/articleshow/105201273.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105201273,width-1070,height-580,imgsize-31888,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-14T06:00:00Z",
        "content": "5G smartphones with 8GB RAM and 256GB storage under Rs 25,000"
    },
    {
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "US witnesses spike in latest Covid variant cases, HV.1 accounts for over 25% of total infections | Mint - Mint",
        "description": "The HV.1 variant of COVID-19, which is highly contagious, has become the most dominant strain in the US, accounting for over a quarter of all cases since October end.",
        "url": "https://www.livemint.com/science/news/us-witnesses-spike-in-latest-covid-variant-cases-hv-1-accounts-for-over-25-of-total-infections-11699933953757.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/11/14/1600x900/The-covid-19-variant_1699937081131_1699937081281.png",
        "publishedAt": "2023-11-14T04:59:50Z",
        "content": "The United States has been witnessing a spike in new highly contagious COVID-19 variant HV.1 cases. This variant is credited for over a quarter of all coronavirus cases since October end, Hindustan T… [+2431 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Douglas County officials declare health emergency amid TB exposures - 6 News WOWT",
        "description": "A public health emergency has been declared in Douglas County due to potential tuberculosis exposure.   For more Local News from WOWT:  https://www.wowt.com/...",
        "url": "https://www.youtube.com/watch?v=uYx7VEHLMys",
        "urlToImage": "https://i.ytimg.com/vi/uYx7VEHLMys/maxresdefault.jpg",
        "publishedAt": "2023-11-14T04:34:14Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Sushmita Srivastav",
        "title": "From Lemon Ginger Zinger to Green Tea Detox Elixir, 7 detox drinks to get over the festive binge - Moneycontrol",
        "description": "Best detox drinks: Relish these rejuvenating drinks to bid farewell to the post-festive slump. Incorporate them into your daily routine, and let the natural goodness cleanse and revitalise your body from within.",
        "url": "https://www.moneycontrol.com/news/health-and-fitness/from-lemon-ginger-zinger-to-green-tea-detox-elixir-7-detox-drinks-to-get-over-the-festive-binge-11737761.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/11/Benefits-of-Cucumber-Mint-Cooler-770x433.jpg",
        "publishedAt": "2023-11-14T04:20:33Z",
        "content": "As the festive season bids adieu, its time to pause, relax, and hit the reset button on our health. Indulging in delicious festive feasts is a delightful tradition, but it can leave us feeling sluggi… [+2787 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Jagran.com"
        },
        "author": "Prerna Targhotra",
        "title": "5 Incredibly Healthy Snack Options To Binge-On Before Lunch - Jagran English",
        "description": "Healthy Snacks Before Lunch: Snacking refers to eating small portions of food between ideal meal times. One should always opt for foods with high nutritional profile for snacks to keep them fuller for longer periods.",
        "url": "https://english.jagran.com/lifestyle/5-incredibly-healthy-snack-options-to-binge-on-before-lunch-10113698",
        "urlToImage": "https://imgeng.jagran.com/images/2023/nov/healthy-snacks-to-eat-before-lunch1699935912728.jpg",
        "publishedAt": "2023-11-14T04:19:00Z",
        "content": "Healthy Snacks Before Lunch: The duration between breakfast and lunch is usually long enough and hunger strikes in between. Whether in the office or at home, we should always stick to healthy eating … [+2313 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "The Indian Express",
        "title": "Is it safe to eat eggs every day? - The Indian Express",
        "description": null,
        "url": "https://indianexpress.com/article/lifestyle/food-wine/is-it-safe-to-eat-eggs-every-day-9013128/",
        "urlToImage": null,
        "publishedAt": "2023-11-14T04:15:37Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "PRNewswire"
        },
        "author": null,
        "title": "Fitterfly showcases outcomes of digital pill for children with type 2 Diabetes - PR Newswire",
        "description": "/PRNewswire/ -- In a groundbreaking move towards pediatric healthcare, Fitterfly - India's leading digital therapeutic company, announced its success with...",
        "url": "https://www.prnewswire.com/in/news-releases/fitterfly-showcases-outcomes-of-digital-pill-for-children-with-type-2-diabetes-301986864.html",
        "urlToImage": "https://mma.prnewswire.com/media/2016397/4400882/Fitterfly_Logo.jpg?p=facebook",
        "publishedAt": "2023-11-14T03:57:00Z",
        "content": "On World Diabetes Day 2023, it is time to take action about the increasing number of children being diagnosed with Type 2 Diabetes with newer technologies\r\nMUMBAI, India, Nov. 13, 2023 /PRNewswire/ -… [+6461 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Canada public health warns of drug-resistant salmonella outbreak - CHCH News",
        "description": "Canada’s public health agency is warning of an “extensively drug-resistant” salmonella outbreak across six provinces.The Public Health Agency of Canada says ...",
        "url": "https://www.youtube.com/watch?v=-UguofNtzI8",
        "urlToImage": "https://i.ytimg.com/vi/-UguofNtzI8/maxresdefault.jpg",
        "publishedAt": "2023-11-14T02:58:33Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Viral outbreak in horses cancels N.S. equestrian events - CBC News: The National",
        "description": "An outbreak of equine herpes — a potentially fatal and highly transmissible virus found in horses — is forcing equestrian events across Nova Scotia to be can...",
        "url": "https://www.youtube.com/watch?v=yXoX6f5TblY",
        "urlToImage": "https://i.ytimg.com/vi/yXoX6f5TblY/maxresdefault.jpg",
        "publishedAt": "2023-11-14T02:56:44Z",
        "content": null
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "Chaitanya Deshpande",
        "title": "Research brings sweet turn of events for Type 1 diabetics - Times of India",
        "description": "Nagpur: As the world gears up to mark Diabetes Day on November 14, medical research has taken a significant stride for combating Type 1 diabetes.",
        "url": "https://timesofindia.indiatimes.com/city/nagpur/research-brings-sweet-turn-of-events-for-type-1-diabetics/articleshow/105197311.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-14T02:53:00Z",
        "content": "Rashmika Mandanna shines in ethnic wear, inspiring Diwali fashion choices"
    },
    {
        "source": {
            "id": null,
            "name": "Cureus.com"
        },
        "author": null,
        "title": "How Maternal Nutritional and Mental Health Affects Child Health During Pregnancy: A Narrative Review - Cureus",
        "description": "Throughout pregnancy, the mother's nutritional and mental health significantly influences the kid's long-term growth and wellness. This review's objective is to provide a comprehensive assessment of the literature on the link between pregnancy nutrition and a…",
        "url": "https://www.cureus.com/articles/174513-how-maternal-nutritional-and-mental-health-affects-child-health-during-pregnancy-a-narrative-review",
        "urlToImage": "https://public.cureus.com/fallback/new_default_article_image_1.png",
        "publishedAt": "2023-11-14T02:29:53Z",
        "content": "Enter your email address to receive your free PDF download.\r\nPlease note that by doing so you agree to be added to our monthly email newsletter distribution list."
    },
    {
        "source": {
            "id": null,
            "name": "Onmanorama.com"
        },
        "author": "Dr Akhil Krishna",
        "title": "Impact of type 2 diabetes mellitus and strategies for mitigation | Lifestyle Health | English Manorama - Onmanorama",
        "description": "Caused by the inability of insulin to act properly and due to decreased insulin production, type 2 diabetes mellitus can affect each and every organ of the body if not managed properly.",
        "url": "https://www.onmanorama.com/lifestyle/health/2023/11/14/impact-type-2-diabetes-mellitus-strategies-for-mitigation.html",
        "urlToImage": "https://img.onmanorama.com/content/dam/mm/en/lifestyle/health/images/2023/2/26/diabetes-c.jpg",
        "publishedAt": "2023-11-14T01:47:34Z",
        "content": "Type 2 Diabetes Mellitus is a chronic medical condition characterized by high levels of blood sugar (glucose) due to the inability of insulin to act properly and due to decreased insulin production. … [+6827 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "Sumitra Debroy",
        "title": "Heart disease stays city's top killer; deaths due to liver ailments, stroke, cancer rising - Times of India",
        "description": "According to RTI data, heart disease remains the leading cause of death in Mumbai, but liver disease, cancer, and cerebrovascular diseases are becomin",
        "url": "https://timesofindia.indiatimes.com/city/mumbai/heart-disease-stays-citys-top-killer-deaths-due-to-liver-ailments-stroke-cancer-rising/articleshow/105196274.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105196322,width-1070,height-580,imgsize-831006,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-14T01:34:00Z",
        "content": "Rashmika Mandanna shines in ethnic wear, inspiring Diwali fashion choices"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "World diabetes day 2023: Myths on diabetes management you will regret believing until now - IndiaTimes",
        "description": "World Diabetes Day on November 14 aims to globally raise awareness about diabetes, emphasizing prevention, treatment, and care. It dispels myths like associating diabetes solely with sugar consumption, promoting balanced diets, and highlighting the diverse, p…",
        "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/world-diabetes-day-2023-myths-on-diabetes-management-you-will-regret-believing-until-now/photostory/105178827.cms",
        "urlToImage": "https://static.toiimg.com/photo/105178854.cms",
        "publishedAt": "2023-11-14T01:30:00Z",
        "content": "World Diabetes Day, observed on November 14th, aims to raise global awareness about diabetes. Initiated by the International Diabetes Federation and the World Health Organization, it highlights the i… [+486 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Somita Pal",
        "title": "Mumps outbreak in Mumbai’s poorer areas causes worry - Hindustan Times",
        "description": "The mumps virus spreads through direct contact with infected saliva or through respiratory droplets from an infected person’s nose, mouth or throat. While there is no definitive treatment, patients are given medicines to treat body ache and fever, asked to ap…",
        "url": "https://www.hindustantimes.com/cities/mumbai-news/mumps-outbreak-in-mumbai-s-poorer-areas-causes-worry-101699902457945.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/13/1600x900/Mumbai--India---Nov--9--2023--Dr-Shilpa-Varma--the_1699902455429.jpg",
        "publishedAt": "2023-11-14T01:10:13Z",
        "content": "Mumbai: At Janta Nagar, a slum in Mankhurd, residents are grappling with a surge in mumps cases, a viral infection caused by a paramyxovirus. Shalika Khatoon, 31, who caught the virus along with her … [+4305 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Deccan Herald"
        },
        "author": "Reuters",
        "title": "Rising temperatures, longer monsoon drive Bangladesh's worst dengue outbreak - Deccan Herald",
        "description": null,
        "url": "https://www.deccanherald.com/world/rising-temperatures-longer-monsoon-drive-bangladeshs-worst-dengue-outbreak-2769224",
        "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-11%2Fb189c0ba-e211-4b82-99e9-e94f31b0f38d%2F2023_04_17T104416Z_1800826661_RC21D0ANTTVR_RTRMADP_3_HEALTH_DENGUE_ARGENTINA.JPG?rect=0%2C0%2C2141%2C1124&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
        "publishedAt": "2023-11-14T01:08:54Z",
        "content": "Kabirul Bashar, an entomologist and zoology professor at Jahangirnagar University in Bangladesh, has spent much of his career studying mosquitoes and said he had never seen such a severe outbreak in … [+2182 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Business Insider India"
        },
        "author": "Gabby Landsverk",
        "title": "Cutting back on salt can lower your blood pressure as much as common medications, study finds - Business Insider India",
        "description": "Consuming less sodium (salt) can help reduce blood pressure as well as medication, a study suggests.High blood pressure can lead to heart attack or stroke,",
        "url": "https://www.businessinsider.in/science/health/news/cutting-back-on-salt-can-lower-your-blood-pressure-as-much-as-common-medications-study-finds/articleshow/105195637.cms",
        "urlToImage": "https://www.businessinsider.in/photo/105195637/cutting-back-on-salt-can-lower-your-blood-pressure-as-much-as-common-medications-study-finds.jpg?imgsize=62862",
        "publishedAt": "2023-11-13T22:42:00Z",
        "content": "Cutting just a teaspoon of salt per day from your diet could lead to better heart health in as little as one week, new research suggests.\r\nThe modest reduction in dietary sodium (better known as salt… [+4474 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Medical Xpress"
        },
        "author": "Science X",
        "title": "New approaches in the fight against drug resistance in malaria - Medical Xpress",
        "description": "Malaria is one of the most widespread and deadly infectious diseases worldwide. New compounds are continuously required due to the risk of malaria parasites becoming resistant to the medicines currently used. A team of researchers at FAU, led by Prof. Dr. Sve…",
        "url": "https://medicalxpress.com/news/2023-11-approaches-drug-resistance-malaria.html",
        "urlToImage": "https://scx2.b-cdn.net/gfx/news/2023/new-approaches-in-the.jpg",
        "publishedAt": "2023-11-13T22:18:03Z",
        "content": "Malaria is one of the most widespread and deadly infectious diseases worldwide. New compounds are continuously required due to the risk of malaria parasites becoming resistant to the medicines curren… [+3782 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "STAT"
        },
        "author": "Matthew Herper",
        "title": "Study suggests Covid rebound is far more common with Paxlovid than without - STAT",
        "description": "A small and preliminary study published Monday seems to indicate that patients receiving Paxlovid are far more likely to experience Covid rebound than those who did not take it.",
        "url": "https://www.statnews.com/2023/11/13/study-suggests-covid-rebound-is-far-more-common-with-paxlovid-than-without/",
        "urlToImage": "https://www.statnews.com/wp-content/uploads/2023/02/AdobeStock_541551116_Editorial_Use_Only-1024x576.jpeg",
        "publishedAt": "2023-11-13T22:01:40Z",
        "content": "Asmall and preliminary study published Monday seems to indicate that patients receiving the drug Paxlovid are far more likely to experience Covid rebound than those who did not take it.\r\nThat conclus… [+5215 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "RSV cases surging in Texas: How does it compare to Iowa and Illinois? - WQAD News 8",
        "description": null,
        "url": "https://www.youtube.com/watch?v=O2J9F-52mhQ",
        "urlToImage": null,
        "publishedAt": "2023-11-13T21:51:27Z",
        "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    }
],

"science": [
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Vrinda Jain",
        "title": "NASA astronauts drop tool bag during ISS spacewalk, you can see it from Earth - Hindustan Times",
        "description": "Currently, the tool bag is circling the planet slightly ahead of the International Space Station. | Trending",
        "url": "https://www.hindustantimes.com/trending/nasa-astronauts-drop-tool-bag-during-iss-spacewalk-you-can-see-it-from-earth-101699949905748.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/14/1600x900/Nasa_astronauts_1699950125232_1699950128059.png",
        "publishedAt": "2023-11-14T08:27:43Z",
        "content": "Along with planets, stars and other things, now space watchers can also witness a lost NASA toolbox from Earth. As NASA astronauts Jasmin Moghbeli and Loral O'Hara were on a spacewalk outside the Int… [+1231 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Pib.gov.in"
        },
        "author": null,
        "title": "Press Information Bureau - PIB",
        "description": "A young researcher has divulged the secret of how one of the smallest green algae called Picocystis",
        "url": "https://pib.gov.in/PressReleseDetailm.aspx?PRID=1976837",
        "urlToImage": image1,
        "publishedAt": "2023-11-14T08:22:00Z",
        "content": "Ministry of Science &amp; Technology\r\nPosted On:\r\n 14 NOV 2023 1:52PM by PIB Delhi\r\nA young researcher has divulged the secret of how one of the smallest green algae called Picocystis Salinarum survi… [+3185 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "SciTechDaily"
        },
        "author": null,
        "title": "Dodging Danger, Embracing Discovery: ISS Crew Unpacks SpaceX Dragon After Debris Evasion - SciTechDaily",
        "description": "The Expedition 70 crew is unpacking the SpaceX Dragon cargo spacecraft following its arrival early Saturday morning. Meanwhile, the orbital residents are also continuing their research and maintenance activities following the International Space Station’s deb…",
        "url": "https://scitechdaily.com/dodging-danger-embracing-discovery-iss-crew-unpacks-spacex-dragon-after-debris-evasion/",
        "urlToImage": "https://scitechdaily.com/images/Soyuz-MS-24-Crew-Ship-Docked-Rassvet-Module-scaled.jpg",
        "publishedAt": "2023-11-14T08:10:39Z",
        "content": "ByNASANovember 14, 2023\r\nThe Soyuz MS-24 crew ship is docked to the Rassvet module in this photograph from the International Space Station as it orbited 267 miles above the Tasman Sea in between Aust… [+5721 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": null,
        "title": "Researchers find second-most distant galaxy using James Webb telescope - Mint Lounge",
        "description": "Using data from JWST, researchers have discovered the second- and fourth-most distant galaxies ever observed in a region of space known as Pandora’s Cluster",
        "url": "https://lifestyle.livemint.com/smart-living/innovation/second-most-distant-galaxy-james-webb-space-telescope-111699889883063.html",
        "urlToImage": "https://images.livemint.com/img/2023/11/14/1140x641/Pandoras_Cluster_Abell_2744_1699944827059_1699944842482.jpg",
        "publishedAt": "2023-11-14T07:18:08Z",
        "content": "It is turning out to be a month of more discoveries for the James Webb Space Telescope (JWST). Earlier this month, a research team from UC Riverside found a Milky Way-type galaxy in the early univers… [+3838 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Science Desk",
        "title": "NASA stops sending commands to red planet fleet due to Mars solar conjunction - The Indian Express",
        "description": "NASA has stopped sending commands to its fleet of robotic probes on or orbiting the red planet because the Sun is in between Earth and Mars.",
        "url": "https://indianexpress.com/article/technology/science/nasa-mars-solar-conjunction-signals-9026012/",
        "urlToImage": "https://images.indianexpress.com/2023/11/NASA-mars-probes-20231114.jpg",
        "publishedAt": "2023-11-14T07:16:16Z",
        "content": "From the Curiosity and Perseverance rovers to the Ingenuity Mars Helicopter and Mars Reconnaissance Orbiter and more, NASA has a veritable army of robots on the red planet or orbiting. But the space … [+579 chars]"
    },
    {
        "source": {
            "id": "the-hindu",
            "name": "The Hindu"
        },
        "author": "The Hindu",
        "title": "Greenland glaciers melt five times faster than 20 years ago - The Hindu",
        "description": null,
        "url": "https://www.thehindu.com/sci-tech/energy-and-environment/greenland-glaciers-melt-five-times-faster-than-20-years-ago/article67531256.ece",
        "urlToImage": null,
        "publishedAt": "2023-11-14T06:15:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Businesswireindia.com"
        },
        "author": null,
        "title": "SESs Fifth and Sixth O3b mPOWER Satellites Successfully Launched - Business Wire India",
        "description": "SESs Fifth and Sixth O3b mPOWER Satellites Successfully Launched",
        "url": "https://www.businesswireindia.com/sess-fifth-and-sixth-o3b-mpower-satellites-successfully-launched-87440.html",
        "urlToImage": "https://cms.businesswireindia.com/Uploads/OGTag/OG_NewsReleaseCompanyLogo_87440.jpg",
        "publishedAt": "2023-11-14T05:11:26Z",
        "content": "Cape Canaveral, Fla., United States:\r\n  SES announced today that two additional O3b mPOWER satellites were successfully launched into space by a SpaceX Falcon 9 rocket from Cape Canaveral Space Force… [+3192 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "title": "Mangalyaan-2 mission: How ISRO’s project is different from NASA’s Mars Reconnaissance Orbiter Mission - HT Tech",
        "description": "Know how ISRO’s Mars Orbiter mission-2 is different from NASA’s Mars Reconnaissance Orbiter Mission.",
        "url": "https://tech.hindustantimes.com/photos/mangalyaan2-mission-how-isro-s-project-is-different-from-nasa-s-mars-reconnaissance-orbiter-mission-71699935439705.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2023/11/14/1600x900/Last_1687759108971_1699935492344.jpg",
        "publishedAt": "2023-11-14T04:24:18Z",
        "content": "Top SectionsExplore Tech Copyright © HT Media Limited All rights reserved."
    },
    {
        "source": {
            "id": null,
            "name": "Aviation Week"
        },
        "author": null,
        "title": "NASA Has Fingers Crossed On Mars Sample Return Challenges - Aviation Week",
        "description": "The review board was convened in the spring for a second independent assessment of the mission architecture and cost.",
        "url": "https://aviationweek.com/defense-space/space/nasa-has-fingers-crossed-mars-sample-return-challenges",
        "urlToImage": "https://aviationweek.com/sites/default/files/2023-11/marssample.jpg",
        "publishedAt": "2023-11-14T02:46:25Z",
        "content": "NASA Has Fingers Crossed On Mars Sample Return Challenges is published in Aerospace Daily &amp; Defense Report, an Aviation Week Intelligence Network (AWIN) Market Briefing and is included with your … [+320 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "title": "Chandrayaan-4 mission: What makes the 2nd lunar project different from Chandrayaan-3 - HT Tech",
        "description": "Chandrayaan4 mission What makes the 2nd lunar project different from Chandrayaan3 Know what changes have been made in the Chandrayaan4 mission in comparison to the Chandrayaan3 mission. The Chandrayaan4 mission is being developed by an international collabora…",
        "url": "https://tech.hindustantimes.com/web-stories/chandrayaan4-mission-what-makes-the-2nd-lunar-project-different-from-chandrayaan3-71699933381126.html",
        "urlToImage": image2,
        "publishedAt": "2023-11-13T22:19:43Z",
        "content": "Photo Credit: JAXA\r\n Know what changes have been made in the Chandrayaan-4 mission in comparison to the Chandrayaan-3 mission.\r\nPhoto Credit: ISRO\r\n The Chandrayaan-4 mission is being developed by an… [+1703 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "New York Post"
        },
        "author": "Alex Mitchell",
        "title": "Long-lost continent of Argoland found after 155M-year disappearance - New York Post ",
        "description": "The mystery of a landmass that broke from modern-day western Australia and drifted to sea has been solved after 155 million years.",
        "url": "https://nypost.com/2023/11/13/lifestyle/long-lost-continent-of-argoland-found-after-155m-year-disappearance/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/11/COMP-671486-_cropped_missing_continent.jpg?quality=75&strip=all&w=1024",
        "publishedAt": "2023-11-13T22:13:00Z",
        "content": "The mystery of a landmass that broke from modern-day western Australia and drifted to sea has been solved after 155 million years.\r\nFinally, geologists from Utrecht University in the Netherlands have… [+2831 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "WION"
        },
        "author": "WION Web Team",
        "title": "Earth was more charming for aliens when dinosaurs existed, suggests study - WION",
        "description": "Earth was more charming for aliens when dinosaurs existed, suggests study",
        "url": "https://www.wionews.com/science/earth-was-more-charming-for-aliens-when-dinosaurs-existed-657525",
        "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/11/11/392506-untitled-design-2023-11-11t134616452.png",
        "publishedAt": "2023-11-13T22:10:10Z",
        "content": "Earth's potential to attract extraterrestrial beings may have been more pronounced during the time of dinosaurs than during present day and age, research by astrobiologists from Cornell University su… [+2491 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "Sun may be slightly smaller than previously thought: Study - IndiaTimes",
        "description": "Science News: A recent study by astronomers suggests that the radius of the Sun may be slightly smaller than previously believed. Utilizing sound waves trapped with",
        "url": "https://timesofindia.indiatimes.com/home/science/sun-may-be-slightly-smaller-than-previously-thought-study/articleshow/105193266.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105193281,width-1070,height-580,imgsize-287444,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-13T20:51:00Z",
        "content": "A recent study by astronomers suggests that the radius of the Sun may be slightly smaller than previously believed. Utilizing sound waves trapped within the Sun's interior, known as p-modes, research… [+350 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "UK researcher helps solve 60-year mystery inside heart, publishes in Nature - University of Kentucky",
        "description": "Kenneth S. Campbell, Ph.D., the director of translational research in the Division of Cardiovascular Medicine in the UK College of Medicine, helped map out a...",
        "url": "https://www.youtube.com/watch?v=Phqe2LkD7n4",
        "urlToImage": "https://i.ytimg.com/vi/Phqe2LkD7n4/maxresdefault.jpg",
        "publishedAt": "2023-11-13T20:50:50Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Universe Today"
        },
        "author": "Carolyn Collins Petersen",
        "title": "Growing Black Hole Seen Only 470 Million Years After the Big Bang - Universe Today",
        "description": "The discovery of a supermassive black hole in early cosmic history sheds light on how such massive monsters formed soon after the Big Bang.",
        "url": "https://www.universetoday.com/164216/growing-black-hole-seen-only-470-million-years-after-the-big-bang/",
        "urlToImage": "https://www.universetoday.com/wp-content/uploads/2023/11/uhz1_comp.jpg",
        "publishedAt": "2023-11-13T20:36:34Z",
        "content": "One of the big questions in cosmology asks when black holes first showed up in the early Universe. Recently astronomers discovered the most distant (and therefore earliest) supermassive black hole ev… [+5668 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "The conclusion of NASA’s OSIRIS-REx mission as it safely returns an asteroid sample to Earth - AZPM",
        "description": "On September 24, 2023, NASA’s OSIRIS-REx mission reached a thrilling conclusion with the return of a sample from the asteroid Bennu back to Earth. It represe...",
        "url": "https://www.youtube.com/watch?v=roYPnDqAc_w",
        "urlToImage": "https://i.ytimg.com/vi/roYPnDqAc_w/maxresdefault.jpg",
        "publishedAt": "2023-11-13T20:08:14Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Phys.Org"
        },
        "author": "Patty Cox",
        "title": "Scientists describe and name new species of coral in French Polynesia - Phys.org",
        "description": "Scientists from the Department of Biological Science at Florida State University have described and named a new species of coral in the waters of French Polynesia.",
        "url": "https://phys.org/news/2023-11-scientists-species-coral-french-polynesia.html",
        "urlToImage": "https://scx2.b-cdn.net/gfx/news/2023/scientists-describe-an.jpg",
        "publishedAt": "2023-11-13T19:25:04Z",
        "content": "Scientists from the Department of Biological Science at Florida State University have described and named a new species of coral in the waters of French Polynesia.\r\nPostdoctoral researcher Erika John… [+3499 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Leonid Meteor Shower to Kick off the Weekend | AccuWeather - AccuWeather",
        "description": "The Lenoids meteor shower is expected to peak with a rate of 15 meteors per hour this year, starting Nov. 17th. Look east to Leo, although meteors can come f...",
        "url": "https://www.youtube.com/watch?v=fTAW7WfMmZk",
        "urlToImage": "https://i.ytimg.com/vi/fTAW7WfMmZk/maxresdefault.jpg",
        "publishedAt": "2023-11-13T19:16:13Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Thetechoutlook.com"
        },
        "author": "Blossom Hazarika",
        "title": "NASA astronaut Jasmin Moghbeli to interact with students of Creative Learning Academy - The Tech Outlook",
        "description": "Florida via a space-to-Earth call on November 15, 2023",
        "url": "https://www.thetechoutlook.com/news/science/nasa-astronaut-jasmin-moghbeli-to-interact-with-students-of-creative-learning-academy/",
        "urlToImage": "https://www.thetechoutlook.com/wp-content/uploads/2023/11/Space-to-earth-call.jpg",
        "publishedAt": "2023-11-13T18:57:15Z",
        "content": "Students of the Creative Learning Academy in Pensacola, Florida will be blessed with an amazing opportunity this week. NASA has scheduled a space-to-Earth call on November 15, at 9:30 a.m. EST Wednes… [+1253 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NASASpaceflight.com"
        },
        "author": "Sawyer Rosenstein",
        "title": "First Dream Chaser Vehicle Ready for Final Testing - NASASpaceFlight.com - NASASpaceflight.com",
        "description": "After years of work, Sierra Space’s first Dream Chaser reusable spaceplane is almost ready to…",
        "url": "https://www.nasaspaceflight.com/2023/11/dream-chaser-shipment/",
        "urlToImage": image1,
        "publishedAt": "2023-11-13T18:43:07Z",
        "content": "6After years of work, Sierra Space’s first Dream Chaser reusable spaceplane is almost ready to fly. The vehicle’s next step is a trip to NASAs Neil A. Armstrong Test Facility in Ohio ahead of its fir… [+10194 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Abplive.com"
        },
        "author": "Radifah Kabir",
        "title": "Scientists Discover 14 New 'Transients' In Space By Studying 'Christmas Tree Galaxy Cluster' Using NASA Webb - ABP Live",
        "description": "Scientists have discovered 14 new 'transients', which are objects in space that appear to suddenly brighten and then fade away, in space, by studying the 'Christmas Tree Galaxy Cluster'.",
        "url": "https://news.abplive.com/science/nasa-james-webb-space-telescope-scientists-discover-14-new-transients-in-space-by-studying-christmas-tree-galaxy-cluster-1642566",
        "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/11/13/27200a1c4f9dca6fee6bd588f07d51651699898450718324_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
        "publishedAt": "2023-11-13T18:30:21Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Nature.com"
        },
        "author": null,
        "title": "Experimental and numerical investigation on failure mechanism of expansive soil subgrade slope | Scientific Reports - Nature.com",
        "description": "Scientific Reports - Experimental and numerical investigation on failure mechanism of expansive soil subgrade slope",
        "url": "https://www.nature.com/articles/s41598-023-46727-3",
        "urlToImage": "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41598-023-46727-3/MediaObjects/41598_2023_46727_Fig1_HTML.png",
        "publishedAt": "2023-11-13T17:55:05Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Ticker.tv"
        },
        "author": "Tanya King",
        "title": "The Fascinating Potential of Monkey Chimeras in Medical Research - TickerTV News",
        "description": "The Fascinating Potential of Monkey Chimeras in Medical Research - TickerTV News",
        "url": "https://ticker.tv/news/scientists-create-chimeric-monkey-with-two-sets-of-dna/176770/",
        "urlToImage": "https://ticker.tv/wp-content/uploads/2023/08/mfrack_realistic_photo_of_women_using_smartphone_or_computer_on_2ed956d3-1f5c-4910-b2ef-0de7edc2a516.png",
        "publishedAt": "2023-11-13T17:32:47Z",
        "content": "Scientists in China have achieved a groundbreaking milestone in genetic research successfully creating a monkey chimera with two sets of DNA. A team of researchers combined stem cells from a cynomolg… [+4206 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "physicsworld.com"
        },
        "author": null,
        "title": "New type of magnetic levitation makes its debut – Physics World - physicsworld.com",
        "description": "Rotating-magnet effect could help robots handle objects without touching them",
        "url": "https://physicsworld.com/a/new-type-of-magnetic-levitation-makes-its-debut/",
        "urlToImage": "https://physicsworld.com/wp-content/uploads/2023/11/IMG_2190.jpg",
        "publishedAt": "2023-11-13T17:31:15Z",
        "content": "An image of the experiments showing a coil that the researchers used to measure the frequency at one point. (Courtesy: R Bjørk)\r\nMagnetic levitation is already employed in systems such as Maglev trai… [+3699 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "How Global South researchers talk to the north | What's wrong with global health? (BSL-interpreted) - The Lancet",
        "description": "Watch this video without British Sign Language interpretation at https://youtu.be/yxU-sOX8H7UDo researchers from the Global South feel pressure to speak nort...",
        "url": "https://www.youtube.com/watch?v=WyePJ5UN5vQ",
        "urlToImage": "https://i.ytimg.com/vi/WyePJ5UN5vQ/maxresdefault.jpg",
        "publishedAt": "2023-11-13T17:21:18Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Nature.com"
        },
        "author": null,
        "title": "Io’s polar volcanic thermal emission indicative of magma ocean and shallow tidal heating models - Nature.com",
        "description": "Juno’s global infrared mapping of Jupiter’s moon Io determined the distribution as well as the energy output of its volcanoes. Spatial differences emerge, with the equator more active than the polar zones and more heat flow at the north pole than at the south…",
        "url": "https://www.nature.com/articles/s41550-023-02123-5",
        "urlToImage": "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41550-023-02123-5/MediaObjects/41550_2023_2123_Fig1_HTML.png",
        "publishedAt": "2023-11-13T16:57:27Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Science X"
        },
        "author": null,
        "title": "The DECADE Project: Catalysis for e-Chemistry - Science X",
        "description": "Science X network: Science X is a network of high quality websites with most complete and comprehensive daily coverage of the full sweep of science, technology, and medicine news",
        "url": "https://sciencex.com/wire-news/461335105/the-decade-project-catalysis-for-e-chemistry.html",
        "urlToImage": image2,
        "publishedAt": "2023-11-13T16:40:38Z",
        "content": "The prospects, needs, and limits in current approaches in catalysis to accelerate the transition to e-chemistry, where this term indicates a fossil fuel-free chemical production, are discussed.\r\nIt i… [+2034 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Pan: The dancer in Dorado - HubbleWebbESA",
        "description": "This vibrant and dynamic-looking image features the spiral galaxy NGC 1566, which is sometimes informally referred to as the ‘Spanish Dancer Galaxy’. Like th...",
        "url": "https://www.youtube.com/watch?v=ne9GsXO9CvQ",
        "urlToImage": "https://i.ytimg.com/vi/ne9GsXO9CvQ/hqdefault.jpg",
        "publishedAt": "2023-11-13T15:57:46Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Phys.Org"
        },
        "author": "LI Yuan",
        "title": "Researchers discover emission from secondary black hole in binary system of blazar OJ 287 - Phys.org",
        "description": "OJ 287 is recognized as a binary black hole system with a slowly spiraling orbit caused by loss of energy to gravitational radiation. This energy loss was already confirmed in 2008. Subsequent measurements have confirmed this orbit solution, most recently in …",
        "url": "https://phys.org/news/2023-11-emission-secondary-black-hole-binary.html",
        "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/researchers-discover-e-3.jpg",
        "publishedAt": "2023-11-13T15:40:04Z",
        "content": "OJ 287 is recognized as a binary black hole system with a slowly spiraling orbit caused by loss of energy to gravitational radiation. This energy loss was already confirmed in 2008. Subsequent measur… [+4000 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Thedebrief.org"
        },
        "author": "Micah Hanks, Micah Hanks",
        "title": "Look: Stunning First Euclid Telescope Images Unveil Stark Cosmic Beauty, as the ESA Embarks on Investigations of the Dark Universe - The Debrief",
        "description": "The ESA's stunning first Euclid telescope images offer an unprecedented glimpse at our universe, and clues to the nature of its dark side.",
        "url": "https://thedebrief.org/look-stunning-first-euclid-telescope-images-unveil-stark-cosmic-beauty-as-the-esa-embarks-on-investigations-of-the-dark-universe/",
        "urlToImage": "https://thedebrief.b-cdn.net/wp-content/uploads/2023/11/ESA-Euclid-first-images.jpg",
        "publishedAt": "2023-11-13T15:04:28Z",
        "content": "The European Space Agency (ESA) has unveiled the first full-color images captured by the Euclid telescope, which reveal an unprecedented glimpse at our universe and potential clues to the nature of i… [+4134 chars]"
    }
],

"sports": [
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": null,
        "title": "\"We Say MS Dhoni Changed India's Cricket, But He Never...\": Mohammad Amir On Pakistan's System Amid .. - NDTV Sports",
        "description": "Mohammad Amir refused to put blame for Pakistan's World Cup 2023 debacle on the nation's cricketing 'system', citing the examples of MS Dhoni and Jos Buttler.",
        "url": "http://www.bbc.com/news/world-us-canada-39324587",
        "urlToImage": "https://c.ndtvimg.com/2023-11/fgo68me8_mohammad-amir_625x300_13_November_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
        "publishedAt": "2023-11-14T07:44:00Z",
        "content": "The Pakistan cricket team's poor show in the Cricket World Cup 2023 has brought them plenty of flak from the cricketing fraternity, especially back home. Skipper Babar Azam has been at the center of … [+2038 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "OpIndia"
        },
        "author": "OpIndia Staff",
        "title": "‘One cannot beget pious children after marrying Aishwarya Rai’: Ex-Pak cricketer Abdul Razzaq makes Hinduphobic and misogynistic remarks in a dig at PCB - OpIndia",
        "description": "Former Pakistani cricketer Abdul Razzaq in a bizarre statement said, \"If you think that I will get married to Aishwarya (Rai) and then have good and pious kids, then that can never happen.\" | OpIndia News",
        "url": "https://www.opindia.com/2023/11/aishwarya-rai-abdul-razzaqs-remarks-reflect-hinduphobia-and-misogyny-in-pakistan/",
        "urlToImage": "https://www.opindia.com/wp-content/uploads/2023/11/aish.jpg",
        "publishedAt": "2023-11-14T07:01:58Z",
        "content": "On 12th November, former Pakistani Cricketer Abdul Razzaq drew a bizarre parallel between marrying Aishwarya Rai and the Pakistan Cricket Board (PCB). Razzaq was attending an event at the Karachi Mar… [+6403 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": "Bharat Arun",
        "title": "Watch out for Shami when he's running in like a horse - ESPNcricinfo",
        "description": "A former India bowling coach runs the rule over India's most impressive bowler this World Cup",
        "url": "https://www.espncricinfo.com/story/watch-out-for-shami-when-he-s-running-in-like-a-horse-bharat-arun-1408728",
        "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/370200/370245.6.jpg",
        "publishedAt": "2023-11-14T05:27:52Z",
        "content": "India have a big, bad, beautiful bowling machine"
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "India vs New Zealand, Cricket World Cup 2023 Semi-Final: Match Preview, Prediction, Head-To-Head, Pi.. - NDTV Sports",
        "description": "Director Comey says the probe into last year's US election would assess if crimes were committed.",
        "url": "https://www.bbc.com/news/world-us-canada-39324587",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg",
        "publishedAt": "2023-11-14T05:03:31Z",
        "content": "Media caption, 'Putin hates Clinton' and other things the FBI learned about Russia\r\nFBI director James Comey has confirmed for the first time that the FBI is investigating alleged Russian interferenc… [+5942 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TOI Sports Desk",
        "title": "Watch: Bayern Munich's Thomas Muller wears Team India jersey to wish good luck ahead of semis - IndiaTimes",
        "description": "Cricket News: India emerged victorious in all nine of their league matches, securing the leading spot on the points table and booking a spot in the semi-final to be",
        "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-world-cup/news/watch-bayern-munichs-thomas-muller-wears-team-india-jersey-to-wish-good-luck-ahead-of-semis/articleshow/105198218.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105198289,width-1070,height-580,imgsize-40712,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-14T03:33:00Z",
        "content": "WC: Iyer, Rahul tons help India thrash Netherlands"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": "Andrew McGlashan",
        "title": "Aus-SA semi-final: All eyes on the weather in Kolkata - ESPNcricinfo",
        "description": "How does the reserve day work? And what happens if there is no result even after the reserve day?",
        "url": "https://www.espncricinfo.com/story/icc-world-cup-2023-semi-final-south-africa-vs-australia-kolkata-weather-forecast-reserve-day-info-1408720",
        "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/370000/370033.6.jpg",
        "publishedAt": "2023-11-14T03:31:37Z",
        "content": "Eden Garden will host the second semi-final, between South Africa and Australia  •  ICC/Getty Images"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "Suniel Shetty showers love on son-in-law KL Rahul for his dream run at the World Cup, says, 'good deed ne - IndiaTimes",
        "description": "The actor said that good deeds never go unnoticed, even if you try everything to run a person down. Speaking on Rahul, Suniel said that he has that fi",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/suniel-shetty-showers-love-on-son-in-law-kl-rahul-for-his-dream-run-at-the-world-cup-says-good-deed-never-go-unnoticed/articleshow/105198236.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105198236,width-1070,height-580,imgsize-87878,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-14T03:29:00Z",
        "content": null
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "Nitin Naik",
        "title": "World Cup: Team India's bold template faces an acid test - IndiaTimes",
        "description": "Cricket News: India's cricket team has adopted a more aggressive batting style in recent years, following their defeat to England in the 2019 ODI World Cup. Led by",
        "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-world-cup/news/world-cup-team-indias-bold-template-faces-an-acid-test/articleshow/105196992.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105196967,width-1070,height-580,imgsize-47458,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-14T02:49:00Z",
        "content": "WC: Iyer, Rahul tons help India thrash Netherlands"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Express News Service",
        "title": "New Zealand’s Plan A: Early movement vs Rohit Sharma, In-dipper vs Shubman Gill, Left-arm spin vs Virat Kohli, Bouncers vs Shreyas Iyer - The Indian Express",
        "description": "They have piled on runs against all teams, but the Kiwis will take heart from some of the dismissals in the past and during this tournament to plot the downfall of Indian batsmen.",
        "url": "https://indianexpress.com/article/sports/cricket/new-zealands-plan-a-early-movement-vs-rohit-sharma-in-dipper-vs-shubman-gill-left-arm-spin-vs-virat-kohli-bouncers-vs-shreyas-iyer-9025678/",
        "urlToImage": "https://images.indianexpress.com/2023/11/Rohit-Shubman-Virat-Shreyas.jpg",
        "publishedAt": "2023-11-14T02:35:39Z",
        "content": "The Indian batting order has been in prolific form, but if there’s one team that can be trusted to do their homework and come up with viable plans to thwart the challenge, it’s New Zealand. The India… [+10652 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Sports Desk",
        "title": "Kumble, Hayden name 5 Indians in their World Cup XI, ignore Pakistan players - Hindustan Times",
        "description": "Former India spinner Anil Kumble and former Australia opener Matthew Hayden named their best XI of the 2023 World Cup league stage. | Cricket",
        "url": "https://www.hindustantimes.com/cricket/kumble-hayden-name-5-indians-in-their-world-cup-2023-xi-no-pakistan-players-included-101699895138244.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/13/1600x900/dhen_dhen_1699895521660_1699895529053.jpg",
        "publishedAt": "2023-11-14T01:37:39Z",
        "content": "The semifinalists for the ongoing 2023 Cricket World Cup have been confirmed, as fans gear up for some thrilling knockout action. Hosts India take on New Zealand in the first semi-final on Wednesday … [+3127 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Venkata Krishna B",
        "title": "For father who chanted ‘Saachin, Saachin’, it’s time for ‘Raachin, Raachin’ - The Indian Express",
        "description": "The software engineer, who migrated to New Zealand in the ’90s, was at M Chinnaswamy Stadium in Bengaluru when Rachin, playing Pakistan, smashed his third century of the tournament.",
        "url": "https://indianexpress.com/article/sports/cricket-world-cup/for-father-who-chanted-saachin-saachin-its-time-for-raachin-raachin-9025531/",
        "urlToImage": "https://images.indianexpress.com/2023/11/New-Zealand-player-Rachin-Ravindra-with-Sachin-Tendulkars-wax-figure-in-Sydney.-File.jpg",
        "publishedAt": "2023-11-14T00:24:24Z",
        "content": "Ravi Krishnamurthy, 53, cant get a chant out of his head since the time he returned to his home in Wellington after the short trip to India to watch his son Rachin Ravindra play the World Cup.The sof… [+4871 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Cricketworldcup.com"
        },
        "author": "ICC",
        "title": "All you need to know about the Cricket World Cup knockout stage - ICC Women's World Cup",
        "description": "The ICC Men’s Cricket World Cup 2023 semi-finals and final are almost upon us, with the four remaining teams gearing up for three mammoth One Day International clashes. Here’s everything you need to know.",
        "url": "https://www.cricketworldcup.com/news/3785142",
        "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/11/13/f31bf9c5-4b8e-415b-a2a5-e3778780b1c4/GettyImages-1601917187.jpg",
        "publishedAt": "2023-11-13T23:39:20Z",
        "content": "The ICC Mens Cricket World Cup 2023 semi-finals and final are almost upon us, with the four remaining teams gearing up for three mammoth One Day International clashes. Heres everything you need to kn… [+6135 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Cricketworldcup.com"
        },
        "author": "ICC",
        "title": "How Rohit Sharma led by example to inspire India's World Cup charge - ICC Women's World Cup",
        "description": "We break down Rohit Sharma’s nine contributions at the top of the order for India during a phenomenal run of attacking-batting in the ICC Men’s Cricket World Cup group stage.",
        "url": "https://www.cricketworldcup.com/news/3785158",
        "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/11/13/7a130de8-86e3-4f06-afb9-3420974c02ea/GettyImages-1770829638-1-.jpg",
        "publishedAt": "2023-11-13T23:05:19Z",
        "content": "We break down Rohit Sharmas nine contributions at the top of the order for India during a phenomenal run of attacking-batting in the ICC Mens Cricket World Cup group stage.\r\nIndian middle-order super… [+3480 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ATP Tour"
        },
        "author": "ATP Tour",
        "title": "Carlos Alcaraz Wants To Bounce Back From Turin Defeat & 'Win Everything Put In Front Of Me' - ATP Tour",
        "description": "In Land Of Second Chances, Alcaraz Wants To 'Win Everything Put In Front Of Me'",
        "url": "https://www.atptour.com/en/news/alcaraz-turin-2023-monday-reaction",
        "urlToImage": "https://www.atptour.com/-/media/images/news/2023/11/13/21/04/alcaraz-turin-2023-reaction-monday.jpg",
        "publishedAt": "2023-11-13T21:33:16Z",
        "content": "For the first time, Carlos Alcaraz has lost a match but is still in with a chance of winning an ATP Tour tournament. With the exception of the Davis Cup, a team event with a very different format, th… [+3060 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Crictoday.com"
        },
        "author": "Venkat Narayanan",
        "title": "\"Bring back the rule of one ball in an ODI innings to help bowlers\": Starc wants the use of two balls to be scrapped - Crictoday.com (Cricket News) ",
        "description": "Mitchell Starc has called for the ICC to change the ODI rules to bowl one ball per over instead of two on small, flat grounds",
        "url": "http://crictoday.com/cricket/news/bring-back-the-rule-of-one-ball-in-an-odi-innings-to-help-bowlers-starc-wants-the-use-of-two-balls-to-be-scrapped/",
        "urlToImage": "https://crictoday.com/wp-content/uploads/2023/05/mitchellstarc-1643556509-NOW.jpg",
        "publishedAt": "2023-11-13T19:20:01Z",
        "content": "Australian fast bowler Mitchell Starc has called for a return to using one ball instead of two in ODIs, particularly on ‘small grounds’ and ‘flat wickets.’ Starc expressed his belief that the Interna… [+1816 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Bavarian Football Works"
        },
        "author": "CSmith1919",
        "title": "Bayern Munich’s Leroy Sané says Harry Kane is “good for all of us” - Bavarian Football Works",
        "description": "The partnership has been working quite well.",
        "url": "https://www.bavarianfootballworks.com/2023/11/13/23956038/bayern-munich-leroy-sane-says-harry-kane-is-good-for-all-of-us-tottenham-hotspur-muller-musiala-tel",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/sKnzBvTzew7RiVOg5gIdsH3Mjhk=/0x371:5184x3085/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25080419/1788841413.jpg",
        "publishedAt": "2023-11-13T19:00:00Z",
        "content": "Bayern Munich star Leroy Sané is off to the best start of his career and the former Manchester City star knows that part of his success can be attributed to the partnership he has formed with Harry K… [+1133 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Cricbuzz"
        },
        "author": null,
        "title": "Carmichael stars in Sixers' last-ball thriller | Cricbuzz.com - Cricbuzz - Cricbuzz",
        "description": "An inventive 21-ball 32 from Mathilda Carmichael gave Sydney Sixers a much-needed three-wicket win",
        "url": "https://www.cricbuzz.com/cricket-news/128490/carmichael-stars-in-sixers-last-ball-thriller",
        "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c359246/an-inventive-21-ball-32-from-m.jpg",
        "publishedAt": "2023-11-13T18:04:45Z",
        "content": "An inventive 21-ball 32 from Mathilda Carmichael gave Sydney Sixers a much-needed three-wicket win © Getty\r\nHobart Hurricanes vs Sydney Sixers - Bellerive Oval, Hobart\r\nAn inventive 21-ball 32 from M… [+2126 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ESPN India"
        },
        "author": "Gabriele Marcotti",
        "title": "Chelsea, Man City's eight-goal epic, Bayern and Barca win, more - ESPN - ESPN India",
        "description": "What really stood out in Sunday's 4-4 draw was how many unforced errors we saw from Chelsea and Man City. PLUS: Barcelona's win still leaves plenty of questions. Gab Marcotti breaks down the European soccer weekend.",
        "url": "https://www.espn.in/football/story/_/id/38888868/chelsea-man-city-eight-goal-epic-bayern-barca-win-more",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1113%2Fr1252745_1296x729_16%2D9.jpg",
        "publishedAt": "2023-11-13T17:33:00Z",
        "content": "Well, well, well: heading into the international break, we were served up a treat across European football this past weekend and plenty to talk about until league play returns in 10 days. Chelsea and… [+25090 chars]"
    },
    {
        "source": {
            "id": "the-hindu",
            "name": "The Hindu"
        },
        "author": "The Hindu",
        "title": "Rahul hits fastest century by an Indian in World Cup - The Hindu",
        "description": null,
        "url": "https://www.thehindu.com/sport/cricket/icc-world-cup/rahul-hits-fastest-century-by-an-indian-in-world-cup/article67529967.ece",
        "urlToImage": null,
        "publishedAt": "2023-11-13T17:08:00Z",
        "content": null
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "Former England captain Michael Vaughan gets haircut at roadside barber shop in Mumbai - Times of India",
        "description": "During his stay in India for the ICC Men's World Cup, former England cricket captain Michael Vaughan opted for a unique experience by getting a haircut and head massage at a roadside barber shop in Mumbai. Vaughan shared the adventure on social media",
        "url": "https://timesofindia.indiatimes.com/videos/toi-original/former-england-captain-michael-vaughan-gets-haircut-at-roadside-barber-shop-in-mumbai/videoshow/105191320.cms",
        "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-105191320,imgsize-1243317.cms",
        "publishedAt": "2023-11-13T16:44:58Z",
        "content": "Nov 13, 2023, 10:14PM ISTSource: TOI.inDuring his stay in India for the ICC Men's World Cup, former England cricket captain Michael Vaughan opted for a unique experience by getting a haircut and head… [+387 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Wisden.com"
        },
        "author": "Sarah Waris",
        "title": "Where do Sri Lanka go from here? - Wisden",
        "description": "Sri Lanka fans desperately hold onto meagre moments of magic, spread across months, but there were hardly any bright sparks in the 2023 World Cup.",
        "url": "https://wisden.com/series-stories/cricket-world-cup-2023/where-do-sri-lanka-go-from-here",
        "urlToImage": "https://cdn.wisden.com/wp-content/uploads/2023/11/F5VlElMa4AALUFr-37.png",
        "publishedAt": "2023-11-13T16:17:43Z",
        "content": "Sri Lanka fans desperately hold onto the occasional moments of magic, spread across months, but there were hardly any bright sparks in the 2023 World Cup.\r\nSri Lanka look forward to a gloomy immediat… [+5283 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TOI Sports Desk",
        "title": "Watch: Virat Kohli gifts his jersey to Roelof van der Merwe - IndiaTimes",
        "description": "Cricket News: Virat Kohli's popularity is not limited to cricket lovers, he is equally admired by players from the opposing teams. This was evident after the India-",
        "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-world-cup/news/watch-virat-kohli-gifts-his-jersey-to-roelof-van-der-merwe/articleshow/105190579.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105190630,width-1070,height-580,imgsize-37680,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-13T15:38:00Z",
        "content": "WC: Iyer, Rahul tons help India thrash Netherlands"
    },
    {
        "source": {
            "id": null,
            "name": "The Cricket Times"
        },
        "author": "Akshat Gaur",
        "title": "India legend Sourav Ganguly reveals reason behind Pakistan's woeful campaign in ODI World Cup 2023 - Cricket Times",
        "description": "Sourav Ganguly has explained the reason of Pakistan’s disappointing run in ODI World Cup 2023. The Babar Azam-led side failed to qualify for the semi-final after finishing at the fifth spot in the points table.",
        "url": "https://crickettimes.com/2023/11/india-legend-sourav-ganguly-reveals-reason-behind-pakistans-woeful-campaign-in-odi-world-cup-2023/",
        "urlToImage": "https://crickettimes.com/wp-content/uploads/2023/11/Sourav-Ganguly-on-Pakistans-campaign-in-ODI-World-Cup-2023.webp",
        "publishedAt": "2023-11-13T15:15:49Z",
        "content": "The Pakistan cricket team faced a challenging journey in the ODI World Cup 2023, led by skipper Babar Azam. With 5 losses in 9 games, the Men in Green fell short of qualifying for the semi-finals, le… [+2088 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": "Danyal Rasool",
        "title": "Morne Morkel resigns as Pakistan fast-bowling coach - ESPNcricinfo",
        "description": "Morkel's contract ran till the end of the year",
        "url": "https://www.espncricinfo.com/story/icc-cricket-world-cup-2023-morne-morkel-resigns-as-pakistan-fast-bowling-coach-1408648",
        "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/371000/371025.6.jpg",
        "publishedAt": "2023-11-13T14:48:45Z",
        "content": "NewsMorkel's contract ran till the end of the year\r\nMorne Morkel had joined the Pakistan set up in June this year  •  AFP/Getty Images\r\nMorne Morkel has quit as Pakistan's fast-bowling coach six week… [+2105 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Cricbuzz"
        },
        "author": null,
        "title": "A different take on South Africa's World Cup narrative | Cricbuzz.com - Cricbuzz - Cricbuzz",
        "description": "Gerald Coetzee hasn't lived any of South Africa's World Cup heartbreaks. All he knows is that Australia, the opposition in the semi-final, have lost four of the last six ODIs against them",
        "url": "https://www.cricbuzz.com/cricket-news/128488/a-different-take-on-south-africas-world-cup-narrative",
        "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c359240/coetzee-one-of-the-standout-p.jpg",
        "publishedAt": "2023-11-13T14:08:38Z",
        "content": "Coetzee, one of the standout performers for South Africa in this World Cup, remains optimistic of his team's chances ©AFP \r\nA 14-year-old Bloemfontein boy, tall for his age, singular in his ambition,… [+5573 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Barca Blaugranes"
        },
        "author": "Barca Blaugranes Staff",
        "title": "Robert Lewandowski strike sees Barcelona hit 200 goals under Xavi - Barca Blaugranes",
        "description": "And the Pole is the top scorer under the current boss",
        "url": "https://www.barcablaugranes.com/2023/11/13/23958649/robert-lewandowski-strike-sees-barcelona-hit-200-goals-under-xavi",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/nYr7fU8wNCpnOnswW0nx0f9pUg8=/0x0:3338x1748/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25080371/1789779179.jpg",
        "publishedAt": "2023-11-13T14:00:00Z",
        "content": "Barcelona scored their 200th goal under coach Xavi Hernandez on Sunday in the 2-1 win over Alaves.\r\nStar striker Robert Lewandowski was the man to hit the milestone, as his second goal of the match f… [+535 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "India.com"
        },
        "author": "https://www.india.com/author/ankit-banerjee/",
        "title": "LIVE BUZZ - Ind vs NZ, ODI WC 2023 S/F 1: Rohit And Co. Start FAVOURITES! - India.com",
        "description": "LIVE Updates - Ind vs NZ, ODI WC 2023 S/F 1: Rohit Sharma's men would start favourites at the Wankhede stadium in Mumbai on Wednesday. Check LIVE streaming details.",
        "url": "https://www.india.com/sports/ind-vs-nz-live-updates-odi-world-cup-2023-semi-final-1-wankhede-mumbai-nov-15-wed-india-vs-new-zealand-streaming-toss-time-pitch-playing-xi-rohit-kohli-gill-rahul-bumrah-shami-williamson-cricket-news-6495869/",
        "urlToImage": "https://static.india.com/wp-content/uploads/2023/11/India-vs-New-Zealand-ODI-WC-2023-Semi-Final-1.jpg",
        "publishedAt": "2023-11-13T13:26:43Z",
        "content": "LIVE Updates - Ind vs NZ, ODI WC 2023 S/F 1: Rohit Sharma's men would start favourites at the Wankhede stadium in Mumbai on Wednesday. Check LIVE streaming details. \r\nIndia vs New Zealand, ODI WC 202… [+3255 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
    },
    {
        "source": {
            "id": null,
            "name": "Zoom"
        },
        "author": "Aayush Kataria",
        "title": "Not Shubman Gill Or Mohammed Siraj! Irfan Pathan Names 5 Most Impressive World Cup Debutants In 2023 Edition - Times Now",
        "description": "Irfan Pathan named his five picks for the best debutants in the 2023 World Cup. Irfan's list included one Indian, but it was neither star opener Shubman Gill nor pacer Mohammed Siraj. The 2023 World Cup has seen not just legends of the game at their best but …",
        "url": "https://www.timesnownews.com/sports/cricket/icc-cricket-world-cup-2023-not-shubman-gill-or-mohammed-siraj-irfan-pathan-names-rachin-ravindra-shreyas-iyer-marco-jansen-azmatullah-omarzai-dilshan-madushanka-5-most-impressive-world-cup-debutants-in-2023-edition-article-105187636",
        "urlToImage": "https://static.tnn.in/thumb/msid-105187636,width-1280,height-720,resizemode-75/105187636.jpg",
        "publishedAt": "2023-11-13T13:03:20Z",
        "content": "Not Rohit Sharma! Indian Star Named Captain Of Cricket Australia's 2023 World Cup Team Of The Tournament"
    },
    {
        "source": {
            "id": null,
            "name": "ESPN India"
        },
        "author": "Dale Johnson",
        "title": "The VAR Review: Was Haaland's penalty fair? Endo red card? - ESPN - ESPN India",
        "description": "Should the VAR have stepped in to cancel Erling Haaland's penalty at Chelsea? And could his goal have been ruled out for handball?",
        "url": "https://www.espn.in/football/story/_/id/38854483/the-var-review-was-haaland-penalty-fair-endo-red-card",
        "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1113%2Fr1252627_2_1296x729_16%2D9.jpg",
        "publishedAt": "2023-11-13T12:59:00Z",
        "content": "Video Assistant Referee causes controversy every week in the Premier League, but how are decisions made, and are they correct?\r\nAfter each weekend we take a look at the major incidents to examine and… [+14186 chars]"
    }
],

"technology": [
    {
        "source": {
            "id": null,
            "name": "Sportskeeda"
        },
        "author": "Mridul Dutta",
        "title": "Why Oppressor Mk II is still overpowered in GTA Online - Sportskeeda",
        "description": "GTA Online players have an odd love-hate relationship with the Pegassi Oppressor Mk II.",
        "url": "https://www.sportskeeda.com/gta/why-oppressor-mk-ii-still-overpowered-gta-online",
        "urlToImage": "https://staticg.sportskeeda.com/editor/2023/11/8c349-16999482166356-1920.jpg",
        "publishedAt": "2023-11-14T08:18:00Z",
        "content": "GTA Online players have an odd love-hate relationship with the Pegassi Oppressor Mk II. On one hand, it is notorious as a griefers best friend, while on the other, it is among the most versatile vehi… [+2736 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Gadgets360.com"
        },
        "author": "David Delima, Siddharth Suvarna",
        "title": "Apple to Allow Users in the EU to Sideload iPhone Apps in H1 2024: Gurman - Gadgets 360",
        "description": "Apple will allow users in the European Union to sideload iPhone apps onto their smartphones, according to Bloomberg's Mark Gurman. iPhone owners will be able to install apps not accessible via the App Store for the first time, as the company has to adhere to …",
        "url": "https://www.gadgets360.com/mobiles/news/apple-allow-iphone-app-sideloading-eu-users-in-2024-report-4572637",
        "urlToImage": "https://i.gadgets360cdn.com/large/ios_17_apple_1686028512112.jpg",
        "publishedAt": "2023-11-14T08:16:10Z",
        "content": "Apple is working on allowing users in the European Union to sideload iPhone apps onto the company's smartphones, Bloomberg's Mark Gurman states in his weekly newsletter. The ability to install apps t… [+2063 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "Ankita Chakravarti",
        "title": "Vivo Watch 3 with BlueOS, 16-day battery life launched: Check price, specifications - India Today",
        "description": "Vivo has launched the Vivo Watch 3, a new smartwatch offering an array of health and fitness tracking capabilities, a durable design, and a long battery life. The watch, which has yet to launch in India, also features Vivo's proprietary BlueOS operating syste…",
        "url": "https://www.indiatoday.in/technology/news/story/vivo-watch-3-with-blueos-16-day-battery-life-launched-check-price-specifications-2462674-2023-11-14",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/vivo-watch-3-144507716-16x9_0.jpg?VersionId=MtjVWwu9Fwm8F.wKqqG92Dxe99q_BtQQ",
        "publishedAt": "2023-11-14T07:45:41Z",
        "content": "Vivo has unveiled its latest smartwatch, the Vivo Watch 3, alongside the launch of its flagship X100 series smartphones. This new offering succeeds the Watch 2 that made its debut back in 2021. The V… [+2068 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sparrowsnews.com"
        },
        "author": "Kamlesh Bhati",
        "title": "Honor 100 Series Design And Release Date Announced | SPARROWS NEWS - Sparrows News",
        "description": "In an exciting announcement, Honor has officially initiated the preheating phase for its highly anticipated Honor 100 series of smartphones. The grand",
        "url": "https://sparrowsnews.com/2023/11/14/honor-100-series-design-and-release-date/",
        "urlToImage": "https://i0.wp.com/sparrowsnews.com/wp-content/uploads/2023/11/wp-1699947695131.webp",
        "publishedAt": "2023-11-14T07:44:18Z",
        "content": "In an exciting announcement, Honor has officially initiated the preheating phase for its highly anticipated Honor 100 series of smartphones. The grand unveiling is set to take place on November 23, p… [+1638 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sportskeeda"
        },
        "author": "Mridul Dutta",
        "title": "30 GTA 6 features reportedly confirmed from leaks and rumours - Sportskeeda",
        "description": "Many fans eagerly await what new things Rockstar Games will add in GTA 6.",
        "url": "https://www.sportskeeda.com/gta/30-gta-6-features-reportedly-confirmed-leaks-rumours",
        "urlToImage": "https://staticg.sportskeeda.com/editor/2023/11/b1b58-16999419964940-1920.jpg",
        "publishedAt": "2023-11-14T07:36:00Z",
        "content": "Many fans eagerly await what new things Rockstar Games will add in GTA 6. An underdeveloped version of the game was leaked in September 2022, disclosing many features and important details that the s… [+4267 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Investing.com"
        },
        "author": "IANS",
        "title": "Samsung unveils its own generative AI model 'Gauss' - Investing.com India",
        "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
        "url": "https://in.investing.com/news/samsung-unveils-its-own-generative-ai-model-gauss-3901015",
        "urlToImage": image1,
        "content": "Seoul, Nov 14 (IANS) Samsung Electronics (KS:\r\n005930\r\n) on Tuesday showcased its latest updates to software and services, including its new generative artificial intelligence (AI) model, Samsung Gau… [+1779 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "GSMArena.com"
        },
        "author": "Yordan",
        "title": "Red Magic 9 Pro will have a flat display, no camera bumps - GSMArena.com news - GSMArena.com",
        "description": "We can also see the cooling vent on the side. The Red Magic 9 Pro will arrive on November 23, and the gaming branch of nubia started with the teasers. The...",
        "url": "https://www.gsmarena.com/red_magic_9_pro_will_have_a_flat_display_no_camera_bumps-news-60571.php",
        "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/11/zte-nubia-red-magic-9-pro-profile/-952x498w6/gsmarena_001.jpg",
        "publishedAt": "2023-11-14T07:17:01Z",
        "content": "The Red Magic 9 Pro will arrive on November 23, and the gaming branch of nubia started with the teasers. The first one is the side view of the smartphone, revealing it will be flat on both sides no c… [+835 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Gadgets360.com"
        },
        "author": "David Delima, Siddharth Suvarna",
        "title": "WhatsApp Rolls Out Voice Chat Feature for Less Disruptive Group Calls: How It Works - Gadgets 360",
        "description": "WhatsApp is rolling out voice chats, a new feature that makes group calls on the messaging service less intrusive. Instead of ringing members' devices, voice chats will be less intrusive and allow group members who are in a conversation to perform other tasks…",
        "url": "https://www.gadgets360.com/apps/news/whatsapp-voice-chat-feature-rolling-out-bigger-groups-4572411",
        "urlToImage": "https://i.gadgets360cdn.com/large/whatspp_voice_chats_meta_1699942430392.jpg",
        "publishedAt": "2023-11-14T07:02:51Z",
        "content": "WhatsApp has begun rolling out a new voice chat feature that will offer an improved experience while making group calls on the messaging service. Currently, group calls ring members' devices, which m… [+1862 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Editorji.com"
        },
        "author": "Editorji News Desk",
        "title": "Vivo X100, Vivo X100 Pro launched with Dimensity 9300, Zeiss Optics: Explore prices & specs - Editorji",
        "description": "Explore the Vivo X100 Pro and X100, newly launched in China with MediaTek Dimensity 9300 SoC, Android 14, Zeiss cameras, and a 6.78-inch AMOLED display. These high-end models offer advanced features in the competitive smartphon...",
        "url": "https://www.editorji.com/tech-news/mobiles/vivo-x100-vivo-x100-pro-launched-with-dimensity-9300-zeiss-optics-explore-prices-specs-1699945135418",
        "urlToImage": "https://cdn.editorji.com/ptF9l8lwii.jpg",
        "publishedAt": "2023-11-14T06:58:55Z",
        "content": "The Vivo X100 Pro and Vivo X100 have recently launched in China, bringing exciting features to the smartphone market. These phones are powered by the new MediaTek Dimensity 9300 SoC and run on the la… [+3582 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "India TV News"
        },
        "author": "Edited by Vishal Upadhyay",
        "title": "Garena Free Fire Max codes for November 14 revealed: Check codes, how to redeem, and more - India TV News",
        "description": "Looking for Free Fire Max codes for today? Go to reward.ff.garena.com, and use codes (like ZFIXDVTSLSC) for cool stuff like premium bundles and diamonds!",
        "url": "https://www.indiatvnews.com/technology/news/garena-free-fire-max-daily-codes-14-november-for-weapons-diamonds-and-more-2023-11-14-902658",
        "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/11/garena-free-fire-codes-for-14-november-1699944291.jpg",
        "publishedAt": "2023-11-14T06:54:51Z",
        "content": "Garena Free Fire Max fans, gear up for today's exclusive redeem codes! Accessible on the official website reward.ff.garena.com, these 12-character alphanumeric codes unlock awesome things like outfit… [+1554 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Zee Business"
        },
        "author": "ZeeBiz WebTeam",
        "title": "Buy Apple iPhone 13 for just Rs 999 on Flipkart - Check Details - Zee Business",
        "description": "While most of the Diwali offers on smartphones are now over, theres still a chance to buy the iPhone 13 at the lowest price.",
        "url": "https://www.zeebiz.com/technology/news-apple-iphone-13-128gb-price-in-india-flipkart-offer-hdfc-bank-exchange-offer-264247",
        "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2023/11/14/268956-iphone13flipkart.jpg",
        "publishedAt": "2023-11-14T06:50:54Z",
        "content": "Apple iPhone 13 Series was the first to come with a diagonal rear camera design. The Cupertino-based tech company is still carrying the same design. So iPhone 13 can be the best option for those who … [+1267 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Bloomberg",
        "title": "Alphabet CEO Sundar Pichai to testify in Google Play trial today - Hindustan Times",
        "description": "Alphabet Inc. CEO Sundar Pichai will testify next week in a trial against Epic Games over Google Play app store policies.",
        "url": "https://www.hindustantimes.com/technology/alphabet-ceo-sundar-pichai-to-testify-in-google-play-trial-today-101699942627451.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/14/1600x900/APTOPIX-Google-Antitrust-Showdown-0_1699942822465_1699942879715.jpg",
        "publishedAt": "2023-11-14T06:30:14Z",
        "content": "Alphabet Inc. Chief Executive Officer Sundar Pichai on Tuesday is set to face a jury to defend Google Play app store policies that are at the heart of a high-stakes antitrust fight with Epic Games In… [+1729 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "gizmochina"
        },
        "author": "gizmochina",
        "title": "Global OnePlus 12 launch imminent as it secures another key certification - gizmochina",
        "description": null,
        "url": "https://www.gizmochina.com/2023/11/14/global-oneplus-12-launch-imminent-as-it-secures-another-key-certification/",
        "urlToImage": null,
        "publishedAt": "2023-11-14T06:13:39Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "The Indian Express",
        "title": "iOS 18 is reported to be an ‘ambitious’ update with numerous AI features - The Indian Express",
        "description": null,
        "url": "https://indianexpress.com/article/technology/tech-news-technology/ios-18-ambitious-update-gen-ai-features-9025901/",
        "urlToImage": null,
        "publishedAt": "2023-11-14T05:42:40Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "title": "From sparking powerful solar storms to causing forest fires, know the dangers of solar winds - HT Tech",
        "description": "Solar winds have been associated with solar storms, but recent studies also point out their involvement in large forest fires. Know the threats of this stellar wind and the different ways it impacts us.",
        "url": "https://tech.hindustantimes.com/tech/news/from-sparking-powerful-solar-storms-to-causing-forest-fires-know-the-dangers-of-solar-winds-71699939928200.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2023/11/14/1600x900/NOAA_1632590234307_1699940037820.JPG",
        "publishedAt": "2023-11-14T05:42:14Z",
        "content": "Solar winds have been part of the reason behind the recent series of solar storms that have struck the Earth in the last couple of weeks. They either sparked solar storm incidents or amplified an act… [+2785 chars]"
    },
    {
        "source": {
            "id": "the-hindu",
            "name": "The Hindu"
        },
        "author": "The Hindu",
        "title": "Pop-culture comes alive: The rise of cosplay community in India - The Hindu",
        "description": null,
        "url": "https://www.thehindu.com/entertainment/cosplay-comiccon-bangalore/article67477374.ece",
        "urlToImage": null,
        "publishedAt": "2023-11-14T05:33:00Z",
        "content": null
    },
    {
        "source": {
            "id": "the-hindu",
            "name": "The Hindu"
        },
        "author": "The Hindu",
        "title": "Google sues scammers over fake Bard AI malware - The Hindu",
        "description": null,
        "url": "https://www.thehindu.com/sci-tech/technology/google-sues-scammers-over-fake-bard-ai-malware/article67531022.ece",
        "urlToImage": null,
        "publishedAt": "2023-11-14T04:29:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Insidesport.in"
        },
        "author": "Aditya Parsutkar",
        "title": "The Game Awards 2023 announces nominees for all categories, check here - InsideSport",
        "description": "The Game Awards 2023 has revealed over 30 categories, including Game of the Year and Esports Game of the Year to Content Creator of the Year",
        "url": "https://www.insidesport.in/the-game-awards-2023-announces-nominees-for-all-categories-check-here/",
        "urlToImage": "https://www.insidesport.in/wp-content/uploads/2023/11/9XGQXe3NEiQ-HD.jpg",
        "publishedAt": "2023-11-14T02:48:13Z",
        "content": "The Game Awards 2023 has revealed over 30 categories, including Game of the Year and Esports Game of the Year to Content Creator of the Year and more.Geoff Keighley, the host of The Game Awards 2023,… [+8345 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "GSMArena.com"
        },
        "author": "Vlad",
        "title": "Here are Google's Black Friday deals, going live this Thursday - GSMArena.com news - GSMArena.com",
        "description": "You can save $400 on the Pixel Fold. Today Google has published its Black Friday deals that will become available through its online store in the US this...",
        "url": "https://www.gsmarena.com/here_are_googles_black_friday_deals_going_live_this_thursday-news-60570.php",
        "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/11/google-black-friday-deals/-952x498w6/gsmarena_000.jpg",
        "publishedAt": "2023-11-14T02:45:01Z",
        "content": "Today Google has published its Black Friday deals that will become available through its online store in the US this Thursday - because starting Black Friday deals on a Thursday makes perfect sense (… [+1160 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Emsnow.com"
        },
        "author": "Jennifer Read",
        "title": "India Smartphone Market Remained Flat YoY in 3Q23 with 44 Million Units, Says IDC · EMSNow - EMSNow",
        "description": "INDIA – According to the International Data Corporation ’s (IDC) Worldwide Quarterly Mobile Phone Tracker, India’s smartphone market remained flat YoY",
        "url": "https://www.emsnow.com/india-smartphone-market-remained-flat-yoy-in-3q23-with-44-million-units-says-idc/",
        "urlToImage": "https://www.emsnow.com/wp-content/uploads/2020/09/EMSnow-logo-1200x630-1-e1623708589690.png",
        "publishedAt": "2023-11-14T02:12:38Z",
        "content": "INDIA  According to the International Data Corporation s (IDC) Worldwide Quarterly Mobile Phone Tracker, Indias smartphone market remained flat YoY (year-over-year), shipping 44 million units in 3Q23… [+3857 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sportskeeda"
        },
        "author": "Edward Hays",
        "title": "5 best Minecraft servers like Hoplite - Sportskeeda",
        "description": "Minecraft has been around for over a decade, and the number of players is growing every day. It's not surprising that there are a lot of servers for the game, given its large fanbase.",
        "url": "https://www.sportskeeda.com/minecraft/5-best-minecraft-servers-like-hoplite",
        "urlToImage": "https://staticg.sportskeeda.com/editor/2023/11/19152-16998928185938-1920.jpg",
        "publishedAt": "2023-11-14T01:15:00Z",
        "content": "Minecraft has been around for over a decade, and the number of players is growing every day. It's not surprising that there are a lot of servers for the game, given its large fanbase. Among them, Hop… [+4250 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "The GTA 6 rumours are flying! - GamesRadar",
        "description": "#gta6 #gta #grandtheftauto #rockstargames #rockstar #gta5 #gaming Subscribe to GamesRadar on YouTube https://www.youtube.com/user/GamesRadarFollow on Faceboo...",
        "url": "https://www.youtube.com/watch?v=fQ3UXc3V_IY",
        "urlToImage": "https://i.ytimg.com/vi/fQ3UXc3V_IY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHOBYACgAqKAgwIABABGHIgXShEMA8=&rs=AOn4CLBZeYUpzWUcAq9YYor9GqyZiNTL9w",
        "publishedAt": "2023-11-14T00:15:01Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "gizmochina"
        },
        "author": "gizmochina",
        "title": "WhatsApp beta adds a secret code feature to hide and access locked chats - gizmochina",
        "description": null,
        "url": "https://www.gizmochina.com/2023/11/13/whatsapp-beta-secret-code-feature-hide-access-locked-chats/",
        "urlToImage": null,
        "publishedAt": "2023-11-13T22:49:36Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Zoom"
        },
        "author": "Shubham Arora",
        "title": "Apple iPad Lineup for 2024: New iPad Air and iPad Pro Models, M3 Chip, and OLED Displays - Times Now",
        "description": "Apple is expected to unveil a refreshed iPad lineup in 2024. The anticipated releases include a larger 12.9-inch iPad Air with an oxide backplane, and two revamped iPad Pro models featuring OLED displays and the latest M3 chip. The move may impact market dyna…",
        "url": "https://www.timesnownews.com/technology-science/apple-tipped-to-launch-new-ipad-air-and-ipad-pro-models-in-2024-article-105193585",
        "urlToImage": "https://static.tnn.in/thumb/msid-105193587,thumbsize-351154,width-1280,height-720,resizemode-75/105193587.jpg",
        "publishedAt": "2023-11-13T21:53:33Z",
        "content": "Apple's Diwali Deals: Insane iPhone 14, AirPods Discounts, and More, You Can't Miss This Dhanteras and Diwali"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "How to and when to clear RAM on your iPhone - Times of India",
        "description": "RAM, or Random Access Memory, is a type of computer memory that stores data being used by a program. When you open an app on your iPhone, it is loaded",
        "url": "https://timesofindia.indiatimes.com/gadgets-news/how-to-and-when-to-clear-ram-on-your-iphone/articleshow/105193076.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-105193083,width-1070,height-580,imgsize-29338,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-11-13T19:50:00Z",
        "content": "5G smartphones with 8GB RAM and 256GB storage under Rs 25,000"
    },
    {
        "source": {
            "id": null,
            "name": "gizmochina"
        },
        "author": "gizmochina",
        "title": "Redmi Note 13 4G gets FCC certified, on its way to the global market - gizmochina",
        "description": null,
        "url": "https://www.gizmochina.com/2023/11/13/redmi-note-13-4g-fcc-certification/",
        "urlToImage": null,
        "publishedAt": "2023-11-13T18:36:45Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "iPhone 15 Pro vs Pixel 8 Pro - Let's SETTLE This! - Hardware Canucks",
        "description": "Both the iPhone 15 Pro and the Google Pixel 8 Pro are currently among the most sought-after phones in 2023. In this video, I take you through my firsthand ex...",
        "url": "https://www.youtube.com/watch?v=DmoGfUFFitU",
        "urlToImage": "https://i.ytimg.com/vi/DmoGfUFFitU/maxresdefault.jpg",
        "publishedAt": "2023-11-13T18:24:08Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Opp.today"
        },
        "author": "Ron Davis",
        "title": "New Article: Exploring the Versatility of the Dell XPS 17 - OPP.Today",
        "description": "New Article: Exploring the Versatility of the Dell XPS 17 - OPP.Today",
        "url": "https://www.opp.today/budget/dell-xps-17-review-heavy-duty-laptop-that-can-do-everything-but-has-a-huge-price-tag/209157/",
        "urlToImage": "https://www.opp.today/wp-content/uploads/2023/08/mfrack_realistic_photo_of_men_using_smartphone_or_computer_on_o_a07a3dd4-537b-4aaa-a3ae-df4317bd16af.png",
        "publishedAt": "2023-11-13T18:17:16Z",
        "content": "In today’s fast-paced world, laptops have become an essential tool for both professionals and individuals. The need for flexibility and portability has led to the rise in popularity of laptops over t… [+3110 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "XDA Developers"
        },
        "author": "Dylan Raga",
        "title": "Google Pixel 8 Pro display deep dive: Brain finally meets brawn - XDA Developers",
        "description": "What happens when Google uses premium components? Well, you get a markedly improved display.",
        "url": "https://www.xda-developers.com/google-pixel-8-pro-display-deep-dive/",
        "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2023/10/google_pixel8pro_feature.png",
        "publishedAt": "2023-11-13T18:01:00Z",
        "content": "The Pixel lineup has developed a mixed reputation over its lifetime. On the one hand, Google often pushes the needle for what smartphones can do, creating unique solutions to complex problems a lot o… [+26829 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Opp.today"
        },
        "author": "Joel Soisson",
        "title": "New & Notable: Exciting Product Launches to Watch Out For - OPP.Today",
        "description": "New & Notable: Exciting Product Launches to Watch Out For - OPP.Today",
        "url": "https://www.opp.today/apple/our-favorite-new-products-in-november-apple-amazon-quip-allbirds-and-more/209017/",
        "urlToImage": "https://www.opp.today/wp-content/uploads/2023/08/mfrack_man_or_men_using_smartphone_or_computer_647c53c2-4328-4244-b5b4-d4c34eca8c69.png",
        "publishedAt": "2023-11-13T17:20:30Z",
        "content": "Get ready for some exciting new product launches that will enhance your daily life. From upgraded tech gadgets to innovative home appliances, these releases offer improved features and functionalitie… [+5185 chars]"
    }
]

}

export default Articles;