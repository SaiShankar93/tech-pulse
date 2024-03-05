import React from 'react';

function MyComponent() {
  return (
    <div>
      {/* Your other React components */}
      <iframe 
        src="https://konfhub.com/widget/t-24?ticketId=14578" 
        id="konfhub-widget" 
        title="Register for TechPulse 24" 
        width="100%" 
        height="500"
        style={{ border: "none" }} // Optionally, you can add styling here
      ></iframe>
    </div>
  );
}

export default MyComponent;
