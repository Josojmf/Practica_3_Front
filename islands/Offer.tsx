import React, { FunctionComponent } from "https://esm.sh/react@17.0.2";
import { useState } from "preact/hooks";
import { Offer } from "../types.tsx";
type Error = {
  error: boolean;
  status: number;
  message: string;
};
export const OfferComp: FunctionComponent<{ offer: Offer, onClick: () => void }> = ({ offer, onClick }) => {
  return (

      <div className="Offer"
      onClick={() => onClick()}>
       <div className="OfferTitleName"> <h1>{offer.title}</h1> </div>
        <p>{offer.company_name}</p>
        <p>{offer.location}</p>
        <p>{offer.remote ? "Remote" : "Onsite"}</p>
        </div>
  );
};
