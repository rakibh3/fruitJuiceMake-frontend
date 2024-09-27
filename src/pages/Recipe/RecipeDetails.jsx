import ImageSlider from "../../components/Shared/ImageSlider";
const dummyTripData = {
  photos: [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  ],
  createdBy: {
    profile: {
      profilePhoto: "https://via.placeholder.com/150",
      name: "John Doe",
      bio: "Passionate traveler who loves exploring new places.",
    },
    username: "john_doe",
    _count: {
      trip: 5,
    },
  },
  createdAt: new Date(),
  location: "Paris, France",
  tripType: "Adventure",
  itinerary: "Day 1: Arrival in Paris, Day 2: Eiffel Tower visit, etc.",
  description: "This was a wonderful trip exploring the beauty of Paris.",
};

const RecipeDetails = () => {
  return (
    <div className="container my-24">
      <ImageSlider tripImgs={dummyTripData?.photos || []} />
    </div>
  );
};
export default RecipeDetails;
