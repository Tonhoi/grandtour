import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
  ClockIcon,
  LocationIcon,
  PhoneIcon,
} from "@/components";

export const NAVDATA = [
  {
    name: "Home",
    id: 13,
    children: [
      {
        name: "Home 1 - Background Image",
        id: 50,
      },
      {
        name: "Home 2 - Youtube Video",
        id: 51,
      },
      {
        name: "Home 3 - Google Inspired",
        id: 52,
      },
      {
        name: "Home 4 - Travel Site",
        id: 53,
      },
    ],
  },
  {
    name: "Tours",
    id: 14,
    children: [
      {
        name: "Tour Classic Fullwidth",
        id: 21,
        children: [
          {
            name: "2 Columns",
            id: 60,
          },
          {
            name: "3 Columns",
            id: 61,
          },
          {
            name: "4 Columns",
            id: 62,
          },
        ],
      },
      {
        name: "Tour Classic Sidebar",
        id: 22,
        children: [
          {
            name: "Right Sidebar",
            id: 63,
          },
          {
            name: "Left Sidebar",
            id: 64,
          },
        ],
      },
      {
        name: "Tour Grid Fullwidth",
        id: 23,
        children: [
          {
            name: "2 Columns",
            id: 65,
          },
          {
            name: "3 Columns",
            id: 66,
          },
          {
            name: "4 Columns",
            id: 67,
          },
        ],
      },
      {
        name: "Tour Grid Sidebar",
        id: 24,

        children: [
          {
            name: "Right Sidebar",
            id: 68,
          },
          {
            name: "Left Sidebar",
            id: 69,
          },
        ],
      },
      {
        name: "Tour List Sidebar",
        id: 25,

        children: [
          {
            name: "Right Sidebar",
            id: 70,
          },
          {
            name: "Left Sidebar",
            id: 71,
          },
        ],
      },
      {
        name: "Tour Header Type",
        id: 26,
        children: [
          {
            name: "Featured Image",
            id: 72,
          },
          {
            name: "Video",
            id: 73,
          },
        ],
      },
      {
        name: "Tour Categories",
        id: 27,
        children: [
          {
            name: "Rural",
            id: 74,
          },
          {
            name: "Snow & Ice",
            id: 75,
          },
          {
            name: "Wildlife",
            id: 76,
          },
          {
            name: "Mountain",
            id: 77,
          },
        ],
      },
    ],
  },
  {
    name: "Booking",
    id: 15,
    children: [
      {
        id: 31,
        name: "Online Payment for Booking",

        children: [
          {
            name: "Variable Tour Pricing",
            id: 78,
          },
          {
            name: "Simple Tour Pricing",
            id: 79,
          },
        ],
      },
      {
        id: 32,
        name: "Custom Booking Form",
        children: [
          {
            id: 80,
            name: "Booking Form + Sub Tour Date",
          },
          {
            id: 81,
            name: "Booking Form + Custom Date",
          },
        ],
      },
      {
        id: 33,
        name: "Tour Durations",

        children: [
          {
            name: "Single Day Tour",
            id: 82,
          },
          {
            name: "Multiple Days Tour",
            id: 83,
          },
        ],
      },

      {
        id: 34,
        name: "Custom Booking URL for Affiliate Tour",
      },

      {
        id: 35,
        name: "Custom Booking using custom HTML & Shortcode",
      },

      {
        id: 36,
        name: "Header Options",
        children: [
          {
            name: "Standard Background Header",
            id: 37,
          },
          {
            name: "Video Background Header",
            id: 38,
          },
        ],
      },

      {
        id: 39,
        name: "Header Options",

        children: [
          {
            name: "With Sidebar",
            id: 100,
          },
          {
            name: "Fullwidth",
            id: 101,
          },
        ],
      },
    ],
  },
  {
    name: "Destinations",
    id: 102,
    children: [
      {
        name: "Destination Fullwidth",
        id: 103,
      },
      {
        name: "Destination + Video Header",
        id: 104,
      },
      {
        name: "Destination Right Sidebar",
        id: 105,
      },

      {
        name: "Destination Left Sidebar",
        id: 106,
      },

      {
        name: "Single Destination",
        id: 107,
      },

      {
        name: "Single Destination + Video",
        id: 108,
      },
    ],
  },

  {
    name: "Pages",
    id: 109,
    children: [
      {
        name: "About Us",
        id: 110,
      },

      {
        name: "Contact Us",
        id: 111,
      },

      {
        name: "FAQs",
        id: 112,
      },

      {
        name: "Gallery",
        id: 113,
      },

      {
        name: "Page Fullwidth",
        id: 114,
      },

      {
        name: "Page + Video Background Header",
        id: 115,
      },

      {
        name: "Page Right Sidebar",
        id: 116,
      },

      {
        name: "Page Left Sidebar",
        id: 117,
      },
    ],
  },

  {
    name: "Blog",
    id: 118,

    children: [
      {
        name: "Blog Right Sidebar",
        id: 119,
      },

      {
        name: "Blog Left Sidebar",
        id: 120,
      },

      {
        name: "Blog Fullwidth",
        id: 121,
      },

      {
        name: "Blog Grid Right Sidebar",
        id: 122,
      },

      {
        name: "Blog Grid Left Sidebar",
        id: 123,
      },

      {
        name: "Blog Grid Fullwidth",
        id: 124,
      },

      {
        name: "Blog Full + Grid Right Sidebar",
        id: 125,
      },

      {
        name: "Blog Full + Grid Left Sidebar",
        id: 126,
      },

      {
        name: "Blog Full + Grid Fullwidth",
        id: 127,
      },
    ],
  },

  {
    name: "Shortcodes",
    id: 128,

    children: [
      {
        name: "Accordion & Toggles",
        id: 129,
      },

      {
        name: "Alert Boxes",
        id: 130,
      },

      {
        name: "Animated Content",
        id: 131,
      },

      {
        name: "Buttons & Social Icons",
        id: 132,
      },

      {
        name: "Columns",
        id: 133,
      },

      {
        name: "Google Maps",
        id: 134,
      },

      {
        name: "Image Frame & Animation",
        id: 135,
      },

      {
        name: "Image Teasers",
        id: 136,
      },

      {
        name: "Pricing Tables",
        id: 137,
      },

      {
        name: "Tabs",
        id: 138,
      },
    ],
  },

  {
    name: "Shop",
    id: 139,

    children: [
      {
        name: "Shop Fullwidth",
        id: 140,
      },

      {
        name: "Shop Sidebar",
        id: 141,
      },

      {
        name: "Single Product Fullwidth",
        id: 142,
      },

      {
        name: "Single Product With Sidebar",
        id: 143,
      },
    ],
  },
];

export const NAVMOBILEDATA = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Tours",
  },
  {
    id: 3,
    name: "Booking",
  },
  {
    id: 4,
    name: "Destinations",
  },
  {
    id: 5,
    name: "Pages",
  },
  {
    id: 6,
    name: "Blog",
  },
  {
    id: 7,
    name: "Shortcodes",
  },
  {
    id: 8,
    name: "Shop",
  },
];

export const IMAGE_LIST = [
  {
    src: "https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg",
  },

  {
    src: "https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg",
  },

  {
    src: "https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg",
  },

  {
    src: "https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg",
  },

  {
    src: "https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg",
  },

  {
    src: "https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg",
  },
];

export const CONTACTUS = [
  {
    icon: PhoneIcon,
    title: "1-567-124-44227",
  },
  {
    icon: LocationIcon,
    title: "184 Main Street East Perl Habour 8007",
  },
  {
    icon: ClockIcon,
    title: "Mon - Sat 8.00 - 18.00 Sunday CLOSED",
  },
];

export const MENUFOOTER = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/",
    title: "Tours",
  },
  {
    href: "/",
    title: "Blog",
  },
  {
    href: "/",
    title: "Purchase Theme",
  },
];

export const POPULAR_DESTINATION_ITEMS = [
  {
    title: "Tokyo",
    src: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg",
  },
  {
    title: "Seoul",
    src: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg",
  },
  {
    title: "Paris",
    src: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg",
  },
  {
    title: "London",
    src: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg",
  },
];

export const BEST_VALUE_TRIPS_ITEMS = [
  {
    src: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg",
    title: "French Autumn",
    description: "City Tours, Urban",
    count_viewer: "4 reviews",
    time: "5 days",
    price: "$5,000",
    reduce_price: "",
  },
  {
    src: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg",
    title: "Grand Switzerland",
    description: "Shopping, Mountain, Snow & Ice",
    count_viewer: "4 reviews",
    time: "6 days",
    price: "$6,000",
    reduce_price: "",
  },
  {
    src: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg",
    title: "Discover Japan",
    description: "City Tours, Iconic",
    count_viewer: "4 reviews",
    time: "5 days",
    price: "$3,000",
    reduce_price: "$2,500",
    is_sale: true,
  },
];

export const REASONITEM = [
  {
    src: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png",
    title: "Handpicked Hotels",
    sub_title:
      "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
  {
    src: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png",
    title: "World Class Service",
    sub_title:
      "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
  {
    src: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png",
    title: "Best Price Guarantee",
    sub_title:
      "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
];

export const POST_ITEMS = [
  {
    src: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg",
    title: "Memorial Day to Someone Told Me to Travel",
    time: "December 10, 2016",
    description:
      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache",
  },
  {
    src: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg",
    title: "7 Tips For Nomads On A Budget Trips",
    time: "December 10, 2016",
    description:
      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
  },
  {
    src: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg",
    title: "Taking A Travel Blog Victory Lap",
    time: "December 10, 2016",
    description:
      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
  },
];

export const CITYOPTIOS = [
  { value: "french_autumn", label: "French Autumn" },
  { value: "grand_switzerland", label: "Grand Switzerland" },
  { value: "discover_japan", label: "Discover Japan" },
  { value: "niko_trip", label: "Niko Trip" },
  { value: "seoul_your_soul", label: "Seoul Your Soul" },
  { value: "hong_kong", label: "Hong Kong" },
  { value: "great_britain_travel", label: "Great Britain Travel" },
  { value: "exclusive_prague_trip", label: "Exclisive Prague Trip" },
  { value: "the_new_california", label: "The New California" },
  { value: "5_lake_of_fuji_san", label: "5 Lake Of Fuji San" },
];

export const MONTHOPTIONS = [
  {
    value: "january",
    label: "January",
  },
  {
    value: "februaty",
    label: "Februaty",
  },
  {
    value: "march",
    label: "March",
  },
  {
    value: "april",
    label: "April",
  },
  {
    value: "may",
    label: "May",
  },
  {
    value: "june",
    label: "June",
  },
  {
    value: "july",
    label: "July",
  },
  {
    value: "august",
    label: "August",
  },
  {
    value: "september",
    label: "September",
  },
  {
    value: "october",
    label: "October",
  },
  {
    value: "november",
    label: "November",
  },
  {
    value: "december",
    label: "December",
  },
];

export const DATEOPTIONS = [
  {
    value: "low_to_hight",
    label: "Price Low To Hight",
  },
  {
    value: "hight_to_low",
    label: "Price Hight To Low",
  },
  {
    value: "name",
    label: "Sort By Name",
  },
  {
    value: "popularity",
    label: "Sort By Popularity",
  },
  {
    value: "review_score",
    label: "Sort By Review Score",
  },
];

export const CATEGORYOPTIONS = [
  {
    value: "mountain",
    label: "Mountain",
  },
  {
    value: "rural",
    label: "Rural",
  },
  {
    value: "snow_ice",
    label: "Snow & Ice",
  },
  {
    value: "wildlife",
    label: "Wildlife",
  },
];

export const DESTINATIONOPTIONS = [
  {
    value: "tokyo",
    label: "Tokyo",
  },
  {
    value: "seoul",
    label: "Seoul",
  },
  {
    value: "paris",
    label: "Paris",
  },
  {
    value: "london",
    label: "London",
  },
  {
    value: "venice",
    label: "Venice",
  },
  {
    value: "miami",
    label: "Miami",
  },
  {
    value: "rome",
    label: "Rome",
  },
  {
    value: "prague",
    label: "Prague",
  },
  {
    value: "california",
    label: "California",
  },
  {
    value: "kyoto",
    label: "Kyoto",
  },
  {
    value: "hong_kong",
    label: "Hong Kong",
  },
  {
    value: "santorini",
    label: "Santorini",
  },
];

export const SOCIALMOBILEITEMS = [
  {
    href: "/",
    icon: FacebookIcon,
  },
  {
    href: "/",
    icon: TwitterIcon,
  },
  {
    href: "/",
    icon: PinterestIcon,
  },
  {
    href: "/",
    icon: InstagramIcon,
  },
  {
    href: "",
    icon: YoutubeIcon,
  },
];
