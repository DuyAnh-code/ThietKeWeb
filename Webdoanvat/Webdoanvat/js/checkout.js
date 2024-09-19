document.addEventListener('DOMContentLoaded', () => {
    // Hiển thị thông tin đơn hàng trong phần order-summary
    const orderSummary = document.querySelector('.order-summary');
    const cartItems = [
        { name: 'Bánh tráng trộn', price: '30,000 VNĐ', quantity: 1 },
        { name: 'Lạp xưởng nướng đá', price: '30,000 VNĐ', quantity: 2 }
    ];

    let total = 0;
    cartItems.forEach(item => {
        const itemTotal = parseInt(item.price.replace(/[^0-9]/g, '')) * item.quantity;
        total += itemTotal;
        orderSummary.innerHTML += `
            <div class="order-item">
                <h4>${item.name}</h4>
                <p>${item.price} x ${item.quantity}</p>
                <p>${itemTotal.toLocaleString('vi-VN')} VNĐ</p>
            </div>
        `;
    });

    // Hiển thị tổng tiền
    orderSummary.innerHTML += `<h3>Tổng cộng: ${total.toLocaleString('vi-VN')} VNĐ</h3>`;

    document.getElementById('place-order').addEventListener('click', () => {
        alert('Đơn hàng của bạn đã được đặt!');
        // Xử lý đơn hàng (gửi thông tin đến máy chủ, v.v.)
    });
});
