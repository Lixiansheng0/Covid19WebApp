import axios from "../utils/request"

const base = {
    baseUrl: "http://iwenwiki.com",
    local: "/api",
    covid19: "/wapicovid19/ncov.php",
    all: "/wapicovid19/all.php",
    cityNcov: "/wapicovid19/guonei.php",
    guowai: "/wapicovid19/foreign.php",
    ncovimg: "/wapicovid19/ncovimg.php",
    citys: "/wapicovid19/citys.php",
    query: "/wapicovid19/query.php"
}

const api = {
    /**
     * 获取疫情信息
     */
    getCovid19Info(params) {
        return axios.get(base.baseUrl + base.covid19, {
            params
        })
    },
    /**
     * 全国疫情城市数据
     */
    getAllCity() {
        return axios.get(base.baseUrl + base.all)
    },
    /**
     * 获取城市疫情
     */
    getCityNcov(params) {
        return axios.get(base.baseUrl + base.cityNcov, {
            params
        })
    },
    /**
     * 国外疫情数据
     */
    getGuowai() {
        return axios.get(base.baseUrl + base.guowai)
    },
    /**
     * 获取疫情图片曲线
     */
    getNocvImg() {
        return axios.get(base.baseUrl + base.ncovimg)
    },
    /**
     * 获取城市信息
     */
    getCitys(params) {
        return axios.get(base.baseUrl + base.citys, {
            params
        })
    },
    /**
     * 查询城市疫情信息
     */
    query(params) {
        return axios.get(base.baseUrl + base.query, {
            params
        })
    }
}

export default api;