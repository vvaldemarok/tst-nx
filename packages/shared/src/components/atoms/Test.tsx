import React from "react";
import { Text, View } from "react-native";

export const TestUi: React.FC = () => {
	return (
		<>
			<View style={{
				flex: 1,
				backgroundColor: 'linen',
				borderRadius: 20,
				borderWidth: 14,
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<Text style={{
					alignSelf: 'center',
					lineHeight: 32,
					fontSize: 28,
					fontWeight: 'bold',
					color: 'coral'
				}}>
					3-th change, and version 1.0.5
				</Text>
			</View>
		</>
	)
}