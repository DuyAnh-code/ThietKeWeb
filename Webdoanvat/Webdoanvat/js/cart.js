document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [
        { image: 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2023_10_16_638330842659029064_cach-lam-banh-trang-tron.jpg', name: 'Bánh tráng trộn', price: '30,000 VNĐ', quantity: 1 },
        { image: 'https://cdn.tuoitre.vn/471584752817336320/2024/1/13/img4596-17051615280791356891199.jpg', name: 'Lạp xưởng nướng đá', price: '30,000 VNĐ', quantity: 2 }
    ];

    const cartContainer = document.querySelector('.cart-container');

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p class="price">${item.price}</p>
                <div class="quantity">
                    <button class="decrease">-</button>
                    <input type="number" value="${item.quantity}" min="1">
                    <button class="increase">+</button>
                </div>
            </div>
            <button class="remove">Xóa</button>
        `;
        cartContainer.appendChild(cartItem);
    });
});
