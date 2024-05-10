<template>
    <div class="carousel">
        <el-carousel :interval="10000" type="card" height="240px" motion-blur="true">
            <el-carousel-item v-for="item in photoTotal" :key="item">
                <img
                    class="photo"
                    alt="photo"
                    :src="getImage(item)"
                />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup>
const photoTotal = 5;
const getImage = (item) => {
    return `/images/album/photo${item}.jpg`
}

</script>

<style lang="scss" scoped>
.carousel {
    margin: 4rem 0.25rem 1rem;
    position: relative;
    .photo {
        align-content: center;
        width: 100%;
        height: 100%;
    object-fit: cover;

        &:hover {
          transform: scale(1.1);
        }
    }
}



</style>