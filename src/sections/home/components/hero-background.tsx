import { getImageProps } from "next/image";

const commonProps = {
  alt: "",
  fill: true,
  sizes: "100vw",
  loading: "eager",
  fetchPriority: "high",
} as const;

const { props: desktopProps } = getImageProps({
  ...commonProps,
  src: "/images/language-academy-hero.png",
});

const { props: smProps } = getImageProps({
  ...commonProps,
  src: "/images/language-academy-hero-sm.png",
});

const { props: xsProps } = getImageProps({
  ...commonProps,
  src: "/images/language-academy-hero-xs.png",
});

export function HeroBackground() {
  return (
    <picture
      className="pointer-events-none absolute inset-0 -z-20 dark:opacity-30"
    >
      <source
        media="(min-width: 48rem)"
        srcSet={desktopProps.srcSet}
        sizes={desktopProps.sizes}
      />
      <source
        media="(min-width: 40rem)"
        srcSet={smProps.srcSet}
        sizes={smProps.sizes}
      />
      <img
        {...xsProps}
        alt=""
        className="object-cover object-bottom md:object-center"
      />
    </picture>
  );
}
