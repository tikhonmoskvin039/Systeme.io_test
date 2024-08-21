'use client'

import React, { useState, useEffect } from 'react';

interface EditModalProps {
  isOpen: boolean;
  initialValue: string;
  onSave: (newValue: string) => void;
  onClose: () => void;
  label: string;
}

export const EditModal: React.FC<EditModalProps> = ({ isOpen, initialValue, onSave, onClose, label }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue, isOpen]);

  const handleSave = () => {
    onSave(value);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[40vw] p-4 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4 break-words">Edit {label}</h2>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <div className="flex justify-center mt-4 gap-2 sm:justify-end">
          <button onClick={onClose} className="mr-2 px-1 py-2 bg-gray-500 text-white rounded md:px-4">Cancel</button>
          <button onClick={handleSave} disabled={!value.length} className="px-1 py-2 bg-blue-500 text-white rounded md:px-4 disabled:opacity-[0.6] disabled:bg-neutral-500">Save</button>
        </div>
      </div>
    </div>
  );
};
