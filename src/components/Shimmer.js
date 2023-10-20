const Shimmer = () => {
  return (
    <>
    <div className="flex">

    <div className=" bg-gray-200 w-[1000px] mx-[50px] my-6 h-[50px] border px-4 py-2 rounded-xl " ></div>
    <div className="bg-gray-200 h-[50px] w-[100px] rounded-2xl my-6"></div>
</div>

    <div className="restaurant-list flex flex-wrap justify-center">
      {Array(10)
        .fill("")
        .map((e) => (
          <div className="shimmer-card  bg-gray-200 w-[240px] h-[300px] p-[10px] px-2 mx-4 my-2  rounded-2xl "></div>
        ))}
    </div>
    </>
  );
};

export default Shimmer;
