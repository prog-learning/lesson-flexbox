const positions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
const directions = ['row', 'row-reverse', 'column', 'column-reverse'];
const wrap = ['no-wrap', 'wrap'];

export const properties = [
  { name: 'justify-content', values: positions },
  { name: 'align-content', values: positions },
  { name: 'flex-direction', values: directions },
  { name: 'flex-wrap', values: wrap }
];

