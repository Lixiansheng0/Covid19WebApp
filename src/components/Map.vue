<template>
    <div>
        <p class="title"><i></i>疫情地图</p>
        <Tabs :currentIndex="currentIndex" @tabHandle="getTabHandle">
            <Tab label="中国疫情" index="china">
                <div id="chinaMap"></div>
            </Tab>
            <Tab label="世界疫情" index="world">
                <div id="worldMap"></div>
            </Tab>
        </Tabs>
    </div>
</template>

<script>
import api from "../api";
import axios from "axios";

export default {
    name: "Map",
    data() {
        return {
            currentIndex:"china"
        };
    },
    methods:{
        getTabHandle(index){
            this.currentIndex = index;
        }
    },
    mounted() {
        function allCovid19() {
            return axios.get("http://iwenwiki.com/wapicovid19/all.php");
        }
        function guowaiCovid19() {
            return axios.get("http://iwenwiki.com/wapicovid19/foreign.php");
        }

        axios.all([allCovid19(), guowaiCovid19()]).then(
            axios.spread((allData, guowaiData) => {
                /**
                 * 国内数据
                 */
                let currentConfirmAll = [];
                for (let i = 0; i < allData.data.retdata.length; i++) {
                    let temp = {
                        name: allData.data.retdata[i].xArea,
                        value: allData.data.retdata[i].curConfirm,
                    };
                    currentConfirmAll.push(temp);
                }
                /**
                 * 国外数据
                 */
                let currentConfirmGuowai = [];
                for (let i = 0; i < guowaiData.data.retdata.length; i++) {
                    let temp = {
                        name: guowaiData.data.retdata[i].xArea,
                        value: guowaiData.data.retdata[i].curConfirm,
                    };
                    currentConfirmGuowai.push(temp);
                }
                this.$charts.chinaMap("chinaMap", currentConfirmAll);
                this.$charts.worldMap("worldMap", currentConfirmGuowai);
            })
        );
    },
};
</script>

<style scoped>
#chinaMap {
    width: 375px;
    height: 400px;
}
#worldMap {
    width: 375px;
    height: 400px;
}
.title {
    border-top: 0.005rem solid #ebebeb;
    border-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: 0.44rem;
    padding: 0 0.16rem;
    font-weight: 500;
    font-size: 0.17rem;
    line-height: 0.44rem;
    background: #fff;
}
.title::before {
    content: "";
    width: 5px;
    height: 20px;
    background: #4169e2;
    margin-right: 10px;
}
</style>