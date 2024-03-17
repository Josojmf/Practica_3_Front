import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { Offer } from "../types.tsx";

export const OfferDetail: FunctionComponent<{ offer: Offer }> = ({ offer }) => {
  return (
    <div className="OfferDetails">
      <h1>{offer.title}</h1>

      <div className="Company">
        <img className="Office" src={"/Office.png"} alt={offer.company_name} />
        <p>{offer.company_name}</p>
      </div>

      <div className="Location">
        <img className="Maletin" src={"/Maletin.png"} />
        <p>{offer.location}</p>
      </div>

      <div className="Onsite">
        <img className="People" src={"/people.png"} />
        <p>{offer.remote ? "& Remote" : " Onsite"}</p>
      </div>
      <div className="Buttons">
      <div className="SolicitarButton">
      <a className="TextLinkSolicitar"href={offer.url}>Solicitar</a>
      </div>
      <div className="GuardarButton"> 
      <a className="TextLink"href={offer.url}>Guardar</a>
      </div>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: offer.description,
        }}
      />
      
    </div>
  );
};
