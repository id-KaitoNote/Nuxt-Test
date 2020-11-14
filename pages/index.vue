<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">なくすとのてすとをしたよ。</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          どきゅめんていしょん
        </a>
        <a
          href="https://github.com/id-KaitoNote"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          ぎっとはぶ
        </a>
      </div>
      <ul class="blog-list">
        <li class="blog-item" v-for="content in contents" :key="content.id">
          <nuxt-link :to="`/${content.id}`" class="blog-link">
            {{ content.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      "https://kaitonote.microcms.io/api/v1/blog",
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { "X-API-KEY": "b87f69ac-8a58-4ffc-a3b2-e2e9744bf9bb" },
      }
    );
    return data;
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  padding: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.blog-list {
  margin: 50px 0 0 0;
}

.blog-item {
  list-style: none;
  margin: 20px 0 0 0;
}

.blog-link {
  color: green;
  text-decoration: none;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 80px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
