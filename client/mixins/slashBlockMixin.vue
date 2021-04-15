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

    &__background {
        background-size: cover !important;
        background-position: center !important;
    }
}

.UiSlashBlock__content {
    position: relative;

    height: 100%;
    width: 217px;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    @include atMedium {
        width: 317px;
    }
}

.visible {
    transform: translate(0, 0);
}
</style>
