export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center px-4">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-[#2563eb] border-t-transparent mx-auto mb-3" />
        <p className="text-sm text-slate-600">Loading...</p>
      </div>
    </div>
  );
}
