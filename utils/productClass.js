import productSchema from "../models/productModel.js";
import GlobalClass from "./globalClass.js";

class Product extends GlobalClass {

    async createNewProduct({ id, sku, quantity }) {
        try {
            const productExists = await this.model.findOne({ id });

            // if (productExists) return false;

            const newProduct = new productSchema({
                id,
                sku,
                quantity,
            });

           
            const createdProduct = newProduct.save();

            return createdProduct;

        } catch (err) {
            console.log(err);
        }
    }

    async findById({ id }) {
        try {
            const product = await this.model.find({ id });

            return product ? product : false;
        } catch (error) {
            console.log(error);
        }
    }


  


}

export default new Product('products');
