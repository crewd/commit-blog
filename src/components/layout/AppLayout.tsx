import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Commit Blog</h1>
          <nav className="header-nav">
            <ul>
              <li>검색</li>
              <li>글 작성</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="content">
        {children}
      </main>
    </div>
  )
}

export default AppLayout;