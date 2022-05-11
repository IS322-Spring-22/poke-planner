import Resistances from "./resistances"; // Resistance Count
import Types from "./types"; // Type weaknesses/immunities


export function createResistances(teamTypes) {
	const typeList = unpackArray(teamTypes);

	typeList.forEach(function(pokemonType) {
		evaluateResistances(pokemonType);
	});

	return Resistances;
}

function unpackArray(teamTypes) {
	return teamTypes.map( typeObj => typeObj.map( typeName => typeName.type.name) )
}

function evaluateResistances(pokemonType) {
	var typeList = pokemonType.map(function(type) {
		return Types[type];
	});
	console.log(typeList);
	typeList.forEach(function(type) {
		evaluateType(type);
	});
}

function evaluateType(type) {
	var half = type.getHalf();
	var double = type.getDouble();
	var immunities = type.getImmunities();

	half.forEach(function(typeName) {
		Resistances[typeName].half++;
	})

	double.forEach(function(typeName) {
		Resistances[typeName].double++;
	})

	immunities.forEach(function(typeName) {
		Resistances[typeName].immune++;
	})
}