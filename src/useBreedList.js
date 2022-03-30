import { useState, useEffect } from "react";

const localCache = {};

function useBreedList(animal){
  const [status, setStatus] = useState("unloaded");
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    if (!animal) setBreedList([]);
    else if (localCache[animal]) setBreedList(localCache[animal]);
    else requestBreedList();

    async function requestBreedList() {
      setStatus("loading ...");
      setBreedList([]);
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded succes");
    }
  }, [animal]);

  return [breedList, status];
};

export default useBreedList;