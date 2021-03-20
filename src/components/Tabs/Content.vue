<script>
export default {
    name: "Content",
    props: {
        pans: {
            type: Array,
            default: function () {
                return [];
            },
        },
    },
    render() {
        return (
            <div>
                {
                    // ele变成tab
                    this.pans.map((ele, index) => {
                        // return <div key={ index }>{ ele.isActive ? ele.$slots.default : "" }</div>
                        return (
                            <div
                                key={index}
                                style={{
                                    display: ele.isActive ? "block" : "none",
                                }}
                            >
                                {ele.$slots.default}
                            </div>
                        );
                    })
                }
            </div>
        );
    },
};
</script>

<style>
</style>