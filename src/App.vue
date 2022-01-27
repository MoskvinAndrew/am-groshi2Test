<template>
  <div id="app">
    <div id='routerContent'>
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;

}

#routerContent {
  height: 100%;
}


</style>
<script>


import HeaderTop from "@/components/HeaderTop";
import Header from "@/components/Header";
import FooterLinks from "@/components/FooterLinks";
import Footer from "@/components/Footer";

import {mapGetters, mapActions} from "vuex";



export default {
  components: {Footer, FooterLinks, Header, HeaderTop},
  computed: mapGetters(['isAuth']),
  methods: mapActions(['isAuthRequest']),


}


</script>
