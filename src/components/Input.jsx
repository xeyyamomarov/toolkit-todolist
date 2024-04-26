const Input = ({ type, placeholdeer, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholdeer}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
