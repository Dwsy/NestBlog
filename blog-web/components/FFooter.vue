<template>
  <div>
    <v-footer app absolute>
      <v-container>
        <div class="text-center mt-6">
          Copyright &copy;
          <a
            class="white--text"
            href="https://heroui.net"
            target="_blank"
            rel="noopener noreferrer"
            >HreoUI</a
          >
          {{ new Date().getFullYear() }}. All rights reserved.
        </div>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    heroui: [
      {
        text: "Github",
        href: "https://github.com/Dwsy",
      },
      {
        text: "Themes",
        // href: "https://heroui.net/",
      },
    ],
  }),
};
</script>
