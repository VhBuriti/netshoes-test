import { useState } from "react";
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
      <IconLink icon={<Logo />} link="/"/>

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

        <div data-desktop-profile>
          <IconButton
            icon={<ProfileIcon data-profile-icon />}
            data-profile-button
          />
          {!isMobile && (
            <div data-desktop-dropdown>
              <HeaderOptions />
            </div>
          )}
        </div>
      </div>

      {isMobile && isDropdownVisible && (
        <Slider closeSlider={closeDropdown} sliderTitle={<Logo />}>
          <HeaderOptions />
        </Slider>
      )}
    </header>
  );
}

export default Header;