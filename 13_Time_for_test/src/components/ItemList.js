
import {
    hideLoader,
    showLoader, showToast
} from "neon-alerts";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {

    const dispatch = useDispatch();
    const addToCart = (item) => {
        dispatch({ type: "cart/addItem", payload: item })
        // showAlert("Profile updated!");
        // showToast("Item added to cart!", "warning");
        // showLoader(3, "Loading...");

        // Hide loader
        // setTimeout(() => {
        //     hideLoader();
        // }, 2000);
    }

    return (
        <div>
            {Object.values(items).map((item) => (
                <div
                    data-testid="food-items"
                    key={item.id}
                    className="flex justify-between py-4 my-3 border-b border-gray-200"
                >
                    <div className="w-8/12 text-left pr-4">
                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-800">{item.name}</span>
                            <span className="font-medium">₹ {item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>

                    <div className="w-4/12 relative flex justify-end">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-28 h-28 object-cover rounded-lg shadow-md"
                        />
                        <button onClick={() => addToCart(item)} className="absolute bottom-1 right-1 bg-white border border-gray-300 text-green-600 font-semibold text-sm rounded-md px-3 py-1 shadow-sm hover:scale-105 hover:shadow-md transition-all">
                            Add
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
