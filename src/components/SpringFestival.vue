<template>
    <div class="spring">
        <h3 class="title">疫情期间出行防疫政策</h3>
        <MyCascader label="出发城市" :options="options" @onCitys="getFromCitys"/>
        <MyCascader label="到达城市" :options="options" @onCitys="getToCitys"/>
        <van-button class="selectBtn" type="primary" block @click="springHandle">点击查询</van-button>
    </div>
</template>

<script>
import api from "../api";
import MyCascader from "./MyCascader"

export default {
    data() {
        return {
            options:[],
            from:{},
            to:{}
        };
    },
    components:{
        MyCascader
    },
    mounted() {
        api.getCitys({
            key: "171e165a7d991c5f6ecd5194c54778ef"
        })
            .then(res => {
                if (!res.data.error_code) {
                    var citys = [];
                    for (var i = 0; i < res.data.result.length; i++) {
                        var currentCitys = [];
                        for(var j = 0;j<res.data.result[i].citys.length;j++){
                            var tempChild = {
                                text:res.data.result[i].citys[j].city,
                                value:res.data.result[i].citys[j].city_id
                            }
                            currentCitys.push(tempChild)
                        }
                        var temp = {
                            text:res.data.result[i].province,
                            value:res.data.result[i].province_id,
                            children:currentCitys
                        }
                        citys.push(temp)
                    }
                    this.options = citys;
                }
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods:{
        getFromCitys(city){
            this.from = city;
        },
        getToCitys(city){
            this.to = city;
        },
        springHandle(){
            this.$router.push({ name:"CovidCity",params:{citys:{from:this.from,to:this.to}} })
        }
    }
    
};
</script>

<style scoped lang="less">
.spring {
    position: relative;
    background: #fff;
    box-sizing: border-box;
    padding: 10px;
    .title {
        font-size: 0.16rem;
    }
}
</style>