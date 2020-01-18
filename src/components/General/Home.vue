<template>
  <div>
  <div class="hot-course">
    <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-12">
          <course></course>
        </div>
        </div>  
    </div>
  </section>
  </div>
    <div class="hot-center">
    <section class="section">
    <div class="container">
      <div class="hot-course-title">
        <h2>ສູນພັດທະນາ</h2>
         <Slider></Slider>
        </div>
    </div>
  </section>
  </div>
  </div>
</template>
<script>
// import SearchSidebar from '@/components/General/Main/SearchSidebar'
import Course from '@/components/General/Course';
import Slider from '@/components/General/Main/Slider';
// import Swiper from 'swiper/js/swiper.esm.bundle';
export default {
  name: 'home',
  data: ()=>({
course:[
       {
        id: 1,
        image:'https://media.jobthai.com/v1/images/logo-pic-map/181461_logo_20191206133721.png',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
       {
        id: 2,
        image:'/images/logistic.jpeg',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
       {
        id: 3,
        image:'https://media.jobthai.com/v1/images/logo-pic-map/196199_logo_20190927104039.png',
        name:'ດັດແປງແບບກະໂປ່ງດັດແປງແບບກະໂປ່ງ',
       },
       {
        id: 4,
        image:'https://media.jobthai.com/v1/images/logo/135828_logo_201709141116.jpeg',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
        {
        id: 5,
        image:'https://media.jobthai.com/v1/images/logo/139006_logo_201909201005.png',
        name:'ດັດແປງແບບກະໂປ່ງ',
       },
       {
        id: 6,
        image:'https://media.jobthai.com/v1/images/logo/133060_logo_201909201054.png',
        name:'ຂະໝົມລາວແລະເຄັກ',
       }
      ]
  }),
  props: {
    msg: String
  },
  components:{
   Course,
   Slider
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card.hot-card{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgb(246, 247, 251);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(222, 222, 222);
    border-image: initial;
    border-radius: 0.4em;
    cursor: pointer;
}
.card.hot-card .card-image{
  position: relative;
    width: 100%;
    padding-top: 55%;
    background-color: rgb(255, 255, 255);
    border-top-left-radius: 0.6em;
    border-top-right-radius: 0.6em;
}
.card.hot-card .card-image img{
  display: block;
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}
.card-content.course{
  position: relative;
    width: 100%;
    min-height: 45%;
    padding: 0.5em;

}
.hot-course-title{
    font-size: 22px;
    color: rgb(0, 0, 0);
    padding-right: 0px;
    padding-left: 0px;
    font-weight: 600;
    padding-bottom: 15px;
    line-height: 1;
    display: block;
    text-align: left;
}
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* slider */
.swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      height: 200px !important;
      background: pink;
      border: 1px solid #888;
    }
</style>
