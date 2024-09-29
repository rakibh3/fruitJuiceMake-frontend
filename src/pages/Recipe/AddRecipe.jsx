import { Controller, useForm } from "react-hook-form";
import Editor from "../../components/Shared/Editor";
import SubmitLoader from "../../components/PageLoader/SubmitLoader";

import { useState } from "react";
import ImageUploader from "../../components/Shared/ImageUploader";

const AddRecipe = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    const recipeData = { ...data, image: selectedFile };
    console.log(recipeData);
  };

  const categories = [
    { value: "", label: "Select a Category" },
    { value: "appetizer", label: "Appetizer" },
    { value: "main_course", label: "Main Course" },
    { value: "dessert", label: "Dessert" },
    { value: "snack", label: "Snack" },
    { value: "beverage", label: "Beverage" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container my-16 mt-24 min-h-screen max-w-6xl md:px-20">
        <h2 className="text-lg font-semibold leading-10 tracking-wide">
          Create Recipe
        </h2>
        <div className="mt-6 grid gap-2 rounded-lg bg-white p-6 shadow-md">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Recipe Name */}
            <div>
              <div className="flex flex-col gap-2">
                <h2 className="flex text-gray-500">Recipe Name</h2>
                <input
                  type="text"
                  {...register("recipeName", { required: true })}
                  placeholder="Recipe Name"
                  className="w-full rounded-md border-2 border-gray-300 bg-gray-100 py-3 pl-4 text-sm outline-none"
                />
              </div>
              <div>
                {errors.recipeName && (
                  <p className="mt-2 text-xs text-rose-500">
                    Recipe name is required
                  </p>
                )}
              </div>
            </div>

            {/* Category */}
            <div>
              <div className="flex flex-col gap-2">
                <h2 className="flex text-gray-500">Category</h2>
                <select
                  {...register("category", { required: true })}
                  className="w-full rounded-md border-2 border-gray-300 bg-gray-100 py-3 pl-4 text-sm outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                {errors.category && (
                  <p className="mt-2 text-xs text-rose-500">
                    Category is required
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* TODO: Add more input here */}
            {/* <input  type="file" /> */}
          </div>

          <div className="grid grid-cols-1 gap-10">
            <div>
              <ImageUploader setSelectedFile={setSelectedFile} />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-gray-500" htmlFor="content">
                Recipe Details
              </label>
              <Controller
                name="recipeDetails"
                placeholder="Enter recipe details"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Editor value={value} onChange={onChange} />
                )}
              />
            </div>

            <div className="flex justify-end gap-7">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-primary/80 px-6 py-2 font-medium text-white shadow-lg hover:bg-primary/90"
              >
                {isSubmitting ? <SubmitLoader /> : "Save"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default AddRecipe;
