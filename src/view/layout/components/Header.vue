<template>
  <div class="web-header">
    <div class="web-name">
       <a class="navbar-brand" href="#">
            <!-- <img src="./imgs/logo.png" alt="logo"> -->
            <b>象山港智慧环境信息系统</b>
        </a>
    </div>  
    <span href="#"  style="position: absolute;left: 240px;" @click="sliderhide">
        <i class="fa fa-bars"></i>
    </span>
    <el-row style="width: 120px;    margin-right: 10px;">
      <el-col :span="12">
        <a class="nav-link " href="#" role="button"   >
                <img src="@/assets/avtar.png" class="avatar avatar-sm" alt="logo" style="    width: 48px;"> 
            </a> 
      </el-col>
      <el-col :span="12" style="    margin-top: 15px;">
        <span class="small ml-1 d-md-down-none" style="margin-left: .25rem!important;">管理员</span>
      </el-col>
    </el-row> 
  </div>
</template>

<script> 
export default {
  name: "Header",
  computed: { 
  },
  data() { 
    return{ } 
  }, 
  created() {},
  mounted() { 
  },
  methods: {
    sliderhide(){
      //alert(1)
      this.$emit("sliderChange","change")
      
    }
  }
};
</script>

<style scoped  > 
.navbar-brand {
    display: inline-block;
    padding-top: .3359375rem;
    padding-bottom: .3359375rem;
    margin-right: 1rem;
    font-size: 1.09375rem;
    line-height: inherit;
    white-space: nowrap;
}
.navbar .navbar-brand {
    width: calc(240px - 1rem);
    margin-right: 0;
}
a {
    color: #777;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
.web-name{
      width: 240px; 
      text-align: center;
      /* margin-top: -15px; */
} 
</style>
