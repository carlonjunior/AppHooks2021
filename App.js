import React, { useState, useEffect, useMemo, useRef } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { AntDesign } from "@expo/vector-icons";
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, TouchableHighlight } from 'react-native';

export default function AppView() {


  const realizarButton = useRef < TouchableHighlight > (null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.div}>
        <View style={styles.div2}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>

        <View style={styles.div3}>
          <Text style={styles.prod}>Iphone 5 </Text>
          <Text style={styles.quant}>Quantidade: {null}</Text>
          <View style={styles.divb}>
            <TextInput style={styles.tinput}
              onChangeText={null}
              placeholder="0"
              keyboardType="numeric"
            />
            <AntDesign
              style={styles.btn}
              name="pluscircle"
              size={20}
              color="green"
              onPress={null}
            />
          </View>
        </View>
      </View>

      <View>
        <TouchableHighlight style={styles.btnfin} onPress={() => realizarPedidoButton.current?.focus()}>
          <Text>FINALIZAR</Text>
        </TouchableHighlight>
      </View>



      <View>
        <TouchableHighlight style={styles.btnre} onPress={null}>
          <View style={{flexDirection: 'row'}}>
          <AntDesign style={{ paddingRight: 4 }} name="shoppingcart" size={24} color="#fff" />
          <Text style={styles.txt}>Realizar Pedido</Text>
          </View>
        </TouchableHighlight>
      </View>




    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  div: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: 230,
    height: 100,
    alignItems: 'center',
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10
  },
  prod: {
    fontSize: 22
  },
  quant: {
    fontSize: 12
  },
  tinput: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    height: 20,
    width: 45,
    textAlign: 'center'
  },
  tinyLogo: {
    height: 50,
    width: 50,
  },
  divb: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  btn: {
    marginTop: 8,
  },
  txt: {
    fontSize: 20,
    color: "white"
  },
  btnfin: {
    borderWidth: 1,
    backgroundColor: "#BEBEBE",
    alignItems: 'center',
    borderRadius: 3,
    marginTop: 10
  },
  btnre: {
    marginTop: 380,
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "green"

  }
});