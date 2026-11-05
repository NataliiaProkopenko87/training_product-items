import {useSelector, useDispatch} from "react-redux";
import {changeSearchTerm} from "../store/slices/productsSlice";

function ProductsSearch () {

const searchTerm = useSelector(state => state.products.searchTerm);
const dispatch = useDispatch();
const handleSearchChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
};

    return (
        <div className="list-header">
            <h3 className="title is-3">My Products</h3>
            <div className="search-field is-horizontal">
            <label className="label">Search</label>
            <input className="input"
            value={searchTerm}
            onChange={handleSearchChange}
            />
            </div>
        </div>
    );
}

export default ProductsSearch;