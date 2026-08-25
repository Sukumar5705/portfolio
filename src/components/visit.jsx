import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const VisitorCountInline = () => {
  const [views, setViews] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch(
          "https://api.counterapi.dev/v2/e-sukumars-team-3485/visitor-counter-3485/up"
        );

        const data = await response.json();

        if (typeof data?.count === "number") {
          console.log(data)
          setViews(data.count);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching visitor count:", err);
        setError(true);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="flex items-center gap-2 text-gray-600 mt-4 text-sm">
      <Eye className="w-4 h-4" />
      {error ? (
        <span>Error loading visitors</span>
      ) : views !== null ? (
        <span>{views} visitors so far</span>
      ) : (
        <span>Loading visitors...</span>
      )}
    </div>
  );
};

export default VisitorCountInline;