import axios from 'axios'

const API_KEY='78cdf6eef0917c6bd4cf7c7565066d54'

export const getMovies = async(sort) => {
    const url = `https://api.themoviedb.org/3/movie/${sort}?api_key=78cdf6eef0917c6bd4cf7c7565066d54`

    try{
        const res = await axios.get(url)
        console.log(res)
        return res.data.results
    } catch(error){
        throw error
    }
}



export const getTvs = async(sort) => {
    const url = `https://api.themoviedb.org/3/tv/${sort}?api_key=${API_KEY}`

    try{
        const res = await axios.get(url)
        console.log(res)
        return res.data.results
    }catch(error){
        throw error
    }
}

export const getSearchesMovies = async(keyword, filter) => {
    const url = `https://api.themoviedb.org/3/search/${filter}?api_key=${API_KEY}&query=${keyword}`

    try{
        const res = await axios.get(url)
        console.log(res)
        return res.data.results
    }catch(error){
        throw error
    }
}