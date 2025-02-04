const Services = () => {
    return (
      <section id="services" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="/images/grooming.jpeg" alt="Grooming" className="rounded-md"/>
            <h3 className="text-xl font-semibold mt-4">Pet Grooming</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="/images/training.jpeg" alt="Training" className="rounded-md"/>
            <h3 className="text-xl font-semibold mt-4">Pet Training</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="/images/food.jpeg" alt="Pet Food" className="rounded-md"/>
            <h3 className="text-xl font-semibold mt-4">Healthy Pet Food</h3>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  