<template>   <!--   -->
   <div class="sidebar" id="left" :style="{'width':width+'px'}" >
            <nav class="sidebar-nav">
              <el-row class="tac" style="    text-align: left;    margin-top: 60px;"> 
                <el-col :span="24">  
                  <!-- active-text-color="#ffd04b" -->
                  <!-- :default-active="$route.path" -->
                  <el-menu  
                    @open="handleOpen"
                    @close="handleClose"
                    :collapse="isCollapse"
                    background-color="#272727"
                    text-color="#fff" 
                    router
                    
                    >
                    <el-submenu index="1">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>基础地理信息模块</span>
                      </template>
                      <el-menu-item-group> 
                        <el-menu-item  @click="mapselect('terrain')"  >地形地貌数据</el-menu-item>
                        <el-menu-item  @click="mapselect('river')"   >河流水系数据</el-menu-item>
                        <el-menu-item  @click="mapselect('basin')" >河流流域数据</el-menu-item> 
                        <el-menu-item  @click="mapselect('boundarybasin')" >小流域边界</el-menu-item> 
                        <el-submenu  index="1-4"  >
                          <template slot="title">土地利用数据</template>
                          <!--<el-menu-item v-for="tab in tabs" index='tab.index' @click="toggle(tab.view)">{{tab.label}}</el-menu-item>-->
                          <el-menu-item   @click="mapselect('buildingSHP')"  >建设用地</el-menu-item>
                          <el-menu-item   @click="mapselect('agricultureSHP')"  >农业用地</el-menu-item>
                          <el-menu-item   @click="mapselect('yuandiSHP')"  >园地</el-menu-item> 
                        </el-submenu>  
                      </el-menu-item-group> 
                    </el-submenu>  
                    <el-submenu index="2">
                      <template slot="title">
                        <i class="el-icon-heavy-rain"></i>
                        <span>水文气象模块</span>
                      </template>
                      <el-menu-item-group> 
                        <el-menu-item    @click="mapselect('rainStation')">雨量站分布</el-menu-item>
                        <el-menu-item    @click="mapselect('waterStation')">水文站分布</el-menu-item>
                        <el-menu-item index="/water/rain">降雨径流模型关系</el-menu-item> 
                      </el-menu-item-group> 
                    </el-submenu> 
                    
                    <el-submenu index="3">
                      <template slot="title">
                        <i class="el-icon-lightning"></i>
                        <span>环境信息模块</span>
                      </template>
                      <el-menu-item-group> 
                        <el-menu-item  @click="mapselect('waterFac')">工业源分布</el-menu-item>
                        <el-menu-item  @click="mapselect('pollutionDac')">污水处理厂分布</el-menu-item>
                        <!-- <el-menu-item  @click="mapselect('waterFac')">河流及闸口环境监测数据</el-menu-item>  -->
                         <el-submenu  index="2-4"  >
                          <template slot="title">河流及闸口环境监测数据</template>
                          <!--<el-menu-item v-for="tab in tabs" index='tab.index' @click="toggle(tab.view)">{{tab.label}}</el-menu-item>-->
                          <el-menu-item   @click="mapselect('monitor201804')"  >2018年4月数据</el-menu-item>
                          <el-menu-item   @click="mapselect('monitor201810')"  >2018年10月数据</el-menu-item> 
                        </el-submenu>  
                        <el-menu-item  @click="mapselect('redPOI')">赤潮监测点位数据</el-menu-item>
                        <!-- <el-menu-item  @click="mapselect('waterFac')">环境数据分析</el-menu-item>  -->
                        <el-menu-item  @click="mapselect('checkenFac')">规模畜禽养殖分布</el-menu-item> 
                      </el-menu-item-group> 
                    </el-submenu> 
                    
                    <el-submenu index="4">
                      <template slot="title">
                        <i class="el-icon-data-line"></i>
                        <span>区域环境模型库</span>
                      </template>
                      <el-menu-item-group> 
                        <el-menu-item index="/modal/pollute">污染负荷计算模型</el-menu-item>
                        <el-menu-item index="/modal/hydrology">分布式水文模型</el-menu-item>
                        <el-menu-item index="/modal/force">水动力水质模型</el-menu-item> 
                        <el-menu-item index="/modal/capacity">水环境容量模型</el-menu-item>
                        <el-menu-item index="/modal/disposal">排污-控污-水质响应情景分析模型</el-menu-item> 
                      </el-menu-item-group> 
                    </el-submenu> 
                    
                    <el-submenu index="5">
                      <template slot="title">
                        <i class="el-icon-sunrise-1"></i>
                        <span>入海总量控制方案库</span>
                      </template>
                      <el-menu-item-group> 
                        <el-menu-item index="/seadata/nitrogen">环境容量与削减量分配</el-menu-item>
                        <el-menu-item index="/seadata/performance">重点工程项目表</el-menu-item>
                        <!-- <el-menu-item index="/seadata/show">挂图作战展示系统</el-menu-item>  -->
                        <el-menu-item index="/seadata/feedback">总量控制任务分解表</el-menu-item> 
                      </el-menu-item-group> 
                    </el-submenu> 
                    
                    <el-menu-item index="/manage">
                      <i class="el-icon-menu"></i>
                      <span slot="title">系统管理平台</span>
                    </el-menu-item>
                  </el-menu>
                </el-col>
              </el-row>
            </nav>
        </div>
</template>

<script> 
export default {
  name: "Sidebar",
  computed: { 
  },
  data() { 
     return{ 
       width:240,
       isCollapse:false
     }
  },
  created() {},
  mounted() { 
  },
  methods: {
    handleOpen(key, keyPath) {
     /*  console.log(this,this.$route.path);
      console.log("open", key, keyPath); */
      // if("/Map"!=this.$route.path){
      //   this.$router.push({ path: "/Map" });
      // }
      if(key=="1"){
        this.$router.push({ path: "/Map" });
      }
    },
    handleClose(key, keyPath) {
      //console.log("close", key, keyPath);
      //  if("/Map"!=this.$route.path){
      //   this.$router.push({ path: "/Map" });
      // }
      //  if(key=="1"){
      //   this.$router.push({ path: "/Map" });
      // }
    },
    editWidth(){
      if(this.width==240){
        this.isCollapse = true; 
        this.width = 64
        //let _this  = this;
        // setTimeout(function(){_this.width = 64;},1000)
       
      }else{
        this.isCollapse = false;
        this.width = 240
        //let _this  = this;
        //setTimeout(function(){_this.width = 240;},500) 
      }
    },
    sleep(numberMillis) { 
      var now = new Date(); 
      var exitTime = now.getTime() + numberMillis; 
      while (true) { 
      now = new Date(); 
      if (now.getTime() > exitTime) 
        return; 
      } 
    },
    mapselect(val){
      //alert(val) 
      debugger
      if(!this.$route.path.startsWith("/Map")){
        this.$router.push({ name: "mappage",params:{layer :val} });
        //let _this  = this;
        //setTimeout(function(){_this.$emit("maplayer",val);},100) 
      }else
        this.$emit("maplayer",val)
    }
   }
};
</script>

<style scoped  >  
@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }

.sidebar-fixed .content {
  margin-left: 240px;
  margin-top: 60px
}

@media (max-width: 991.98px) {
  .sidebar-fixed .content {
      margin-left:0
  }
}
.sidebar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: absolute;
    background-color: #272727;
    min-height: calc(100vh - 60px);
    -ms-flex-negative: 0;
    flex-shrink: 0;
    top: 0;
    bottom: 0;
    left: 0;
    -webkit-transition: all .1s;
    transition: all .1s;
    z-index: 99
}

.sidebar .sidebar-nav {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden
}

.sidebar .nav {
    width: 100%;
    list-style: none
}

.sidebar .nav-item {
    width: 100%;
    position: relative
}

.sidebar .nav-link {
    display: block;
    text-decoration: none;
    padding: 16px 24px;
    color: #9d9d9d
}

.sidebar .nav-link i:first-of-type {
    display: inline-block;
    width: 24px;
    margin-right: 4px;
    color: #c4c3c3;
    font-size: 14px
}

.sidebar .nav-link:hover {
    color: #ddd
}

.sidebar .nav-link.active,.sidebar .nav-link:hover i {
    color: #fff
}

.sidebar .nav-link.active i {
    color: #42a5f5
}

.sidebar .nav-dropdown-toggle i:last-of-type {
    float: right;
    margin-top: 4px
}

.sidebar .nav-title {
    font-size: 80%;
    text-transform: uppercase;
    padding: .8rem 1rem;
    color: #777
}

.sidebar .nav-dropdown.open .nav-dropdown-items {
    max-height: 1000px!important;
    background-color: #1f1f1f
}

.sidebar .nav-dropdown.open .nav-dropdown-toggle i:last-of-type {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg)
}

.sidebar .nav-dropdown-items {
    padding: 0;
    margin: 0;
    overflow: hidden;
    max-height: 0!important;
    -webkit-transition: max-height .3s ease-in-out;
    transition: max-height .3s ease-in-out
}

.sidebar .nav-dropdown-items .nav-item {
    padding: 0;
    list-style: none
}
.el-menu-item-group>ul {
    padding: 0;
}
</style>
