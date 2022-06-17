// show
let mainPro = document.getElementById("showList");
function soProduct(pic, name, des, price, id, singer,list) {
  mainPro.insertAdjacentHTML('beforeEnd',
    `
      <div class="productItem">
        <div class="productPic"><img src="./media/img/./${pic}" alt=""></div>
        <div class="productTit">
          <b>${name}</b> <br>
          <span>${des}</span>
        </div>
        <div class="productPrice">₫${price}</div>
        <div class="AddProduct"><button onclick="AddProduct(${id})" class="btn_item">Thêm vào giỏ hàng</button></div>
        <div class="showitem"><button  class="btn_item modal-btn" data-modal="${id}">Chi tiết </button></div>
       </div>

      <div class="modal-show" id="${id}" style="display: none;">
              <div class="modal-bg"></div>
              <div class="modal-content animate-zoom">
                  <div class="modal-header">
                      <div class="modal-close"><svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg></div>
                      <div class="modal-title"></div>
                      
                      <img src="./media/img/./${pic}" class="Img">
                      <div class="conten">
                      <div clas="Sing">Ca Sĩ : ${singer}</div>
                          <div class="musicList">
                          <div class="showname">Tên Đĩa : ${name}</div>
                       <ol class="music-list">
                          <li>"Rồi mai tôi đưa em"</li>
                          <li>"Hạ trắng"</li>
                          <li>"Dấu tình sầu"</li>
                          <li>"Phôi pha"</li>
                          <li>"Mắt biếc"</li>
                          <li>"Bài không tên số 2"</li>
                          <li>"Thu hát cho người"</li>
                          <li>"Lệ đá"</li>
                      </ol>
                      <div class="productPrice">Giá: ₫${price}</div>
                    </div>
               </div>
                  </div>
                  <div class="modal-body">
                      <p>${des}</p>
                      <div class="AddProduct"><button onclick="AddProduct(${id})" class="btn_item">Thêm vào giỏ hàng</button></div>
                  </div>
              </div>
            </div>
      
      `
  )
}
function showList() {
  mainPro.innerHTML = "";
  for (let i = 0; i < product.length; i++) {
    soProduct(product[i].pic, product[i].name, product[i].des, product[i].price,product[i].id, product[i].singer,product[i].id);
  }
}
showList();
let showAll = document.getElementsByClassName("showAll");
console.log(showAll);
showAll[0].addEventListener('click', () => {
  console.log("Show all");
  showList();
});

let showKind = document.getElementsByClassName("sidebarMenuKind");
console.log(showKind);
for (let k = 0; k < showKind.length; k++) {
  let condition = showKind[k].innerHTML;
  showKind[k].addEventListener('click', (e) => {
    console.log(e);
    mainPro.innerHTML = "";
    for (let i = 0; i < product.length; i++) {
      if (product[i].kind == condition) {
        soProduct(product[i].pic, product[i].name, product[i].des, product[i].price);
      }
    }
  });
}

let showCaretory = document.getElementsByClassName("sidebarMenucaretory");
console.log(showCaretory);
for (let k = 0; k <showCaretory.length; k++) {
  let condition = showCaretory[k].innerHTML;
  showCaretory[k].addEventListener('click', (e) => {
    console.log(e);
    mainPro.innerHTML = "";
    for (let i = 0; i < product.length; i++) {
      if (product[i].caretory == condition) {
        soProduct(product[i].pic, product[i].name, product[i].des, product[i].price);
      }
    }
  });
}

let showRot = document.getElementsByClassName("sidebarMenurot");
console.log(showRot);
for (let k = 0; k <showRot.length; k++) {
  let condition = showRot[k].innerHTML;
  showRot[k].addEventListener('click', (e) => {
    console.log(e);
    mainPro.innerHTML = "";
    for (let i = 0; i < product.length; i++) {
      if (product[i].rot == condition) {
        soProduct(product[i].pic, product[i].name, product[i].des, product[i].price);
      }
    }
  });
}
//sort
const sortPro = document.getElementById("sortbyprice");
sortPro.addEventListener('change', (e) => {
  let sortType = sortPro.value;
  console.log(sortType);
  console.log(typeof (sortType));
  if (sortType == "hight_to_low") {
    product.sort(function (a, b) {
      let keyA = a.price;
      let keyB = b.price;
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
   showList();
  }
  else {
    product.sort(function (a, b) {
      let keyA = a.price;
      let keyB = b.price;
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
    showList();

  }
});
//modal 
let modalButton = document.getElementsByClassName('modal-btn');
let modals = document.getElementsByClassName('modal-show');
let modalClose = document.getElementsByClassName('modal-close');
let closePic = document.getElementsByClassName('modal-closePic');
let modalBG = document.getElementsByClassName('modal-bg');

for (let i = 0; i < modalButton.length; i++) {
    for (let j = 0; j < modals.length; j++) {
        let x = modalButton[i].getAttribute('data-modal');
        let y = modals[j].getAttribute('id');
        let modalCheck = function () {
            if (x == y) {
                console.log("true");
                return true;   
            }
        }
        //Show Modal
        modalButton[i].addEventListener("click", (e) => {
          console.log(e);
            if (modalCheck()) {
                modals[j].style.display = "block";

            }
        });

        //Hide Modal
        let modalHide = function (n) {
            for (let i = 0; i < n.length; i++) {
                n[i].addEventListener("click", () => {
                    if (modalCheck()) {
                        modals[j].style.display = "none";
                    }
                });
            }
        }

        modalHide(modalClose);
        modalHide(modalBG);
        modalHide(closePic);
    }
}
// Cart
// var LIST_PRODUCT = [];
// let carts = document.querySelectorAll('.btn');

// for (let i = 0; i < carts.length; i++) {
//   carts[i].addEventListener('click', () => {
//     cartNumber();
//     console.log(carts[i]);
//   });
// }
// function cartNumber() {
//   let pro = localStorage.getItem('cartNumber');
//   localStorage.setItem('cartNumber', 1);
//   console.log(pro);
// }



// function AddProduct(id) {
//   var myProduct = product.filter(pr => pr.id == id);
//   LIST_PRODUCT.push(myProduct);
//   console.log(LIST_PRODUCT);

//   document.getElementById("totalCardProduct").innerHTML = LIST_PRODUCT.length;
//   alert('Sản phẩm đã được thêm vào giỏ hàng ')
// }
var LIST_PRODUCT = [];
let cartBtn = document.getElementById('cart')
let showCartContainer = document.getElementById('show-cart__item')
let carts = {}
cartBtn.onclick = function() {
  for(let product of LIST_PRODUCT) {
    let name = product.name
    if (name in carts) {
      carts[name] ++
    } else {
      carts[name] = 1;
    }
  }

  console.log(carts)
  showCartContainer.innerHTML = ''
  for (let item in carts) {
    let showCartItem = `
    
    
    <table border="1" cellspacing="10">
      <tr>
        <td>Tên Sản Phẩm</td>
        <td>Số Lượng</td>
      </tr>
      <tr>
        <td><a>${item}</a></td>
        <td><a>${carts[item]}</a><td>
      </tr>
    </table>
    `
    showCartContainer.innerHTML += showCartItem
  }
}

function AddProduct(id) {
  let targetItem = product[id]

  LIST_PRODUCT.push(targetItem);

  document.getElementById("totalCardProduct").innerHTML = LIST_PRODUCT.length;
}