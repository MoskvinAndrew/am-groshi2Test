<template>
  <div class="YouCardsBlock">
    <div>
      <span class="youCardTitle">Банківські картки</span>
    </div>
    <div class = 'cardsContainer'>
      <div class="cardInfoContainer">
        <div class='cardInfo'>VISA - PRIVAT BANK</div>
        <div class='cardNumber'>Номер: 9999-9999-9999-9999</div>
        <div class='deleteCard'>X</div>
      </div>
      <div class="cardInfoContainer">
        <div class='cardInfo'>VISA - ALFA BANK</div>
        <div class='cardNumber'>Номер: 9999-9999-9999-9999</div>
        <div class='deleteCard'>X</div>
      </div>
      <div id = 'buttonContainer'>
        <Button buttonName ="Додати"></Button>
      </div>
    </div>
  </div>
</template>

<script>

import Button from "../assets/common/button.vue"
export default {

  name: 'YouCardsBlock',
  props: {},
  components: {
    Button
  },
}

</script>

<style scoped>
.YouCardsBlock{
  background-color: #bfbfbf;
  max-width: 900px;
  width: 100%;
  border-radius: 10px;
  text-align: center;
  padding: 10px 20px 10px 20px;
  position: relative;
  display: flex;
  justify-content: space-between;


}

.youCardTitle{
  color: #d43149;
  font-size:17px;
  font-family: 'Montserrat',Arial,sans-serif;
  background-position: center center;
  line-height: 1.55;
  font-weight: 600;
  align-self: flex-start;
  width: 100%;

}
.cardsContainer{
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
}
.cardInfoContainer{
  display: flex;
}
.cardInfo{
  color: #1f1f1f;
  font-size: 15px;
  font-family: 'Montserrat',Arial,sans-serif;
  line-height: 1.55;
  font-weight: 400;
  border-width: 1px;
  border-radius: 5px;
  background-position: center center;
  border-color: #1f1f1f;
  border-style: solid;
  max-width: 180px;
  width: 100%;
  max-height: 30px;
  margin: 5px 5px 5px 5px;
}
.cardNumber{
  color: #ffffff;
  font-size: 13px;
  font-family: 'Montserrat',Arial,sans-serif;
  line-height: 1.55;
  font-weight: 400;
  border-width: 3px;
  border-radius: 5px;
  background-color: #009efa;
  background-position: center center;
  border-color: #009efa;
  border-style: solid;
  max-width: 250px;
  width: 100%;
  max-height: 30px;
  margin: 5px 5px 5px 5px;
}
.deleteCard{
  color: #ffffff;
  font-size: 15px;
  font-family: 'Montserrat',Arial,sans-serif;
  line-height: 1.55;
  font-weight: 500;
  border-width: 3px;
  border-radius: 5px;
  background-color: #d43149;
  background-position: center center;
  border-color: #d43149;
  border-style: solid;
  max-height: 25px;
  max-width: 25px;
  width: 100%;
  margin: 5px 5px 5px 5px;
}
#buttonContainer{
  display: flex;
  justify-content: right;
}
</style>
