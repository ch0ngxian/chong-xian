<template>
  <div ref="app_card" @mousemove="onMouseMove" @mouseleave="onLeave">
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

<script>
import { gsap, Elastic, Power2 } from 'gsap/all'

export default {
  data() {
    return {
      origin: {
        x: 0,
        y: 0,
      },
      is_hover: false,
      height: 0,
      width: 0,
    }
  },
  mounted() {
    gsap.registerPlugin(Elastic, Power2)
    this.calculatePosition()
    window.addEventListener('resize', this.calculatePosition)
  },
  methods: {
    calculatePosition() {
      gsap.set(this.$refs.app_card, {
        x: 0,
        y: 0,
        scale: 1,
      })
      const box = this.$refs.app_card.getBoundingClientRect()
      this.origin.x = box.left + box.width * 0.5
      this.origin.y = box.top + box.height * 0.5

      this.width = box.width
      this.height = box.height
    },
    onMouseMove(e) {
      let hover = false

      const hoverArea = this.is_hover ? 0.9 : 0.5

      const x = e.clientX - this.origin.x
      const y = e.clientY - this.origin.y

      const distance = Math.sqrt(x * x + y * y)

      if (distance < this.width * hoverArea) {
        hover = true
        if (!this.is_hover) {
          this.is_hover = true
        }
        this.onHover(e.clientX, e.clientY)
      }

      if (!hover && this.is_hover) {
        this.onLeave()
        this.is_hover = false
      }
    },
    onHover(x, y) {
      gsap.to(this.$refs.app_card, {
        x: (x - this.origin.x) * 0.2,
        y: (y - this.origin.y) * 0.2,
        scale: 1.05,
        ease: 'power2.out',
        duration: 0.4,
      })
    },
    onLeave() {
      gsap.to(this.$refs.app_card, {
        x: 0,
        y: 0,
        scale: 1,
        ease: 'elastic.out(1.2, 0.4)',
        duration: 0.7,
      })
    },
  },
}
</script>

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
</style>
