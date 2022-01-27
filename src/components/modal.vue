<template>

  <div class='modalWindow'>
    <div class="modalWindow_Inner">
      <div class='commonModaleTitle'>
        <h1 class="titleTop">Cash на картку!</h1>
        <span id='pageCounter'>{{ currentPage }}/5</span>
      </div>


      <div v-if='currentPage === 1'>
        <h2 class="titleBottom">Дані про кредит</h2>
        <h5 class='creditSize'>Сума кредиту</h5>
        <form @submit.prevent=onSubmit class='float-label-field'>
          <label v-if="labelState" for="txtName">Вкажіть бажану сумму</label>
          <input v-on:click="inputClick" v-model="digit" id="txtName" type='text'>
        </form>
      </div>

      <div v-if='currentPage === 2'>
        <h2 class="titleBottom">Дані про кредит</h2>
        <h5 class='creditSize'>Срок кредиту</h5>
        <form @submit.prevent=onSubmit class='float-label-field'>
          <label v-if="labelState" for="txtPeriod">Вкажіть срок кредиту, місяців</label>
          <input v-on:click="inputClick" v-model="period" id="txtPeriod" type='text'>
        </form>
      </div>


      <div v-if='currentPage === 3'>
        <h2 class="titleBottom">Персональні данні</h2>
        <h5 class='creditSize'>Вкажіть дату народження</h5>
        <form @submit.prevent=onSubmit class='float-label-field'>
          <input v-on:change="onSubmit" v-on:click="inputClick" v-model="DateOfBirdth" id="txtDateofBirdth" type='date'>
        </form>
      </div>


      <div v-if='currentPage === 4'>
        <h2 class="titleBottom">Персональні данні</h2>
        <h5 class='creditSize'>Вкажіть дату народження</h5>

        <form @submit.prevent=onSubmit action="#">
          <p>
            <input type="radio" id="test1" name="radio-group" checked v-model="gender" >
            <label for="test1">Чоловіча</label>
          </p>
          <p>
            <input type="radio" id="test2" name="radio-group" v-model="gender">
            <label for="test2">Жіноча</label>
          </p>
        </form>

      </div>


      <div v-if='currentPage === 5'>
        <h2 class="titleBottom">Персональні данні</h2>
        <h5 class='creditSize'>Вкажіть ваш email</h5>
        <form @submit.prevent=onSubmit class='float-label-field'>
          <label v-if="labelState" for="email">Вкажіть срок кредиту, місяців</label>
          <input v-on:change="onSubmit" v-on:click="inputClick" v-model="email" id="email" type='text'>
        </form>
      </div>


      <div class="buttonsContain">
        <Button v-if="currentPage !== 1" buttonName='Назад' @clickHappened=slideButtonClickedBack></Button>
        <Button v-if="currentPage === 1" buttonName='Назад' isDisabled=true
                @clickHappened=slideButtonClickedBack></Button>

        <Button v-if="!isFinal" buttonName='Далі' @clickHappened=slideButtonClickedAhead></Button>
        <Button v-if="isFinal" buttonName='Завершити' successType=true @clickHappened=closeModalHandler></Button>
      </div>

    </div>

    <div @click.prevent="toogleClose" class="overlay"></div>

  </div>
</template>
<script>
import Button from "@/assets/common/button";

export default {
  name: 'modal',
  props: {
    title: {type: String},
  },
  data: () => ({
    currentPage: 1,
    labelState: true,
    period: '',
    digit: null,
    isFinal: false,
    DateOfBirdth: null,
    email: '',
    gender: 'male'


  }),
  methods: {
    toogleClose() {
      this.$emit('toogleClose')
    },
    closeModalHandler() {
      this.$emit('toogleClose');
      console.log({
        period: this.period,
        money: this.digit,
        DateOfBirdth: this.DateOfBirdth,
        email: this.email,
        gender: this.gender
      })

    },
    slideButtonClickedAhead() {
      if (this.currentPage === 4) {                       // состояние при котором меняется кнопка "Далее" в модалке
        this.isFinal = true
      }
      if (this.currentPage <= 5) {
        this.currentPage = this.currentPage +1            //листает страницы вперед
      }

    },
    slideButtonClickedBack() {
      this.currentPage = this.currentPage - 1              //листает страницы назад
    },
    onSubmit() {
    },
    inputClick() {
      if (!this.digit) {                                    //следит за состоянием лейбла у инпута
        this.labelState = !this.labelState
      }
    }
  },
  components: {Button}

}

</script>
<style scoped>

.modalWindow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 2s;
}

.overlay {
  position: fixed;
  background-color: black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  z-index: 0;

}

.modalWindow_Inner {
  position: relative;
  z-index: 20;
  color: #6e3f3f;
  width: 550px;
  border-radius: 10px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, .4);
  background-color: #f1e5e5;
  padding: 30px;
}

.titleTop {
  position: relative;
  color: #1f1f1f;
  font-size: 20px;
  font-family: "Montserrat";
  line-height: 1.55;
  font-weight: 300;

}

.titleBottom {
  max-width: 300px;
  width: 100%;
  color: #1f1f1f;
  font-size: 20px;
  font-family: "Montserrat";
  line-height: 1.55;
}

#pageCounter {
  margin-top: 20px;
  color: #1f1f1f;
  font-size: 20px;
  font-family: 'Montserrat';
  font-weight: 700;
}

.creditSize {
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 300;
  color: #000;
  font-size: 14px;
  line-height: 1.55;
  opacity: .7;
}

.goAheadButton {

}

.goAheadButton:hover {
  background-color: #00ea90;
}

.commonModaleTitle {
  display: flex;
  justify-content: space-between;
}

.buttonsContain {
  display: flex;
  justify-content: space-between;

}


.float-label-field {
  border: none;
  outline: none;
  position: relative;
  margin: 0 0 20px 0;
  padding: 0;
  box-sizing: border-box;
}

.float-label-field input {
  border: none;
  outline: none;
  padding: 5px 5px 8px 0px;
  width: 100%;
  font-size: 18px;
  border-bottom: solid 1px #efefef;
}

.float-label-field label {
  opacity: 0.5;
  position: absolute;
  top: 10px;
  left: 0px;
  transition: all 0.2s ease;
  font-size: 18px;
}

.lastClick {
  background-color: #00ea90;
}
</style>
