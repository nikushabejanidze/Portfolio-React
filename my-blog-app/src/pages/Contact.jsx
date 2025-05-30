function Contact() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">დამიკავშირდი</h1>

      <p className="text-gray-700 mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Nulla at eros orci.
      </p>

      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <p className="text-gray-800"><strong>📧 ელ. ფოსტა:</strong> example@email.com</p>
        <p className="text-gray-800 mt-2"><strong>💼 LinkedIn:</strong> <a href="https://linkedin.com" target="_blank" className="text-blue-600 underline">ჩემი პროფილი</a></p>
        <p className="text-gray-800 mt-2"><strong>📱 ტელეფონი:</strong> +995 555 123 456</p>
      </div>
    </div>
  );
}

export default Contact;
