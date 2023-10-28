import img from "./assets/images/hero-test.jpg";
import img1 from "./assets/images/test-food-1.jpg";
import img2 from "./assets/images/test-food-2.jpg";
import img3 from "./assets/images/test-food-3.jpg";
import img4 from "./assets/images/test-food-4.jpg";
import img5 from "./assets/images/test-food-5.jpg";
import employee1 from "./assets/images/employee1.jpg";
import employee2 from "./assets/images/employee2.jpg";
import employee3 from "./assets/images/employee3.jpg";
import employee4 from "./assets/images/employee4.jpg";
import story1 from "./assets/images/story1.jpg";
import story2 from "./assets/images/story2.jpg";
import story3 from "./assets/images/story3.jpg";
import story4 from "./assets/images/story4.jpg";
import story5 from "./assets/images/story5.jpg";

export const menuItemsFull = [
  {
    id: 0,
    imgs: [img1, img2, img3, img4, img5],
    name: "kimbap",
    price: "1,299.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
    options: [
      "tuna mayo",
      "veggie",
      "cheese",
      "chicken mayo",
      "donkatsu",
      "kimchi",
      "classic",
      "meat",
    ],
  },
  {
    id: 1,
    imgs: [img1, img2, img3, img4, img5],
    name: "Tteokbokki",
    price: "1,399.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
    options: ["classic", "chinese", "rabokki"],
  },
  {
    id: 2,
    imgs: [img1, img2, img3, img4, img5],
    name: "Bibimbap",
    price: "1,349.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
    options: ["classic", "meat", "tofu"],
  },
  {
    id: 3,
    imgs: [img1, img2, img3, img4, img5],
    name: "Fried Rice",
    price: "1,199.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
    options: ["veggie", "kimchi", "tuna", "tuna kimchi", "meat", "seafood"],
  },
  {
    id: 4,
    imgs: [img1, img2, img3, img4, img5],
    name: "Mandu (steamed)",
    price: "1,299.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
    options: ["kimchi", "pork", "chicken", "veggie"],
  },
  {
    id: 5,
    imgs: [img1, img2, img3, img4, img5],
    name: "Korean Fried Chicken",
    price: "1,299.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
    options: [
      "with bone",
      "boneless",
      "crispy",
      "yangmyeon",
      "soy sauce",
      "garlic",
      "*fries",
    ],
  },
  {
    id: 6,
    imgs: [img1, img2, img3, img4, img5],
    name: "Kimchi Stew",
    price: "1,299.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
    options: ["pork", "tuna", " no meat"],
  },
  {
    id: 7,
    imgs: [img1, img2, img3, img4, img5],
    name: "Korean Pancake",
    price: "1,299.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
    options: ["spring onion", "kimchi", "potato", "*kimchi cheese"],
  },
];

export const menuItemsShort = [
  {
    id: 0,
    img: img,
    name: "kimbap",
    price: "1,299.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
  },
  {
    id: 1,
    img: img1,
    name: "Tteokboki",
    price: "1,399.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
  },
  {
    id: 2,
    img: img2,
    name: "Bibimbap",
    price: "1,349.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
  },
  {
    id: 3,
    img: img3,
    name: "Fried Rice",
    price: "1,199.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
  },
  {
    id: 4,
    img: img4,
    name: "Mandu (steamed)",
    price: "1,299.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
  },
  {
    id: 5,
    img: img5,
    name: "Korean Fried Chicken",
    price: "1,299.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
  },
  {
    id: 6,
    img: img1,
    name: "Kimchi Stew",
    price: "1,299.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
  },
  {
    id: 7,
    img: img2,
    name: "Korean Pancake",
    price: "1,299.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
  },
];

export const sideDishes = [
  {
    id: 0,
    img: img1,
    name: "Kimchi",
    price: 99.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe quidem eius perspiciatis pariatur cum alias tenetur excepturi itaque nisi dolor iste, quis fuga animi atque? Doloribus, qui? Alias, aliquam.",
  },
  {
    id: 1,
    img: img2,
    name: "Blanched Spinach",
    price: 99.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe quidem eius perspiciatis pariatur cum alias tenetur excepturi itaque nisi dolor iste, quis fuga animi atque? Doloribus, qui? Alias, aliquam.",
  },
  {
    id: 2,
    img: img3,
    name: "Soy Bean Sprouts",
    price: 99.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe quidem eius perspiciatis pariatur cum alias tenetur excepturi itaque nisi dolor iste, quis fuga animi atque? Doloribus, qui? Alias, aliquam.",
  },
  {
    id: 3,
    img: img4,
    name: "Kimchi Pancake",
    price: 99.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe quidem eius perspiciatis pariatur cum alias tenetur excepturi itaque nisi dolor iste, quis fuga animi atque? Doloribus, qui? Alias, aliquam.",
  },
  {
    id: 4,
    img: img5,
    name: "Zuchinni Pancake",
    price: 99.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe quidem eius perspiciatis pariatur cum alias tenetur excepturi itaque nisi dolor iste, quis fuga animi atque? Doloribus, qui? Alias, aliquam.",
  },
  {
    id: 5,
    img: img1,
    name: "Cucumber Kimchi",
    price: 99.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe quidem eius perspiciatis pariatur cum alias tenetur excepturi itaque nisi dolor iste, quis fuga animi atque? Doloribus, qui? Alias, aliquam.",
  },
  {
    id: 6,
    img: img2,
    name: "Pa Kimchi",
    price: 99.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe quidem eius perspiciatis pariatur cum alias tenetur excepturi itaque nisi dolor iste, quis fuga animi atque? Doloribus, qui? Alias, aliquam.",
  },
  {
    id: 7,
    img: img3,
    name: "Rolled Egg (kjeranmari)",
    price: 99.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe quidem eius perspiciatis pariatur cum alias tenetur excepturi itaque nisi dolor iste, quis fuga animi atque? Doloribus, qui? Alias, aliquam.",
  },
  {
    id: 8,
    img: img4,
    name: "Oyster Mushrooms",
    price: 99.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe quidem eius perspiciatis pariatur cum alias tenetur excepturi itaque nisi dolor iste, quis fuga animi atque? Doloribus, qui? Alias, aliquam.",
  },
  {
    id: 9,
    img: img5,
    name: "Quail Egg",
    price: 99.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe quidem eius perspiciatis pariatur cum alias tenetur excepturi itaque nisi dolor iste, quis fuga animi atque? Doloribus, qui? Alias, aliquam.",
  },
  {
    id: 10,
    img: img1,
    name: "Danmuji*",
    price: 99.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe quidem eius perspiciatis pariatur cum alias tenetur excepturi itaque nisi dolor iste, quis fuga animi atque? Doloribus, qui? Alias, aliquam.",
  },
];

export const introImages = [
  {
    id: 0,
    image: img1,
    name: "restaurant 1",
    title: "restaurant 1",
    quote:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },
  {
    id: 1,
    image: img2,
    name: "restaurant 1",
    title: "restaurant 1",
    quote:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },
  {
    id: 2,
    image: img3,
    name: "restaurant 1",
    title: "restaurant 1",
    quote:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },
];

export const menuPreview = [
  {
    id: 0,
    img: img1,
    name: "kimbap",
    price: "1,299.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
  },
  {
    id: 1,
    img: img3,
    name: "Tteokboki",
    price: "1,399.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
  },
  {
    id: 2,
    img: img5,
    name: "Bibimbap",
    price: "1,349.99",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit fuga architecto totam quae aut provident nobis praesentium sit! Consequuntur dolores quisquam recusandae molestiae. Rem, necessitatibus?",
  },
];

export const people = [
  {
    id: 1,
    name: "Nina Novkovic Kakani",
    job: "chief executive officer",
    image: employee1,
    text: `With cultural expertise,
    language skills, and
    enthusiasm for Korean food,
    Nina would be able to guide
    the restaurant's operations,
    develop an authentic menu,
    and provide excellent
    customer service to guests,
    ultimately contributing to the
    success of the business.`,
  },
  {
    id: 2,
    name: "Goran Novkovic",
    job: "chief financial officer",
    image: employee2,
    text: `With their experience as an
    effective project leader and
    their ability to promote best
    practices, they would be able to
    help the restaurant grow and
    succeed financially. Their
    passion for Korean food and
    enjoyment of it in different
    places would also give them a
    unique perspective on the
    restaurant industry, helping
    them make informed financial
    decisions that support the
    restaurant's mission and goals.`,
  },
  {
    id: 3,
    name: "Milica Trickovic",
    job: "chief marketing officer",
    image: employee3,
    text: `With their expertise in Korean
    culture and language, they
    would be able to develop
    effective marketing strategies
    that resonate with the target
    audience, communicate the
    restaurant's mission and
    vision, and create brand
    awareness. Their passion for
    promoting the Korean
    experience would also be
    invaluable in driving customer
    engagement and building a
    loyal customer base.`,
  },
  {
    id: 4,
    name: "Vladimir Trickovic",
    job: "chef",
    image: employee4,
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

export const story = [
  {
    id: 1,
    name: "story picture 1",
    image: story1,
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "story picture 2",
    image: story2,
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: "story picture 3",
    image: story3,
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 4,
    name: "story picture 4",
    image: story4,
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 5,
    name: "story picture 5",
    image: story5,
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
];
