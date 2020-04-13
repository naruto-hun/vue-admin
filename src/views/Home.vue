<template>
  <div>
    管理员：{{adminName}} <span @click="logout">[退出]</span>
  </div>
</template>

<script>
  export default {
    computed:{
      adminName(){
        return sessionStorage.getItem('admin')
      }
    },
    methods:{
      logout(){
        sessionStorage.clear()
        this.$router.replace('/login')
      }
    }
  }
</script>

<style scoped>

</style>
