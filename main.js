const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/genres', (req, res) => {
    if (genres.min(3)) {
        const genre ={
            id: genres.length +1,
            name:req.body.name
        }
        genres.add(genre);
    }
})

app.get('/', (req, res) =>{
    res.world('Hello there');
});

const genres = [
    { id: 1, name:'Pop'},
    { id: 2, name: 'Hip-Hop'},
    { id: 3, name: 'Classical'},
    { id: 4, name: 'Rock'},
    { id: 5, name: 'Jazz'},
    { id: 6, name: 'Blues'},
    { id: 7, name: 'Electronic'},
]
app.get('/api/genres', (req, res) =>{
    res.send(genres);
});

app.put('/api/genres/:id',(req, res) =>{
    const genre = genres.find(c=> c.id === parseInt(req.params.id))
    if (!genre){
        res.status(404).send("The genre with the given ID was not found");
        return
    }
        res.send(genre);
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});

app.delete('api/genres/:id', (req, res) => {
    const genre = genres.find(c=> c.id === parseInt(req.params.id))
    if (!genre){
        res.status(404).send("The genre with the given ID was not found");
        return
    }
});