import { X, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: (email: string, password: string) => void;
  onSignUp: (email: string, password: string, confirmPassword: string) => void;
}

export function AuthModal({ isOpen, onClose, onSignIn, onSignUp }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ email: string[]; password: string[]; confirmPassword: string[] }>({
    email: [],
    password: [],
    confirmPassword: []
  });

  if (!isOpen) return null;

  const validateField = (field: string, value: string) => {
    const newErrors = { ...errors };

    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        newErrors.email = ["Email is required."];
      } else if (!emailRegex.test(value)) {
        newErrors.email = ["Please enter a valid email address."];
      } else {
        newErrors.email = [];
      }
    } else if (field === 'password') {
      const passwordErrors: string[] = [];
      if (value.length < 8) {
        passwordErrors.push("At least 8 characters long.");
      }
      if (!/[a-z]/.test(value)) {
        passwordErrors.push("At least one lowercase letter.");
      }
      if (!/[A-Z]/.test(value)) {
        passwordErrors.push("At least one uppercase letter.");
      }
      if (!/\d/.test(value)) {
        passwordErrors.push("At least one number.");
      }
      if (!/[@$!%*?&]/.test(value)) {
        passwordErrors.push("At least one special character (@$!%*?&).");
      }
      newErrors.password = passwordErrors;
    } else if (field === 'confirmPassword' && isSignUp) {
      if (!value) {
        newErrors.confirmPassword = ["Please confirm your password."];
      } else if (value !== password) {
        newErrors.confirmPassword = ["Passwords do not match."];
      } else {
        newErrors.confirmPassword = [];
      }
    }

    setErrors(newErrors);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateField('email', e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validateField('password', e.target.value);
    if (isSignUp && confirmPassword) validateField('confirmPassword', confirmPassword);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    validateField('confirmPassword', e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateField('email', email);
    validateField('password', password);
    if (isSignUp) validateField('confirmPassword', confirmPassword);

    if (errors.email.length === 0 && errors.password.length === 0 && (!isSignUp || errors.confirmPassword.length === 0)) {
      if (isSignUp) {
        onSignUp(email, password, confirmPassword);
      } else {
        onSignIn(email, password);
      }
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrors({
        email: [],
        password: [],
        confirmPassword: []
      });
      setShowPassword(false);
      setShowConfirmPassword(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors({
      email: [],
      password: [],
      confirmPassword: []
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      
      {/* Modal */}
      <div className="relative z-10 bg-[#FAF7F0] w-full max-w-[800px] max-h-[1000px] h-screen flex flex-col shadow-2xl rounded-lg overflow-hidden sm:h-auto sm:max-h-screen md:p-12 p-6">
        <div className="flex-1 flex flex-col overflow-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#6B5D4F] hover:text-black z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center items-center text-center pt-16 pb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-light mb-4">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-sm text-[#6B5D4F] mb-8 max-w-md leading-relaxed">
              {isSignUp ? "Join us to start your journey" : "Sign in to continue your journey with us"}
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={() => validateField('email', email)}
                  required
                  className={`w-full px-4 py-3 border bg-transparent focus:outline-none focus:border-black rounded-md ${
                    errors.email.length > 0 ? 'border-red-500' : 'border-[#CFC6B8]'
                  }`}
                />
                {errors.email.map((error, index) => (
                  <p key={index} className="text-red-500 text-xs mt-1">{error}</p>
                ))}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    onBlur={() => validateField('password', password)}
                    required
                    className={`w-full px-4 py-3 pr-12 border bg-transparent focus:outline-none focus:border-black rounded-md ${
                      errors.password.length > 0 ? 'border-red-500' : 'border-[#CFC6B8]'
                    }`}
                  />
                  <button
                    type="button"
                    onPointerDown={() => setShowPassword(true)}
                    onPointerUp={() => setShowPassword(false)}
                    onPointerLeave={() => setShowPassword(false)} 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B5D4F] hover:text-black"
                    aria-label="Reveal password"
                  >
                    {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                  </button>
                </div>
                {errors.password.map((error, index) => (
                  <p key={index} className="text-red-500 text-xs mt-1">{error}</p>
                ))}
              </div>
              {isSignUp && (
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      onBlur={() => validateField('confirmPassword', confirmPassword)}
                      required
                      className={`w-full px-4 py-3 pr-12 border bg-transparent focus:outline-none focus:border-black rounded-md ${
                        errors.confirmPassword.length > 0 ? 'border-red-500' : 'border-[#CFC6B8]'
                      }`}
                    />
                    <button
                      type="button"
                      onPointerDown={() => setShowConfirmPassword(true)}
                      onPointerUp={() => setShowConfirmPassword(false)}
                      onPointerLeave={() => setShowConfirmPassword(false)} 
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B5D4F] hover:text-black"
                      aria-label="Reveal confirm password"
                    >
                      {showConfirmPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                    </button>
                  </div>
                  {errors.confirmPassword.map((error, index) => (
                    <p key={index} className="text-red-500 text-xs mt-1">{error}</p>
                  ))}
                </div>
              )}
              <button
                type="submit"
                className="w-full py-4 bg-[#1a1a1a] text-white hover:bg-[#D4AF37] transition-all rounded-md font-medium"
              >
                {isSignUp ? "Sign Up" : "Sign in"}
              </button>
            </form>

            <p className="text-sm text-[#6B5D4F] mt-8">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button onClick={toggleMode} className="underline hover:text-black font-medium">
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}