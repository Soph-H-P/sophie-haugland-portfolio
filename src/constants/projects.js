import bugBlog from '../assets/images/bug-blog.png';
import arcticMuseum from '../assets/images/arctic-museum.png';
import rainyDays from '../assets/images/rainy-days.png';
import tracks from '../assets/images/tracks.png';
import paws from '../assets/images/paws.png';
import birds from '../assets/images/birds.png';
import happyPlace from '../assets/images/happy-place.png';
import osloBikes from '../assets/images/oslo-bikes.png';
import comfyHome from '../assets/images/comfy-home.png';
import progress from '../assets/images/progress.png';

const projects = [
  {
    name: 'Tracks',
    description: 'E-commerce site displaying and selling shoes',
    imageSrc: tracks,
    type: 'Web development and design',
    externalLink: 'https://dapper-shoes.netlify.app',
    gitHub: 'https://github.com/Soph-H-P/app',
    longDescription:
      'Using a Strapi backend and React on the front end this was an e-commerce site for shoes. Through a series of user tests this site was checked for usability and accessibility. React gives quick loading times. Using styled components this website is fully responsive on all devices.',
  },
  {
    name: 'Paws Rescue',
    description: 'Rehoming homeless dogs',
    imageSrc: paws,
    type: 'Web development and design',
    externalLink: 'https://paws-animal-rescue.netlify.app/',
    gitHub: 'https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Soph-H-P',
    longDescription:
      'This project React project, fetching data from an API. I chose to use the PetFinder API which allowed me to access data from dog rescue centers in America. I spent time designing an appealing website creating the graphics and choosing the colour palette carefully. This site has easy navigation, an intuitive design and fully responsive across all screen sizes. ',
  },
  {
    name: 'Birds of Østfold',
    description: 'Discover the birds around you.',
    imageSrc: birds,
    type: 'Web development and design',
    externalLink: 'https://birds-of-ostfold.netlify.app/',
    gitHub: 'https://github.com/Noroff-FEU-Assignments/project-exam-2-Soph-H-P',
    longDescription:
      'This is a simple app built using React with Typescript and Styled-Components. The Birds of Østfold site allows users to log bird sightings in their area as well as viewing other peoples sightings. A user can login which will give special access to "members only" bird sightings and to keep a log of their own sightings. They will also gain rank the more sightings they log. The hightest being a gold ranking birder. Admins for the site have the ability to add sightings themself, they can also moderate other peoples sightings. Before a sighting is available to the public it must be varified by an admin. An admin can also choose to delete a sighting if they deem it necessary. Admins can also add, edit and delete events that are happening in the area.',
  },
  {
    name: 'Bug Blog',
    description: 'A simple blog about coding bugs',
    imageSrc: bugBlog,
    type: 'Web development and design',
    externalLink: 'https://portfolio-updates--where-bugs-unite.netlify.app/',
    gitHub:
      'https://github.com/Noroff-FEU-Assignments/project-exam-1-Soph-H-P/tree/portfolio-updates',
    longDescription:
      'A simple blog site about coding bugs. Our task was to use WordPress to create a headless CMS. The aim was to create a site that was appealing to the target audience and easy to use. We had to include a carrousel to display posts on the home page so users could scroll through. It was a fully responsive design that looks good on all device sizes.',
  },
  {
    name: 'Rainy Days',
    description: 'E-commerce site displaying and selling rainwear',
    imageSrc: rainyDays,
    type: 'Web development and design',
    externalLink: 'https://sophie-haugland-rainy-days.netlify.app/',
    gitHub: 'https://github.com/Soph-H-P/rainy-days',
    longDescription:
      'An e-commerce site for a rainwear shop. Designed with target audience in mind, this site is fully WCAG compliant. It is also fully responsive across all screen sizes. Originally coded using only HTML and CSS this site has since been updated to use JS to add some extra functionality. The products are stored in a headless WordPress installation using WooCommerce.',
  },
  {
    name: 'Arctic Museum',
    description: 'A site to showcase a science museum.',
    imageSrc: arcticMuseum,
    type: 'Web development and design',
    externalLink: 'https://semester-project-1-arctic-museum.netlify.app/',
    gitHub: 'https://github.com/Soph-H-P/arctic-museum',
    longDescription:
      'Here I was required to create an interactive science museum website. The target audience was primary and middle school children and young families. The website needed to be both informative and appealing. It is a responsive site can be used on devices of all sizes. Fully WCAG compliant.',
  },
  {
    name: 'Happy Place',
    description: 'Fetching life quality information.',
    imageSrc: happyPlace,
    type: 'Web development and design',
    externalLink: 'https://tender-archimedes-3517f3.netlify.app/',
    gitHub: 'https://github.com/Soph-H-P/happy-place',
    longDescription:
      'This project focussed on fetching data from an API. I chose to use the Teleport API which allowed me to access life quality data from cities around the world. I spent time designing an appealing website creating the graphics and choosing the colour palette carefully. This site has easy navigation, an intuitive design and fully responsive across all screen sizes. ',
  },
  {
    name: 'Oslo Bikes',
    description: 'Discover free bikes and parking spaces',
    imageSrc: osloBikes,
    type: 'Web development',
    externalLink: 'https://stoic-wozniak-4bc6d8.netlify.app/',
    gitHub: 'https://github.com/Soph-H-P/Oslo-city-bikes-API-code-challenge',
    longDescription:
      'Using the Oslo City bikes api, I created this simple application in order to view available parking spaces, and bikes around the Oslo area. It is a simple design that is responsive. Also includes a dark mode when finding a bike at night.',
  },
  {
    name: 'Comfy Home',
    description: 'Interior design store',
    imageSrc: comfyHome,
    type: 'Web design',
    externalLink: 'https://competent-wright-8e55a0.netlify.app/',
    gitHub: 'https://github.com/Soph-H-P/home-decor',
    longDescription:
      'As part of a design module in my studies it was necessary to create a page using a patterned background. This site was used to demonstrate photoshop skills, choose colour schemes and appropriate typography. As well as logo design and taking and editing photographs for the product page.',
  },
  {
    name: 'Study Progress',
    description: 'Site to display current progress through studies',
    imageSrc: progress,
    type: 'Web development and design',
    externalLink: 'https://soph-web-dev.eu/portfolio',
    gitHub: 'https://github.com/Soph-H-P/portfolio',
    longDescription:
      'A site to show the progress made on my course so far. How I have improved previous projects and can display them in an interesting way.',
  },
];

export default projects;
