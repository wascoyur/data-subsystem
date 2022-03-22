import { Fragment } from 'react';
import PaymentCard from './components/PaymentCard';

function App() {
  return (
    <div id='container' style={{ padding: '24px' }}>
      <div>Home</div>
      <PaymentCard />
    </div>
  );
}

export default App;
