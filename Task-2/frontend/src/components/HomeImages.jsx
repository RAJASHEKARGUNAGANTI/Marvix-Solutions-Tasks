const HomeImages = () => {
  return (
    <div className=" lg:grid lg:grid-cols-2 px-32 sm:flex sm:flex-col">
      <div className="col-span-1 m-6 ">
        <img
          className=" mb-6 "
          src="https://shreeappliancesandphoneservices.com.au/wp-content/uploads/2023/11/HOME-APPLIANCES-PHONE-SERVICES-6-scaled.jpg"
        />
        <img
          className=""
          src="https://shreeappliancesandphoneservices.com.au/wp-content/uploads/2023/11/HOME-APPLIANCES-PHONE-SERVICES-2-1-scaled.jpg"
        />
      </div>
      <div className="col-span-1 mt-6 mr-6 mb-6">
        <img
          className="lg:pl-0 sm:pl-5 "
          src="https://shreeappliancesandphoneservices.com.au/wp-content/uploads/2023/11/www.reallygreatsite.com_.png"
        />
      </div>
    </div>
  );
};

export default HomeImages;
