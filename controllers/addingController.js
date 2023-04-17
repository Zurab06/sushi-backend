const Product = require('../models/Adding.model')

module.exports.addingController = {

    async add(req, res) {
        const { id, name, weight, pieces, price, Image } = req.body
        try {
            if (req.file) {
                res.json(req.file)
            }
            const product = new Product({ id, name, weight, pieces, price, Image })
            await product.save()
            return res.json({ message: 'product added' })
        } catch (error) {
            console.log(error);
        }

    }
}