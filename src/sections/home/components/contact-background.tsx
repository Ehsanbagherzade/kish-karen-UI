export function ContactBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"
    >
      <div className="absolute inset-0 bg-[url('/images/language-learning-pattern.svg')] bg-[length:20rem_15rem] bg-center opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_35%,transparent_70%,black)] sm:bg-[length:24rem_18rem] md:opacity-30 md:[mask-image:linear-gradient(to_right,black,transparent_35%,transparent_65%,black)] lg:bg-[length:30rem_22.5rem]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(125,211,252,0.15),transparent_55%)]" />
    </div>
  );
}
