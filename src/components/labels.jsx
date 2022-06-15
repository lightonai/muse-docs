import React from 'react';

export const Alpha = () => <span className="label alpha-label">Alpha</span>;

export const Beta = () => <span className="label beta-label">Beta</span>;

export const ParamType = ({ type }) => (
    <span className="param param-types">{type}</span>
);

export const ParamDefault = ({ default: text }) => (
    <span className="param param-optional">{text}</span>
);

export const ParamWarning = ({ warning }) => (
    <span className="param param-warning">{warning}</span>
);
