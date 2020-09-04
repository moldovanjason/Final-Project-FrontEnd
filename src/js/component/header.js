import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StockPage } from "../views/tradeStocks";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import { SignUpModal } from "../component/signUpModal";

export const Header = props => {
	// const [shares, setShares] = useState(0);
	// console.log(props);
	return (
		<div className="row header navbar-expand-lg d-flex">
			<div className="col-8">
				<a className="papertrade navbar-brand" href="/mystocks" onClick={() => props.history.push("/mystocks")}>
					PAPER TRADE
				</a>
			</div>
			<div className="col-2">
				<a className="logout nav-link" href="/home" onClick={() => props.history.push("/home")}>
					Log Out
				</a>
			</div>
			<div className="col-2 info">
				<div className="usernameheader">
					*username*
					{/*store.user.username*/}
				</div>
				<div className="buyingpowerheader">
					Buying Power:$10,000
					{/* {store.buyingPower} */}
				</div>
				<div className="portfoliovalueheader">Portfolio Value:$10,000 {/*{store.portfolioValue}*/}</div>
			</div>
		</div>
	);
};
Header.propTypes = {
	history: PropTypes.object
};

export default withRouter(Header);
