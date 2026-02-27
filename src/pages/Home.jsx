import { DiVim } from "react-icons/di";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex place-items-center justify-center min-h-screen min-w-screen ">
        <p className="font-extrabold font-serif text-4xl">Welcome to my App</p>
      </div>
      <Link to={"/products"}>View Product</Link>
    </>
  );
}

export default Home;
