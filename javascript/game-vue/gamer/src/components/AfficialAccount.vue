<template>
  
</template>

<script>
import Cookies from "js-cookie";
import Router from 'vue-router'
import router from '@/router'

export default {
  name: 'AfficialAccount',
  data () {
    return {
      
    }
  },
  methods:{
    
  },
  created(){
    this.$api.getCode().then(res => {
      console.log(res)
      window.location.href = res.data.url
      //router.push('/?code=1212121')
    })
    .catch(error => {
      console.log(error)
      //this.$Message.info(error);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
