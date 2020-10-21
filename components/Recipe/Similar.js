import React from "react";
import SimilarCard from './SimilarCard';

export default function Similar(props) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {props.content.slice(0, 4).map(card => (
        <SimilarCard image={card.Cover.formats.medium.url} title={card.Name} category={card.navigation.slug} slug={card.Slug}/>
      ))}
    </div>
  );
}
