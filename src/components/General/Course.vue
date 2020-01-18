<template>
    <div>
    <div class="hot-course-title">
      <search-sidebar/>
        <h2>ຫຼັກສູດການພັດທະນາແຕ່ລະຂະແໜງ</h2>
        </div>
        <div class="columns">
          <div class="column is-12">
            <div class="course-search">
               <a class="filter" v-for="(sector,index) in sector" :key="index" @click="activeSector(sector.id)" :class="{'active' :current == sector.id}">{{sector.name}}
                 <span class="amout">({{sector.count}})</span>
               </a>
            </div>
          </div>
        </div>   
        <div class="columns is-mobile is-multiline">
           <div class="column is-2-desktop is-3-tablet is-6-mobile" v-for="(course,index) in course" :key="index" >
            <div class="card hot-card">
              <div class="card-image" @click="CourseDetail(course.id)">
                <img :src="course.logo" alt="">
              </div>
              <div class="card-content course">
                <p>{{course.dev_name}}</p>
              </div>
            </div>
          </div>
           </div> 
    </div>
</template>
<script>
import SearchSidebar from '@/components/General/Main/SearchSidebar'
export default {
  name: 'Course',
 data (){
      return {
      current: 1,
      sector:'',
      // course:'',
    tap:[
      {
        id:1,
        tapname:'ຂະແໜງຕັດຍິບ',
      },
        {
        id:2,
        tapname:'ນະແໜງກົນຈັກ',
        },
        {
        id:3,
        tapname:'ຂະແໜງໄຟຟ້າ',
        },
        {
        id:4,
        tapname:'ດັດແປງແບບກະໂປ່ງດັດແປງແບບກະໂປ່ງ',
        },
        {
        id:5,
        tapname:'ດັດແປງແບບກະໂປ່ງດັດແປງແບບກະໂປ່ງ',
        },
        {
        id:6,
        tapname:'ດັດແປງແບບກະໂປ່ງດັດແປງແບບກະໂປ່ງ',
        }
        ],

      //   course:[
      //   {
      //   id: 1,
      //   tap_id:1,
      //   logo:'https://media.jobthai.com/v1/images/logo-pic-map/181461_logo_20191206133721.png',
      //   name:'ຂະໝົມລາວແລະເຄັກ',
      //  },
      //   {
      //   id: 2,
      //   tap_id:1,
      //   logo:'/images/logistic.jpeg',
      //   name:'ຂະໝົມລາວແລະເຄັກ',
      //  },
      //  {
      //   id: 3,
      //    tap_id:1,
      //   logo:'https://media.jobthai.com/v1/images/logo-pic-map/196199_logo_20190927104039.png',
      //   name:'ດັດແປງແບບກະໂປ່ງດັດແປງແບບກະໂປ່ງ',
      //  },
      //  {
      //   id: 4,
      //   tap_id:1,
      //   logo:'https://media.jobthai.com/v1/images/logo/135828_logo_201709141116.jpeg',
      //   name:'ຂະໝົມລາວແລະເຄັກ',
      //  },
      //   {
      //   id: 5,
      //   tap_id:1,
      //   logo:'https://media.jobthai.com/v1/images/logo/139006_logo_201909201005.png',
      //   name:'ດັດແປງແບບກະໂປ່ງ',
      //  },
      //  {
      //   id: 6,
      //   tap_id:1,
      //   logo:'https://media.jobthai.com/v1/images/logo/133060_logo_201909201054.png',
      //   name:'ຂະໝົມລາວແລະເຄັກ',
      //  },
      //   {
      //   id: 7,
      //   tap_id:2,
      //   logo:'https://media.jobthai.com/v1/images/logo-pic-map/181461_logo_20191206133721.png',
      //   name:'ຂະໝົມລາວແລະເຄັກ',
      //  },
      //   {
      //   id: 8,
      //    tap_id:2,
      //   logo:'/images/logistic.jpeg',
      //   name:'ຂະໝົມລາວແລະເຄັກ',
      //  },
      //          {
      //   id: 9,
      //   tap_id:2,
      //   logo:'https://media.jobthai.com/v1/images/logo-pic-map/181461_logo_20191206133721.png',
      //   name:'ຂະໝົມລາວແລະເຄັກ',
      //  },
      //   {
      //   id: 10,
      //    tap_id:2,
      //   logo:'/images/logistic.jpeg',
      //   name:'ຂະໝົມລາວແລະເຄັກ',
      //  },
      //  {
      //   id: 11,
      //    tap_id:2,
      //   logo:'https://media.jobthai.com/v1/images/logo-pic-map/196199_logo_20190927104039.png',
      //   name:'ດັດແປງແບບກະໂປ່ງດັດແປງແບບກະໂປ່ງ',
      //  },
      //  {
      //   id: 12,
      //    tap_id:2,
      //   logo:'https://media.jobthai.com/v1/images/logo/135828_logo_201709141116.jpeg',
      //   name:'ຂະໝົມລາວແລະເຄັກ',
      //  },
      //          {
      //   id: 13,
      //   tap_id:3,
      //   logo:'https://media.jobthai.com/v1/images/logo-pic-map/181461_logo_20191206133721.png',
      //   name:'ຂະໝົມລາວແລະເຄັກ',
      //  },
      //   {
      //   id: 14,
      //   tap_id:3,
      //   logo:'/images/logistic.jpeg',
      //   name:'ຂະໝົມລາວແລະເຄັກ',
      //  },
      //  {
      //   id: 14,
      //    tap_id:3,
      //   logo:'https://media.jobthai.com/v1/images/logo-pic-map/196199_logo_20190927104039.png',
      //   name:'ດັດແປງແບບກະໂປ່ງດັດແປງແບບກະໂປ່ງ',
      //  },
      //   {
      //   id: 15,
      //    tap_id:3,
      //   logo:'https://media.jobthai.com/v1/images/logo/139006_logo_201909201005.png',
      //   name:'ດັດແປງແບບກະໂປ່ງ',
      //  },
      //  {
      //   id: 16,
      //    tap_id:3,
      //   logo:'https://media.jobthai.com/v1/images/logo/133060_logo_201909201054.png',
      //   name:'ຂະໝົມລາວແລະເຄັກ',
      // },
      //          {
      //   id: 17,
      //    tap_id:3,
      //   logo:'https://media.jobthai.com/v1/images/logo-pic-map/181461_logo_20191206133721.png',
      //   name:'ຂະໝົມລາວແລະເຄັກ',
      //  },
      //   {
      //   id: 18,
      //    tap_id:3,
      //   logo:'/images/logistic.jpeg',
      //   name:'ຂະໝົມລາວແລະເຄັກ',
      //  },
      //  {
      //   id: 19,
      //    tap_id:3,
      //   logo:'https://media.jobthai.com/v1/images/logo-pic-map/196199_logo_20190927104039.png',
      //   name:'ດັດແປງແບບກະໂປ່ງດັດແປງແບບກະໂປ່ງ',
      //  },
      //  {
      //   id: 20,
      //    tap_id:3,
      //   logo:'https://media.jobthai.com/v1/images/logo/135828_logo_201709141116.jpeg',
      //   name:'ຂະໝົມລາວແລະເຄັກ',
      //  },
      //   {
      //   id: 21,
      //    tap_id:3,
      //   logo:'https://media.jobthai.com/v1/images/logo/139006_logo_201909201005.png',
      //   name:'ດັດແປງແບບກະໂປ່ງ',
      //  },
      // ]
     
      }},
      methods:{
        getSector(){
            this.$axios.get('http://159.65.142.243/api/home/dev-course-post').then(res =>{
                this.sector = res.data.sector;
               this.course = res.data.course_post;
            })
        },
      activeSector(selected){
        this.current = selected
      },
       CourseDetail(courseID){
      this.$router.push({name:'coursesingle', params:{id:courseID}})
    }
 },
   created(){
   this.getSector();

 },
   components:{
   SearchSidebar,
  },
}
</script>
<style scoped>
.course-search{
  width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 15px 0px 23px;
    border: 1px solid #eee;
    border-radius: 4px;
}
.course-search .filter{
  background-color: rgb(246, 247, 251);
    cursor: pointer;
    color: rgb(0, 0, 0);
    font-weight: normal;
    font-size: 16px;
    padding: 0.1em 0.7em;
    margin: 0.2em;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(246, 247, 251);
    border-image: initial;
    border-radius: 4px;
}
.course-search .filter.active{
    border-bottom: 2px solid #fe6d43;
}
.course-search .filter .amout{
    font-size: 1em;
    color: rgb(254, 109, 67);
    padding-right: 0px;
    padding-left: 5px;
    font-weight: normal;
}
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
    padding: 10px 10px;
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
.panel {
  border-radius: 0px !important;
  box-shadow: 0 0 0px -3px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1) !important;
  margin-bottom: 6px;
}
.panel .panel-tabs{
  font-size: 16px;
}
</style>