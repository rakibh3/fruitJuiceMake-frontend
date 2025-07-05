import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Editor = ({ value = '', onChange }) => {
  const [editorValue, setEditorValue] = useState(value)

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    ['link'],
    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],
    [{ size: ['small', false, 'large', 'huge'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ['clean'],
  ]

  const modules = {
    toolbar: toolbarOptions,
  }

  useEffect(() => {
    setEditorValue(value)
  }, [value])

  const handleEditorChange = (newValue) => {
    setEditorValue(newValue)
    onChange(newValue)
  }

  return (
    <div className="h-56 dark:bg-gray-800 dark:text-white">
      <ReactQuill
        className="flex h-full flex-col !rounded-lg"
        modules={modules}
        theme="snow"
        value={editorValue}
        onChange={handleEditorChange}
      />
    </div>
  )
}

export default Editor
