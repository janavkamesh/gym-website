import React from 'react';

const stats = [
  { number: '4.8', label: 'Google Rating' },
  { number: '12', label: 'Years Running' },
  { number: '100+', label: 'Members Trained' },
];

export function HeroTrustBadges() {
  return (
    <div className="trust-strip">
      {stats.map((stat, idx) => (
        <div key={idx} className="trust-stat">
          <span className="trust-number">{stat.number}</span>
          <span className="trust-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default HeroTrustBadges;
