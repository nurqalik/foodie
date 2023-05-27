import { RouterOutputs, api } from "@/utils/api";
import { BuyingItem } from "./[id]";

type Item = RouterOutputs["item"]["getAll"][0];

const detailItem = ({}: {
    item: Item,
    onUpdate: () => void
}) => {
    const { data: items, refetch: refetchItems } = api.item.getAll.useQuery();

    // const DUMMY_DATA = [
    //     { id: 1, name: "Margherita Pizza", price: 9.99 },
    //     { id: 2, name: "Pepperoni Pizza", price: 10.99 },
    //     { id: 3, name: "Vegetarian Pizza", price: 11.99 },
    //     { id: 4, name: "Cheeseburger", price: 6.99 },
    //     { id: 5, name: "Bacon Burger", price: 7.99 },
    //     { id: 6, name: "Veggie Burger", price: 8.99 },
    //     { id: 7, name: "Spaghetti Bolognese", price: 12.99 },
    //     { id: 8, name: "Fettuccine Alfredo", price: 13.99 },
    //     { id: 9, name: "Penne Arrabiata", price: 11.99 },
    //     { id: 10, name: "Coca-Cola", price: 1.99 },
    //     { id: 11, name: "Orange Juice", price: 2.49 },
    //     { id: 12, name: "Lemonade", price: 2.99 },
    //     { id: 13, name: "Chocolate Brownie", price: 4.99 },
    //     { id: 14, name: "Vanilla Ice Cream", price: 3.99 },
    //     { id: 15, name: "Strawberry Cheesecake", price: 5.99 },
    // ];

    return (
        <>
        <div className="card-group">
            {items?.map((item) => (
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={item.image}
                            alt="Food & Drink Image"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title" key={item.id}>
                            {item.name}
                        </h2>
                        <p>$ {item.price}</p>
                        <div className="card-actions">
                        <BuyingItem onFind={item.id} />
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </>
    );
};

export default detailItem;
