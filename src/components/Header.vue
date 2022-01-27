<template>
  <div id="headerContainer">
    <div id="headerInner">
    <img src="https://static.tildacdn.com/tild6336-6238-4161-a662-666332383062/shutterstock_1119953.png"/>
    <p id="headerInfoBlock">
      Підтримка 0 800 000 000
      ВІТАЄМО, {first_name} {mid_name}
      iD кліента: {id}
      Mail: {mail}
    </p>
    <div id="button"  v-on:click="onExitClickHandler">
      ВИХІД
    </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import {mapMutations} from "vuex";
export default {
  name: 'Header',
  props: {},
  components: {},
  computed:mapMutations(["deleteAuth"]),
   methods:{

    onExitClickHandler(){
      router.push('/login');
      this.deleteAuth()
    }
  }
}
</script>

<style scoped>

#headerContainer {
  height: 130px;
  display: flex;
  background-color: #282727;
  padding:50px 30px 0px 30px;
  justify-content:center;
  align-items: center;

}
#headerInner {
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

img {
  height: 60%;
  align-self: center;
  padding-right: 10px;
}
#headerInfoBlock{
  color:white;
  width: 250px;
}
#button{
  border:1px solid lightgreen;
  color:lightgreen;
  border-radius: 5px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;

}

</style>
