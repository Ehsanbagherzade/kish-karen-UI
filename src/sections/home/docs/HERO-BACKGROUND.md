# Hero background

Generated using the built-in `image_gen` tool for the centered homepage hero.

- Asset: `public/images/language-academy-hero.png`.
- Decorative image: empty alt text; the heading and buttons remain HTML.
- A light overlay keeps the centered text readable. `HeroBackground` uses an optimized `picture` to load the composition matching the viewport, rather than downloading three hidden images.
- `xs` (< 40rem): `public/images/language-academy-hero-xs.png`, 1122 × 1402 pixels, portrait 4:5 composition.
- `sm` (40rem to < 48rem): `public/images/language-academy-hero-sm.png`, 1536 × 1024 pixels, compact 3:2 composition.
- `md` and up (>= 48rem): the original wide `public/images/language-academy-hero.png`.
- Mobile art is anchored to the bottom so books, desks and chairs remain visible. The mobile hero has a minimum height of 30rem to preserve breathing room around the text.
- Media conditions mirror the `sm` and `md` definitions in `src/app/globals.css`; update both if those breakpoints change.

## Generation prompt

Use case: photorealistic-natural. Asset type: a wide panoramic website hero BACKGROUND for a Persian language academy, with centered dark Persian heading, paragraph and blue CTA buttons overlaid by the website. Primary request: an extremely minimal, serene education-themed background. Scene: an airy modern language-school classroom / study space, ivory-white walls, soft daylight, a very subtle pale blue atmosphere. Sparse learning details only at the outermost edges and lower corners: a small stack of unbranded books and a simple blue chair at one edge, a light oak desk corner and a few softly out-of-focus shelves at the opposite edge. The central 70 percent must be nearly empty luminous off-white negative space, including the upper center and middle, so centered text stays readable. Composition: wide panoramic landscape around 2.4:1, sparse, balanced, substantial breathing room; peripheral objects must be low contrast, understated and naturally integrated. Style: premium architectural interior photography, soft natural textures, restrained realistic detail, subtle depth of field, minimal academic setting, calm and welcoming. Palette: mostly white and very light cool blue with tiny light oak accents, matching a white-and-blue language academy website. No people, no large foreground subject, no UI, no writing or letters, no text, no badges, no logos, no watermark, no busy classroom rows, no saturated or dark central areas.

## Mobile generation prompts

Both compositions were generated with the built-in `image_gen` tool, using the original desktop image as a visual reference.

### xs

Use case: photorealistic-natural. Asset type: xs MOBILE hero background for the same Persian language academy website. Input image is the visual reference / scene to recompose. Create a NEW portrait composition of this same minimal bright study/classroom, not a center crop of the wide reference. Target pixel dimensions 1024 x 1280, aspect ratio 4:5. Preserve the airy ivory-white wall, soft daylight from a window at the left, muted light-blue fabric chairs, pale oak desks, few unbranded books, small plant, premium natural architectural photography. For a small 320-639px-wide screen: keep a large empty near-white wall in the upper and middle 70 percent for centered dark Persian heading, description and buttons that will be rendered by HTML. Place recognisable SMALL learning details visibly within this portrait frame only along the bottom 20-25 percent: a cropped low blue chair on the bottom left, a low oak desk corner with two blue-and-white books and pencil cup on the bottom right. Keep all furniture out of the central text area. Very sparse, calm, restrained light blue and white palette. The educational details must remain visible when this portrait asset fills a mobile hero, rather than disappear outside wide-image edges. No people, no large foreground subject, no text or letters, no logo, no badges, no watermark. Maintain the reference's style and lighting, but recompose it specifically for a portrait phone hero.

### sm

Use case: photorealistic-natural. Asset type: sm MOBILE hero background for the same Persian language academy website. Input image is the visual reference / scene to recompose. Create a NEW compact landscape composition of this same minimal bright study/classroom, not a crop of the panoramic reference. Target pixel dimensions 1536 x 1024, aspect ratio 3:2, suited to a 640-767px-wide small-screen hero roughly 450-500px tall. Preserve airy ivory-white walls, soft daylight from the left, muted light-blue fabric chairs, pale oak desks, unbranded books, a little green plant, premium natural architectural photography. Keep the central 65-70 percent and upper middle empty luminous off-white negative space for centered dark Persian heading, paragraph and buttons added by HTML. The few educational details belong within the frame near its lower corners: a small low blue chair and books at bottom left, a modest desk corner with blue-and-white books and a pencil cup at bottom right. Compose with more compact framing than the panoramic original so these details remain visible at small screen widths. Very restrained low-contrast blue, white and pale wood, calm and minimal. No people, no large foreground subject, no text or letters, no logos, no badges, no watermark. Keep the reference's same visual style and natural light.
