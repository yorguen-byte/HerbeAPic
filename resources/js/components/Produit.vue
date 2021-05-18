<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="row">
          <div class="col-xs-12 col-md-5">
            <div class="image-wrapper">
              <a
                class="jqzoom"
                title=""
                rel="gal1"
                itemprop="url"
                style="outline-style: none; text-decoration: none"
              >
                <div class="zoomPad">
                  <img
                    itemprop="image"
                    :src="web_url"
                    title="Phytobokaz virapic 60ml"
                    alt="Phytobokaz virapic 60ml"
                    style="opacity: 1"
                  />
                  <div
                    class="zoomPup"
                    style="
                      width: 262px;
                      height: 262px;
                      position: absolute;
                      display: none;
                      border-width: 1px;
                      top: 55px;
                      left: 55px;
                    "
                  ></div>
                  <div
                    class="zoomWindow"
                    style="
                      position: absolute;
                      z-index: 5001;
                      cursor: default;
                      left: 0px;
                      top: 0px;
                      display: none;
                    "
                  >
                    <div
                      class="zoomWrapper"
                      style="width: 458px; border-width: 1px; cursor: crosshair"
                    >
                      <div
                        class="zoomWrapperTitle"
                        style="width: 100%; position: absolute; display: none"
                      ></div>
                      <div
                        class="zoomWrapperImage"
                        style="width: 100%; height: 458px"
                      >
                        <img
                          :src="web_url"
                          style="
                            position: absolute;
                            border: 0px;
                            display: block;
                            left: -97.8166px;
                            top: -97.8166px;
                          "
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="zoomPreload"
                    style="
                      top: 216.5px;
                      left: 193px;
                      position: absolute;
                      visibility: hidden;
                    "
                  >
                    Loading zoom
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-xs-12 col-md-7 p-5">
            <h1>{{ name }}</h1>
            <div class="shortDescription">
              <p>{{ short_description }}</p>
            </div>
            <div class="box-info-product">
              <p>Prix:{{ price }}€</p>
            </div>
          </div>
        </div>
      </div>
      <div class="p-5 product_description">
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "srcVariable",
    "price",
    "name",
    "description",
    "short_description",
    "web_url",
    "storage_url",
  ],
};
</script>

<style scoped>
.product_description {
  background: #f5f6f2;
}
.image-wrapper {
  overflow: hidden;
}
</style>
