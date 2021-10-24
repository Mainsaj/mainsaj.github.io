import * as fsp from 'fs/promises'
import express from 'express'
let router = express.Router();

let obj = null;

try {
    let buffer = await fsp.readFile('./data-location.txt');
    let file = buffer.toString();
    buffer = await fsp.readFile(file);
    obj = JSON.parse(buffer);
} catch (e) {
    console.error(e);
}

router.get('/', (req, resp, next) => {
    resp.render('data', {
      title: 'Data',
      json: obj
    });
  });

export default router;