'use client'
import { getPokemon } from "@/client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
    const [pokemon,setPokemon] = useState([])

  useEffect(() => {
    async function getRepository () {
      const resposta = await getPokemon(`${params.id}`)
      console.log(resposta.data)
      setPokemon(resposta.data)
    }
    getRepository();
  }, []);  


    return(
    <>
 

    <main className="h-lvh">
      <div className="flex justify-center aling-items-center bg-gray-200" > 
           {pokemon.name ? (
              <section className="rounded-3xl bg-gray-900 text-white px-4 py-8">
                <div className="flex justify-center">
                  <h1 className="">{pokemon.name}</h1>
                </div>
                
                <Image src={`${pokemon.image_url}`} alt={""} width={300} height={200}/> 
                
                <p>Tipo: {pokemon.types.map((tipo:string)=> `${tipo} `)}</p> 
                <p>Fraquezas: {pokemon.weaknesses.map((weakness:string)=> (
                  `${weakness} `))}</p>
                <p> </p>
             </section>
            ):
            <p className="rounded-md bg-gray-900 text-white">Digite Pokemon válido</p>
           } 
      </div>
    </main>

    
    </>
    
    ) 
  }