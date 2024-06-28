import UiMenu1 from '@/ui/menu1/UiMenu1';
import UiMenu1UseClient from '@/ui/menu1/UiMenu1UseClient';
import React from 'react';


async function getUser() {
  const list = Array.from({ length: 2 }).map((v, k) => ({ data: k }))
  console.log("diminta")
  // await new Promise(r => setTimeout(r, 1000))
  console.log("dilanjutkan")
  return {
    "success": true,
    "data": list
  }
}

async function Page() {
  const data = await getUser()
  return (
    <div>
      Page 1

      <hr />
      UiMenu1UseClient
      <UiMenu1UseClient data={data} />
      <hr />
      server Component
      {/* <UiMenu1 /> */}
    </div>
  );
}

export default Page;
