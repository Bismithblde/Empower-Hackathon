import React from 'react'
import "./BlogCreator.css"
import Tiptap from '../../../components/Tiptap/Tiptap.tsx'
export default function BlogCreator() {
  return (
    <div className='blog-creator-page-container'>
        <div className='card'>
            <Tiptap />
        </div>
    </div>
  )
}
