import * as dotenv from 'dotenv';
dotenv.config({path: './config.env'});
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'; 

const app = express();
import helmet from "helmet";
import cors from "cors";
import './utils/db.js';
import productRouter from './router/product.routes.js';
import bodyParser from 'body-parser';

app.use(cors());
app.use(helmet());
app.set('view engine', 'pug')

app.use(bodyParser.json());

app.use('/api/v1/product', productRouter);


//swagger
const swaggerSpec = {
    definition:{
        openapi: '3.0.3',
        info: {
            title: "test APLI",
            description: "This is a simple App  to add and return product list", 
            contact: {
                "name": "Rivers Emmanuel Morales Salazar",
                "url": "https://riversemmanuelmorales.netlify.app/",
                "email": "riversemmanuelmorales@gmail.com"
              },
            version: "1.0.0"
        },
        servers: [
            {
                "url":"http://localhost:4000",
                "description": "Development server"
            },
            {
                "url":"https://aplin-test.herokuapp.com/",
                "description": "Production server pruebas"
            }
        ]
    },

   apis: [`${path.join( path.dirname(fileURLToPath(import.meta.url)), './router/product.routes.js')}`]

}

app.use('/api/v1/doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
app.get('/home', (req, res) => {
    res.render('index', {  } )
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, (err) => {
    !err ? console.log("server on PORT", PORT) : console.log(err);
})
