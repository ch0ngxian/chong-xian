<template>
  <div class="bg-white h-screen" @mousemove="onMouseMove">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
    </head>
    <Main>
      <div class="h-[1px] bg-gray-100 mx-20 md:mx-64"></div>
      <div class="mx-20 md:mx-64 mt-20">
        Hello, I am Chong Xian.
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
    </Main>
    <div
      id="cursor-circle"
      class="w-10 h-10 bg-gray-900 rounded-full absolute pointer-events-none invert mix-blend-difference z-50 block"
      :style="{ left: `${circle.pos.x}px`, top: `${circle.pos.y}px` }"
    ></div>
  </div>
</template>

<script>
import Main from '~/layouts/Main.vue'
export default {
  components: { Main },

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
          name: 'product owner',
          is_active: false,
          is_hidden: true,
        },
        {
          name: 'ui ux expert',
          is_active: false,
          is_hidden: true,
        },
      ],
      circle: {
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
  created() {
    this.initCircleFollowMouse()
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
    initCircleFollowMouse() {
      const _this = this

      setInterval(() => {
        _this.circle.pos.x += (_this.mouse.pos.x - _this.circle.pos.x) / 6
        _this.circle.pos.y += (_this.mouse.pos.y - _this.circle.pos.y) / 6
      }, 20)
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

.circle-invert {
  filter: invert(1);
  mix-blend-mode: difference;
}
</style>
