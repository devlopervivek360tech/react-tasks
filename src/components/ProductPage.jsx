import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

let ProductPage = () => {
  const [data, setData] = useState([]);
  const [itemData, setItemData] = useState();

  useEffect(() => {
    axios
      .get(" https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("You encounterd an erro code: " + error);
      });
  }, []);

  let addToCart = (item) => {
    let storedData = JSON.parse(localStorage.getItem("cartData")) || [];
    if (!Array.isArray(storedData)) {
      storedData = [];
    }
    let found = storedData.find((product) => product.id === item.id);

    if (found) {
      window.alert(
        `Product "${item.title}" is already in cart. go to cart and increase the count`
      );
    } else {
      const newCartData = [...storedData, item];
      localStorage.setItem("cartData", JSON.stringify(newCartData));
      window.alert(`Product "${item.title}" added to cart.`);
    }
  };

  let respectiveItem = (item) => {
    localStorage.setItem("selectedProduct", JSON.stringify(item));
  };

  return (
    <>
      <section className="py-24 bg-blue-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-bold text-3xl min-[400px]:text-4xl text-white mb-14 text-center">
            Available Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, id) => (
              <div
                className="max-w-[384px] p-3.5 bg-blue-100 rounded-2xl"
                key={id}
              >
                <div className="w-full max-w-sm aspect-square ">
                  <Link to="/product" onClick={() => respectiveItem(item)}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </Link>
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <div className="max-w-4/6">
                    <h6 className="font-medium text-lg leading-8 text-black mb-2">
                      {item.title}
                    </h6>
                    <h6 className="font-semibold text-lg leading-8 text-indigo-600">
                      {`$ ${item.price}`}
                    </h6>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex justify-center items-center mb-2.5 mt-3">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-amber-400 me-2"
                      />
                      <p className="text-balance">
                        {item.rating.rate}{" "}
                        <span className="text-gray-500">
                          ({item.rating.count})
                        </span>
                      </p>
                    </div>
                    <button
                      className="cursor-pointer mt-5 p-1 min-[100px]:p-2 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50"
                      onClick={() => addToCart(item)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
