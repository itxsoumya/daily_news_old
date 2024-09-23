import useFetchTH from "../hooks/useFetchTH";
import Skeleton from "./Skeleton";
import GridView from "./GridView";
import { memo } from "react";
import HomeSection from "./HomeSection";

const Home = memo(() => {
  // const rssUrl = "/api/news/national/feeder/default.rss";
  const rssUrl = "/api/feeder/default.rss";

  const { data, loading, error } = useFetchTH(rssUrl);

  if (loading) {
    return <Skeleton />;
  }
  if (error) {
    console.error(error);
  }

  console.log("[+] Home component");

  return (
    <div className="max-w-6xl mx-auto grow bg-white shadow-lg rounded-lg ">
      {/* <a className="m-2 link font-bold text-2xl text-red-500 uppercase">
        INDIA
      </a>
      <GridView articles={data} onlyImg={true} /> */}

      <HomeSection
        rssUrl="/api/feeder/default.rss"
        onlyImg={true}
        heading={"INDIA"}
        limit={5}
      />
      <HomeSection
      rssUrl="/api/news/national/feeder/default.rss"
      onlyImg
      heading={'TOP NEWS'}
      limit={6}
      />
    </div>
  );
});

export default Home;
