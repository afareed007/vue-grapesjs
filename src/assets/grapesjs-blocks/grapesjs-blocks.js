export default function addCustomBlocks(editor) {
    const blockManager = editor.BlockManager;

    // 3-Column Block
    blockManager.add('3-column-block', {
        label: '3 Columns',
        content: `
        <div style="display: flex; justify-content: space-between;">
          <div style="flex: 1; padding: 10px; border: 1px solid #ddd;">Column 1</div>
          <div style="flex: 1; padding: 10px; border: 1px solid #ddd;">Column 2</div>
          <div style="flex: 1; padding: 10px; border: 1px solid #ddd;">Column 3</div>
        </div>`,
        category: 'Layout',
    });

    blockManager.add('components-vue', (editor, options) => {
        var blockManager = editor.BlockManager
        var comps = editor.DomComponents
        var config = editor.getConfig();
        config.forceClass = 0;

        blockManager.add(type, {
            label: 'Button',
            content: '<v-btn />'
        })

        comps.addType(type, VBtn(editor))
    })
}
