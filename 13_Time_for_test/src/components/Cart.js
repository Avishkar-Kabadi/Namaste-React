import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { showToast, showLoader, hideLoader } from "neon-alerts";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {


        showLoader(2, "Clearing cart...");
        setTimeout(() => {
            hideLoader();
            dispatch({ type: "cart/clearCart" });
            showToast("Cart cleared!");
        }, 2000);



    }

    const handleAddItem = (item) => {
        dispatch({ type: "cart/addItem", payload: item })
    }
    const handleRemoveItem = (item) => {
        dispatch({ type: "cart/removeItem", payload: item })
    }

    return (
        <div className="text-left m-4 p-4 flex flex-col ">
            <h1 className="text-2xl text-center font-bold">Cart</h1>
            <div className="text-left -scroll-mx-16"> {cartItems.length != 0 && <button className=" mt-10  rounded p-2 m-2 bg-black text-white" onClick={handleClearCart} >Clear Cart</button>}</div>

            <ul className="list-disc list-inside mt-4">
                {cartItems.length === 0 ? (
                    <p className="text-center mt-6">Your cart is empty.</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div className="p-2 m-2 flex flex-col border-b border-gray-300  items-center " key={index}>

                            <div className="flex flex-col ">
                                <ItemList key={index} items={{ [item.id]: item }} />

                                <div className="pb-2 flex flex-row-reverse justify-between border-b border-gray-500 ">
                                    <p className="text-right text-xl w-[80%] font-bold">Qty:{item.quantity}</p>

                                    <button className="items-end  w-10   rounded p-auto bg-black text-white" onClick={() => handleAddItem(item)} > + </button>
                                    <button disabled={item.quantity <= 1} className="items-end  w-10   rounded p-auto bg-gray-500 text-white" onClick={() => handleRemoveItem(item)} > - </button>


                                </div>
                                <p>Total Amount : {item.quantity * item.price}</p>

                            </div>

                        </div>
                    ))
                )}
            </ul>

        </div>
    )
}

export default Cart;