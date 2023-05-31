const mousePointer = document.querySelector(".mouse-pointer");
const buttons = document.querySelectorAll("button");
const links = document.querySelectorAll("a");
const body = document.querySelector("body");
const header = document.querySelector("header");
const dropDown = document.querySelectorAll(".fix_wrapper .has_drop_down");
const subMenuDropDown = document.querySelectorAll(".submenu_dropdown");
const btnToggleMenu = document.querySelector(".btn_toggle_menu_bar");
const overlay = document.querySelector(".overlay");
const menuBar = document.querySelector(".fix_wrapper");
const btnCloseMenu = document.querySelector(".btn_close_menu");
const aboutImageSection = document.querySelector(".about_img img");
const blogImages = document.querySelectorAll(".blog_item .item_img");

let heightAdd = 0;
const headerHeight = 96;

// cursor
body.addEventListener("mouseout", function () {
  mousePointer.style.width = "0";
  mousePointer.style.height = "0";
});

body.addEventListener("mouseover", function () {
  mousePointer.style.width = "10px";
  mousePointer.style.height = "10px";
});

// update position of cursor
document.addEventListener("mousemove", function (e) {
  updateMousePointerPosition(e.clientX, e.clientY);
});

function updateMousePointerPosition(x, y) {
  mousePointer.style.top = y + "px";
  mousePointer.style.left = x + "px";
  mousePointer.dataset.clientX = x;
  mousePointer.dataset.clientY = y;
}

// cursor style when hover button , link tag
buttons.forEach(function (button) {
  button.addEventListener("mouseover", function () {
    mousePointer.classList.add("smaller");
  });
  button.addEventListener("mouseout", function () {
    mousePointer.classList.remove("smaller");
  });
});

links.forEach(function (link) {
  link.addEventListener("mouseover", function () {
    mousePointer.classList.add("smaller");
  });
  link.addEventListener("mouseout", function () {
    mousePointer.classList.remove("smaller");
  });
});

blogImages.forEach(function (link) {
  link.addEventListener("mouseover", function () {
    mousePointer.classList.add("view");
  });
  link.addEventListener("mouseout", function () {
    mousePointer.classList.remove("view");
  });
});

// change position header when scroll
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= headerHeight) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
  const elementPosition = aboutImageSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  if (elementPosition < screenHeight) {
    aboutImageSection.classList.add("active");
  }
});

// menu drop down action
dropDown.forEach((e) => {
  const dropDownExpand = e.querySelectorAll("a.expand");
  const subMenu = e.querySelectorAll(".submenu");
  dropDownExpand.forEach((dropDownExpandItem, i) => {
    dropDownExpandItem.addEventListener("click", (event) => {
      event.preventDefault();
      dropDownExpandItem.classList.toggle("active");
      subMenu.forEach((subMenuItem, index) => {
        if (i === index) {
          subMenuItem.classList.toggle("active");
          if (subMenuItem.classList.contains("active")) {
            subMenuItem.style.maxHeight = subMenuItem.scrollHeight + "px";
          } else {
            subMenuItem.style.maxHeight = 0;
          }
        }
      });
    });
  });
});

subMenuDropDown.forEach((e) => {
  const dropDownExpand = e.querySelectorAll("a.expand");
  const subMenu = e.querySelectorAll(".submenu_child");
  dropDownExpand.forEach((dropDownExpandItem, i) => {
    dropDownExpandItem.addEventListener("click", (event) => {
      event.preventDefault();
      subMenu.forEach((subMenuItem, index) => {
        if (i === index) {
          dropDownExpandItem.classList.add("active");
          subMenuItem.classList.toggle("active");
          if (subMenuItem.classList.contains("active")) {
            subMenuItem.style.maxHeight = subMenuItem.scrollHeight + "px";
            const currentMenuItem = document
              .querySelectorAll(".fix_wrapper .has_drop_down")
              .item(2).childNodes[3];
            currentMenuItem.style.maxHeight =
              currentMenuItem.scrollHeight + subMenuItem.scrollHeight + "px";
          } else {
            dropDownExpandItem.classList.remove("active");
            subMenuItem.style.maxHeight = 0;
          }
        }
      });
    });
  });
});

// open, close menu in mobile
btnToggleMenu.addEventListener("click", () => {
  overlay.classList.toggle("active");
  menuBar.classList.toggle("active");
});
btnCloseMenu.addEventListener("click", () => {
  overlay.classList.remove("active");
  menuBar.classList.remove("active");
});
