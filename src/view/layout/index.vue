<template>
  <div class="app-wrapper"><!-- :class="classObj" -->
    <Header class="page-header navbar"  ref="header" v-on:sliderChange="sliderChange"/> 
    <sidebar 
      ref="mySidebar" v-on:maplayer="maplayer"
    />
    <!-- <navbar/> -->
    <section class="app-main"  :style="{'padding-left':left+'px'}">
      <transition name="fade-transform" mode="out-in">
        <!-- or name="fade" -->
        <!-- <router-view :key="key"></router-view> -->
        <router-view :searchVal="searchVal" />
      </transition>
    </section> 
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";  
export default {
  name: "layout",
  components: { 
    Sidebar, 
    Header
  },
 // mixins: [ResizeMixin],
  data() {
    return {
      left:240,
      searchVal:""
    };
  },
  mounted() {
  },
  watch: {
  },
  computed: {
  },
  methods: {
     sliderChange(){
       this.$refs.mySidebar.editWidth(); 
         if(this.left==240){
          this.left = 0;
        }else{
          this.left = 240;
        }
     },
     maplayer(layer){ 
       //alert(layer)
      debugger
       this.searchVal = layer+Math.random().toString(36).substr(2);
     }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>  
 
.app-wrapper { 
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 1200px;
  overflow-x: auto;
  //overflow-y: auto;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.navbar, .navbar>.container, .navbar>.container-fluid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.page-header {
    height: 60px;
    width: 100%;
    position: relative;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    margin: 0;
    z-index: 100;
}
.page-header, .page-header .navbar-nav {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}
.app-main{
    position: absolute;
    /* left: 240px; */
    /* top: 60px; */
    width: 100%;
    height: 100%;
    top: 0px;
    /* margin-left: 240px; */
    /* margin-top: 60px; */
    padding-top: 60px;
    /* background-color: blue; */ 
}
</style>
