import React from "react";
import SimilarCard from './SimilarCard';
import {i18n} from '../../i18n';

export default function Similar(props) {
  const getImage = (rec, idx) => {
    if (idx == 0) {
      if (rec.Cover.formats.medium.url !== undefined) {
        return rec.Cover.formats.medium.url;
      } else if (rec.Cover.formats.thumbnail.url !== undefined) {
        return rec.Cover.formats.thumbnail.url;
      }
    } else if (idx == 1) {
      if (rec.Result1.formats.medium.url !== undefined) {
        return rec.Result1.formats.medium.url;
      } else if (rec.Result1.formats.thumbnail.url !== undefined) {
        return rec.Result1.formats.thumbnail.url;
      }
    } else if (idx == 2) {
      if (rec.Result2.formats.medium.url !== undefined) {
        return rec.Result2.formats.medium.url;
      } else if (rec.Result2.formats.thumbnail.url !== undefined) {
        return rec.Result2.formats.thumbnail.url;
      }
    }
  }
  const getLabel = (rec) => {
    if (i18n.language === "ro") {
      return rec.Name;
    } else if (i18n.language === "fr") {
      return rec.Name_Fr;
    } else {
      return rec.Name_Eng;
    }
  }
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {props.content.slice(0, 4).map(card => (
        <SimilarCard image={getImage(card, 0)} title={getLabel(card)} category={card.navigation.slug} slug={card.Slug}/>
      ))}
    </div>
  );
}
