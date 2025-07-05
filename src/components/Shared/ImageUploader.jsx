import { useState } from 'react'

const ImageUploader = ({ setSelectedFile }) => {
  const [imagePreview, setImagePreview] = useState(null)

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
    const reader = new FileReader()
    reader.onload = () => {
      setImagePreview(reader.result)
    }
    reader.readAsDataURL(event.target.files[0])
  }

  return (
    <div className="flex w-full items-center justify-center">
      <label
        htmlFor="file-upload"
        className="flex h-96 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-600"
      >
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Selected Image"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-lg font-medium text-gray-600 dark:text-gray-300">
            Select an image
          </span>
        )}
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept="image/*"
        />
      </label>
    </div>
  )
}

export default ImageUploader
