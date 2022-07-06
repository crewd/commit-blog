import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">Blog</h1>
        <nav className="header-nav">
          <ul>
            <li>검색</li>
            <li>글 작성</li>
          </ul>
        </nav>
      </header>
      <main className="content">
        {children}
      </main>
    </div>
  )
}

export default AppLayout;