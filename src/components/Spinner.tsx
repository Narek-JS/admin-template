import React from "react";

const Spinner: React.FC = () => (
  <div className="flex items-center justify-center py-10">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

export { Spinner };
