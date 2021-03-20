<template>
    <div class="home">
        <Header />
        <Covid19Info :covid19Info="covid19Info"/>
        <CaseNum :caseNum="caseNum"/>
        <Map />
        <MySwiper />
        <SpringFestival />
        <News :news="news"/>
    </div>
</template>

<script>
import Header from "../components/Header";
import Covid19Info from "../components/Covid19Info";
import CaseNum from "../components/CaseNum";
import api from "../api";
import Map from "../components/Map"
import MySwiper from "../components/MySwiper"
import SpringFestival from "../components/SpringFestival"
import News from "../components/News"

export default {
    name: "Home",
    data() {
        return {
            covid19Info: {},
            caseNum:{},
            news:[]
        };
    },
    mounted() {
        api.getCovid19Info({
            key: "62e34ad34025d5d5127135efa58d4ca8",
        })
            .then((res) => {
                if (res.data.code === 200) {
                    // 病毒信息
                    this.covid19Info = {
                        note1: res.data.newslist[0].desc.note1,
                        note2: res.data.newslist[0].desc.note2,
                        note3: res.data.newslist[0].desc.note3,
                        remark1: res.data.newslist[0].desc.remark1,
                        remark2: res.data.newslist[0].desc.remark2,
                        remark3: res.data.newslist[0].desc.remark3,
                    };
                    // 病例数
                    this.caseNum = {
                        currentConfirmedCount:res.data.newslist[0].desc.currentConfirmedCount,
                        confirmedCount:res.data.newslist[0].desc.confirmedCount,
                        suspectedCount:res.data.newslist[0].desc.suspectedCount,
                        curedCount:res.data.newslist[0].desc.curedCount,
                        deadCount:res.data.newslist[0].desc.deadCount,
                        seriousCount:res.data.newslist[0].desc.seriousCount,
                        suspectedIncr:res.data.newslist[0].desc.suspectedIncr,
                        currentConfirmedIncr:res.data.newslist[0].desc.currentConfirmedIncr,
                        confirmedIncr:res.data.newslist[0].desc.confirmedIncr,
                        curedIncr:res.data.newslist[0].desc.curedIncr,
                        deadIncr:res.data.newslist[0].desc.deadIncr,
                        seriousIncr:res.data.newslist[0].desc.seriousIncr,
                        modifyTime:res.data.newslist[0].desc.modifyTime,
                    }
                    // 新闻
                    this.news = res.data.newslist[0].news
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },
    components: {
        Header,
        Covid19Info,
        CaseNum,
        Map,
        MySwiper,
        SpringFestival,
        News
    },
};
</script>
