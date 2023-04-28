<template>
    <div>
        <v-row>
            <v-col md="7" cols="10">
                <div class="d-flex flex-column justify-space-between align-end">
                    <video
                        id="video-player"
                        :src="require('@/assets/videos/introprueba.mp4')"
                        playsinline
                        loop
                        autoplay
                        :aspect-ratio="16/9"
                        width="1300px"
                        height="1200px"
                    ></video>

                </div>
            </v-col>
            <v-col
                md="7"
                cols="10"
            ></v-col>
        </v-row>
    </div> 
</template>

<script>
export default{
    layout:"layout",
}
</script>
