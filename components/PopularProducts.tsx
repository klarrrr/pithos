export function PopularProducts() {
  const assets = [
    "/pithos/PithosThumbnail.png",
    "/pithos/PithosThumbnail.png",
    "/pithos/PithosThumbnail.png",
    "/pithos/PithosThumbnail.png",
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 mt-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold">Popular 2D Assets</h2>
        <button className="text-sm text-red-500 hover:underline">
          See all Assets →
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {assets.map((src, index) => (
          <div
            key={index}
            className="aspect-video bg-gray-200 rounded-md overflow-hidden"
          >
            <img
              src={src}
              alt="asset"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      </div>
    </div>
  );
}