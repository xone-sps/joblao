<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img  width="80" height="80" src="/logo.jpg">
    </a>
    <a role="button" class="navbar-burger burger" v-if="!showNav" @click="showNavbar">
           <!-- v-if="isMobile" @click="showMobileNav()" -->
           <span aria-hidden="true"></span>
           <span aria-hidden="true"></span>
           <span aria-hidden="true"></span>
         </a>
         <a role="button" class="navbar-burger burger" v-else @click="hideNavbar">
           <div class="icon">
             <i class="fas fa-times"></i>
           </div>
           <!-- <i class="fas fa-bars"></i> -->
         </a>
  </div>
  <div class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">
        ໜ້າຫຼັກ
      </router-link>
      <router-link to="/course" class="navbar-item">
        ຫຼັກສູດ
      </router-link>
     <router-link to="/job">
     </router-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <a class="navbar-item">
        ລົງທະບຽນ
      </a>
      <a class="navbar-item">
        ເຂົ້າສູ່ລະບົບ
      </a>
      </div>
    </div>
  </div>
</nav>

<!-- Sidebar mobile-->
<div v-if="showNav">
  <div id="ms-sidebar" class="sidebar is-hidden-desktop-only is-hidden-desktop"
  >
  <section class="my-sidebar-drawer">
    <div class="my-sidebar-drawer-loginInfo">
      <div class="sidebar-containers" >
         <img src="/logo.jpg" width="40" height="40" class="i-sidebar-content-fill-content i-sidebar-content-replaced-content">
      </div>
      <div class="drawer-unlogin">
        <a href="/">
          <a class="drawer-seeker">
            <span class="line-bottom">Joblao</span>
          </a>
        </a>
      </div>
    </div>
    <ul class="sidebar-drawer-box">
      <template>
        <li>
          <a href="/">
            <i class="fa fa-home"></i>
            <span class="sidebar-menu">ໜ້າຫຼັກ</span>
          </a>
        </li>
        <li>
          <a href="/branch/vientiane">
<i class="far fa-building"></i>
           <span class="sidebar-menu">ສາຂານະຄອນຫຼວງ</span>
         </a>
       </li>
       <li>
        <a href="/branch/north">
<i class="far fa-building"></i>
         <span class="sidebar-menu">ສາຂາພາກເໜືອ</span>
       </a>
     </li>
     <li>
      <a href="/branch/central">
<i class="far fa-building"></i>
        <span class="sidebar-menu">ສາຂາພາກກາງ</span>
      </a>
    </li>
    <li>
      <a href="/branch/south">
<i class="far fa-building"></i>
        <span class="sidebar-menu">ສາຂາພາກໃຕ້</span>
      </a>
    </li>
    <li>
      <a href="/price">
       <i class="fas fa-money-check-alt"></i>
       <span class="sidebar-menu">ຄ່າບໍລິການ</span>
     </a>
   </li>
       <li>
      <a href="/news">
       <i class="fas fa-rss"></i>
       <span class="sidebar-menu">ຂ່າວສານ</span>
     </a>
   </li>
   <li>
     <a href="/policy" active-class="active" exact>
       <i class="fas fa-exclamation-triangle"></i>
        <span class="sidebar-menu">ຂໍ້ກຳນົດ</span>
     </a>
   </li>
 <li>
  <a href="/contact">
    <i class="fa fa-phone"></i>
    <span class="sidebar-menu">ຕິດຕໍ່ພວກເຮົາ</span>
  </a>
</li>
   <li>
    <a href="/about">
<i class="fas fa-info-circle"></i>
     <span class="sidebar-menu">ກ່ຽວກັບພວກເຮົາ</span>
   </a>
 </li>
</template>
</ul>
</section>
</div>
</div>
  </div>
</template>
<script>
export default {
  data(){
      return {
        isActive: '',
        showApp: false,
        showNav:false,
      }
    },
      methods: {
    showNavbar(){
      this.showNav = !this.showNav;
    },
    hideNavbar(){
     this.showNav = !this.showNav;
     this.showApp = !this.showApp;
   },
}
}
</script>
<style scoped>
.showNav{
  transition: all 0.8s ease-in-out;
  -webkit-transform: translateX(0) !important;
  transform: translateX(0) !important;
  -webkit-overflow-scrolling: touch;
  will-change: transform;
  -webkit-transition: -webkit-transform 233ms cubic-bezier(0, 0, .21, 1);
  transition: -webkit-transform 233ms cubic-bezier(0, 0, .21, 1);
  transition: transform 233ms cubic-bezier(0, 0, .21, 1);
  transition: transform 233ms cubic-bezier(0, 0, .21, 1), -webkit-transform 233ms cubic-bezier(0, 0, .21, 1);
  display: block;
}
.sidebar{
  display: none;
}
.mainNav.is-fixed-top {
  -webkit-box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);
}

@media only screen and (max-width: 1024px) {
  .topNav {
    display: none;
  }

  .logoImage {
    padding: 4px 0;
  }

  .mainNav.is-fixed-top {
    position: fixed;
    top: 0;
    height: 60px;
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);
  }
}





li.is-active {
  background-color: #ECECEC !important;
}

.sidebar {
  position: fixed !important;
  top: 0;
  max-height: 100vh !important;
  height: 100vh;
  max-width: 80vw !important;
  background-color: #efefef;
  min-width: 45px !important;
  outline: none;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  z-index: 10000;
  -webkit-overflow-scrolling: touch;
  will-change: transform;
  -webkit-transition: -webkit-transform 233ms cubic-bezier(0, 0, .21, 1);
  transition: -webkit-transform 233ms cubic-bezier(0, 0, .21, 1);
  transition: transform 233ms cubic-bezier(0, 0, .21, 1);
  transition: transform 233ms cubic-bezier(0, 0, .21, 1), -webkit-transform 233ms cubic-bezier(0, 0, .21, 1);
  display: inline-block;
}

.sidebar.left-side {
  left: 0 !important;
  -webkit-transform: translateX(-100%) !important;
  transform: translateX(-100%) !important;
}

.sidebar.open {
  -webkit-transform: translateX(0) !important;
  transform: translateX(0) !important;
}

.my-sidebar-drawer-loginInfo {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  overflow: hidden;
  /* background-image: linear-gradient(to bottom right, #ed1424, #ed1f24); */
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 4px solid rgb(242, 242, 242);
    padding: 5px
}

.my-sidebar-drawer {
  width: 100%;
  height: 100%;
  -overflow-scrolling: touch;
}

/** box */
.sidebar-drawer-box {
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  color: #555;
}

.sidebar-drawer-box li {
  position: relative;
  /* height: 48px; */
  overflow: hidden;
    font-size: 20px;
    font-family: superstore;
    line-height: 40px;
    cursor: pointer;
    color: rgb(18, 18, 18);
    padding: 4px 0px;
    border-bottom: 1px solid rgb(242, 242, 242);
}

.sidebar-drawer-box li a {
  display: block;
  margin-left: 20px;
  font-size: 18px;
   color: rgb(18, 18, 18);
}

.sidebar-drawer-box li span {
  font-weight: 600;
  color: #3A3E4A;
}

.sidebar-drawer-box li .sidebar-icon-md {
  padding: 10px 16px 10px 16px;
  margin-right: 16px;
  float: left;
  font-size: 26px !important;
  color: #898B92;
  min-width: 56px;
  max-width: 56px;
}

.sidebar-icon-md {
  position: relative;
  display: inline-block;
  font-size: 16px !important;
  line-height: 1;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: .2px;
  -moz-osx-font-smoothing: grayscale;
}

/** box */
/* .my-sidebar-drawer-loginInfo .sidebar-container {
  width: 100px;
  height: 100px;
  padding: 16px;
 border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
    text-align: 35%;
} */
.sidebar-containers{
  width: 60px;
    height: 60px;
    margin: 0px auto;
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(227, 227, 227);
    border-image: initial;
    overflow: hidden;
}
.my-sidebar-drawer-loginInfo .sidebar-container img {
  display: block;
 border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.i-sidebar-content-layout-size-defined .i-sidebar-content-fill-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.i-sidebar-content-fill-content {
  display: block;
  height: 0;
  max-height: 100%;
  max-width: 100%;
  min-height: 100%;
  min-width: 100%;
  width: 0;
  margin: auto;
}

.i-sidebar-content-replaced-content, .i-sidebar-content-screen-reader {
  padding: 0 !important;
  border: none !important;
}

.my-sidebar-drawer-loginInfo .drawer-unlogin {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding: 2px 16px 16px;
  white-space: nowrap;
  font-size: 15px;
  line-height: 1.2;
  color: #fff;
  text-align: center;
}

.my-sidebar-drawer-loginInfo .drawer-seeker {
  display: inline-block;
  padding: 0 6px 0 0;
  font-size: 15px;
  line-height: 1.2;
  /*border-right: solid 1px #fff;*/
  color: #fe6d43;
}

.my-sidebar-drawer-loginInfo .drawer-employer {
  display: inline-block;
  padding-left: 2px;
  font-size: 15px;
  line-height: 1.2;
  color: #fff;
}

#ms-sidebar {
  background: rgb(255, 255, 255);
  width: 70%;
  height: 100%;
}

.sidebar-mask {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  opacity: 0.2;
  background-image: none !important;
  background-color: #000;
  z-index: 9999;
}

.sidebar-mask.left-side {
  display: none;
}

.ine-bottom {
  border-bottom: 1px solid #ffffff !important;
}

.line-bottom-blue {
  border-bottom: 1px solid #004FCE !important;
}

.line-bottom-green {
  border-bottom: 1px solid #00D29D !important;
}

.sidebar-drawer-box + .sidebar-drawer-box {
  border-top: 1px solid #EBEBEC;
}
.sidebar-drawer-box .sidebar-menu{
  padding-left: 10px;

}
.navbar-item img{
  height: 40px;
  width: 40px;
  max-height: 40px !important;
}
  .icon {
    width: 50px;
    height: 50px;
}

@media screen and (max-width: 366px) {
  .my-sidebar-drawer-loginInfo .drawer-seeker, .my-sidebar-drawer-loginInfo .drawer-employer {
    font-size: 14.2px;
  }
}

</style>