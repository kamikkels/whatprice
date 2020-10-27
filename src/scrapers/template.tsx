import axios, {AxiosInstance, AxiosResponse} from 'axios';
import cheerio from 'cheerio';

const url: string = ''; // URL we're scraping

// This is the structure of the data we recieve
interface PriceDatum {
    id: number;
    label: string;
    price: number;
    thumbnail: string;
    key: any;
}

interface PriceData extends Array<PriceDatum>{}

class Scraper {
    ax: AxiosInstance;
    priceData: PriceData;

    constructor() {
        this.ax = axios.create(); // Create a new Axios Instance
        this.priceData = [];
    }

    async getPrices() {
        // Send an async HTTP Get request to the url
        this.ax.get(url).then( // Once we have data returned ...
            (response: AxiosResponse) => {
                const html = response.data; // Get the HTML from the HTTP request
                const $ = cheerio.load(html); // Load the HTML string into cheerio
                const pricesTable: cheerio.Cheerio = $('.priceClass > tr'); // Parse the HTML and extract just whatever code contains priceClass and has a tr inside
                

                pricesTable.each((i: number, elem) => {
                    // Add the prices into the array
                    this.priceData.push(
                        
                    )
                })

            }
        )
        .catch(console.error); // Error handling
    }
}

export default Scraper
