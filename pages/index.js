import Link from "next/link";

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <p>Bem vindo ao meu primeiro componente React</p>
            <h2></h2>
            <ul>
                <li>
                <Link href="products/">Products</Link>
                </li>
                <li>
                <Link href="reviews/">Reviews</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;