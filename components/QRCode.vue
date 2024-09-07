<template>
  <div>
    <img :src="qrcode" alt="QR Code" />
  </div>
</template>

<script lang="ts" setup>
import { useQRCode } from "@vueuse/integrations/useQRCode";
import { useRouteParams } from "@vueuse/router";

const link = useRouteParams(
  "link",
  "https://sti-powerofmany.vercel.app/LandingPage",
);
const qrcode = useQRCode(link.value);
</script>

<style>
img {
  fill: violet;
  color: white;
}
</style>
