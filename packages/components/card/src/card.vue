<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui'

const props = withDefaults(defineProps<PrimitiveProps>(), {
  as: 'div',
})
</script>

<template>
  <Primitive v-bind="props">
    <slot />
  </Primitive>
</template>
