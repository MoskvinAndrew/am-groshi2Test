<template>
  <div class="Home">
    <HeaderTop></HeaderTop>
    <Header></Header>
    <Body></Body>
    <FooterLinks></FooterLinks>
    <Footer></Footer>
  </div>
</template>

<script>
import Body from "../components/Body.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import HeaderTop from "../components/HeaderTop.vue";
import FooterLinks from "../components/FooterLinks.vue"
import router from "../router";
import {mapActions, mapGetters} from "vuex";


export default {
  name: 'Home',
  components: {Footer, FooterLinks, Header, HeaderTop,Body},
  computed: mapGetters(['isAuth']),
  methods: mapActions(['isAuthRequest']),
  mounted() {
    if (this.isAuth === false) {                              //редирект если не залогинен
      router.push('/login');
      this.isAuthRequest();                                    //вызов асинхронного экшена для логинизации
    }
  }
}
</script>
