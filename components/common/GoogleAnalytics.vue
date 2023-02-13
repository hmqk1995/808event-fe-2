<script lang="ts" setup>
useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-08P9ZN95PZ',
      async: true,
    },
    {
      innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-08P9ZN95PZ');
      `,
      type: 'text/javascript',
    },
  ],
});
</script>
