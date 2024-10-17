export default function PokedexCard(
    { dex_id, name, type1, type2, spriteURL } : 
    { dex_id: number, name: string, type1: string, type2?: string, spriteURL: string }
) {
    return (
        <div className="w-1/6 p-3 flex flex-col items-center rounded-lg hover:shadow-[0_0_50px_10px_rgba(100,100,100,0.25)] hover:scale-110 transition-all duration-200 bg-primary">
            <img src={spriteURL} alt="" className="size-40" />
            <h1>{`${name}\t\t#${dex_id}`}</h1>
            <h1>{`${type1}${type2 != "null" ? ` / ${type2}` : "" }`}</h1>
        </div>
    );
}