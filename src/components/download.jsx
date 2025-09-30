export default function DownloadAppSection() {
  return (
    <section className="flex justify-center px-4 py-10">
      <div className="w-[80%] h-80 max-w-5xl text-center rounded-2xl shadow-xl bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 p-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-4">
          Download MannuBhai
        </h2>

        {/* Description */}
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Experience the future of service booking with our mobile application.
          Get <span className="font-semibold">1000 free credits</span> in your wallet 
          when you download MannuBhai app.
        </p>

        {/* Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:opacity-90 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="App Store"
              className="h-6"
            />
            <div className="text-left leading-tight">
              <p className="text-xs">Download on the</p>
              <p className="font-semibold">App Store</p>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:opacity-90 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
              alt="Google Play"
              className="h-6"
            />
            <div className="text-left leading-tight">
              <p className="text-xs">Get it on</p>
              <p className="font-semibold">Google Play</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
