<template>
  <div id="bodyContainer">
    <div id="itemContainer">
    <BodyItem redirectLink = 'CashOnCard' colorCoral = true  title='CASH НА КАРТКУ' ></BodyItem>
    <BodyItem title='TRAVEL MONEY' ></BodyItem>
    <BodyItem redirectLink = 'BankCards' colorLightGrey = true title='ТВОЇ БАНКІВСЬКІ КАРТКИ ' ></BodyItem>
    <BodyItem colorDarkGrey = true title='ТВОЇ ДОКУМЕНТИ' ></BodyItem>
    </div>
  </div>
</template>

<script>

import BodyItem from '@/components/BodyItem'

export default {
  name: 'Body',
  props: {},
  components: {
    BodyItem
  }
}
</script>
<style scoped>
#bodyContainer{
  background-color: #212020;
  display: flex;
  align-items: end;
  justify-content: center;
  height: 100%;

}
#itemContainer{
  display: flex;
  justify-content: space-around;
  max-width:45%;
  flex-wrap: wrap;
  padding: 20px;
  }
</style>
