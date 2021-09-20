import React, { useState } from "react";
import {  Button, Text, View,ScrollView, SafeAreaView, TouchableOpacity  } from "react-native";
import { db } from '../util/firebase';
import firebase from "firebase";
import { getDatabase, ref, set } from "firebase/database";
import FormInput from '../components/FormInput';
import TextButton from '../components/TextButton';
import { Styles } from '../components/Styles';











export default function AddLista() {

   const[description, setDescriotion] = useState("");
   const[img, setImg] = useState("");
   const[name, setName] = useState("");
   const[price, setPrice] = useState();
   const[time, setTime] = useState();
   const[subtitle, setSubtitle] = useState("");
   
    

//  function aux(){   
// let ref5 = db.collection('products').doc('asjgdjasd');
// ref5.set({description:'dbteste',img:'https://www.des1gnon.com/wp-content/uploads/2020/03/Pexels-Banco-de-Imagens-gratis-Des1gnON.jpg',name:'mulher',price: 45,subtitle:'abahsbhbdhabshda', time: 5}).then(()=>console.log("subtitle inserido"));

// function writeUserData(name,price) {
function writeUserData(description, img,name, price, time , subtitle) {
  var userId = '';
  var length = 9;
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  userId = result
  console.log("id "+userId);
  // let ref = db.collection('shopminders').doc(userId)
  let ref = db.collection('products').doc(userId)
  // ref.set({name:name,price:parseInt(price)})
  ref.set({description:description, img:img, name:name, price:parseInt(price), subtitle:subtitle,  time:parseInt(time)})
}

// function print(aux,aux2 ){
//   console.log(aux+" outra "+aux2);
// }



 

 
  return(
   
      
    <ScrollView>
      <View  style={Styles.safeview, {flex:2,margin:10, marginTop:30, justifyContent: 'space-between'} }>
        
          {/* <TextInput 
            style = {styles.input}
            value = {name}
            placeholder = "Nome: "
            onChangeText = {(text) =>{
               setName(text)
               console.log(name)
               aux = name
            }}
            /> */}

          <FormInput title = 'Descrição' holder = 'Descrição' value = {description} onChangeText = {(text) =>{ setDescriotion(text) }} />
          <FormInput title = 'Link da Imagen' holder = 'Link da Imagen' value = {img} onChangeText = {(text) =>{ setImg(text) }} />
          <FormInput title = 'Nome' holder = 'Nome' value = {name} onChangeText = {(text) =>{ setName(text) }} />
          <FormInput title = 'Preço' holder = 'Preço' value = {price} onChangeText = {(number) =>{ setPrice(number) }} />
          <FormInput title = 'Subtitulo' holder = 'Subtitulo' value = {subtitle} onChangeText = {(text) =>{ setSubtitle(text) }} />
          <FormInput title = 'Tempo' holder = 'Tempo' value = {time} onChangeText = {(text) =>{ setTime(text) }} />

          <TextButton style={{ marginTop: 30 }} title='ENVIAR' onPress={()=>writeUserData(description, img,name, price, time , subtitle)} />
          {/* <Button 
            title='ENVIAR'
            onPress={()=>
              writeUserData(name, price)
            } /> */}
            
          {/* <Button
            title="Right button"
            onPress={() =>
                        
              writeUserData(name)
          }
          />  */}
          

          
          
      </View>
      </ScrollView>
      
  );

}


