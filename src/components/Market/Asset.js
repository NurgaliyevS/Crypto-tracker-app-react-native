import { View, Text, StyleSheet, Image } from 'react-native';

import styled from 'styled-components/native';

export function Asset({ source, title, price, percentage, isPositive }) {
    return (
        <View style={asset.container}>
            <View style={asset.first}>
                <View style={crypto.container}>
                    <Image
                        source={source}
                        style={crypto.icon}
                    />
                    <TextDefault
                        style={crypto.title}
                    >
                        {title}
                    </TextDefault>
                </View>

            </View>
            <View style={asset.second}>
                <TextPrice style={asset.title}>{price}</TextPrice>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    TextDefaultCommon: {
        color: '#FFFFFF',
    },
});

const asset = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 25,
        paddingLeft: 30,
        paddingRight: 30,
    },
    title: {
        fontSize: 15
    },
    first: {
        flex: 1.5,
        backgroundColor: 'white',
    },
    second: {
        flex: 1.5,
        backgroundColor: 'red',
        flexDirection: 'column'
    },
});

const crypto = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    icon: {
        width: 30,
        height: 30,
        marginTop: 20,
        width: '22%',
        backgroundColor: 'black',
    },
    price: {
        marginTop: 34,
    }
})

const TextPrice = styled.Text`
  color: white;
  text-align: right;
`;

const TextDefault = styled.Text`
  color: white;
`;