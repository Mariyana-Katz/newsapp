import React from 'react';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/comment">
        Comment
      </MenuItem>
      <MenuItem icon="asterisk" to="/article">
        Article
      </MenuItem>
      <MenuItem icon="asterisk" to="/bookmarks">
        Bookmarks
      </MenuItem>
      <MenuItem icon="asterisk" to="/likes">
        Likes
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
