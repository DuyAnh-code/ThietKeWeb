let cartCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    console.log('Trang web đã sẵn sàng!');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            document.getElementById('cart-count').textContent = cartCount;
            alert('Sản phẩm đã được thêm vào giỏ hàng!');
        });
    });
});