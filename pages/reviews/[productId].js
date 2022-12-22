import Link from "next/link"
export async function getServerSideProps(context) {
    const productId = context.query.productId;
    return {
        props:{
            productId:productId,
            productImg:"/imgs/products/product-"+productId+".png"
        }
    }
}

function Review(props){
    return (
    <div> 
        <h1>Product #{props.productId} Review</h1>
        <div>
            <img src={props.productImg} className="product" />
        </div>
        <h2>Product list</h2>
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
            <p>Esta página processa o productId serverSide</p>
    </div>)
}

export default Review