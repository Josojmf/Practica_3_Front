import { FreshContext, Handlers } from "$fresh/server.ts";
import { useState } from "preact/hooks";
import { OfferComp } from "../islands/Offer.tsx";
import { Offer, OfferResponse } from "../types.tsx";

import axios from "npm:axios";
import { OfferDetail } from "../components/OfferDetail.tsx";

export const MainPage = (props: any) => {
  const [offer, setOffer] = useState<Offer>(props.offers.data[0]);
  return (
    <div>
      <div className="OfferPanel">
        <div className="Offers">
          <div className="OffersTitle">
            Principales ofertas que te recomendamos
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
