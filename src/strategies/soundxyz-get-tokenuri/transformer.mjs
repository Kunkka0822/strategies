// @format
import { decodeCallOutput } from "eth-fun";

import logger from "../../logger.mjs";

const name = "soundxyz-get-tokenuri";
const log = logger(name);
const version = "0.1.0";

export function onClose() {
  log("closed");
  return {
    write: null,
    messages: [],
  };
}

export function onError(error) {
  log(error.toString());
  throw error;
}

export function onLine(line) {
  const datum = JSON.parse(line);
  return {
    messages: [],
    write: JSON.stringify({
      version,
      title: datum.name,
      // TODO
      //duration: "PT0M",
      artist: {
        version,
        name: datum.artist_name,
      },
      platform: {
        version,
        name: "Sound",
        uri: "https://sound.xyz",
      },
      erc721: {
        version,
        // TODO
        //address: nft[1],
        //tokenId: nft[2],
        //tokenURI: "https://example.com/metadata.json",
        metadata: {
          ...datum,
        },
      },
      manifestations: [
        {
          version,
          uri: datum.audio_url,
          // TODO
          //mimetype: "audio/mp3",
        },
        {
          version,
          uri: datum.image,
          // TODO
          //mimetype: "image/jpeg",
        },
        {
          version,
          uri: datum.animation_url,
          // TODO
          //mimetype: "image/gif",
        },
      ],
    }),
  };
}