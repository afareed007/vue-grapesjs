import VBtn from '@/components/grapes-components/v-btn';

export default function addVBtnBlock(editor) {
  const blockManager = editor.BlockManager;
  const comps = editor.DomComponents;

  const type = 'v-btn';

  blockManager.add(type, {
    label: 'Button',
    content: '<v-btn />'
  });

  comps.addType(type, VBtn(editor));
}
