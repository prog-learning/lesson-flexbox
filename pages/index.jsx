import { useState } from 'react';
import Head from 'next/head';
import { ParentFrame } from '../src/ParentFrame';
import { Button } from '../src/Button';
import { Children } from '../src/Children';
import { properties } from '../src/utiles';

export default function Home() {
  const [child, setChild] = useState(3);
  const [JC, setJC] = useState('flex-start');
  const [AC, setAC] = useState('flex-start');
  const [FD, setFD] = useState('row');
  const [FW, setFW] = useState('no-wrap');
  const currentvalues = [JC, AC, FD, FW];

  const displayChild = () => {
    const children = [];
    for (let i = 0; i < child; i++) {
      children.push(<Children num={i + 1} key={i} />);
    }
    return children.map(el => el);
  };

  const changeStyle = (property, value) => {
    if (property === 'justify-content') {
      setJC(value);
    }
    if (property === 'align-content') {
      setAC(value);
    }
    if (property === 'flex-direction') {
      setFD(value);
    }
    if (property === 'flex-wrap') {
      setFW(value);
    }
  };

  return (
    <div style={{ padding: '0 24px 40px' }}>
      <Head>
        <title>Lesson Flexbox</title>
        <meta name="description" content="初学者が直感でFlexboxを最低限学べるアプリ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Lesson Flex</h1>

      <Button onClick={() => setChild(child + 1)}>子どもを増やす</Button>
      <Button onClick={() => setChild(child - 1)}>子どもを減らす</Button>
      <ParentFrame JC={JC} AC={AC} FD={FD} FW={FW}>
        {displayChild()}
      </ParentFrame>
      {properties.map((property, index) => <div key={property.name}>
        <h3>{property.name}</h3>
        <div>
          {property?.values?.map(value => <Button key={value} disabled={value === currentvalues[index]} onClick={() => changeStyle(property.name, value)}>{value}</Button>)}
        </div>
      </div>)}
    </div>
  );
}
