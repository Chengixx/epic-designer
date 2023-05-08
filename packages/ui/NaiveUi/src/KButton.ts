import type { PropType } from 'vue';
import { defineComponent, h, renderSlot } from 'vue';
import { NButton } from 'naive-ui';
import { NodeItem } from '../../../types/kDesigner';

// 二次封装组件
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      require: true,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    return () => {
      const componentProps: { [propName: string]: any } = {
        ...props.record?.componentProps
      };

      return h(NButton, componentProps, {
        default: () => renderSlot(slots, 'default', {}, () => [props.record?.label])
      });
    };
  }
});
