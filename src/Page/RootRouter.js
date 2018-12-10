import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarNavigation from "../components/NavbarNavigation";

const Home = lazy(() => import("./Home"));
const Favorite = lazy(() => import("./Favorite"));
const Detail = lazy(() => import("./Detail"));
const Add = lazy(() => import("./Home/add"));

export default class RootRouter extends Component {
	render() {
		return (
			<div>
				<Router>
					<div>
                        <NavbarNavigation />
						<Suspense fallback={<div>Loading .....</div>}>
							<Route path="/" exact component={Home} />
							<Route path="/home" component={Home} />
							<Route path="/add" component={Add} />
							<Route path="/favorite" component={Favorite} />
							<Route path="/detail/:movieId" component={Detail} />
						</Suspense>
					</div>
				</Router>
			</div>
		);
	}
}
