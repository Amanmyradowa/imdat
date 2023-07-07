let headerCon = document.querySelector(".header_con");

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled >= 200) {
    headerCon.classList.add('blur');
  } else {
    headerCon.classList.remove('blur')
  }
})

let carts = document.querySelector(".carts");
dataFeatures.map((cart, i) => {
  carts.innerHTML +=
    `
    <div class="cart">
      <span>
        ${cart.svg}
      </span>
      <h3 class="cart_title">${cart.cartTitle}</h3>
      <p class="cart_text">${cart.cartText}</p>
      <a class="more_info" href="#">more info</a>
    </div>
  `
})

let productCarts = document.querySelector(".product_carts");
dataProducts.map((productCart, i) => {
  productCarts.innerHTML +=
    `
      <a href="#" class="product_cart">
        ${productCart.productImg}
        <p class="product_name">${productCart.productName}</p>
        <p class="product_category">${productCart.category}</p>
        <div class="stars">
          <span>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 0L10.7193 4.60228L16 5.72949L12.4 9.70106L12.9443 15L8 12.8523L3.05573 15L3.6 9.70106L0 5.72949L5.28065 4.60228L8 0Z"
                fill="#FFCB45" />
            </svg>
          </span>
          <span>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 0L10.7193 4.60228L16 5.72949L12.4 9.70106L12.9443 15L8 12.8523L3.05573 15L3.6 9.70106L0 5.72949L5.28065 4.60228L8 0Z"
                fill="#FFCB45" />
            </svg>
          </span>
          <span>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 0L10.7193 4.60228L16 5.72949L12.4 9.70106L12.9443 15L8 12.8523L3.05573 15L3.6 9.70106L0 5.72949L5.28065 4.60228L8 0Z"
                fill="#FFCB45" />
            </svg>
          </span>
          <span>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 0L10.7193 4.60228L16 5.72949L12.4 9.70106L12.9443 15L8 12.8523L3.05573 15L3.6 9.70106L0 5.72949L5.28065 4.60228L8 0Z"
                fill="#FFCB45" />
            </svg>
          </span>
          <span>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 0L10.7193 4.60228L16 5.72949L12.4 9.70106L12.9443 15L8 12.8523L3.05573 15L3.6 9.70106L0 5.72949L5.28065 4.60228L8 0Z"
                fill="#FFCB45" />
            </svg>
          </span>
        </div>
        <div class="product_id">${productCart.id}</div>
      </a>
    `
})

let comments = document.querySelector(".comments");
dataAbout.map((cartAbout, i) => {
  comments.innerHTML +=
  `
    <div class="comment">
      <div class="comment_title">${cartAbout.commentTitle}</div>
      <p class="comment_text">${cartAbout.commentText}</p>
      <div class="comment_profile">
        ${cartAbout.commentImg}
        <div class="comment_profile_right">
          <p class="comment_author">${cartAbout.commentAuthor}</p>
          <div class="author_job">${cartAbout.authorJob}</div>
        </div>
      </div>
    </div>
  `
});

let plus = document.querySelectorAll("span");