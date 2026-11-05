import {useSelector} from "react-redux";

function ProductsValue () {
    const totalCost = useSelector(({products:{data,searchTerm}}) => 
    data.filter((product) => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).reduce((sum, product) => sum + product.price, 0)
);

    return (
        <div className="product-value">
            Total Cost: ${totalCost}
        </div>
    );
}

export default ProductsValue;