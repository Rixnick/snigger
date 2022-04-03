import React from "react";

interface Props {}

const Terms: React.FC<Props> = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <div className="__right__terms">
      <div className="public__copyright">
        <h5>
          About Accessibility Help Center 
          <br /> Term of Service, Privacy Policy,
          <br /> Cookie Policy, Ads info more...
        </h5>
        <p></p>
        <p>&copy;{getYear()} | Sneezce Inc. </p>
      </div>
    </div>
  );
};

export default Terms;
