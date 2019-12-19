<template>
  <div id="app">
  <Header/>
    <router-view></router-view>
  <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Partial/Header'
import Footer from '@/components/Partial/Footer'
export default {
  name: 'app',
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
