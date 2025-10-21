import { StatusBar } from 'expo-status-bar';
import React, { use } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getUser } from './functions/getUser';
import { useState, useEffect } from 'react';
import api from "./services/api"


export default function App() {
 
  const [data, setData] = useState([])
  const [err, setErr] = useState(false)

  useEffect(() => {
    getUser(setData, setErr)
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <View style={styles.container}>
      <Text>Dados do Backend</Text>
      <StatusBar style="auto" />

      {data.map((qualquercoisa) => (
          <View style={styles.task} key={qualquercoisa.id}>
            <Text style={styles.textTask}>{qualquercoisa.title}</Text>
            <Button title="excluir"/>
        </View>
        ))}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    paddingTop: 50,
    backgroundColor: "#F5F5F5"
  },

  title: {
    fontSize:20,
    marginBottom:5,
    color:"#333"
  },

  inputContainer:{
    flexDirection: "row",
    marginBottom: 20,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor:"#CCC",
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    marginRight: 10,
  },

  button: {
    backgroundColor:"#007bff",
    padding: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center"
  },

  task: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#FFF",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  textTask:{
    flex: 1,
    fontSize: 18,
  },

  completed: {
    textDecorationLine:"line-through",
    color: "#888"
  }



});
