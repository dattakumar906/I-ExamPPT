import React, { useState } from 'react';
import ThankYouPage from './ThankYouPage';

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true); // Change state to show the ThankYouPage
  };

  return (
    <div>
      {!isSubmitted ? (
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <ThankYouPage />
      )}
    </div>
  );
};

export default App;
