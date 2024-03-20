'use client'
import { getAllPokemon, getPokemon } from "@/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

  const [pokemon, setPokemon] = useState([])
  const [pokemonSearched, setpokemonSearched] = useState('')
  const [pokemonList, setPokemonList] = useState([])
  const router = useRouter()

  const handleChange = (event: any) => { //nesse caso precisa de async ? sera q estou tentando rodar assincronamente ?
    setpokemonSearched(event.target.value)
  }
  // const handleClick = async () => { 
  //   try {
  //     // const pokemonName:String = pokemonSearched //preciso verificar como tornar dinamico
  //     // const pokemonData:any = await getPokemon(pokemonName) 
  //     // setPokemon(pokemonData.data)//trocar pela rota
  //     router.push(`/${pokemonSearched}`)

  //   } catch (err) {
  //     console.log(err)
  //   }
  // }


  useEffect(() => {
    async function getPokemons() {
      const resposta = await getAllPokemon()
      console.log(resposta.data)
      setPokemonList(resposta.data)
    }
    getPokemons();
  }, []);
  return (

    <>

      <main>
      <div className="w-full relative isolate overflow-hidden bg-gray-900 py-16 sm:py-2 lg:py-3 flex justify-center items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <div className="mt-6 flex max-w-md gap-x-4 ">
                  <input
                    type="text"
                    value={pokemonSearched}
                    onChange={handleChange}
                    placeholder="Digite nome do Pokemon" 
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"  />
                  <button 
                  type="submit" 
                  onClick={() => router.push(`/${pokemonSearched}`)}
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Pesquisar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="bg-gray-900">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">Products</h2>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {pokemonList.map((pokemon: any) => (
                  <> <div key={pokemon.id} >
                    <Link href={`/${pokemon.id}`} className="group">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <Image alt={`${pokemon.name}`} src={`${pokemon.image_url}`} className="h-full w-full object-cover object-center group-hover:opacity-50" width={200} height={200} />
                      </div>
                      <p className="mt-1 text-lg font-medium text-white">{pokemon.name}</p>
                      <div className="flex space-x-2"> 
                      {pokemon.types.map((tipo:any)=>(
                        <h3 className="rounded-md bg-white px-1 py-1 text-sm font-semibold text-gray-700 shadow-sm ">{tipo}</h3>
                      ))}
                      </div>
                    </Link>
                  </div></>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <footer></footer>
    </>
  )
}



// <><main className="flex min-h-screen flex-col items-center justify-between p-24">
//   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//       Get started by editing&nbsp;
//       <code className="font-mono font-bold">src/app/page.tsx</code>
//     </p>
//     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//       <a
//         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         By{" "}
//         <Image
//           src="/vercel.svg"
//           alt="Vercel Logo"
//           className="dark:invert"
//           width={100}
//           height={24}
//           priority />
//       </a>
//     </div>
//   </div>

//   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//     <Image
//       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//       src="/next.svg"
//       alt="Next.js Logo"
//       width={180}
//       height={37}
//       priority />
//   </div>

//   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//     <a
//       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Docs{" "}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Find in-depth information about Next.js features and API.
//       </p>
//     </a>

//     <a
//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Learn{" "}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Learn about Next.js in an interactive course with&nbsp;quizzes!
//       </p>
//     </a>

//     <a
//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Templates{" "}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Explore starter templates for Next.js.
//       </p>
//     </a>

//     <a
//       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Deploy{" "}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
//         Instantly deploy your Next.js site to a shareable URL with Vercel.
//       </p>
//     </a>
//   </div>
// </main><h1>teste</h1><a href="./rota.tsx">link to</a></>

//   );
// }
