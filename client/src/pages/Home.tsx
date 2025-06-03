import banniere from "../assets/images/banniere.jpg";
import SearchBarVisuelle from "../components/SearchBarVisuelle/SearchBarVisuelle";

function Home() {
  return (
    <div className="flex items-center justify-center">
      <div
        style={{ backgroundImage: `url(${banniere})` }}
        className="relative w-full h-[40vh] bg-no-repeat bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Bienvenue sur la quête du monorepo
          </h1>
          <p className="text-lg md:text-xl">Votre aventure commence ici !</p>{" "}
          <SearchBarVisuelle />
        </div>
      </div>
    </div>
  );
}

export default Home;
