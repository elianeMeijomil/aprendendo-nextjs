import Link from "next/link";

function Products(){
    return (
        <div>
            <h1>Products</h1>
            <h2>Product list</h2>
            <ul>
                <li>
                    <Link href="products/1">Product #1</Link>
                </li>
                <li>
                    <Link href="products/2">Product #2</Link>
                </li>
                <li>
                    <Link href="products/3">Product #3</Link>
                </li>
                <li>
                    <Link href="products/4">Product #4</Link>
                </li>
            </ul>
        </div>

    );
}
export default Products;