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

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getToken () {
        Axios.get('http://localhost:3000/'
        ).then(({data}) => {
          this.msg = data;
          this.$cookie.set('token', data, '1D')
          console.log(data);
        }).catch(error => {
          console.log(error)
        })
      },

    getValue () {
        let token = this.$cookie.get('token')
        Axios.post('http://localhost:3000/value',
        {params: { token: this.$cookie.get('token') }}
        ).then(({data}) => {
          this.msg = data;
          console.log(data);
        }).catch(error => {
          console.log(error)
        })
      },

      getAllProducts () {
        Axios.get('http://localhost:3000/allproducts'
        ).then(({data}) => {
          this.msg = data;
          console.log(data);
        }).catch(error => {
          console.log(error)
        })
      },

      getProductById () {
        Axios.get('http://localhost:3000/productbyid'
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
