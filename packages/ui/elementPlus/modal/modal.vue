<template>
  <ElDialog
    v-bind="getComponentProps"
    :title="getComponentProps.label ?? ''"
    class="epic-modal-el epic-modal-main"
    destroy-on-close
    @update:modelValue="handleClose"
  >
    <slot>
      <slot name="edit-node">
        <template v-if="children.length">
          <slot name="node" v-for="node in children" :componentSchema="node" />
        </template>
      </slot>
    </slot>
    <div class="epic-modal-footer">
      <ElButton @click="handleClose">关闭</ElButton>
      <ElButton v-if="!props.hideConfirm" type="primary" @click="handleOk">
        {{ getComponentProps.okText ?? "确定" }}
      </ElButton>
    </div>
  </ElDialog>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from "vue";
import { ElDialog, ElButton } from "element-plus";
import { type ComponentSchema } from "@epic-designer/core/types/epic-designer";
const attrs = useAttrs()
// 定义 props
const props = defineProps<{
  componentSchema?:ComponentSchema,
  hideConfirm?: boolean
}>()
// 定义 emits
const emits = defineEmits(["ok", "close", "update:modelValue"]);

// 计算属性
const getComponentProps = computed<Record<string, any>>(() => ({
    ...props.componentSchema,
        ...attrs,
        title: props.componentSchema?.label ?? "",
        class: "epic-modal-el epic-modal-main",
        "destroy-on-close": true
}));

const children = computed(() => props.componentSchema?.children ?? []);

function handleOk() {
  emits("ok");
}

function handleClose() {
  emits("update:modelValue", false);
  emits("close");
}
</script>
