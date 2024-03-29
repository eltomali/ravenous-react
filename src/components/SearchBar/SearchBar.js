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
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.sortByOptions = {
			"Best Match": "best_match", 
			"Highest Rated": "rating", 
			"Most Reviewed": "review_count"
		}
	}
		
	//return the current CSS class for a sorting option. 
	getSortByClass(sortByOption) {
		// this.state.sortBy === sortByOption ? 'active' : '';
		if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
	}

	//sets the state of a sorting option.
	handleSortByChange(sortByOption) {
		console.log("Handle Sort By Change", sortByOption)
		this.setState({sortBy: sortByOption})
	}

	handleTermChange(evt) {
		this.setState({term: evt.target.value});
	}
	handleLocationChange(evt) {
		this.setState({location: evt.target.value});
	}
	handleSearch(evt) {
		this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
		evt.preventDefault();
	}

	// will return a HTML list with key the values of the object properties of this.sortByOptions: best_match, rating, review_count. The list shows the properties: "Best Match", "Highest Rating" and "Most Reviewed"
	renderSortByOptions() {
		return Object.keys(this.sortByOptions).map( sortByOption => {
			let sortByOptionValue = this.sortByOptions[sortByOption];
			return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
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
					<input placeholder="Search Businesses" onChange = {this.handleTermChange}/>
					<input placeholder="Where?" onChange = {this.handleLocationChange}/>
				</div>
				<div className="SearchBar-submit" onClick={this.handleSearch}>
					<a>Let's Go</a>
				</div>
			</div>
		);
	}
}
export default SearchBar;