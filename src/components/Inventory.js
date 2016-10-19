import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {

	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event, key) {
		const fish = this.props.fishes[key];

		const updatedFish = {
			...fish, 
			[event.target.name]: event.target.value
		}

		this.props.updateFish(key, updatedFish);
	}

	renderInventory(key) {
		const fish = this.props.fishes[key]
		return (
			<div key={key} className="fish-edit">
				<input type="text" name="name" value={fish.name} placeholder="Fish Name"  onChange={(e) => this.handleChange(e, key)}/> 
				<input type="text" name="price" value={fish.price} placeholder="FIsh Price" onChange={(e) => this.handleChange(e, key)}/> 

				<select name="status" onChange={(e) => this.handleChange(e, key)} value={fish.status}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select> 

				<textarea type="text" name="desc" value={fish.desc} placeholder="Fish Desc" onChange={(e) => this.handleChange(e, key)}></textarea>
				<input type="text" name="image" value={fish.image} placeholder="FIsh Image" onChange={(e) => this.handleChange(e, key)}/> 
				<button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
			</div>
		)
	}

	render() {
		return (
			<div>
				<h2>Inventory</h2>
				{Object.keys(this.props.fishes).map(this.renderInventory.bind(this))}
				<AddFishForm addFish={this.props.addFish}/>
				<button onClick={this.props.loadSamples}>Load Sample</button>
			</div>
		) 
	}

}

Inventory.propTypes = {
	fishes: React.PropTypes.object.isRequired,
	updateFish: React.PropTypes.func.isRequired,
	removeFish: React.PropTypes.func.isRequired,
	addFish: React.PropTypes.func.isRequired,
	loadSamples: React.PropTypes.func.isRequired,
}

export default Inventory;