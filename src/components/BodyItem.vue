<template>
  <div id="bodyItemContainer" v-bind:class = 'className'>
   <h2 id="titleBodyItem">{{title}}</h2>
    <Button @clickHappened="redirectClickHandler" buttonName="ПЕРЕЙТИ" ></Button>
  </div>
</template>

<script>

import Button from "../assets/common/button.vue"
import router from "../router";

export default {
  name: 'BodyItem',
  props: {
    title: {
      type:String,
    },
    redirectLink:" ",
    bodyItem:" ",
    colorBlue:{
      type:Boolean,
      default:true,
    },
    colorCoral:{
      type:Boolean,
      default:false,
    },
    colorLightGrey:{
      type:Boolean,
      default:false,
    },
    colorDarkGrey:{
      type:Boolean,
      default:false
    }
  },
  components: {
    Button
  },
  methods: {
    redirectClickHandler(){
      router.push(`/${this.redirectLink}`);
    }
  },
  computed:{
    className(){
      return{
        "colorBlue" : this.colorBlue,
        "colorCoral" : this.colorCoral,
        "colorLightGrey": this.colorLightGrey,
        "colorDarkGrey" : this.colorDarkGrey

      }

    }
  }
}
</script>

<style scoped>

#titleBodyItem{
  color: #f3f2f2;
}
#buttonBodyItem{
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  background-color: #6f758d;
}
.colorBlue{
  max-width: 250px;
  width: 100%;
  min-width: 200px;
  border-radius: 10px;
  background-color:dodgerblue;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  align-items: center;
  padding: 5px;
}
.colorCoral{
  max-width: 250px;
  width: 100%;
  min-width: 200px;
  border-radius: 10px;
  background-color:#d43149;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  align-items: center;
  padding: 5px;
}
.colorLightGrey{
  max-width: 250px;
  width: 100%;
  min-width: 200px;
  border-radius: 10px;
  background-color:#bfbfbf;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  align-items: center;
  padding: 5px;
  text-align: center;
}
.colorDarkGrey{
  max-width: 250px;
  width: 100%;
  min-width: 200px;
  border-radius: 10px;
  background-color:#3b3b3b;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  align-items: center;
  padding: 5px;
}
</style>
