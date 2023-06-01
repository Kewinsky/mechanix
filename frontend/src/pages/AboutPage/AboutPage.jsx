import "./AboutStyles.scss";
import photo from "../../assets/images/about-us.png";

const AboutPage = () => {
  return (
    <div className="about-wrapper">
      <h1 className="about-header">About Us_</h1>
      <p className="about-paragraph">
        Keychron was formed in 2017 by a group of keyboard enthusiasts who have
        extensive experience in keyboard manufacturing. The group consists of
        designers, marketers, and production experts. Our core team members,
        Will Ye has 9 years of experience in keyboard production and related
        businesses and Sven Zhu has 10 years of experience in industrial design.
        We’ve dedicate ourselves to creating the most sophisticated mechanical
        keyboards with minimalist designs. We are registered as Siki Eagle Sarl
        in 1, Esplanade Miriam Makeba, 69100 Villeurbanne, France. Hong Kong
        company address: 13/F, Prosper Commercial Bldg., 9 Yin Chong Street,
        Kowloon, Hong Kong
      </p>
      <img src={photo} alt="keyboard" className="about-image" />
      <p className="about-paragraph">
        We’ve partnered a factory with 20 years of experience, which produces
        top-notch keyboards for many well-known keyboard brands over the years.
        We can assure you that the Keychron keyboard will never fail you.
      </p>
    </div>
  );
};

export default AboutPage;
