const Serch = () => {
    return (
        <div>
            <div className="flex justify-end">
            </div>
            <input
                type="checkbox"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Serch Item</h3>
                    <form>
                        <div className="form-control">
                            <label className="label font-bold">Serch</label>
                            <input
                                type="text"
                                className="input-bordered input w-full"
                                placeholder="Product Name"
                            />
                        </div>
                        <div className="modal-action">
                            <button
                                className="btn-outline btn-accent btn"
                                type="submit"
                            >
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Serch;
