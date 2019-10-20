let initialValue = 0
const btnAddToCart = document.querySelector('.-second')

btnAddToCart.addEventListener('click', addToCart)

function addToCart() {
    const cart = document.querySelector('.-cart')
    cart.textContent = `Carrinho (${++initialValue})`
}