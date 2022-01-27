<template>
  <div class='AddCardBlock'>
    <span class="addCardTitle">Банківські картки</span>
    <Button errorType = true  buttonName="Додати"></Button>
    <img src = "https://static.tildacdn.com/tild3464-6166-4463-a436-343035623264/1280px-Visa_2014_log.png" class="visaLogo"/>
    <img src = "https://static.tildacdn.com/tild6262-3361-4434-b664-313231613139/mastercard_hrz_pos_3.png" class="masterCardLogo"/>
  </div>
</template>

<script>
import Button from "@/assets/common/button";

export default {
  name: 'AddCardBlock',
  props: {},
  components: {Button},
}
</script>


<style scoped>
.AddCardBlock{
  background-color: #bfbfbf;
  max-width: 250px;
  width: 100%;
  border-radius: 10px;
  text-align: center;
  padding: 25px;
  margin-right: 20px;
  position: relative;
}
.visaLogo{
  position: absolute;
  width: 30px;
  bottom: 6px;
}
.masterCardLogo{
  position: absolute;
  width: 80px;
  bottom: 0px;
  right: 0px;
}
.addCardTitle {
  color: #d43149;
  font-size: 25px;
  font-family: 'Montserrat',Arial,sans-serif;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  line-height: 1.55;
  font-weight: 600;
}
</style>
