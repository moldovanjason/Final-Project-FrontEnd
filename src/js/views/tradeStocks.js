import React, { useEffect, useState, useContext } from "react";
import PropsTypes from "prop-types";
import { Navbar } from "../component/navbar";
import { Header } from "../component/header";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

//create your first component
export function TradeStocks(props) {
	const [shares, setShares] = useState(0);
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Header />
			<div className="mystockstitle">Trade Stocks</div>
			<Navbar />

			<table className="table">
				<thead>
					<tr className="rowheaders">
						<th scope="col" className="buytradestocks">
							Buy
						</th>
						<th scope="col" className="symboltradestocks">
							Symbol
						</th>
						<th scope="col" className="nametradestocks">
							Name
						</th>
						<th scope="col" className="pricetradestocks">
							Price
						</th>
					</tr>
				</thead>
				<tbody>
					{store.currentStocks.length < 1 ? (
						<div> Stock data is loading... </div>
					) : (
						store.currentStocks.map((stock, index) => {
							return (
								<tr className="" key={index}>
									<td>
										<Link to="/mystocks">
											<button
												className="buystockbutton"
												onClick={() => {
													actions.buyStock(
														1,
														stock.symbol,
														stock.name,
														stock.price,
														shares,
														5.67
													);
												}}>
												Buy
											</button>
										</Link>
										<input
											onChange={event => {
												setShares(parseFloat(event.target.value));
											}}
											// value={shares}
											className="input"
											type="text"
											aria-describedby="emailHelp"
											placeholder="Enter # of shares"
										/>
									</td>
									<td scope="row" className="tradestockssymbol">
										{stock.symbol}
									</td>
									<td className="tradestockssymbol">{stock.name}</td>
									<td className="tradestockssymbol">{stock.price}</td>
								</tr>
							);
						})
					)}
				</tbody>
			</table>
		</div>
	);
}

TradeStocks.propTypes = {
	history: PropsTypes.object
};
