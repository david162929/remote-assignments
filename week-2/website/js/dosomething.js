const banner = document.querySelector("div.banner");
const callToAction = document.querySelector(".call-to-action").querySelector("a");
const secondContent = document.querySelector(".second-content");
const menuIcon = document.querySelector(".menu-icon");
const mobileNavItem = document.querySelector(".mobile-nav-item");
const cancelIcon = document.querySelector(".cancel-icon");

//Change banner
banner.addEventListener("click", () => {
  banner.querySelector("h1.headline").textContent = "Have a Good Time!";
  
});

//Open mobile menu
menuIcon.addEventListener("click", () => {
  mobileNavItem.style.display = "block";
  cancelIcon.style.display = "block";
  
  
});

//Close mobile menu
cancelIcon.addEventListener("click", () => {
  mobileNavItem.style.display = "none";
  cancelIcon.style.display = "none";
  
});
//Close mobile menu for each item
for (let i=0 ; i < mobileNavItem.querySelectorAll("div li").length; i++) {
  mobileNavItem.querySelectorAll("div li")[i].addEventListener("click" , () => {
    mobileNavItem.style.display = "none";
    cancelIcon.style.display = "none";
  });
}


//Call to action
callToAction.addEventListener("click", () => {
    secondContent.style.display = "block"; 
     
});


//console.log(mobileNavItem);
