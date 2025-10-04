import React from "react";

type Props = {
  title: string;
  image: string;        // URL from /public or imported asset
  bullets: string[];    // lines to list
  imageRight?: boolean; // optional: image on right on desktop
};

export default function OfferingTile({ title, image, bullets, imageRight }: Props) {
  return (
    <article className={`offertile offertile--cream ${imageRight ? "offertile--reverse" : ""}`}>
      <div className="offertile__media">
        <img src={image} alt="" loading="lazy" decoding="async" />
      </div>

      <div className="offertile__body offertile__body--center">
        <h3 className="offertile__title">{title}</h3>

        {/* centered “paragraph-like” list (no bullets) */}
        <ul className="offertile__list offertile__list--center">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
