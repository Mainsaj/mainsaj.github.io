import * as fsp from 'fs/promises'
import express from 'express'
let router = express.Router();

let obj;
fsp.readFile('./data-location.txt')
    .then(buffer => {
        fsp.readFile(buffer.toString())
        .then(buffer => {
            obj = (JSON.parse(buffer));
            router.get('/', (req, resp, next) => {
                resp.render('data', {
                  title: 'Data',
                  json: obj
                });
              });
            

        }
    ,)});


export default router;