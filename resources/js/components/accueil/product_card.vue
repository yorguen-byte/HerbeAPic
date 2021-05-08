<template>
  <div class="wrapper">
      <div class="content-container">
          <div class="img-wrapper">
    
          </div>
          <div class="bottom">
              <div class="left">
                  <div class="details">
                      <h3 class="product-name">Produit Phytobocaz</h3>
                      <p class="product-price">50€ les 3 flacons</p>
                  </div>
                <div class="buy">
                    <b-icon icon="cart"></b-icon>
                </div>
              </div>
          </div>
      </div>
      <div class="inside-description">
          <div class="info-wrapper">
              <b-icon icon="info">

              </b-icon>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper{
    width:300px;
    height:500px;
    border-radius: 10px;
    transform: scale(0.95);
    transition: transform 0.5s, box-shadow 500;
    position: relative;
    overflow: hidden;
}
.wrapper:hover{
    transform: scale(0.98);
    box-shadow: 5px 5px 30px rgba(0, 0, 0,0.2)
}
.content-container{
    width:100%;
    height:100%;


}
.top{
    width:80%;
    height:100%;
}

.img-wrapper{
    height: 80%;
    width: 100%;
    background: url(https://th.bing.com/th/id/Rc26a9974b1e0ae2ae7236fd6b5b104fc?rik=z1jvycgbZ4GzHw&pid=ImgRaw)
}
.bottom{
    width:100%;
    height:20%;
    background: #f3f3f3;
}
.product-name, .product-price{
    margin:0;
    padding:0;
}
.details{
    padding:20px;
    width: 70%;
}

.left{
    display:flex;
    flex-direction:row;
    height:100%;
    
}

.buy{
    background:#f1f1f1;
    transition:background 500;
    width:30%;
    border-left: solid thin rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
}
.buy:hover{
    /* background:#46f84c; */
    background: #A6CDDE;
}
.product-name{
    font-size: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.buy .bi-cart {
    font-size:30px;

}

.inside-description{
    background:#ccc;
    width:140px;
    height: 140px;
    border-radius:0px 0px 200px 200px;
    position: absolute;
    top:-70px;
    right:-70px;
}

.info-wrapper{
    position: absolute;
    right:80px;
    top:85px;
    
}
.info-wrapper .bi-info {
    color: white;
    font-size: 30px;
}
</style>