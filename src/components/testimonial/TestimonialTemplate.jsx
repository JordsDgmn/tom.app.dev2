const TestimonialTemplate = ({ testimonial }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg mx-auto text-center border border-gray-200">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-100 shadow-sm"
      />

      <p className="text-gray-600 italic mb-4">“{testimonial.quote}”</p>

      <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
      <p className="text-sm text-gray-500">{testimonial.designation}</p>
    </div>
  );
};

export default TestimonialTemplate;
