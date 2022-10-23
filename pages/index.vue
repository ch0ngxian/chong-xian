<template>
  <div class="bg-white" @mousemove="onMouseMove">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
    </head>

    <Header ref="header"></Header>

    <Divider />

    <div class="mx-8 sm:mx-64 mt-20" style="height: 70vh">
      <span>Hello, I am Chong Xian.</span>
      <br />
      <div class="flex">
        <div>I am a&nbsp;</div>

        <div
          v-for="(role, index) in roles"
          :key="index"
          class="role inline"
          :class="{
            active: role.is_active,
            hidden: role.is_hidden,
          }"
        >
          {{ role.name }}
          <div class="h-[2px] bg-black"></div>
        </div>
      </div>
    </div>

    <Divider id="works" />

    <div class="mx-8 sm:mx-64 mb-40" style="height: 80vh">
      <h1 class="text-xl font-bold mb-2">Works</h1>
      <div class="mb-5">I built these apps</div>

      <div class="flex">
        <div class="hover:scale-105 transition ease-in-out">
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
                    JSONer helps to format the input JSON and beautify it to
                    display in a more readable way.
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!--
      <Divider />

      <div class="mx-20 sm:mx-64 mb-40">
        <h1 class="text-xl font-bold mb-5">Blogs</h1>
        - work in progress :)
      </div>
 -->
    <Divider id="contacts" />

    <div class="mx-8 sm:mx-64 pb-40">
      Reach me at

      <div class="mt-3">
        <a
          href="mailto:chongxian.goh@gmail.com"
          class="flex items-center underline my-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7 mr-2"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
          <span>chongxian.goh@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/chongxian/"
          target="_blank"
          class="flex items-center underline my-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7 mr-2"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
          <span>Chong Xian Goh</span>
        </a>
      </div>
    </div>
    <div
      id="cursor-circle"
      class="w-10 h-10 bg-gray-900 rounded-full absolute pointer-events-none invert mix-blend-difference z-50 block"
      :class="{ invisible: circle.is_invisible }"
      :style="{ left: `${circle.pos.x}px`, top: `${circle.pos.y}px` }"
    ></div>
  </div>
</template>

<script>
import Divider from '../layouts/components/Divider.vue'
import Header from '~/layouts/components/Header.vue'

export default {
  components: { Header, Divider },

  data() {
    return {
      active_role_index: 0,
      roles: [
        {
          name: 'full stack developers',
          is_active: true,
          is_hidden: false,
        },
        {
          name: 'certified scrum master',
          is_active: false,
          is_hidden: true,
        },
        {
          name: 'product manager',
          is_active: false,
          is_hidden: true,
        },
        {
          name: 'ui ux euthanist',
          is_active: false,
          is_hidden: true,
        },
      ],
      circle: {
        is_invisible: true,
        pos: {
          x: 0,
          y: 0,
        },
      },
      mouse: {
        pos: {
          x: 0,
          y: 0,
        },
      },
    }
  },
  created() {},
  mounted() {
    this.initCircleCursor()
    this.initRolesFadeEffect()
  },
  methods: {
    timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    },
    onMouseMove(e) {
      this.mouse.pos.x = e.pageX - 20
      this.mouse.pos.y = e.pageY - 20
    },

    initRolesFadeEffect() {
      const _this = this

      setInterval(async () => {
        const originalRoleIndex = _this.active_role_index
        _this.active_role_index = null

        _this.active_role_index = originalRoleIndex + 1

        if (_this.active_role_index >= _this.roles.length) {
          _this.active_role_index = 0
        }

        _this.roles.map((role, index) => {
          role.is_active = false
          return role
        })

        await _this.timeout(1000)

        _this.roles.map(async (role, index) => {
          role.is_hidden = index !== _this.active_role_index
          await _this.timeout(100)
          role.is_active = index === _this.active_role_index
          return role
        })
      }, 4000)
    },
    initCircleCursor() {
      const logoPos = this.$refs.header.$refs.logo.getBoundingClientRect()

      this.mouse.pos.x = logoPos.left + 5
      this.mouse.pos.y = logoPos.top + 4

      this.circle.is_invisible = false

      const _this = this

      setInterval(() => {
        _this.circle.pos.x += (_this.mouse.pos.x - _this.circle.pos.x) / 6
        _this.circle.pos.y += (_this.mouse.pos.y - _this.circle.pos.y) / 6
      }, 10)
    },
  },
}
</script>

<style scoped>
.role {
  position: relative;
}
.role:after {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  content: '';
  width: 100%;
  height: 100%;
  background-color: white;
  transform: scaleX(1);
  transition: transform 1000ms ease-in-out;
  transform-origin: 100% 50%;
}

.role.active:after {
  transform: scaleX(0);
}

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
