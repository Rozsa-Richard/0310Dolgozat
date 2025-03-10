import movies from '..movies.js'

export const getAllMovies = (req, res) =>{
    res.status(200).json(movies)
}

export const getMovieById = (req, res) =>{
    const id = req.params.id
    if (id < 0 || id >= movies.length) {
        return res.status(404).json({message: 'Movie not found'})
    }
    res.status(200).json(movies[id])
}

export const createMovie = (req, res) => {
    const movie = req.body
    if (!movie.title || !movie.author || !movie.release || !movie.won_oscar){
        return res.status(400).json({messege:'Invalid data'})
    }
    movies.push(movie)
    res.status(200).json(movie)
}
    
export const updateMovie =(req, res) => {
    const id = req.params.id
    if (id > movies.length -1|| id<0){
        return res.json({messege:'Movie not found'})
    }
    else {
        const movie = req.body
        if (!movie.title || !movie.author || !movie.release || !movie.won_oscar){
            return res.status(400).json({messege:'Invalid data'})
        }
        movies[id] = movie
        res.status(200).json(movie)
    }
}

export const deleteMovies = (req, res) => {
    const id = req.params.id
    if (id > movies.length -1|| id<0){
        return res.json({messege:'Movie not found'})
    }
    else{
        movies.splice(id,1)
        res.status(200).json({messege:'Movie deleted'})
    }
}
