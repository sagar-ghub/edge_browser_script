
import open from 'open';
import { exec } from 'child_process';	

const searchTerms = ["Aster", "Begonia", "Carnation", "Daisy", "Echinacea", "Freesia", "Gardenia", "Hibiscus", "Iris", "Jasmine", "Kangaroo Paw", "Lavender", "Marigold", "Narcissus", "Orchid", "Petunia", "Queen Anne's Lace", "Rose", "Sunflower", "Tulip", "Umbrella Pine", "Violet", "Waxflower", "Xeranthemum annuum", "Yellow Archangel", "Zinnia","Bird of Paradise","Cockscomb","Daffodil","Easter Lily","Fuchsia","Gerbera Daisy","Hollyhock","Impatiens","Jade Vine"];

let i = 0;

setInterval(() => {
  if (i === searchTerms.length) {
    clearInterval();
    return;
  }

  const searchTerm = searchTerms[i];
  const url = `https://www.bing.com/search?q=${searchTerm}`;

  exec(`start microsoft-edge:${url}`);
console.log(url+"...loading");

  i++;
}, 5000);