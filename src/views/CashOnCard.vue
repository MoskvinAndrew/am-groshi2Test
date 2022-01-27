<template>
  <div>
    <HeaderTop></HeaderTop>
    <Header></Header>
    <div id="CashOnCard">
      <div id="blocksWrapper">


        <div class='cashNaKartyContainer'>
          <div id='cashNaKartyTitleTop'>Заповни анкету та отримай</div>
          <div id="cashNaKarty">
            <span id="cashNaKarty_Title">CASH НА КАРТКУ</span>
            <Button  @clickHappened="toogleModal" buttonName="заповнити анкету"></Button>
          </div>
        </div>

        <Modal v-if="isVisible" @toogleClose="toogleModal"></Modal>


        <div class="currentCardInfoWrapper">
          <div id='currentCardInfoTitle'>Діючі продукти</div>
          <div id="currentCardInfo">
            <span id="currentCand_Title">Cash на картку!</span>
            <div class='loanInfoBlockWrapper'>
              <div class='loanInfoWrapper'>
                <div class="infoBlock">
                  <span class="currentCardBlock">0000935303</span>
                  <span class="currentCardBlock_title">номер заявки</span>
                </div>
                <div class="infoBlock">
                  <span class="currentCardBlock">22.01.2022</span>
                  <span class="currentCardBlock_title">дата</span>
                </div>
                <div class="infoBlock">
                  <span class="currentCardBlock">24</span>
                  <span class="currentCardBlock_title">срок</span>
                </div>
              </div>
              <div class="loanInfoWrapper">
                <div class="infoBlock">
                  <span class="currentCardBlock" id="quontityMoney">10000</span>
                  <span class="currentCardBlock_title">сума кредиту</span>
                </div>
                <div class="infoBlock">
                  <span class="currentCardBlock" id="status">NEW</span>
                  <span class="currentCardBlock_title">статус</span>
                </div>
              </div>
            </div>
          </div>
          <div class='bankInfoBottom'>
            <AddCardBlock></AddCardBlock>
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
import Modal from "@/components/modal";
import AddCardBlock from "../components/addCard";
import YouCardsBlock from "../components/cardInfo"
import Footer from "../components/Footer";
import FooterLinks from "../components/FooterLinks";
import Header from "../components/Header";
import HeaderTop from "../components/HeaderTop";

export default {
  name: 'CashOnCard',
  components: {
    AddCardBlock, Modal,
    Button, YouCardsBlock,
    Footer, FooterLinks,
    Header, HeaderTop
  },
  data: () => ({
    isVisible: false
  }),

  methods: {
    toogleModal() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>
<style scoped>
#CashOnCard {
  background-color: #3d3b3b;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

#blocksWrapper {
  display: flex;
  justify-content: space-around;
}

#cashNaKarty {
  background-color: #d43149;
  max-width: 250px;
  width: 100%;
  border-radius: 10px;
  text-align: center;
  padding: 25px;
  margin-right: 50px;
  margin-top: 20px;
}

.cashNaKartyContainer {
  display: flex;
  flex-direction: column;
}

#cashNaKarty_Title {
  color: #ffffff;
  font-size: 20px;
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1;
  font-weight: 600;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
}

#cashNaKartyTitleTop {
  color: #d43149;
  font-size: 20px;
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1;
  font-weight: 500;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  position: relative;
  display: flex;
  flex-direction: column;


}

#cashNaKartyTitleTop::before {
  content: url(https://static.tildacdn.com/tild3966-3733-4131-b233-396530396435/image33.svg);
  width: 50px;
  position: absolute;
  top: 30px;
  left: -50px;
}


.currentCardInfoWrapper {
  display: flex;
  max-width: 950px;
  width: 100%;
  flex-wrap: wrap;

}

#currentCardInfo {
  background-color: #ffd600;
  border-radius: 10px;
  max-width: 900px;
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
}

.loanInfoBlockWrapper {
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  float: right;
}

.loanInfoWrapper {
  display: flex;
  justify-content: space-between;
}

#currentCand_Title {
  margin-right: 20px;
  color: #d43149;
  font-size: 20px;
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1;
  font-weight: 600;
  background-position: center center;
  border-color: transparent;
  border-style: solid;

}


#currentCardInfoTitle {
  color: #ffffff;
  font-size: 20px;
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1;
  font-weight: 500;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  position: relative;
}

#currentCardInfoTitle::before {
  content: url(https://static.tildacdn.com/tild3966-3733-4131-b233-396530396435/image33.svg);
  width: 50px;
  position: absolute;
  top: 30px;
  left: -50px;
}

.infoBlock {
  display: flex;
  flex-direction: column;
  align-items: center;


}

.currentCardBlock {
  padding: 5px 25px 5px 25px;
  color: #ffffff;
  font-size: 15px;
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1.55;
  font-weight: 600;
  border-width: 3px;
  border-radius: 5px;
  background-color: #009efa;
  background-position: center center;

}

.currentCardBlock_title {
  color: #1f1f1f;
  font-size: 12px;
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1;
  font-weight: 600;
  background-position: center center;

}


#quontityMoney {
  background-color: #12b422;
  padding: 5px 85px 5px 85px;
}

#status {
  background-color: #d43149;
  padding: 5px 85px 5px 85px;
}

.bankInfoBottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

</style>
