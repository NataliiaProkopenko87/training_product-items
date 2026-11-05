import {useDispatch, useSelector} from "react-redux";
import {changeName, changePrice, addProduct} from "../store";

function ProductsForm () {

    const dispatch = useDispatch();
    const name = useSelector(state => state.form.name);
    const price = useSelector(state => state.form.price);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addProduct({name, price}));
        dispatch(changeName(''));
        dispatch(changePrice(0));
    }

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    }

    const handlePriceChange = (event) => {
        const productPrice = parseFloat(event.target.value) || 0;
        dispatch(changePrice(productPrice));
    }

    return (
        <div className="product-form panel">
            <h4 className="subtitle is-3">Add Product</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">

                <div className="field">
                    <label className="label">Name</label>
                    <input className="input is-expanded"
                    value={name}
                    onChange={handleNameChange} />
                    </div>

                    <div className="field">
                    <label className="label">Price</label>
                    <input className="input is-expanded"
                    value={price || ''}
                    onChange={handlePriceChange}
                    type="number"
         />
                    </div>
                </div>
        <div className="field">
            <button className="button is-link">Submit</button>
        </div>
            </form>
        </div>
    );
}

export default ProductsForm;