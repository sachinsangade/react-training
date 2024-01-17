const restaurants = [
    {
        "id": "765152",
        "name": "Pizza Hut",
        "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
        "locality": "Pimpri chinchwad",
        "areaName": "Punawale",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Pizzas"
        ],
        "avgRating": 4,
        "parentId": "721",
        "avgRatingString": "4.0",
    },
    {
        "id": "429887",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "locality": "Sector 32 A",
        "areaName": "Ravet",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Desserts",
            "Ice Cream"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "5588",
        "avgRatingString": "4.3",
    },
    {
        "id": "95166",
        "name": "Behrouz Biryani",
        "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
        "locality": "PCMC",
        "areaName": "Ravet",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Biryani",
            "Kebabs",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "1803",
        "avgRatingString": "4.4",
    },
    {
        "id": "156162",
        "name": "The Good Bowl",
        "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
        "locality": "PCMC",
        "areaName": "Ravet",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Biryani",
            "North Indian",
            "Pastas",
            "Punjabi",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "7918",
        "avgRatingString": "4.4",
    },
    {
        "id": "767115",
        "name": "Polar Bear",
        "cloudinaryImageId": "e8fbaca94d54c116198ba614deb3fbfb",
        "locality": "Western Avenue",
        "areaName": "Wakad",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "726",
        "avgRatingString": "4.6",
    },
    {
        "id": "750413",
        "name": "Daily Kitchen - Homestyle Meals",
        "cloudinaryImageId": "f3712f78feb56ca2f11ba6dcacd54521",
        "locality": "Kiwale Road",
        "areaName": "Lodha Belmondo",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Home Food",
            "Indian",
            "North Indian",
            "Thalis"
        ],
        "avgRating": 4.3,
        "parentId": "444382",
        "avgRatingString": "4.3",
    },
    {
            "id": "569936",
            "name": "ZAZA Mughal Biryani",
            "cloudinaryImageId": "e12f3a72ab92442dc088f803a04d4293",
            "locality": "Kiwale Road",
            "areaName": "Dehu Road",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Awadhi"
            ],
            "avgRating": 4.3,
            "parentId": "22473",
            "avgRatingString": "4.3",

    },
    {
        "id": "95172",
        "name": "LunchBox - Meals and Thalis",
        "cloudinaryImageId": "dcybiptqpbernwtpbs1s",
        "locality": "PCMC",
        "areaName": "Ravet",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Biryani",
            "North Indian",
            "Punjabi",
            "Healthy Food",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "4925",
        "avgRatingString": "4.2",

    },
    {
        "id": "95161",
        "name": "Faasos - Wraps, Rolls & Shawarma",
        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "locality": "PCMC",
        "areaName": "Ravet",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "American",
            "Healthy Food",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "21809",
        "avgRatingString": "4.4",

    },
    {
        "id": "622220",
        "name": "MOJO Pizza - 2X Toppings",
        "cloudinaryImageId": "59b64f9bb67234987652437f21d379c2",
        "locality": "Pune",
        "areaName": "Lonavala",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Pizzas",
            "Italian",
            "Fast Food",
            "Desserts"
        ],
        "avgRating": 4.6,
        "parentId": "11329",
        "avgRatingString": "4.6",

    },
    {
        "id": "569935",
        "name": "NH1 Bowls - Highway To North",
        "cloudinaryImageId": "94654fdf308764cd0faf83dba35bcdc3",
        "locality": "Kiwale Road",
        "areaName": "Lonavala",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "North Indian",
            "Punjabi",
            "Home Food"
        ],
        "avgRating": 4.7,
        "parentId": "22452",
        "avgRatingString": "4.7",

    },
    {
        "id": "72099",
        "name": "Sentosa MultiCuisine Restaurant",
        "cloudinaryImageId": "rxxbootvc1xr40878egm",
        "locality": "Ravet Road",
        "areaName": "Ravet",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "North Indian",
            "Chinese",
            "Mughlai"
        ],
        "avgRating": 4.4,
        "parentId": "180013",
        "avgRatingString": "4.4",

    },
    {
        "id": "742463",
        "name": "Veg Palace",
        "cloudinaryImageId": "5997d5fd3dfa3c43b0f061a19f8e49ff",
        "locality": "Celestial City Road",
        "areaName": "Ravet",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "North Indian",
            "South Indian",
            "Snacks",
            "Beverages",
            "Sweets"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "258790",
        "avgRatingString": "4.2",

    },
    {
        "id": "135555",
        "name": "Sandeep Hotel",
        "cloudinaryImageId": "ppbhverd6kvlax6his2l",
        "areaName": "Dehu Road",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Chinese",
            "North Indian",
            "Biryani"
        ],
        "avgRating": 4.1,
        "parentId": "176887",
        "avgRatingString": "4.1",

    },
    {
        "id": "128629",
        "name": "Le Stone",
        "cloudinaryImageId": "fshj7zqbfd6sr94xuxqb",
        "locality": "BRT Road",
        "areaName": "Ravet",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Indian",
            "Continental"
        ],
        "avgRating": 4.2,
        "parentId": "124562",
        "avgRatingString": "4.2",

    }
]

export default restaurants;