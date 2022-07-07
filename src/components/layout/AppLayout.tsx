import React from "react";
import { Link } from "react-router-dom";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <Link className="link" to="/">
            <h1 className="header-title">Comlog</h1>
          </Link>
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