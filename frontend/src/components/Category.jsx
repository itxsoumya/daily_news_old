const Category = () => {
  return (
    <div>
      <h1 className="text-2xl p-2 font-bold">Category :</h1>
      <div className="p-2 grid gap-4 sm:grid-cols-3 grid-cols-2">
        <div className="border-t-4 border-red-400 border-double">
          <h1 className="text-xl font-bold">News</h1>
          <ul className="list-disc pl-8">
            <li>India</li>
            <li>World</li>
            <li>States</li>
            <li>Cities</li>
          </ul>
        </div>
        <div className="border-t-4 border-red-400 border-double">
          <h1 className="text-xl font-bold">Business</h1>
          <ul className="list-disc pl-8">
            <li>Industry</li>
            <li>Economy</li>
            <li>Agri-Business</li>
            <li>Markets</li>
            <li>Budget</li>
          </ul>
        </div>
        <div className="border-t-4 border-red-400 border-double">
          <h1 className="text-xl font-bold">Sports</h1>
          <ul className="list-disc pl-8">
            <li>Cricket</li>
            <li>Football</li>
            <li>Hockey</li>
            <li>Olymoics</li>
            <li>Races</li>
          </ul>
        </div>
        <div className="border-t-4 border-red-400 border-double">
          <h1 className="text-xl font-bold">News</h1>
          <ul className="list-disc pl-8">
            <li>India</li>
            <li>World</li>
            <li>States</li>
            <li>Cities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
