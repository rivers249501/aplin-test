import productClass from "../utils/productClass.js"

export const createProduct = async (req, res) => {
    try {
        const product = await productClass.createNewProduct(req.body);
        if (!product) return res.status(400).send('producto ya existente');
        return res.status(200).send("el producto ha sido creado");
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export const findProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const foundProduct = await productClass.findById(req.params);
        return foundProduct ? res.status(200).send(foundProduct) : res.status(400).send("producto no encontrado");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

