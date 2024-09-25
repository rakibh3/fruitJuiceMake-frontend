import { motion } from "framer-motion";
import { FadeLeft } from "../../utils/animatio";
import apple from "../../assets/fruits/apple.png";
import orange from "../../assets/fruits/orange.png";
import avocado from "../../assets/fruits/avocado.png";
import cherries from "../../assets/fruits/cherry.png";

const CategorysData = [
  {
    id: 1,
    title: "Apple",
    image: apple,
  },
  {
    id: 1,
    title: "Oranges",
    image: orange,
  },
  {
    id: 1,
    title: "Avocado",
    image: avocado,
  },
  {
    id: 1,
    title: "Cherries",
    image: cherries,
  },
];

const Category = () => {
  return (
    <section>
      <div className="container pb-20 pt-12">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pb-10 text-left text-2xl font-bold uppercase"
        >
          Our Category
        </motion.h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {CategorysData?.map((category, index) => (
            <motion.div
              variants={FadeLeft(0.4 + index * 0.4)}
              initial="hidden"
              whileInView={"visible"}
              whileHover={{ scale: 1.1 }}
              key={category.id}
              className="flex flex-row items-center justify-around gap-3 rounded-3xl bg-white px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
            >
              <div>
                <img
                  src={category.image}
                  alt=""
                  className="mb-4 w-[60px] -translate-y-6 scale-110 transform"
                />
              </div>
              <div>
                <h1 className="text-lg font-semibold">{category.title}</h1>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Category;
