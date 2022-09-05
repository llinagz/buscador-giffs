import React from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  if (loading) return <i>Loading...</i>;

  return <>{<ListOfGifs gifs={gifs} />}</>;
}

//Tambien se podría hacer así
// export default function ListOfGifs({ params }) {

//   const { keyword } = params;
//   const [gifs, setGifs] = useState(
//     {loading: false, results: []}
//     );

//   useEffect(
//     function () {
//       setGifs(
//         actualGifs => ({loading: true,
//         results: actualGifs.results})
//       )

//       getGifs({ keyword })
//       .then((gifs) => {
//         setGifs({loading: false, results: gifs});
//       });
//     },
//     [keyword]
//   );

//   if (gifs.loading) return <i>Loading...</i>;

//   return (
//     <div>
//       {gifs.map((singleGif) => (
//         <Gif
//           key={singleGif.id}
//           title={singleGif.title}
//           url={singleGif.url}
//           id={singleGif.id}
//         />
//       ))}
//     </div>
//   );
// }
