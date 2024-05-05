import React, { useState } from 'react';
import { ListBox } from 'primereact/listbox';
import { Avatar } from 'primereact/avatar';

interface Country {
  name: string;
  icon: string;
}

const TemplateDemo: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const countries: Country[] = [
    { name: 'Username', icon: 'pi pi-user' },
    { name: 'Email', icon: 'pi pi-envelope' },
    { name: 'Bookmark', icon: 'pi pi-bookmark' },
    { name: 'Logout', icon: 'pi pi-power-off' },
  ];

  return (
    <div className="card flex justify-content-center">
      <ListBox
        value={selectedCountry}
        onChange={e => setSelectedCountry(e.value)}
        options={countries}
        optionLabel="name"
        className="w-full md:w-14rem"
        listStyle={{ maxHeight: '250px' }}
        itemTemplate={(option: Country) => (
          <div className="flex align-items-center">
            <Avatar icon={option.icon} className="mr-2" size="large" shape="circle" style={{ color: 'green' }} />
            <div>{option.name}</div>
          </div>
        )}
      />
    </div>
  );
};

export default TemplateDemo;
