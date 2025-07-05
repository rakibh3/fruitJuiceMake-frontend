const ImageSlider = ({ recipeImage, imageAlt }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-md md:h-[500px] md:flex-row-reverse dark:bg-gray-800">
      <div className="relative aspect-video grow overflow-hidden rounded-xl transition-shadow duration-300 ease-in-out hover:shadow-xl md:aspect-auto">
        <img
          src={recipeImage}
          alt={imageAlt}
          className="h-full w-full rounded-lg object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
    </div>
  )
}

export default ImageSlider
