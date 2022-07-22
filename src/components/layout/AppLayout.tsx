import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { searchIsOpened } from "../../recoil/search";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpened, setIsOpened] = useRecoilState(searchIsOpened);

  return (
    <div>
      <header className="header">
        <div className="header-content">
          <Link className="link" to="/">
            <h1 className="header-title">Comlog</h1>
          </Link>
          <nav className="header-nav">
            <ul>
              <li onClick={() => setIsOpened(!isOpened)}>검색</li>
              <li>
                <Link className="link" to="/write">글 작성</Link>
              </li>
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