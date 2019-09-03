<template>
  <ul>
    <li v-for="(user,index) in userList" :key="index">{{ user.name }}</li>
  </ul>
</template>

<script>

//这个时候 vue还没有实例化出来 所以this并不是指向vue对象

// debugger
// this.$api.list(1).then(res => {
//      if (res.rc === 0) {
//           this.pageList = res.data.item
//       } else {
//         this.$Message.info(res.desc);
//       }
//      })
//      .catch(error => {
//         this.$Message.info(error);
//       })
export default {
  name: 'Game',
  data () {
    return {
      userList:[]
    }
  },
  //数据交互一般都是写在这个钩子函数里面 
  beforeCreate(){
    this.$api.game().then(res => {
      this.userList = res.data
     
    //  if (res.rc === 0) {
    //       this.pageList = res.data.item
    //   } else {
    //     this.$Message.info(res.desc);
    //   }
     })
     .catch(error => {
        console.log(error)
        //this.$Message.info(error);
      })
  }, 
  methods:{

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
