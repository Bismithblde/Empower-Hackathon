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
import { Input } from '@mui/material';
import { useState } from 'react';
import ImageResize from 'tiptap-extension-resize-image';

const Tiptap = () => {
  const [title, setTitle] = useState('')
  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Image,
      TextStyle,
      FontSize,
      ImageResize,
      FontFamily.configure({
        types: ['textStyle'],
      }),
      TextAlign.configure({
        types: ['paragraph'],
      }),
      Link.configure({}),
    ],
    content: '<p></p>',
  });

  if (!editor) {
    return null;
  }

  const handlePublish = async (e) => {
    e.preventDefault();
    console.log("Published?")
    const text = editor.getHTML()
    const response = await fetch('/api/create-blog', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ title, text })
    })  
    setTitle('')

  };

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
          <option value="Helvetica">Helvetica</option>
          <option value="Garamond">Garamond</option>
          <option value="Palatino">Palatino</option>
          <option value="Trebuchet MS">Trebuchet MS</option>
          <option value="Courier New">Courier New</option>
          <option value="Lucida Sans">Lucida Sans</option>
          <option value="Merriweather">Merriweather</option>
          <option value="Lora">Lora</option>
          <option value="Roboto">Roboto</option>


        </select>
        <button onClick={() => handleAlignment('left')}>Align Left</button>
        <button onClick={() => handleAlignment('center')}>Align Center</button>
        <button onClick={() => handleAlignment('right')}>Align Right</button>
        <button onClick={() => handleAlignment('justify')}>Justify</button>
        <form onSubmit={handlePublish} style={{display: 'flex', gap: '10px'}}>
          <button type='submit'>Publish</button>
          <Input placeholder='Enter Title' onChange={(e) => {setTitle(e.target.value)}} value={title}></Input>
        </form>

      </div>
      <div className="tiptap-container">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
