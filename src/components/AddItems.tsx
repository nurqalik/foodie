import { useState } from "react";

const AddItem = ({
  onSave,
}: {
  onSave: (item: { image: string, name: string; price: number }) => void;
}) => {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ image, name, price });
    setName("");
    setPrice(0);
    setImage("");
    setModal(false);
  };

  const handleChange = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="flex justify-end">
        <button className="btn gap-2" onClick={handleChange}>
          Add Item
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
          <h3 className="text-lg font-bold">Add New Item</h3>
          <form>
          <div className="form-control">
              <label className="label font-bold">Image</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="input-bordered input w-full"
                placeholder="Item Image Url"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-bordered input w-full"
                placeholder="Product Name"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.valueAsNumber)}
                className="input-bordered input w-full"
                placeholder="Product Price"
              />
            </div>
            <div className="modal-action">
              <button
                className="btn-outline btn-accent btn"
                type="submit"
                onClick={handleSubmit}
              >
                Add Product
              </button>
              <button
                className="btn-outline btn-error btn"
                type="button"
                onClick={handleChange}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
