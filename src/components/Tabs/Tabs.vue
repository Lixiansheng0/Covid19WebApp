<script>
import Content from "./Content";

export default {
    name: "Tabs",
    data(){
      return{
        pans:[]
      }
    },
    props: {
        currentIndex: {
            type: [String, Number],
            default: 0,
        },
    },
    methods: {
        getIndex(index) {
            this.$emit("tabHandle", index);
        },
    },
    render() {
        return (
            <div>
                <ul class="tabs-header">{this.$slots.default}</ul>
                <div>
                    <Content pans={ this.pans }/>
                </div>
            </div>
        );
    },
};
</script>

<style scoped>
.tabs-header {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 2px solid #ededed;
}
</style>