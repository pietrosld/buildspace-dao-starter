import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xbf784921Eec806364691ae7000Bb90A605Da5df8",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Vinyl Head",
        description: "This NFT will give you access to VinylCollectionDAO!",
        image: readFileSync("scripts/assets/VinylHead.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()