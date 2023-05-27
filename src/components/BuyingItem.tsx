import { api } from "@/utils/api";
import { useRouter } from "next/router";
import { useState } from "react";

export const BuyingItem = () => {
    const { query } = useRouter()
    const itemQuery = api.item.getOne.useQuery(query.id)
    const [modal, setModal] = useState(false);
    const [amount, setAmount] = useState(1);
    // const [image, setImage] = useState<string>("")
    // const [name, setName] = useState<string>("")
    // const [price, setPrice] = useState<number>(0)

    const handleChange = () => {
        setModal(!modal);
    };

    const plus = () => {
        setAmount(amount + 1);
    };

    const minus = () => {
        setAmount(amount - 1);
    };

    return (
        <div>
            <button className="btn-primary btn" onClick={handleChange}>
                Buy Now
            </button>
            <input
                type="checkbox"
                checked={modal}
                onChange={handleChange}
                className="modal-toggle"
            />
            <div className="card modal w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={itemQuery.data?.image}
                        alt="Food & Drink Image"
                        className="rounded-xl"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{itemQuery.data?.name}</h2>
                    <table>
                        <tr>Order</tr>
                        <td>
                            <button
                                className="btn-outlline btn-sm btn"
                                onClick={minus}
                            >
                                -
                            </button>
                        </td>
                        <td>
                            <p>{amount} Rp. {itemQuery.data?.price * amount}</p>
                        </td>
                        <td>
                            <button
                                className="btn-outlline btn-sm btn"
                                onClick={plus}
                            >
                                +
                            </button>
                        </td>
                    </table>

                    <div className="card-actions">
                        <button className="btn-primary btn">Buy Now</button>
                        <button
                            className="btn-primary btn"
                            onClick={handleChange}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
