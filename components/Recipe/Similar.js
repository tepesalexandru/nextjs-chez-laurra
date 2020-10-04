import React from "react";
import SimilarCard from './SimilarCard';

export default function Similar() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      <SimilarCard />
      <SimilarCard />
      <SimilarCard />
      <SimilarCard />
    </div>
  );
}
