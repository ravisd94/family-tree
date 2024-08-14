// components/FamilyTree.tsx
"use client";
import dynamic from 'next/dynamic';

// Dynamically import the Tree component to avoid SSR issues in Next.js
const Tree = dynamic(() => import('react-d3-tree'), { ssr: false });

const treeData = [
  {
    name: 'Grandparent',
    children: [
      {
        name: 'Parent',
        children: [
          { name: 'Child 1' },
          { name: 'Child 2' },
        ],
      },
    ],
  },
];

const FamilyTree = () => {
    const treeXAxis = window.innerWidth;
    
    return (
        <div className='w-full h-full flex justify-center' >
        <Tree data={treeData} 
        orientation="vertical" 
        translate={{ x: treeXAxis/2, y: 100 }}
        transitionDuration={1000}
        enableLegacyTransitions={true}
        />
        </div>
    );
};

export default FamilyTree;
