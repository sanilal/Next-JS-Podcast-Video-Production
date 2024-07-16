const ContactForm = () => {
  return (
    <div className="flex items-center justify-center"
    >
      <form className="p-2 rounded-md w-full max-w-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <input
              type="text"
              id="name"
              className="p-2 bg-transparent border border-blue rounded"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              id="business-name"
              className="p-2 bg-transparent border border-blue rounded"
              placeholder="Business Name"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              id="contact-number"
              className="p-2 bg-transparent border border-blue rounded"
              placeholder="Contact Number"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              id="email-id"
              className="p-2 bg-transparent border border-blue rounded"
              placeholder="Email ID"
            />
          </div>
          <div className="flex flex-col sm:col-span-2">
            <input
              type="text"
              id="services-interested"
              className="p-2 bg-transparent border border-blue rounded"
              placeholder="Services Interested"
            />
          </div>
          <div className="flex flex-col sm:col-span-2">
            <textarea
              id="your-message"
              className="p-2 bg-transparent border border-blue rounded h-32" 
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex justify-left sm:col-span-2">
            <button
              type="submit"
              className="bg-primary text-white py-2 px-16 rounded-md hover:bg-pink-700 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
