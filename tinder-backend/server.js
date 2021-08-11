import express from 'express';
import mongoose from 'mongoose';
import cards from './dbCards.js';
import Cors from 'cors';

// App config
const app = express();
const port = process.env.PORT || 8001;
const conection_url = "mongodb+srv://admin:l35PukWYRLMhns0X@tinder-clone.qlgbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// Middleware
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(conection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
//l35PukWYRLMhns0X


// API endpoints
app.get('/', (request, response) => response.status(200).send("Hello World"));

app.post('/tinder/cards', (request, response) => {
    const dbCard = request.body;

    cards.create(dbCard, (err, data) => {
        if(err) {
            response.status(500).send(err);
        } else {
            response.status(201).send(data);
        }
    });
});

app.get('/tinder/cards', (request, response) => {
    cards.find((err, data) => {
        if(err) {
            response.status(500).send(err);
        } else {
            response.status(200).send(data);
        }
    });
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
