import React from 'react';
import Team from '../components/Team'; // Adjust path to where you saved Team.tsx
import Services from '../components/Services'; // Adjust path to where you saved Services.tsx

const Company: React.FC = () => {
  return (
    <main>
      {/* You can add a header or hero section here if needed */}
      
      {/* The Team Section */}
      <Team />

      {/* The Services Section */}
      <Services />
    </main>
  );
};

export default Company;