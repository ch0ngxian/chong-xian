<template>
  <div
    class="hover:scale-105 transition ease-in-out relative glow mr-8 cursor-pointer"
    @click="$emit('click')"
  >
    <a class="flex" :href="url" target="_blank">
      <div class="overflow-hidden rounded-lg border border-gray-200 dark:border-[#333333]">
        <div class="h-7 w-full bg-white dark:bg-[#111111] flex items-center border-b dark:border-[#333333]">
          <div class="rounded-full h-2.5 w-2.5 bg-[#FF5F57] ml-3"></div>
          <div class="rounded-full h-2.5 w-2.5 bg-[#FEBC2E] ml-1"></div>
          <div class="rounded-full h-2.5 w-2.5 bg-[#28C840] ml-1"></div>
        </div>
        <div class="preview-wrapper relative">
          <iframe
            v-if="url"
            class="pointer-events-none rounded-b-lg"
            style="transform-origin: 0 0; transform: scale(0.7)"
            width="143%"
            height="143%"
            scrolling="no"
            :src="url"
          >
          </iframe>

          <img v-else-if="imageUrl" class="rounded-b-lg" :src="imageUrl" />

          <div
            class="text-white absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-gray-900 to-transparent flex flex-col justify-end p-5 rounded-b-lg"
          >
            <img
              class="h-10 w-10 border border-white dark:border-[#333333] rounded mb-3 object-cover"
              :style="`background-color: ${iconBackground}`"
              :src="iconUrl"
            />
            <div class="text-lg font-medium mb-2">
              {{ title }}
            </div>
            <div class="text-xs font-light text-gray-400">
              {{ description }}
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    iconUrl: {
      type: String,
      required: true,
    },
    iconBackground: {
      type: String,
      default: "transparent",
    },
    url: {
      type: String,
      required: false,
      default: null,
    },
    imageUrl: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>

<style scoped>
.preview-wrapper {
  height: 26rem;
  width: 16rem;
}

@media (min-width: 640px) {
  .preview-wrapper {
    height: 32rem;
    width: 26rem;
  }
}

@property --rotate {
  syntax: '<angle>';
  initial-value: 132deg;
  inherits: false;
}

.glow {
  z-index: 1;
}

.glow::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  opacity: 0;
  filter: blur(3rem);
  background-image: linear-gradient(
    var(--rotate, 132deg),
    #ffadad,
    #ffd6a5,
    #fdffb6,
    #caffbf,
    #9bf6ff,
    #a0c4ff,
    #bdb2ff
  );
  animation: spin 8s linear infinite, glow 5s linear infinite;
  transition: opacity 1s ease-in-out;
}

.dark.glow::after {
  background-image: linear-gradient(
    var(--rotate, 132deg),
    #fb7b4a,
    #ff9c48,
    #fac83b,
    #64d39b,
    #5b97f2,
    #7a79fe,
    #c256d6
  );
}

.glow:hover::after {
  opacity: 1;
}

.glow:active::after {
  opacity: 1;
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }

  100% {
    --rotate: 360deg;
  }
}

@keyframes glow {
  0% {
    transform: scale(0.9);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(0.9);
  }
}
</style>
