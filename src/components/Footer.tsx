const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-white/20 backdrop-blur-lg border-t border-white/30 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

        <div>
          <h2 className="text-2xl font-extrabold text-green-700 drop-shadow-sm">PatientMS</h2>
          <p className="text-gray-700 mt-1 text-sm">
            Manage patient records with ease & accuracy.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 text-gray-800 font-medium">
          <a href="/" className="hover:text-green-600 transition">Home</a>
          <a href="/add-patient" className="hover:text-green-600 transition">Add Patient</a>
          <a href="/patients" className="hover:text-green-600 transition">View Patients</a>
        </div>

        <div className="text-gray-700 text-sm">
           {new Date().getFullYear()}By Chenara.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
