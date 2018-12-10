import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem
} from "reactstrap";

import { NavLink } from "react-router-dom";
export default class NavbarNavigation extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">Movie Database</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink to="/home" className="nav-link">
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/favorite" className="nav-link">
									Favorite
								</NavLink>
							</NavItem>
							{/* <NavItem>
								<NavLink to="/login" className="nav-link">
									Login
								</NavLink>
							</NavItem> */}
						</Nav>
					</Collapse>
				</Navbar>
				<br/>
			</div>
		);
	}
}
