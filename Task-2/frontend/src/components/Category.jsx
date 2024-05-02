const Category = () => {
  const images = [
    "https://shreeappliancesandphoneservices.com.au/wp-content/uploads/2023/11/3-e1699444794819.png",
    "https://shreeappliancesandphoneservices.com.au/wp-content/uploads/2023/11/5-e1699444486583.png",
    "https://shreeappliancesandphoneservices.com.au/wp-content/uploads/2023/11/2-e1699444543905.png",
    "https://shreeappliancesandphoneservices.com.au/wp-content/uploads/2023/11/1-1-e1699444719480.png",
    "https://shreeappliancesandphoneservices.com.au/wp-content/uploads/2023/11/4-e1699444652845.png",
  ];
  const names =["Refrigerator","Washing Machines", "Tv's" , "Mobiles" ,"Phone Repaires"]
  return (
    <div className=" flex flex-col items-center justify-center ">
      <h1 className=" text-4xl m-3 font-semibold">Shop by Category</h1>
      <div className="flex gap-6">
        {images.map((image, i) => {
          return (
            <div key={i} className="flex flex-col items-center justify-center">
              <img className=" w-60" src={image} />
              <p className=" font-medium text-xl underline">{names[i]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
