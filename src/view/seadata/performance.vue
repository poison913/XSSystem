<template>
   <div id="contain">
    <iframe :src="src" width="100%" height="99%" frameborder="no" border="0" marginwidth="0" marginheight="0"  ></iframe>
  </div>
</template>

<script> 
export default {
  name: "nitrogen",
  computed: { 
  },
  data() { 
    return{ 
      src:"http://120.55.56.109:8088/XStable/%E8%B1%A1%E5%B1%B1%E6%B8%AF%E9%87%8D%E7%82%B9%E6%B5%81%E5%9F%9F%E2%80%9C2022%E3%80%812025%E7%9B%AE%E6%A0%87%E5%B9%B4%E2%80%9D%E9%A1%B9%E7%9B%AE%E5%B7%A5%E7%A8%8B%E8%A1%A8.htm"
    } 
  }, 
  created() {},
  mounted() { 
  },
  methods: { 
  }
};
</script>

<style scoped  >   
  #contain{
    position: relative;
    width: 100%;
    height: 100%;
    /* background: url("../../assets/404.jpg");
    background-size: 100% 100%; */
    padding: 10px;
    overflow-y: auto;
  }
  .title{
    font-size: 30px;
    font-family: fantasy;
    margin: 10px;
  }
  .content{
    text-indent: 35px;
    font-size: 20px;
    font-family: fantasy;
    margin: 10px;
  }
  .img{
    text-align: center;
    width: 100%;
  }
  .picName{
    text-align: center;
    font-size: 20px;
    font-family: fantasy;
    margin: 10px;
  }
</style>
