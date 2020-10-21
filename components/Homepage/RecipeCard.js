import React from "react";
import {Link} from '../../i18n';

export default function RecipeCard(props) {
  const {AWS_URL} = process.env;
  return (
    <div className="flex flex-col items-center">
      <div className="w-full square rounded-lg shadow-md overflow-hidden flex-shrink-0">
        <img
          className="w-full h-full object-cover object-center absolute top-0 left-0"
          src={`${props.image}`}
          alt="food"
        />
      </div>
      {/* Name */}
      <Link href="/recipes/[genre]/[slug]" as={`/recipes/${props.category}/${props.slug}`}>
      <a className="cardLink">
        <h3 className="flex-1 truncate">{props.label}</h3>
        <svg
          className="h-5 w-5 ml-2"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V14M14 4H20M20 4V10M20 4L10 14"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      </Link>
    </div>
  );
}
