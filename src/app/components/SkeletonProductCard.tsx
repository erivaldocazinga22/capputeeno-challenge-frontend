export const SkeletonProductCard = () => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow">
            <div className="h-72 bg-slate-300 animate-pulse"></div>
            <div className="p-4 space-y-2">
                <span className="block h-2 pb-1.5 rounded-sm bg-slate-300 animate-pulse"></span>
                <span className="block h-2 w-1/2 pb-1.5 rounded-sm bg-slate-300 animate-pulse"></span>
            </div>
        </div>
    )
}
