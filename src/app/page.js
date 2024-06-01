const API_KEY = "0a62787a9abad7c433287d227c84c3a8";
import Results from "@/components/Results";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const endpoint =
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week";
  const url = `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`;

  console.log(`Fetching data from URL: ${url}`);

  const res = await fetch(url, {
    next: { revalidate: 10000 },
  });

  if (!res.ok) {
    const errorDetails = await res.text();
    console.error(
      `Error fetching data: ${res.status} - ${res.statusText}\n${errorDetails}`
    );
    throw new Error("Failed To Load Movie Data");
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
