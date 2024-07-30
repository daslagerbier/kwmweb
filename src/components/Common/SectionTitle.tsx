const SectionTitle = ({
  title,
  paragraph,
  width = "900px",
  center,
  mb = "100px",
}: {
  title: any;
  paragraph: any;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb, fontFamily:"kanit"}}
      >
        <h2 className="mb-4 text-3xl text-center font-medium !leading-relaxed text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="!text-2xl !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
