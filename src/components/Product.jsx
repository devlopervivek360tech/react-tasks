import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

let Product = () => {
  const itemData = JSON.parse(localStorage.getItem("selectedProduct"));
  // console.log('itemData: ', itemData);
  

  return (
    <>
      <section className="py-12 px-5 bg-blue-950">
        <div>
          <h1 className="title font-manrope font-medium text-4xl leading-10 pb-8 text-center text-white">{`${itemData.title} Details`}</h1>
          <div className="bg-blue-100 p-5 md:p-7 rounded-2xl lg:flex">
            <div className="flex justify-center">
              <img
                src={itemData.image}
                alt={itemData.title}
                className="rounded-2xl h-auto w-auto"
              />
            </div>
            <div className="mt-7 lg:mt-0 lg:ms-5 p-2.5 lg:p-5 bg-white rounded-2xl">
              <p className="font-bold text-base leading-7 text-black mb-1.5">
                Name:{" "}
                <span className="text-gray-700 font-normal">
                  {itemData.title}
                </span>
              </p>
              <p className="font-bold text-base leading-7 text-black mb-1.5">
                Category:{" "}
                <span className="text-gray-700 font-normal">
                  {itemData.category}
                </span>
              </p>
              <p className="font-bold text-base leading-7 text-black mb-1.5">
                Description:{" "}
                <span className="text-gray-700 font-normal">
                  {itemData.description}
                </span>
              </p>
              <div className="md:flex">
                <p className="font-bold text-base leading-7 text-black mb-1.5">
                  Price:{" "}
                  <span className="text-gray-700 font-normal">{`$ ${itemData.price}`}</span>
                </p>
                <p className="font-bold text-base leading-7 text-black mb-1.5 md:ms-7">
                  Ratings:{" "}
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-amber-400 me-2"
                  />
                  <span className="text-gray-700 font-normal">{`${itemData.rating.rate} (${itemData.rating.count})`}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
