import { ReactElement } from 'react';

type SephirotProps = {
  regent: {
    title: string; //above
    name: string;
    defect?: string;
    backgroundColor?: string;
    fontColor?: string;
    strokeColor?: string;
  };
  sephirot: {
    name: string;
    valor: string;
    backgroundColor?: string;
    fontColor?: string;
    strokeColor?: string;
  };
  planet: {
    icon?: string | ReactElement;
    number: number;
    backgroundColor?: string;
    fontColor?: string;
    strokeColor?: string;
  };
};

function Sephirot({ regent, sephirot, planet }: SephirotProps) {
  return (
    <svg viewBox="0 0 500 500" width="500px" height="500px">
      <ellipse
        style={{
          fill: regent.backgroundColor || 'rgb(216, 216, 216)',
          stroke: regent.strokeColor || 'rgb(0, 0, 0)',
        }}
        cx="251.627"
        cy="250.432"
        rx="222"
        ry="222"
      />
      <ellipse
        style={{
          fill: sephirot.backgroundColor || 'rgb(216, 216, 216)',
          stroke: sephirot.strokeColor || 'rgb(0, 0, 0)',
        }}
        cx="249.865"
        cy="247.141"
        rx="175"
        ry="175"
        data-name="yesod"
        data-number="9"
      >
        <title>sephir name</title>
      </ellipse>
      <ellipse
        style={{
          fill: planet.backgroundColor || 'rgb(216, 216, 216)',
          stroke: planet.strokeColor || 'rgb(0, 0, 0)',
        }}
        cx="251.6"
        cy="250.4"
        rx="100"
        ry="100"
      />
      <text
        style={{
          whiteSpace: 'pre',
          fill: planet.fontColor || 'white',
          fontFamily: 'Arial, sans-serif',
          fontSize: '70px',
        }}
        x="236"
        y="277"
        transform="matrix(1.835666, 0, 0, 1.510414, -218.867828, -146.72612)"
      >
        {planet.icon}
      </text>
      <text
        style={{
          whiteSpace: 'pre',
          fill: planet.fontColor || 'white',
          fontFamily: 'Arial, sans-serif',
          fontSize: '20px',
        }}
        x="250"
        y="310"
        transform="matrix(1.835666, 0, 0, 1.510414, -218.867828, -146.72612)"
      >
        {planet.number}
      </text>

      <text
        style={{
          fill: 'rgb(51, 51, 51)',
          fontFamily: 'Arial, sans-serif',
          fontSize: '28px',
          letterSpacing: '2.7px',
          whiteSpace: 'pre',
          transformBox: 'fill-box',
          transformOrigin: '152.356px 23.5284px',
        }}
        transform="matrix(1, 0, 0, 1, 147.055893, -96.238663)"
      >
        <textPath href="#text-path-0">{sephirot.name}</textPath>
      </text>
      <text
        style={{
          fill: 'rgb(51, 51, 51)',
          fontFamily: 'Arial, sans-serif',
          fontSize: '24px',
          letterSpacing: '2.7px',
        }}
        transform="matrix(1, 0.007, 0.007, 1.002, -2, 15)"
      >
        <textPath href="#path-7">{sephirot.valor}</textPath>
      </text>
      <text
        style={{
          fill: regent.fontColor,
          fontFamily: 'Arial, sans-serif',
          fontSize: '18px',
          letterSpacing: '2.7px',
          whiteSpace: 'pre',
          transformOrigin: '198.262px 216.42px',
        }}
        transform="matrix(1, 0, 0, 1, 142.807053, -161.571259)"
      >
        <textPath href="#path-8">{regent.title}</textPath>
      </text>
      <text
        style={{
          fill: regent.fontColor,
          fontFamily: 'Arial, sans-serif',
          fontSize: '20px',
          letterSpacing: '3px',
          whiteSpace: 'pre',
          transformOrigin: '253.647px 345.094px',
        }}
        transform="matrix(0.573576, 0.819153, -0.819153, 0.573576, -149.807556, -6.855417)"
      >
        <textPath href="#path-9">{regent.name}</textPath>
      </text>
      <text
        style={{
          fill: regent.fontColor,
          fontFamily: 'Arial, sans-serif',
          fontSize: '21px',
          letterSpacing: '4.3px',
          whiteSpace: 'pre',
          transformOrigin: '253.647px 345.094px',
        }}
        transform="matrix(0.515039, -0.857168, 0.857168, 0.515039, 139.41655, 1.894234)"
      >
        <textPath href="#path-10">{regent.defect}</textPath>
      </text>
    </svg>
  );
}

export default Sephirot;