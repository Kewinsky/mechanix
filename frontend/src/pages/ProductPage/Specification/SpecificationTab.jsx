import "./SpecificationStyles.scss";

const SpecificationTab = () => {
  return (
    <div className="specification-tab">
      <div className="specification-container">
        <p>
          <span>Number of Keys:</span> 84 keys
        </p>
        <p>
          <span>Switches:</span> Gateron G Pro
        </p>
        <p>
          <span>Keycap material:</span> ABS
        </p>
        <p>
          <span>Layout:</span> ANSI
        </p>
        <p>
          <span>Polling Rate:</span> 90Hz
        </p>
      </div>
      <br></br>
      <div className="specification-container">
        <p>
          <span>Dimension:</span> 313 x 123 mm
        </p>
        <p>
          <span>Weight:</span> about 663g
        </p>
        <p>
          <span>Height with keycap (front):</span> 30 mm
        </p>
        <p>
          <span>Height with keycap (rear):</span> 40 mm
        </p>
      </div>
      <br></br>

      <div className="specification-container">
        <p>
          <span>1 x</span> Keboard
        </p>
        <p>
          <span>1 x</span> USB-A to USB Type-C Cable
        </p>
        <p>
          <span>1 x</span> Keycap Puller
        </p>
        <p>
          <span>1 x</span> User Manual
        </p>
      </div>
    </div>
  );
};

export default SpecificationTab;
