import { brands } from "../data/productsData.js";
const Brands = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl m-5 font-semibold">Featured Brands</h1>
      <div className="flex mt-6">
        {brands.map((brand, i) => {
          return <img className="w-60" key={i} src={brand} alt={brand} />;
        })}
      </div>
      <div className="grid grid-cols-2 gap-12 p-20">
        <div className="row-span-2">
          <img
            className="w-full"
            src="https://shreeappliancesandphoneservices.com.au/wp-content/uploads/2023/11/1-4-1.png"
            alt="Image 1"
          />
        </div>
        <div className="row-span-2">
          <img
            className="w-full"
            src="https://shreeappliancesandphoneservices.com.au/wp-content/uploads/2023/11/2-5.png"
            alt="Image 2"
          />
        </div>
        <div className="row-span-2">
          <iframe
            title="Google Map"
            width="800"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.302125782021!2d106.6912014153585!3d10.776766792331716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fb89460c737%3A0x9fc221b0de8dcddc!2sBitexco%20Financial%20Tower!5e0!3m2!1sen!2s!4v1613661001307!5m2!1sen!2s"
            allow="fullscreen"
          ></iframe>
        </div>
        <div className="row-span-2">
          <div className="w-96 pl-32">
            <h1 className="text-6xl m-5">We can accept</h1>
            <img
              className="w-full"
              src="https://shreeappliancesandphoneservices.com.au/wp-content/uploads/2022/02/PAyment.png"
              alt="Payment Methods"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
