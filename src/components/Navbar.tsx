import Link from "next/link";
import { Search } from "./Search";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href={'/'} className="btn-ghost btn text-xl normal-case">Foodie</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href={'/detail-item'}>Detail Item</Link>
                    </li>
                </ul>
            </div>
            <Search/>
            <div className="flex-none">
                <div className="dropdown-end dropdown">
                    <label tabIndex={0} className="btn-ghost btn-circle btn">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <span className="badge badge-sm indicator-item">
                                8
                            </span>
                        </div>
                    </label>
                    <div
                        tabIndex={0}
                        className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow"
                    >
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <Link href={'/cart-page'} className="btn-primary btn-block btn">
                                    View cart
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown-end dropdown">
                    <label
                        tabIndex={0}
                        className="btn-ghost btn-circle avatar btn"
                    >
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                    >
                        <li>
                            <a className="justify-between">Profile</a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
