<template>
  <div>
    <img :src="qrcode" alt="QR Code" />
  </div>
</template>

<script lang="ts" setup>
import { useQRCode } from "@vueuse/integrations/useQRCode";

const props = defineProps<{ link: string }>();

const qrcode = useQRCode(props.link);
</script>

<style>
img {
  fill: violet;
  color: white;
}
</style>
