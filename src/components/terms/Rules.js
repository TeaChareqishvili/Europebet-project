import React from 'react'

export default function AdditionalRules({ isActive }) {
  return (
    <>
      {isActive ? (
        <div>წესი1</div>
      ) : isActive ? (
        <div>წესი2</div>
      ) : isActive ? (
        <div>წესი3</div>
      ) : (
        <></>
      )}
    </>
  );
}
