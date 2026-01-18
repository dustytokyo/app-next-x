'use client';

import React, { useState } from 'react';

export interface HelloButtonProps {
  label?: string;
}

export const HelloButton: React.FC<HelloButtonProps> = ({
  label = 'Open Modal',
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        data-testid="hello-button"
        className="rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-lg"
        style={{ backgroundColor: '#3056D3' }}
      >
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setOpen(false)}
          data-testid="hello-modal"
        >
          <div
            className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center text-2xl font-semibold text-dark">
              hello!
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-body-color hover:text-primary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.46582 8L16 14.5342L14.5342 16L8 9.46582L1.46582 16L0 14.5342L6.53418 8L0 1.46582L1.46582 0L8 6.53418L14.5342 0L16 1.46582L9.46582 8Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
