import React, {useState} from "react";
//useState -> guardar e atualizar os dados na tela
import {
  Text, // -> texto
  View, // -> container
  TextInput, // -> campo de texto
  TouchableOpacity, // -> botão
  FlatList, // -> lista
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Tarefa = {
  id: string;
  nome: string;
  concluida: boolean;
};
export default function HomeScreen() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  //criar a função cadastrar
  const addTarefa = () =>{
    const text = tarefa.trim();
    //verificar se a tarefa não está vazia
    if (!text) return;
    

  }
}

