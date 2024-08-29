export default function addAnotherBlock(editor) {
    const blockManager = editor.BlockManager;

    blockManager.add('another-block', {
        label: 'Another Block',
        content: '<div class="another-block-class"><p>Another block content</p></div>',
        category: 'Basic',
    });
}
