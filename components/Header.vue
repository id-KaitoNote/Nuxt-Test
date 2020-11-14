<template>
  <header class="header">
    <div class="Logo">
      <h1 class="Logo__text">
        <a href="#" class="Logo__link">Nuxt-Test</a>
      </h1>
    </div>
    <nav class="HeaderNav">
      <ul class="Menu">
        <li class="Menu__list"><a class="Menu__link" href="#">top</a></li>
        <li class="Menu__list"><a class="Menu__link" href="#">About</a></li>
        <li class="Menu__list"><a class="Menu__link" href="#">works</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/common.scss";

header {
  width: 100%;
  padding: 30px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $subColor;
  background: $mainColor;
  @media screen and (max-width: $mediaSp) {
    width: 100%;
    margin: 0;
    padding: 30px 40px;
    justify-content: center;
  }
  .Logo {
    display: flex;
    &__text {
      font-size: 42px;
      color: $subColor;
      display: inline-block;
      @media screen and (max-width: $mediaSp) {
        font-size: 22px;
      }
    }
    &__link {
      color: $subColor;
      text-decoration: none;
    }
  }
  .Menu {
    display: flex;
    @media screen and (max-width: $mediaSp) {
      display: none;
    }

    &__list {
      margin: 0 0 0 60px;
      list-style: none;
      position: relative;
    }
    &__link {
      color: $subColor;
      text-decoration: none;
    }
    &__link::after {
      @include link-hover;
    }
    &__link:hover::after {
      width: 100%;
    }
  }
}
</style>