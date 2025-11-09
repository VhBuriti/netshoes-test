import React, { useState } from "react";
import styles from "./index.module.scss";
import IconLink from "../../atoms/IconLink";
import IconButton from "../../atoms/IconButton";
import {
  Logo,
  WishlistIcon,
  ProfileIcon,
  HamburgerIcon,
} from "../../../assets";
import Slider from "../../molecules/Slider";
import HeaderOptions from "./HeaderOptions";
import useDeviceInfo from "../../../utils/useDevice";

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const isMobile = useDeviceInfo(768);

  const openDropdown = () => setDropdownVisible(true);
  const closeDropdown = () => setDropdownVisible(false);

  return (
    <header className={styles.header}>
      <Logo />

      {isMobile && (
        <IconButton
          data-hamburguer-button
          icon={<HamburgerIcon />}
          onClick={openDropdown}
        />
      )}

      <div data-header-options>
        <IconLink
          icon={<WishlistIcon data-wishlist-icon />}
          link="/wishlist"
          altText="Wishlist"
          text="Wishlist"
        />

        <div
          data-profile
          onMouseEnter={!isMobile ? openDropdown : undefined}
          onMouseLeave={!isMobile ? closeDropdown : undefined}
        >
          <ProfileIcon data-profile-icon />
        </div>
      </div>

      {isDropdownVisible && (
        <>
          {isMobile ? (
            <Slider closeSlider={closeDropdown} sliderTitle={<Logo />}>
              <HeaderOptions />
            </Slider>
          ) : (
            <div data-desktop-dropdown>
              <HeaderOptions />
            </div>
          )}
        </>
      )}
    </header>
  );
}

export default Header;
