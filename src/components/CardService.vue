<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        backgroundImageStyle() {
            return {
                backgroundImage: `url(public/${this.item.image})`
            };
        }
    }
}
</script>

<template>

        <li class="service-card col-4">
            <div class="service-card-layout" :style="backgroundImageStyle">
                <p class="secondary-title">{{ $t(item.name) }}</p>
                <div class="text-box">
                    <p class="service-description" v-if="item.text !== '' ">{{ $t(item.text) }}</p>
                </div>
            </div>
        </li>

</template>


<style lang="scss">
@use '../style/partials/variables.scss';

.service-card {
    height: 250px;
    padding: 5px;

    &:hover .service-description {
        max-height: 200px;
        opacity: 1;
        overflow: scroll;
    }
}

.service-card-layout {
    height: 100%;
    background-size: cover;
    background-position: center;
    color: variables.$color-w;
    overflow: hidden;
    position: relative;
}

.service-card-layout p {
    background-color: variables.$color-shade;
    padding: 5px 10px;
}

.text-box {
    position: relative;
}

.service-description {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.5s ease, opacity 0.5s ease;
    padding: 5px 10px 5px 10px;
    font-size: 14px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
</style>