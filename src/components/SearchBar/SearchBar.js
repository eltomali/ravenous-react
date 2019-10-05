import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			term: "", 
			location: "", 
			sortBy: "best_match"
		}
		this.sortByOptions = {
			"Best Match": "best_match", 
			"Highest Rated": "rating", 
			"Most Reviewed": "review_count"
		}
	}
	//return the current CSS class for a sorting option. 
	getSortByClass(sortByOption) {
		this.state.sortBy=sortByOption ? 'active' : '';
	}

	//sets the state of a sorting option.
	handleSortByChange(sortByOption) {
		this.setState({sortBy: sortByOption})
	}

	// will return a HTML list with key the values of the object properties of this.sortByOptions: best_match, rating, review_count. The list shows the properties: "Best Match", "Highest Rating" and "Most Reviewed"
	renderSortByOptions() {
		return Object.keys(this.sortByOptions).map( sortByOption => {
			const sortByOptionValue = this.sortByOptions[sortByOption];
			return <li key={sortByOptionValue}>{sortByOption}</li>
		});
	}
	render() {
		return (
			<div className="SearchBar">
				<div className="SearchBar-sort-options">
					<ul>
						{this.renderSortByOptions()}
					</ul>
				</div>
				<div className="SearchBar-fields">
					<input placeholder="Search Businesses" />
					<input placeholder="Where?" />
				</div>
				<div className="SearchBar-submit">
					<a>Let's Go</a>
				</div>
			</div>
		);
	}
}
export default SearchBar;