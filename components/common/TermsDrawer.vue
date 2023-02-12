<template>
  <ui-bottom-sheet
    v-model="open"
    class="sheet"
    @update:modelValue="handleSheetStatusChange"
  >
    <div class="p-4 pt-8 pb-4">
      Aloha! By exploring our website further, you're letting us know that
      you've taken a look at our
      <a
        href="/terms_and_conditions.html"
        target="_blank"
        rel="noopener noreferrer"
        class="text-cyan-600"
      >
        Terms and Conditions
      </a>
      and
      <a
        href="/Privacy"
        target="_blank"
        rel="noopener noreferrer"
        class="text-cyan-600"
        >Privacy Policy</a
      >
      and that you're in agreement with them. Mahalo!
    </div>
    <div class="m-4 mt-4 mb-8 flex flex-row-reverse">
      <ui-button type="raised" @click="handleAcceptTermsClick"
        >I agree, continue.</ui-button
      >
    </div>
  </ui-bottom-sheet>
</template>

<script lang="ts" setup>
import { termsAccept } from '@/const/const';
const open = ref(false);

const handleSheetStatusChange = () => {
  open.value = true;
};

const handleAcceptTermsClick = async () => {
  open.value = false;
  localStorage.setItem(termsAccept, 'true');
};

// show panel if not accepted before
onMounted(() => {
  const hasTermsAccepted = localStorage.getItem(termsAccept) === 'true';

  if (!hasTermsAccepted) {
    open.value = true;
  }
});
</script>
