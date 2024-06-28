'use client'
import React, { useEffect, useState } from 'react';
import UiMenu1 from './UiMenu1';

function UiMenu1UseClient({ data }: { data: any }) {
  const [value, setValue] = useState(null)
  const [value2, setValue2] = useState<any | null>(data)
  const [dynamic, setDynamic] = useState(null)


  useEffect(() => {
    fetch('/api/get-user', { cache: "no-cache" }).then(v => v.json()).then(setValue)
    fetch('/api/load-status', { cache: "no-cache" }).then(v => v.json()).then(setValue2)
    fetch('/api/dynamic-data', { cache: "no-cache" }).then(v => v.json()).then(setDynamic)
  }, [])
  return (
    <div>

      <hr />
      {value ? JSON.stringify(value) : "loading ... user"}
      <hr />
      {value2 ? value2.data.map((v: any, k: number) => <div key={k}>
        DATA: <div>{v.data}</div> <br />
      </div>) : "loading ... status"}
      <hr />
      {dynamic ? JSON.stringify(dynamic) : "loading ... status"}
    </div>
  );
}

export default UiMenu1UseClient;
