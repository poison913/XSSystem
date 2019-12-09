<template> 
   <div class="sidebar" id="left" :style="{'width':width+'px'}">
            <nav class="sidebar-nav">
              <el-row class="tac" style="    text-align: left;    margin-top: 60px;"> 
                <el-col :span="24"> 
                  <el-menu  
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#272727"
                    text-color="#fff"
                    router
                    :default-active="$route.path"
                    active-text-color="#ffd04b">
                    <el-submenu index="1">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>基础地理信息模块</span>
                      </template>
                      <el-menu-item-group> 
                        <el-menu-item  @click="mapselect('terrain')"  >地形地貌数据</el-menu-item>
                        <el-menu-item  @click="mapselect('river')"   >河流水系数据</el-menu-item>
                        <el-menu-item  @click="mapselect('basin')" >河流流域数据</el-menu-item> 
                      </el-menu-item-group> 
                    </el-submenu>  
                    <el-submenu index="2">
                      <template slot="title">
                        <i class="el-icon-heavy-rain"></i>
                        <span>水文气象模块</span>
                      </template>
                      <el-menu-item-group> 
                        <el-menu-item index="/water/rainstation">雨量站分布</el-menu-item>
                        <el-menu-item index="/water/scene">气象站分布</el-menu-item>
                        <el-menu-item index="/water/rain">降雨统计分析</el-menu-item> 
                      </el-menu-item-group> 
                    </el-submenu> 
                    
                    <el-submenu index="3">
                      <template slot="title">
                        <i class="el-icon-lightning"></i>
                        <span>环境信息模块</span>
                      </template>
                      <el-menu-item-group> 
                        <el-menu-item index="/Env/source">工业源分布</el-menu-item>
                        <el-menu-item index="/Env/factory">污水处理厂分布</el-menu-item>
                        <el-menu-item index="/Env/riverData">河流及闸口环境监测数据</el-menu-item> 
                        <el-menu-item index="/Env/redtide">赤潮监测点位数据</el-menu-item>
                        <el-menu-item index="/Env/analysis">环境数据分析</el-menu-item> 
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
                        <span>入海总量控制项目库</span>
                      </template>
                      <el-menu-item-group> 
                        <el-menu-item index="/seadata/nitrogen">入海总氮控制项目库清单</el-menu-item>
                        <el-menu-item index="/seadata/performance">项目环境绩效核算模型</el-menu-item>
                        <el-menu-item index="/seadata/show">挂图作战展示系统</el-menu-item> 
                        <el-menu-item index="/seadata/feedback">项目跟踪反馈系统</el-menu-item> 
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
       width:240
     }
  },
  created() {},
  mounted() { 
  },
  methods: {
    handleOpen(key, keyPath) {
     /*  console.log(this,this.$route.path);
      console.log("open", key, keyPath); */
      if("/Map"!=this.$route.path){
        this.$router.push({ path: "/Map" });
      }
    },
    handleClose(key, keyPath) {
      //console.log("close", key, keyPath);
       if("/Map"!=this.$route.path){
        this.$router.push({ path: "/Map" });
      }
    },
    editWidth(){
      if(this.width==240){
        this.width = 0;
      }else{
        this.width = 240;
      }
    },
    mapselect(val){
      //alert(val) 
      debugger
      this.$emit("maplayer",val)
    }
   }
};
</script>

<style scoped  >  


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
    -webkit-transition: all .3s;
    transition: all .3s;
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
