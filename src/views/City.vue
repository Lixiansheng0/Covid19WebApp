<template>
    <div>
        <div id="city"></div>
    </div>
</template>

<script>
import api from "../api";

export default {
    mounted() {
        api.getCityNcov({
            city: this.$route.params.cityName,
        })
            .then((res) => {
                /**
                 * {name:'安阳市',value:10}
                 */
                var currentCity = [];
                if (res.status === 200) {
                    for (var i = 0; i < res.data.retdata.subList.length; i++) {
                        var temp = {
                            name: res.data.retdata.subList[i].city + "市",
                            value: res.data.retdata.subList[i].confirm,
                        };
                        currentCity.push(temp);
                    }
                    this.$charts.provinceMap(
                        "city",
                        currentCity,
                        this.$route.params.cityName
                    );
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>

<style>
#city {
    width: 375px;
    height: 500px;
}
</style>