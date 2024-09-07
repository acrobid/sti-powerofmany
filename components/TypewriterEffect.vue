<template>
  <div id="typewriter" ref="typewriterRef" />
</template>

<script lang="ts" setup>
import type { Options, TypewriterClass } from "typewriter-effect";
// @ts-expect-error I can't figure out how to type this
import Typewriter from "typewriter-effect/dist/core";

const props = defineProps<{ options: Options }>();

const typewriterRef = ref<HTMLElement | null>(null);
const typewriter = ref<TypewriterClass | null>(null);

onMounted(() => {
  if (typewriterRef.value) {
    typewriter.value = new Typewriter(typewriterRef.value, props.options);
  }
  runTypewriter();
});

function runTypewriter() {
  if (typewriter.value && props.options.strings) {
    const textString = Array.isArray(props.options.strings)
      ? props.options.strings.join(" ")
      : props.options.strings;
    typewriter.value.pauseFor(250).deleteAll(1).typeString(textString).start();
  }
}
</script>
