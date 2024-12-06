import{r as p,i as u,n as l,b as h,p as d,x as b,t as v}from"./Header-DW9Kw3dZ.js";import{g}from"./getPbImageURL-C7XpzPdk.js";var m=Object.defineProperty,y=Object.getOwnPropertyDescriptor,s=(i,t,o,r)=>{for(var e=r>1?void 0:r?y(t,o):t,n=i.length-1,a;n>=0;n--)(a=i[n])&&(e=(r?a(t,o,e):a(e))||e);return r&&e&&m(t,o,e),e};let c=class extends h{constructor(){super(...arguments),this.product={},this.productId="",this.realPrice=0}connectedCallback(){super.connectedCallback(),this.fetchData()}async fetchData(){const t=new URLSearchParams(location.search).get("product");if(!t)throw new Error("id값이 존재하지 않습니다");this.productId=t,this.product=await d.collection("products").getOne(t),this.realPrice=this.product.price}get priceInput(){return this.renderRoot.querySelector("#price")}get discountInput(){return this.renderRoot.querySelector("#discount")}get inputs(){return this.renderRoot.querySelectorAll("input")}handleDiscount(i){i.target,this.product;let t=+this.priceInput.value,o=+this.discountInput.value;const r=t*(o*.01),e=t-r;this.realPrice=e}handleModify(){console.log(this.inputs),d.collection("products").update(this.productId,{brand:this.inputs[0].value,description:this.inputs[1].value,price:this.inputs[2].value,discount:this.inputs[3].value}).then(()=>{location.href="/src/pages/product/"}).catch(()=>{console.log("err")})}render(){const{price:i,brand:t,discount:o,description:r}=this.product;return b`
      <div class="container">
        <div class="wrapper">
          <div class="brand">
            <label for="brand">브랜드</label>
            <input type="text" id="brand" value="${t}" />
          </div>

          <div class="visual">
            <img src="${g(this.product)}" alt="" />
          </div>

          <div class="desc">
            <label for="description">상품 설명</label>
            <input type="text" id="description" value="${r}" />
          </div>

          <div class="price">
            <label for="price">가격</label>
            <input @input=${this.handleDiscount} type="text" id="price" value="${i}" />
          </div>

          <div class="discount">
            <label for="discount">할인율</label>
            <input @input=${this.handleDiscount} type="text" id="discount" value="${o}" />
          </div>

          <div class="real-price">${this.realPrice.toLocaleString()}원</div>
        </div>
        <div class="buttonGroup">
          <button @click=${()=>history.back()} type="button" class="cancel">취소</button>
          <button @click=${this.handleModify} type="button" class="modify">수정</button>
        </div>
      </div>
    `}};c.styles=[p,u`
      .container {
        padding: 2rem;
        margin: 0 auto;

        .wrapper {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 400px;
        }

        & input {
          padding: 0.5rem;
          border: 1px solid white;
          width: 100%;
        }
      }

      .real-price,
      .buttonGroup {
        text-align: center;
      }

      button {
        padding: 0.4rem 1rem;
        border: 1px solid black;
        cursor: pointer;
        margin-top: 2rem;
      }

      .cancel {
        background-color: rgb(255, 21, 185);
        color: white;
      }

      .modify {
        background-color: rgb(21, 91, 255);
        color: white;
      }
    `];s([l({type:Object})],c.prototype,"product",2);s([l({type:String})],c.prototype,"productId",2);s([l({type:String})],c.prototype,"realPrice",2);c=s([v("detail-element")],c);
