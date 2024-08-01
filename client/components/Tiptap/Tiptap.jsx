import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Image from '@tiptap/extension-image';
import TextStyle from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import FontSize from './Fontsize'; 
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link'; 

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Image,
      TextStyle,
      FontSize,
      FontFamily.configure({
        types: ['textStyle'],
      }),
      TextAlign.configure({
        types: ['paragraph'],
      }),
      Link.configure({
      }),
    ],
    content: '<p></p>', 
  });

  if (!editor) {
    return null;
  }

  const handleAlignment = (alignment) => {
    editor.chain().focus().setTextAlign(alignment).run();
  };

  const addImage = () => {
    const url = window.prompt('URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = window.prompt('Enter URL');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const removeLink = () => {
    editor.chain().focus().unsetLink().run();
  };

  return (
    <div className='container-tip'>
      <div className="menu">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
        >
          Bold
        </button>
        <button onClick={addImage}>Add Image</button>
        <button onClick={addLink}>Add Link</button>
        <button onClick={removeLink}>Remove Link</button>

        <select
          onChange={(e) => editor.chain().focus().setFontSize(e.target.value).run()}
        >
          <option value="12">12px</option>
          <option value="14">14px</option>
          <option value="16">16px</option>
          <option value="18">18px</option>
          <option value="24">24px</option>
          <option value="32">32px</option>
          <option value="64">64px</option>
          <option value="128">128px</option>
        </select>
        <select
          onChange={(e) => editor.chain().focus().setFontFamily(e.target.value).run()}
        >
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
        <button onClick={() => handleAlignment('left')}>Align Left</button>
        <button onClick={() => handleAlignment('center')}>Align Center</button>
        <button onClick={() => handleAlignment('right')}>Align Right</button>
        <button onClick={() => handleAlignment('justify')}>Justify</button>
      </div>
      <div className="tiptap-container">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
