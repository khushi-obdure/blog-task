import { useState, useEffect } from "react";
import type { NewsItem } from "../interface/card";
import { SingleNewsCard } from "../components/card";

export default function NewsCard() {
    const [newsData, setNewsData] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const limit = 6;

    const formatDate = (timestamp: string) => {
        const date = new Date(Number(timestamp));
        return date.toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
        });
    };

    const fetchNews = async (page: number) => {
        setLoading(true);
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(apiUrl);


            if (!response.ok) throw new Error("Failed to fetch news");
            const result = await response.json();

            setNewsData(result.data);
            setTotalPages(Math.ceil(result.total / limit));
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews(page);
    }, [page]);

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        setPage(newPage);
    };

    if (loading) return <p className="text-center">Loading news...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!newsData.length) return <p className="text-center">No news available</p>;

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsData.map((newsItem, index) => (
                    <SingleNewsCard key={index} news={newsItem} formatDate={formatDate} />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center gap-3 mt-6">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                    Previous
                </button>

                <span className="px-4 py-2">
                    Page {page} of {totalPages}
                </span>

                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </>
    );
}
