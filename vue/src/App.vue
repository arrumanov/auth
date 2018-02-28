<template>
  <div id="app">
    <div>{{msg}}</div>
    <input type="button" v-on:click="getToken" value="GetToken"/>
    <input type="button" v-on:click="getValue" value="GetValue"/>
    <input type="button" v-on:click="getAllProducts" value="GetAllProducts"/>
    <input type="button" v-on:click="getProductById" value="GetProductById"/>
  </div>
</template>

<script>
import Axios from 'axios'

const MAIN_URL = "http://localhost:3000";

var getToken = function(context){
  return context.$cookie.get('token');
}

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getToken () {
        Axios.get(`${MAIN_URL}/`
        ).then(({data}) => {
          this.msg = data;
          this.$cookie.set('token', data, '1D')
          console.log(data);
        }).catch(error => {
          console.log(error)
        })
      },

    getValue () {
        let token = getToken(this);
        Axios.post(`${MAIN_URL}/value`, {token: token}
        ).then(({data}) => {
          this.msg = data;
          console.log(data);
        }).catch(error => {
          console.log(error)
        })
      },

      getAllProducts () {
        let token = getToken(this);
        Axios.post(`${MAIN_URL}/allproducts`, {token: token}
        ).then(({data}) => {
          this.msg = data;
          console.log(data);
        }).catch(error => {
          console.log(error)
        })
      },

      getProductById () {
        let token = getToken(this);
        Axios.post(`${MAIN_URL}/productbyid`, {token: token}
        ).then(({data}) => {
          this.msg = data;
          console.log(data);
        }).catch(error => {
          console.log(error)
        })
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c2e50;
  margin-top: 60px;
}
</style>
