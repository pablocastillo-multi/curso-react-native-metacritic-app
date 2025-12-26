const BASE_URL= 'https://valorant-api.com/v1';

export async function getValorantAgents() {
    const url = `${BASE_URL}/agents`;

    const response = await fetch(url);
    const json = await response.json();

    return json.data
    .map((agent) => ({
        uuid : agent.uuid,
        displayName: agent.displayName,
        description: agent.description,
        fullPortrait: agent.fullPortrait,
    }))

}

export async function  getValorantAgentsDetails(uuid) {
    const url = `${BASE_URL}/agents/${uuid}`;

    const response = await fetch(url);
    const json = await response.json();

    const agent = json.data;

    console.log(agent);
    return {
        uuid : agent.uuid,
        displayName: agent.displayName,
        displayIcon: agent.displayIcon,
        role: agent.role?.displayName,
        roleDescription: agent.role?.description,
        abilities: agent.abilities

    }
    
}

export async function getValorantBundles() {
    const url = `${BASE_URL}/bundles`;

    const response = await fetch(url);
    const bundles = await response.json();

    return bundles.data.map((bundle) => ({
        uuid : bundle.uuid,
        display: bundle.displayName,
        description: bundle.description,
        displayIcon: bundle.displayIcon,
        assetPath: bundle.assetPath,
    }))

};

export async function getValorantMaps() {
    const url = `${BASE_URL}/maps`;

    const response = await fetch(url);
    const maps = await response.json();

    return maps.results.map((map) => ({
        uuid : map.uuid,
        display: map.displayName,
        coordinates: map.coordinates,
        displayIcon: map.displayIcon,
        splash: map.splash,
        assetPath: map.assetPath,
    }))
}

export async function getValorantPlayerCards() {
    const url = `${BASE_URL}/playercards`;

    const response = await fetch(url);
    const playerCards = await response.json();

    return playerCards.results.map((playerCard) => ({
        uuid : playerCard.uuid,
        display: playerCard.displayName,
        wideArt: playerCard.wideArt,
        assetPath: playerCard.assetPath,
    }))
}

export async function getValorantWeapons() {
    const url = `${BASE_URL}/weapons`;

    const response = await fetch(url);
    const weapons = await response.json();

    return weapons.data.map((weapon) => ({
        uuid : weapon.uuid,
        display: weapon.displayName,
        category: weapon.category,
        displayIcon: weapon.displayIcon,
        assetPath: weapon.assetPath,
    }))
}