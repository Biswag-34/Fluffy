const Hero = () => {
    return (
      <section id="home" className="h-screen bg-[url('/images/petshop-bg.jpg')] bg-cover bg-center flex items-center justify-center text-center text-white">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to PetShop</h1>
          <p className="mt-4 text-lg">Your one-stop store for all pet needs.</p>
          <a href="#services" className="mt-6 inline-block px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">Explore Now</a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  