import express from 'express'
import * as fs from 'fs'
let router = express.Router();

let obj = null;

fs.readFile('./data-location.txt', (err, buffer) => {
    if(err) throw err;
    console.log(buffer.toString());
    fs.readFile(buffer.toString(), (err, buffer) => {
        if(err) throw err;
        obj = JSON.parse(buffer);

        /* GET home page. */
        router.get('/', (req, res, next) => {
            res.render('data', { 
                title: 'Callback',
                json: obj
             });
     });
  
    })

}
)

export default router;
