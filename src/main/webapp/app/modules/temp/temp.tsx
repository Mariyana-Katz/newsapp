import React, { useState } from 'react';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface userProfile {
  name: string;
  code: string;
}

export default function ClearIconDemo() {
  const [profile, setprofile] = useState<userProfile | null>(null);
  const userdetails: userProfile[] = [
    { name: 'Username', code: 'pi pi-user' },
    { name: 'Email', code: 'pi pi-envelope' },
    { name: 'Bookmark', code: 'pi pi-bookmark' },
    { name: 'Logout', code: 'pi pi-power-off' },
  ];

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={profile}
        onChange={(e: DropdownChangeEvent) => setprofile(e.value)}
        options={userdetails}
        optionLabel="name"
        showClear
        placeholder="Profile"
        className="w-full md:w-14rem"
      />
    </div>
  );
}
