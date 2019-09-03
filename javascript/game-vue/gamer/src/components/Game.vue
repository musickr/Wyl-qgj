<template>
  <ul>
    <li v-for="(user,index) in userList" :key="index">{{ user.name }}</li>
  </ul>
</template>

<script>
import Cookies from "js-cookie";
export default {
  name: 'Game',
  data () {
    return {
      userList:[]
    }
  }, 
  methods:{
    /**
     * 获取get参数但在vue hash模式下有问题
     */
    getQueryString:(name) =>{
      var url = window.location.toString();
      var arrObj = url.split("?");
      if (arrObj.length > 1) {
        var arrPara = arrObj[1].split("&");
        var arr;
        for (var i = 0; i < arrPara.length; i++) {
          arr = arrPara[i].split("=");
          if (arr != null && arr[0] == name) {
            return arr[1];
          }
        }
        return "";
      }
      else {
        return "";
      }
    } 
  },
  //数据交互一般都是写在这个钩子函数里面 
  
  created(){
    Cookies.remove();
    //等待微信服务器传送code
    let code = this.getQueryString('code')
    console.log(code)
    if(code)
    {
      this.$api.token(code).then(res => {
        Cookies.set('markToken',res.data.token)
     })
     .catch(error => {
        console.log(error)
        //this.$Message.info(error);
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
