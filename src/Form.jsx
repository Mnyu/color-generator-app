import { useState } from 'react';

const Form = ({ addColor, defaultColor }) => {
  const [color, setColor] = useState(defaultColor);

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className='container'>
      <h4>Color Generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder={defaultColor}
        />
        <button type='submit' className='btn' style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;
