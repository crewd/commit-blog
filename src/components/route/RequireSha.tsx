import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { baseTreeState, LatestCommitState } from "../../recoil/sha";

function RequireSha({ children }: { children: React.ReactNode }) {
  const [latestCommit, setLatestCommit] = useRecoilState(LatestCommitState);
  const [baseTree, setBaseTree] = useRecoilState(baseTreeState);

  if (!latestCommit || !baseTree) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {children}
    </>
  );
}

export default RequireSha
