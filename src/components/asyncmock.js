

const products = [
    {id: 1, name: 'iphone 12', price: 'USD 1000', category: 'celular', img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-green-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000', stock: 25, description: 'Desc Iphone 12'},
    {id: 2, name: 'samsung s21', price: 'USD 800', category: 'celular', img:'https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803', stock: 16, description: 'Desc Samsung'},
    {id: 3, name: 'ipad 8th gen', price: 'USD 1200', category: 'tablet', img:'https://store.storeimages.cdn-http://d2r9epyceweg5n.cloudfront.net/stores/179/824/products/ipad-10-2-8-gen-gen-32gb1-051643daa1035c8b8a16105429247775-640-0.png.com/4668/as-images.apple.com/is/iphone-12-green-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000', stock: 20, description: 'Desc Ipad'}
]

export const getProducts = () => {
    return new Promise ((resolve, rej) => {
        setTimeout(() => {
            resolve(products)

        }, 2000)
    })
}

