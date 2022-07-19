import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'

const WirtePage = () => {
  const [textValue, setTextValue] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(() => e.target.value);
  }

  return (
    <div className='write-wrapper'>
      <div className='write-editor' >
        <textarea className='write-editor__textForm' onChange={handleOnChange} maxLength={72} placeholder="최대 72글자&#13;&#10;마크다운 사용 가능"></textarea>
        <div>
          <button className='write-editor__button'>커밋!</button>
        </div>
      </div>
      <div className='write-preview'>
        <ReactMarkdown>{textValue ? textValue : "## 미리보기"}</ReactMarkdown>
      </div>
    </div>
  )
}

export default WirtePage;