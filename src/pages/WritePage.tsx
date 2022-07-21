import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { createFile, getShaNewCommit, pushCommit } from '../api';
import { baseTreeState, LatestCommitState, newCommitState, newTreeState } from '../recoil/sha';

const WirtePage: React.FC = () => {
  const [textValue, setTextValue] = useState('');

  const [latestCommit, setLatestCommit] = useRecoilState(LatestCommitState);
  const [baseTree, setBaseTree] = useRecoilState(baseTreeState);
  const [newTree, setNewTree] = useRecoilState(newTreeState);
  const [newCommit, setNewCommit] = useRecoilState(newCommitState);

  const navigate = useNavigate();

  const fileTitle = textValue.split(/\n/g)[0];

  const shaNewTree = useMutation(createFile);
  const shaNewCommit = useMutation(getShaNewCommit);
  const commitPush = useMutation(pushCommit);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(() => e.target.value);
  }

  const getShaNewTree = () => {
    if (!baseTree || !textValue) {
      return;
    }
    shaNewTree.mutate({
      "base_tree": baseTree,
      "tree": [
        {
          "path": `${fileTitle}.txt`,
          "mode": "100644",
          "type": "blob",
          "content": textValue
        }
      ]
    })
  }

  useEffect(() => {
    if (!shaNewTree.data) {
      return;
    }
    setNewTree(shaNewTree.data.data.sha)
  }, [shaNewTree.data]);

  useEffect(() => {
    if (!newTree) {
      return;
    }
    shaNewCommit.mutate({
      parents: [latestCommit],
      tree: newTree,
      message: textValue
    })
  }, [newTree])

  useEffect(() => {
    if (!shaNewCommit.data) {
      return;
    }
    setNewCommit(shaNewCommit.data.data.sha)
  }, [shaNewCommit.data]);

  useEffect(() => {
    if (!newCommit) {
      return;
    }
    commitPush.mutate({
      sha: newCommit,
      force: true,
    })
  }, [newCommit])

  useEffect(() => {
    if (!commitPush.data) {
      return;
    }
    navigate('/');
  }, [commitPush.data])

  return (
    <div className='write-wrapper'>
      <div className='write-editor' >
        <textarea className='write-editor__textForm' onChange={handleOnChange} maxLength={72} placeholder="최대 72글자&#13;&#10;마크다운 사용 가능"></textarea>
        <div>
          <button className='write-editor__button' onClick={getShaNewTree}>커밋!</button>
        </div>
      </div>
      <div className='write-preview'>
        <ReactMarkdown>
          {textValue ? textValue : "## 미리보기"}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default WirtePage;