import { useState } from "react";
import type { SingleNewsCardProps } from "../interface/card";

export function SingleNewsCard({ news, formatDate }: SingleNewsCardProps) {
    const [showSubnews, setShowSubnews] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <a href={news.newsUrl} target="_blank" rel="noopener noreferrer">
                <img
                    src={news.images?.thumbnailProxied || news.images?.thumbnail}
                    alt={news.title}
                    className="w-full h-44 object-cover"
                />
            </a>

            <div className="p-4">
                <a
                    href={news.newsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                    <h2 className="text-lg font-semibold line-clamp-2 hover:text-red-600 transition-colors">
                        {news.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1 line-clamp-3">
                        {news.snippet}
                    </p>
                </a>

                <div className="flex justify-between items-center text-xs text-gray-500 mt-3">
                    <span>{formatDate(news.timestamp)}</span>
                    <span className="font-medium">{news.publisher}</span>
                </div>

                {news.hasSubnews && news.subnews && (
                    <button
                        onClick={() => setShowSubnews((prev) => !prev)}
                        className="text-blue-600 text-sm mt-3 underline"
                    >
                        {showSubnews ? "Hide related news" : "Show related news"}
                    </button>
                )}

                {showSubnews && news.subnews && (
                    <div className="mt-3 border-t border-gray-200 pt-2 space-y-2">
                        {news.subnews.map((sub, index) => (
                            <a
                                key={index}
                                href={sub.newsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-gray-50 rounded-lg p-2 hover:bg-gray-100"
                            >
                                <div className="flex gap-2">
                                    <img
                                        src={sub.images?.thumbnailProxied || sub.images?.thumbnail}
                                        alt={sub.title}
                                        className="w-20 h-14 object-cover rounded-md"
                                    />
                                    <div>
                                        <h3 className="text-sm font-medium line-clamp-2">
                                            {sub.title}
                                        </h3>
                                        <p className="text-xs text-gray-500">{sub.publisher}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
