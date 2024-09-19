export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input {...props} className={`border border-gray-300 px-3 py-2 rounded ${props.className}`} />;
};
