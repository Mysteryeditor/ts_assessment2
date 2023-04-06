interface product {
    id: number
    pname: string
    pdescription: string
    price: number
}

function productdetails(): Promise<product[]> {
    return fetch('/electronics.json')
        .then(res => res.json())
        .then(res => {
            return res as product[]
        })
}
productdetails()
    .then(pro => {
        console.log(pro.map(p => ( p.id + p.pname + p.pdescription + 'price:' + p.price ).toString()))
    })


//fake api
function getfakeapi() {
    return fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => console.log(json))
}
getfakeapi();