import React from "react";

export const Footer = () => {
  return (
    // fixed-bottom
    <div>
      <footer class="bg-body-tertiary text-center text-lg-start bg-primary ">
        <div
          class="text-center p-3"
          style={{"background-color": "rgba(0, 0, 0, 0.05);"}}
        >
          © 2024 Copyright:
          <a class="text-body" target="_blank" href="https://github.com/SidAlpha09">
              SidAlpha09
          </a>
        </div>
      </footer>
    </div>
  );
};
