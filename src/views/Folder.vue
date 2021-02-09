<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.title }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="article in articles" @click="() => router.push('/')" :key="article.id">
          <ion-card button>
            <ion-img :src="article.image"></ion-img>
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
  IonImg,
  IonCardHeader
} from "@ionic/vue";

import { IonCard, IonCardTitle } from "@ionic/vue";

import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";
import { API } from "aws-amplify";

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
    IonCardTitle,
    IonCardHeader
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const articles = ref([]);

    // fetch the user information when params change
    watch(
      () => route.params,
      async param => {
        const result = await API.graphql({
          query: `query Artciles {
                    getArticles(categoryId:"${route.params.id}") {
                      articles{
                        id
                        title
                        image
                        lead
                      }
                    }
                  }`,
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
