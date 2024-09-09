import { memo } from "react";
import { useEffect } from "react";

const GridView = memo(({ articles, onlyImg }) => {
  // console.log(articles)
  let processed_articles = [];
  if (onlyImg) {
    articles = articles.filter((e) => {
      if (e.mediaUrl) {
        return e;
      }
    });
  }

  console.log(processed_articles);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2">
      {articles != null
        ? articles.map((i, index) => {
            return (
              <div
                className="m-2 shadow-lg rounded-md bg-zinc-100 border hover:shadow-2xl"
                key={index}
              >
                <figure>
                  <img src={i.mediaUrl} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    IND!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{i.title}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">xyz</div>
                    <div className="badge badge-outline">zyz</div>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
});

export default GridView;
