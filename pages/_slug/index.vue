<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post" v-html="body"></div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://kaitonote.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { "X-API-KEY": "b87f69ac-8a58-4ffc-a3b2-e2e9744bf9bb" },
      }
    );
    return data;
  },
};
</script>