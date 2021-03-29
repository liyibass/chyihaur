<script>
import ServiceGroup from '@/components/ServiceGroup'

export default {
    props: {
        serviceGroup: {
            type: Object,
            isRequired: true,
        },
    },
    components: {
        ServiceGroup,
    },
    computed: {
        getBackgroundImage: function() {
            return { background: `url(${this.serviceGroup.backgroundUrl})`, backgroundSize: 'cover' }
        },
    },
}
</script>

<style lang="scss">
.UiSlashBlock__content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    height: 100%;
    width: 30%;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
