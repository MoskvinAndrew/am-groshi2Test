<template>
  <div id="footerContainer">
    <div id="footerInner">
      <img src="https://static.tildacdn.com/tild6336-6238-4161-a662-666332383062/shutterstock_1119953.png"/>
      <p class="footerText">
        © 2021. Всі права захищені | Created D3D.studio
      </p>
      <p class="footerText">ТОВ «Сучасний факторинг»- Свідоцтво №13102578 ФК №270 про реєстрацію фінансової установи,
        видане Нацкомфінпослуг 20.01.2011 р.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {},
  components: {}
}
</script>

<style scoped>

#footerContainer {
  height: 130px;
  display: flex;
  background-color: #100d0d;
  padding: 0px 30px 0px 30px;
  justify-content:center;
  align-items: center;
}
#footerInner {
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
}
img {
  height: 30%;
  align-self: center;
  padding-right: 10px;

  margin-top: 10px;
}
.footerText{
  color: #7e7b7b;
  font-size: small;
  text-align: center;
}
</style>
