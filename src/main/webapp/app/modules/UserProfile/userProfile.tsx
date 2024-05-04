import React from 'react';
import './userProfile.scss';
import { Avatar } from 'primereact/avatar';
import { useState } from 'react';
import { ListBox } from 'primereact/listbox';

export default function TemplateDemo() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = [
    { name: 'Username', code: 'US' },
    { name: 'Email', code: 'BR' },
    { name: 'BookMark', code: 'US' },
    { name: 'Logout', code: 'LS' },
  ];

  const countryTemplate = option => {
    return (
      <div className="flex align-items-center">
        <img
          alt={option.name}
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`flag flag-${option.code.toLowerCase()}`}
          style={{ width: '1.25rem', marginRight: '.5rem' }}
        />
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <ListBox
        value={selectedCountry}
        onChange={e => setSelectedCountry(e.value)}
        options={countries}
        optionLabel="name"
        itemTemplate={countryTemplate}
        className="w-full md:w-14rem"
        listStyle={{ maxHeight: '250px' }}
      />
    </div>
  );
}
