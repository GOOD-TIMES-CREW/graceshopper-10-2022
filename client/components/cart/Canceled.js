// o: Sorry to be the bearer of bad news but the intention of this folder
//  structure was to have a folder per feature in the features folder and then
//  your slices within that subfolder. There should be no components folder.
// Let's chat about this during our Srint Meeting
import React from "react";

function Canceled() {
  return <h1>Sorry to see you cancelled your Stripe payment!</h1>;
}

export default Canceled;
