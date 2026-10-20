import { getImageProps } from "next/image";

type HeroPhoto = { src: string; width: number; height: number };

export const CITY_PHOTO: HeroPhoto = {
  src: "/images/city.jpg",
  width: 540,
  height: 960,
};

export const SUNSET_PHOTO: HeroPhoto = {
  src: "/images/sunset.jpg",
  width: 540,
  height: 960,
};

function optimisedSrcSet(photo: HeroPhoto, displayWidth: number) {
  const { props } = getImageProps({
    alt: "",
    src: photo.src,
    width: displayWidth,
    height: Math.round((displayWidth * photo.height) / photo.width),
  });
  return (props.srcSet ?? "")
    .split(", ")
    .filter(Boolean)
    .map((entry) => {
      const [url, density] = entry.split(" ");
      return { url, density };
    });
}

/** Resized URL for the 1x density at `displayWidth` CSS pixels. */
export function optimisedUrl(photo: HeroPhoto, displayWidth: number) {
  return optimisedSrcSet(photo, displayWidth)[0]?.url ?? photo.src;
}

/** `image-set()` value for CSS backgrounds, resized by the Next image optimiser. */
export function optimisedBackground(photo: HeroPhoto, displayWidth: number) {
  const entries = optimisedSrcSet(photo, displayWidth);
  if (!entries.length) return `url("${photo.src}")`;
  return `image-set(${entries
    .map(({ url, density }) => `url("${url}") ${density}`)
    .join(", ")})`;
}
