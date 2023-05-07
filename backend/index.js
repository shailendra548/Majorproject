const express = require('express');
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter');

const cors = require('cors');

app.use(cors({
    origin : ['http://localhost:3000'],
}));


app.use(express.json());

//middleware
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('working perfectly')
});

app.get('/add', (req, res) => {
    res.send('Response from add')
});

//getall
app.get('/getall', (req, res) => {
    res.send('this is me')

});


//update
app.get('/update',(req, res) => {
    res.send('now your browser is update')
});

app.listen( port, () => {console.log('server started');} );