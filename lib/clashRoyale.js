const BASE_URL= 'https://api.clashroyale.com/v1';
const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImZjNWFhN2UwLTBlZDAtNGViYS1iZjM2LWY5NWI5OWFkNDdmYiIsImlhdCI6MTc2NzAxNzUzNiwic3ViIjoiZGV2ZWxvcGVyLzg1YTBlY2UwLTJiYzItNWQyMC05YmUzLTQ4ODBhNTJlMjViNSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTAuMTQ5LjY2LjI1MCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.vTUej4aOZ5Am3IbvA-KilIKXJmNdnLTQ9zYVFWv0EyAzckrtEKJC4jWlzsIgFvdE9oiAel6HfTFL0A9WIBPFiA"

export async function getClashRoyaleCards() {
    const url = `${BASE_URL}/cards`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        });
        const json = await response.json();

        return json.items
        .filter((card) => card.displayIcon !== null)
        .map((card) => ({
            id : card.id,
            name: card.name,
            maxLevel: card.maxLevel,
            maxEvolutionLevel: card.maxEvolutionLevel,
            elixirCost: card.elixirCost,
            iconUrls: card.iconUrls?.medium,
            iconUrls2x: card.iconUrls?.heroMedium,
            iconUrls3x: card.iconUrls?.evolutionMedium,
        }))
    } catch (error) {
        console.log(error);
    }
}

