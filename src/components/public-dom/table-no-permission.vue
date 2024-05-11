<template>
    <FrownOutlined class="no-limits-icon" />
    <div>{{ t('public.nolimits') }}</div>
</template>

<script setup lang="ts">
import { FrownOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>