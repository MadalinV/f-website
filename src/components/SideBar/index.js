import React from "react";
import {
	SideBarContainer,
	Icon,
	CloseIcon,
	SideBarWrapper,
	SideBarMenu,
	SideBarLink,
	SideBarBtnWrap,
	SideBarRoute,
} from "./SideBarElements";

function SideBar({ isOpen, toggle }) {
	return (
		<SideBarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SideBarWrapper>
				<SideBarMenu>
					<SideBarLink to="about" onClick={toggle}>
						About
					</SideBarLink>
					<SideBarLink to="discover" onClick={toggle}>
						Discover
					</SideBarLink>
					<SideBarLink to="services" onClick={toggle}>
						Services
					</SideBarLink>
					<SideBarLink to="signout" onClick={toggle}>
						Sign Out
					</SideBarLink>
				</SideBarMenu>
				<SideBarBtnWrap>
					<SideBarRoute to="/signin">Sign In</SideBarRoute>
				</SideBarBtnWrap>
			</SideBarWrapper>
		</SideBarContainer>
	);
}

export default SideBar;
