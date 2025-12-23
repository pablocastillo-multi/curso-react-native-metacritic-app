const API_KEY = '5209bb608f8441748e19c7e5a719ca82';
const BASE_URL = 'https://api.rawg.io/api';

export async function getLatestGames() {
    const url = `${BASE_URL}/games?key=${API_KEY}&ordering=-metacritic&page_size=20`;

    const response = await fetch(url);
    const json = await response.json();

    return json.results.map((game) => ({
        id: game.id,
        slug: game.slug,
        name: game.name,
        releaseDate: game.released,
        score: game.metacritic,
        image: game.background_image,
        rating: game.rating,
        platforms: game.platforms.map(p => p.platform.name).slice(0, 2).join(". "),
        genres: game.genres.map(g => g.name).slice(0, 2).join(". "),
    }))
}

export async function getGamesDetails(id) {
    const url = `${BASE_URL}/games/${id}?key=${API_KEY}`;

    const response = await fetch(url);
    const game = await response.json();

    return {
        id: game.id,
        name: game.name,
        slug: game.slug,
        releaseDate: game.released,
        rating: game.rating,
        image: game.background_image,
        rating_top: game.rating_top,
        platforms: game.platforms.map(p => p.platform.name).slice(0, 2).join(". "),
    }
}