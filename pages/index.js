import Link from "next/link";

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <p>Bem vindo ao meu primeiro componente React</p>
            <p>
                <Link href="products/">Products</Link>
            </p>
        </div>
    );
}

export default Home;