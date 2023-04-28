<template>
  <v-container >
    <v-row no-gutters>
      <template >
        <v-col >
          <v-card color="card" class="pa-2" outlined tile> 
          </v-card>
        </v-col>
        <v-responsive>
            <video
                id="video-player" playsinline loop autoplay
                :src="require('@/assets/videos/intro.mp4')"
                class="video"
            >
        </video> 
        </v-responsive>
      </template>
    </v-row>
  </v-container>
</template>