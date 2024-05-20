import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="flex justify-center">
            <SectionTitle
              title="Services"
              paragraph="We provide design assistance, prototyping, and sample development. With expertise in pattern making, grading, and garment construction, we ensure precision and quality. Handling both small and large orders efficiently, we offer customization options like screen printing, embroidery, and fabric dyeing. From casual wear to high fashion, we deliver manufacturing excellence."
            />
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
