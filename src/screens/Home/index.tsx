import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native'
import { useState } from 'react'
import { styles } from './styles'
import { Participant } from '../../components/Partcipant/'



export function Home(){

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  const handleAddParticipant = () =>{
    if(participants.includes(participantName)){

       return Alert.alert('Falha', 'nome já existente na lista')
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('');
  }

  const handleRemoveParticipant = (name: string ) => {

  console.log(participants)

    Alert.alert('Remover', `Deseja remover o ${name} das lista de convidado?`, [
      {
        text: 'Sim',
        onPress: ()=> setParticipants(prevState => prevState.filter(participant => participant !== name))
      },

      {
        text: 'Não',
        style: 'cancel'
      }
    ])
    
  }

  

  return(
  <View style={styles.container}>

      <Text style={styles.eventName}> Nome do Evento </Text>

      <Text style={styles.infoDate}> Sexta, 24 de Junho de 2023.</Text>

     <View style={styles.forms}>
       <TextInput style={styles.input_outline} 
                 placeholder="Nome do participante" 
                 placeholderTextColor="#6B6B6B" 
                 onChangeText={ e => setParticipantName(e) }
                 value={participantName}     
       />

       <TouchableOpacity style={styles.btn} onPress={handleAddParticipant}>
        <Text style={styles.buttonTxt}> + </Text>
       </TouchableOpacity>
      </View>

    <FlatList 
       data={participants} 
       keyExtractor={item => item}
       renderItem={({ item }) => (
       <Participant 
        key={item} name={item}  
        onRemove={ ()=>handleRemoveParticipant(item)} 
       />
    )} 
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={()=> (
      <Text style={styles.listEmptyTxt}> Ninguém foi adicionado ainda! Por favor adicione um convidado</Text>
    )}
    />

  </View>
        
    
  
  )
}