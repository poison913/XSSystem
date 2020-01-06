<template> 
   <div id="contain"> 
    <div class="title">
      象山港重点流域总氮环境容量及目标年所需削减量统计表
    </div>
       <el-table
    :data="tableData"
    height= "calc(100vh - 150px)"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="控制单元名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="adcd"
      label="控制单元所属乡镇"
      width="180">
    </el-table-column>
    <el-table-column
      prop="vRiver"
      label="入河削减量（V 类目标 t/a）">
    </el-table-column>
    <el-table-column
      prop="vProduce"
      label="产生削减量（V 类目标 t/a）">
    </el-table-column>
    <el-table-column
      prop="tRiver"
      label="入河削减量（III 类目标 t/a）">
    </el-table-column>
    <el-table-column
      prop="tProduce"
      label="产生削减量（III 类目标 t/a）">
    </el-table-column>
  </el-table>
  </div>

</template>

<script> 
export default {
  name: "nitrogen",
  computed: { 
  },
  data() { 
    return{ 
      tableData:[{"name": "下陈江", "adcd": "莼湖街道", "vRiver": 6.21, "vProduce": 9.8, "tRiver": 11.07, "tProduce": 17.47}, {"name": "莼湖溪", "adcd": "莼湖街道", "vRiver": 9.38, "vProduce": 16.52, "tRiver": 33.44, "tProduce": 58.91}, {"name": "大嵩江", "adcd": "瞻岐镇、塘溪镇、松岙镇、咸祥镇", "vRiver": 20.15, "vProduce": 36.99, "tRiver": 60.52, "tProduce": 111.1}, {"name": "三山大河", "adcd": "春晓街道", "vRiver": 0, "vProduce": 1.3, "tRiver": 0, "tProduce": 2.59}, {"name": "昆亭溪", "adcd": "春晓街道", "vRiver": 9.33, "vProduce": 12.49, "tRiver": 15.39, "tProduce": 20.6}, {"name": "黄龙坑溪", "adcd": "白峰街道", "vRiver": 0, "vProduce": 1.88, "tRiver": 2.76, "tProduce": 6.02}, {"name": "颜公河", "adcd": "跃龙街道、桃源街道、强蛟镇", "vRiver": 79.95, "vProduce": 93.9, "tRiver": 126.16, "tProduce": 148.17}, {"name": "凫溪", "adcd": "梅林街道、深甽镇、西店镇", "vRiver": 0, "vProduce": 6.05, "tRiver": 6.03, "tProduce": 12.76}, {"name": "汶溪", "adcd": "桥头胡街道", "vRiver": 0, "vProduce": 1.1, "tRiver": 0, "tProduce": 2.2}, {"name": "石门溪", "adcd": "大佳何镇", "vRiver": 0, "vProduce": 1.6, "tRiver": 0, "tProduce": 3.21}, {"name": "五市溪", "adcd": "西店镇", "vRiver": 3.68, "vProduce": 6.02, "tRiver": 17.43, "tProduce": 28.52}, {"name": "下沈港", "adcd": "西周镇", "vRiver": 0, "vProduce": 2.69, "tRiver": 3.79, "tProduce": 6.46}, {"name": "亭溪", "adcd": "墙头镇", "vRiver": 0, "vProduce": 2.62, "tRiver": 7.15, "tProduce": 14.23}, {"name": "西周港", "adcd": "西周镇", "vRiver": 20.35, "vProduce": 25.78, "tRiver": 30.56, "tProduce": 38.71}, {"name": "雅林溪", "adcd": "大徐镇", "vRiver": 0, "vProduce": 1.15, "tRiver": 4.77, "tProduce": 8.48}, {"name": "淡港", "adcd": "西周镇", "vRiver": 0, "vProduce": 1.69, "tRiver": 1.3, "tProduce": 2.67}, {"name": "大徐溪", "adcd": "大徐镇", "vRiver": 0, "vProduce": 1, "tRiver": 1.69, "tProduce": 3.07}, {"name": "横塘港河", "adcd": "黄避岙乡", "vRiver": 0, "vProduce": 1.9, "tRiver": 1.55, "tProduce": 3.06}, {"name": "钱仓河", "adcd": "涂茨镇", "vRiver": 0, "vProduce": 1.46, "tRiver": 5.56, "tProduce": 10.5}, {"name": "东塘河", "adcd": "贤庠镇", "vRiver": 11.79, "vProduce": 19, "tRiver": 20.91, "tProduce": 33.69}, {"name": "峻壁溪", "adcd": "裘村镇、松岙镇", "vRiver": 0, "vProduce": 5.17, "tRiver": 15.93, "tProduce": 28.85}, {"name": "珠溪", "adcd": "贤庠镇", "vRiver": 0, "vProduce": 1.8, "tRiver": 2.59, "tProduce": 5.3}, {"name": "梅山", "adcd": "梅山街道", "vRiver": 0, "vProduce": 2.13, "tRiver": 6.03, "tProduce": 13.08}]
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
    text-align: center;
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
