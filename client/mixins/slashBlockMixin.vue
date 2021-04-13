<script>
import ServiceGroup from '@/components/ServiceGroup'
import ServiceGroupTitle from '@/components/ServiceGroupTitle'

export default {
    props: {
        serviceGroup: {
            type: Object,
            isRequired: true,
        },
    },
    components: {
        ServiceGroup,
        ServiceGroupTitle,
    },
    computed: {
        getBackgroundImage: function() {
            return {
                background: `url(${this.serviceGroup.backgroundUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }
        },
    },
}
</script>

<style lang="scss">
.UiSlashBlock {
    position: relative;
    width: 100vw;
    height: 80vh;
    overflow: hidden;

    @include atLarge {
        height: 384px;
    }
}

.UiSlashBlock__content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    height: 100%;
    width: 40%;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    @include atMedium {
        width: 30%;
    }
}
</style>
