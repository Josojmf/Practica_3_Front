import { FreshContext, Handlers } from "$fresh/server.ts";
import { useState } from "preact/hooks";
import { OfferComp } from "../islands/Offer.tsx";
import { Offer, OfferResponse } from "../types.tsx";

import axios from "npm:axios";
import { OfferDetail } from "../components/OfferDetail.tsx";
type Props = {
  offers: OfferResponse;
};

export const MainPage = (props: Props) => {
  const [offer, setOffer] = useState<Offer>(props.offers.data[0]);
  return (
    <div className="Page">
    
      <div className="OfferPanel">
        <div className="Offers">
          <div className="OffersTitle">
            Principales ofertas que te recomendamos
            <br />
            <div className="NumberResults">
            {props.offers.data.length} Resultados
            </div>
          </div>
          <div className="OffersList">
            {props.offers.data.map((offer: Offer) => (
              <OfferComp
                offer={offer}
                onClick={() => setOffer(offer)}
              />
            ))}
          </div>
        </div>
      </div>
      {offer && <OfferDetail offer={offer} />}
    </div>
  );
};
