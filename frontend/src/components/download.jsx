export default function DownloadAppSection() {
  return (
    <section className="flex justify-center px-4 py-8 sm:py-12 lg:py-16">
      <div className="w-full sm:w-[90%] md:w-[80%] max-w-5xl text-center rounded-2xl shadow-xl bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 p-6 sm:p-10 lg:p-14">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Download MannuBhai
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Experience the future of service booking with our mobile application. 
          Get <span className="font-semibold">1000 free credits</span> in your wallet 
          when you download MannuBhai app.
        </p>

        {/* Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg hover:opacity-90 transition w-full sm:w-auto justify-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="App Store"
              className="h-5 sm:h-6"
            />
            <div className="text-left leading-tight">
              <p className="text-[10px] sm:text-xs">Download on the</p>
              <p className="font-semibold text-sm sm:text-base">App Store</p>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg hover:opacity-90 transition w-full sm:w-auto justify-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
              alt="Google Play"
              className="h-5 sm:h-6"
            />
            <div className="text-left leading-tight">
              <p className="text-[10px] sm:text-xs">Get it on</p>
              <p className="font-semibold text-sm sm:text-base">Google Play</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
