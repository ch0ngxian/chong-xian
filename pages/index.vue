<template>
  <div class="bg-white dark:bg-black" @mousemove="onMouseMove">
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

    <div class="mx-8 sm:mx-64 mt-10 sm:mt-20" style="height: 20vh">
      <span>Hi 👋 I am Chong Xian.</span>
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
          {{ role.name }}.
          <div class="h-[2px] bg-black"></div>
        </div>
      </div>

      <div class="mt-6">
        Currently crafting awesome products at
        <a href="https://www.easystore.co/" target="_blank" class="underline"
          >EasyStore</a
        >. <br />
        I solve problems with user-first products, design and build them with
        easy-to-use experience ❤️.
      </div>
    </div>

    <div
      class="flex justify-end box-border items-end w-screen overflow-hidden pt-14 sm:px-64 sm:pt-24"
    >
      <img
        class="w-[80%] translate-x-12 sm:w-[40%]"
        src="@/assets/images/avatar.png"
      />
    </div>

    <Divider id="works" class="mt-0" />

    <div class="mb-40" style="height: 80vh">
      <h1 class="mx-8 sm:mx-64 text-xl font-bold mb-2">Works</h1>
      <div class="mx-8 sm:mx-64 dark:text-[#A1A1A1]">I built these apps</div>

      <div
        class="flex w-screen box-border overflow-x-scroll overflow-y-hidden px-8 sm:px-64 py-36 -mt-28"
      >
        <AppCard
          title="Scrum Poker | Simple Way to Estimate Story Point"
          description="Scrum Poker helps to estimate the story point of a task in a more fun and engaging way."
          url="https://scrumpoker.chongxian.dev/"
          icon-url="https://scrumpoker.chongxian.dev/favicon.ico"
          icon-background="#FFFFFF"
        />

        <AppCard
          title="JSONer | A minimalist JSON beautifier"
          description="JSONer helps to format the input JSON and beautify it to display in a more readable way."
          url="https://www.jsoner.app/"
          icon-url="https://www.jsoner.app/favicon.ico"
        />

        <AppCard
          title="EasyStore Double Eleven Festival Page 2022"
          description="Real-time sales monitoring page for Double Eleven Festival 2022."
          :image-url="double_eleven_preview"
          :icon-url="easystore_logo"
          @click="showVideoDialog('https://www.youtube.com/embed/3UieV-l5xwE')"
        />

        <AppCard
          title="EasyStore Internal Chrome Extension"
          description="Quick access tool for EasyStore teammates that show analytics"
          :image-url="chrome_extension_preview"
          :icon-url="chrome_web_store_logo"
          @click="showVideoDialog('https://www.youtube.com/embed/MTWDtjDOGck')"
        />

        <AppCard
          title="Draw a Line | Easy line graph illustrating tool"
          description="Get elegant and highly customized line graph in a glance."
          url="https://draw-a-line.vercel.app/"
          icon-url="https://draw-a-line.vercel.app/logo.svg"
        />
      </div>
    </div>

    <Divider id="contacts" />

    <div class="mx-8 sm:mx-64 pb-40">
      <h1 class="text-xl font-bold mb-2">Contacts</h1>
      <div class="dark:text-[#A1A1A1]">Let's say hi</div>

      <div class="mt-3 -ml-3">
        <a
          href="mailto:chongxian.goh@gmail.com"
          class="flex items-center underline hover:bg-gray-100 dark:hover:bg-[#171717] sm:w-96 p-3 rounded-lg transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7 mr-2"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
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
          class="flex items-center underline hover:bg-gray-100 dark:hover:bg-[#171717] sm:w-96 p-3 rounded-lg transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7 mr-2"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
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

    <div class="mx-8 sm:mx-64 pb-40 flex justify-end items-center">
      <div class="rounded bg-black h-1.5 w-1.5 mr-2"></div>
      <button
        class="text-dark dark:text-[#333333]"
        @click="setThemeMode('light')"
      >
        Light
      </button>
      <div class="ml-7 rounded bg-white h-1.5 w-1.5 mr-2"></div>
      <button
        class="text-[#E5E7EB] dark:text-white"
        @click="setThemeMode('dark')"
      >
        Dark
      </button>
    </div>

    <div
      id="cursor-circle"
      class="w-10 h-10 bg-gray-900 rounded-full absolute pointer-events-none invert mix-blend-difference z-40 block"
      :class="{ invisible: circle.is_invisible }"
      :style="{ left: `${circle.pos.x}px`, top: `${circle.pos.y}px` }"
    ></div>

    <div
      v-if="video_dialog.visible && video_dialog.url"
      class="bg-black bg-opacity-50 h-screen w-screen flex justify-center items-center z-50 fixed top-0 left-0"
      @click="video_dialog.visible = false"
    >
      <div
        class="w-11/12 md:w-3/4 md:h-3/4 aspect-video rounded-lg overflow-hidden"
      >
        <iframe
          width="100%"
          height="100%"
          :src="video_dialog.url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Divider from '../layouts/components/Divider.vue'
import AppCard from '../layouts/components/AppCard.vue'
import Header from '~/layouts/components/Header.vue'

import doubleElevenPreview from '@/assets/images/double-eleven-preview.png'
import chromeExtensionPreview from '@/assets/images/chrome-extension-preview.png'
import easystoreLogo from '@/assets/images/easystore-logo-icon.svg'
import chromeWebStoreLogo from '@/assets/images/chrome-web-store-icon.png'

export default {
  components: { Header, Divider, AppCard },

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
          name: 'ui ux enthusiast',
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
      scroll_y: 0,
      double_eleven_preview: doubleElevenPreview,
      chrome_extension_preview: chromeExtensionPreview,
      easystore_logo: easystoreLogo,
      chrome_web_store_logo: chromeWebStoreLogo,
      video_dialog: {
        visible: false,
        url: null,
      },
    }
  },
  created() {},
  mounted() {
    this.initCircleCursor()
    this.initRolesFadeEffect()
    window.addEventListener('scroll', this.onPageScroll)
  },
  methods: {
    timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    },
    onMouseMove(e) {
      this.mouse.pos.x = e.pageX - 20
      this.mouse.pos.y = e.pageY - 20
    },
    onPageScroll(e) {
      this.circle.pos.y += (window.scrollY - this.scroll_y) / 6
      this.mouse.pos.y += window.scrollY - this.scroll_y
      this.scroll_y = window.scrollY
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

      this.circle.pos.x = this.mouse.pos.x
      this.circle.pos.y = this.mouse.pos.y

      this.circle.is_invisible = false

      this.interval = setInterval(() => {
        this.circle.pos.x += (this.mouse.pos.x - this.circle.pos.x) / 15
        this.circle.pos.y += (this.mouse.pos.y - this.circle.pos.y) / 15
      }, 1)
    },
    showVideoDialog(url) {
      this.video_dialog.url = url
      this.video_dialog.visible = true
    },

    setThemeMode(mode) {
      mode = mode === 'light' ? 'light' : 'dark'
      localStorage.setItem('theme', mode)

      if (mode === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
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
</style>
