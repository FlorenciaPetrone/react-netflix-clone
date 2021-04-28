const APIKEY = "fc700728a18cda64e804f048540489df";

const requests = [
  {
    title: "NETFLIX ORIGINALS",
    fetchUrl: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    isLargeRow: true,
  },
  {
    title: "Trending now",
    fetchUrl: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  },
  {
    title: "Top Rated",
    fetchUrl: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  },
  {
    title: "Action Movies",
    fetchUrl: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  },
  {
    title: "Comedy Movies",
    fetchUrl: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  },
  {
    title: "Horror Movies",
    fetchUrl: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  },
  {
    title: "Romance Movies",
    fetchUrl: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  },
  {
    title: "Documentaries",
    fetchUrl: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
  },
];

export default requests;
