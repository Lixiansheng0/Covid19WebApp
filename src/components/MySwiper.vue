<template>
    <div class="chart">
        <h3 class="title">全国</h3>
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in nocvImages" :key="index">
                <img :src="item.image" alt="" />
            </swiper-slide>
        </swiper>
        <ul class="navigator">
            <li
                v-for="(item, index) in nocvImages"
                :key="index"
                class="navigatorItem"
                :class="{ active: index === currentIndex }"
                @click="clickItemHandle(index)"
            >
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import api from "../api";

export default {
    data() {
        const that = this;
        return {
            nocvImages: [],
            currentIndex: 0,
            swiperOptions: {
                on: {
                    slideChangeTransitionEnd: function () {
                        that.currentIndex = this.activeIndex
                    },
                },
            },
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    mounted() {
        api.getNocvImg()
            .then((res) => {
                if (res.data.status === 200) {
                    this.nocvImages = res.data.result;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    methods: {
        clickItemHandle(index) {
            this.currentIndex = index;
            this.swiper.slideTo(index, 500);
        },
    },
};
</script>

<style scoped>
.line {
    padding: 0 10px;
    width: 100%;
    height: 300px;
}
.chart {
    position: relative;
    background: #fff;
    padding: 0.16rem 0;
}
.chart .title {
    font-size: 0.16rem;
    margin: 0 0 0.08rem 0.16rem;
}
.chart .swiper-pagination {
    position: absolute;
    text-align: center;
    -webkit-transition: 300ms opacity;
    -o-transition: 300ms opacity;
    transition: 300ms opacity;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 10;
}
.chart .swiper-pagination-bullet {
    width: calc(20% - 0.02rem);
    text-align: center;
    background: #f7f7f7;
    padding: 0.045rem;
    box-sizing: border-box;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.02rem;
}
.navigator {
    font-size: 0.12rem;
    list-style: none;
    display: flex;
    padding: 0 0.16rem;
    justify-content: center;
    margin: 0.06rem 0 0;
}
.navigatorItem {
    color: #4169e2;
    background: #f1f5ff;
    position: relative;
    width: calc(20% - 0.02rem);
    text-align: center;
    background: #f7f7f7;
    padding: 0.045rem;
    box-sizing: border-box;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.02rem;
    margin-left: 0.025rem;
}
.active {
    color: #4169e2;
    background: #f1f5ff;
    position: relative;
}
</style>