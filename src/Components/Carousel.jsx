import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Alice Johnson",
    review: "Great service! My dog loved the grooming session.",
    image: "/images/user1.jpeg"
  },
  {
    name: "Mark Smith",
    review: "The best pet shop in town! Friendly staff and quality products.",
    image: "/images/user2.png"
  },
  {
    name: "Sophia Lee",
    review: "Highly recommend! My cat's favorite store for treats.",
    image: "/images/user3.png"
  }
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Customer Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="text-center p-6">
            <img 
              src={review.image} 
              alt={review.name} 
              className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
            />
            <p className="text-lg italic text-gray-700">"{review.review}"</p>
            <h3 className="mt-2 text-xl font-semibold">{review.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
