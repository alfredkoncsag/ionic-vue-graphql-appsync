<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list >
        <ion-item v-for="article in articles"  @click="() => router.push('/')" :key="article.id">
          <ion-card button>
            <div class="image-wrapper">
              <ion-img :src="article.image"></ion-img>
            </div>
            <ion-card-header>
              <ion-card-title>{{article.title}}</ion-card-title>
            </ion-card-header>
          </ion-card>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonImg
} from "@ionic/vue";

import { useRoute , useRouter} from "vue-router";
import { ref, watch } from "vue";

import { API } from "aws-amplify";

const getArtcilcles = `query Artciles {
    getArticles(categoryId:"2268b834-d4f0-43b6-b199-3f0f9601ee9d") {
      articles{
        id
        title
        image
        lead
      }
    }
  }`;

import { IonCard, IonCardTitle } from "@ionic/vue";

export default {
  name: "Folder",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonList,
    IonImg,
    IonCard,
    IonCardTitle
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const articles = ref([]);

    // fetch the user information when params change
    watch(
      () => route.params,
      async param => {
        console.log(param);
        articles.value = [];
        const result = await API.graphql({
          query: getArtcilcles,
          variables: { categoryId: param.id }
        });
        articles.value = result.data.getArticles.articles;
      }
    );

    return {
      router,
      articles
    };
  }
};
</script>
<style>
.image-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 56%;
  /* 👆 image height / width * 100% */
  position: relative;
  overflow: hidden;
  background-color: #3981ff;
}
img {
  width: 100%;
  height: auto;
  position: absolute;
}


</style>