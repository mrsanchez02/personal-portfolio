import barcodegenerator from '../assets/barcodegenerator.jpg'
import portfolio from '../assets/portfolio.jpg'
import pokedeskvanilla from '../assets/pokedeskvanilla.jpg'
import projectManager from '../assets/projectManager.jpg'
import cryptomarketinfo from '../assets/cryptomarketinfo.jpg'
import quotegenerator from '../assets/quotegenerator.jpg'
import cryptocurrencyexchangerate from '../assets/cryptocurrencyexchangerate.jpg'
import imagesearchreactapp from '../assets/imagesearchreactapp.jpg'
import MarkdownEditorApp from '../assets/MarkdownEditorApp.png'

export const ProjectList = [
  {
    name: 'Markdown Editor',
    image: MarkdownEditorApp,
    description: 'A markdown editor in realtime.',
    skills: ['Javascript', 'React', 'Styled components'],
    githubLink: ['https://github.com/mrsanchez02/markdown-live-editor-app'],
    deploymentLink: 'https://markdown-live-editor-app.vercel.app/'
  },
  {
    name: 'BarCode Generator',
    image: barcodegenerator,
    description: 'A simple barcode generator',
    skills: ['Javascript', 'React', 'TailwindCSS'],
    githubLink: ['https://github.com/mrsanchez02/barcode-generator-app'],
    deploymentLink: 'https://barcode-generator-app.vercel.app/'
  },
  {
    name: 'Image Search App',
    image: imagesearchreactapp,
    description: 'A copyright free image Search Application consuming the Pixabay API.',
    skills: ['React', 'React Hooks', 'Bootstrap'],
    githubLink: ['https://github.com/mrsanchez02/react-buscador-imagenes'],
    deploymentLink: 'https://image-search-react-app.vercel.app/'
  },
  {
    name: 'Crypto Market Info',
    image: cryptomarketinfo,
    description: 'This app shows updated cryptocurrency exchange rates, developed on Vue and powered by coingecko API.',
    skills: ['Javascritp', 'VUEjs', 'Bootstrap'],
    githubLink: ['https://github.com/mrsanchez02/crypto-market-info'],
    deploymentLink: 'http://crypto-market-info.vercel.app/'
  },
  {
    name: 'MERN Project Manager',
    image: projectManager,
    description:
      'A project/work management software used to help individuals to track project, tasks, etc. Is a good way to stay organized and ensure that you are taking care of your pending tasks for each project.',
    skills: ['MongoDB', 'Expressjs', 'React', 'NodeJs', 'Styled Component', 'React Router Dom', 'REST API', 'Axios', 'Fullstack'],
    githubLink: ['https://github.com/mrsanchez02/project-manager-client', 'https://github.com/mrsanchez02/project-manager-server'],
    deploymentLink: 'https://project-manager-client-alpha.vercel.app/'
  },
  {
    name: 'My Personal Portfolio',
    image: portfolio,
    description: 'My personal portfolio with some of my projects',
    skills: ['Javascript', 'React', 'React Router Dom'],
    githubLink: ['https://github.com/mrsanchez02/personal-portfolio'],
    deploymentLink: 'https://leandrosanchez-portfolio.vercel.app/'
  },
  {
    name: 'My PokeDesk App',
    image: pokedeskvanilla,
    description: 'This app shows updated info about Pokémon (abilities and movements) consuming the pokeapi.co REST API.',
    skills: ['HTML, CSS, Javascript, TailwindCSS'],
    githubLink: ['https://github.com/mrsanchez02/pokedesk-vanilla-app'],
    deploymentLink: 'http://pokedesk-bootcamp-w.vercel.app/'
  },
  {
    name: 'Quote Generator',
    image: quotegenerator,
    description: 'A React App used to consume an API and get quotes from quotable API. useEffect and useState hooks has been used.',
    skills: ['React', 'Axios', 'Bootstrap', 'Styled Components'],
    githubLink: ['https://github.com/mrsanchez02/quote-generator-app'],
    deploymentLink: 'http://quote-generator-app-beta.vercel.app/'
  },
  {
    name: 'Cryptocurrency Exchange Rates',
    image: cryptocurrencyexchangerate,
    description: 'This app shows updated cryptocurrency exchange rates, the highest rates and the lowest rates on the day. Custom hooks and Styled components have been used.',
    skills: ['React', 'Hooks', 'Axios', 'Styled-components', 'emotion-styled'],
    githubLink: ['https://github.com/mrsanchez02/cotizador-criptomonedas'],
    deploymentLink: 'https://cryptocurrency-exchange-rates-react-alpha.vercel.app/'
  }
]
