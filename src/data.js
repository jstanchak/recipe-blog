import chickenImg from './assets/recipes/mauichicken.png';
import salmonImg from './assets/recipes/salmon.jpeg';
import orangeImg from './assets/recipes/orangechicken.jpeg';
import beefImg from './assets/recipes/beef.jpg';
import halibutImg from "./assets/recipes/halibut.webp";
import hominyImg from "./assets/recipes/hominy2.jpeg";
import porkImg from "./assets/recipes/porkchops.webp";
import shrimpImg from "./assets/recipes/buttershrimp.jpg";
import porkBellyImg from "./assets/recipes/porkbelly.jpg";
import triImg from "./assets/recipes/triptip.webp";
import ribsImg from "./assets/recipes/ribs.jpeg";
import rootImg from "./assets/recipes/root_veggies.jpeg";

export const LINKS = [
  {
    link: "#",
    title: 'Home',
  },
  {
    link: "#",
    title: '✨ AI Recipe',
  },
  {
    link: "#",
    title: 'Surprise Me',
  },
  {
    link: "#",
    title: 'Recipes by Ingredient',
  },
  {
    link: "#",
    title: 'About',
  },
]
export const RECIPES = [
  {
    image: salmonImg,
    title: 'Panko Crusted Salmon',
    id: 'panko-crusted-salmon',
    description:
      'Quick and easy weeknight favorite with a lemon-y crunch.',
    ingredients: [
      '2/3 cup panko (Japanese dried bread flakes)',
      '2 tablespoons minced fresh parsley',
      '1 teaspoon grated lemon zest',
      'Kosher salt and freshly ground black pepper',
      '2 tablespoons good olive oil',
      '4 (6- to 8-ounce) salmon fillets, skin on',
      '2 tablespoons Dijon mustard',
      '2 tablespoons vegetable oil',
      'Lemon wedges, for serving',
    ],
    steps: [
      'Preheat the oven to 425 degrees.',
      'In a small bowl, mix together the panko, parsley, lemon zest, 1/2 teaspoon salt, and 1/2 teaspoon pepper. Drizzle with the olive oil and stir until the crumbs are evenly coated. Set aside.',
      'Place the salmon fillets, skin side down, on a board. Generously brush the top of the fillets with mustard and then sprinkle generously with salt and pepper. Press the panko mixture thickly on top of the mustard on each salmon fillet. The mustard will help the panko adhere.',
      'Heat the vegetable oil over medium-high heat in a 12-inch cast-iron skillet or large heavy, ovenproof pan. When the oil is very hot, add the salmon fillets, skin side down, and sear for 3 to 4 minutes, without turning, to brown the skin.',
      'Transfer the pan to the hot oven for 5 to 7 minutes until the salmon is almost cooked and the panko is browned. Remove from the oven, cover with aluminum foil, and allow to rest for 5 to 10 minutes. Serve the salmon hot or at room temperature with lemon wedges.',
    ],
  },
  {
    image: orangeImg,
    title: 'Ginger, Coriander & Orange Chicken Thighs',
    id: 'ginger-coriander-orange-chicken-thighs',
    description: 'Braised chicken thighs with a citrusy asian twist.',
    ingredients: [
      '6 chicken thighs, skin-on',
      '1 oranges, cut into 8 wedges',
      '2 tbsp minced garlic',
      '1 tsp ground ginger',
      '1 tsp ground coriander',
      '2 tsp kosher salt',
      'fresh ground pepper',
      '1/2 cup white wine',
      '2 1/2 tsp soy sauce',
      'cilantro to garnish',
    ],
    steps: [
      'In a small bowl, combine the ginger, coriander, salt and pepper. Season chicken on both sides with the spice mixture. Let sit at room temperature for 30 minutes or overnight in the refrigerator.',
      'In large dutch oven or deep skillet, heat 1 tbl olive oil on high heat. When hot, place the chicken, skin side down to brown for 1-2 minutes.',
      'Turn skin side up. Turn heat to low, throw in garlic and 4 orange sections (give a nice squeeze as you throw them in to get the juice in the pan). Add wine. Cover and simmer on gentle, low heat for 25 minutes or until chicken is cooked through.',
      'Remove chicken to plate, leaving the sauce in the pan. Remove and discard oranges, and add the remaining fresh orange wedges. Turn heat to medium-high and add soy sauce. Cook for 3 minutes until thickened. Pour on top of chicken, garnish with fresh cilantro.',
    ],
  },
  {
    image: porkImg,
    title: 'Pork Chops w/ Apples & Onions',
    id: 'pork-chops-apples-onions',
    description:
      'A hearty, savory dish with a hint of sweetness.  Always a hit.',
    ingredients: [
      '4 bone-in thick-cut pork chops',
      'Salt and pepper',
      '1 tablespoon olive oil',
      '2 tablespoons butter',
      '1 large white onion, sliced',
      '2 to 3 apples, cored and sliced, about 3 cups',
      '1 cup beer, white wine, cider, or chicken broth',
    ],
    steps: [
      'Trim any excess fat from the chops and season liberally with salt and pepper. In a very large, heavy skillet (large enough to hold the chops with room to spare, preferably cast iron), heat the oil over high heat. Once it is shimmering and very hot, add the chops carefully and cook undisturbed for a few minutes for a good sear, about 5 minutes. Turn and sear the other side, then remove the chops to a plate.',
      'Turn the heat to medium-low and swirl in the butter, then add the apple and onions. Cook until the onion is golden and the apple is softened, 8-10 minutes, then deglaze the pan with the beer or other liquid. Return the chops to the pan and cook, turning occasionally and covering with the sauce, for an additional 5-10 minutes, until the chops are done.',
      'If desired, remove the chops and turn the heat to high to thicken the sauce. Serve the chops with the sauce draped over them.',
    ],
  },
  {
    image: triImg,
    title: 'Oven-Roasted Tri Tip',
    id: 'oven-roasted-tri-tip',
    description:
      'Super simple way to cook a tri tip, with a delicious crust.',
    ingredients: [
      '1 tri tip',
      'salt',
      'pepper',
      'garlic powder',
    ],
    steps: [
      'Preheat oven to 375 degrees.',
      'Season tri tip with salt, pepper, and garlic powder.',
      'Place tri tip on a baking sheet, and cook for 45 minutes.',
      'If desired, broil for 5 minutes to get a nice crust.',
    ],
  },
  {
    image: ribsImg,
    title: 'Slow Roasted Pork Ribs',
    id: 'slow-roasted-pork-ribs',
    description:
      'Fall off the bone pork ribs - barbequeue sauce optional.',
    ingredients: [
      'pork ribs - you probably want 2 racks',
      'salt',
      'pepper',
      'garlic powder',
      'brown sugar (optional)',
      'barbequeue sauce (optional - I love Sweet Baby Rays)',
    ],
    steps: [
      'Preheat oven to 325.',
      'Season ribs with salt, pepper, and garlic powder. If you want a little sweetness, add some brown sugar.',
      'Place on a baking sheet covered in foil, and then cover it in foil.',
      'Cook for at least 3 hours.',
      'If desired, uncover and baste with barbequeue sauce, and broil for 5 minutes.',
    ],
  },
  {
    image: rootImg,
    title: 'Roasted Chicken & Root Vegetables',
    id: 'roasted-chicken-root-vegetables',
    description:
      'Mouth-watering chicken, with a side of delicious juice-soaked veggies.',
    ingredients: [
      'Bone-in, skin-on chicken pieces (I prefer thighs)',
      'Carrots',
      'Parsnips',
      'Celery',
      'Onions',
      'Potatoes',
      'Fresh Rosemary',
      'Fresh Thyme',
    ],
    steps: [],
  },
  {
    image: shrimpImg,
    title: 'Shrimp w/ Garlic Butter',
    id: 'shrimp-garlic-butter',
    description:
      'Melt-in-your-mouth shrimp, with a buttery garlic sauce.',
    ingredients: [
      'shrimp',
      'kerrygold butter (A LOT)',
      'garlic powder',
    ],
    steps: [
      'Melt butter in a pan - the heat should be very LOW.',
      'Add more butter - I bet you need more.',
      'Add garlic powder.',
      'Add shrimp, and flip over after about 2 minutes.',
      'Cook for another 2 minutes, and you are done.'
    ],
  },
  {
    image: beefImg,
    title: 'Beef Bourguignon',
    id: 'beef-bourguignon',
    description:
      'Infamous Julia Child recipe.  Takes a while to make, but well worth it.',
    source: 'https://cafedelites.com/beef-bourguignon/',
    ingredients: [
      '1 tablespoons extra-virgin olive oil',
      '6 ounces (170g) bacon, roughly chopped',
      '3 pounds (1 1/2 kg) beef brisket, trimmed of fat (chuck steak or stewing beef) cut into 2-inch chunks',
      '1 large carrot sliced 1/2-inch thick',
      '1 large white onion, diced',
      '6 cloves garlic, minced (divided)',
      '1 pinch coarse salt and freshly ground pepper',
      '2 tablespoons flour',
      '12 small pearl onions (optional)',
      '3 cups red wine like Merlot, Pinot Noir, or a Chianti',
      '2-3 cups beef stock (if using 2 cups of wine, use 3 cups beef stock)',
      '2 tablespoons tomato paste',
      '1 beef bullion cube, crushed',
      '1 teaspoon fresh thyme, finely chopped',
      '2 tablespoons fresh parsley, finely chopped (divided)',
      '2 bay leaves',
      '1 pound fresh small white or brown mushrooms, quartered',
      '2 tablespoons butter',
    ],
    steps: [
      'Preheat oven to 350°F (175°C).',
      'Heat the oil in a large dutch oven or heavy based pot. Sauté the bacon over medium heat for about 3 minutes, until crisp and browned. Transfer with a slotted spoon to a large dish and set aside.',
      'Pat dry beef with paper towel; sear in batches in the hot oil/bacon fat until browned on all sides. Remove to the dish with the bacon.',
      'In the remaining oil/bacon fat, sauté the carrots and diced onions until softened, (about 3 minutes), then add 4 cloves minced garlic and cook for 1 minute. Drain excess fat (leave about 1 tablespoon in the pan) and return the bacon and beef back into the pot; season with 1/2 teaspoon coarse salt and 1/4 teaspoon ground pepper. Sprinkle with flour, toss well and cook for 4-5 minutes to brown.',
      'Add the pearl onions, wine and enough stock so that the meat is barely covered. Then add the tomato paste, bullion and herbs. Bring to a simmer on the stove.',
      'Cover, transfer to lower part of the oven and simmer for 2 to 3 hours, or until the meat is fall apart tender (adjust the heat so that the liquid simmers very slowly).',
      'In the last 5 minutes of cooking time, prepare your mushrooms:',
      'Heat the butter in a medium-sized skillet/pan over heat. When the foam subsides, add the remaining 2 cloves garlic and cook until fragrant (about 30 seconds), then add in the mushrooms. Cook for about 5 minutes, while shaking the pan occasionally to coat with the butter. Season with salt and pepper, if desired. Once they are browned, set aside.',
      'Place a colander over a large pot (I do this in my clean kitchen sink). Remove the casserole from the oven and carefully empty its contents into the colander (you want to collect the sauce only). Discard the herbs',
      'Return the beef mixture back into the dutch oven or pot. Add the mushrooms over the meat.',
      'Remove any fat off the sauce( if any) and simmer for a minute or two, skimming off any additional fat which rises to the surface.',
      'You should be left with about 2 1/2 cups of sauce thick enough to coat the back of a spoon lightly.',
      'If the sauce is too thick, add a few tablespoons of stock. If the sauce is too thin, boil it over medium heat for about 10 minutes, or until reduced to the right consistency.',
      'Taste for seasoning and adjust salt and pepper, if desired. Pour the sauce over the meat and vegetables.',
      'If you are serving immediately, simmer the beef bourguignon for 2 to 3 minutes to heat through.',
      'Garnish with parsley and serve with mashed potatoes, rice or noodles.',
      'To serve the following day, allow the casserole to cool completely, cover and refrigerate.',
      'The day of serving, remove from refrigerator for at least an hour before reheating. Place over medium-low heat and let simmer gently for about 10 minutes, basting the meat and vegetables with the sauce.',
    ],
  },
  {
    image: chickenImg,
    title: 'Maui Chicken',
    id: 'maui-chicken',
    description:
      'Super easy, savory and slightly sweet chicken dish.  Great for a weeknights.',
    ingredients: [
      'Chicken thighs- 1 package',
      'Dijon mustard- 1/2 cup',
      'Maple syrup- 1/4 cup',
      'Rice wine vinegar- 1 tablespoon',
      'Fresh rosemary or thyme',
      'Salt, pepper, garlic powder',
    ],
    steps: [
      'Preheat your oven to 400ºF. Then, mix together 1/2 cup of dijon mustard, 1/4 cup of maple syrup, and 1 tablespoon of rice/rice wine vinegar.',
      'Put a 1.5 pound package of chicken thighs into a foil-lined, oven-proof baking dish.',
      'Then, salt and pepper the thighs. Pour your maple mustard mixture over them, turning the thighs in the mixture so they are fully coated.',
      'Put the chicken thighs into the oven, and let them bake for 40 minutes or until a meat thermometer reads 165ºF. Baste the tops of the chicken with more sauce half way through.  Turn on the broiler for 5 minutes to get great color!',
      'Let the chicken rest for 5 minutes before serving. Plate the chicken, making sure to spoon some extra sauce over the top. Sprinkle over some fresh rosemary.',
    ],
  },
  {
    image: porkBellyImg,
    title: 'Air Fryer Pork Belly',
    id: 'air-fryer-pork-belly',
    description:
      'Incredibly delicious hunks of pork belly, crisped to perfection.',
    ingredients: ['pork belly', 'salt', 'pepper', 'garlic powder'],
    steps: [
      'Cut pork belly into 1" cubes.',
      'Season pork belly with salt, pepper, and garlic powder.',
      'Place pork belly in air fryer basket, and cook at 400 degrees for 20 minutes. Put in longer if you want the skin to be crispier.',
    ],
  },
  {
    image: hominyImg,
    title: 'Spicy Chicken w/ Hominy ("Hominers")',
    id: 'spicy-chicken-hominy',
    description:
      'Spicy and hearty chicken dish with hominy and sweet potatoes.',
    source: 'https://www.epicurious.com/recipes/food/views/sante-fe-chicken-40',
    ingredients: [
      '2 tablespoons olive oil',
      '6 chicken thighs',
      '6 garlic cloves, chopped',
      '1 14 1/2-ounce can Mexican-style stewed tomatoes',
      '1 large 8- to 10-ounce) yam, peeled, cut into 1/2- to 3/4-inch dice',
      '1 4-ounce can diced green chilies (skip for a less spicy dish)',
      '1/2 cup low-salt chicken broth',
      '1/2 cup packed chopped fresh cilantro',
      '1/4 cup bottled mild green salsa',
      '1 15-ounce can golden hominy, drained',
    ],
    steps: [
      'Heat olive oil in heavy large skillet over medium-high heat.',
      'Season chicken with salt and pepper.',
      'Sauté chicken until golden brown, about 4 minutes per side.',
      'Pour off all but 1 tablespoon drippings from skillet.',
      'Add garlic and cook until just fragrant, about 30 seconds.',
      'Add stewed tomatoes, yam, chilis, broth, 6 tablespoons cilantro and taco sauce.',
      'Cover skillet, reduce heat to medium-low and simmer until chicken is just tender, about 20 minutes.',
      'Transfer chicken to plate.',
      'Add hominy to skillet and boil until yam is tender and juices are reduced to sauce consistency, about 10 minutes.',
      'Season with salt and pepper to taste.',
      'Return chicken and any collected juices to skillet. Cook until heated through, about 5 minutes.',
      '(Can be prepared 1 day ahead. Cover and refrigerate. Reheat gently before continuing.)',
      'Transfer to large deep serving platter. Garnish with remaining cilantro.'
    ],
  },
  {
    image: halibutImg,
    title: 'Halibut w/ Oranges & Olives',
    id: 'halibut-oranges-olives',
    description:
      'Moist, flaky halibut (or any white fish), swimming in a tangy sauce.',
    source:"https://www.realsimple.com/food-recipes/recipe-collections-favorites/quick-easy/one-pot-meals",
    ingredients: [
      '1 tablespoon olive oil',
      '1 medium yellow onion, thinly sliced',
      '1 cup green olives, pitted and halved',
      '2 medium navel oranges, peeled, separated into segments, and membranes removed',
      '1 28-ounce can diced tomatoes, undrained',
      '1 teaspoon kosher salt',
      '1/4 teaspoon black pepper',
      '1 1/2 pounds halibut, skin removed, cut into 2-inch pieces',
      '1/4 cup fresh dill or parsley, chopped',
    ],
    steps: [
      'Heat the oil in a large saucepan over medium heat. Add the onion and cook until softened, about 5 minutes.',
      'Add the olives, orange segments, and tomatoes. Cover and simmer for 10 minutes.',
      'Add the salt, pepper, and halibut to the pan. Spoon the sauce over the halibut. Cover and simmer until cooked through, about 7 minutes.',
      'Divide the halibut and sauce among individual plates and sprinkle with the dill.',
    ],
  },
];
