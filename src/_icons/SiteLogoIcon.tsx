import React from 'react';

const SiteLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="site-logo"
      fill="currentColor"
      stroke="none"
      fill-rule="evenodd"
      viewBox="0 0 540 540"
      width="540px"
      height="540px"
      {...props}
    >
      <path d="M270,0c149.017,0 270,120.983 270,270c0,149.017 -120.983,270 -270,270c-149.017,0 -270,-120.983 -270,-270c0,-149.017 120.983,-270 270,-270Zm0,50c-121.421,0 -220,98.579 -220,220c-0,121.421 98.579,220 220,220c121.421,0 220,-98.579 220,-220c0,-121.421 -98.579,-220 -220,-220Zm0,50c93.826,0 170,76.174 170,170c0,93.826 -76.174,170 -170,170c-93.826,0 -170,-76.174 -170,-170c0,-93.826 76.174,-170 170,-170Zm0,50c-66.23,0 -120,53.77 -120,120c0,66.23 53.77,120 120,120c66.23,0 120,-53.77 120,-120c0,-66.23 -53.77,-120 -120,-120Z" />
    </svg>
  );
};

export default SiteLogoIcon;
