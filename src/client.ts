import axios from 'axios'

const url = 'http://localhost:8080'



export async function getPokemon (pokemon:String) {
  return axios.get(`${url}/${pokemon}`)}

export async function getAllPokemon() {
  return axios.get(url)
  
}