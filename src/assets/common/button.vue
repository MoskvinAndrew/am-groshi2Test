<template>
  <div class="buttonCustom" v-bind:class='className' @click.prevent="onClickHandler">

    <span>{{ buttonName }}</span>

  </div>
</template>

<script>


export default {
  name: 'Button',

  props: {
    buttonName: {
      type: String,
      default: 'Press'
    },

    isDisabled: {
      type: Boolean,
      default: false
    },
    errorType: {
      type: Boolean,
      default: false
    },
    successType: {
      type: Boolean,
      default: false
    },
    smallType: {
      type: Boolean,
      default: false
    },
    bigButtonYellow:{
       type: Boolean,
      default: false
    },
    bigButton:{
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickHandler() {
      this.$emit('clickHappened')
    }
  },
  computed: {
    className() {
      return {
        "buttonWrapper_disabled": this.isDisabled,
        "buttonWrapper_success": this.successType,
        "buttonWrapper_error": this.errorType,
        "smallType": this.smallType,
        "bigButton":this.bigButton,
        "bigButtonYellow":this.bigButtonYellow

      }

    }
  }

}
</script>
<style scoped>
.ButtonWrapper {
  max-width: 120px;
  margin: 0 auto;
}

.buttonCustom {
  color: #ffffff;
  font-size: 15px;
  font-family: 'Montserrat', Arial, sans-serif;
  line-height: 1.55;
  font-weight: 600;
  border-radius: 5px;
  background-color: #009efa;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  cursor: pointer;
}

.buttonCustom:hover {
  opacity: 0.7;
  border-radius: 5px;

}

.buttonWrapper_disabled {
  pointer-events: none;
  background-color: #3d3b3b;
  border-radius: 5px;
}

.buttonWrapper_success {
  background-color: #00ea90;
  border-radius: 5px;
}

.buttonWrapper_error {
  background-color: #f30d65;
  border-radius: 5px;
}

.smallRedType {
  max-height: 20px;
  height: 100%;
  max-width: 120px;
  width: 100%;
  margin: 0 auto;
  background-color: #f30d65;
  border-radius: 5px;
}
.bigButtonYellow{
  max-height: 40px;
  height: 100%;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffd600;
  border-radius: 5px;
  color:black;
}
.bigButton{  max-height: 40px;
  height: 100%;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  background-color: #2bb3e5;
  border-radius: 5px;
  color:black;
}

</style>
