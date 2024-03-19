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

    <ul> 
           {pokemon.name ? (
              <li >
                <Image src={`${pokemon.image_url}`} alt={""} width={300} height={200}/> 
                <p>Nome: {pokemon.name}</p>
                <p>Tipo: {pokemon.types.map((tipo:string)=> `${tipo} `)}</p> 
                <p>Fraquezas: {pokemon.weaknesses.map((weakness:string)=> `${weakness} `)}</p>
             </li>
            ):
            <p>Digite Pokemon válido</p>
           } 
   </ul>
    </>
    
    ) 
  }