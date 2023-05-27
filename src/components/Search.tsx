import { useState } from "react";

export const Search = () => {
    const [modal, setModal] = useState(false);
    const [search, setSearch] = useState("");

    const handleChange = () => {
        setModal(!modal);
    };
    return (
        <>
            <div className="flex-none">
                <button
                    className="btn-ghost btn-circle btn"
                    onClick={handleChange}
                >
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
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
            <input
                type="checkbox"
                checked={modal}
                onChange={handleChange}
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box">
                    <form>
                        <div className="form-control">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="input-bordered input w-full"
                                placeholder="e.g: Pizza"
                            />
                        </div>
                    </form>
                    <button
                        className="btn-outline btn-sm btn"
                        onClick={handleChange}
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    );
};
