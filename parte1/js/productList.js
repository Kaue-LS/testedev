const apiUrl = '../api/api.json';
const cart = []

async function getLista() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Erro ao obter a lista:', error);
        return [];
    }
}

getLista().then(data => {

    if (!data.length) return
    const listaElemento = document.querySelector('.productList-container');

    const html = data.map((item, index) => {
        const formattedPrice = (item.price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        const formattedOldPrice = (item.oldPrice).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });

        return `
        <div onclick="addToCart(${index})" class="product swiper-slide ${item.available ? "" : "not-available"}">
        <div class="imageContainer ${item.available ? "" : "not-available"}">
            <img src=${item.imageUrl} alt=""/>
        </div>
        <div class="info">
        <h3>${item.name}</h3>
        <span>${formattedOldPrice}</span>
        <p>${formattedPrice}</p>
        </div>
        <div class="buy-button">
        <button>Comprar</button>
        </div>
    </div>
        `;
    }).join('');
    if (!listaElemento) return
    listaElemento.innerHTML = html;
});
getLista().then(data => {

    if (!data.length) return
    const listaElemento = document.querySelector('.productList-container-2');
    const html = data.map((item, index) => {
        const formattedPrice = (item.price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        const formattedOldPrice = (item.oldPrice).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        return `
        <div onclick="addToCart(${index})" class="product swiper-slide ${item.available ? "" : "not-available"}">
                <div class="imageContainer ${item.available ? "" : "not-available"}">
                    <img src=${item.imageUrl} alt=""/>
                </div>
                <div class="info">
                <h3>${item.name}</h3>
                <span>${formattedOldPrice}</span>
                <p>${formattedPrice}</p>
                </div>
                <div class="buy-button">
                <button>Comprar</button>
                </div>
            </div>
        `;
    }).join('');
    if (!listaElemento) return
    listaElemento.innerHTML = html;
});


async function addToCart(itemData) {
    const item = await getLista().then(data => data[itemData])
    if (!item) return
    cart.push(item)
    listCart()
}

// function listCart() {
//     if (!cart.length) return

//     const cartList = document.querySelector(".cartList")
//     const html = cart.map((item, index) => {
//         const formattedPrice = (item.price).toLocaleString('pt-BR', {
//             style: 'currency',
//             currency: 'BRL',
//         });
//         const formattedOldPrice = (item.oldPrice).toLocaleString('pt-BR', {
//             style: 'currency',
//             currency: 'BRL',
//         });
//         return `
//         <div class="cart-product" >
//                 <div class="imageContainer ${item.available ? "" : "not-available"}">
//                     <img src=${item.imageUrl} alt=""/>
//                 </div>
//                 <div class="info">
//                 <h3>${item.name}</h3>
//                 <span>${formattedOldPrice}</span>
//                 <p>${formattedPrice}</p>
//                 </div>
//             </div>
//         `;
//     }).join('');
//     if (!cartList) return
//     cartList.innerHTML = html;
// }