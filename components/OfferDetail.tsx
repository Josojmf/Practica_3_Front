import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { Offer } from "../types.tsx";


export const OfferDetail: FunctionComponent<{ offer: Offer }> = ({ offer }) => {
  return (
    <div className="OfferDetails">
      <h1>{offer.title}</h1>
      <img src={"../static/Maletin.png"} />
      <p>{offer.company_name}</p>
      <p>{offer.location}</p>
      <img src={"../static/Maletin.png"} />
      <p>{offer.remote ? "Remote" : "Onsite"}</p>
      <div dangerouslySetInnerHTML={{
  __html: offer.description
}}/>
      <a href={offer.url}>Apply</a>
    </div>
  );
};