import axios from 'axios'

const publicAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

const usePublicAxios = () => {
  return publicAxios
}

export default usePublicAxios
