<template>
  <div class="flex justify-between pt-10 mx-10 sm:mx-64">
    <a class="cursor-pointer" href="/">
      <svg
        ref="logo"
        height="100%"
        viewBox="0 0 584 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_17_2)">
          <path
            d="M66 0H0V79H66V0Z"
            fill="currentColor"
            stroke="currentColor"
          />
          <path
            d="M81 78V1L130 78H81Z"
            fill="currentColor"
            stroke="currentColor"
          />
          <circle cx="159" cy="50" r="29" fill="currentColor" />
          <path
            d="M203 77V21L251 77H203Z"
            fill="currentColor"
            stroke="currentColor"
          />
          <path
            d="M260 102V22H313V102H260Z"
            fill="currentColor"
            stroke="currentColor"
          />
          <path
            d="M364 79V1H427V79H364Z"
            fill="currentColor"
            stroke="currentColor"
          />
          <path
            d="M442 78V21H464V78H442Z"
            fill="currentColor"
            stroke="currentColor"
          />
          <path
            d="M479 78V21H522V78H479Z"
            fill="currentColor"
            stroke="currentColor"
          />
          <path
            d="M537 80V23L584 80H537Z"
            fill="currentColor"
            stroke="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_17_2">
            <rect width="584" height="102" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>

    <div class="invisible sm:visible flex justify-end">
      <a class="ml-10 cursor-pointer nav-item" href="#works">Works</a>
      <a class="ml-10 cursor-pointer nav-item hidden" href="#blogs">Blogs</a>
      <a class="ml-10 cursor-pointer nav-item" href="#contacts">Contacts</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.nav-item:after {
  display: block;
  content: '';
  border-bottom: solid 2px;
  @apply border-black dark:border-white;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}

.nav-item:hover:after {
  transform: scaleX(1);
}

.nav-item:after {
  transform-origin: 0% 50%;
}
</style>
