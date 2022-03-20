import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Alert } from 'react-native';
import { FontAwesome5, Fontisto, Octicons} from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {

  const [Keberangkatan, SetKeberangkatan] = useState('');
  const [Tujuan, SetTujuan] = useState('');
  const [Tanggal, SetTanggal] = useState('');

  const button = () => {

    if (Keberangkatan === '' || Tujuan === '' || Tanggal === '')
    {
      Alert.alert("Input Error")
    }

    else
    {
      navigation.navigate('ListScreen',{ keberangkatan : Keberangkatan, tujuan : Tujuan, tanggal : Tanggal })
    }
    
  }

  return(
      
    <View style={styles.container}>
        
        <View style={styles.header}>

            <View style={styles.head_item}>
                <Octicons name="three-bars" size={45} color="white" />
                <FontAwesome5 name="user-alt" size={35} color="white" />
            </View>

            <Text style={styles.head_title}>Hilling.id</Text>

        </View>

        <View style={styles.form_input}>

            <SafeAreaView style={styles.input_1}>

                <Text style={styles.input_title}>Lokasi Keberangkatan</Text>

                <SafeAreaView style={styles.box1}>
                    <FontAwesome5 style={styles.form_logo} name="plane-departure" size={15.5} color="#7ca84d" />
                    <TextInput 
                        style={styles.text_input} 
                        placeholder='Masukkan lokasi keberangkatan' 
                        onChangeText={(text) => SetKeberangkatan(text)}
                        value={Keberangkatan}
                    />
                </SafeAreaView>

            </SafeAreaView>

            <SafeAreaView style={styles.input_2}>

                <Text style={styles.input_title}>Lokasi Tujuan</Text>

                <SafeAreaView style={styles.box1}>
                    <FontAwesome5 style={styles.form_logo} name="plane-arrival" size={15.5} color="#7ca84d" />
                    <TextInput 
                        style={styles.text_input} 
                        placeholder='Masukkan lokasi tujuan'
                        onChangeText={(text) => SetTujuan(text)}
                        value={Tujuan}
                    />
                </SafeAreaView>

            </SafeAreaView>

            <SafeAreaView style={styles.input_3}>

                <Text style={styles.input_title}>Tanggal Keberangkatan</Text>

                <SafeAreaView style={styles.box1}>
                    <Fontisto style={styles.form_logo} name="date" size={20} color="#7ca84d" />
                    <TextInput 
                        style={styles.text_input} 
                        placeholder='Masukkan tanggal keberangkatan'
                        onChangeText={(text) => SetTanggal(text)}
                        value={Tanggal}
                    />
                </SafeAreaView>

            </SafeAreaView>

            <TouchableOpacity style={styles.button} onPress={button}>
                <Text style={styles.button_text}>Cari</Text>
            </TouchableOpacity>

        </View>

        <View style={styles.footer}> 
            <Text style={styles.copyright}>Copyright Kevin Tanuwijaya - 119140207 </Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#dfe6d8',
  },

  header:{
    width: '100%',
    height: '60%',
    backgroundColor: '#7ca84d',
    borderBottomLeftRadius: 10.,
    borderBottomRightRadius: 10,
  },

  header_list:{
    width: '100%',
    height: '23%',
    backgroundColor: '#7ca84d',
    borderBottomLeftRadius: 10.,
    borderBottomRightRadius: 10,
  },

  head_item:{
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginLeft: '8%',
    marginRight: '8%',
    marginTop: '18%'
  },

  head_title:{
    alignSelf: 'center',
    marginTop: '12%',
    fontSize:40,
    color: 'white',
  },

  head_title2:{
    alignSelf: 'center',
    fontSize:40,
    color: 'white',
  },

  title_list:{
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '8%'
  },

  list_title:{
    color: 'white',
    fontSize: 20,
  },

  form_input:{
    backgroundColor: 'white',
    width: '85%',
    height: '45%',
    borderRadius: 15,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '62%',
    elevation: 3,
  },

  button:{
    marginTop: 50,
    backgroundColor: '#e87f0e',
    width: '85%',
    height: 35,
    borderRadius: 5,
    alignSelf: 'center',
  },

  button_text:{
    textAlign: 'center',
    paddingTop: '3%',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },

  input_1:{
    marginLeft: 25,
    marginTop: 30,
    marginBottom: 20,
  },

  input_2:{
    marginLeft: 25,
    marginBottom: 20,
  },

  input_3:{
    marginLeft: 25,
    marginBottom: 20,
  },

  text_input:{
    height: 35,
    width: '87.5%',
    borderLeftWidth: 1.5,
    borderColor: 'gray',
    paddingLeft: 8,
  },

  input_title:{
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 3,
  },

  footer:{
    position: 'absolute',
    bottom: 20,
    width: '100%'
  },

  copyright:{ 
    color: '#828282',
    textAlign: 'center',
    fontSize: 15,
  },

  box1:{
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 5,
    width: "92%",
  },

  form_logo:{
    marginLeft: 8,
    marginRight: 8,
  },

  header_item:{
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginLeft: '4%',
    marginRight: '5%',
    marginTop: '15%'
  },

});
  
export default HomeScreen;