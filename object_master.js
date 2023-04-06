const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
// const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
// const pkmnIds = pokémon.map(p => p.id);
// console.log( bListPkmn );
// console.log( pkmnIds );

//************************* */
// 1) an array of pokémon objects where the id is evenly divisible by 3 (DONE)
// const threes = pokémon.filter( x => x.id % 3 === 0 );
// console.log( threes );

//************************* */

//2) an array of pokémon objects that are "fire" type (DONE)
// const fire = pokémon.filter( x => x.types.includes("fire" ) );
// console.log( fire );

//************************* */
//3) an array of pokémon objects that have more than one type (DONE)
// const twoTypesPokemons = pokémon.filter(x => x.types.length === 2);
// console.log(twoTypesPokemons);

//************************* */
//4) an array with just the names of the pokémon (DONE)
// const names = pokémon.map( pokemon => pokemon.name );
// // console.log(names);

// //To get the code on single lines instead of 2 on each line
// names.forEach(x => console.log(x))


//************************* */
//5) an array with just the names of pokémon with an id greater than 99 (DONE)
// const over99 = pokémon.filter( x => x.id > 99 ).map(pokemon => pokemon.name);
// console.log( over99 );

//************************* */
// 6) an array with just the names of the pokémon whose only type is poison (DONE)
// const poison = pokémon.filter( x => x.types.includes("poison")).filter(x => x.types.length === 1).map(pokemon => pokemon.name);
// console.log( poison );



//************************* */
//7) an array containing just the first type of all the pokémon whose second type is "flying" (DONE) MULTIPLE WAYS TO DO IT
// const flying = pokémon.filter(x => x.types.length === 2).filter( x => x.types[1].includes("flying")).map(pokemon => pokemon.types[0]);
// console.log( flying );

// //Can also use
// const flying = pokémon.filter(x => x.types.length >1 && x.types[1].includes("flying")).map(pokemon => pokemon.types[0]);
// console.log( flying );

// //Can also use
// const flying = pokémon.filter(x => x.types.length === 2 && x.types[1].includes("flying")).map(pokemon => pokemon.types[0]);
// console.log( flying );

// Can also use (CGPT)
// const flying = pokémon
//   .filter(pokemon => pokemon.types.length === 2 && pokemon.types[1] === "flying")
//   .map(pokemon => pokemon.types[0]);
// console.log(flying);


//************************* */
//8) a count of the number of pokémon that are "normal" type
// const PokemonCount = pokémon.filter(x => x.types.includes("normal")).length;
// console.log(PokemonCount);

//Can also solve using code below
// const countNorm = pokémon.reduce((count,p) =>{
//     if (p.types.includes('normal')){
//         count++;
//     }
//     return count;
// }, 0);
// console.log(countNorm)


//************************* */

