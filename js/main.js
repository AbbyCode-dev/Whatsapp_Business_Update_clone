let openLang = document.getElementById("display-lang");
let exitLanguage = document.querySelector('.lang'); 
const unveilLang = document.querySelector("#unveil");

unveilLang.addEventListener('click', function() {
  const dropOption = document.querySelector('.drop-option');
  if (dropOption) {
    openLang.style.display = 'flex';
  } else {
    openLang.style.display = "none";
  }
})

const closeLang = document.querySelector('#close-lang');
closeLang.addEventListener('click', function() {
  openLang.style.display = 'none';
})

// Close the dropdown when clicking outside of it
document.addEventListener('click', function(e) {
  if (!exitLanguage.contains(e.target)) {
    openLang.style.display = 'none';
  }
});

const mouseEnter = document.querySelector("#mouse-enter");
const myDiv = document.querySelector("#myDiv");
const open = document.querySelector("#open");
mouseEnter.addEventListener("mouseenter", function () {
  if (myDiv) {
    myDiv.style.display = "flex";
    // open.innerHTML = `<span style="color:green; font-size:30px;">${"^"}</span>`;
    open.innerHTML = `<span><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#42cd66"><path d="m256-424-56-56 280-280 280 280-56 56-224-223-224 223Z"/></svg></span>`;
  } 
});

const tool = document.querySelector(".tool");
tool.addEventListener("mouseleave", function (e) {
  if (myDiv) {
    myDiv.style.display = "none";
    open.innerHTML = `<span><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#42cd66"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span>`;
  }
});

const showLang = document.querySelector("#show-lang");
showLang.addEventListener('click', function() {
  const langShow = document.getElementById("lang-modal");
  langShow.style.display = "block";
}) 

const exitLang = document.querySelector("#exit-lang");
exitLang.addEventListener("click", function () {
  const langExit = document.getElementById("lang-modal");
  langExit.style.display = "none";
});

const show = document.querySelector('#show');
show.addEventListener('click', function() {
  const showSide = document.getElementById("modal");
  showSide.style.display = "block";
})

const exit = document.querySelector('#exit');
exit.addEventListener('click', function() {
  const exitSide = document.getElementById("modal");
  exitSide.style.display = "none";
})

const dropDown = document.querySelector("#dropDown");
dropDown.addEventListener("click", function () {
  let dropDownNote = document.getElementById("display");
  if (dropDownNote.style.display === "none") {
    dropDownNote.style.display = "block";
    document.getElementById("change").textContent = " - ";
  } else {
    dropDownNote.style.display = "none";
    document.getElementById("change").textContent = " + ";
  }
});

const dropDown1 = document.querySelector("#dropDown1");
dropDown1.addEventListener("click", function () {
  const dropDownNote = document.getElementById("display1");
  if (dropDownNote.style.display === "none") {
    dropDownNote.style.display = "block";
    document.getElementById("change1").textContent = " - ";
  } else {
    dropDownNote.style.display = "none";
    document.getElementById("change1").textContent = " + ";
  }
});

const dropDown2 = document.querySelector("#dropDown2");
dropDown2.addEventListener("click", function () {
  const dropDownNote = document.getElementById("display2");
  if (dropDownNote.style.display === "none") {
    dropDownNote.style.display = "block";
    document.getElementById("change2").textContent = " - ";
  } else {
    dropDownNote.style.display = "none";
    document.getElementById("change2").textContent = " + ";
  }
});

const dropDown3 = document.querySelector("#dropDown3");
dropDown3.addEventListener("click", function () {
  const dropDownNote = document.getElementById("display3");
  if (dropDownNote.style.display === "none") {
    dropDownNote.style.display = "block";
    document.getElementById("change3").textContent = " - ";
  } else {
    dropDownNote.style.display = "none";
    document.getElementById("change3").textContent = " + ";
  }
});

const dropDown4 = document.querySelector("#dropDown4");
dropDown4.addEventListener("click", function () {
  const dropDownNote = document.getElementById("display4");
  if (dropDownNote.style.display === "none") {
    dropDownNote.style.display = "block";
    document.getElementById("change4").textContent = " - ";
  } else {
    dropDownNote.style.display = "none";
    document.getElementById("change4").textContent = " + ";
  }
}); 



// For sidebar

const flexDiv = document.querySelector(".flex");
const flex1Div = document.querySelector(".flex1");
const flex2Div = document.querySelector(".flex2");
const flex3Div = document.querySelector(".flex3");
const btnDiv = document.querySelector("#btn-div");
const productDiv = document.querySelector("#product-div");
const resourcesDiv = document.querySelector("#resources-div");
const developerDiv = document.querySelector("#developer-div");
const partnerDiv = document.querySelector("#partner-div"); 

flexDiv.addEventListener("click", function () {
  if (productDiv) {
    productDiv.style.display = "block";
    flexDiv.style.display = "none";
    flex1Div.style.display = "none";
    flex2Div.style.display = "none";
    flex3Div.style.display = "none";
    btnDiv.style.display = "none";
  }
});

flex1Div.addEventListener("click", function () {
  if (productDiv) {
    resourcesDiv.style.display = "block";
    flex1Div.style.display = "none";
    flexDiv.style.display = "none";
    flex2Div.style.display = "none";
    flex3Div.style.display = "none";
    btnDiv.style.display = "none";
  }
});

flex2Div.addEventListener("click", function () {
  if (productDiv) {
    developerDiv.style.display = "block";
    flex2Div.style.display = "none";
    flexDiv.style.display = "none";
    flex1Div.style.display = "none";
    flex3Div.style.display = "none";
    btnDiv.style.display = "none";
  }
});

flex3Div.addEventListener("click", function () {
  if (productDiv) {
    partnerDiv.style.display = "block";
    flex3Div.style.display = "none";
    flexDiv.style.display = "none";
    flex1Div.style.display = "none";
    flex2Div.style.display = "none";
    btnDiv.style.display = "none";
  }
});

// const exitProduct = document.querySelector("#exit-product");
// exitProduct.addEventListener('click', function(){
//     if (productDiv) {
//       productDiv.style.display = "none";
//       flexDiv.style.display = "flex";
//       flex1Div.style.display = "flex";
//       flex2Div.style.display = "flex";
//       flex3Div.style.display = "flex";
//       btnDiv.style.display = "block";
//     }
// })

// inner sidebar 
const exitProduct = document.querySelectorAll(".exit-product");
exitProduct.forEach(function (exitMe) {
  exitMe.addEventListener("click", function () {
    if (productDiv) {
      productDiv.style.display = "none";
      flexDiv.style.display = "block";
      flex1Div.style.display = "block";
      flex2Div.style.display = "block";
      flex3Div.style.display = "block";
      btnDiv.style.display = "block";
    }
    if (resourcesDiv) {
      resourcesDiv.style.display = "none";
      flexDiv.style.display = "block";
      flex1Div.style.display = "block";
      flex2Div.style.display = "block";
      flex3Div.style.display = "block";
      btnDiv.style.display = "block";
    }
    if (developerDiv) {
      developerDiv.style.display = "none";
      flexDiv.style.display = "block";
      flex1Div.style.display = "block";
      flex2Div.style.display = "block";
      flex3Div.style.display = "block";
      btnDiv.style.display = "block";
    }
    if (partnerDiv) {
      partnerDiv.style.display = "none";
      flexDiv.style.display = "block";
      flex1Div.style.display = "block";
      flex2Div.style.display = "block";
      flex3Div.style.display = "block";
      btnDiv.style.display = "block";
    }
  });
});

const whatsappList = document.querySelector(".whatsapp-list");
const whatsappList1 = document.querySelector(".whatsapp-list1");
const whatsappList2 = document.querySelector(".whatsapp-list2");
const businessDiv = document.querySelector("#business-div");
const platformDiv = document.querySelector("#platform-div");
const whatsappDiv = document.querySelector("#whatsapp-div");
const product = document.querySelector("#product");
const btnsDiv = document.querySelector(".btns");
const btns1Div = document.querySelector(".btns1");
const btns2Div = document.querySelector(".btns2");

whatsappList.addEventListener('click', function() {
  if (platformDiv) {
    platformDiv.style.display = "block";
    whatsappList1.style.display = "none";
    whatsappList2.style.display = "none";
    product.style.display = "none";
    whatsappList.style.display = "none";
    btnsDiv.style.display = "none";
  }
}) 

whatsappList1.addEventListener("click", function () {
  if (businessDiv) {
    businessDiv.style.display = "block";
    whatsappList1.style.display = "none";
    whatsappList2.style.display = "none";
    product.style.display = "none";
    whatsappList.style.display = "none";
    btns1Div.style.display = "none";
  }
});

whatsappList2.addEventListener("click", function () {
  if (whatsappDiv) {
    whatsappDiv.style.display = "block";
    whatsappList1.style.display = "none";
    whatsappList2.style.display = "none";
    product.style.display = "none";
    whatsappList.style.display = "none";
    btns2Div.style.display = "none";
  }
});

const platformList = document.querySelector(".platform-list");
const developerLink = document.querySelector(".developer-link");
const platformListId = document.querySelector("#platform-list");
const developerLinkId = document.querySelector("#developer-link");
const product1 = document.querySelector("#product1");
const btnDiv1 = document.querySelector(".btn-div");
const btnDiv2 = document.querySelector(".btn-div1");

platformList.addEventListener("click", function () {
  if (platformListId) {
    platformListId.style.display = "block";
    platformList.style.display = "none";
    developerLink.style.display = "none";
    product1.style.display = "none";
    btnDiv1.style.display = "none";
  }
});

developerLink.addEventListener("click", function () {
  if (developerLinkId) {
    developerLinkId.style.display = "block";
    developerLink.style.display = "none";
    platformList.style.display = "none";
    product1.style.display = "none";
    btnDiv2.style.display = "none";
  }
});

const exitProduct1 = document.querySelectorAll(".exit-product1");

exitProduct1.forEach(function (exitMe) {
  exitMe.addEventListener("click", function () {
    if (platformDiv) {
      platformDiv.style.display = "none";
      whatsappList1.style.display = "flex";
      whatsappList2.style.display = "flex";
      product.style.display = "block";
      whatsappList.style.display = "flex";
      btnsDiv.style.display = "block";
    }
    if (businessDiv) {
      businessDiv.style.display = "none";
      whatsappList1.style.display = "flex";
      whatsappList2.style.display = "flex";
      product.style.display = "block";
      whatsappList.style.display = "flex";
      btns1Div.style.display = "block";
    }
    if (whatsappDiv) {
      whatsappDiv.style.display = "none";
      whatsappList1.style.display = "flex";
      whatsappList2.style.display = "flex";
      product.style.display = "block";
      whatsappList.style.display = "flex";
      btns2Div.style.display = "block";
    }
    if (platformListId) {
      platformListId.style.display = "none";
      platformList.style.display = "flex";
      developerLink.style.display = "flex";
      product1.style.display = "block";
      btnDiv1.style.display = "block";
    }
    if (developerLinkId) {
      developerLinkId.style.display = "none";
      developerLink.style.display = "flex";
      platformList.style.display = "flex";
      product1.style.display = "block";
      btnDiv1.style.display = "block";
    }
  });
});

const list = document.querySelector(".list");
const conDiv = document.querySelector(".con-div");
const closeMe = document.querySelector(".close");
const closeMe1 = document.querySelector(".close-me");

list.addEventListener("click", () => {
  if (conDiv) {
    conDiv.style.display = "block";
    // platformDiv.style.display = "none";
    closeMe.style.display = "none";
    closeMe1.style.display = "none";
  }
});

const exitProduct2 = document.querySelector(".exit-product2");

exitProduct2.addEventListener("click", () => {
  if (conDiv) {
    conDiv.style.display = "none";
    // platformDiv.style.display = "block";
    closeMe.style.display = "block";
    closeMe1.style.display = "block";
  }
});

const removeAnchor = document.querySelectorAll(".remove-anchor");
removeAnchor.forEach((event) => {
  event.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
