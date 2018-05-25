

// module.exports = {
//     create: (req, res, next) => {
//         const database = req.app.get('db');
//         const {name, price, imageUrl} = req.body;

//         database.create_product([name, price, imageUrl]).then(() => res.status(200).send()).catch(() => res.status(500).send());
    
//     },

//     getAll: (req, res, next) => { 
//         const database = req.app.get('db');

//         database.read_products().then(products => res.status(200).send(products)).catch(() => res.status(500).send());
        
//     }
// }