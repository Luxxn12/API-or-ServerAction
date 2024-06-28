import React from 'react';

export const dynamic = "force-dynamic"

async function getUser() {
  console.log("diminta")
  await new Promise(r => setTimeout(r, 5000))
  console.log("dilanjutkan")
  return Math.random()
}

async function UiMenu1() {
  const data = await getUser()
  return (
    <div>
      Ui Menu 1
      {data}
    </div>
  );
}

export default UiMenu1;
