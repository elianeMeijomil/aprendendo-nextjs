import { useRouter } from "next/router";
import Link from "next/link";

function Product(){
    const router = useRouter();
    const productId = router.query.productId;
    const productImg = "/imgs/products/product-"+productId+".png"
    return (
        <div>
            <h1>Product #{productId}</h1>
            <h2>Product list</h2>
            <div>
                
                <img src={productImg}/>
            </div>
            <ul>
                <li>
                    <Link href="1">Product #1</Link>
                </li>
                <li>
                    <Link href="2">Product #2</Link>
                </li>
                <li>
                    <Link href="3">Product #3</Link>
                </li>
                <li>
                    <Link href="4">Product #4</Link>
                </li>
            </ul>
        </div>
    );
}

export default Product;