<script>
export default {
    name: "Tab",
    props: {
        label: {
            type: String,
            default: "tab",
        },
        index: {
            type: [String, Number],
            default: 0,
        },
    },
    computed: {
        isActive() {
            return this.$parent.currentIndex === this.index;
        }
    },
    mounted(){
      this.$parent.pans.push(this)
    },
    methods:{
      clickHandle(){
        this.$parent.getIndex(this.index)
      }
    },
    render() {
        let cureentClass = {
          tab:true,
          active:this.isActive
        }
        return <li onClick={ this.clickHandle } class={ cureentClass }>{this.label}</li>;
    },
};
</script>
<style scoped>
.tab {
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
}

.tab.active {
    border-bottom: 2px solid blue;
}
</style>