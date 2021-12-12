import React from 'react'
import{StyleSheet,View,TouchableOpacity,Dimension,ScrollView, Dimensions}from 'react-native'
import Metarial from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Block,
    Header,
    Thumbnail,
    Button,
    Text,
    ProductFlatList,
    ProductGridList,
  } from '@components';
  import {icons} from '@assets';
const OPTIONS = [{name:'Settings',icon:'history'},{name:'Lịch Sử Mua Hàng ',icon:'history'},{name:'Danh Sách Yêu Thích',icon:'heart-outline'},{name:'Trợ Giúp ',icon:'help'},{name:'Chế Độ Tối',icon:'brightness-4'},{name:'Đổi Mật Khẩu',icon:'key-change'},{name:'Thông Báo',icon:'bell-alert-outline'},{name:'Đăng xuất',icon:'logout-variant'}]

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');
const OptionsPicket = ()=>{    

 
    return (
        <Block>
            <Header title="Options" iconLeft={icons.back}/>
            {
                OPTIONS.map((item,index)=>
                <TouchableOpacity 
                    style={styles.option}
                    key={index}
                    onPress={()=>onPressItem(option)}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent: 'center'}}
                        >
                        <Metarial name={item.icon} size={30}  />
                        <Text style={styles.text}>
                            {item.name}
                        </Text>
                        </View>
                    </TouchableOpacity>
                )
            }
        </Block>
    )

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10
    },
    modal:{
        backgroundColor:'white',
        borderRadius:10,

    },
    option:{
        alignItems:'flex-start',
        backgroundColor:'#F0F4F8',
        marginTop:10, 
        borderRadius:5, 
        marginRight:150,
        width:width,
        borderRadius:10,
        padding:5,

    },
    text:{
        margin:5,
        maxHeight:150,
        fontSize:20,
        fontWeight:'bold', 
        marginLeft:5,
        paddingHorizontal:10,
        marginVertical:10,  
        
        

    }
})
export default OptionsPicket;
