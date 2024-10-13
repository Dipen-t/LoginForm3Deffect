import React, { useState } from "react";
import { EyeIcon, EyeDropperIcon } from "@heroicons/react/24/outline";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Mouse move event to apply 3D rotation based on cursor position
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 8; // X-axis rotation
    const y = -(clientY - top - height / 2) /8; // Y-axis rotation
    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 }); // Reset rotation when mouse leaves
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center font-mono relative perspective">
      {/* Login form with 3D rotation effect */}
      <div
        className="relative w-[360px] h-[300px] p-6 glass-effect three-d-effect z-10 transition-transform duration-300"
        style={{
          transform: `rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`, // Apply 3D rotation
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <form className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-white">Login</h1>
          <div>
            <label className="text-white">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full p-2 border-2 border-gray-300 rounded bg-white/30 text-white hover:border-white transition-smooth duration-300"
            />
          </div>
          <div className="relative">
            <label className="text-white">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full p-2 border-2 border-gray-300 rounded bg-white/30 text-white click:border-white transition-smooth duration-300"      
            />
            <span
              className="absolute right-2 top-[66%] -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer"
              onClick={() => setShowPassword((oldVal) => !oldVal)}
            >
              {showPassword ? (
                <EyeIcon className="w-5 h-5" />
              ) : (
                <EyeDropperIcon className="w-5 h-5" />
              )}
            </span>
          </div>
          <div>
            <input type="checkbox" />
            <label className="ml-2 text-white">Remember me</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
