import express from 'express'
import movies from '/movies.js'

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))


app.get('/movies',(req,res)=> {
    res.json(movies)
})

app.get('/movies/:id',(req,res)=> {
    const id = req.params.id
    if (id > movies.length -1|| id<0){
        return res.json({messege:'Movie not found'})
    }
    res.json(movies[id])
})

app.post('/movies',(req,res)=> {
    const movie = req.body
    if (!movie.title || !movie.author || !movie.release || !movie.won_oscar){
        return res.status(400).json({messege:'Invalid data'})
    }
    movies.push(movie)
    res.status(200).json(movie)
})

app.put('/movies/:id',(req,res)=> {
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
})

app.delete('/movies/:id',(req,res) =>  {
    const id = req.params.id
    if (id > movies.length -1|| id<0){
        return res.json({messege:'Movie not found'})
    }
    else{
        movies.splice(id,1)
        res.status(200).json({messege:'Movie deleted'})
    }
})

app.listen(3000, ()=> {
    console.log('Server is running')
})