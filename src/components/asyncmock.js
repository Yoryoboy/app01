

const products = [
    {id: 1, 
    name: 'iphone 12', 
    price: 'USD 1000', 
    category: 'celular', 
    img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-green-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000', 
    stock: 25, 
    description: 'Desc Iphone 12'},

    {id: 2, 
    name: 'samsung s21', 
    price: 'USD 800', 
    category: 'celular', 
    img:'https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803', 
    stock: 16, 
    description: 'Desc Samsung'},

    {id: 3, 
    name: 'ipad 8th gen', 
    price: 'USD 1200', 
    category: 'tablet', 
    img:'https://asset.conrad.com/media10/isa/160267/c1/-/en/002302222PI00/image.jpg', 
    stock: 20, 
    description: 'Desc Ipad'},

    {id: 4, 
    name: 'Gaming Desktop', 
    price: 'USD 1200', 
    category: 'desktop', 
    img:'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07762843.png', 
    stock: 20, 
    description: 'Desc Desktop'},

    {id: 5, 
    name: 'Laptop', 
    price: 'USD 1200', 
    category: 'laptop', 
    img:'https://www.hp.com/us-en/shop/app/assets/images/product/2Y0V1AV_1/center_facing.png', 
    stock: 20, 
    description: 'Desc Laptop'}

]

const categories = [
    {id: 'celular', description: 'Celular'},
    {id: 'tablet', description: 'Tablet'},
    {id: 'desktop', description: 'Desktop'},
    {id: 'laptop', description: 'Laptop'}
]

export const getProducts = (idCategory) => {
    return new Promise ((resolve) => {
        const productsToResolve = idCategory ? products.filter(item => item.category === idCategory) : products
        setTimeout(() => {
            resolve(productsToResolve);
        },2000);
    });
}

export const getProduct = (id) => {
    return new Promise ((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)

        }, 1000)
    })
}

export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)
    })
}

