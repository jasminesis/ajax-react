console.log("about to require express");
const express = require('express');

const app = express();
console.log("done creating app");

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

app.use(express.static('public'))

const pg = require('pg');
const config = {
    user: 'jasminesis',
    host: '127.0.0.1',
    database: 'testdb',
    port: 5432,
};
const pool = new pg.Pool(config);

app.get('/hello', (request, response) => {
    console.log('this is waffles from app.get');
    // console.log("process~~~~", process)
    response.render('hello');
})

app.get('/mydata', (request, response) => {
    console.log("getting data from the pantry");

    const queryString = 'SELECT * FROM students';

    pool.query(queryString, (err, result) => {

        if (err) {
            console.error('query error:', err.stack);
            response.send('query error');
        } else {
            console.log('query result:', result);

            // redirect to home page
            response.send(result.rows);
        }
    });




    // const data = {
    //     rice: "sushi",
    //     noodles: "pasta"
    // };
    // response.send(data)
})

const port = 3000;
console.log("start listening");
app.listen(port)
console.log("done listening");