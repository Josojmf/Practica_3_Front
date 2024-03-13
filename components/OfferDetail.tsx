import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { Offer } from "../types.tsx";

export const OfferDetail: FunctionComponent<{ offer: Offer }> = ({ offer }) => {
  return (
    <div className="OfferDetails">
      <h1>{offer.title}</h1>

      <div className="Company">
        <img className="Office" src={"office.png"} alt={offer.company_name} />
        <p>{offer.company_name}</p>
      </div>

      <div className="Location">
        <img className="Maletin" src={"/Maletin.png"} />
        <p>{offer.location}</p>
      </div>

      <div>
        <p>{offer.remote ? "& Remote" : " Onsite"}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: offer.description,
        }}
      />
      <a href={offer.url}>Apply</a>
    </div>
  );
};
