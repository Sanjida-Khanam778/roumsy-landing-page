  const ForgotPasswordPage = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Forget Password</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter Email
        </label>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="example@gmail.com"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <Eye className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <Button onClick={() => setCurrentPage("otp")}>Get OTP</Button>

      <div className="text-center">
        <button
          onClick={() => setCurrentPage("login")}
          className="text-sm text-gray-600 hover:text-gray-800 flex items-center justify-center space-x-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Login</span>
        </button>
      </div>
    </div>
  );
export default ForgotPasswordPage;