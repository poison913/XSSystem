<template>
  <div id="contain">  
    <div class="title">
      降雨时空特征
    </div>
    <div class="content">
      象山港区域降雨量空间分布不均，根据象山港各监测站点2018年逐月降雨量统计结果可以看出，年降雨量最大的监测站点为杨岙站，位于宁波市北仑区大碶街道，年降雨量的值为2097.6mm;年降雨量最小的监测站点是东溪站，位于象山县新桥镇，年降雨量的值为1160.5mm;所有监测站点的年降雨量的平均值为1500.56mm。降雨量出现最大的站点及其月份是龙潭站8月份观测数据，该月份的降雨量值为373.5mm; 降雨量出现最小的站点及其月份是大蔡站10月份观测数据，该月份的降雨量值为35mm。年降雨日数统计结果表明，最大年降雨日数为马岙站的179日；最小年降雨日数为大目涂站的137日。
    </div>
    <div class="content">
      2018年降雨量等值线分布图如图1所示，从图中的降雨量空间格局可以看出，象山湾北部区域的降雨量基本大于1500mm,在1500~2000mm之间；南部区域的降雨量基本小于1500mm,在1200mm~1500mm之间；西部宁海区域的降雨量在1400mm~1650mm之间。
    </div>
    <div class="img">
      <img alt="" src="../../assets/rainChart1.png"  />
    </div>
    <div class="picName">
      图1  象山港区域2018年降雨量等值线分布图
    </div>
    <div class="content">
       为了进一步分析降雨量在年内的分布情况，选择了不同行政区域内的典型站点杨岙站(北仑区)、施家桥站(鄞州区)、莼湖站(奉化区)、洪家塔站(宁海县)、西周站(象山县)等5个站点数据进行统计分析，各月降雨量直方图如图2所示，从图中可以看出，降雨量年内分布极不均匀，存在典型的季节性特征，雨量主要集中在5、6、7、8、9等月份。按照枯水季(1、2、12月)、平水季(3、4、5、10、11月)、梅雨季(6月)和台风季(7、8、9月)进行统计，其降雨量的统计结果为：台风季平均降雨量为733.4mm,梅雨季6月份的平均降雨量为160.7mm，台风季的平均降雨比例达全年降雨量的44%。
    </div>
     <div class="img">
      <img alt="" src="../../assets/rainChart2.png"  />
    </div>
     <div class="picName">
      图2  典型雨量站点的逐月降雨量直方图
    </div>
     <div class="title">
      地表降雨径流关系
    </div>
    <div class="content">
       由于区域内降雨量时空分布不均，研究降雨径流关系，可以分区域了解研究区内的地表水资源量的特征。降雨径流经验相关方法是研究降雨径流问题的一种常规经验方法。根据宁波市洪家塔水文观测站流域内的近30多年(1985~2018)的降雨量观测数据，径流量观测数据，按照枯水季、平水季、梅雨季和台风季等季节性降雨规律，统计降雨径流关系曲线如图3所示和表1所示。从图中可以看出，洪家塔径流量与降水量，在不同的降雨季节呈不同的模型关系，在枯水季、平水季呈线性模型关系，在梅雨季和台风季呈指数模型关系。
    </div>
    <div class="img">
      <img alt="" src="../../assets/rainChart3.png"  />
    </div>
    <div class="picName">
      图3  洪家塔水文观测站不同水文季降雨径流拟合图
    </div>
     <div class="img">
       <!-- style="width: 100%;" -->
      <img alt="" src="../../assets/rainChart4.png"   />
    </div>
  </div>
</template>

<script> 
export default {
  name: "rain",
  computed: { 
  },
  data() { 
    return{ } 
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
    overflow-x: hidden;
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
