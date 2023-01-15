import React from 'react'

const Text = ({content}) => {
  return (
    <div className="flex flex-col items-center justify-center m-5">
      <h1 className="text-4xl font-bold text-blue-600">{content}</h1>
    </div>
  );
}

export default Text