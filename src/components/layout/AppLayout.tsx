import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <h3>Blog</h3>
      </header>
      {children}
    </div>
  )
}

export default AppLayout;