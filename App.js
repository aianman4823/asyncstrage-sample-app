import React from 'react';
import {StyleSheet, Text, View, Button, Alert,TextInput} from 'react-native';
import {AsyncStorage} from 'react-native';


export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      title:'title',
      text:'text',
    }
  }

  storeData= async (title,text)=>{
    try{
      await AsyncStorage.setItem('title',title);
      await AsyncStorage.setItem('text',text)
    }catch(error){
      console.log(error);
    }
    Alert.alert(title+': stored');
    Alert.alert(text+': store');
  }

  getData =async () =>{
    try{
      const title = await AsyncStorage.getItem('title');
      const text =await AsyncStorage.getItem('text');
      if(title !== null && text !==null){
        Alert.alert(title);
        Alert.alert(text)
      }else{
        Alert.alert('We hava no data');
      }
    }catch(error){
      console.log(error);
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput
        style={{height:60,borderColor:'red',borderWidth:1,width:200}}
        onChangeText={(title)=>this.setState({title:title})}
        value={this.state.title}/>
        <TextInput
        style={{height:40,borderColor:'gray',borderWidth:1,width:200}}
        onChangeText={(text)=>this.setState({text:text})}
        value={this.state.text}/>
        
        <Button
        title='保存'
        onPress={()=>this.storeData(this.state.title,this.state.text)}/>
        <Button
        title='取得'
        onPress={()=>this.getData()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
