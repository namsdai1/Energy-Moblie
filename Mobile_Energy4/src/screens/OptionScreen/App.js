import React,{useState} from 'react'
import {StyleSheet,Text,View,Modal,TouchableOpacity,SafeAreaView} from 'react-native'
import{OptionsPicket} from './OptionsPicket'
  
const App=()=>{
  const [chooseData,setchooseData]= useState('Setting');
  const [isModalVisible,setModalVisible]=useState(false);

  const changeModalVisibility =(bool)=>{
    setModalVisible(bool)
  }
  const setData = (option)=>{
    setchooseData(option)
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
      onPress={()=> changeModalVisibility(true)}
      style={styles.touchableOpacity}>
        <Text style={styles.text}>{chooseData}</Text>

      </TouchableOpacity>
      <Modal
          transparent={true}
          animationType="fade"
          visible={isModalVisible}
          nRequestClose={()=>changeModalVisibility(false)}
          >
          <OptionsPicket
            changeModalVisibility={changeModalVisibility}
            setData={setData}
          />
      </Modal>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent:'center',
    padding:10

  },
  text:{
    marginVertical:20,
    fontSize:20
  },
  touchableOpacity:{
    backgroundColor:'#e7f5fe',
    alignSelf:'stretch',
    paddingHorizontal:10,
    marginHorizontal:10
  }
});

export default App;