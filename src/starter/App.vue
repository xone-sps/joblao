<template>
  <div id="app">
  <Header/>
  <div id="app-content">
<router-view></router-view>
  </div>
    
  <Footer/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Header from '@/components/Partial/Navbar'
import Footer from '@/components/Partial/Footer'
// import Footer from '@/components/Partial/Sidebar'
export default {
  name: 'app',
    computed: {
            ...mapState(['isMobile']),
        },
          methods: {
            // ...mapMutations(['setMobile']),
            // ...mapActions(['fetchHomeData', 'fetchAuthUserInfo']),
        },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body{
  padding: 0;
  margin:0;
}
</style>
