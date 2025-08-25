import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
// import tourImg08 from "../images/tour-img08.jpg";
// import tourImg09 from "../images/tour-img09.jpg";
// import tourImg10 from "../images/tour-img10.jpg";
// import tourImg11 from "../images/tour-img11.jpg";
// import tourImg12 from "../images/tour-img12.jpg";
// import tourImg13 from "../images/tour-img13.jpg";
import tourImg14 from "../images/tour-img14.jpg";
// import tourImg15 from "../images/tour-img15.jpg";
// import tourImg16 from "../images/tour-img16.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address: " Somewhere",
    price: 70000,
    maxGroupSize: 10,
    duration: "4N/5D",
    desc: "Step onto the historic Westminster Bridge, a stunning architectural landmark spanning the River Thames in the heart of London. With picturesque views of the Houses of Parliament and Big Ben, this iconic bridge is a favorite for sightseeing, photography, and romantic strolls. Whether you're catching a classic London sunset or enjoying the bustling atmosphere, Westminster Bridge offers an unforgettable experience blending history, beauty, and city life.",
    highlights: [
      "Iconic views of Big Ben & Houses of Parliament",
      "Perfect for photography & romantic strolls",
      "Close to top London attractions",
      "Beautiful at sunset & night",
    ],
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address: " Somewhere",
    price: 64220,
    maxGroupSize: 8,
    duration: "5N/6D",
    desc: "Bali, the Island of the Gods, is a tropical paradise in Indonesia known for its breathtaking beaches, lush rice terraces, vibrant culture, and spiritual charm. From the serene temples of Uluwatu to the energetic nightlife of Seminyak, Bali offers a perfect blend of relaxation and adventure. Whether you're exploring ancient Hindu temples, surfing world-class waves, or indulging in Balinese cuisine and spa retreats, Bali promises an unforgettable escape for every type of traveler.",
    highlights: [
      "Stunning beaches & crystal-clear waters",
      "Explore ancient Hindu temples",
      "Vibrant nightlife in Seminyak",
      "Lush rice terraces & cultural shows",
    ],
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: " Somewhere",
    price: 17301,
    maxGroupSize: 8,
    duration: "3N/4D",
    desc: "Escape to the serene Snowy Mountains of Thailand, a breathtaking highland retreat where cool mists drift over rolling hills and lush green valleys. Nestled in the northern region, this hidden gem offers panoramic mountain views, peaceful temples, and encounters with traditional hill tribe cultures. Perfect for nature lovers and photographers, the area is ideal for hiking, sunrise viewpoints, and sipping warm tea with the clouds at your feet — a side of Thailand most travelers never see.",
    highlights: [
      "Cool misty mornings & scenic views",
      "Peaceful mountain temples",
      "Meet traditional hill tribe communities",
      "Ideal for hiking & photography",
    ],
    reviews: [
      {
        name: "jhon doe",
        rating: 4.8,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address: " Somewhere",
    price: 14228,
    maxGroupSize: 8,
    duration: "2N/3D",
    desc: "Witness the magic of a Beautiful Sunrise in Thailand, where the first light of day paints the sky in shades of gold, pink, and orange. Whether you're standing on a tranquil beach, overlooking misty mountains, or floating in a long-tail boat on calm waters, Thailand's sunrise moments are pure serenity. This unforgettable experience blends nature’s beauty with peace and stillness — a perfect start to your day in paradise.",
    highlights: [
      "Golden & pink morning skies",
      "Perfect for peaceful meditation",
      "Best viewed from beaches & mountains",
      "Serene start to your day in paradise",
    ],
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address: " Somewhere",
    price: 43067,
    maxGroupSize: 8,
    duration: "4N/5D",
    desc: "Nusa Penida, a stunning island off the coast of Bali, is a hidden gem known for its dramatic cliffs, crystal-clear waters, and untouched natural beauty. Explore iconic spots like Kelingking Beach, with its T-Rex-shaped cliff, the breathtaking natural pool at Angel’s Billabong, and the turquoise waters of Broken Beach. Ideal for adventurers and nature lovers, Nusa Penida offers snorkeling with manta rays, scenic hikes, and postcard-perfect views — a must-visit for anyone seeking Bali's wilder, more rugged side.",
    highlights: [
      "T-Rex-shaped cliff at Kelingking Beach",
      "Swim in Angel’s Billabong",
      "Turquoise waters at Broken Beach",
      "Snorkeling with manta rays",
    ],
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    price: 324849,
    address: " Somewhere",
    maxGroupSize: 8,
    duration: "6N/7D",
    desc: "Experience the breathtaking beauty of Cherry Blossom Spring in Japan, a magical season when delicate sakura flowers blanket parks, temples, and city streets in soft shades of pink and white. From the vibrant festivals of Tokyo and Kyoto to serene strolls under blooming trees along rivers and castles, cherry blossom season is a cultural celebration of nature, renewal, and fleeting beauty. Don’t miss this iconic moment — a picture-perfect time to explore Japan at its most enchanting.",
    highlights: [
      "Stroll under blooming sakura trees",
      "Join vibrant cherry blossom festivals",
      "Perfect for photography & picnics",
      "Symbol of renewal & fleeting beauty",
    ],
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "Norway",
    distance: 500,
    price: 203456,
    address: " Somewhere",
    maxGroupSize: 8,
    duration: "5N/6D",
    desc: "Tucked away in the majestic Lofoten Islands of Norway, Holmen Lofoten offers a one-of-a-kind escape into Arctic beauty and serene luxury. Surrounded by rugged mountains, deep fjords, and the northern sea, this tranquil retreat is perfect for experiencing Norway's natural wonders — from the Midnight Sun to the Northern Lights. With a focus on sustainable living, local cuisine, and personal connection to the land and sea, Holmen Lofoten is where raw nature meets refined comfort.",
    highlights: [
      "Witness the Midnight Sun & Northern Lights",
      "Breathtaking fjords & mountain views",
      "Fresh local seafood & Arctic cuisine",
      "Perfect for kayaking & hiking",
    ],
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Manali",
    city: "Manali",
    distance: 500,
    price: 15000,
    address: "Himachal Pradesh, India",
    maxGroupSize: 8,
    duration: "3N/4D",
    desc: "Escape to the serene Himalayan mountains near Manali, a breathtaking highland retreat where cool mists drift over rolling hills and lush green valleys. Nestled in Himachal Pradesh, this hidden gem offers panoramic mountain views, peaceful monasteries, and encounters with traditional hill communities. Perfect for nature lovers and photographers, the area is ideal for hiking, sunrise viewpoints, and sipping warm tea with the clouds at your feet — a side of India most travelers never see.",
    highlights: [
      "Cool misty mornings & scenic Himalayan views",
      "Peaceful mountain monasteries",
      "Meet traditional hill communities",
      "Ideal for hiking & photography",
    ],
    reviews: [],
    avgRating: 4.5,
    photo: tourImg14,
    featured: false,
  },
];

export default tours;
