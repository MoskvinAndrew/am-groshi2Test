<template>
  <div class="RegistrationPage">
    <div class='containerContant'>

      <div class='logoTitleWrapper'>
        <div class="imgWrapper">
          <img src="https://static.tildacdn.com/tild3161-6536-4732-b839-663935383566/shutterstock_1119953.png"/>
        </div>
        <div class="titleWrapper">
                 <span>«Сучасний Факторинг»
                  — простий крок до мрії!
                 </span>
        </div>
      </div>

      <div class="buttonsWrapper">
        <div class="buttonsWrapper_Container">
          <div class="ButtonsWrapper_inner">

            <VuePhoneNumberInput v-model="inputPhoneValue"
                                 color="blue"
                                 default-country-code="UA">

            </VuePhoneNumberInput>

            <Button @clickHappened="registrationButtonHandler"
                    buttonName='ПРОДОВЖИТИ'
                    bigButton=true>
            </Button>

            <Button buttonName='Увійти за допомогою id.gov.ua'
                    bigButtonYellow=true>
            </Button>


          </div>
        </div>
      </div>
      <div class="Footer">
        <div class="footerElement">Нажимаючи Продовжити Я погоджуюсь
                                    на обробку моїх персональних даних
        </div>
        <div class="footerElement">Підтримка 0 800 000 000</div>
      </div>
    </div>
  </div>
</template>
<script>

import VuePhoneNumberInput from 'vue-phone-number-input';
import Button from "../../assets/common/button"
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import router from "../../router";

export default {
  name: 'RegistrationPage',
  components: {VuePhoneNumberInput, Button},
props:{
  bigButtonYellow:true
},
  data: () => ({
    inputPhoneValue: null,
  }),
  methods: {
    registrationButtonHandler(){
      router.push('/')
    }
  },

}
</script>
<style scoped>
.RegistrationPage {
  background-color: #212121;
  display: flex;
  max-height: 900px;
  min-height: 800px;
  justify-content: center;
  flex-wrap: wrap;
}

.containerContant {
  max-width: 700px;
  width: 100%;
}

.logoTitleWrapper {
  display: flex;
  margin-top: 100px;
}
img {
  width: 100%;
}
.imgWrapper {
  width: 50%;
  padding: 40px 40px;
}
.titleWrapper {
  width: 50%;
  color: #ffffff;
  font-size: 20px;
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1;
  font-weight: 600;
  background-position: center center;
  display: flex;
  justify-content: center;
  padding: 20px 20px;
  align-items: center;
}
.buttonsWrapper {
  background-color: #3b3b3b;
  border-radius: 10px;
  width: 100%;
  max-height: 400px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
.buttonsWrapper::before {
  content: "Твій номер мобільного телефону";
  position: absolute;
  top: 30px;
  left: 30px;
  color: #11bd22;
  font-size: 20px;
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1;
  font-weight: 700;
  background-position: center center;
  border-color: transparent;
  border-style: solid;

}
.buttonsWrapper::after {
  content: url("https://static.tildacdn.com/tild3966-3733-4131-b233-396530396435/image33.svg");
  position: absolute;
  width: 45px;
  top: 68px;
  left: 30px;
}
.buttonsWrapper_Container {
  max-width: 70%;
  width: 100%;
  display: flex;
  justify-content: end;
  flex-direction: column;
}
input {
  border-radius: 3px;
  height: 50px;
  width: 90%;
}
.ButtonsWrapper_inner {
  max-height: 60%;
  height: 100%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.Footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-height: 150px;
  text-align: center;
  color: white;
}
.footerElement {
  margin-top: 20px;
  font-size: 14px;
}
</style>
