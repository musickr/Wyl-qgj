<template>
  
</template>

<script>
import Cookies from "js-cookie";
import Router from 'vue-router';
import router from '@/router';


export default {
  name: 'AfficialAccount',
  data () {
    return {
      
    }
  },
  methods:{
    GetQueryString:(name)=>{
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
      return r!=null ?  unescape(r[2]) :  null;
    }
  },
  created(){
    //是否是微信的回调
    let code = this.GetQueryString('code')
    if(code){
      this.$api.token(code)
      .then(res => {
        Cookies.set('markToken',res.data.token)
      })
      .catch(error => {
        console.log(error)
      })
    }else{
      //发起微信回调的请求
      this.$api.getCode()
      .then(res => {
            console.log(res)
            window.location.href = res.data.url
          })
      .catch(error => {
            console.log(error)
          })
    }
    
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
