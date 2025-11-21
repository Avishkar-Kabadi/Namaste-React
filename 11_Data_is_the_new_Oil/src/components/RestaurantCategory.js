import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category, setShowIndex, showIndex }) => {

    const handleClick = () => {
        setShowIndex(category.id === showIndex ? null : category.id);
    }


    return (
        <div>
            <div className="w-6/8  bg-gray-50 shadow-lg p-4 mb-2 m-auto border-b border-gray-300 rounded-lg ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-black text-md">{category.categoryName}({Object.values(items).length})</span>
                    <span>{showIndex === category.id ? "🔼" : "🔽"}</span></div>
                {showIndex === category.id && <ItemList items={items} />}
            </div>


        </div>
    )
}

export default RestaurantCategory;


































const items = {
    item1: {
        id: "item1",
        name: "Margherita Pizza",
        price: 299,
        description:
            "Classic cheese pizza topped with fresh mozzarella, tomato sauce, and basil leaves.",
        image:
            "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
    },
    item2: {
        id: "item2",
        name: "Paneer Butter Masala",
        price: 249,
        description:
            "Soft paneer cubes cooked in rich, buttery tomato gravy with aromatic Indian spices.",
        image:
            "https://cdn.pixabay.com/photo/2021/01/16/11/27/paneer-butter-masala-5921411_1280.jpg",
    },
    item3: {
        id: "item3",
        name: "Chicken Biryani",
        price: 349,
        description:
            "Fragrant basmati rice layered with tender chicken and slow-cooked with traditional spices.",
        image:
            "https://cdn.pixabay.com/photo/2019/04/11/12/25/biryani-4110007_1280.jpg",
    },
    item4: {
        id: "item4",
        name: "Veg Hakka Noodles",
        price: 199,
        description:
            "Stir-fried noodles tossed with colorful vegetables, soy sauce, and Asian seasonings.",
        image:
            "https://cdn.pixabay.com/photo/2020/11/25/14/12/noodles-5779912_1280.jpg",
    },
    item5: {
        id: "item5",
        name: "Chocolate Lava Cake",
        price: 179,
        description:
            "Soft chocolate cake with a molten chocolate center served warm and gooey.",
        image:
            "https://cdn.pixabay.com/photo/2017/02/15/10/39/chocolate-cake-2061746_1280.jpg",
    },
};