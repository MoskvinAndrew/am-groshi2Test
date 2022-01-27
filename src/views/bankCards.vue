<template>

  <div>
    <HeaderTop></HeaderTop>
    <Header></Header>
  <div id="BankCards">
    <div class="itemContainer">
      <div class="contentBlockWrapper">

        <div class = 'cardContainer'>
          <span class="title">Додати банківську картку</span>
          <AddCardBlock class="addCCardBlock"></AddCardBlock>
        </div>

       <div class = 'cardContainer'>
         <span class="title">Твої банківські картки</span>
         <YouCardsBlock></YouCardsBlock>
       </div>

      </div>
    </div>
  </div>
    <FooterLinks></FooterLinks>
    <Footer></Footer>
  </div>
</template>

<script>
import Button from "@/assets/common/button";
import AddCardBlock from "../components/addCard.vue"
import YouCardsBlock from "../components/cardInfo.vue"
import Footer from "../components/Footer";
import Header from "../components/Header";
import FooterLinks from "../components/FooterLinks";
import HeaderTop from "../components/HeaderTop";
export default {

  name: 'BankCards',
  props: {},
  components: {
    Button,
    AddCardBlock,
    YouCardsBlock,
    Header,
    HeaderTop,
    Footer,
    FooterLinks
  },
}
</script>
<style scoped>
#BankCards{
  background-color: #3d3b3b;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;

}
.itemContainer{
  height: 100%;
  max-width: 1400px;
  width: 100%;
  align-self: center;
}
.title{
  display: inline-block;
  color: #bfbfbf;
  font-size: 20px;
  font-family: 'Montserrat',Arial,sans-serif;
  line-height: 1;
  font-weight: 700;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  margin-bottom: 20px;
  position: relative;
}
.contentBlockWrapper{
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.cardContainer{
  display: flex;
  flex-wrap: wrap;
}


.title::before{
  position: absolute;
  content: url("https://static.tildacdn.com/tild3966-3733-4131-b233-396530396435/image33.svg");
  width: 40px;
  top:20px;
  left:-40px;
}


</style>
