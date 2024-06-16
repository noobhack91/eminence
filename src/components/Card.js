const Card = ({ title, description }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  };
  
  export default Card;
  