import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Services"
            paragraph="Our clothing manufacturing factory offers a comprehensive suite of services including design assistance, prototyping, and sample development. With expertise in pattern making, grading, and garment construction, we ensure precision and quality at every step. We cater to both small-scale and large-scale orders, maintaining efficiency and attention to detail throughout production. Additionally, our customization options such as screen printing, embroidery, and fabric dyeing add unique touches to each garment. Whether it's casual wear, sportswear, or high-fashion apparel, we are dedicated to delivering excellence in manufacturing."
            
          />

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
