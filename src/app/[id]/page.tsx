'use client'
import { getPokemon } from "@/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import SideNav from "../ui/nav";

export default function Page({ params }: { params: { id: string } }) {
    const [pokemon,setPokemon] = useState(null)

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
     <main className="h-lvh py-8 bg-gray-900 font-mono">
      <div className="flex justify-center aling-items-center " > 
           {pokemon ? (
              <section className="rounded-3xl bg-gray-200 text-gray-900 px-4 py-8">
                <div className="flex justify-center">
                  <h1 className="text-2xl">{pokemon.name}</h1>
                </div>
                <div className="flex justify-center">
                <Image src={`${pokemon.image_url}`} alt={""} width={300} height={200}/> 

                </div>
                
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