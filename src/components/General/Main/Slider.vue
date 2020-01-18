<template>
    <div>
    <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in slider" :key="index">
        <div class="card center-card">
            <div class="card-image">
                <img :src="slide.name" alt="">
            </div>
        </div>
         <!-- <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
 export default {
       name: 'carrousel',
    data() {
      return {
          slider: [
             {name:'https://media.jobthai.com/v1/images/logo-pic-map/181461_logo_20191206133721.png'},
            {name:'https://media.jobthai.com/v1/images/logo-pic-map/196199_logo_20190927104039.png'},
            {name:'https://media.jobthai.com/v1/images/logo/135828_logo_201709141116.jpeg'},
            {name:'https://media.jobthai.com/v1/images/logo-pic-map/196199_logo_20190927104039.png'},
            {name:'https://media.jobthai.com/v1/images/logo-pic-map/181461_logo_20191206133721.png'},
            {name:'https://media.jobthai.com/v1/images/logo/139006_logo_201909201005.png'},
            {name:'https://media.jobthai.com/v1/images/logo/133060_logo_201909201054.png'},
            {image:'/images/logistic.jpeg'}
          ],
        swiperOption: {
          slidesPerView: 6,
          spaceBetween: 20,
          // slidesPerColumn: 2,
          slidesPerGroup: 6,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
              autoplay: {
            delay: 15000,
            disableOnInteraction: false
          },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        
      }
    },
    mounted() {
      setInterval(() => {
        if (this.slider.length < 5) {
          this.slider.push(this.slider.length + 1)
        }
      }, 4000)
    },
      components: {
    swiper,
    swiperSlide
  }
 }
</script>

<style scoped>
.card.center-card{
  position: relative;
    width: 100%;
    padding-top: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(222, 222, 222);
    border-image: initial;
    border-radius: 0.6em;
}
.card-image{
position:initial;
}
.center-card .card-image img{
    display: block;
    position: absolute;
    max-width: 90%;
    max-height: 90%;
    margin: auto;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    cursor: pointer;
}
.swiper-container{
padding: 30px 30px;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
    bottom: -4px;
}
</style>