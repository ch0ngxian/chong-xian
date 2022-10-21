<template>
  <div>

    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
        rel="stylesheet" />
    </head>
    <Main>
      <div class="h-[1px] bg-gray-100 mx-64"></div>
      <div class="mx-64 mt-20">
        Hello, I am Chong Xian.
        <br>
        I am a full stack developers.
      </div>
    </Main>
  </div>
</template>

<script>
import Main from '~/layouts/Main.vue'
export default { components: { Main } }
</script>
