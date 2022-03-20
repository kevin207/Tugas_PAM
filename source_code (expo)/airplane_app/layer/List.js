import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { FontAwesome5, Ionicons, Fontisto } from '@expo/vector-icons';

import { BANDARA, MASKAPAI, JADWAL } from '../data/data';

const ListScreen = ({navigation, route}) => {

  function NoFlight() {
    return (        
      <Text style={styles.empty}>Hasil Pencarian Tidak Ditemukan</Text>  
    );
  }

  function ListJadwal(result){
    return (
      <FlatList style={styles.flat}

        data = {result}
        renderItem = {({item}) => (

          <View style={styles.card_item}>

            <View style={styles.top_item}>
              <Text style={styles.top_text}>
                {BANDARA.find(src => src.bandara_id == item.bandara_id_keberangkatan).bandara_nama}  {'-'}  {BANDARA.find(sub => sub.bandara_id === item.bandara_id_kedatangan).bandara_nama}
              </Text>
            </View>

            <View style={styles.bottom_item}>

              <View style={styles.bottom_item_left}>
                <Fontisto name="plane" size={32} color="#7ca84d"/>
                <Text style={styles.left_text}> {MASKAPAI.find(src => src.maskapai_id === item.maskapai_id).maskapai_nama} </Text>
              </View>

              <Text style={styles.bottom_item_right}> {JADWAL.find(src => src.tanggal === item.tanggal).tanggal} </Text>
              
            </View>

          </View>
            
        )}
        keyExtractor={item => item.jadwal_id}

      />
    );
  }

  function CardList(){

    if (route.params.keberangkatan === '' || route.params.tujuan === '' || route.params.tanggal=== '')
    {
        return NoFlight();
    }
    
    else
    {
      const depature = BANDARA.find(id => id.bandara_nama.toLowerCase() === route.params.keberangkatan.toLowerCase()).bandara_id;
      const arrival = BANDARA.find(id => id.bandara_nama.toLowerCase() === route.params.tujuan.toLowerCase()).bandara_id;
      const result = JADWAL.filter(id => id.bandara_id_keberangkatan.toLowerCase() === depature.toLowerCase() && id.bandara_id_kedatangan.toLowerCase() === arrival.toLowerCase() && id.tanggal === route.params.tanggal.toLowerCase());

      let card_list = (result.length >= 1) ? ListJadwal(result) : NoFlight();

      return card_list;
    }
  }

  return (

    <View style={styles.container} >

      <View style={styles.header_list}>

        <View style={styles.head_item}>
          <TouchableOpacity onPress={ () => navigation.goBack() }>
            <Ionicons name="return-up-back" size={40} color="white" />
          </TouchableOpacity>

          <Text style={styles.head_title2}>Hilling.id</Text>
          <FontAwesome5 name="user-alt" size={35} color="white" />

        </View>

        <View style={styles.title_list}>
          <Text style={styles.list_title}>Hasil Pencarian Penerbangan</Text>
          <Text style={styles.list_title}>{route.params.tanggal}</Text>
        </View>

      </View>

      <View style={styles.card}>                  
        <CardList/>
      </View>

      <View style={styles.footer}> 
        <Text style={styles.copyright}>Copyright Kevin Tanuwijaya - 119140207 </Text>
      </View>

    </View>
    
  )

}

const styles = StyleSheet.create({

  flat:{
    width:'99%',
    height:'72%',
  },

  container:{
    flex: 1,
    backgroundColor: '#dfe6d8',
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
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '15%'
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
    marginTop:2,
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

  card:{ 
    marginTop: '2%',
    alignItems: 'center',
    marginHorizontal:'2%'
  },

  card_item:{
    backgroundColor: 'white',
    marginTop: "1%",
    elevation: 3,
    marginHorizontal: 2,
    marginVertical: 8,
  },

  top_item:{
    marginLeft: '4%',
    marginTop: '4%',
  },

  top_text:{
    fontSize: 20,
  },

  bottom_item:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '9%',
    marginBottom: '4%',
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
      marginTop: '1%',
      color: 'blue'
  },

  left_text:{
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft: '2%'
  },
  
  empty:{
    fontSize:18,
    marginTop:'50%'
  },

});

export default ListScreen;