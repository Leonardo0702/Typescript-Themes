import { useState, useEffect, Dispatch, SetStateAction } from "react";

//O Dispatch e o SetStateAction, são interfaces para tipar o useState
//

type Response<T> = [T, Dispatch<SetStateAction<T>>];

// T é o tipo do parametro, estamos dizendo que ele pode receber um parâmetro
// A variavel T contém o DefaultTheme(parâmetro)
// Quando passamos o T podemos informar o formato que ele terá, neste caso DefaultTheme
function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    // Ele vai buscar o valor do storage
    const storageValue = localStorage.getItem(key);
    // Se o valor existir, o retorno inicial será o Json.parse
    if (storageValue) {
      return JSON.parse(storageValue);
      // Do contrário ele vai passar o valor inicial
    } else {
      return initialState;
    }
  });

  // Toda vez que o state ou a key sofrer alguma alteração, ele vai até o localstorage
  // Dar um setItem, e o valor será JSON.stringif, por que?
  // O valor pode vir de várias formas, então ele será convertido em json.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
