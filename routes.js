const express = require('express')    
const router  = express.Router()

    router.get('/', (req, res) => {
        /*MVC (Model–View–Controller)*/

        /*Controller*/
            const { id } = req.query; // destructuring -> id = "demo"

            if (id === 'demo') {
            console.log('1');
            } else {
            console.log('2');
            }

        /*Model*/
        const products = [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Mouse", price: 20 },
        { id: 3, name: "Teclado", price: 45 }
        ];

        const products2 = [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Mouse", price: 20 },
        { id: 3, name: "Teclado", price: 45 }
        ];

        /*View*/
        res.render('index.ejs',{products,products2})        
    })

    router.get('/products', (req, res) => {
        res.send('Producto: Lista')
    })
    router.post('/products', (req, res) => {
        res.send('Producto: Nuevo')
    })
    router.put('/products', (req, res) => {
        res.send('Producto: Actualizando')
    })
    router.delete('/products', (req, res) => {
        res.send('Producto: Borrando')
    })
    router.patch('/products', (req, res) => {
        res.send('Producto: Actualizando parcialmente')
    })

    router.post('/user', (req, res) => {
        console.log(req.body)
        res.send('usuario')
    })
    router.get("/isAlive", (req, res) => {
        res.status(204).end()
    })

    router.use((req, res) => {
        res.send('No se encontro la pagina')
    })

module.exports = router