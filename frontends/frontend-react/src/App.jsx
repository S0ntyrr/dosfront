import React, { useEffect, useState } from 'react';
import { getItems } from './api';

export default function App(){
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getItems().then(data=>{ setItems(data); setLoading(false)}).catch(e=>{console.error(e); setLoading(false)});
  },[]);

  return (
    <div style={{padding:20}}>
      <h1>FrontEnd React — Integrado a BackEnd A</h1>
      {loading ? <p>Cargando...</p> : (
        <ul>{items.map(it => <li key={it.id}>{it.name}</li>)}</ul>
      )}
    </div>
  );
}