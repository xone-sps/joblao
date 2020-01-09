<template>
    <div>
    <div class="hot-course-title">
        <h2>ຫຼັກສູດ</h2>
        </div>
        <div class="columns is-mobile is-multiline">
          <div class="column is-12">
          <article class="panel is-info">
          <p class="panel-tabs">
          <a v-for="(row,index) in tap" :key="index" @click="selectTap(row.id)" :class="{'is-active' :currentTab == row.id }">{{row.tapname}}</a>
          </p>
          </article>
          </div>     
        <div class="columns is-mobile is-multiline">
           <div class="column is-3-desktop is-3-tablet is-6-mobile" v-for="(course,index) in course" :key="index" >
            <div class="card hot-card">
              <div class="card-image" @click="CourseDetail(course.id)">
                <img :src="course.image" alt="">
              </div>
              <div class="card-content course">
                <p>{{course.name}}</p>
              </div>
            </div>
          </div>
           </div>
          </div> 
    </div>
</template>
<script>
export default {
  name: 'Course',
 data (){
      return {
      currentTab: 1,
    tap:[
      {
        id:1,
        tapname:'ຊັ້ນສູງ',
      },
        {
        id:2,
        tapname:'ຊັ້ນກາງ',
        },
        {
        id:3,
        tapname:'ຊັ້ນຕົ້ນ',
        }
        ],

        course:[
        {
        id: 1,
        tap_id:1,
        image:'https://media.jobthai.com/v1/images/logo-pic-map/181461_logo_20191206133721.png',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
        {
        id: 2,
        tap_id:1,
        image:'/images/logistic.jpeg',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
       {
        id: 3,
         tap_id:1,
        image:'https://media.jobthai.com/v1/images/logo-pic-map/196199_logo_20190927104039.png',
        name:'ດັດແປງແບບກະໂປ່ງດັດແປງແບບກະໂປ່ງ',
       },
       {
        id: 4,
        tap_id:1,
        image:'https://media.jobthai.com/v1/images/logo/135828_logo_201709141116.jpeg',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
        {
        id: 5,
        tap_id:1,
        image:'https://media.jobthai.com/v1/images/logo/139006_logo_201909201005.png',
        name:'ດັດແປງແບບກະໂປ່ງ',
       },
       {
        id: 6,
        tap_id:1,
        image:'https://media.jobthai.com/v1/images/logo/133060_logo_201909201054.png',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
        {
        id: 7,
        tap_id:2,
        image:'https://media.jobthai.com/v1/images/logo-pic-map/181461_logo_20191206133721.png',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
        {
        id: 8,
         tap_id:2,
        image:'/images/logistic.jpeg',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
               {
        id: 9,
        tap_id:2,
        image:'https://media.jobthai.com/v1/images/logo-pic-map/181461_logo_20191206133721.png',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
        {
        id: 10,
         tap_id:2,
        image:'/images/logistic.jpeg',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
       {
        id: 11,
         tap_id:2,
        image:'https://media.jobthai.com/v1/images/logo-pic-map/196199_logo_20190927104039.png',
        name:'ດັດແປງແບບກະໂປ່ງດັດແປງແບບກະໂປ່ງ',
       },
       {
        id: 12,
         tap_id:2,
        image:'https://media.jobthai.com/v1/images/logo/135828_logo_201709141116.jpeg',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
               {
        id: 13,
        tap_id:3,
        image:'https://media.jobthai.com/v1/images/logo-pic-map/181461_logo_20191206133721.png',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
        {
        id: 14,
        tap_id:3,
        image:'/images/logistic.jpeg',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
       {
        id: 14,
         tap_id:3,
        image:'https://media.jobthai.com/v1/images/logo-pic-map/196199_logo_20190927104039.png',
        name:'ດັດແປງແບບກະໂປ່ງດັດແປງແບບກະໂປ່ງ',
       },
        {
        id: 15,
         tap_id:3,
        image:'https://media.jobthai.com/v1/images/logo/139006_logo_201909201005.png',
        name:'ດັດແປງແບບກະໂປ່ງ',
       },
       {
        id: 16,
         tap_id:3,
        image:'https://media.jobthai.com/v1/images/logo/133060_logo_201909201054.png',
        name:'ຂະໝົມລາວແລະເຄັກ',
      },
               {
        id: 17,
         tap_id:3,
        image:'https://media.jobthai.com/v1/images/logo-pic-map/181461_logo_20191206133721.png',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
        {
        id: 18,
         tap_id:3,
        image:'/images/logistic.jpeg',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
       {
        id: 19,
         tap_id:3,
        image:'https://media.jobthai.com/v1/images/logo-pic-map/196199_logo_20190927104039.png',
        name:'ດັດແປງແບບກະໂປ່ງດັດແປງແບບກະໂປ່ງ',
       },
       {
        id: 20,
         tap_id:3,
        image:'https://media.jobthai.com/v1/images/logo/135828_logo_201709141116.jpeg',
        name:'ຂະໝົມລາວແລະເຄັກ',
       },
        {
        id: 21,
         tap_id:3,
        image:'https://media.jobthai.com/v1/images/logo/139006_logo_201909201005.png',
        name:'ດັດແປງແບບກະໂປ່ງ',
       },
      ]}},
      methods:{
     selectTap(selectedtap){
      this.currentTap = selectedtap
     },
       CourseDetail(courseID){
      this.$router.push({name:'coursesingle', params:{id:courseID}})
    }
 }
}
</script>
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
    border-radius: 0.6em;
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
</style>