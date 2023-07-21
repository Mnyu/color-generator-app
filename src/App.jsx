import { useState } from 'react';
import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const defaultColor = '#0d4dce';
  const [colors, setColors] = useState(new Values(defaultColor).all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <ToastContainer position='top-center' />
      <Form addColor={addColor} defaultColor={defaultColor} />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
