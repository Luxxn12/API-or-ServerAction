import React from 'react';

import Link from "next/link";


const listMenu = [
  {
    "id": "1",
    "name": "menu1",
    "path": '/dashboard/menu1'
  },
  {
    "id": "2",
    "name": "menu2",
    "path": '/dashboard/menu2'
  },
  {
    "id": "3",
    "name": "menu3",
    "path": '/dashboard/menu3'
  },
  {
    "id": "4",
    "name": "menu4",
    "path": '/dashboard/menu4'
  }

]

function Layout({ children }: { children: any }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row"
    }}>
      <div style={{
        width: 300,
        display: "flex",
        flexDirection: "column"
      }}>
        {listMenu.map((v, k) => <div style={{
          padding: 10
        }} key={k}>
          <Link href={v.path}>{v.name}</Link>
        </div>)}
      </div>
      <div>
        <h1>Content</h1>
        {children}
      </div>
    </div>
  );
}

export default Layout;
