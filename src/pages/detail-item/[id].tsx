import { api } from "@/utils/api";
import Link from "next/link";
import { useState } from "react";

export const BuyingItem = ({onFind}: {onFind: string}) => {
    const result = api.item.getOne.useQuery(onFind)
    const [modal, setModal] = useState(false);
    const [amount, setAmount] = useState(1);

    const data = result.data

    const handleChange = () => {
        setModal(!modal);
    };

    const plus = () => {
        setAmount(amount + 1);
    };

    const minus = () => {
        setAmount(amount - 1);
    };

    const totalPrice = data?.price * amount

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
                        src={data?.image}
                        alt="Food & Drink Image"
                        className="rounded-xl"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{data?.name}</h2>
                    <table>
                        {/* <tr>Amount</tr>
                        <td>
                            {amount}
                        </td>
                        <td>
                            <button
                                className="btn-outlline btn-sm btn"
                                onClick={minus}
                            >
                                -
                            </button>
                        </td>
                        <td>
                            <p>$ {totalPrice}</p>
                        </td>
                        <td>
                            <button
                                className="btn-outlline btn-sm btn"
                                onClick={plus}
                            >
                                +
                            </button>
                        </td> */}
                        <tr>
                            <th>Amount</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>
                                <button
                                className="btn btn-outlline btn-xs"
                                onClick={minus}
                            >
                                -
                            </button>
                                {amount}
                            <button
                                className="btn btn-outlline btn-xs"
                                onClick={plus}
                            >
                                +
                            </button>
                            </td>
                            <td>
                                <p>$ {totalPrice}</p>
                            </td>
                        </tr>
                    </table>

                    <div className="card-actions">
                        <Link href={'/cart-page'} className="btn-primary btn">Buy Now</Link>
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
