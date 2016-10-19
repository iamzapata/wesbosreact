import React from 'react';

class AddFishForm extends React.Component {

	constructor() {
		super();
		this.state = {
			message: ""
		}
	}

	createFish(event) {
		event.preventDefault();

		const fish = {
			name: this.name.value,
			price: this.price.value,
			status: this.status.value,
			desc: this.desc.value,
			image: this.img.value
		}

		for(const key in fish)
		{
			if(!fish[key]) {
				this.setState({
					message: "Please fill in all the fields!"
				});
				return;
			}
		}		

		this.props.addFish(fish);
		this.fishForm.reset();
	}

	render() {
		return (
			<div>
				<div className="validation-message">{this.state.message}</div>
				<form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={this.createFish.bind(this)}>
					<input ref={(input) => this.name = input} type="text" placeholder="Fish Name"/>
					<input ref={(input) => this.price = input} type="text" placeholder="Fish Price"/>
					<select ref={(input) => this.status = input}>
						<option value="available">Fresh!</option>
						<option value="unavailable">Sold Out!</option>
					</select>
					<textarea ref={(input) => this.desc = input} placeholder="Fish Desc"></textarea>
					<input ref={(input) => this.img = input} type="text" placeholder="Fish Img"/>
					<button type="submit">+ Add Item</button>
				</form>		
			</div>
		) 
	}

}

AddFishForm.propTypes = {
	addFish: React.PropTypes.func.isRequired
}

export default AddFishForm;