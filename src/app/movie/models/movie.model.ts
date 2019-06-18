export interface Movie {
    id: number;
    name: string;
    genre: string;
    image: string;
    releaseYear: string;
}

export const movies: Movie [] = [
    {
        id: 1,
        name: 'The Terminator',
        genre: 'Sci-fi',
        image: 'https://cdn.shopify.com/s/files/1/1416/8662/products/terminator_1984_french_original_film_art_a_2000x.jpg?v=1551807845',
        releaseYear: '1984',
    },
    {
        id: 2,
        name: 'Alice in Wonderland',
        genre: 'Cartoon',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51dZ4cFt2PL.jpg',
        releaseYear: '1983'
    }
]