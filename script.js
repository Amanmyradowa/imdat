// When scroll header style change
let headerCon = document.querySelector(".header_con");

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled >= 200) {
    headerCon.classList.add('blur');
  } else {
    headerCon.classList.remove('blur')
  }
})

// Put data with map
let carts = document.querySelector(".carts");
dataFeatures.map((cart) => {
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
dataProducts.map((productCart) => {
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


// For splide js
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: "loop",
    perPage: 1,
    autoplay: true,
    cover: true,
    arrows: false,
  }).mount();
});

//for Open and Close navbar dropdown
function dropdown() {
  const drop = document.querySelector('.dropdown_content');
  console.log(drop.style.height)
  if (drop.style.height === '125px') {
    drop.style.height = '0';
  } else {
    drop.style.height = '125px';
  }
}
// for Close navbar dropdown and mobile menu button and contact input unfocus when click anywhere
document.addEventListener('click', function (e) {
  const drop = document.querySelector('.dropdown_content');
  const dropButton = document.querySelector('.dropdown button');
  const menu = document.querySelector('.mobile_menu')
  const menuUl = document.querySelector('.mobile_menu ul')
  const hamburger = document.querySelector('#hamburger')
  const input = document.querySelector('.input');

  if (!drop.contains(e.target) && !dropButton.contains(e.target)) {
    drop.style.height = 0;
  }
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menuUl.style.scale = '0'
  }
  if (!input.contains(e.target)) {
    if (window.innerWidth < 640) {
      input.style.width = '75%'
    } else {
      input.style.width = '60%'
    }
  }

})

//for menu
function menu() {
  const menu = document.querySelector('.mobile_menu ul');
  if (menu.style.scale === '1') {
    menu.style.scale = '0'
  } else {
    menu.style.scale = '1'
  }
}

//for mobile dropdown
function dropdownMobile() {
  const drop = document.querySelector('.dropdown_content_menu')
  if (drop.style.height === '70px') {
    drop.style.height = '0'
  } else {
    drop.style.height = '70px'
  }
}

//for contact input focus
function contactInput() {
  if (window.innerWidth < 640) {
    document.querySelector('.input').style.width = '100%'
  } else {
    document.querySelector('.input').style.width = '70%'
  }
}

//for Ideas sections li open and close
function openIdea(index) {
  const ideas = document.querySelectorAll('.ideas_text');
  const ideasIcon = document.querySelectorAll('.ideas_name_icon span');

  for (let i = 0; i < ideas.length; i++) {
    ideas[i].classList.remove('show');
    ideasIcon[i].querySelectorAll('svg')[0].style.display = 'block';
    ideasIcon[i].querySelectorAll('svg')[1].style.display = 'none';
  }
  ideas[index].classList.add('show');
  ideasIcon[index].querySelectorAll('svg')[1].style.display = 'block'
  ideasIcon[index].querySelectorAll('svg')[0].style.display = 'none'
  console.log(index);
}