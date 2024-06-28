
import React from 'react';

function Page() {
  const list = Array.from({ length: 1000 }).map((v, k) => ({ data: k }))
  return (
    <div>
      Page 4
      <hr />
      {JSON.stringify(list)}
    </div>
  );
}

export default Page;
