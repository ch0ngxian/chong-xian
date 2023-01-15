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

    <!-- I am a horizontal person, because I belive learning knowledge from different field can create exponential synergy to -->
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
        I solve problems with user-first products, design and build them with easy-to-use experience ❤️.
      </div>
    </div>

    <div class="flex justify-end box-border items-end w-screen overflow-hidden pt-10 sm:px-64 sm:pt-24">
      <img class="w-[80%] translate-x-12 sm:w-[40%]" src="@/assets/images/avatar.png" />
    </div>
    <!-- flex justify-end items-end p-20  translate-x-24 sm:-translate-x-24 sm:mx-64 sm:mb-20 -->
    <!-- <div
      class="canva flex justify-end box-border items-end w-screen overflow-hidden p-20 sm:px-64 sm:pb-20"
    >
      <div
        class="core rounded-full bg-black h-56 w-56 translate-x-24 sm:-translate-x-0"
      >
        <div class="orbit"></div>
        <div class="orbit"></div>
        <div class="orbit"></div>
        <div class="orbit"></div>
        <div class="orbit"></div>
      </div>
    </div> -->

    <Divider id="works" class="mt-0" />

    <div class="mb-40" style="height: 80vh">
      <h1 class="mx-8 sm:mx-64 text-xl font-bold mb-2">Works</h1>
      <div class="mx-8 sm:mx-64">I built these apps</div>

      <div
        class="flex w-screen box-border overflow-x-scroll overflow-y-hidden px-8 sm:px-64 py-36 -mt-28"
      >
        <AppCard
          title="JSONer | A minimalist JSON beautifier"
          description="JSONer helps to format the input JSON and beautify it to display in a more readable way."
          url="https://www.jsoner.app/"
          icon-url="https://www.jsoner.app/favicon.ico"
        />
        <AppCard
          title="Draw a Line | Easy line graph illustrating tool"
          description="Get elegant and highly customized line graph in a glance."
          url="https://draw-a-line.netlify.app/"
          icon-url="https://draw-a-line.netlify.app/logo.svg"
        />
      </div>
    </div>

    <Divider id="contacts" />

    <div class="mx-8 sm:mx-64 pb-40">
      <h1 class="text-xl font-bold mb-2">Contacts</h1>
      <div class="">Let's say hi</div>

      <div class="mt-3 -ml-3">
        <a
          href="mailto:chongxian.goh@gmail.com"
          class="flex items-center underline hover:bg-gray-100 sm:w-96 p-3 rounded-lg transition"
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
          class="flex items-center underline hover:bg-gray-100 sm:w-96 p-3 rounded-lg transition"
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
// import {
//   Color,
//   Fog,
//   Mesh,
//   MeshBasicMaterial,
//   PerspectiveCamera,
//   PointLight,
//   Scene,
//   SphereGeometry,
//   WebGLRenderer,
// } from 'three'
import Divider from '../layouts/components/Divider.vue'
import AppCard from '../layouts/components/AppCard.vue'
import Header from '~/layouts/components/Header.vue'

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
    }
  },
  created() {},
  mounted() {
    this.initCircleCursor()
    this.initRolesFadeEffect()

    // const scene = new Scene()
    // scene.background = new Color('transparent')
    // const geometry = new SphereGeometry(1, 64, 64)
    // const material = new MeshBasicMaterial({
    //   color: new Color('black'),
    //   fog: true,
    // })
    // const sphere = new Mesh(geometry, material)
    // scene.add(sphere)
    // scene.fog = new Fog(0xffffff, 10, 100)
    // const light = new PointLight(0xffffff)
    // light.position.set(-1, 2, 4)
    // scene.add(light)
    // const renderer = new WebGLRenderer({
    //   canvas: this.$refs.sphere_canva,
    //   antialias: true,
    //   alpha: true,
    // })
    // renderer.setPixelRatio(window.devicePixelRatio)
    // const camera = new PerspectiveCamera(
    //   75,
    //   window.innerWidth / window.innerHeight,
    //   0.1,
    //   1000
    // )
    // camera.position.set(0, 0, 5)
    // function animate() {
    //   requestAnimationFrame(animate)
    //   sphere.rotation.x += 0.01
    //   sphere.rotation.y += 0.01
    //   renderer.render(scene, camera)
    // }
    // animate()
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

      this.circle.pos.x = this.mouse.pos.x
      this.circle.pos.y = this.mouse.pos.y

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

.canva .core {
  transform-style: preserve-3d;
  animation: stand infinite linear;
}

.canva .orbit:nth-child(1) {
  @apply absolute border-8 bg-transparent rounded-full z-50;
  top: -10rem;
  left: -10rem;
  width: 250%;
  height: 250%;
  transform-style: preserve-3d;
  transform: rotateX(80deg) rotateY(20deg);
}
/*
.canva .orbit:nth-child(2) {
  @apply absolute border-8 bg-transparent rounded-full z-50;
  top: -7rem;
  left: -6rem;
  width: 150%;
  height: 150%;
  transform-style: preserve-3d;
  transform: rotateX(80deg) rotateY(-20deg);
} */

.canva .orbit:nth-child(3) {
  @apply absolute border-8 bg-transparent rounded-full z-50;
  top: -7rem;
  left: -8rem;
  width: 200%;
  height: 200%;
  transform-style: preserve-3d;
  transform: rotateX(80deg) rotateY(-20deg);
}

/* .canva .orbit:nth-child(4) {
  @apply absolute border-8 bg-transparent rounded-full z-50;
  top: 1rem;
  left: -2rem;
  width: 150%;
  height: 150%;
  transform-style: preserve-3d;
  transform: rotateX(80deg) rotateY(-20deg);
} */

/* .canva .orbit:nth-child(5) {
  @apply absolute border-8 bg-transparent rounded-full z-50;
  top: -7rem;
  left: -4rem;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateX(80deg) rotateY(-20deg);
} */

@keyframes stand {
  0% {
    transform: rotateX(-90deg) rotateY(360deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
  }
}
</style>
