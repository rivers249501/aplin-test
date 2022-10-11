import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    
    id: {
        type: String,
        required: true,
        unique: false
    },
    sku: {
        type: String,
        required: true,
        unique: false

    },
    quantity: {
        type: String,
        unique: false,
        required: true
    },

});

export default new mongoose.model('products', productSchema);







 