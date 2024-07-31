import { useEffect, useState } from "react";
import { fetchData } from "../services/services";
import { useNavigate } from "react-router-dom";
// import "./Home.scss";
interface Image {
  id: number;
  url: string;
  name: string;
}
const Home = (props: any) => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(0);
  const [searchList, setSearchList] = useState<Image[]>([]);
  const { pageName } = props;
  const navigate = useNavigate();
  const getPokemons = async (offset: number) => {
    let res = await fetchData(offset);
    if (res) {
      const poke = res.data.results;
      const images_temp: Image[] = images.slice();
      for (let item of poke) {
        let temp = item.url.split("/");
        let id = temp[temp.length - 2];
        let src_image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other`;
        images_temp.push({
          id: id,
          url: src_image,
          name: item.name,
        });
      }
      await setImages(images_temp);
    }
  };
  useEffect(() => {
    console.log("useeffct");
    getPokemons(0);
  }, []);
  useEffect(() => {
    setSearchList(
      images
        .filter((img) =>
          img.name.toLowerCase().includes(props.search.toLowerCase())
        )
        .slice(0, 8)
    );
  }, [props.search]);
  const handleOnClick = async () => {
    await getPokemons(page + 1);
    setPage(page + 1);
  };
  const handleImage = (item: Image) => {
    navigate(`/detail/${item.id}`);
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 lg:gap-y-4 px-4 mb-5 transition-all">
        {props.search !== ""
          ? searchList &&
            searchList.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-lg hover:cursor-pointer motion-safe:hover:scale-105 border border-[#eee] "
                  onClick={() => handleImage(item)}
                >
                  <div className="h-96">
                    <img
                      src={`${item.url}/${pageName}/${item.id}.${
                        pageName === "dream-world" ? "svg" : "png"
                      }`}
                      className="w-full h-full rounded-lg object-cover"
                      alt="pokemon"
                    />
                  </div>
                  <div className="text-center capitalize font-medium text-lg sm:text-xl md:text-2xl lg:text-2xl text-black">
                    {item.name}
                  </div>
                </div>
              );
            })
          : images &&
            images.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-lg hover:cursor-pointer motion-safe:hover:scale-105 border border-[#eee] "
                  onClick={() => handleImage(item)}
                >
                  <div className="h-96">
                    <img
                      src={`${item.url}/${pageName}/${item.id}.${
                        pageName === "dream-world" ? "svg" : "png"
                      }`}
                      className="w-full h-full rounded-lg object-cover"
                      alt="pokemon"
                    />
                  </div>
                  <div className="text-center capitalize font-medium text-lg sm:text-xl md:text-2xl lg:text-2xl text-black">
                    {item.name}
                  </div>
                </div>
              );
            })}
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => handleOnClick()}
          className="inline-block py-5 px-10 mb-5 text-white bg-[#6A5AF9] hover:bg-red-400 
        rounded-lg motion-safe:hover:scale-110 transition-all"
        >
          Load more
        </button>
      </div>
    </>
  );
};
export default Home;
