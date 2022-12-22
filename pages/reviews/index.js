import Link from "next/link";

function Reviews(){
    return (
        <div>
            <h1>Products Review</h1>
            <h2>Product list</h2>
            <ul>
                <li>
                    <Link href="reviews/1">Product #1</Link>
                </li>
                <li>
                    <Link href="reviews/2">Product #2</Link>
                </li>
                <li>
                    <Link href="reviews/3">Product #3</Link>
                </li>
                <li>
                    <Link href="reviews/4">Product #4</Link>
                </li>
            </ul>
        </div>

    );
}
export default Reviews;