<template>
  <div class="HeaderTop" id="headerTopContainer">
    <ul>
      <router-link tag="li" to="/CashOnCard" exact active-class="active">
        <a href="/CashOnCard">CASH НА КАРТКУ</a>
      </router-link>
      <router-link tag="li" to="/" exact active-class="active">
        <a href="#">TRAVEL MONEY</a>
      </router-link>
      <router-link tag="li" to="/BankCards" exact active-class="active">
        <a href="/BankCards">ТВОЇ БАНКІВСЬКІ КАРТКИ</a>
      </router-link>
      <router-link tag="li" to="/" exact active-class="active">
        <a href="#">ТВОЇ ДОКУМЕНТИ</a>
      </router-link>
      </ul>
    </div>
</template>

<script>

export default {
  name: 'HeaderTop',
  props: {},
  components: {}
}
</script>

<style scoped>

#headerTopContainer{
  background-color: #0a0505;
  height: 50px;
  position: fixed;
  width: 100%;
  top:0;

}

li{
  list-style-type: none;
  text-decoration: none;

}
a{
  text-decoration: none;
  color: aliceblue;
}
ul{
  display: flex;
  justify-content: space-around;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  margin-top: 15px;
}

</style>


