import React,{useState} from 'react';
import {StyleSheet,
View,
Text,
Button,
TextInput,
} from 'react-native';

export default function App(){
	const [enteredGoal, setEnteredGoal] = useState();
	const [courseGoals,setCourseGoals] = useState([]);
	const inptutFunc = (inputChange)=>{
		setEnteredGoal(inputChange)
	}
	const addGoalHandler = (newGoal) =>{
		setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
	}
	return (
		<View>
			<TextInput  placeholder="LOL"  onChangeText={inptutFunc} value={enteredGoal}/>	
			<Button color="#990f99" title="button" onPress={addGoalHandler} />
			<View >
				{courseGoals.map((goal)=>
					<Text key={goal}>{goal}</Text>
				)}
			</View>
			
		</View>
	);

}
