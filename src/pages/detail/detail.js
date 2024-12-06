import "@/pages/detail/detail.css";
import pb from "@/api/pocketbase";
import { getPBImageURL } from "@/api/getPbImageURL";
import Swal from "sweetalert2";

function render() {
  const tag = `
     <div class="container">
      <div class="buttonGroup">
        <button type="button" class="cancel">취소</button>
        <button type="button" class="modify">수정</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", tag);

  renderProduct();
}

async function renderProduct() {
  // 상품 정보 가져오기
  const urlParams = new URLSearchParams(location.search);
  console.log(location.search);
  console.log(urlParams);
  const id = urlParams.get("product");

  console.log(id);

  const product = await pb.collection("products").getOne(id);

  const { brand, description, price, discount } = product;

  const tag = /* html */ `
    <div class="wrapper">
      <div class="brand">
        <label for="brand">브랜드</label>
        <input type="text" id="brand" value="${brand}" />
      </div>

      <div class="visual">
        <img src="${getPBImageURL(product)}" alt="" />
      </div>

      <div class="desc">
        <label for="description">상품 설명</label>
        <input type="text" id="description" value="${description}"  />
      </div>

      <div class="price">
        <label for="price">가격</label>
        <input type="text" id="price" value="${price}" />
      </div>

      <div class="discount">
        <label for="discount">할인율</label>
        <input type="text" id="discount" value="${discount}" />
      </div>

      <div class="real-price">35000원</div>
    </div>
  
  `;

  // 가져온 상품 정보 랜더링 하기

  document.querySelector(".container").insertAdjacentHTML("afterbegin", tag);

  datail();
}

function datail() {
  const priceInput = document.querySelector("#price");
  const discountInput = document.querySelector("#discount");

  const cancel = document.querySelector(".cancel");
  const modify = document.querySelector(".modify");

  console.log(priceInput);
  console.log(discountInput);

  function handleDiscount() {
    let newPrice = priceInput.value;
    let newDiscount = discountInput.value;

    newPrice = priceInput.value;
    newDiscount = discountInput.value;

    const ratio = newPrice * (newDiscount * 0.01);
    const realPrice = newPrice - ratio;

    document.querySelector(".real-price").textContent = `${realPrice}원`;
  }

  priceInput.addEventListener("input", handleDiscount);
  discountInput.addEventListener("input", handleDiscount);

  cancel.addEventListener("click", () => {
    history.back();
  });

  async function handleModify() {
    try {
      const brand = document.querySelector("#brand").value;
      const description = document.querySelector("#description").value;
      const price = document.querySelector("#price").value;
      const discount = document.querySelector("#discount").value;

      console.log("수정 버튼 클릭");

      const urlParams = new URLSearchParams(location.search);
      console.log(location.search);
      console.log(urlParams);
      const id = urlParams.get("product");

      const data = {
        brand: brand,
        description: description,
        price: price,
        discount: discount,
      };

      const record = await pb.collection("products").update(id, data);

      Swal.fire({
        title: "수정 완료",
        text: "수정이 완료되었습니다.",
        icon: "success",
        confirmButtonText: "닫기",
      });
    } catch (e) {
      console.log(e);
      Swal.fire({
        title: "수정 실패",
        text: "수정 과정에 문제가 생겼습니다.",
        icon: "success",
        confirmButtonText: "닫기",
      });
    }
  }

  modify.addEventListener("click", handleModify);
}

render();
