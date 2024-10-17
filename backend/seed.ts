// This is a reusable script to seed the database with rows.
import { pool, getClient } from './database';

import { sentenceCase } from "sentence-case";

const registerPokemon = async (dex_id: number, name: string, types: Array<any>, spriteURL: string) => {
    // Get types first
    const type1 = types[0].type.name;
    let type2;
    if (types[1]) {
        type2 = types[1].type.name;
    }

    const client = await getClient();
    await client.query(
        `INSERT INTO pokedex (dex_id, name, type1, type2, spriteurl)
        VALUES (${dex_id}, '${sentenceCase(name)}', '${sentenceCase(type1)}', '${type2 ? sentenceCase(type2) : null}', '${spriteURL}')`
    );

    await client.release();
}

export const addPokemon = async (range: number) => {
    console.log('Fetching Pokemon...');
    const startFetchPokemon = Date.now();
    const pokemonList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${range}&offset=0`)
        .then(async (res) => await res.json())
        .catch((err) => {
            console.log(`Error fetching Pokemon:\n${err}`);
        });
    console.log(pokemonList);
    const fetchPokemonTime = Date.now() - startFetchPokemon;
    const startRegister = Date.now();
    for (const pokemon of pokemonList.results) {
        try {
            const pokemonData = await fetch(pokemon.url)
                .then((res) => res.json())
                // .then((pokemonData) => {
                //     registerPokemon(pokemonData.id, pokemon.name, pokemonData.types);
                // })
                .catch(() => {
                    console.log(`Error fetching Pokemon data: ${pokemon}`);
                    return null;
                });

            await registerPokemon(pokemonData.id, pokemon.name, pokemonData.types, pokemonData.sprites.other["official-artwork"].front_default);

        } catch (error) {
            console.log(`Error adding ${pokemon.name} to database:\n${error}`);
        }
    }
    const registerTime = Date.now() - startRegister;

    console.log(`Registered ${range} pokemon successfully!\nTime taken to fetch pokemon data: ${fetchPokemonTime}\nTime taken to insert pokemon data: ${registerTime}`);
};

addPokemon(151);