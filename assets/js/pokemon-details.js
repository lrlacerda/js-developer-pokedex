// pokemon-details.js

const pokemonDetailsDiv = document.getElementById("pokemonDetails");

// Função para carregar e exibir os detalhes do Pokémon
function loadPokemonDetails(pokemonId) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((pokemonData) => {
            const pokemonName = pokemonData.name;
            const pokemonNumber = pokemonData.id;
            const pokemonTypes = pokemonData.types.map(
                (typeSlot) => typeSlot.type.name
            );
            const pokemonImage = pokemonData.sprites.front_default;
            const pokemonAbilities = pokemonData.abilities.map(
                (abilitySlot) => abilitySlot.ability.name
            );
            const pokemonHeight = pokemonData.height / 10; // Convertendo de decímetros para metros
            const pokemonWeight = pokemonData.weight / 10; // Convertendo de hectogramas para quilogramas
            const pokemonStats = pokemonData.stats.map(
                (statSlot) => `${statSlot.stat.name}: ${statSlot.base_stat}`
            );

            // Exibir os detalhes na página
            pokemonDetailsDiv.innerHTML = `
                <h2>${pokemonName}</h2>
                <p>Número: #${pokemonNumber}</p>
                <p>Tipo(s): ${pokemonTypes.join(", ")}</p>
                <p>Habilidades: ${pokemonAbilities.join(", ")}</p>
                <p>Altura: ${pokemonHeight} m</p>
                <p>Peso: ${pokemonWeight} kg</p>
                <p>Estatísticas:</p>
                <ul>
                    ${pokemonStats.map((stat) => `<li>${stat}</li>`).join("")}
                </ul>
                <img src="${pokemonImage}" alt="${pokemonName}">
            `;
        })
        .catch((error) => {
            console.error(error);
            pokemonDetailsDiv.innerHTML = "Detalhes não encontrados.";
        });
}

// Obtenha o ID do Pokémon da URL
const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get("id");

// Carregue os detalhes do Pokémon
if (pokemonId) {
    loadPokemonDetails(pokemonId);
}
