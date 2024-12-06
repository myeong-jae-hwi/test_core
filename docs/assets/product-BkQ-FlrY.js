import{r as l,i as d,n as g,a as u,b as m,x as p,t as h}from"./Header-DW9Kw3dZ.js";import{g as f}from"./getPbImageURL-C7XpzPdk.js";import{g as w}from"./index-DjKJqAo0.js";var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,c=(e,t,o,s)=>{for(var a=s>1?void 0:s?v(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(a=(s?n(t,o,a):n(a))||a);return s&&a&&b(t,o,a),a};let r=class extends m{constructor(){super(...arguments),this.data={items:[],page:0,perPage:0,totalItems:0,totalPages:0},this.loginData={}}connectedCallback(){super.connectedCallback(),this.fetchData()}async fetchData(){const t=await(await fetch("https://season-basic.pockethost.io//api/collections/products/records")).json();this.data=t,this.loginData=JSON.parse(localStorage.getItem("auth")??"{}")}updated(e){super.updated(e);const t=this.renderRoot.querySelectorAll(".product-item");t.length>0&&w.from(t,{y:30,opacity:0,stagger:.2})}render(){const{isAuth:e}=this.loginData;return p`
      <div class="container">
        <ul>
          ${this.data.items.map(t=>p`
              <li class="product-item">
                <a href="${e?`/src/pages/detail/index.html?product=${t.id}`:"/"}">
                  <figure>
                    <img src="${f(t)}" alt="" />
                  </figure>
                  <span class="brand">${t.brand}</span>
                  <span class="description">${t.description}</span>
                  <span class="price">${t.price.toLocaleString()}원</span>
                  <div>
                    <span class="discount">${t.discount}%</span>
                    <span class="real-price">${(t.price-t.price*t.discount*.01).toLocaleString()}원</span>
                  </div>
                </a>
              </li>
            `)}
        </ul>
      </div>

      <a class="new-post" href="/src/pages/newPost/">+ 상품추가</a>
    `}};r.styles=[l,d`
      .container {
        margin: 0 auto;

        & img {
          width: 100%;
        }

        & ul {
          display: grid;
          place-items: center;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2rem;
          margin: 2.5rem;

          & li {
            & a {
              max-width: 30vw;
              display: flex;
              flex-direction: column;
              gap: 0.6rem;
            }
          }

          .description {
            font-size: 0.8rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .price {
            color: gray;
            text-decoration: line-through;
          }

          .discount {
            font-size: 1.2rem;
            color: red;
          }

          .real-price {
            font-weight: bold;
          }
        }
      }

      .new-post {
        padding: 0.5rem 1rem;
        background-color: dodgerblue;
        color: white;
        border-radius: 20px;
        position: fixed;
        transform: translateX(-50%);
        left: 50%;
        bottom: 2rem;
      }
    `];c([g({type:Object})],r.prototype,"data",2);c([u()],r.prototype,"loginData",2);r=c([h("product-list")],r);
