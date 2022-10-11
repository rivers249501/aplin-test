import express from 'express'
import { createProduct, findProductById } from '../controller/product.controller.js';
const productRouter = express.Router();

//products schema
/**
 * @swagger
 * components:
 *  schemas:
 *     products:
 *        type: object
 *        properties:
 *          id:
 *              type: string
 *              description: This field must be id.
 *          sku:
 *              type: string
 *              description: Fill with product sku.
 *          quantity:
 *              type: string
 *              description: According to quantity.
 *        required:
 *          - id
 *          - sku
 *          - quantity
 *        example:
 *          id: 1
 *          sku: product A
 *          quantity: 5
 */

//Post a new product
/**
 * @swagger
 * /api/v1/product:
 *  post:
 *    summary: create a new product
 *    tags: [products]
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/products'
 *    responses:
 *      200:
 *        description: producto creado!
 *      400:
 *        description: producto ya existente
 */



productRouter.post('/', createProduct);

//Get product By Id
/**
 * @swagger
 * /api/v1/product/{id}:
 *  get:
 *    summary: get a product
 *    tags: [products]
*    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the product id
 *    responses:
 *      200:
 *        description: product is delivered
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/products'
 *      400:
 *        description: producto no encontrado
 */
productRouter.get('/:id', findProductById);

export default productRouter
