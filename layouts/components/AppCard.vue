<template>
  <div class="hover:scale-105 transition ease-in-out relative glow">
    <a class="flex" href="https://www.jsoner.app/" target="_blank">
      <div class="overflow-hidden rounded-lg border border-gray-200">
        <div class="h-7 w-full bg-white flex items-center">
          <div class="rounded-full h-2.5 w-2.5 bg-[#FF5F57] ml-3"></div>
          <div class="rounded-full h-2.5 w-2.5 bg-[#FEBC2E] ml-1"></div>
          <div class="rounded-full h-2.5 w-2.5 bg-[#28C840] ml-1"></div>
        </div>
        <div class="iframe-wrapper relative">
          <iframe
            class="pointer-events-none rounded-b-lg"
            style="transform-origin: 0 0; transform: scale(0.7)"
            width="143%"
            height="143%"
            scrolling="no"
            src="https://www.jsoner.app/"
          >
          </iframe>
          <div
            class="text-white absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-gray-900 to-transparent flex flex-col justify-end p-5 rounded-b-lg"
          >
            <img
              class="h-10 w-10 border border-white rounded mb-3"
              src="https://www.jsoner.app/favicon.ico"
            />
            <div class="text-lg font-medium mb-2">
              JSONer | A minimalist JSON beautifier
            </div>
            <div class="text-xs font-light text-gray-400">
              JSONer helps to format the input JSON and beautify it to display
              in a more readable way.
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script></script>

<style scoped>
.iframe-wrapper {
  height: 26rem;
  width: 16rem;
}

@media (min-width: 640px) {
  .iframe-wrapper {
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
    var(--rotate),
    #ffadad,
    #ffd6a5,
    #fdffb6,
    #caffbf,
    #9bf6ff,
    #a0c4ff,
    #bdb2ff
  );
  /* background-image: linear-gradient(
    var(--rotate),
    #264653,
    #287271,
    #2a9d8f,
    #e9c46a,
    #f4a261,
    #ee8959,
    #e76f51
  ); */
  animation: spin 4s linear infinite, glow 5s linear infinite;
  transition: opacity 1s ease-in-out;
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
