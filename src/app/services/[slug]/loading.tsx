export default function ServiceLoading() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted/20 rounded-lg w-3/4 mx-auto"></div>
            <div className="h-6 bg-muted/20 rounded-lg w-1/2 mx-auto"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-24 bg-muted/20 rounded-lg"></div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-64 bg-muted/20 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
