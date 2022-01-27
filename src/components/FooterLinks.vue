<template>
  <div class="FooterLinks" id="FooterLinksContainer">
    <ul>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">TRAVEL MONEY</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">ТВОЇ БАНКІВСЬКІ КАРТКИ</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">ТВОЇ ДОКУМЕНТИ</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'FooterLinks',
  props: {},
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#FooterLinksContainer{
  background-color: #1c1919;
  height: 50px;
  display: flex;
  justify-content: center;
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

}

</style>
