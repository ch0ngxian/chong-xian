<template>
  <div class="flex justify-between py-5 mx-64 my-5">
    <div class="cursor-pointer">
      <svg height="100%" viewBox="0 0 584 102" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_17_2)">
          <path d="M66 0H0V79H66V0Z" fill="black" stroke="black" />
          <path d="M81 78V1L130 78H81Z" fill="black" stroke="black" />
          <circle cx="159" cy="50" r="29" fill="black" />
          <path d="M203 77V21L251 77H203Z" fill="black" stroke="black" />
          <path d="M260 102V22H313V102H260Z" fill="black" stroke="black" />
          <path d="M364 79V1H427V79H364Z" fill="black" stroke="black" />
          <path d="M442 78V21H464V78H442Z" fill="black" stroke="black" />
          <path d="M479 78V21H522V78H479Z" fill="black" stroke="black" />
          <path d="M537 80V23L584 80H537Z" fill="black" stroke="black" />
        </g>
        <defs>
          <clipPath id="clip0_17_2">
            <rect width="584" height="102" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>

    <div class="flex justify-end">
      <div class="ml-10 cursor-pointer nav-item">Works</div>
      <div class="ml-10 cursor-pointer nav-item">Blogs</div>
      <div class="ml-10 cursor-pointer nav-item ">Contacts</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped >
.nav-item:after {
  display: block;
  content: '';
  border-bottom: solid 2px black;
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
