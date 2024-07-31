import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDetail } from "../services/services";

interface DetailPokemon {
  name: string;
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}
const Detail = (props: any) => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState<DetailPokemon>();
  const handleOnClick = () => {
    navigate("/");
  };
  const { id } = useParams();
  const fetchDetailPokemon = async (id: any) => {
    const res = await fetchDetail(id);
    setDetail({
      name: res.data.forms[0].name,
      hp: res.data.stats[0].base_stat,
      attack: res.data.stats[1].base_stat,
      defense: res.data.stats[2].base_stat,
      special_attack: res.data.stats[3].base_stat,
      special_defense: res.data.stats[4].base_stat,
      speed: res.data.stats[5].base_stat,
    });
  };
  useEffect(() => {
    fetchDetailPokemon(id);
  }, []);
  return (
    <>
      <button
        className="inline-block px-5 py-3 rounded-lg bg-[#6A5AF9]"
        onClick={handleOnClick}
      >
        Go back
      </button>
      <div className="flex items-center gap-10">
        <div className="">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
            className="w-full h-full rounded-lg object-cover"
            alt="pokemon"
          />
        </div>
        <div>
          <div className="uppercase mb-3 font-medium">Name: {detail?.name}</div>
          <div>HP: {detail?.hp}</div>
          <div>Attack: {detail?.attack}</div>
          <div>Defense: {detail?.defense}</div>
          <div>Special attack: {detail?.special_attack}</div>
          <div>Special defense: {detail?.special_defense}</div>
          <div>Speed: {detail?.speed}</div>
        </div>
      </div>
    </>
  );
};
export default Detail;
