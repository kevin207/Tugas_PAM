import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

const List = (props) => {
    return(

        <View style={styles.list}>

            <View style={styles.list_item}> 

                <View style={styles.top_item}>
                    <Text style={styles.toptext}>
                        {props.keberangkatan} - {props.tujuan}
                    </Text>
                </View>

                <View style={styles.bottom_item}>
                    <View style={styles.bottom_item_left}>
                        <Fontisto name="plane" size={35} color="#7ca84d" />
                        <Text style={styles.left_text}>Majapahit Air</Text>
                    </View>
                    <Text style={styles.bottom_item_right}>{props.tanggal}</Text>
                </View>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    list:{
        backgroundColor: 'white',
        marginTop: '4%',
        width:'92%',
        height: '15%',
        alignSelf:'center',
        elevation: 5,
    },

    top_item:{
        marginLeft: '4%',
        marginTop: '5%',
    },

    toptext:{
        fontSize: 20,
    },

    bottom_item:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '10%'
    },

    bottom_item_left:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '4%',
    },

    bottom_item_right:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '5%',
        fontSize: 20,
        marginTop: '1%'
    },
    
    left_text:{
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: '5%'
    },

})

export default List;