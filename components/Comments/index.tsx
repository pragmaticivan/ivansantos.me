import React, { useRef } from 'react';

import useScript from '../../lib/use-script';

const Comments = () => {
  const comment = useRef(null);

  const status = useScript({
    url: 'https://utteranc.es/client.js',
    theme: 'github-light',
    issueTerm: 'url',
    repo: 'pragmaticivan/ivansantos.me',
    ref: comment,
  });
  console.log('assasas', status);

  return <div>{<div ref={comment}></div>}</div>;
};

export default Comments;
