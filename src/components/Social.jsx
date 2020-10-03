import React from 'react';

const Social = props => (
  <div className="Social">
    {props.social &&
      <ul>
	{props.social.map((item, index) => (
	  <li key={`social-${index}`} taget='_blank'>
	    <a href={item.url}> {item.name}</a>	  
	  </li>
	))}
      </ul>
    }
  </div>
);

export default Social;
