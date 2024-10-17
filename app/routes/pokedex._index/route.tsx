// Index Page file for the /pokedex route

import { getClient } from "../../../backend/database";
import { useLoaderData, Await, defer } from "@remix-run/react";

// Import components
import PokedexCard from "../../ui/pokedex/pokedexCard";

import { Suspense } from "react";

export const loader = async () => {
    // TODO: Add caching
    const client = await getClient();
    const pokedexList = client.query(
        `SELECT * FROM pokedex ORDER BY dex_id ASC;`
    )
    .then((res: any) => {
        client.release();
        return res.rows;
    });

    // console.log(pokedexList);

    return defer({
        pokedexList,
    });
}

export default function Page() {

    const { pokedexList } = useLoaderData<typeof loader>();

    return (
        <div className="w-full h-full">
            <h1 className="text-3xl text-center my-5">Pokedex</h1>
            {/* Pokedex List */}
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={pokedexList}>
                    {
                        (pokedexList) => 
                        <div className="flex flex-row flex-wrap gap-5 justify-center">
                            {pokedexList.map((pokemon: any, index: number) => {
                                return (
                                    // TODO: Add a loading spinner
                                    // TODO: Create pages for each pokemon, accessible by clicking their respective buttons
                                    <PokedexCard 
                                        key={index}
                                        dex_id={pokemon.dex_id} 
                                        name={pokemon.name} 
                                        type1={pokemon.type1} 
                                        type2={pokemon.type2} 
                                        spriteURL={pokemon.spriteurl}
                                    />
                                );
                            })}
                        </div>
                    }
                </Await>
            </Suspense>
        </div>
        
    );
}