<template>
  <div id="map"> 
  </div>
</template> 
<script>  
export default {
  name: "mappage",
  computed: { 
  },
  data() { 
    return{ 
      overlayLayers:{},
      clicklayer:[],
      dem:{},
      river:{},
      basin:{}
    } 
  }, 
  props: ['searchVal'],
  watch: {
      searchVal: function (val) {   
        //alert(val);   // 接收父组件的值
        if(val.startsWith("terrain")){
            if(this.map.hasLayer(this.dem)){
                this.map.removeLayer(this.dem)
            }else{
                this.map.addLayer(this.dem)
            }
        }else if(val.startsWith("river")){
            if(this.map.hasLayer(this.river)){
                this.map.removeLayer(this.river)
            }else{
                this.map.addLayer(this.river)
            } 
        }else if(val.startsWith("basin")){
            if(this.map.hasLayer(this.Watershe)){
                this.map.removeLayer(this.Watershe)
            }else{
                this.map.addLayer(this.Watershe)
            } 
        }
      }
    },
  created() {},
  mounted() { 
    //定义天地图的底图
    let normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
        maxZoom: 18,
        minZoom: 5,
        zIndex:1
    });
    let normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
        maxZoom: 18,
        minZoom: 5,
        zIndex:1
    });
    let imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
        maxZoom: 18,
        minZoom: 5,
        zIndex:1
    });
    let imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
        maxZoom: 18,
        minZoom: 5,
        zIndex:1
    });
    let terrm = L.tileLayer.chinaProvider('TianDiTu.Terrain.Map', {
        maxZoom: 18,
        minZoom: 5,
        zIndex:1
    });
    let terra = L.tileLayer.chinaProvider('TianDiTu.Terrain.Annotion', {
        maxZoom: 18,
        minZoom: 5,
        zIndex:1
    });

    //交通图
    let normal = L.layerGroup([normalm, normala]);
    //影像图
    let image = L.layerGroup([imgm, imga]);
    //影像图
    let terr = L.layerGroup([terrm, terra]);

    //基础图层，单选
    let baseLayers = {
        "影像": image,
        "地图": normal,
        "地形": terr
    }; 
     this.map =    L.map("map", {
        center: [29.52926, 121.6571 ],
        zoom: 10,
        layers: [image],
        attributionControl:false
    });
      //叠加图层，多选
     //地形数据
     this.dem = L.tileLayer.wms("http://120.55.56.109:8080/geoserver/XSEnv/wms?service=WMS", {
        layers: 'XSEnv:dem84',
        format: 'image/png',
        transparent: true
    });
     //研究区
     var studyArea = L.tileLayer.wms("http://120.55.56.109:8080/geoserver/XSEnv/wms?service=WMS", {
        layers: 'XSEnv:studyarea84',
        format: 'image/png',
        transparent: true
    });
     //区县边界--点击测试数据
     var quxian = L.tileLayer.wms("http://120.55.56.109:8080/geoserver/XSEnv/wms?service=WMS", {
        layers: 'XSEnv:quxian84',
        format: 'image/png',
        transparent: true
    });
      //乡镇边界 
      var xiangzhen = L.tileLayer.wms("http://120.55.56.109:8080/geoserver/XSEnv/wms?service=WMS", {
        layers: 'XSEnv:xiangzhen84',
        format: 'image/png',
        transparent: true
    });
     //河流
     this.river = L.tileLayer.wms("http://120.55.56.109:8080/geoserver/XSEnv/wms?service=WMS", {
        layers: 'XSEnv:river84',
        format: 'image/png',
        transparent: true
    });
    //河流流域
    this.Watershe = L.tileLayer.wms("http://120.55.56.109:8080/geoserver/XSEnv/wms?service=WMS", {
        layers: 'XSEnv:Watershed84',
        format: 'image/png',
        transparent: true
    });
    this.overlayLayers ={
        "研究区":studyArea,
        //"地形数据":dem,
        "区县边界":quxian,
        "乡镇边界":xiangzhen,
        //"河流":river,
        //"河流流域":Watershe
    };
    var layercontrol = L.control.layers(baseLayers, this.overlayLayers).addTo(this.map);
     this.map.on('click',this.onMapClick); 
    
    this.map.on('layeradd',this.onMapAddLayer); 

    this.map.on('layerremove',this.onMapRemoveLayer); 
    
    this.map.on('baselayerchange',this.onBaselayerchange); 
  },
  methods: { 
    onMapClick(e) {

        if(this.clicklayer.length==0)
            return;
        let _this = this;
        let clickUrl = "http://120.55.56.109:8080/geoserver/XSEnv/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=image/png&TRANSPARENT=true";
        let currentClicklayer=this.clicklayer[this.clicklayer.length-1];//"XSEnv:quxian84";
        clickUrl+="&QUERY_LAYERS="+currentClicklayer+"&STYLES&LAYERS="+currentClicklayer+"&INFO_FORMAT=text/plain";
        //要用 containerPoint  不能用  layerpoint
        clickUrl+="&X="+e.containerPoint.x+"&Y="+e.containerPoint.y+"&SRS=EPSG:4326&WIDTH="+this.map.getSize().x+
        "&HEIGHT="+this.map.getSize().y+"&BBOX="+this.map.getBounds().toBBoxString();
        this.$axios.get(clickUrl,{       // 还可以直接把参数拼接在url后边
            params:{ 
            }
        }).then(function(res){
             if(res.data.indexOf("no features were found")>=0)
                    return;

                var ss =  res.data.split(":")[2].split('\n');
                var popupContent="";
                ss.forEach(element => {
                    if(element.indexOf("=")>=0&& element.indexOf("the_geom") == -1){
                        var param = element.split("=");
                        var label= param[0].trim();
                        if(label.toLocaleLowerCase().indexOf('id')>=0||label.toLocaleLowerCase().indexOf('xzqdm')>=0||label.toLocaleLowerCase().indexOf('code')>=0)
                            label="编号";
                        else if(label.toLocaleLowerCase().indexOf('area')>=0)
                            label="面积";
                        else if(label.toLocaleLowerCase().indexOf('len')>=0)
                            label="长度";
                        else if(label.toLocaleLowerCase().indexOf('xzqmc')>=0||label.toLocaleLowerCase().indexOf('name')>=0)
                            label="名称";
                        popupContent+=label+":"+param[1].trim()+"</br>";
                    }
                });
                        
                L.popup().setLatLng(e.latlng)
                        .setContent(popupContent)
                        .openOn(_this.map) 
        }).catch(function (error) {
            console.log(error);
        }); 
    },
    onMapAddLayer(e){
        //console.log(e);
        if(e.layer.wmsParams&&e.layer.wmsParams.layers)
            this.clicklayer.push(e.layer.wmsParams.layers)
    }, 
   onMapRemoveLayer(e){
        //console.log(e);
        if(e.layer.wmsParams&&e.layer.wmsParams.layers){
            for(let i=0;i<this.clicklayer.length;i++){
                if(this.clicklayer[i]==e.layer.wmsParams.layers){
                    this.clicklayer.splice(i,1);
                    break;
                }
            }
        }
    },
    onBaselayerchange(e){
        //console.log(e);
        for(var i in e.layer._layers){
            i.bringToBack();
        }
    }
  }
};
</script>

<style scoped  >  
#map{
  width: 100%;
  height: 100%;
  /* background-color: blue; */
}
</style>
