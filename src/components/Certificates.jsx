import React from 'react';

const Certificates = props => (
  <div className="Certificates">
    <div className="Certificates-container">
      
      {props.data.map((cert, index) => (
	<div className="Certificates-item" key={`Cert-${index}`}>
	  <h3>{cert.name} {cert.institution}
	     <span>{cert.description}</span>
	     <span>{cert.date}</span>
	  </h3>
	</div>
      ))}
    </div>
  </div>
);

export default Certificates;
